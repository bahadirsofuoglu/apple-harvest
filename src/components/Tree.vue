<template>
  <div :class="`tree ${shakeClass}`">
    <div class="head h1" />
    <div class="head h2" />
    <div class="head h3" />
    <div class="head h4" />
    <div class="head h5" />
    <div class="head h6" />
    <div class="trunk" />
    <div class="graund" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['shakeClass'])
  }
}
</script>
