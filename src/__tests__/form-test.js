import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import Form from '../form'

describe('The form', () => {
  it('initially looks as expected', () => {
    const subject = shallow(<Form />)
    expect(subject).toMatchSnapshot()
  })

  it('displays the "navn" field as success when anything is entered', () => {
    const subject = shallow(<Form />)

    console.info(subject.find('input[name="navn"]').prop('class'))
    //expect(subject.find('input[name="navn"]'))
  })
})
