import Apples from '@/components/Apples.vue'
import Basket from '@/components/Basket.vue'
import Button from '@/components/Button.vue'
import Tree from '@/components/Tree.vue'

const GlobalComponents = {
  install (Vue) {
    Vue.component('Apples', Apples)
    Vue.component('Basket', Basket)
    Vue.component('Button', Button)
    Vue.component('Tree', Tree)
  }
}

export default GlobalComponents
