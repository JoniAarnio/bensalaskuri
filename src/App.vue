<template>
  <div id="app">
    <b-container id="laskin-container">
          <Laskin></Laskin>
    </b-container>
  </div>
</template>

<script>
import Laskin from './components/Laskin.vue'


export default {
  name: 'App',
  components: {
    Laskin
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#laskin-container {
  padding:3%;
}
</style>
