// Core
import React from 'react'
import {connect} from 'react-redux'
// Components
import {Link} from 'react-router-dom'
// Actions
import {getRandomDogUrl} from '02-actions/dog/DispatchFunctions'
// Constants
import {HOME} from '05-constants/router'


function mapStateToProps(state){
	return {
		url: state.getIn(['dog', 'url'])
	}
}

@connect(mapStateToProps, {
	getRandomDogUrl,
})
export default class DogContainer extends React.Component {

	componentDidMount(){
		this.props.getRandomDogUrl();
	}

	renderUrl(url){
		return url ? <p><a href={url} target='_blank'>Dog</a></p> : null;
	}

	render(){
		return (
			<div>
				<h2>Dog</h2>
				{this.renderUrl(this.props.url)}
				<Link to={HOME}>Go back to Home</Link>
			</div>
		)
	}

}