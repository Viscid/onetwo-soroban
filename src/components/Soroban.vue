<template>
  <div class="soroban" :style="{ height: height + 'px' }">
      <Rail class="rail" :value="sorobanDigits" :reset="reset" :width="width" v-for="n in Number(rails)" :railNumber="n"></Rail>
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
    'reset',
    'value'
  ],
  created () {
    this.sorobanDigits = this.value ? this.value.toString(10).split('').map(function (d) {
      return Number(d)
    }) : this.sorobanDigits
  },
  watch: {
    reset: function () {
      this.sorobanDigits = new Array(Number(this.rails))
    },
    value: function (value) {
      console.log(value)
    }
  },
  methods: {
    updateValue (beadValue, railNumber) {
      this.sorobanDigits[railNumber - 1] = beadValue
      this.$emit('value-change', this.getValue())
    },
    getValue () {
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
