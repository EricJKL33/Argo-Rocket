<template>
  <div class="rocket-list-page">
    <HeaderComponent />
    <div v-if="isLoading">
      <span class="loader"></span>
    </div>
    <div v-else>
      <h1>Rockets List</h1>
      <button class="toggle-btn" @click="toggleRocketView">
        {{ showActiveOnly ? "SHOW ALL ROCKET" : "SHOW ONLY ACTIVE ROCKET" }}
      </button>
      <div class="rocket-list">
        <carousel :items-to-show="1">
          <slide v-for="rocket in filteredRockets" :key="rocket.id">
            <div class="rocket-card-ctn">
              <img :src="rocket.coverUrl" alt="Rocket image" />

              <div class="rocket-info">
                <h2>{{ rocket.name }}</h2>

                <div>
                  <strong>ACTIVITY</strong>
                  <span :class="rocket.active ? 'active' : 'inactive'">{{
                    rocket.active ? "Active" : "Inactive"
                  }}</span>
                </div>
                <div>
                  <strong>FIRST FLIGHT</strong>
                  <span>{{
                    new Date(rocket.firstFlight).toLocaleDateString()
                  }}</span>
                </div>
                <div>
                  <strong>COUNTRY</strong>
                  <span>{{ rocket.country }}</span>
                </div>
                <div class="rocket-description">
                  <span class="description-text">
                    <strong>DESCRIPTION -</strong>
                    {{ rocket.description }}</span
                  >
                </div>
              </div>
            </div>
          </slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import "../RocketList/RocketList.scss";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import api from "../../service/api.js";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

export default {
  name: "RocketList",
  components: {
    HeaderComponent,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      rockets: [],
      showActiveOnly: false,
      isLoading: true,
    };
  },
  computed: {
    filteredRockets() {
      if (this.showActiveOnly) {
        return this.rockets.filter((rocket) => rocket.active);
      }
      return this.rockets;
    },
  },
  methods: {
    toggleRocketView() {
      this.showActiveOnly = !this.showActiveOnly;
    },
  },
  async created() {
    try {
      const response = await api.getRockets();
      this.rockets = response.data;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }
  },
};
</script>
