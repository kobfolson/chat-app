import { mount } from '@vue/test-utils'
import UserHeader from '@/components/UserHeader.vue'

describe('UserHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(UserHeader)
    expect(wrapper.vm).toBeTruthy()
  })
})
