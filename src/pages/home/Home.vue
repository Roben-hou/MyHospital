<template>
    <div>
        <!-- 轮播图 -->
        <Carousel />
        <!-- 搜索 -->
        <Search />
        <!-- 医院结构展示 -->
        <el-row :gutters="20">
            <el-col :span="20">
                <!-- 等级 -->
                <Level />
                <!-- 地区 -->
                <Religon />
                <!-- 医院卡片 -->
                <div class="hospital-show">
                    <Card class="item" v-for="item in hospitalArr" :key="item.id" :hospitalInfo="item"/>
                </div>
                <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize"
                    :page-sizes="[10, 20, 30, 40]" :background="true"
                    layout=" prev, pager, next, jumper, ->,sizes,total" :total="total" />
            </el-col>
            <el-col :span="4">
                news
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { reqHospital } from '@/api/home';
import Carousel from './carousel/Carousel.vue'
import Search from './search/Search.vue'
import Level from './level/Level.vue'
import Religon from './religon/Religon.vue'
import Card from './card/Card.vue';
// 分页相关
import { ref } from 'vue';
let pageNo = ref(1);
let pageSize = ref(10);
let hospitalArr = ref<any[]>([])
let total = ref(0);
//发请求获取数据的函数
const getHospital = async() => {
    let result:any = await reqHospital(pageNo.value, pageSize.value);
    if (result.code == 200) {
        hospitalArr.value = result.data.content;
        total.value = result.data.totalElements;
    }
}
onMounted(() => {
    getHospital();
})
</script>
<style scoped lang="scss">
.hospital-show {
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;

    .item {
        width: 42%;
        margin: 20px 10px;
    }
}
</style>