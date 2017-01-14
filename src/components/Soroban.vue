<template>
  <div class="soroban" :style="{ height: height + 'px' }">
      <Rail class="rail" :reset="reset" v-on:value-change="updateValue" :width="width" v-for="n in Number(rails)" :railNumber="n"></Rail>
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
      width: 150 * (this.height / 710),
      sorobanDigits: new Array(Number(this.rails))
    }
  },
  computed: {

  },
  props: [
    'rails',
    'height',
    'reset'
  ],
  watch: {
    reset: function (value) {
      this.sorobanDigits = new Array(Number(this.rails))
    }
  },
  methods: {
    updateValue (beadValue, railNumber) {
      this.sorobanDigits[railNumber - 1] = beadValue
      this.$emit('value-change', this.value())
    },
    value () {
      let sorobanDigits = []
      for (let i = 0; i < this.sorobanDigits.length; i++) {
        sorobanDigits[i] = (this.sorobanDigits[i] ? this.sorobanDigits[i] : 0)
      }
      return Number(sorobanDigits.join(''))
    }
  }
}

</script>

<style>
.soroban {
  display: flex;
  justify-content: center;
  margin: 1em;
}

</style>
