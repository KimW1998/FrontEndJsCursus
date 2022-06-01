<template>

  <div class="NavigationBar">
    
    <PersonalBar />
    <v-toolbar class="NavigationBar" color="#FFFFFF" flat
    height="80px"
    tile>
       <h1 class="NavigationBar--logo">CLASS</h1>
       <v-btn class="NavigationBar--Search">Wil je iets zoeken...?</v-btn>
      <v-spacer></v-spacer>
      <a href="test" class="NavigationBar--Link-home">Home</a>
      <a href="test" class="NavigationBar--Link-KennisPlein">KennisPlein</a>
      <a href="test" class="NavigationBar--Link-Experts">Experts</a>
      <a href="test" class="NavigationBar--Link-Leeractiviteiten">Leeractiviteiten</a>
      <a href="test" class="NavigationBar--Link-Ontwikkeldossier">Mijn Ontwikkeldossier</a>

  </v-toolbar>
    
  </div>
</template>

<style scoped>
.NavigationBar {
background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 7px 22px #00000014;
opacity: 1;
height: 130px;
}

.NavigationBar--logo {
  padding-left: 20px;
  padding-right: 20px;
}

.NavigationBar--Search {
border-radius: 20px;
width: 295px;

}

a {
padding: 0px 10px 0px 10px;
}

</style>