<template>
  <div class="container">
    <Tree />
    <Basket />
    <Apples />
  </div>
</template>
<script>
import Tree from '@/components/Tree'
import Basket from '@/components/Basket'
import Apples from '@/components/Apples'
export default {
  components: {
    Tree,
    Basket,
    Apples
  }
}
</script>
