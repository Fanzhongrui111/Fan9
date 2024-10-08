import { createApp } from "vue";
import "@/style.css";
import "vant/lib/index.css";
import { Icon } from "@iconify/vue";
import App from "@/App.vue";

createApp(App).use(Icon).mount("#app");
