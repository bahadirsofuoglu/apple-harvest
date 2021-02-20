<template>
  <div class="container">
    <div class="tree-zone">
      <Apples />
      <Tree />
      <Basket />
    </div>

    <div>
      <Button />
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
  }
}
</script>
