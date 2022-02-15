/*eslint-disable*/
import React from 'react'
import renderer from 'react-test-renderer'
import AdminLogin from '../pages/AdminLogin'

it('renders correctly', () => {
  const tree = renderer.create(<AdminLogin />).toJSON()
  expect(tree).toMatchSnapshot()
})
