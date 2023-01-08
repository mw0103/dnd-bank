<template>
    <div class="box clickable">
        <div class="columns">
            <div class="column">
                <h1 class="title">Name</h1>
            </div>
            <div class="column">
                <h1 class="title">Gold</h1>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <h1 class="subtitle">{{ character.name }}</h1>
            </div>
            <div class="column">
                <h1 class="subtitle">{{ character.gold }}</h1>
            </div>
        </div>
        <button class="button is-primary" @click="GoToCharacterView()">
            View
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Character } from '@/types/Character';
export default defineComponent({
    name: "CharacterCard",
    props: {
        character: Object as () => Character,
    },
    methods: {
        GoToCharacterView() {
            this.$router.push({ name: 'CharacterView', params: { characterID: this.character.id } });
        }
    }
});
</script>