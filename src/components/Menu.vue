<template>
  <div class="menu">
  <h1> OneTwo Soroban </h1>

  <h3> Basics </h3>

  <ol>
    <li> <router-link to="setting_single_digits"> Setting single digits </router-link> </li>
    <li> <router-link to="reading_single_digits"> Reading single digits </router-link> </li>
    <li> <router-link to="reading_multiple_digits"> Reading multiple digits </router-link> </li>
  </ol>

  <h3> Easy Addition </h3>

  <ol start="4">
    <li> Adding single sigits </li>
    <li> Adding multiple digits </li>
  </ol>

</div>
</template>

<script>
export default {
  data () {
    return {
      menu: 'Menu!!'
    }
  }
}

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ol, h3 {
  text-align: left;
}

h3 {
  margin-left: 40px;
}


</style>
