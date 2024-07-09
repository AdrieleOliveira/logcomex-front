import { createRouter, createWebHistory } from 'vue-router';
import PokemonHome from "@/views/pokemons/PokemonHome.vue";

const routes = [
    {
        path: '/',
        name: 'Pokemons',
        component: PokemonHome,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;