<template>
  <div class="main">
    <h1>Gossip</h1>
    <div id="gossip" class="gossip"></div>
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
    let realNodes: any;
    let THREE: any = inject("tr");
    let render: any = null;
    //挂载时
    onMounted(() => {
      realNodes = document.getElementById("gossip");
      initThree();
    });
    //卸载时
    onBeforeUnmount(() => {
      realNodes.remove(render);
    });

    const initThree = function () {
      var scence = new THREE.Scene();
      var width = 1200; //窗口宽度
      var height = 1200; //窗口高度
      var k = width / height; //窗口宽高比
      var s = 150; //三维场景显示范围控制系数，系数越大，显示的范围越大
      //创建相机对象
      var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      var renderer = new THREE.WebGLRenderer();
      //设置canvas 视图大小
      renderer.setSize(1200, 1200);
      //设置背景颜色
      renderer.setClearColor(0xffffff, 1.0);
      // renderer.setSize(window.innerWidth, window.innerHeight);
      render = renderer.domElement;

      realNodes.append(render);

      //点光源
      var point = new THREE.AmbientLight(0xffffff);
      point.position.set(50, 100, 50); //点光源位置
      scence.add(point); //点光源添加到场景中

      camera.position.set(200, 300, 200); //设置相机位置
      camera.lookAt(scence.position); //设置相机方向(指向的场景对象

      // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
      var axisHelper = new THREE.AxisHelper(200);
      scence.add(axisHelper);

      // 纹理贴图映射到一个矩形平面上
      var geometry = new THREE.BoxGeometry(204, 102, 100); //矩形平面
      // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
      var textureLoader = new THREE.TextureLoader();
      let meshs: any;
      // 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
      textureLoader.load("statics/people.jpg", function (texture) {
        var material = new THREE.MeshLambertMaterial({
          map: texture, //设置颜色贴图属性值
          side: THREE.DoubleSide, //两面可见
        }); //材质对象Material
        meshs = new THREE.Mesh(geometry, material); //网格模型对象Mesh
        scence.add(meshs); //网格模型添加到场景中
      });

      var animate = function () {
        requestAnimationFrame(animate);

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
.gossip {
  width: 100px;
  height: 100px;
}
</style>
