/* eslint-disable no-undef */
import React from 'react'
import testRender from 'react-test-renderer'
import Login from './login'

describe('App Login Component', () => {
  it('Should render the login component', () => {
    const LoginComp = testRender.create(<Login />).toJSON()
    expect(LoginComp).toMatchSnapshot()
  })
})
