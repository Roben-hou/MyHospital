<template >
    <div>
        <el-carousel height="350px" :autoplay="true" :interval="3000">
            <el-carousel-item v-for="item in imgline" :key="item.id">
                <img :src="item.img" alt="banner" style="width: 100%; height: 350px">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script setup lang="ts">
import banner1 from '@/assets/web-banner-1.png'
import banner2 from '@/assets/web-banner-2.jpg'
import banner3 from '@/assets/web-banner-3.jpg'

let imgline = [
    {
        id: 'p1',
        img: banner1,
    },
    {
        id: 'p2',
        img: banner2,
    },
    {
        id: 'p3',
        img: banner3,
    },
]
</script>
<style lang="scss">
    
</style>