import { mount } from '@vue/test-utils'
import WelcomeMessage from '@/components/WelcomeMessage.vue'

describe('WelcomeMessage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(WelcomeMessage)
    expect(wrapper.vm).toBeTruthy()
  })
})
