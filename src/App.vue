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
      blah: 'yo'
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

*
{
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    /*IE10*/
    -ms-user-select: none;
    user-select: none;

    /*You just need this if you are only concerned with android and not desktop browsers.*/
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}


body {
  margin: 0;
}

.topNav {
  text-align: left;
  background-color: #F5F5F5;
  padding: 5px;
  border-bottom: 2px solid #B55;
}

.routeName {
  font-weight: bold;
}
</style>
