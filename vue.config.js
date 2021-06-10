
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
module.exports = {
  
   
    publicPath: "./",
    // 输出文件目录
    outputDir: "dist",
    // 静态资源存放的文件夹(相对于ouputDir)
    assetsDir: "static",
    //////eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // 我用的only，打包后小些
    runtimeCompiler: true,
    productionSourceMap: false, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
    parallel: require("os").cpus().length > 1,

    configureWebpack: config => {
        if (IS_PROD) {
            config.externals = {
                //     vue: "Vue",
                //     "vue-router": "VueRouter",
                //     vuex: "Vuex",
                //     axios: "axios",
                //     'ant-design-vue': 'antd',
            };
            //配置代码分割 就不能配置pages
            config.optimization = {
                splitChunks: {
                    cacheGroups: {
                        common: {
                            name: "chunk-common",
                            chunks: "initial",
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 1,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        vendors: {
                            name: "chunk-vendors",
                            test: /[\\/]node_modules[\\/]/,
                            chunks: "all",
                            priority: 2,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        vue: {
                            name: "chunk-vue",
                            test: /[\\/]node_modules[\\/]vue[\\/]/,
                            chunks: "all",
                            priority: 4,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        vueRouter: {
                            name: "chunk-vue-router",
                            test: /[\\/]node_modules[\\/]vue-router[\\/]/,
                            chunks: "all",
                            priority: 5,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        moment: {
                            name: "chunk-moment",
                            test: /[\\/]node_modules[\\/]moment[\\/]/,
                            chunks: "all",
                            priority: 6,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        vantUI: {
                            name: "chunk-vant-ui",
                            test: /[\\/]node_modules[\\/]vant[\\/]/,
                            chunks: "all",
                            priority: 7,
                            reuseExistingChunk: true,
                            enforce: true
                        }
                    }
                }

            }



        }
    },

    devServer: {
        open: false,
        // 跨域
        proxy: {
            '/reg': {
                target: 'https://ali.infosalons.com.cn',
                changeOrigin: true,
                // pathRewrite: {
                //   '^/reg': '/reg'
                // }
            }
        }
    }
}