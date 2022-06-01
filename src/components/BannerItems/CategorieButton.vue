<template>

    <v-row>
        <v-col v-for="n in 6" :key="n" class="d-flex justify-center">
         <v-btn class="Banner--Categorie_Button">Categorie</v-btn>
        </v-col>
    </v-row>
</template>

<style scoped>
.Banner--Categorie_Button {
border-radius: 0px 10px 10px 10px;
opacity: 1;
padding: 0px 30px 0px 30px;
width: 150px;
height: 62px;
color: #00504A;
margin-bottom: 100px;
}
</style>