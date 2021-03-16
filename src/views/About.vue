<template>
  <div>
    about
    <el-button>my button</el-button>
    <ECharts ref="chart" :option="option" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import * as echarts from 'echarts';
import { h } from 'vue';
import { createComponent } from 'echarts-for-vue'
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  components:{
    ECharts:createComponent({echarts,h})
  },
  setup: () => {
    const count = ref(0);
    const option = {
      
    }
    return { count,option };
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
