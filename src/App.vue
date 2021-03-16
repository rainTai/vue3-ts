<template>
  <div>
    <router-link to="/">(🍉 ) => Home</router-link>
    <router-link to="/about">(🌽 ) => About</router-link>
    <router-link to="/test">(🌽 ) => test</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, provide } from "vue";
import * as echarts from "echarts";
import * as three from "three";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    provide("ec", echarts);
    provide("tr", three);
    const count = ref(0);
    return { count };
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
