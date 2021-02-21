import mutation from './vuex/mutation'
import action from './vuex/action'

describe('Vuex testing', () => {
  it('shakeClass-dropedClass changes with CHANGE_CLASS mutation', () => {
    const state = {
      shakeClass: '',
      dropedClass: ''
    }
    mutation.CHANGE_CLASS(state)
    expect(state.shakeClass).toBe('shake')
    setTimeout(() => {
      expect(state.dropedClass).toBe('-dropped')
    }, 2000)
  })
})
