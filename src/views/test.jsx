import { defineComponent } from "vue";
import logo from "@/assets/logo.png";

// 2.用defineComponent定义组件且要导出
export default defineComponent({
  render: () => (
    <>
      <img alt="Vue logo" src={logo} />
      测试公用
    </>
  ),
});
