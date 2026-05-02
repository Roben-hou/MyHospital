<template>
    <div class="search-box">
        <el-autocomplete
            v-model="state1"
            :fetch-suggestions="querySearch"
            clearable
            placeholder="请输入医院名称"
            @select="handleSelect"
            style="width: 800px ;margin:10px 0;"
        />
        <el-button type="primary" size="default" @click="handleSearch" >
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path d="M11 19a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12zm4.95-2.05l2.828 2.828-1.414 1.414-2.828-2.828 1.414-1.414z"/>
            </svg>
        </el-button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

// 搜索输入框值
const state1 = ref('')

// 搜索建议数据
const suggestions = ref([
    { value: '医生咨询' },
    { value: '挂号预约' },
    { value: '病历查询' },
    { value: '药物查询' },
])

// 获取搜索建议
const querySearch = (queryString: string, cb: any) => {
    const result = queryString
        ? suggestions.value.filter(item =>
            item.value.toLowerCase().includes(queryString.toLowerCase())
        )
        : suggestions.value
    cb(result)
}

// 选中建议时的回调
const handleSelect = (item: any) => {
    console.log('选中:', item)
}

// 搜索按钮点击
const handleSearch = () => {
    console.log('搜索:', state1.value)
}
</script>
<style scoped lang="scss">
.search-box {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
} 
</style>