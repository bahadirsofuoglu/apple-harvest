import mutation from './mutation'
import action from './action'

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

  it('Waiting CHANGE_CLASS after action', () => {
    const commit = jest.fn()
    action.shakeAndDropApples({ commit })
    expect(commit).toHaveBeenCalledWith('CHANGE_CLASS')
  })
})
