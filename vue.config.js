//export default ES6写法
module.exports = { //传统写法，不支持export defaulet写法
    devServer : { //开发环境的配置
        proxy : { //反向代理的字段
            '/api' :{
                target : 'http://39.97.33.178',
                changeOrigin : true  //是否改变反向地址
            }
        }
    }
}