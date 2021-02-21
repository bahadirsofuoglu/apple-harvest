export default {
  CHANGE_CLASS (state) {
    state.shakeClass = 'shake'
    setTimeout(() => {
      state.dropedClass = '-dropped'
    }, 2000)
  }
}
