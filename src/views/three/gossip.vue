<template>
  <div class="main">
    <h1>Gossip</h1>
    <div id="gossip" class="gossip"></div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, inject, onMounted, onBeforeUnmount } from "vue";
// import cameraControls from "camera-controls";
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

      // var geometry = new THREE.BoxGeometry(3, 3, 3);
      // var material = new THREE.MeshStandardMaterial({ color: 0x007acc });
      // var cube = new THREE.Mesh(geometry, material);
      // cube.position.set(0, 0, 0); //设置mesh3模型对象的xyz坐标为120,0,0
      // scence.add(cube);

      // 球体网格模型
      // var geometry2 = new THREE.SphereGeometry(1, 16, 8);
      // var material2 = new THREE.LineBasicMaterial({
      //   color: 0xff00ff,
      // });
      // var mesh2 = new THREE.LineSegments(geometry2, material2); //网格模型对象Mesh
      // mesh2.translateY(1); //球体网格模型沿Y轴正方向平移120
      // scence.add(mesh2);
      // console.log(THREE);

      //点光源
      var point = new THREE.AmbientLight(0xffffff);
      point.position.set(50, 100, 50); //点光源位置
      scence.add(point); //点光源添加到场景中

      // 线段模型
      var geometry3 = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
      //类型数组创建顶点数据
      var vertices = new Float32Array([
        -50,
        -50,
        -50, //先天坤卦坐标
        -50,
        -50,
        50, //先天艮卦坐标
        -50,
        50,
        -50, //先天坎卦坐标
        -50,
        50,
        50, //先天巽卦坐标
        50,
        -50,
        -50, //先天震卦坐标
        50,
        -50,
        50, //先天离卦坐标
        50,
        50,
        -50, //先天兑卦坐标
        50,
        50,
        50, //先天乾卦坐标
        -50,
        -50,
        -50, //归位坐标
      ]);
      // 创建属性缓冲区对象
      var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
      // 设置几何体attributes属性的位置属性
      geometry3.attributes.position = attribue;
      // // 三角面(网格)渲染模式
      // var material = new THREE.MeshBasicMaterial({
      //   color: 0x0000ff, //三角面颜色
      //   side: THREE.DoubleSide, //两面可见
      // }); //材质对象
      // var mesh = new THREE.Mesh(geometry3, material); //网格模型对象Mesh
      // 线条渲染模式
      var material = new THREE.LineBasicMaterial({
        color: 0xff0000, //线条颜色
      }); //材质对象
      var line = new THREE.Line(geometry3, material); //线条模型对象
      scence.add(line);

      camera.position.set(200, 300, 200); //设置相机位置
      camera.lookAt(scence.position); //设置相机方向(指向的场景对象

      // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
      var axisHelper = new THREE.AxisHelper(250);
      scence.add(axisHelper);

      const loader = new THREE.FontLoader();
      let geometryx: any;
      var meshMaterial: any;
      var mesh: any;
      loader.load("examples/fonts/helvetiker_regular.typeface.json", function (
        font
      ) {
        geometryx = new THREE.TextGeometry("？", {
          font: font,
          size: 80,
          height: 5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 10,
          bevelSize: 8,
          bevelOffset: 0,
          bevelSegments: 5,
        });
        //建立法向量材质
        meshMaterial = new THREE.MeshNormalMaterial({
          flatShading: THREE.FlatShading,
          transparent: true,
          opacity: 0.9,
        });
        mesh = new THREE.Mesh(geometryx, meshMaterial);
        mesh.position.set(100, 200, 50);
        scence.add(mesh);
      });

      let one: any;
      var oneMaterial: any;
      var oneMesh: any;
      loader.load("examples/fonts/helvetiker_regular.typeface.json", function (
        font
      ) {
        one = new THREE.TextGeometry("1", {
          font: font,
          size: 10,
          height: 2,
          curveSegments: 2,
          bevelEnabled: false,
          bevelThickness: 0,
          bevelSize: 0,
          bevelOffset: 0,
          bevelSegments: 0,
        });
        //建立法向量材质
        oneMaterial = new THREE.MeshNormalMaterial({
          flatShading: THREE.FlatShading,
          transparent: true,
          opacity: 0.9,
        });
        oneMesh = new THREE.Mesh(one, oneMaterial);
        oneMesh.position.set(50, 50, 50);
        scence.add(oneMesh);
      });

      // geometryx.position.set(20, 20, 20);
      // scence.add(geometryx)
      // 纹理贴图映射到一个矩形平面上
      var geometry = new THREE.BoxGeometry(204, 102,100); //矩形平面
      // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
      var textureLoader = new THREE.TextureLoader();
      let meshs: any;
      // 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
      textureLoader.load("statics/people.jpg", function (texture) {
        var material = new THREE.MeshLambertMaterial({
          // color: 0x0000ff,
          // 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
          map: texture, //设置颜色贴图属性值
          side: THREE.DoubleSide, //两面可见
        }); //材质对象Material
        meshs = new THREE.Mesh(geometry, material); //网格模型对象Mesh
        scence.add(meshs); //网格模型添加到场景中
      });

      var animate = function () {
        requestAnimationFrame(animate);
        // cube.rotation.x += 0.001;
        // cube.rotation.y += 0.001;
        // mesh2.rotation.x += 0.01;
        // mesh2.rotation.y += 0.01;
        // line.rotation.x += 0.001;
        // line.rotation.y += 0.001;
        // mesh.rotation.x += 0.001;
        if (mesh) {
          mesh.rotation.y += 0.003;
        }
        if (oneMesh) {
          oneMesh.rotation.y += 0.001;
          oneMesh.rotation.x += 0.001;
        }
        if (meshs) {
          meshs.rotation.y += 0.01;
          meshs.rotation.x += 0.01;
        }

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
