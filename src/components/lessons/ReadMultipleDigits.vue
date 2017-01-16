<template>
  <div style="display: flex; margin: 0px; justify-content: center;">
    <Timer :correctAnswer="correctAnswer" v-on:timer-value="updateTime" />
    <div style="min-width: 50%;">
      <p class="challengeDescription" v-show="!correctAnswer"> What is the value of the soroban below? </p>
      <p class="challengeSuccess" v-show="correctAnswer"> Correct. You took {{ answerTime }} seconds.</p>
      <div style="display: inline-block;">
        <Soroban :value="sorobanChallenge" rails="5" height="300" disabled="true"/>
      </div>
      <div style="display: inline-block; padding: 20px;">
        <Keypad v-on:key-pressed="keypadInput" v-on:reset="keypadReset" v-on:enter="keypadEnter" />
        <input id="keypad" class="keypadInput" v-model="keypadValue" />
      </div>

    </div>

  </div>
</template>

<script>
import Soroban from '../Soroban.vue'
import Timer from '../Timer.vue'
import Keypad from '../Keypad.vue'

export default {
  data () {
    return {
      sorobanChallenge: undefined,
      correctAnswer: false,
      reset: false,
      keypadValue: '',
      answerTime: ''
    }
  },
  components: {
    Soroban,
    Timer,
    Keypad
  },
  watch: {
    keypadValue (value) {
      if (value) {
        this.checkAnswer()
      }
    }
  },
  methods: {
    keypadInput (value) {
      this.keypadValue = this.keypadValue.concat(value)
    },
    keypadReset () {
      this.keypadValue = ''
      // document.getElementById('keypad').focus()
    },
    keypadEnter () {

    },
    updateTime (value) {
      this.answerTime = value
    },
    checkAnswer () {
      if (Number(this.keypadValue) === this.sorobanChallenge) {
        this.correctAnswer = true
        setTimeout(() => {
          this.correctAnswer = false
          this.reset = !this.reset
          this.generateChallenge()
          this.keypadReset()
        }, 1000)
      }
    },
    generateChallenge () {
      var oldChallenge = this.sorobanChallenge
      while (this.sorobanChallenge === oldChallenge) {
        this.sorobanChallenge = Math.floor((Math.random() * 99999) + 1)
      }
    }
  },
  created () {
    this.generateChallenge()
  }
}
</script>

<style>

.challengeDescription {
  font-size: 2em;
  margin: 0.2em 0 0 0;

}

.challengeSuccess {
  font-size: 2em;
  margin: 0.2em 0 0 0;
  color: green;
}

.keypadInput {
  font-size: 2em;
  width: 150px;
  margin: 1em 0;
  border: 0;
  text-align: center;
  border-bottom: 1px solid #AAA;
}

</style>
