// Core
import React from 'react'
// Containers
import {i18n} from '01-containers/i18n'
import SelectLocale from '01-containers/selectLocale'


@i18n()
export default class HeaderContainer extends React.PureComponent {

	render(){
		return (
			<header className="app-header">
				<span>{this.props.locale.APP_TITLE}</span>
				<SelectLocale/>
			</header>
		)
	}

}
