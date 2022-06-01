<template>

<v-container>
  <v-row class="Banner--Personal">
<v-col :md="4">
   <v-img src="./Images/person.jpg"  
    max-height="300"
  max-width="300" class="Banner--Personal-Image"></v-img>
</v-col>

<v-col :md="8">
  <v-row>
    <v-col>
  <h1 class="pt-14 Banner--Personal_Name">Kim Wauben</h1>
  </v-col>
  </v-row>
    <v-row>
    <v-col>
  <h1 class="Banner--Personal_Function">Super designer</h1>
    </v-col>
   </v-row>
   <v-row>
    <v-col>
     <v-btn class="Banner--Personal_Button" color="white" outlined>Bekijk en bewerk profiel</v-btn>
    </v-col>
   </v-row>
  </v-col>
 </v-row>
</v-container>

</template>

<style>
.Banner--Personal {
  padding-top: 0px;
  padding-bottom: 50px;
}

.Banner--Personal-Image {
  padding-left: 80px;
  border-radius: 20px 20px 20px 0px;
}

.Banner--Personal_Button {
border: 2px solid var(--unnamed-color-ffffff);
border: 2px solid #FFFFFF;
border-radius: 60px;
opacity: 1;

}

.Banner--Personal_Name {
  color: white;
}

.Banner--Personal_Function {
  color: white;
}
</style>