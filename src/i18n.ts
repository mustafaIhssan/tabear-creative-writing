import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const Languages = ['en', 'ar']

// @ts-ignore
import en from './translation/en'
// @ts-ignore
import ar from './translation/ar'

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'ar',
		// debug: true,
		resources: {
			en,
			ar,
		},
		whitelist: Languages,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	})

export default i18n
