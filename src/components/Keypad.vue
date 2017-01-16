<template>
  <div class="keypad">
    <a @click="keyPressed(1)" class="key"> 1 </a>
    <a @click="keyPressed(2)" class="key"> 2 </a>
    <a @click="keyPressed(3)" class="key"> 3 </a>
    <a @click="keyPressed(4)" class="key"> 4 </a>
    <a @click="keyPressed(5)" class="key"> 5 </a>
    <a @click="keyPressed(6)" class="key"> 6 </a>
    <a @click="keyPressed(7)" class="key"> 7 </a>
    <a @click="keyPressed(8)" class="key"> 8 </a>
    <a @click="keyPressed(9)" class="key"> 9 </a>
    <a v-show="!simple" @click="reset()" class="key reset"> Reset </a>
    <a @click="keyPressed(0)" class="key zero"> 0 </a>
    <a v-show="!simple" @click="enter()" class="key enter"> Enter </a>
  </div>


</template>

<script>
export default {
  name: 'Keypad',
  methods: {
    keyPressed (value) {
      this.$emit('key-pressed', value)
    },
    reset () {
      this.$emit('reset')
    },
    enter () {
      this.$emit('enter')
    }
  },
  props: ['simple']
}
</script>

<style>

.keypad {
  position: relative;
  background-color: white;
  width: 150px;
  height: 200px;
  align-items:center;
  border: 2px solid #B55;
}

.key {
  display: inline-block;
  line-height: 50px;;
  float: left;
  flex: 1;
  width: 50px;
  display: block;
  height: 50px;
  font-size: 35px;
  cursor: pointer;
}



.key:hover {
  color: #B55;
  text-decoration: none;
}

.reset {
  color: red;
  font-size: 0.75em;
  left: 50px;
  bottom: 0px;
}

.enter {
  position: absolute;
  color: green;
  font-size: 0.75em;
  left: 100px;
  bottom: 0px;
}

.zero {
  width: 50px;
  display: inline-block;
  text-align: center;
  position: absolute;
  left: 50px;
  bottom: 0px;

}



</style>
