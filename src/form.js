import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navn: '',
      tlf: '',
      jegErEnig: false
    }
  }

  submitForm = evt => evt.preventDefault()

  changeNavn = evt => this.setState({ navn: evt.target.value })

  changeTlf = evt => this.setState({ tlf: evt.target.value })

  changeEnig = evt => this.setState({ jegErEnig: !this.state.jegErEnig })

  render() {
    const { navn, tlf, jegErEnig } = this.state

    const navn_komplet = navn.length > 0
    const tlf_komplet =
      tlf.match(/^[0-9]{2}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}$/g) != null

    const formKomplet = navn_komplet && tlf_komplet && jegErEnig

    return (
      <form className="box" noValidate onSubmit={this.submitForm}>
        <div className="field">
          <label htmlFor="navn" className="label">
            Navn
          </label>
          <div className="control has-icons-left">
            <input
              type="text"
              name="navn"
              className={'input ' + (navn_komplet ? 'is-success' : 'is-danger')}
              defaultValue={navn}
              onChange={this.changeNavn}
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-user" />
            </span>
          </div>
        </div>

        <div className="field">
          <label htmlFor="tlf" className="label">
            Telefonnummer
          </label>
          <div className="control has-icons-left">
            <input
              type="tel"
              name="tlf"
              className={'input ' + (tlf_komplet ? 'is-success' : 'is-danger')}
              defaultValue={tlf}
              onChange={this.changeTlf}
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-phone" />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                name="jegErEnig"
                onChange={this.changeEnig}
                checked={jegErEnig}
                required
              />
              &nbsp;Jeg lyver ikke
            </label>
          </div>
        </div>

        <div className="field">
          <button
            className="button is-primary"
            type="submit"
            disabled={!formKomplet}
          >
            OK
          </button>
        </div>
      </form>
    )
  }
}
