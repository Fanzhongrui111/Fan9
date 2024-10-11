<template>
  <div class="flex">
    <div class="a">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="{ 'bg-gray-500': selected === index }"
        @click="changeStyle(index)"
      >
        <Icon :icon="item.icon" />
        <span>{{ item.text }}</span>
      </div>
      <hr class="w-12 ml-4" />
      <div class="b">
        <div>
          <Icon
            icon="bxs:widget"
            class="w-6 h-6 cursor-pointer"
          />
          <Icon 
          icon="bxs:message-alt-dots" 
          class="w-6 h-6 cursor-pointer mt-3" />
          <Icon
            icon="bxs:key"
            class="w-6 h-6 cursor-pointer mt-3"
          />
          <Icon
            icon="bxs:user"
            class="w-6 h-6 cursor-pointer mt-3"
          />
        </div>
      </div>
    </div>
    <div v-if="selected === 4">
      <CodeComponent />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import CodeComponent from "./code.vue";
const selected = ref(-1);

const items = [
  { icon: "bxs:keyboard", text: "工作台" },
  { icon: "bxs:file", text: "项目" },
  { icon: "bxs:invader", text: "助手" },
  { icon: "bxs:calendar-check", text: "事项" },
  { icon: "bxs:window-alt", text: "代码" },
  { icon: "bxs:package", text: "打包" },
  { icon: "bxs:mobile", text: "手机传输" },
  { icon: "bxs:joystick", text: "摸鱼" },
  
];

const changeStyle = (index) => {
  selected.value = index;
};
</script>

<style scoped>
.b div {
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 100px;
  text-align: center;
}
.a div {
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 80px;
  text-align: center;
  margin-top: 30px;
  cursor: pointer; 
  transition: background-color 0.5s; /* 过渡动画 */
}
.a div:hover {
  background-color: blue; 
}
</style>
