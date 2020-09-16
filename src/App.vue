<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './components/Main'

export default {
  name: 'App',
  components: {
    Main
  }
}

</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

</style>
