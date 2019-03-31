import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import Form from '../form'

describe('The form', () => {
  it('initially looks as expected', () => {
    const subject = shallow(<Form />)
    expect(subject).toMatchSnapshot()
  })

  it('displays the "navn" field as success when anything is entered', () => {
    const wrapper = mount(<Form />)

    const control = wrapper.find('input[name="navn"]')

    expect(control.hasClass('is-danger')).toEqual(true)
    expect(control.hasClass('is-success')).toEqual(false)

    control.simulate('change', {
      target: {value: 'Hans'}
    })

    expect(wrapper.find('input[name="navn"]').hasClass('is-danger')).toEqual(false)
    expect(wrapper.find('input[name="navn"]').hasClass('is-success')).toEqual(true)
  })

})
