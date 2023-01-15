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
      <form class="box">
  <div class="field">
    <label class="label">username</label>
    <div class="control">
      <input v-model="username" class="input" type="username" placeholder="e.g. theDeStROyER">
    </div>
  </div>

  <div class="field">
    <label class="label">Password</label>
    <div class="control">
      <input v-model="password" class="input" type="password" placeholder="********">
    </div>
  </div>

  <div class="columns">
    <div class="column">
  <button class="button is-primary" @click="signIn(username,password)">Sign in</button>
</div>
<div class="column">
  <button class="button is-primary" @click="createAccountScreen()">Create Account</button>
</div>
</div>
</form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      name: '',
      gold: 0,
      username:"",
      password:""
      
    }
  },
  methods: {
    CallCreateScreen() {
      this.$router.push({ name: 'CreateCharacter' });
    },
    CallBankEntranceScreen() {
      this.$router.push({ name: 'bank' });
    },
    signIn(username:string, password:string){
      console.log(username);
      axios.post('https://localhost:44394/api/Player/Login', {
        username: username,
        password: password
      })
    },
    createAccountScreen(){
      this.$router.push({ name: 'CreateAccount' });
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
