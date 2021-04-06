<template>
  <div>
    <router-link to="/">(🍉 ) => Home</router-link>
    <router-link to="/about">(🌽 ) => About</router-link>
    <router-link to="/test">(🌽 ) => test</router-link>
    <el-button @click="jumpGossip">Gossip</el-button>
    <router-view />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, provide } from "vue";
import { useRoute, useRouter } from "vue-router";
import * as echarts from "echarts";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/js/controls/OrbitControls";
import router from "./router";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    // THREE.OrbitControls = OrbitControls
    // console.log(OrbitControls,"akaka");
    provide("ec", echarts);
    // provide("tr", THREE);
    const count = ref(0);

    console.log(three, "kk");
    const router = useRouter();
    onMounted(() => {});
    function jumpGossip() {
      router.push({
        path: "/gossip",
      });
    }
    return { count, jumpGossip };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
