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
export default {
  methods: {
    shake () {
      this.$store.dispatch('shakeAndDropApples')
    }
  }
}
</script>
