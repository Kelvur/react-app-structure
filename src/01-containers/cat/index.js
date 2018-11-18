// Core
import React from 'react'
import {connect} from 'react-redux'
// Components
import {Link} from 'react-router-dom'
// Containers
import {i18n} from '01-containers/i18n'
// Actions
import {getRandomCatUrl} from '02-actions/cat/DispatchFunctions'
// Constants
import {HOME} from '05-constants/router'
// Style
import './style.less'



function renderImg(url, title, className = 'cat__img'){
	return url ? <img className={className} src={url} title={title}/> : null
}

function mapStateToProps(state){
	return {
		url: state.getIn(['cat', 'url']),
	}
}

@connect(mapStateToProps, {
	getRandomCatUrl
})
@i18n()
export default class CatContainer extends React.Component {

	componentDidMount(){
		this.bindReload()
		this.props.getRandomCatUrl()
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
			this.props.getRandomCatUrl()
		}
	}

	renderUrl(url){
		return url ? <p><a href={url} target='_blank'>Cat</a></p> : null
	}

	render(){
		return (
			<div className="cat">
				<h2>{this.props.locale.CAT_PAGE}</h2>
				{renderImg(this.props.url, this.props.locale.CAT_IMG_TITLE)}
				<h5 className="cat__link">{this.renderUrl(this.props.url)}</h5>
				<Link to={HOME}>{this.props.locale.BACK_HOME}</Link>
			</div>
		)
	}

}
