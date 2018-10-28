// Core
import React from 'react'
import PropTypes from 'proptypes'
// Containers
import {i18n} from '01-containers/i18n'
// Constants
import {GENERIC_LOCALE_LIST} from '05-constants/locale'


@i18n({changeLocale: true})
export default class SelectLocale extends React.Component {

	static propTypes = {
		onChange: PropTypes.func,
	}

	handleChange = event => {
		if(this.props.onChange){
			this.props.onChange(event.target.value)
		} else {
			this.props.changeLocale(event.target.value);
		}
	}

	render(){
		return (
			<select onChange={this.handleChange}>
				{Object.keys(GENERIC_LOCALE_LIST).map((locale, key) => <option key={key} value={locale}>{locale}</option>)}
			</select>
		)
	}

}