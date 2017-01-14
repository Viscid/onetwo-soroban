<template>
  <div class="keypad">
    <a class="key"> 1 </a>
    <a class="key"> 2 </a>
    <a class="key"> 3 </a>
    <a class="key"> 4 </a>
    <a class="key"> 5 </a>
    <a class="key"> 6 </a>
    <a class="key"> 7 </a>
    <a class="key"> 8 </a>
    <a class="key"> 9 </a>
    <a class="key zero"> 0 </a>
  </div>


</template>

<script>
export default {
  name: 'Keypad'
}
</script>

<style>

.keypad {
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

.zero {
  width: 150px;
}



</style>
