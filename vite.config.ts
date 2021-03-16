import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from "vite-plugin-mock";
const dotenv = require("dotenv")
const fs = require("fs")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), viteMockServe({ supportTs: false })],
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      "@": path.resolve(__dirname, "src"),
    },
  }
});
