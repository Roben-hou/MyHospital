import { MockMethod } from 'vite-plugin-mock'

export default [
    // 1. 获取医院列表
    {
        url: '/api/hosp/hospital/:page/:limit',
        method: 'get',
        response: (config: any) => {
            return {
                code: 200,
                message: '成功',
                data: {
                    content: [
                        { id: '1', hosname: '北京协和医院', hostype: '三级甲等', districtCode: '东城区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/北京协和.png' },
                        { id: '2', hosname: '北京大学第一医院', hostype: '三级甲等', districtCode: '西城区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/北京一.webp' },
                        { id: '3', hosname: '中日友好医院', hostype: '三级甲等', districtCode: '朝阳区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/中日友好.webp' },
                        { id: '4', hosname: '北京同仁医院', hostype: '三级甲等', districtCode: '东城区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/同仁.webp' },
                        { id: '5', hosname: '北京天坛医院', hostype: '三级甲等', districtCode: '丰台区', releaseTime: '每天9点30分放号', logoData: '/hospital_logos/北京天坛.webp' },
                        { id: '6', hosname: '北京安贞医院', hostype: '三级甲等', districtCode: '朝阳区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/安贞.webp' },
                        { id: '7', hosname: '北京朝阳医院', hostype: '三级甲等', districtCode: '朝阳区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/朝阳.webp' },
                        { id: '8', hosname: '北京宣武医院', hostype: '三级甲等', districtCode: '西城区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/宣武.webp' },
                        { id: '9', hosname: '北京积水潭医院', hostype: '三级甲等', districtCode: '西城区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/积水潭.webp' },
                        { id: '10', hosname: '北京儿童医院', hostype: '三级甲等', districtCode: '西城区', releaseTime: '每天8点00分放号', logoData: '/hospital_logos/儿童.webp' },
                        { id: '11', hosname: '北京妇产医院', hostype: '三级甲等', districtCode: '东城区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/妇产.webp' },
                        { id: '12', hosname: '北京友谊医院', hostype: '三级甲等', districtCode: '西城区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/友谊.webp' },
                        { id: '13', hosname: '北京大学人民医院', hostype: '三级甲等', districtCode: '西城区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/人民.webp' },
                        { id: '14', hosname: '北京大学第三医院', hostype: '三级甲等', districtCode: '海淀区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/北三.webp' },
                        { id: '15', hosname: '北京大学口腔医院', hostype: '三级甲等', districtCode: '海淀区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/口腔.png' },
                        { id: '16', hosname: '北京肿瘤医院', hostype: '三级甲等', districtCode: '海淀区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/肿瘤.webp' },
                        { id: '17', hosname: '北京世纪坛医院', hostype: '三级甲等', districtCode: '海淀区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/世纪坛.webp' },
                        { id: '18', hosname: '北京回龙观医院', hostype: '三级甲等', districtCode: '昌平区', releaseTime: '每天8点30分放号', logoData: '/hospital_logos/龙观.webp' },
                        { id: '19', hosname: '航天中心医院', hostype: '三级乙等', districtCode: '海淀区', releaseTime: '每天8点00分放号', logoData: '/hospital_logos/航天.webp' },
                        { id: '20', hosname: '北京大学国际医院', hostype: '三级甲等', districtCode: '昌平区', releaseTime: '每天7点00分放号', logoData: '/hospital_logos/国际.webp' }

                    ],
                    totalElements: 20,
                    totalPages: 2
                }

            }
        }
    },
    // 2. 获取数据字典（地区、等级）
    {
        url: '/api/cmn/dict/findByDictCode/:dictCode',
        method: 'get',
        response: (config: any) => {
            const { dictCode } = config.query;
            // 如果请求的是等级
            if (dictCode === 'Hostype') {
                return {
                    code: 200,
                    data: [
                        { name: '三级甲等', value: '10001' },
                        { name: '三级乙等', value: '10002' },
                        { name: '二级甲等', value: '10003' },
                        { name: '二级乙等', value: '10004' },
                        { name: '一级', value: '10005' }
                    ]
                }
            }
            // 如果请求的是地区（北京市各区）
            return {
                code: 200,
                data: [
                    { name: '东城区', value: '110101' },
                    { name: '西城区', value: '110102' },
                    { name: '朝阳区', value: '110105' },
                    { name: '丰台区', value: '110106' },
                    { name: '石景山区', value: '110107' },
                    { name: '海淀区', value: '110108' },
                    { name: '门头沟区', value: '110109' },
                    { name: '房山区', value: '110111' },
                    { name: '通州区', value: '110112' },
                    { name: '顺义区', value: '110113' },
                    { name: '昌平区', value: '110114' },
                    { name: '大兴区', value: '110115' }
                ]
            }
        }
    }
] as MockMethod[]

