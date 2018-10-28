// Core
import React from 'react'
// Components
import SelectLocale from '00-components/styledSelectLocale'
// Containers
import {i18n} from '01-containers/i18n'


@i18n()
export default class HeaderContainer extends React.PureComponent {

	render(){
		return (
			<header className="app-header">
				<span className="app-header__title">{this.props.locale.APP_TITLE}</span>
				<div className="locale-box">
					<SelectLocale/>
				</div>
			</header>
		)
	}

}
