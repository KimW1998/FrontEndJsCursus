<template>
  <div class="NavigationBar">
      <PersonalBar />
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
</style>