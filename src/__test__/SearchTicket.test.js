/*eslint-disable*/
import React from 'react'
import { shallow } from 'enzyme'
import SearchTicket from '../components/ImageInfo'

describe('<SearchTicket>', () => {
  it('search ticket render without crash', () => {
    shallow(<SearchTicket />)
  })

  // it('should search field on change', () => {
  //   const wrapper = shallow(<SearchTicket />)
  //   const searchInput = wrapper.find("input[name='basvuruNo']")
  //   searchInput.simulate('change', {
  //     persist: () => {},
  //     target: {
  //       name: 'basvuruNo',
  //       value: 'aBc123',
  //     },
  //   })
  //   expect(searchInput.html()).toMatch('aBc123')
  // })
})
