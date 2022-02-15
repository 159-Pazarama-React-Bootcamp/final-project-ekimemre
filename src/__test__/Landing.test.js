/*eslint-disable*/
import React from 'react'
import renderer from 'react-test-renderer'
import Landing from '../pages/LandingPage'

it('renders correctly', () => {
  const tree = renderer.create(<Landing />).toJSON()
  expect(tree).toMatchSnapshot()
})
