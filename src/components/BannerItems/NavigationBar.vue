<template>

  <div class="NavigationBar">
    <PersonalBar />
    
    <v-toolbar class="NavigationBar" color="#FFFFFF" flat
    height="80px"
    tile>
    <div class="NavigationBar--bg"></div>
       <h1 class="NavigationBar--logo">CLASS</h1>
       <v-btn class="NavigationBar--Search">Wil je iets zoeken...?</v-btn>
      <v-spacer></v-spacer>
      <a href="test" class="NavigationBar--Link-home NavigationBar--Link-Color">Home</a>
      <a href="test" class="NavigationBar--Link-KennisPlein NavigationBar--Link-Color">KennisPlein</a>
      <a href="test" class="NavigationBar--Link-Experts NavigationBar--Link-Color">Experts</a>
      <a href="test" class="NavigationBar--Link-Leeractiviteiten NavigationBar--Link-Color">Leeractiviteiten</a>
      <a href="test" class="NavigationBar--Link-Ontwikkeldossier NavigationBar--Link-Color">Mijn Ontwikkeldossier</a>

  </v-toolbar>
    
  </div>
</template>

<style scoped>
.NavigationBar--bg {
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 7px 22px #00000014;
opacity: 1;
height: 80px;
width: 100vw;
position: absolute;
left: -12.5%;
z-index: -1;
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
text-decoration: none;
}

.NavigationBar--Link-Color {
  color: #00504A;
}

a:hover {
  cursor: pointer;
  color: #00A03C;
  text-decoration: underline;
}

</style>