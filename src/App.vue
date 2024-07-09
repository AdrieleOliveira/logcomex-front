<template>
  <v-app>
    <v-main class="page-main">
        <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style>
    .page-main {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #33333338 !important;
    }
</style>
