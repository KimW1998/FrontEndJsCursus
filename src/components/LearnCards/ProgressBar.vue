<script>
export default {
  props: {
    item: {}
  }
}
</script>

<template>
<div class="ProgressBar d-flex justify-center mx-auto">
    <v-progress-linear
     :value="item.progressbar"
     color="red"
     rounded
     stream
     height="8"
     
    ></v-progress-linear>
    </div>
</template>

<style>
.ProgressBar {
    padding-top:5px;
    width: 70%;
}
</style>