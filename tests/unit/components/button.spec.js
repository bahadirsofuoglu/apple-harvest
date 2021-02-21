import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button component', () => {
  it('Button props control', () => {
    const label = 'shake'
    const wrapper = mount(Button, {
      propsData: {
        label: label
      }
    })

    expect(wrapper.find('button').text()).toBe('shake')
  })
})
