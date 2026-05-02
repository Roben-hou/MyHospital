<template>
<div class="religion">
    <div class="left">地区:</div>
    <ul>
        <li class="active">全部</li>
        <li v-for="value in 18" :key="value">北京某地区</li>
    </ul>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.religion {
    display: flex;
    .left{
        margin-right: 5px;
        margin-top: 7.5px;
        white-space: nowrap;

    };
    ul{
        display: flex;
        flex-wrap: wrap;
        li{
            margin-right: 10px;
            margin-top: 7px;
                &.active{
                    color: #1070d0;
            }
        }
        li:hover{
    color: #1070d0;
    cursor: pointer;
            }
    }
}

</style>
