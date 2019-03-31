import React from 'react'
import Form from './form'

export default class App extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">Indtast navn og telefonnummer</h1>
          <h2 className="subtitle">React version</h2>
          <Form />
        </div>
      </div>
    )
  }
}
