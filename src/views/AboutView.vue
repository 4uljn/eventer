<template>
  <div class="container mt-4">
    <select v-model="selectedCity">
      <option value="">Tutte le città</option>
      <option v-for="city in uniqueCities" :key="city">{{ city }}</option>
    </select>
    <div>
      <vue-slider
        v-model="priceRange"
        :min="minPrice"
        :max="maxPrice"
      ></vue-slider>
    </div>

    <button @click="openDatePicker">Seleziona Data</button>

    <div id="filters">
      <button class='filter' @click="filterByCategory(null)"><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/></svg></div>Tutte le categorie</button>
      <button class='filter' @click="filterByCategory('gigs')">Gigs</button>
      <button class='filter' @click="filterByCategory('party')">Party</button>
      <button class='filter' @click="filterByCategory('theatre')">Theatre</button>
      <button class='filter' @click="filterByCategory('film')">Film</button>
      <button class='filter' @click="filterByCategory('dj')">DJ</button>
      <button class='filter' @click="filterByCategory('talk')">Talk</button>
      <button class='filter' @click="filterByCategory('social')">Social</button>
      <button class='filter' @click="filterByCategory('art')">Art</button>
      
    </div>

    <!-- Mostra il componente DatePicker quando isDatePickerVisible è true -->
    <datepicker
      v-if="isDatePickerVisible"
      v-model="selectedDate"
      :format="datePickerFormat"
      @input="closeDatePicker"
    ></datepicker>

    <!-- Pulsante "Filtra per prezzo" -->
    <button @click="togglePriceFilter">Filtra per prezzo</button>

    <p>eventi in {{ selectedCity }}</p>
    <div class="row">
      <div class="col-3 mt-4" v-for="event in filteredEvents" :key="event.id">
        <div class="card">
          <img :src="event.image" class="card-img-top" alt="Event Image" />
          <div class="card-body">
            <h5 class="card-title">{{ event.name }}</h5>
            <p class="card-data"> {{ event.date }}</p>
            <p class="card-text"> {{ event.at }}</p>
            <p class="card-text"> {{ event.price }} €</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vue3-datepicker";

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      selectedCategory: null,
      selectedCity: "Milano",
      minPrice: 0,
      maxPrice: 50,
      priceRange: [0, 50],
      // Aggiunta una variabile per gestire se il pulsante "Filtra per prezzo" è stato cliccato
      priceFilterClicked: false,
      selectedDate: null, // Inizializza con null o con una data iniziale se necessario
      isDatePickerVisible: false, // Variabile di stato per mostrare il DatePicker
      datePickerFormat: "dd MMM", // Formato della data nel DatePicker
    };
  },
  computed: {
    uniqueCities() {
      // Ottieni la lista delle città uniche dagli eventi nello stato globale
      return [...new Set(this.$store.state.events.map((event) => event.city))];
    },
    filteredEvents() {
      return this.$store.state.events.filter((event) => {
        const cityMatch =
          this.selectedCity === "" || event.city === this.selectedCity;
        const priceMatch =
          !this.priceFilterClicked ||
          ((this.priceRange[0] === this.minPrice ||
            event.price >= this.priceRange[0]) &&
            (this.priceRange[1] === this.maxPrice ||
              event.price <= this.priceRange[1]));
        const dateMatch =
          !this.selectedDate ||
          this.selectedDate.toISOString().split("T")[0] === event.date;
        const categoryMatch =
          !this.selectedCategory || event.category === this.selectedCategory; // Aggiungi il filtro per categoria
        return cityMatch && priceMatch && dateMatch && categoryMatch;
      });
    },
  },
  methods: {
    togglePriceFilter() {
      // Inverti lo stato di priceFilterClicked quando si fa clic sul pulsante "Filtra per prezzo"
      this.priceFilterClicked = !this.priceFilterClicked;
    },
    openDatePicker() {
      this.isDatePickerVisible = true; // Mostra il DatePicker
    },
    closeDatePicker() {
      this.isDatePickerVisible = false; // Chiudi il DatePicker quando viene selezionata una data
    },
    filterByCategory(category) {
    this.selectedCategory = category;
  },
  },
};
</script>

<style scoped>
img {
  border-radius: 10px;
}
.card {
  border: none;
  background-color: transparent;
  color: white;
}
.card-data {
  color: yellow;
}

.filter{
  background-color: rgb(71, 64, 64);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 1%;
  margin: 5px;
}
</style>
