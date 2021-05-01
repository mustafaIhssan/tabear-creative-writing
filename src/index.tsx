import 'antd/dist/antd.css'
import './styles/index.css'
import './styles/tailwind.output.css'
import './i18n'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './app'
import reportWebVitals from './report-web-vitals'

ReactDOM.render(<App />, document.querySelector('#root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
reportWebVitals()
