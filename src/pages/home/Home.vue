<template>
    <div>
        <!-- 轮播图 -->
        <Carousel />
        <!-- 搜索 -->
        <Search />
        <!-- 医院结构展示 -->
        <el-row :gutters="20">
            <el-col :span="20">
                <Level />
                <Religon />
            </el-col>
            <el-col :span="4">
                news
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import Carousel from './carousel/Carousel.vue'
import Search from './search/Search.vue'
import Level from './level/Level.vue'
import Religon from './religon/Religon.vue'
</script>
<style scoped lang="scss">

</style>