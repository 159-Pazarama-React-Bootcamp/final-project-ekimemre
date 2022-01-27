/*eslint-disable*/
import React from 'react'
import { shallow } from 'enzyme'
import ListTicketItem from '../components/ListTicketItem'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => ({
    navigate: jest.fn(),
  }),
}))

describe('<ListTicketItem>', () => {
  it('render without crash', () => {
    shallow(<ListTicketItem />)
  })

  it('render Ticket Item components without crash', () => {
    const wrapper = shallow(<ListTicketItem />)
    expect(wrapper.find('p')).toHaveLength(5)
  })
})
