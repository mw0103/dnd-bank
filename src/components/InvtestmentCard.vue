<template>
    <div class="hero">
        <div class="box clickable">
            <div class="columns">
                <div class="column">
                    <h1 class="title">Name</h1>
                </div>
                <div class="column">
                    <h1 class="title">Description</h1>
                </div>
            </div>
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <p class="subtitle">{{ clonedInvestment.name }}</p>
                    </div>
                    <div class="column">
                        <p class="subtitle">{{ clonedInvestment.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import type { PropType } from 'vue';
import { Investment } from '@/types/Investment';
export default defineComponent({

    name: "InvestmentCard",
    props: {
        investment:{
            type: Object as PropType<Investment>,
            default: () => { 
                return {
                    id: 0,
                    name: '',
                    description: ''
                } as any
            }
        },
    },
    setup(props){
        const clonedInvestment = ref(props.investment);
        console.log(clonedInvestment.value);
        return {
            clonedInvestment,
    }
    }
});
</script>