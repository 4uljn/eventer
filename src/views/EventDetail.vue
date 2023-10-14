<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Colonna stretta (4 su 12) con immagine -->
      <div class="col-md-4">
        <div class="sticky">
          <img :src="event.image" class="rounded-image" />
        </div>
      </div>

      <!-- Colonna ampia (8 su 12) con dettagli dell'evento -->
      <div class="col-md-8">
        <h1>{{ event.name }}</h1>

        <div class="mb-3">
          <p class="date">{{ event.date }}</p>
          <p> <span> {{ event.city }}</span> <span> {{ event.category }}</span></p>
        </div>
        <div class="jumbotron">
          <div>
            <h3>Prezzo:</h3>
          <p>{{ event.price }}</p> 
          </div>
         <div class="addToCartContainer">
          <button id="addToCartButton" @click="addToCartAndRedirect">Aggiungi al Carrello</button>
         </div>
          
        </div>
        <div class="mb-3">
          <label for="description"> About</label>
          <p>{{ event.description }}</p>
          <p> Questo è un evento {{ event.age }}</p>
          <p> Presentato da {{ event.presentedBy }}</p>
        </div>
        <hr class="hr custom-hr">
        <div>
          <h4> Venue</h4>
          <p> {{ event.at }}</p>
        </div>
        <hr class="hr custom-hr">
      </div>
    </div>
    <p> Eventi Correlati</p>
    <div id="relatedEventsCarousel" class="carousel slide mt-4" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(group, index) in imageGroups" :key="index" :class="{ 'carousel-item': index === 0 }">
          <div class="row">
            <div class="col-2" v-for="image in group" :key="image.id">
              <router-link :to="'/event/' + image.id">
                <img :src="image.image" class="d-block w-100 img-thumbnail" :alt="image.alt" />
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
        return event.city === this.event.city && event.category === this.event.category && event.id !== this.event.id;
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
    // ... Il resto del tuo codice ...
  },
};
</script>

<style scoped>
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
}

.jumbotron {
  background-color: rgb(52, 48, 48);
  display: flex;
}

.custom-hr {
  background-color: white
    /* Imposta il tuo colore desiderato */
  ;

}

.carousel-inner .carousel-item {
  display: flex;
}

.carousel-inner .carousel-item .row {
  flex: 1;
  margin-right: 10px;
  /* Imposta il margine desiderato tra le immagini */
}

.addToCartContainer{
  margin-left: 30%;
}

#addToCartButton{
  border: 1px solid yellow;
  border-radius: 10px;
  background-color: yellow;
  padding: 2%;
}
</style>


