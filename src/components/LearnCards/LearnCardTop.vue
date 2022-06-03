<script>
export default {
  props: {
    item: { type: Object, default: () => ({}) }
  }
}
</script>

<template>
    <div class="LearnCardTop" :style="`background-image:url(${item.background})`">
        <slot/>
    </div>
</template>

<style scoped>
.LearnCardTop {
    font: normal normal bold 16px/19px Open Sans;
    color: white;
    text-align: center;
    background: #00504A 0% 0% no-repeat padding-box ;
    background-size: cover;
    height: 77px;
}
</style>