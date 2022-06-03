<template>

<v-toolbar class="PersonalBar" color="#E6F3E9" flat
    height="50px"
    tile>
    <div class="PersonalBar--bg"></div>
      <v-icon class="icon--account">mdi-account</v-icon>
      <h1>Welkom Kim Wauben</h1>
      <v-spacer></v-spacer>
      <v-icon class="icon--medal">mdi-medal</v-icon>
      <v-icon class="icon--medal">mdi-bell</v-icon>
      <v-icon class="icon--medal">mdi-email</v-icon>
      <v-icon class="icon--medal">mdi-help-circle</v-icon>

  </v-toolbar>
</template>

<style scoped>

.PersonalBar--bg {

background:#E6F3E9;
opacity: 1;
width: 100%;
position: absolute;
z-index: -1;
height: 50px;

}

.PersonalBar--bg::before{
position:absolute;
left: -50%;
background: #E6F3E9;
width: 100%;
height: 50px;
content:"";

}

.PersonalBar--bg::after{
position:absolute;
left: 50%;
background: #E6F3E9;
width: 100%;
height: 50px;
content:"";

}


h1 {
color: #00504A;
opacity: 1;
font-size: 14px;
left: 0.34130859375px;
height: 19px;
padding-left: 35px;
}


</style>