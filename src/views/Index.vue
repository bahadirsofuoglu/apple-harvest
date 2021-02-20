<template>
  <div class="container">
    <Button />
    <div>
      <Tree />
      <Apples />
    </div>
    <Basket />
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
