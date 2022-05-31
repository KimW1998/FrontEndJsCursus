<template>
    <div class="LearnCardBottom">
        <p class="text-center">Update 31-05-2022</p>
        <slot/>
    </div>
</template>

<style scoped>
.LearnCardBottom {
    background: var(--unnamed-color-e6f3e9) 0% 0% no-repeat padding-box;
background: #E6F3E9 0% 0% no-repeat padding-box;
border-radius: 0px 0px 20px 20px;
opacity: 1;
height: 60px;
}

p {
    padding-top: 60px;
transform: translateY(-50%);
}
</style>