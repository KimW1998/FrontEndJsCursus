<template>
    <div >
        <v-row class="DateCard">
            <v-col class="pa-0">
                <v-row>
                    <v-col >
                        <p class="text-center ma-0">Van</p>
                        <p class="text-center ma-0">Date</p>
                    </v-col>
                </v-row>
            </v-col>
            <div class="DateCard--Splits"></div>
            <v-col class="pa-0">
                              <v-row>
                    <v-col >
                        <p class="text-center ma-0">Tot</p>
                        <p class="text-center ma-0">Date</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<style>
.DateCard {
border: 1px solid var(--unnamed-color-6dc8bf);
border: 1px solid #6DC8BF;
border-radius: 10px 10px 0px 0px;
opacity: 1;
margin: 0px 20px 0px 20px;
height: 55px;
}

.DateCard--Splits {
border: 1px solid var(--unnamed-color-6dc8bf);
border: 1px solid #6DC8BF;
opacity: 1;
height: 35px;
margin-top: 10px;
}
</style>