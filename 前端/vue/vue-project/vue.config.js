module.exports = {

    devServer: {
        proxy: {  //配置跨域
            '/api' : {
                target: 'http://localhost:8080', //这里后台的地址应该填写你们真实的后台接口
                changOrigin: true,  //允许跨域
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
}