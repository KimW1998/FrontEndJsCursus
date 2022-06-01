<template>
  <div class="PersonalBar">
    
      <h1>Welkom Kim Wauben</h1>
      <v-icon class="icon--account">mdi-account</v-icon>
    <slot />
  </div>
</template>

<style scoped>
.PersonalBar {
background: var(--unnamed-color-e6f3e9) 0% 0% no-repeat padding-box;
background: #E6F3E9 0% 0% no-repeat padding-box;
opacity: 1;
height: 50px;
}

h1 {
color: #00504A;
opacity: 1;
font-size: 14px;
left: 0.34130859375px;
height: 19px;
padding-top: 25px;
transform: translateY(-50%);
padding-left: 372px;
}

.icon--account {
height: 19px;
transform: translateY(-80%);
padding-left: 340px;
}
</style>