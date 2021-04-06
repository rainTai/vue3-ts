<template>
  <div>
    <h1>home</h1>
    <div style="width: 300px; height: 300px" id="lineChart"></div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, inject, onMounted, onBeforeUnmount } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    let ECHARTS: any = inject("ec");
    // let THREE: any = inject("tr");
    // let render:any = null;
    onMounted(() => {
      initCharts();
      // initThree();
    });
    onBeforeUnmount(() => {
      destoryThree();
    });
    const destoryThree = function () {
      // document.body.removeChild(render);
    };
    // const initThree = function () {
      // var scence = new THREE.Scene();
    //   var camera = new THREE.PerspectiveCamera(
    //     75,
    //     window.innerWidth / window.innerHeight,
    //     0.1,
    //     1000
    //   );
    //   var renderer = new THREE.WebGLRenderer();
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    //   render = renderer.domElement;
    //   document.body.appendChild(render);

    //   var geometry = new THREE.BoxGeometry(1, 1, 1);
    //   var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //   var cube = new THREE.Mesh(geometry, material);
    //   scence.add(cube);
    //   camera.position.z = 5;
    //   var animate = function () {
    //     requestAnimationFrame(animate);
    //     cube.rotation.x += 0.01;
    //     cube.rotation.y += 0.01;
    //     renderer.render(scence, camera);
    //   };
    //   animate();
    // };
    const initCharts = function () {
      let myChart = ECHARTS.init(document.getElementById("lineChart"));
      myChart.setOption({
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
          data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
        },
        yAxis: {},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
      window.onresize = function () {
        //自适应大小
        myChart.resize();
      };
    };
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
