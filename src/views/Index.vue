<template>
  <div class="container">
    <div class="tree-zone">
      <Apples />
      <Tree />
      <Basket />
    </div>

    <div>
      <Button label="Shake!" @click="shake" />
    </div>
  </div>
</template>
<script>
import Tree from '@/components/Tree'
import Basket from '@/components/Basket'
import Apples from '@/components/Apples'
import Button from '@/components/Button'

export default {
  components: {
    Tree,
    Basket,
    Apples,
    Button
  },
  methods: {
    shake () {
      this.$store.dispatch('droppedApples')
    }
  }
}
</script>
