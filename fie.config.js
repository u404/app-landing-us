/*
 * @Description:
 * @Author: zhenguojun
 * @Github:
 * @Date: 2019-08-15 19:55:38
 * @LastEditors: zhenguojun
 * @LastEditTime: 2019-08-16 15:22:58
 */
"use strict"

module.exports = {
  toolkit: "fie-toolkit-vue",

  toolkitConfig: {
    overseas: 2,

    group: "fe-international",

    /**
     * publishPages配置页面发布（必须）
     * outputPath {string} 对应dist目录 例如：index.html
     * publicPath {string} 对应根域名 例如：test/index.html
     * description {string} 页面描述
     */
    publishPages: [
      {
        outputPath: "download.html",
        publicPath: "app/download.html",
        description: "下载移动电影院"
      },
      {
        outputPath: "universal.html",
        publicPath: "app/link.html",
        description: "前往移动电影院"
      },
      {
        outputPath: "universal-wx-test.html",
        publicPath: "app/link-wx-test.html",
        description: "前往移动电影院"
      }
    ]
  },

  pages: {
    download: {
      entry: "src/pages/download/main.js",
      template: "src/pages/download/index.html",
      filename: "download.html"
    },
    universal: {
      entry: "src/pages/universal/main.js",
      template: "src/pages/universal/index.html",
      filename: "universal.html"
    },
    "universal-wx-test": {
      entry: "src/pages/universal-wx-test/main.js",
      template: "src/pages/universal-wx-test/index.html",
      filename: "universal-wx-test.html"
    }
  }
}
