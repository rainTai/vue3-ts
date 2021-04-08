<template>
  <div>
    <h1>Gossip</h1>
    <el-button @click="change(1)">先天八卦</el-button>
    <el-button @click="change(2)">后天八卦</el-button>
    <div id="gossip"></div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, onBeforeUnmount } from "vue";
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
    let renderer: any = null;
    let flag = 3; //切换先后天八卦
    // @ts-ignore //注释这个引用报错
    const THREE = window.THREE;
    //挂载时
    onMounted(() => {
      realNodes = document.getElementById("gossip");
      initThree();
    });
    //卸载时
    onBeforeUnmount(() => {
      delThree();
    });

    function delThree() {
      realNodes.remove(renderer);
    }
    function change(type) {
      if (type === 1) {
        console.log(1);
        flag = type;
      } else if (type === 2) {
        console.log(2);
        flag = type;
      }
    }

    const initThree = function () {
      let scene = new THREE.Scene();
      var width = 800; //窗口宽度
      var height = 800; //窗口高度
      var k = width / height; //窗口宽高比
      var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
      let camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      camera.position.set(100, 100, 100);
      camera.lookAt(scene.position);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(800, 800);
      //设置背景颜色
      renderer.setClearColor(0xffffff, 1.0);
      realNodes.appendChild(renderer.domElement);

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
      // 线条渲染模式
      var material = new THREE.LineBasicMaterial({
        color: 0xff0000, //线条颜色
      }); //材质对象
      var line = new THREE.Line(geometry3, material); //线条模型对象
      var pMaterial = new THREE.PointsMaterial({
        color: 0xff0000,
        size: 5.0, //点对象像素尺寸
      }); //材质对象
      var point = new THREE.Points(geometry3, pMaterial);
      scene.add(line);
      scene.add(point);

      const nameStr = "乾兑离震巽坎艮坤";
      const positionList = [
        [50, 50, 50],
        [50, 50, -50],
        [50, -50, 50],
        [50, -50, -50],
        [-50, 50, 50],
        [-50, 50, -50],
        [-50, -50, 50],
        [-50, -50, -50],
      ];
      const nameStr2 = "坎坤震巽吾乾兑艮离";
      const positionList2 = [
        [-50, -50, -50],
        [-50, -50, 50],
        [-50, 50, -50],
        [-50, 50, 50],
        [0, 0, 0],
        [50, -50, -50],
        [50, -50, 50],
        [50, 50, -50],
        [50, 50, 50],
      ];
      const nameStr3 = "12345678";
      const positionList3 = [
       [50, 50, 50],
        [50, 50, -50],
        [50, -50, 50],
        [50, -50, -50],
        [-50, 50, 50],
        [-50, 50, -50],
        [-50, -50, 50],
        [-50, -50, -50],
      ];
      const nameStr4 = "123456789";
      const positionList4 = [
        [-50, -50, -50],
        [-50, -50, 50],
        [-50, 50, -50],
        [-50, 50, 50],
        [0, 0, 0],
        [50, -50, -50],
        [50, -50, 50],
        [50, 50, -50],
        [50, 50, 50],
      ];
      var loader = new THREE.FontLoader(); //开始创建文字

      loader.load(
        "src/three/examples/fonts/STSong_Regular.json",
        function (font) {
          if (flag === 1) {
            positionList.forEach((item, index) => {
              let text = new THREE.TextGeometry(nameStr[index], {
                font: font,
                size: 10,
                height: 0.3,
              });
              let material = new THREE.MeshLambertMaterial({
                color: 0x9933ff,
              });
              let mesh_text = new THREE.Mesh(text, material);
              //添加位置
              mesh_text.position.set(...item);
              mesh_text.name = nameStr[index];
              //创建文字
              scene.add(mesh_text);
            });
          } else if (flag === 2) {
            positionList2.forEach((item, index) => {
              let text = new THREE.TextGeometry(nameStr2[index], {
                font: font,
                size: 10,
                height: 0.3,
              });
              let material = new THREE.MeshLambertMaterial({
                color: 0x9933ff,
              });
              let mesh_text = new THREE.Mesh(text, material);
              //添加位置
              mesh_text.position.set(...item);
              mesh_text.name = nameStr2[index];
              //创建文字
              scene.add(mesh_text);
            });
          }else if (flag === 3) {
            positionList3.forEach((item, index) => {
              let text = new THREE.TextGeometry(nameStr3[index], {
                font: font,
                size: 10,
                height: 0.3,
              });
              let material = new THREE.MeshLambertMaterial({
                color: 0x9933ff,
              });
              let mesh_text = new THREE.Mesh(text, material);
              //添加位置
              mesh_text.position.set(...item);
              mesh_text.name = nameStr3[index];
              //创建文字
              scene.add(mesh_text);
            });
          }else if (flag === 4) {
            positionList4.forEach((item, index) => {
              let text = new THREE.TextGeometry(nameStr4[index], {
                font: font,
                size: 10,
                height: 0.3,
              });
              let material = new THREE.MeshLambertMaterial({
                color: 0x9933ff,
              });
              let mesh_text = new THREE.Mesh(text, material);
              //添加位置
              mesh_text.position.set(...item);
              mesh_text.name = nameStr4[index];
              //创建文字
              scene.add(mesh_text);
            });
          }
        }
      );

      // var loader = new THREE.FontLoader(); //开始创建文字
      // loader.load(
      //   "src/three/examples/fonts/STSong_Regular.json",
      //   function (font) {
      //     //上面导入了optimer_regular.typeface.json
      //     var new_text = new THREE.TextGeometry("巽", {
      //       font: font,
      //       size: 10,
      //       height: 0.3,
      //     });
      //     var material_text = new THREE.MeshLambertMaterial({
      //       color: 0x9933ff,
      //     });
      //     /*
      //       定义可以反光的材料,
      //       也可以使用MeshBasicMeterial,
      //       只是对光源无效
      //       0x9933FF是十六进制颜色名
      //       */
      //     var text_1 = new THREE.Mesh(new_text, material_text);
      //     //创建文字
      //     scene.add(text_1);
      //     //添加文字
      //     text_1.position.z = 50;
      //     text_1.position.y = 50;
      //     text_1.position.x = -50;
      //   }
      // );

      // var loader = new THREE.FontLoader(); //开始创建文字
      // loader.load(
      //   "src/three/examples/fonts/STSong_Regular.json",
      //   function (font) {
      //     //上面导入了optimer_regular.typeface.json
      //     var new_text = new THREE.TextGeometry("坎", {
      //       font: font,
      //       size: 10,
      //       height: 0.3,
      //     });
      //     var material_text = new THREE.MeshLambertMaterial({
      //       color: 0x9933ff,
      //     });
      //     /*
      //       定义可以反光的材料,
      //       也可以使用MeshBasicMeterial,
      //       只是对光源无效
      //       0x9933FF是十六进制颜色名
      //       */
      //     var text_1 = new THREE.Mesh(new_text, material_text);
      //     //创建文字
      //     scene.add(text_1);
      //     //添加文字
      //     text_1.position.z = -50;
      //     text_1.position.y = 50;
      //     text_1.position.x = -50;
      //   }
      // );

      // var loader = new THREE.FontLoader(); //开始创建文字
      // loader.load(
      //   "src/three/examples/fonts/STSong_Regular.json",
      //   function (font) {
      //     //上面导入了optimer_regular.typeface.json
      //     var new_text = new THREE.TextGeometry("艮", {
      //       font: font,
      //       size: 10,
      //       height: 0.3,
      //     });
      //     var material_text = new THREE.MeshLambertMaterial({
      //       color: 0x9933ff,
      //     });
      //     /*
      //       定义可以反光的材料,
      //       也可以使用MeshBasicMeterial,
      //       只是对光源无效
      //       0x9933FF是十六进制颜色名
      //       */
      //     var text_1 = new THREE.Mesh(new_text, material_text);
      //     //创建文字
      //     scene.add(text_1);
      //     //添加文字
      //     text_1.position.z = 50;
      //     text_1.position.y = -50;
      //     text_1.position.x = -50;
      //   }
      // );

      // var loader = new THREE.FontLoader(); //开始创建文字
      // loader.load(
      //   "src/three/examples/fonts/STSong_Regular.json",
      //   function (font) {
      //     //上面导入了optimer_regular.typeface.json
      //     var new_text = new THREE.TextGeometry("坤", {
      //       font: font,
      //       size: 10,
      //       height: 0.3,
      //     });
      //     var material_text = new THREE.MeshLambertMaterial({
      //       color: 0x9933ff,
      //     });
      //     var text_1 = new THREE.Mesh(new_text, material_text);
      //     //创建文字
      //     scene.add(text_1);
      //     //添加文字
      //     text_1.position.z = -50;
      //     text_1.position.y = -50;
      //     text_1.position.x = -50;
      //   }
      // );

      var axesHelper = new THREE.AxesHelper(200);
      scene.add(axesHelper);

      function render() {
        renderer.render(scene, camera); //执行渲染操作
        // mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
      }
      render();
      let controls = new THREE.OrbitControls(camera, renderer.domElement); //创建控件对象
      controls.addEventListener("change", render);
    };

    return { count, change };
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
.body {
}
#gossip {
  height: 800px;
  width: 800px;
}
</style>
