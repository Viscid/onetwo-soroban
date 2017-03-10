<template>

  <div style="display: flex; margin: 0px; justify-content: center;">
    <Timer :correctAnswer="correctAnswer" v-on:timer-value="updateTime" />
    <div style="min-width: 50%;">
      <div style="display: flex; align-items: top; justify-content: center;">
        <CalcList :calcs="calcs" :calcIndex="calcIndex" :answer="answer" />
        <div style="display: inline-block;">
          <Soroban :reset="reset" v-on:value-change="sorobanInput" rails="6" height="400" />
        </div>
      </div>
      <p class="resetButtonContainer" v-show="!correctAnswer"> <a class="resetButton" @click="resetChallenge"> Reset </a> </p>
      <p class="challengeSuccess" v-show="correctAnswer"> Correct. You took {{ answerTime }} seconds.</p>
    </div>

  </div>

</template>

<script>
import Soroban from '../Soroban.vue'
import Timer from '../Timer.vue'
import CalcList from '../CalcList.vue'

export default {
  data () {
    return {
      sorobanChallenge: undefined,
      correctAnswer: false,
      reset: false,
      answerTime: '',
      calcIndex: 0,
      currentValue: undefined,
      calcs: []
    }
  },

  components: {
    Soroban,
    Timer,
    CalcList
  },

  watch: {
    keypadValue (value) {
      if (value) {
        this.checkAnswer()
      }
    }
  },

  computed: {
    answer () {
      let total = 0
      this.calcs.forEach((calc) => {
        switch (calc.operation) {
          case 'ADD':
            total = total + calc.number
            break
          case 'SUBTRACT':
            total = total - calc.number
            break
          default:
            total = calc.number
            break
        }
      })
      return total
    }
  },

  methods: {
    sorobanInput (value) {
      this.currentValue = value
      this.checkAnswer(this.calcs, this.calcIndex)
    },

    setChallenge () {
      this.generateChallenge(['SUBTRACT', 'ADD'], 5, 3)
    },

    resetChallenge () {
      this.setChallenge()
      this.reset = !this.reset
    },

    updateTime (value) {
      this.answerTime = value
    },

    checkAnswer (calcs, currentCalc, value) {
      let calcsTotal = 0
      this.calcs.forEach((calc, index) => {
        if (index > this.calcIndex) return
        switch (calc.operation) {
          case 'ADD':
            calcsTotal = calcsTotal + calc.number
            break
          case 'SUBTRACT':
            calcsTotal = calcsTotal - calc.number
            break
          default:
            calcsTotal = calc.number
            break
        }
      }, this)

      if (calcsTotal === this.currentValue) {
        this.calcIndex = this.calcIndex + 1
      }

      if (this.calcs.length === (this.calcIndex)) {
        this.correctAnswer = true
        setTimeout(() => {
          this.correctAnswer = false
          this.setChallenge()
          this.reset = !this.reset
        }, 3500)
        return
      }
    },

    generateCalc (operations, length, i) {
      let calc = {
        operation: (i === 0) ? false : operations[Math.floor(Math.random() * (operations.length))],
        active: (i === 0)
      }

      if (calc.operation === 'SUBTRACT') {
        calc.number = (i === 0) ? Math.floor(Math.random() * (Math.pow(9, length)) + 1) : Math.floor(Math.random() * (this.answer) + 1)
      } else {
        calc.number = Math.floor(Math.random() * (Math.pow(9, length)) + 1)
      }

      return calc
    },
    // Takes Operations: Array['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE'
    // Length of operands
    // Number of calculations to be performed
    generateChallenge (operations, length, repetitions) {
      this.calcs = []
      this.calcIndex = 0
      for (var i = 0; i < repetitions; i++) {
        this.calcs.push(this.generateCalc(operations, length, i))
      }
    }
  },
  created () {
    this.setChallenge()
  }
}
</script>

<style>

.resetButtonContainer {
  font-size: 2em;
  margin: 0.2em 0 0 0;
  text-align: center;
}

.resetButton {
  background-color: #C66;
  padding: 0.25em;
  color: white;
  font-weight: bold;
  border-radius: 5px;
}

.resetButton:hover {
  text-decoration: none;
  cursor: pointer;
  background-color: #A33;
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
