import React from 'react'
import Form from './form'

export default class App extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <h2 className="title">Indtast navn og telefonnummer</h2>
          <Form />
        </div>
      </div>
    )
  }
}
