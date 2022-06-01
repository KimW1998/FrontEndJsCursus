<template>

<v-container>
  <v-row class="Banner--Personal">
<v-col>
   <v-img src="./Images/person.jpg"  
    max-height="300"
  max-width="300" class="Banner--Personal-Image"></v-img>
</v-col>

<v-col>
  <v-row>
    <v-col>
  <h1>Kim Wauben</h1>
  </v-col>
  </v-row>
    <v-row>
    <v-col>
  <h1>Super designer</h1>
    </v-col>
   </v-row>
   <v-row>
    <v-col>
     <v-btn>Bekijk en bewerk profiel</v-btn>
    </v-col>
   </v-row>
  </v-col>
 </v-row>
</v-container>

</template>

<style>
.Banner--Personal {
  padding-top: 20px;
  padding-bottom: 50px;
}

.Banner--Personal-Image {
  padding-left: 80px;
  border-radius: 20px 20px 20px 0px;
}
</style>