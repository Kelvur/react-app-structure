// Core
import React from 'react'
// Containers
import I18n from '01-containers/i18n'
import Header from '01-containers/header'
// Constants
import {LOCALE_LIST} from '05-constants/locale'
// Style
import 'style/style.less'


export default class App extends React.Component {

	render(){
		return (
			<I18n>
				<Header/>
				{this.props.children}
			</I18n>
		)
	}

}
