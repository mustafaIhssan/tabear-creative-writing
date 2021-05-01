import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const Languages = ['en', 'ar']

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ar from './translation/ar'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import en from './translation/en'

i18n
	.use(Backend)
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
