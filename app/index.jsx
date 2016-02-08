import React from 'react'
import ReactDOM from 'react-dom'
// files
import Root from './root/root.jsx'
import configureStore from './redux/store/configureStore'
import './main.css'

const store = configureStore()

const app = document.createElement('div')
document.body.appendChild(app)

ReactDOM.render(<Root store={store} />, app)