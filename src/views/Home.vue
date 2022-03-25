<template>
  <div class="main">
      <RandomWord />
      <div class="instructions">
        <p>Test your knowledge of words required for the JLPT N5 exam.</p>
        <p>Click the New word button to receive a random Japanese word from the N5 list.</p>
        <p>Choose to display the word in romaji, hiragana or kanji.</p>
        <p>Click the Translate button to see the English translation</p>
      </div>
  </div>
</template>

<script>
import RandomWord from '../components/RandomWord.vue'

export default {
  name: 'Home',
  components: { RandomWord },  
  setup() {
  }
}
</script>

<style scoped>
  div.main {
    border-radius: 10px;    
    border: 1px solid  var(--secondary);
    background: white;
    height: 500px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  p {
    margin: 10px;
  }
  div.instructions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
</style>