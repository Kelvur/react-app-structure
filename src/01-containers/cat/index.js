// Core
import React from 'react'
import {connect} from 'react-redux'
// Components
import {Link} from 'react-router-dom'
// Actions
import {getRandomCatUrl} from '02-actions/cat/DispatchFunctions'
// Constants
import {HOME} from '05-constants/router'


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
			<div>
				<h2>Cat</h2>
				{this.renderUrl(this.props.url)}
				<Link to={HOME}>Go back to Home</Link>
			</div>
		)
	}

}
