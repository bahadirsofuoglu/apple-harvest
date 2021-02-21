<template>
  <button v-bind="$attrs" @click="$emit('click')">
    {{ label }}
  </button>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
