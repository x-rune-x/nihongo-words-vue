<template>
  <div class="display">
    <div class="writing">      
      <div class="output" >
        <span v-if="showRomaji">{{ romaji }}</span>
        <span class="placeholder" v-else>romaji</span>
      </div>
      <input type="checkbox" @click="showRomaji = !showRomaji">
    </div>
    <div class="writing">      
      <div class="output" >
        <span class="japanese" v-if="showHiragana">{{ hiragana }}</span>
        <span class="placeholder japanese" v-else>ひらがな</span>
      </div>
      <input type="checkbox" checked @click="showHiragana = !showHiragana">
    </div>
    <div class="writing">      
      <div class="output" >
        <span class="japanese" v-if="showNihongo">{{ nihongo }}</span>
        <span class="placeholder japanese" v-else>日本語</span>
      </div>
      <input type="checkbox" checked @click="showNihongo = !showNihongo">
    </div>
    <div class="writing english">      
      <div class="output" >
        <span v-if="showEnglish">{{ english }}</span>
        <span class="placeholder" v-else>english</span>
      </div>           
    </div>
  </div>
  <div class="control">
    <button @click="getRandomWord">New word</button>
    <button @click="showEnglish = true">Translate</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

export default {
  setup() {   
    const romaji = ref('romaji')
    const hiragana = ref('ひらがな')
    const nihongo = ref('日本語')
    const english = ref('english')
    const wordList = []
    const currentWord = ref(null)

    const showRomaji = ref(false)
    const showHiragana = ref(true)
    const showNihongo = ref(true)  
    const showEnglish = ref(false)  

    projectFirestore.collection('words').get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        wordList.push({...doc.data(), id: doc.id})
      })
    })

    console.log(wordList)

    const getRandomWord = () => {
      currentWord.value = wordList[Math.floor(Math.random() * wordList.length)]
      showEnglish.value = false
      
      console.log(currentWord.value)

      romaji.value = currentWord.value.romaji
      hiragana.value = currentWord.value.hiragana
      nihongo.value = currentWord.value.japanese
      english.value = currentWord.value.english
    }

    return { romaji, hiragana, nihongo, english, getRandomWord, currentWord, showRomaji, showHiragana, showNihongo, showEnglish }
  }
}
</script>

<style scoped>
  .display {
    display: flex;
    justify-content: space-evenly;
  }
  .writing {
    margin-top: 50px;
    width: 20%;
  }
  .output { 
    width: 100%;     
    height: 50px;
    background-color: #fafafa;
    border-radius: 5px;
    border: 2px solid rgb(168, 168, 168);
    justify-content: center;
    align-items: center;
    display: flex;
  }
  input[type="checkbox"] {
    cursor: pointer;
    padding: 10px;
    display: block;
    margin: 20px auto;
    transform: scale(1.2);
    accent-color: #cacaca;
  }  
  .control {
    display: flex;
    margin-bottom: 25px;
    justify-content: center;
  }
  .placeholder {
    color: #aa9292;
  }
</style>