<template>
    <div class="box">
        <h1 class="title">{{character.name}}</h1>
        <div class="columns">
            <div class="column">
                <h1 class="title">{{ character.gold }}</h1>
            </div>
            <div class="column">
                {{ character.silver }}
            </div>
            <div class="column">
                {{ character.copper }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Character } from '@/types/Character';

export default defineComponent({
    props: {
        character: Object as () => Character,
    },
})