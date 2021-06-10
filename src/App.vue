<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Header />
  <Home />
  <Footer />
</template>

<script>

import Header from './components/header.vue'
import Home from './pages/home/index.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<style>

</style>
