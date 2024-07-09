<template>
    <v-dialog v-bind="modalOpen" max-width="400px">
        <v-card>
            <v-card-title class="error-modal-title">Erro!</v-card-title>
            <v-card-text>{{ errorMessage }}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="$emit('closeModal')">Fechar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "ModalErrorAlert",
    props: {
        modalOpen: Boolean,
        errorMessage: String
    }

}
</script>

<style scoped>
    .error-modal-title {
        background-color: #f44336;
        color: white;
        padding: 15px;
    }
</style>