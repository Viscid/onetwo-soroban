<template>
<div class="menuComponent">
  <div style="display: flex; justify-content: center; align-items: center; margin: 1.5em;">
    <div>
      <img height="100" src="../../static/onetwo-logo.svg" />
    </div>
    <div style="padding-bottom: 15px;">
      <h1> <span class="titleColor"> OneTwo </span> Soroban</h1>
    </div>
  </div>
  <div class="menuContainer">
    <h3> Basics </h3>

    <ol class="menu">
      <li>
        <router-link to="setting_single_digits"> Setting single digits </router-link>
      </li>
      <li>
        <router-link to="reading_single_digits"> Reading single digits </router-link>
      </li>
      <li>
        <router-link to="reading_multiple_digits"> Reading multiple digits </router-link>
      </li>
    </ol>

    <h3> Easy Addition </h3>

    <ol start="4">
      <li>
    	   <router-link to="adding_single_digits"> Adding single sigits </router-link>
      </li>
      <li>
        <router-link to="adding_four_digits"> Adding four digits </router-link>
      </li>
    </ol>


    <h3> Easy Subtraction </h3>

    <ol start="6">
      <li>
    	   <router-link to="subtracting_two_digits"> Subtracting double sigits </router-link>
      </li>
      <li>
        <router-link to="subtracting_four_digits"> Subtracting four digits </router-link>
      </li>
    </ol>

    <h3> Mixed Addition / Subtraction </h3>

    <ol start="8">
      <li>
    	   <router-link to="add_subtract_three_digits"> Addition / Subtraction - Three Digits </router-link>
      </li>
      <li>
    	   <router-link to="add_subtract_five_digits"> Addition / Subtraction - Five Digits </router-link>
      </li>
      <li>
    	   <router-link to="add_subtract_hard"> Addition / Subtraction - Hard </router-link>
      </li>
    </ol>

  </div>

  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menuContainer {
  margin: 2em auto;
  width: 410px;
  padding: 1em;
}

.titleColor {
    color: #B55;
}

h1 {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

a:visited {
  color: #337;
}

a:hover {
  text-decoration: underline;
}

h2 {
  margin: 0;
  font-size: 1.5em;
}

ol {
  margin: 0 auto;
}

ol,
h3 {
  text-align: left;
}

h3 {
  color: #B55;
}
</style>
