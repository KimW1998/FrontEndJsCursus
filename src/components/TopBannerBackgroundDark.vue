<template>
  <div class="TopBannerBackgroundDark">
    <NavigationBar />
    <slot />
  </div>
</template>

<style scoped>
.TopBannerBackgroundDark {
background: transparent linear-gradient(90deg, var(--unnamed-color-087164) 0%, var(--unnamed-color-087164) 57%, #6EEB8379 100%) 0% 0% no-repeat padding-box;
background: transparent linear-gradient(90deg, #087164 0%, #087164 57%, #6EEB8379 100%) 0% 0% no-repeat padding-box;
border-radius: 0px 0px 0px 160px;
opacity: 1;
top: 100px;
left: 149px;
width: 1771px;
height: 364px;
}
</style>