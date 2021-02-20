<template>
  <div>
    <div :class="`apple p1${dropedClass} ${shakeClass}-apple`"></div>
    <div :class="`apple p2${dropedClass} ${shakeClass}-apple `"></div>
    <!--   <div :class="`apple p3-${dropedClass}`"></div>
    <div :class="`apple p4-${dropedClass}`"></div>
    <div :class="`apple p5-${dropedClass}`"></div>
    <div :class="`apple p6-${dropedClass}`"></div>  -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['dropedClass', 'shakeClass'])
  }
}
</script>
