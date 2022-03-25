<template>
  <div class="navbar">
    <nav>
      <h1>Nihongo Words N5</h1>
      <div v-if="user">
        <span>Logged in</span>
        <button @click="handleLogout">Logout</button>
      </div>
    </nav>
  </div>
</template>

<script>
import getUser from '../composables/getUser'
import useLogout from '../composables/useLogout'
import { useRouter } from 'vue-router'

export default {
 setup() {
   const router = useRouter()
   const { user } = getUser()    

   const { logout, error } = useLogout()

   const handleLogout = async () => {
     await logout()
     
     if (!error.value) {
       console.log('Successfully logged out.')
       router.push({ name: 'Home' })
     }
   }
   
   return { user, handleLogout }
 }
}
</script>

<style>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 30px;
    background: white;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav h1 {
    margin-left: 20px;
  }
</style>