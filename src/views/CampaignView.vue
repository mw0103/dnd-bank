<template>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <div class="title">
                    {{ campaign.title }}
                </div>
            </div>
        </div>
    </section>
    <section class="section">
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
                                <div v-for="character in campaign.characters" :key="character.id">
                                    <CharacterCard :character="character" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { Campaign } from '@/types/Campaign';
import { Character } from '@/types/Character';
import CharacterCard from '@/components/CharacterCard.vue';
export default defineComponent({
    setup() {
        const user = useUserStore();
        return {user}
    },
    props: {
        campaign: Object as () => Campaign,
    },
    components: {
        CharacterCard
    },
})
</script>