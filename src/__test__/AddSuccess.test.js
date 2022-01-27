/*eslint-disable*/
import React from 'react'
import { shallow } from 'enzyme'
import AddSuccess from '../components/AddSuccess'

describe('<AddSuccess>', () => {
  it('add success render test', () => {
    const wrapper = shallow(<AddSuccess />)
    expect(wrapper.find('h3')).toHaveLength(1)
    expect(wrapper.find('h3')).toHaveLength(1)
  })
})
/*eslint-enable*/
