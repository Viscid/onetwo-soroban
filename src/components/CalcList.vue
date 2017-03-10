<template>
    <div class="calcList">
        <ul>
            <li v-for="(calc, index) in calcs">
                    <span :class="[{activeCalc: (index === calcIndex), futureCalc: (index > calcIndex)}]">
                    <span class="calcOperation"> {{ getOperation(calc) }} </span>
                    <span class="calcNumber"> {{ calc.number }} </span>
                   </span>
            </li>
            <li class="answer" v-show="calcIndex === calcs.length"> <hr /> {{ answer }}</li>

        </ul>
    </div>
</template>

<script>
export default {
  name: 'CalcList',
  props: ['calcs', 'calcIndex', 'answer'],
  methods: {
    getOperation (calc) {
      switch (calc.operation) {
        case 'ADD':
          return '+'
        case 'SUBTRACT':
          return '-'
        case 'DIVIDE':
          return '%'
        case 'MULTIPLY':
          return 'x'
        default:
          return ' '
      }
    }
  }
}
</script>

<style scoped>
    .activeCalc {
            color: green;
            font-weight: bold;
    }

    .futureCalc {
            display: none;
    }

    .calcList {
            width: 12em;
            padding: 2em 4em 0 0;
    }

    .answer {
            color: green;
    }

    hr {
            border-width: 3px;
            border-color: green;
    }

    li {
            list-style: none;
            padding: 0;
            font-size: 2.5em;
            text-align: right;
    }

    ul {
            padding: 0;
            margin: 0;
    }
</style>
