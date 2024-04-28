<template>
  <header class="header">
    <div class="header-logo-ctn">
      <img src="../../assets/img/rocket-logo.png" alt="Logo" />
      <span class="logo-title">Argo Rocket</span>
    </div>
    <div class="user-btn-ctn">
      <div class="user-ctn" @click="showSignOut = !showSignOut" ref="userCtn">
        <UserIcon class="user-icon" />
        <span>{{ username }}</span>
      </div>
      <button v-if="showSignOut" class="logout-button" @click="logout">
        Sign Out
      </button>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useRouter } from "vue-router";
import "./HeaderComponent.scss";
import { User } from "lucide-vue-next";
import api from "../../service/api.js";
import { jwtDecode } from "jwt-decode";

export default {
  components: {
    UserIcon: User,
  },
  name: "HeaderComponent",
  setup() {
    const username = ref("");
    const showSignOut = ref(false);
    const userCtn = ref(null);
    const router = useRouter();

    onMounted(async () => {
      const token = localStorage.getItem("user-token");
      if (token) {
        const decoded = jwtDecode(token);
        const id = decoded.id;
        username.value = await api.getUser(id);
      }

      onClickOutside(userCtn, () => {
        showSignOut.value = false;
      });
    });

    const logout = () => {
      localStorage.removeItem("token");
      router.push("/");
    };

    return {
      username,
      showSignOut,
      userCtn,
      logout,
    };
  },
};
</script>
