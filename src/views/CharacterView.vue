<template>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    {{ character.name  }}
                </h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CharacterView",
    props: {
        character: Object,
    },
};
</script>