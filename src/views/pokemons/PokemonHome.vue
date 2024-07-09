<template>
    <v-container class="container-card">
        <v-row>
            <v-col cols="12">
                <h2 class="title">Pokémon</h2>
            </v-col>
        </v-row>

        <pokemon-filter @error="showError" @showPokemon="showPokemon"></pokemon-filter>
        <modal-error-alert v-model="modalOpen" :errorMessage="error" @closeModal="modalOpen = false"></modal-error-alert>
        <pokemon-info :dialog="showInfo" :pokemon="pokemon"></pokemon-info>

    </v-container>
</template>

<script>

import PokemonFilter from "@/components/pokemon/PokemonFilter.vue";
import ModalErrorAlert from "@/components/modals/ModalErrorAlert.vue";
import PokemonInfo from "@/components/pokemon/PokemonInfo.vue";

export default {
    components: {PokemonInfo, ModalErrorAlert, PokemonFilter},
    data() {
        return {
            showInfo: false,
            modalOpen: false,
            error: '',
            pokemon: null
        };
    },
    methods: {
        showError(erro){
            this.error = erro;
            this.modalOpen = true;
        },

        showPokemon(pokemon){
            this.pokemon = pokemon;
            this.showInfo = true;
        }
    }
}

</script>

<style scoped>

    .title {
        font-family: cursive;
        text-align: center;
        margin-bottom: 5px;
        color: #838380 !important;
        font-size: 2em;
    }

    .container-card{
        background-color: white;
        border-radius: 0;
        padding: 20px 10px ;
    }

    @media(min-width: 600px) {

        .container-card {
            padding: 20px;
            border-radius: 8px;
        }
    }

    @media(min-width: 960px) {
        .title {
            font-size: 2.5em;
        }

        .container-card {
            padding: 30px;
            margin: 0 180px;
        }
    }
</style>