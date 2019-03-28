import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'

// Create somewhere to hang React
let root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<App />, root)
