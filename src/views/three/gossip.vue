<template>
  <div>
    <h1>Gossip</h1>
    <div id="gossip"></div>
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
    // 挂载节点
    let realNodes: any = document.getElementById("gossip");
    let THREE: any = inject("tr");
    let render: any = null;
    //挂载时
    onMounted(() => {
      initThree();
    });
    //卸载时
    onBeforeUnmount(() => {
      realNodes.remove(render);
    });

    const initThree = function () {
      var scence = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render = renderer.domElement;

      realNodes.appendChild(render);

      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      var cube = new THREE.Mesh(geometry, material);
      scence.add(cube);
      camera.position.z = 5;
      var animate = function () {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scence, camera);
      };
      animate();
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
