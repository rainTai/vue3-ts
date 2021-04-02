import vue from "@vitejs/plugin-vue";
const path = require("path");
import vueJsx from "@vitejs/plugin-vue-jsx";
const fs = require("fs");

// https://vitejs.dev/config/
const config = {
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      "@": path.resolve(__dirname, "src"),
    },
  },
  // base:'/',
  // publicDir:"/",
  server: {
    proxy: {
      // 简写
      // '/foo': 'http://localhost:4567/foo',
      // 配置
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,  是否切换源
      //   rewrite: (path) => path.replace(/^\/api/, '')  /api是否换成“”
      // },
      // 正则配置
      "^/fallback/.*": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },
    },
    cors: false, //是否跨域,
    force: false, //编译前捆绑插件
  },
  optimizeDeps: {
    include: ["echarts", "three",'three/examples/js/controls/OrbitControls'],
  },
};

export default config;
