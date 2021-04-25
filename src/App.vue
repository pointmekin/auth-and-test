<template>
  <div id="app">
    <TopHeader />
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import TopHeader from "./components/TopHeader"

export default {
  components: {Navbar, TopHeader}
}
</script>


<style lang="scss">

#app {
  font-family: Prompt, Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
