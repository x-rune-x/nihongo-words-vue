<template>
<h1>Add new word</h1>
  <form @submit.prevent="handleSubmit">
    <input required type="text" placeholder="romaji" v-model="romaji">
    <input required type="text" placeholder="hiragana" v-model="hiragana">
    <input required type="text" placeholder="japanese" v-model="japanese">
    <input required type="text" placeholder="english" v-model="english">

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
  form {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
  border: 1px solid  var(--secondary);
  background: white;
}
input {
  border: 0;
  border-bottom: 1px solid var(--secondary);
  padding: 10px;
  outline: none;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
}
</style>