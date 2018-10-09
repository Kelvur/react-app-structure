// Core
import React from 'react'
// Constants
import LOCALE, {LOCALE_LIST, GENERIC_LOCALE_LIST} from '05-constants/locale'


const DEFAULT_LOCALE = LOCALE_LIST.en;

export function isValidLocale(localeToEvaluate){
	return !!Object.keys(LOCALE_LIST).find(locale => locale === localeToEvaluate)
}

export function isValidGenericLocale(localeToEvaluate){
	return !!Object.keys(GENERIC_LOCALE_LIST).find(locale => locale === localeToEvaluate)
}

export function printError_invalidLocale(invalidLocale){
	console.error(`I18nProvider - Invalid locale prop given: ${invalidLocale}. The valid locale posibilities are: ${LOCALE_LIST}`)
}

const {Provider, Consumer} = React.createContext({});

export default class I18n extends React.PureComponent {

	state = {
		currentLocale: DEFAULT_LOCALE
	}

	changeLocale(newLocale){
		if(isValidGenericLocale(newLocale)){
			this.setState({currentLocale: newLocale});
		} else {
			printError_invalidLocale(newLocale);
		}
	}

	render(){
		return (
			<Provider value={{locale: LOCALE, changeLocale: this.changeLocale.bind(this), currentLocale: this.state.currentLocale}}>
				{this.props.children}
			</Provider>
		)
	}

}

export const i18n = (options = {}) => WrappedComponent => {
	class I18nConsumer extends React.Component {

		addExtraProps(props, {locale, currentLocale, changeLocale}){
			const localeProps = {
				locale: locale[currentLocale],
				currentLocale,
				...props,
			}
			if(options.changeLocale) defaultProps.changeLocale = changeLocale;
			// number format
			// function formatNumber
			// date format
			// function formatDate
			return localeProps
		}

		render(){
			return (
				<Consumer>
					{info => React.createElement(WrappedComponent, this.addExtraProps(this.props, info))}
				</Consumer>
			)
		}
	}
	return I18nConsumer;
}