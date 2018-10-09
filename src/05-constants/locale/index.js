// Constants - locale
import enUS, {EN_US_NUMBER_FORMAT, EN_US_DATE_FORMAT} from '05-constants/locale/en-US'
import esES, {ES_ES_NUMBER_FORMAT, ES_ES_DATE_FORMAT} from '05-constants/locale/es-ES'


export const LOCALE_LIST = {
	'en': 'en',
	'en-US': 'en-US',
	'es': 'es',
	'es-ES': 'es-ES',
}

export const GENERIC_LOCALE_LIST = { // ISO 3166-1 
	'en': LOCALE_LIST['en'],
	'es': LOCALE_LIST['es'],
}

export const EXPECIFIC_LOCALE_LIST = { // IETF Language tag for regional variety
	'en-US': LOCALE_LIST['en-US'],
	'es-ES': LOCALE_LIST['es-ES'],
}

export default {
	'en': enUS,
	'en-US': enUS,
	'es': esES,
	'es-ES': esES,
}
