<!--<template>
  <div id="app">
    <Avengers title="End Game Avengers"/>
  </div>
</template> -->

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/welcome/user">Welcome</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
/*import Avengers from './components/Avengers.vue'

export default {
  name: 'app',
  components: {
    Avengers
  }
}*/
</script>

<style>
body{
  background-image: linear-gradient( rgba(3, 44, 17, 0.4), rgba(0, 0, 0, 0.4)), url('./assets/endgame.jpg');
  background-size:cover;
  background-repeat:no-repeat;
  background-position: center, center;
  height:600px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: auto auto;
  width: 60%;
  margin-top: 10px;
}

nav{
  margin-bottom:60px;
  background-color: black;
  padding: 5px;
}

nav a{
  padding-left:30px;
  text-decoration: none;
  color: white;
}
nav a:hover{
  opacity: 0.5;
}
</style>
