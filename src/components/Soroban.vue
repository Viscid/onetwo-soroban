<template>
  <div class="soroban" :style="{ height: height + 'px' }">
      <Rail class="rail" :width="width" v-for="n in Number(rails)" :railNumber="n"></Rail>
  </div>
</template>

<script>
import Rail from './Rail'

export default {
  components: {
    Rail
  },
  data () {
    return {
      width: 150 * (this.height / 710)

    }
  },
  props: [
    'rails',
    'height'
  ]
}

</script>

<style>
.soroban {
  display: flex;
  justify-content: center;
  margin: 1em;
}

</style>
