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
      <v-icon class="icon--medal">mdi-alert-circle</v-icon>

  </v-toolbar>
</template>

<style scoped>

.PersonalBar--bg {
background: var(--unnamed-color-e6f3e9) 0% 0% no-repeat padding-box;
background: #E6F3E9 0% 0% no-repeat padding-box;
opacity: 1;
width: 100vw;
position: absolute;
left: -12.5%;
z-index: -1;
height: 50px;
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