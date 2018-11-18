// Core
import React from 'react'
import {connect} from 'react-redux'
// Components
import {Link} from 'react-router-dom'
// Containers
import {i18n} from '01-containers/i18n'
// Actions
import {getRandomDogUrl} from '02-actions/dog/DispatchFunctions'
// Constants
import {HOME} from '05-constants/router'
// Style
import './style.less'


function renderImg(url, className = 'dog__img'){
	return url ? <img className={className} src={url} title="Dog picture"/> : null
}

function mapStateToProps(state){
	return {
		url: state.getIn(['dog', 'url'])
	}
}

@connect(mapStateToProps, {
	getRandomDogUrl,
})
@i18n()
export default class DogContainer extends React.Component {

	componentDidMount(){
		this.bindReload()
		this.props.getRandomDogUrl()
	}

	componentWillUnmount(){
		this.unbindReload()
	}

	bindReload(){
		window.addEventListener('keypress', this.handleKeypressReload)
	}

	unbindReload(){
		window.removeEventListener('keypress', this.handleKeypressReload)
	}

	handleKeypressReload = evt => {
		if(evt.key === 'r' || evt.key === 'R'){
			this.props.getRandomDogUrl()
		}
	}

	renderUrl(url){
		return url ? <p><a href={url} target='_blank'>Dog</a></p> : null;
	}

	render(){
		return (
			<div className="dog">
				<h2>{this.props.locale.DOG_PAGE}</h2>
				{renderImg(this.props.url, this.props.locale.DOG_IMG_TITLE)}
				<h5 className="dog__link">{this.renderUrl(this.props.url)}</h5>
				<Link to={HOME}>{this.props.locale.BACK_HOME}</Link>
			</div>
		)
	}

}