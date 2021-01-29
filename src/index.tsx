import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'
import './styles/index.css'
import './styles/tailwind.output.css'

import reportWebVitals from './report-web-vitals'
import { App } from './app'
import './i18n'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// @ts-ignore
reportWebVitals()
