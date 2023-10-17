<template>
  <div class="container mt-4">
    <h1>Risultati della ricerca per "{{ query }}"</h1>

    <div v-for="event in filteredEvents" :key="event.id">
      <router-link :to="'/event/' + event.id" class="router-link-custom">
        <div class="eventsResult">
          <img :src="event.image" class="rounded-image" />
          <div>
            <p>{{ event.name }}</p>
            <p>{{ event.city }}</p>
          </div>
        </div>
      </router-link>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "", // Inizializza query
    };
  },
  computed: {
    filteredEvents() {
      // Qui filtra gli eventi in base alla query e restituiscili
      return this.$store.state.events.filter((event) => {
        const name = event.name.toLowerCase();
        const city = event.city.toLowerCase();
        return name.includes(this.query) || city.includes(this.query);
      });
    },
  },
  created() {
    // Recupera la query dalla route
    this.query = this.$route.params.query;
  },
};
</script>
<style>
.eventsResult {
  display: flex;
}

.container {
  color: white;
}

hr {
  background-color: white;
}

.rounded-image {
  border-radius: 10%;
  max-width: 20%;
  /* Imposta la larghezza massima desiderata */
  height: auto;
  margin-right: 20px;
}
.router-link-custom {
  color: white;
}
</style>
