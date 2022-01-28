/*eslint-disable*/
import React from 'react'
import { shallow } from 'enzyme'
import AddTicket from '../components/AddTicket'
import FirestoreMock from './firestore.mock'

jest.mock('firebase/app', () => {
  return {
    auth: jest.fn(),
  }
})

jest.mock('firebase/app', () => {
  return {
    auth: jest.fn().mockReturnThis(),
    signInWithEmailAndPassword: jest.fn(),
  }
})

describe('Rendering Landing Page Components', () => {
  const firestoreMock = new FirestoreMock()
  beforeEach(() => {
    firebase.firestore = firestoreMock
    firestoreMock.reset()
  })

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
