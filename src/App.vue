<script setup lang="ts">

</script>

<template>
    <div class="container">
        <HospitalTop />
        <div class="content">
            <router-view></router-view>
        </div>
        <HospitalBottom />
    </div>
</template>
<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
        margin-top: 90px;
        width: 90%;
        min-height: 1200px;
        background-color: #fff;
    }
}
</style>
