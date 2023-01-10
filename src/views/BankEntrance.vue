<template>
    <section class="Hero">
        <div class="Hero-body">
            <div class="Container">
                <h1 class="Title">
                    Pick or Create a Character
                </h1>
                <h2 class="Subtitle">
                    This is where all your gold will be stored. You can add, remove, and transfer gold between
                    characters.
                </h2>
            </div>
        </div>
    </section>
    <section class="section is-medium">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="box">
                        <div class="columns">
                            <div class="column">
                                <h1 class="title">Characters</h1>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <div v-for="character in characters" :key="character.campaignID">
                                    <CharacterCard :character="character" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <section class="box">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <button class="button is-primary" data-target="modal-js-example" @click="CallCreateScreen()">
                        Create Character
                    </button>
                </div>
                <div class="column">
                    <button class="button is-link" data-target="modal-js-example" @click="GoToInvestments()">
                        Investments
                    </button>
                </div>
            </div>
        </div>
    </section>

    <div id="modal-js-example" class="modal">
        <div class="modal-background" @click="CloseModal()"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Create Character</p>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="name">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Gold</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Gold" v-model="gold">
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="CreateCharacter()">Create</button>
                <button class="button" @click="CloseModal()">Cancel</button>
            </footer>
        </div>
    </div>


</template>

<script lang="ts">
import {Character} from '@/types/Character';
import CharacterCardVue from '@/components/CharacterCard.vue';
import { defineComponent } from 'vue';
import { Investment } from '@/types/Investment';
import axios from 'axios';



let Characters: Character[] = [{ id:1, name: "Test", gold: 100, investments: [],playerId:1,campaignID:"3"}];  
let y : Character[] = new Array<Character>();

export default defineComponent({
    mounted() {
        this.GetCharacters();
    },
    name: "BankEntrance",
    data() {
        return {
            characters: Characters,
            gold: 0,
            name: "",
            c : y,
        }
    },
    components: {
        CharacterCard: CharacterCardVue,
    },
    methods: {

        GetCharacters() {
            axios.get('https://localhost:44319/api/character')
            .then(response => {
                this.characters = response.data;
                console.log(response)});
            },

        CreateCharacter() {
            let character = {id:1, name: this.name, gold: this.gold, investments: new Array<Investment>(),playerId:1 ,campaignID:"1"};
            let modal = document.getElementById("modal-js-example");
            this.characters.push(character);
            modal.classList.remove("is-active");
            this.name = "";
            this.gold = 0; 
            axios.post('https://localhost:44319/api/character/create',character)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        },
        CallCreateScreen() {
            let modal = document.getElementById("modal-js-example");
            modal.classList.add("is-active");
        },
        CloseModal() {
            let modal = document.getElementById("modal-js-example");
            modal.classList.remove("is-active");
        },
        GoToInvestments() {
            let modal = document.getElementById("modal-js-example");
            modal.classList.remove("is-active");
            this.$router.push({ name: 'Investments' });
        }
    },
})
</script>

<style>

</style>