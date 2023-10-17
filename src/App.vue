<template>
  <div id="navbar">
    <!-- Navbar con il logo -->
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <h1>
            <router-link to="/home" class="navbar-brand">Eventer</router-link>
          </h1>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li>
                <router-link to="/home" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">Eventi</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/chiSiamo" class="nav-link">
                  Chi siamo</router-link
                >
              </li>
            </ul>
            <SearchComponent></SearchComponent>
          </div>
        </div>
      </nav>

      <router-view> </router-view>
      <!-- Questo è dove vengono visualizzate le viste/router -->
    </div>
  </div>
  <footerComponent></footerComponent>
</template>

<script>
import { RouterLink } from "vue-router";
import footerComponent from "@/components/footerComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";

export default {
  name: "App",
  components: {
    RouterLink,
    footerComponent,
    SearchComponent,
  },
};
</script>

<style>
h1 {
  font-size: 30px;
  font-family: Neuehaas;
  text-transform: uppercase;
}
</style>
