<template>
    <div class="bottom">
        <div class="container">
            <div class="left">京ICP备 13018369号 电话挂号010-56253825</div>
            <div class="right">
                <span>联系我们</span>
                <span>合作咨询</span>
                <span>用户隐私</span>
                <span>隐私协议</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.bottom{
    width: 100%;
    height: 60px;
    background-color: rgb(228, 235, 233);
    display: flex;
    justify-content: center;
    .container{
        width: 85%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
           color: #6e6d6d;
            font-size: 14px;
        }
        .right{
            color: #6e6d6d;
            font-size: 14px;
            span{
                margin: 0 3px;
            }
        }

    }
}
</style>