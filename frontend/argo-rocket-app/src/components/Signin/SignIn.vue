<template>
  <div class="signin-ctn">
    <div class="logo-ctn">
      <img src="../../assets/img/rocket-logo.png" alt="Logo" />
      <h1>Argo Rocket</h1>
      <p>From the microscopic to the cosmos</p>
    </div>
    <form class="signin-form" @submit.prevent="handleSubmit">
      <h2>Login</h2>
      <div class="input-wrapper">
        <UserIcon class="input-icon" :class="{ 'hide-icon': username }" />
        <label :class="{ 'has-value': username }" for="username"
          >Username</label
        >
        <input v-model="username" type="text" placeholder="Username" />
      </div>
      <div class="input-wrapper">
        <LockIcon class="input-icon" :class="{ 'hide-icon': password }" />
        <label :class="{ 'has-value': password }" for="password"
          >Password</label
        >
        <input v-model="password" type="password" placeholder="Password" />
      </div>
      <button class="submit-btn" type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
import api from "../../service/api";
import "./SignIn.scss";
import { User, Lock } from "lucide-vue-next";

export default {
  components: {
    UserIcon: User,
    LockIcon: Lock,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await api.postUser(this.username, this.password);
        if (response.status === 200) {
          this.$router.push("/rockets");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        // Handle error here
        // For example, you might show an error message:
        alert(
          "Login failed. Please check your username and password and try again."
        );
      }
    },
  },
};
</script>
