<template>
  <div class="flex">
    <img src="/imgs/2.png" />
    <div class="w-full md:w-2/3 text-center space-y-6">
      <h1>网易云信</h1>
        <p>登录，即刻创造您的应用</p>
      <div class="flex flex-col space-y-4">
        <input
          type="text"
          v-model="username"
          placeholder="账号"
          class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          v-model="password"
          placeholder="密码"
          class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div class="flex items-center justify-center space-x-2">
        <input
          type="checkbox"
          v-model="agree"
          class="form-checkbox h-4 w-4 text-green-500"
        />
        <span>
          我已阅读并同意
          <span class="text-blue-600">服务协议</span>和
          <span class="text-blue-600">隐私条款</span>
        </span>
      </div>

      <button
        class="bg-blue-500 w-100 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        @click="login"
        :disabled="loading"
      >
        {{ loading ? "登录中..." : "登录" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

// 不需要 export default
const router = useRouter();
const username = ref("seeleabd@163.com");
const password = ref("Fanzhong1210.");
const agree = ref(false);
const loading = ref(false);

const login = async () => {
  if (!username.value || !password.value) {
    alert("请填写完整的账号和密码");
    return;
  }
  if (!agree.value) {
    alert("请同意条款");
    return;
  }

  // 设置 loading 状态在发送请求之前
  loading.value = true;

  try {
    const params = new URLSearchParams();
    params.append("grant_type", "password");
    params.append("username", username.value);
    params.append("password", password.value);
    params.append(
      "client_id",
      "b4b978d1d3404c56ec215a7376d6ee6bde1ebf687bad14be2495b72eac3dd78b"
    ); //  ID
    params.append(
      "client_secret",
      "feb118585f5c5a80f927143cc312724c92359721075ee417e237eb1eb893728d"
    ); //  Secret
    params.append("scope", "user_info projects issues");

    console.log("请求参数:", params.toString());

    const response = await axios.post("https://gitee.com/oauth/token", params, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const token = response.data.access_token;
    localStorage.setItem("oauth_token", token);
    console.log("登录成功，获取到了访问令牌！");
    router.push("/home"); 
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.error_description
      : error.message;
    console.log("登录失败: " + errorMessage);
  } finally {
    loading.value = false; // 不论成功或失败，都要恢复按钮状态
  }
};
</script>

<style scoped>
img {
  /* width: 550px;
  object-fit: fill; */
  width: 45%; /* 保持图片宽度为视口的45% */
  object-fit: cover;
}
.flex {
  display: flex; 
  align-items: center;
}
</style>
