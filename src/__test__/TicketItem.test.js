/*eslint-disable*/
import React from 'react'
import renderer from 'react-test-renderer'
import TicketItem from '../pages/TicketItem'

it('renders correctly', () => {
  const tree = renderer.create(<TicketItem />).toJSON()
  expect(tree).toMatchSnapshot()
})
