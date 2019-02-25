const FAKE_DATA = [
    {
        id:"201802250029232",
        hash:"xsa213j9wqh92s",
        name:"小马智能电动汽车 GT9",
        block_height:2321,
        details:{
            manufacturing:{
                manufacture:"小马汽车有限公司",
                sales:"小马汽车上海总经销",
                branch:"小马汽车分销商",
                madein:"小马汽车制造厂",
                datetime:"2018-02-12"
            },
            supervise:{
                qulityCode:"PP21KXP212",
                checkinCode:"xcnej28gg2h2"
            }
        },
        history:[
            {   title:"分销商上架",
                charger:"分销商：小马汽车上海浦东店",
                location:"上海浦东龙阳路",
                time:"2019-02-23 12:02:12"
            }, 
            {   title:"分销商入库",
                charger:"分销商：小马汽车上海浦东店",
                location:"上海浦东龙阳路",
                time:"2019-02-23 10:02:12"
            }, 
            {   title:"送达至分销商",
                charger:"物流公司：顺丰集团",
                location:"上海浦东龙阳路",
                time:"2019-02-22 12:02:12"
            }, 
            {   title:"经销商发货",
                charger:"经销商：上海永达集团",
                location:"上海浦东张江路2018号",
                time:"2019-02-21 12:02:12"
            }, 
            {   title:"经销商入库",
                charger:"经销商：上海永达集团",
                location:"上海浦东张江路2018号",
                time:"2019-02-21 12:02:12"
            }   
        ],
        relationship:{
            id:"201802250029232",
            name:"小马智能电动车 GT9",
            children:[
               { id:"cj20u21k21",
                 name:"AAA发动机"
               },
               { id:"cjo29i2hd1g",
                 name:"米其林轮胎YC-21"
               },
               { id:"clkiw92hdd",
                 name:"国信玻璃"
               },
               { id:"hf7hjkis",
                 name:"安凯车饰"
               },
            ]
        }
    },
    {
        id:"cj20u21k21",
        hash:"xsasasew121s",
        name:"AAA发动机",
        block_height:2320,
        details:{
            manufacturing:{
                manufacture:"AAA发动机有限公司",
                sales:"AAA发动机有限公司",
                branch:"AAAA发动机有限公司",
                madein:"AAA发动机制造厂",
                datetime:"2018-02-12"
            },
            supervise:{
                qulityCode:"PP21KXP212",
                checkinCode:"xcnej28gg2h2"
            }
        },
        history:[
            {   title:"小马智能电动车安装",
                charger:"安装方：小马智能电动车",
                location:"上海浦东张江",
                time:"2018-10-23 12:02:12"
            }, 
            {   title:"小马智能电动车入库",
                charger:"购买方：小马智能电动车入库",
                location:"上海浦东张江",
                time:"2019-10-7 10:02:12"
            }, 
            {   title:"送达至生产方",
                charger:"物流公司：顺丰集团",
                location:"上海浦东龙阳路 小马智能电动车工厂",
                time:"2019-10-1 12:02:12"
            }  
        ],
        relationship:{
            id:"cj20u21k21",
            name:"AAA发动机",
            children:[
               { id:"09371721",
                 name:"南方电机轴承"
               },
               { id:"gej929uh2",
                 name:"山东德方金属外壳"
               }
            ]
        }
    },
    {
        id:"cjo29i2hd1g",
        hash:"cjo29i2hd1g",
        name:"米其林轮胎YC-21",
        block_height:2320,
        details:{
            manufacturing:{
                manufacture:"米其林国际",
                sales:"上海米其林轮胎销售有限公司",
                branch:"上海米其林总代理",
                madein:"苏州米其林制造厂",
                datetime:"2018-02-12"
            },
            supervise:{
                qulityCode:"PP2121KXP212",
                checkinCode:"fexcnej28gg2h2"
            }
        },
        history:[
            {   title:"小马智能电动车安装",
                charger:"安装方：小马智能电动车",
                location:"上海浦东张江",
                time:"2018-10-23 12:02:12"
            }, 
            {   title:"小马智能电动车入库",
                charger:"购买方：小马智能电动车入库",
                location:"上海浦东张江",
                time:"2019-10-7 10:02:12"
            }, 
            {   title:"送达至生产方",
                charger:"物流公司：顺丰集团",
                location:"上海浦东龙阳路 小马智能电动车工厂",
                time:"2019-10-1 12:02:12"
            }  
        ],
        relationship:{
            id:"cjo29i2hd1g",
            name:"米其林轮胎YC-21",
            children:[
               { id:"nji6ts1",
                 name:"菲律宾吉祥YH82型号橡胶"
               },
               { id:"xw21233",
                 name:"日本旭化成HX2胶水"
               }
            ]
        }
    }
]

export default FAKE_DATA