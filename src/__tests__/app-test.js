import React from 'react'
import renderer from 'react-test-renderer'
import App from '../app'

it('Looks as expected', () => {
  const subject = renderer.create(<App />)
  expect(subject.toJSON()).toMatchSnapshot()
})
