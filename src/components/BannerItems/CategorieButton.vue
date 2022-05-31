<template>
    <v-row>
        <v-col v-for="n in 6" :key="n" class="d-flex justify-center">
         <v-btn>Categorie</v-btn>
        </v-col>
    </v-row>
</template>

<style scoped>
btn {
border-radius: 0px 10px 10px 10px;
opacity: 1;
}
</style>