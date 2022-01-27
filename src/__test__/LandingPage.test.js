/*eslint-disable*/
import React from 'react'
import { shallow } from 'enzyme'
import LandingPage from '../pages/LandingPage'
import AddTicket from '../components/AddTicket'
import SearchTicket from '../components/SearchTicket'

describe('Rendering Landing Page Components', () => {
  it('renders Landing without crash', () => {
    shallow(<LandingPage />)
  })

  it('render Landing components without crash', () => {
    const wrapper = shallow(<LandingPage />)
    const headerAdd = <AddTicket />
    const headerSearch = <SearchTicket />
    expect(wrapper.contains(headerAdd)).toEqual(true)
    expect(wrapper.contains(searchAdd)).toEqual(true)
  })
})
