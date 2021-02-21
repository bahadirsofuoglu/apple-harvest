<template>
  <button v-bind="$attrs" @click="test">{{ label }}</button>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    test () {
      this.$store.dispatch('droppedApples')
    }
  }
}
</script>
