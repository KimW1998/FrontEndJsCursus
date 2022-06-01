<template>
    <div class="LearnCardTop">
        <slot/>
    </div>
</template>

<style scoped>
.LearnCardTop {
    font: normal normal bold 16px/19px Open Sans;
    color: white;
    text-align: center;
    background: #00504A 0% 0% no-repeat padding-box url('/Images/LearnCardBackground.png');
    background-size: cover;
    height: 77px;
}
</style>