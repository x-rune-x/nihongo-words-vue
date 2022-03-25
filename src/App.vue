<template> 
<NavBar /> 
<div class="content">
  <router-view/>
</div>  
<Footer />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
  components: { NavBar, Footer }
}
</script>

<style>
  .content {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
  }
</style>
