<template>
  <div style="display: flex; margin: 10px; justify-content: center;">

    <div style="min-width: 50%; padding: 0 2em;">
      <Timer :correctAnswer="correctAnswer"/>
      <p class="challengeDescription" v-show="!correctAnswer" v-if="sorobanChallenge"> Set: {{ sorobanChallenge }} </p>
      <p class="challengeSuccess" v-show="correctAnswer"> {{ correctEncouragement() }} </p>
      <Soroban rails="1" height="500" :reset="reset" v-on:value-change="valueChange" />
    </div>

  </div>
</template>

<script>
import Soroban from './Soroban.vue'
import Timer from './Timer.vue'

export default {
  data () {
    return {
      sorobanValue: undefined,
      sorobanChallenge: undefined,
      correctAnswer: false,
      reset: false,
      encouragementList: ['Good!',
        'Great!',
        'Wonderful!',
        'Decent!',
        'Commendable!',
        'Admirable!',
        'Excellent!',
        'Exemplary!',
        'Laudable!',
        'Meritorious!',
        'Praiseworthy!',
        'Gnarly!',
        'Neat!',
        'Nice!',
        'Rad!',
        'Tip-top!',
        'Super!',
        'Splendid!']
    }
  },
  components: {
    Soroban,
    Timer
  },
  methods: {
    valueChange (value) {
      this.sorobanValue = value

      if (this.sorobanValue === this.sorobanChallenge) {
        this.sorobanChallenge = this.generateChallenge()
        this.correctAnswer = true
        setTimeout(() => {
          this.correctAnswer = false
          this.reset = !this.reset
        }, 1500)
      }
    },
    generateChallenge () {
      return Math.floor((Math.random() * 9) + 1)
    },
    correctEncouragement () {
      return this.encouragementList[Math.floor(Math.random() * (this.encouragementList.length - 1) + 1)]
    }
  },
  created () {
    this.sorobanChallenge = this.generateChallenge()
  }
}
</script>

<style>

.challengeDescription {
  font-size: 2em;

  margin: 0.5em;

}

.challengeSuccess {
  font-size: 2em;
  margin: 0.5em;

  color: green;
}

</style>
