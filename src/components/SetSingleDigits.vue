<template>
  <div style="display: flex; justify-content: center;">
    <div style="display: inline-block; height: 500px; padding: 0 2em;">
      <h1> Setting Single Digits </h1>

      <p> Try setting the soroban rail to the number 5. </p>
    </div>

    <div style="display: inline-block">
    <Soroban rails="1" height="500" />
  </div>
  </div>
</template>

<script>
import Soroban from './Soroban.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    Soroban
  }
}
</script>
