<template>
    <div>
        <input v-model="username" placeholder="username" />
        <input v-model="password" placeholder="password" />
        <button @click="login">Login</button>
    </div>
</template>

<script>

import api from '../service/api.js'

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async signIn() {
      try {
        await api.postUser(this.username, this.password);
        // Gérer la réponse
      } catch (error) {
        // Gérer l'erreur
      }
    }
  }
};
</script>