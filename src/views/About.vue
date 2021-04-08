<template>
  <div>
    about
    <el-button @click="setStateName('bbb')">my button</el-button>
    <!-- {{name}} -->
    {{ name }} 年龄{{ age }}

    <div>{{people.name}}{{people.age}}</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent,reactive,computed } from "vue";
import { useStore } from "vuex";
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
    const store = useStore();
    let name: ageObject = computed(() => store.state.name);
    interface ageObject {
      value: number;
    }
    let age: ageObject = ref(20);
    interface People {
      name: string;
      age: number;
      sex?: string;
      like?: string;
    }
    let people: People = reactive({
      name: "justin",
      age: 11,
    });
    console.log(age);
    function setStateName(name) {
      store.dispatch("setStateName", name);
      age.value = 30;
      people.name = "abc";
      people.age+=1;
    }
    const option = {};
    return { count, name, age, people,option, setStateName };
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
