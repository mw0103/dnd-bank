<template>
    <section class="Hero">
        <div class="Hero-body">
            <div class="Container">
                <h1 class="Title">
                    Pick or Create a Campaign
                </h1>
                <h2 class="Subtitle">
                    This is where all you can find all your campaigns that you've created or joined.
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
                                <h1 class="title">Campaigns</h1>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <div v-for="character in characters" :key="character.campaignID">
                                    <CampaignCard :character="character" />
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
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Create Campaign</p>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="name">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Description" v-model="Description">
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="CreateCampaign()">Create</button>
                <button class="button" @click="CloseModal()">Cancel</button>
            </footer>
        </div>
    </div>


</template>

<script lang="ts">


import { defineComponent, onMounted, ref } from 'vue';

import axios from 'axios';
import CampaignCard from '@/components/CampaignCard.vue';
import { useUserStore } from '@/stores/UserStore';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup(){
        const user = useUserStore();
        const router = useRouter();

        
           const Description = ref("");
            const silver = ref(0);
            const copper = ref(0);
            const name =  ref("");
            const characters = ref([]);
            const c =ref([]);
        function GetCampaigns() {
            axios.get('https://localhost:44319/api/Campaign/Get?playerId='+user.userId,{headers: {Authorization: user.token as string},
            params: {
                playerId: user.userId
            }})
            .then(response => {
                characters.value = response.data;
                console.log(response)});
            };
            onMounted(() => {
                GetCampaigns();
            });

        return {
            user
            ,Description
            ,silver
            ,copper
            ,name
            ,characters
            ,c
        };
    },
   
    name: "BankEntrance",
    components: {
        CampaignCard: CampaignCard,
    },
    methods: {

        
    },
})
</script>

<style>

</style>