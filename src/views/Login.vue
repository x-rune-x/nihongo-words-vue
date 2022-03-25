<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" class="form" placeholder="email" required v-model="email">
    <input type="password" class="form" placeholder="password" required v-model="password">
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import useLogin from '../composables/useLogin'

export default {
  setup() {
    const { error, login } = useLogin()
    const router = useRouter()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      const res = await login(email.value, password.value)
      console.log(res)
      
      if (!error.value) {
        console.log('Succesfully logged in.')
        router.push({ name: 'Home' })
      }
    }

    return { email, password, handleSubmit }
  }
}
</script>

<style scoped>
  button {
    margin: 0 auto;
    border: none;
  }
  button:hover {
    border: none;
  }
  form {
    height: 250px;
    display: flex;
    flex-direction: column;
  }
</style>