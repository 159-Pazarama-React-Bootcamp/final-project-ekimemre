/*eslint-disable*/
import React from 'react'
import { shallow } from 'enzyme'
import ImageInfo from '../components/ImageInfo'

describe('<ImageInfo>', () => {
  it('show image info test', () => {
    const wrapper = shallow(<ImageInfo />)
    expect(wrapper.find('base64')).not.toEqual('')
  })
})
