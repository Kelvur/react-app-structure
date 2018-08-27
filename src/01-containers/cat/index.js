// Core
import React from 'react'
import {connect} from 'react-redux'
// Components
import {Link} from 'react-router-dom'
// Actions
import {getRandomCatUrl} from '02-actions/cat/DispatchFunctions'
// Constants
import {HOME} from '05-constants/router'
// Style
import './style.less'


function mapStateToProps(state){
	return {
		url: state.getIn(['cat', 'url']),
	}
}

@connect(mapStateToProps, {
	getRandomCatUrl
})
export default class CatContainer extends React.Component {

	componentDidMount(){
		this.props.getRandomCatUrl();
	}

	renderUrl(url){
		return url ? <p><a href={url} target='_blank'>Cat</a></p> : null
	}

	render(){
		return (
			<div className="cat">
				<h2>Cat Page</h2>
				<h5 className="cat__link">{this.renderUrl(this.props.url)}</h5>
				<Link to={HOME}>Go back to Home</Link>
			</div>
		)
	}

}
