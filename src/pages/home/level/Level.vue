<template>
<div class="content">
    <h1>医院</h1>
    <div class="level">
    <div class="left">等级:</div>
    <ul>
        <li class="active">全部</li>
        <li>三级甲等</li>
        <li>三级乙等</li>
        <li>二级甲等</li>
        <li>二级乙等</li>
        <li>一级</li>
    </ul>
    </div>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.content {
    h1{
        margin:10px 0;
    }
}

.level {
    display: flex;
    .left{
        margin-right: 5px;
    };
    ul{
        display: flex;
        li{
            margin-right: 10px;
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
