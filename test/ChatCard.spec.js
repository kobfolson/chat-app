import { mount } from '@vue/test-utils'
import ChatCard from '@/components/ChatCard.vue'

describe('ChatCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ChatCard)
    expect(wrapper.vm).toBeTruthy()
  })
})
