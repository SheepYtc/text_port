module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://apis.juhe.cn/simpleWeather/query", //接口地址：http://v.juhe.cn/chengyu/query
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": "" //调用成语词典时，用'/api'代替target里面的地址
                }
            },
            // '/apiqq': {
            //     target: "https://m.maoyan.com/ajax/comingList", //接口地址：http://v.juhe.cn/chengyu/query
            //     changeOrigin: true,
            //     ws: true,
            //     pathRewrite: {
            //         "^/apiqq": "" //调用成语词典时，用'/api'代替target里面的地址
            //     }
            // },

            // '/aa88777': {
            //     target: "http://v.juhe.cn/chengyu/query", //接口地址：http://v.juhe.cn/chengyu/query
            //     changeOrigin: true,
            //     ws: true,
            //     pathRewrite: {
            //         "^/aa88777": "" //调用成语词典时，用'/api'代替target里面的地址
            //     }
            // }
        }
    }
}