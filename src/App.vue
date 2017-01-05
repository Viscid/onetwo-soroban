<template>
  <div>
      <div class="topNav">
         <span v-if="$route.name !== 'Main Menu'"> <router-link to="/"> Main Menu </router-link> - </span>
         <span class="routeName"> {{ $route.name }} </span>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  watch: {

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

.topNav {
  text-align: left;
}

.routeName {
  font-weight: bold;
}
</style>
