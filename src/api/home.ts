import request from "@/utils/request";

// 将 enum 改为 const 对象，符合现代 TypeScript 开发规范
const Api = {
    HOSPITAL_URL: '/hosp/hospital', // 获取医院列表
    DICT_URL: '/cmn/dict/findByDictCode' // 获取数据字典（地区、等级）
}

// 1. 获取医院列表（带分页参数）
export const reqHospital = (page: number, limit: number) =>
    request.get(`${Api.HOSPITAL_URL}/${page}/${limit}`);

// 2. 获取地区或等级列表
export const reqDict = (dictCode: string) =>
    request.get(`${Api.DICT_URL}/${dictCode}`);