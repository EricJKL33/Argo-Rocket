<template>
  <div class="rocket-list-ctn">
    <ul>
      <li v-for="rocket in rockets" :key="rocket.id">
        <h2>{{ rocket.name }}</h2>
        <img :src="rocket.coverUrl" alt="Rocket image" />
        <p>Active: {{ rocket.active ? "Yes" : "No" }}</p>
        <p>
          First Flight: {{ new Date(rocket.firstFlight).toLocaleDateString() }}
        </p>
        <p>Country: {{ rocket.country }}</p>
        <p>Description: {{ rocket.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import './RocketList.css';
import api from "../../service/api.js";

export default {
  data() {
    return {
      rockets: [],
    };
  },
  async created() {
    try {
      const response = await api.getRockets();
      this.rockets = response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
