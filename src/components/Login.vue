<template>
  <div class="container">
    <img src="/imgs/2.png" alt="Login Image" class="login-image" />
    <div class="login-container">
      <div class="login-header">
        <h1>网易云信</h1>
        <p>登录，即刻创造您的应用</p>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="login-form">
          <label for="username">账号</label>
          <input type="text" id="username" v-model="username" required>

          <label for="password">密码</label>
          <input type="password" id="password" v-model="password" required>

          <button type="submit" :disabled="!isFormValid">登录</button>
          <div class="agreement">
            我已阅读并同意<a href="#">服务协议</a>和<a href="#">隐私政策</a>
          </div>
        </div>
      </form>
      <div class="login-footer">
        <p>还未注册？<a href="#">立即注册</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const isFormValid = computed(() => username.value.trim() !== "" && password.value.trim() !== "");

function handleLogin() {
  if (!isFormValid.value) {
    alert("请填写账号和密码");
    return;
  }

  // 这里添加账号密码验证逻辑
  if (username.value === "jiuyuefenyuece" && password.value === "123456789") {
    // 账号密码正确，跳转到首页
    router.push("/src/box/core.vue");
  } else {
    alert("账号或密码错误");
  }
}
</script>
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .login-image {
    width: 45%; /* 保持图片宽度为视口的45% */
    object-fit: cover;
  }
  
  .login-container {
    background-color: white;
    padding: 30px; /* 增加内边距 */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 55%; /* 调整登录窗口宽度为视口的55% */
    height: 100vh; /* 增加高度 */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .login-header h1 {
    margin: 0;
    font-size: 2em;
    color: #333;
  }
  
  .login-header p {
    margin: 0;
    font-size: 1.2em;
    color: #666;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
  }
  
  .login-form label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .login-form input {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1em;
  }
  
  .login-form button {
    padding: 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .login-form button:hover {
    background-color: #0056b3;
  }
  
  .login-form button:disabled {
    background-color: #aaa;
  }
  
  .agreement {
    margin-top: 15px;
    font-size: 0.9em;
    color: #007bff;
  }
  
  .agreement a {
    color: inherit;
    text-decoration: none;
  }
  
  .login-footer {
    margin-top: auto;
    font-size: 0.9em;
    color: #007bff;
  }
  
  .login-footer a {
    color: inherit;
    text-decoration: none;
  }
  </style>