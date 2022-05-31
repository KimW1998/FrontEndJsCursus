<template>
  <div class="NavigationBar">
      <PersonalBar />
      <v-row>
        <v-col :sm="2">
      <h1>Logo</h1>
      </v-col>
         <v-col :sm="3">
      <h1>Search</h1>
      </v-col>
      <v-col :sm="1">
      <a href="test" class="NavigationBar--Link-home">Home</a>
      </v-col>
      <v-col :sm="1">
      <a href="test" class="NavigationBar--Link-home">Home</a>
      </v-col>
      <v-col :sm="1">
      <a href="test" class="NavigationBar--Link-KennisPlein">KennisPlein</a>
      </v-col>
            <v-col :sm="1">
      <a href="test" class="NavigationBar--Link-Experts">Experts</a>
      </v-col>
            <v-col :sm="1">
      <a href="test" class="NavigationBar--Link-Leeractiviteiten">Leeractiviteiten</a>
      </v-col>
            <v-col :sm="2">
      <a href="test" class="NavigationBar--Link-Ontwikkeldossier">Mijn Ontwikkeldossier</a>
      </v-col>
      </v-row>
    <slot />
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

a{
padding-top: 100px;
transform: translateY(-90%);
}

h1 {
  padding-left: 60px;
}

</style>