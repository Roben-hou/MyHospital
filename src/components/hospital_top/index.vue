<template>
    <div class="top">
    <div class="content">
        <div class="left">
            <img src="@/assets/HealSynclogo.jpg" alt="logo">
            <p>医步 预约挂号平台</p>
        </div>
        <div class="right">
            <p class="help">帮助中心</p>
            <p class="login">登录/注册</p>
        </div>
    </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.top{
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 90px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    .content{
        width: 80%;
        height: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        
        .left{
            display: flex;
            align-items: center;
            img{
                width:90px;
                height: 90px;
            }
            p{
                font-size: 20px;
                margin-left: 15px;
                font-weight: bolder;
                color: rgb(65, 134, 198);
            }
        }
        .right{
            display: flex;
            align-items: center;
            justify-content: center;
            .help{
                margin-right: 10px;
            }
            p{
                font-size: 15px;
                color: #6e6d6d;
            }
        }
    }
}
</style>