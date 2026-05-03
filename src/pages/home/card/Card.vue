<template>
<div class="hospital-card">
<div class="left">
<div class="hospital-name">{{hospitalInfo.hosname}}</div>
<div class="tip">
    <div class="tip-level"><svg width="23" height="23" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33 5H5V43H33V5Z" fill="none" stroke="#7f7f7f" stroke-width="2" stroke-linejoin="round"/><path d="M33 21H43V43H33" stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 21H25" stroke="#7f7f7f" stroke-width="2" stroke-linecap="round"/><path d="M19 15V27" stroke="#7f7f7f" stroke-width="2" stroke-linecap="round"/></svg>{{hospitalInfo.hostype}}</div>
    <div class="tip-time"><svg width="23" height="23" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="none" stroke="#7f7f7f" stroke-width="2" stroke-linejoin="round"/><path d="M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883" stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>{{hospitalInfo.releaseTime}}</div>
</div>
</div>
<div class="right">
    <img :src="hospitalInfo.logoData" alt="">
</div>

</div>
</template>

<script setup lang="ts">
defineProps([
    'hospitalInfo'   //接收父组件传来的医院信息
])
</script>

<style scoped lang="scss">
.hospital-card{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 25px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(21, 21, 21, 0.1);
    .left{
        width: 60%;
        .tip{
            color: #7f7f7f;
            display: flex;
            margin-top: 10%;
            justify-content: space-between;
                .tip-level{
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .tip-time{
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
        }
    }
    
}
img{
    width: 80px;
    height: 80px;
}
</style>