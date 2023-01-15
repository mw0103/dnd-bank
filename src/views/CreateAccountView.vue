<template>
    <div class="container">
        <div class="field">
            <label class="label">First Name</label>
            <div class="control">
                <input class="input" v-model="firstName" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
                <input class="input" v-model="lastName" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" v-model="email" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input class="input" v-model="username" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" v-model="password" type="text" placeholder="Text input">
            </div>
        </div>
        <button class="button is-primary" @click="createAccount()">Create Account</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { useUserStore } from '@/stores/UserStore';

export default defineComponent({
    name:"CreateAccount",
    setup(){
        const userState = useUserStore();
        return{
            userState}
    },
    data(){
        return{
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
        }
    },

    methods: {
        createAccount(){
            axios.post('https://localhost:44319/api/Player', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                role: "Player",
                username: this.username,
                password: this.password
            }).then((response) => {
                console.log(response.data);
                this.userState.token = response.data;
            }).catch((error) => {
                console.log(error);
            })
            this.$router.push({ name: 'bank' });
        }
    }
})
</script>