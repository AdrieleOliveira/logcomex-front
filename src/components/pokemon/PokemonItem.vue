<template>
    <div class="info-pokemon">
        <p class="info-title">{{ title }}</p>
        <p class="info-description">{{ info }}</p>
    </div>
</template>

<script>
export default {
    name: "PokemonItem",
    props: {
        title: String,
        info: String
    }
}
</script>

<style scoped>
    .info-pokemon{
        display: flex;
        flex-direction: column;
    }

    .info-title{
        font-family: monospace;
        font-size: 1.4em;
        margin-bottom: 8px;
    }

    .info-description{
        font-family: cursive;
        background-color: #a0c3ff !important;
        text-transform: capitalize;
        font-weight: 600;;
        min-width: 130px;
        padding: 5px;
        border-radius: 5px;
        text-align: center;
        color: #3f3f3f;
        font-size: 1.2em;
        letter-spacing: 1px;
    }

    @media(min-width: 960px) {
        .info-description {
            min-width: 180px;
        }
    }
</style>