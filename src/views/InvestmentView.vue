<template>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="name">
                    </div>
                    <label class="label">Gold</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Description" v-model="description">
                    </div>
                </div>
                <button class="button is-primary" @click="CreateInvestment()">Create Investment</button>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="box">
                    <div class="columns">
                        <div class="column">
                            <h1 class="title">Investments</h1>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div v-for="investment in tInvestments" :key="investment">
                                <InvtestmentCardVue :investment="investment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script language="ts">
    import { defineComponent } from 'vue';
 
    import { ref } from 'vue';
    import axios from 'axios';
    import InvtestmentCardVue from '@/components/InvtestmentCard.vue';
    export default defineComponent({
        setup() {
            GetInvestments();
            const name = ref('');
            const description = ref('');
            const tInvestments = ref([]);
            function GetInvestments(){
            axios.get('https://localhost:44319/api/Investment/get').then((response) => {
                console.log(response);
                tInvestments.value = response.data;
            });
        }

            function CreateInvestment() {
                
               axios.post('https://localhost:44319/api/investment/create', {
                    name: name.value,
                    description: description.value,
                }).then((response) => {
                    console.log(response);
                });
            }
            return {
                name,
                description,
                tInvestments,
                CreateInvestment,
            };
        },
        components: {
                InvtestmentCardVue,
            },
    })
</script>