<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <!-- Colonna stretta (4 su 12) con immagine -->
      <div class="col-md-4">
        <div class="sticky">
          <img :src="event.image" class="rounded-image" />
        </div>
      </div>

      <!-- Colonna ampia (8 su 12) con dettagli dell'evento -->
      <div class="col-md-8">
        <h1 class="sequel">{{ event.name }}</h1>

        <div class="mb-3">
          <p class="date sequel">{{ event.date }}</p>
          <p>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M10.774 18.763c.262.283.48.509.634.664.194.196.393.385.592.576.199-.19.398-.38.592-.576a30.327 30.327 0 002.557-2.957c.7-.927 1.407-1.993 1.941-3.094.532-1.095.91-2.26.91-3.376a6 6 0 00-12 0c0 1.116.378 2.28.91 3.376.534 1.101 1.242 2.167 1.94 3.094.701.928 1.4 1.727 1.924 2.293zM12 8a2 2 0 100 4 2 2 0 000-4z"
                  stroke="currentColor"
                  stroke-linecap="square"
                ></path>
              </svg>
              {{ event.city }}</span
            >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 19.5l-8-8v-6h6l8 8-6 6z"
                  stroke="currentColor"
                  stroke-linecap="square"
                ></path>
                <path
                  d="M9 7.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                  stroke="currentColor"
                  stroke-linecap="square"
                ></path></svg
              >{{ event.category }}</span
            >
          </p>
        </div>
        <div
          class="jumbotron jumbotron-sm d-flex justify-content-between align-items-center"
        >
          <div>
            <h3 class="sequel">€ {{ event.price }}</h3>
          </div>
          <div class="addToCartContainer">
            <button id="addToCartButton" @click="addToCartAndRedirect">
              Aggiungi al Carrello
            </button>
          </div>
        </div>

        <div class="mb-3">
          <label class="about sequel" for="description"> About</label>
          <p class="sequel">{{ event.description }}</p>
          <p>Questo è un evento adatto a {{ event.age }}</p>
          <p>Presentato da {{ event.presentedBy }}</p>
        </div>
        <hr class="hr custom-hr" />
        <div>
          <h4>Venue</h4>
          <p>{{ event.at }}</p>
        </div>
        <hr class="hr custom-hr" />
      </div>
    </div>
    <p>Eventi Correlati</p>
    <div
      id="relatedEventsCarousel"
      class="carousel slide mt-4"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(group, index) in imageGroups"
          :key="index"
          :class="{ 'carousel-item': index === 0 }"
        >
          <div class="row">
            <div class="col-2" v-for="image in group" :key="image.id">
              <router-link :to="'/event/' + image.id">
                <img
                  :src="image.image"
                  class="d-block w-100 img-thumbnail"
                  :alt="image.alt"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["events"]),
    event() {
      const eventId = parseInt(this.$route.params.id);
      return this.events.find((event) => event.id === eventId) || {};
    },
    eventImage() {
      return this.event.image || "";
    },

    imageGroups() {
      const relatedImages = this.relatedEvents.map((event, index) => ({
        id: event.id,
        image: event.image,
        alt: `Immagine ${index + 1}`,
      }));
      const groupedImages = [];

      for (let i = 0; i < relatedImages.length; i += 6) {
        groupedImages.push(relatedImages.slice(i, i + 6));
      }

      return groupedImages;
    },
    relatedEvents() {
      // Filtra gli eventi correlati in base alla stessa città e categoria
      return this.events.filter((event) => {
        return (
          event.city === this.event.city &&
          event.category === this.event.category &&
          event.id !== this.event.id
        );
      });
    },
  },
  methods: {
    ...mapMutations(["addToCart"]),

    addToCartAndRedirect() {
      // Esegui la mutazione per aggiungere l'evento al carrello
      this.addToCart(this.event);

      // Effettua il reindirizzamento alla vista del carrello
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2em;
}

.sticky {
  position: sticky;
  top: 20px;
}

.rounded-image {
  border-radius: 10%;
  max-width: 100%;
  height: auto;
}

.date {
  color: yellow;
}

.container {
  color: white;
  min-height: 100vh;
}

.jumbotron {
  background-color: rgb(52, 48, 48);
  display: flex;
  border: 10%;
}

.jumbotron-sm {
  padding: 20px;
}

.custom-hr {
  background-color: white /* Imposta il tuo colore desiderato */;
}

.carousel-inner .carousel-item {
  display: flex;
}

.carousel-inner .carousel-item .row {
  flex: 1;
  margin-right: 10px;
  /* Imposta il margine desiderato tra le immagini */
}

.addToCartContainer {
  margin-left: 30%;
}

#addToCartButton {
  border: 1px solid yellow;
  border-radius: 10px;
  background-color: yellow;
  padding: 2%;
}

@font-face {
  font-family: SequelSans;
  src: url(../assets/fonts/sequel-sans/SequelSansBookBody.otf);
}

.sequel {
  font-family: SequelSans;
}

@font-face {
  font-family: Dignus;
  src: url(../assets/fonts/Dignus/Dignus.ttf);
}

.Dignus {
  font-family: Dignus;
}
.about {
  font-size: 30px;
}
</style>
