<template>
    <v-row class="justify-center" v-if="dialog">
        <v-col cols="12">
            <div class="align-center justify-content-center card-info-pokemon">
                <div class="img-pokemon">
                    <v-img :width="300" max-width="300" aspect-ratio="1/1" cover :src="pokemon.url_imagem"></v-img>
                </div>

                <div class="mt-4 ml-0 ml-md-8 grid-info-pokemon">
                    <pokemon-item title="Nome" :info="pokemon.nome"></pokemon-item>
                    <pokemon-item title="Peso" :info="pokemon.peso + ' kg'"></pokemon-item>
                    <pokemon-item title="Altura" :info="pokemon.altura + ' cm'"></pokemon-item>
                    <pokemon-item title="Tipo" :info="pokemon.tipo"></pokemon-item>
                </div>
            </div>
        </v-col>
    </v-row>

</template>

<script>
import PokemonDTO from "@/dto/PokemonDTO";
import PokemonItem from "@/components/pokemon/PokemonItem.vue";

export default {
    name: "PokemonInfo",
    components: {PokemonItem},
    props: {
        dialog: {
            type: Boolean,
            default: false
        },
        pokemon: {
            type:PokemonDTO,
            default: {
                nome: '',
                peso: '',
                altura: '',
                tipo: '',
                url_imagem: ''
            }
        }
    }
}
</script>

<style scoped>
    .grid-info-pokemon {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 18px;
        padding: 0 60px;
    }

    .img-pokemon{
        display: flex;
        justify-content: center;
    }

    @media (min-width: 750px){
        .grid-info-pokemon{
            grid-template-columns: 1fr 1fr;
            column-gap: 50px;
        }

        .card-info-pokemon{
            display: flex;
        }
    }

    @media (min-width: 960px) {

    }
</style>