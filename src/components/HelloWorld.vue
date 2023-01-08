<template>
  <section class="hero is-medium is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome to your Bank!
        </h1>
        <h2 class="subtitle">
          This is where all your gold will be stored. You can add, remove, and transfer gold between
          characters.
          </h2>
      </div>
    </div>
  </section>
  <div class="containter is-fluid">
    <div class="notifaction is-primary">
      <br>
      </div>
    <div class="columns">
      <div class="column">
        <button class="button is-primary" data-target="modal-js-example" @click="CallCreateScreen()">
          Create Character</button>
      </div>
      <div class="column">
        <button class="button is-link" data-target="modal-js-example" @click="CallBankEntranceScreen()">
          Created Characters</button>
    </div>
  </div>
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  data() {
    return {
      name: '',
      gold: 0,
      
    }
  },
  methods: {
    CallCreateScreen() {
      this.$router.push({ name: 'CreateCharacter' });
    },
    CallBankEntranceScreen() {
      this.$router.push({ name: 'bank' });
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
