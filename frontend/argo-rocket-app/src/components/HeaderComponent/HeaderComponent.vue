<template>
  <header class="header">
    <div class="header-content">
      <img src="../../assets/img/rocket-logo.png" alt="Logo" /> 
    </div>
    <button class="logout-button" @click="logout">Sign Out</button>
  </header>
</template>

<script>
import "./HeaderComponent.scss";

export default {
  name: "HeaderComponent",
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/');
    }
  }
};
</script>