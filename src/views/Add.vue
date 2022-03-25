<template>
<h1>Add new word</h1>
  <form @submit.prevent="handleSubmit">
    <input class="form" required type="text" placeholder="romaji" v-model="romaji">
    <input class="form" required type="text" placeholder="hiragana" v-model="hiragana">
    <input class="form" required type="text" placeholder="japanese" v-model="japanese">
    <input class="form" required type="text" placeholder="english" v-model="english">

    <button>Add</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

export default {
 setup() {
   const romaji = ref('')
   const hiragana = ref('')
   const japanese = ref('')
   const english = ref('')

   const handleSubmit = async () => {
      if (romaji.value.length < 16 && hiragana.value.length < 16 && japanese.value.length < 16 && english.value.length < 25) {
          projectFirestore.collection('words').doc(hiragana.value.split(' ')[0]).set({
          romaji: romaji.value,
          hiragana: hiragana.value,
          japanese: japanese.value,
          english: english.value
        })
        .then((docRef) => {
          console.log("Added" ,docRef)
        })
        .catch((error) => {
          console.log(error)
        })

        romaji.value = ''
        hiragana.value = ''
        japanese.value = ''
        english.value = ''
      }
      else {
        console.log('Please keep entries to less than 16 characters.')
      }
    }     

   return { romaji, hiragana, japanese, english, handleSubmit }
 }
}
</script>

<style scoped>  
  button {
    margin: 0;
  }
</style>