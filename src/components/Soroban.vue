<template>
  <div class="soroban">
      <Rail class="rail" :setValue="sorobanDigits" v-on:value-change="updateValue" :reset="reset" :height="height" v-for="n in Number(rails)" :railNumber="n" :disabled="disabled"></Rail>
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
    'value',
    'disabled'
  ],
  created () {
    var valueString = this.value ? this.pad(this.value.toString()) : this.value

    this.sorobanDigits = this.value ? valueString.split('').map(function (d) {
      return Number(d)
    }) : this.sorobanDigits
    this.pad(this.sorobanDigits)
  },
  watch: {
    reset: function () {
      this.sorobanDigits = new Array(Number(this.rails))
    },
    value: function (value) {
      var valueString = this.pad(value.toString())

      this.sorobanDigits = valueString.split('').map(function (d) {
        return Number(d)
      })
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
    },
    pad (number) {
      var s = number + ''
      while (s.length < this.rails) s = '0' + s
      return s
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
