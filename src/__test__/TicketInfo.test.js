/*eslint-disable*/
import React from 'react'
import renderer from 'react-test-renderer'
import TicketInfo from '../pages/LandingPage'

it('renders correctly', () => {
  const tree = renderer.create(<TicketInfo />).toJSON()
  expect(tree).toMatchSnapshot()
})
