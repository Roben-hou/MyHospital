<script setup lang="ts">

</script>

<template>
    <div class="container">
        <HospitalTop />
        <div class="content">
        内容展示区域 
        </div>
        <HospitalBottom />
    </div>
</template>
<style scoped lang="scss">
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    .content{
        margin-top: 90px;
        width: 1200px;
        height: 1200px;
        background-color: rgb(208, 206, 206);
    }

}
</style>
