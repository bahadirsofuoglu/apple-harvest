<template>
  <button @click="test">SHAKE!</button>
</template>
<script>
export default {
  methods: {
    test () {
      this.$store.dispatch('droppedApples')
    }
  }
}
</script>
