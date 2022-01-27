/*eslint-disable*/
import React from 'react'
import { shallow } from 'enzyme'
import AddTicket from '../components/AddTicket'

describe('Rendering Landing Page Components', () => {
  const user = { username: 'user' }
  global.getAuth = jest.fn()

  getAuth.mockImplementation(() => {
    return Promise.resolve({
      status: 200,
      json: () => {
        return Promise.resolve(user)
      },
    })
  })

  it('renders Landing without crash', () => {
    shallow(<AddTicket />)
  })

  // it('render Landing components without crash', () => {
  //   const wrapperAdd = shallow(<AddTicket />)
  //   const wrapperSearch = shallow(<SearchTicket />)
  // })
})
