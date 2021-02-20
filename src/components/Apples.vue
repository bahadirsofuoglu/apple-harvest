<template>
  <div class="apples">
    <div :class="`apple p1${dropedClass} ${shakeClass}-apple`"></div>
    <div :class="`apple p2${dropedClass} ${shakeClass}-apple `"></div>
    <div :class="`apple p3${dropedClass} ${shakeClass}-apple`"></div>
    <!--  <div :class="`apple p4${dropedClass} ${shakeClass}-apple`"></div>
    <div :class="`apple p5${dropedClass} ${shakeClass}-apple`"></div>
    <div :class="`apple p6${dropedClass} ${shakeClass}-apple`"></div> -->
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
