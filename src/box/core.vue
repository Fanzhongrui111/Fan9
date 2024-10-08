<template>
  <el-aside width="150px">
    <el-menu :collapse-transition="false" :router="true">
      <el-menu-item>
        <el-icon><House /></el-icon>
        <span>工作台</span>
      </el-menu-item>
      <el-menu-item>
        <el-icon><Loading /></el-icon>
        <span>项目</span>
      </el-menu-item>
      <el-menu-item>
        <template #title>
          <el-icon><Loading /></el-icon>
          <span>AI</span>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template #title>
          <el-icon><Loading /></el-icon>
          <span>事项</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/home" class="active">
        <template #title>
          <el-icon><Loading /></el-icon>
          <span>代码</span>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template #title>
          <el-icon><Loading /></el-icon>
          <span>制品</span>
        </template>
      </el-menu-item>

      <el-menu-item>
        <template #title>
          <el-icon><Loading /></el-icon>
          <span>洞察</span>
        </template>
      </el-menu-item>

      <el-menu-item>
        <template #title>
          <el-icon><Loading /></el-icon>
          <span>知识</span>
        </template>
      </el-menu-item>

      <el-menu-item>
        <template #title>
          <el-icon><Loading /></el-icon>
          <span>自动化</span>
        </template>
      </el-menu-item>

      <el-menu-item>
        <template #title>
          <el-icon><Loading /></el-icon>
        </template>
      </el-menu-item>

      <el-menu-item>
        <template #title>
          <el-icon><Loading /></el-icon>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template #title>
          <el-icon><Loading /></el-icon>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template #title>
          <el-icon><Loading /></el-icon>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template #title>
          <el-icon><Loading /></el-icon>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template #title>
          <el-icon><Loading /></el-icon>
        </template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script setup>
// 引入图标
import { House, Loading } from "@element-plus/icons-vue";
// 引入路由
import { useRoute } from "vue-router";
import { onMounted } from "vue";

// 实例化路由
const route = useRoute();

onMounted(() => {
  document.querySelector(".active").focus();
});
</script>

<style lang="less" scoped>
.el-aside {
  height: 100vh;

  .el-menu {
    height: 100vh;
  }
}
.active:checked {
  color: rgb(68, 136, 237);
}
.active:hover {
  color: rgb(68, 136, 237);
}
.active:focus {
  color: rgb(68, 136, 237);
}
.active:active {
  color: rgb(68, 136, 237);
}
</style>
