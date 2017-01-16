<template>
  <div class="timer">
   <span :class="{ correct: correctAnswer }"> {{ stringTime }} </span>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data () {
    return {
      time: 0,
      interval: undefined,
      stringTime: '0'
    }
  },
  props: ['correctAnswer'],
  watch: {
    correctAnswer () {
      if (this.correctAnswer) {
        this.stop()
        this.$emit('timer-value', this.stringTime)
      } else {
        this.reset()
      }
    }
  },
  methods: {
    start () {
      this.interval = setInterval(() => {
        this.time = (this.time + 0.1)
        this.stringTime = this.time.toFixed(1)
      }, 100)
    },
    stop () {
      clearInterval(this.interval)
    },
    reset () {
      this.time = 0
      this.stringTime = '0.0'
      this.start()
    }
  },
  created () {
    this.start()
  }
}
</script>

<style scoped>
.timer {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 1.5em;
  text-align: left;
  font-size: 2em;
  height: 1em;
}

.correct {
  color: green;
  font-weight: bold;
}

</style>
