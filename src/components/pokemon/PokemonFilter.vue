<template>
    <div class="mt-10">
        <v-row class="justify-center">
            <v-col cols="12" md="6" class="d-flex gap-2">
                <v-text-field v-model="filtro" label="Nome ou Número" variant="outlined"></v-text-field>
                <v-btn class="ma-0 btn-filtrar" color="success" @click="filtrar" >
                    <v-icon size="x-large">mdi-magnify</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from "@/plugins/axios";
import PokemonDTO from "@/dto/PokemonDTO";

export default {
    name: "PokemonFilter",
    data() {
        return {
            filtro: '',
            pokemon: null
        };
    },
    methods: {
        filtrar(){
            axios.get(`/pokemons/${this.filtro}`).then(response => {
                if(response.data.status == 200) {
                    this.pokemon = new PokemonDTO(response.data.data);
                    this.$emit('showPokemon', this.pokemon);
                } else {
                    this.$emit('error', response.data.errors[0]);
                }
            }).catch(() => {
                this.$emit('error', 'Erro ao obter informações do Pokémon. Tente informar um número ou um nome válido!');
            });
        }
    }
}
</script>

<style scoped>
    .btn-filtrar{
        height: 56px !important;
    }
</style>