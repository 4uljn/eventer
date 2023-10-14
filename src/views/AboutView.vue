<template>
  <div class="container mt-4">
    <div class="filter-buttons">
      <select class="filter" v-model="selectedCity">
        <option value="">Tutte le città</option>
        <option v-for="city in uniqueCities" :key="city">{{ city }}</option>
      </select>
      <div class="filters">


        <!-- Mostra il componente DatePicker quando isDatePickerVisible è true -->

        <div>
          <VueDatePicker v-model="selectedDate" :enable-time-picker="false">
            <template #trigger>
              <button class="filter">
                <span class="clickable-text" v-if="selectedDate">{{ formattedSelectedDate }} <i class="custom-close-icon" @click="clearDateFilter">x</i></span>
                <span v-else>Data</span>
              </button>
            </template>
          </VueDatePicker>
        </div>
        <div>
          <!-- Pulsante "Prezzo" per mostrare/nascondere lo slider -->
          <button class="filter" @click="togglePriceSlider">Prezzo</button>
        </div>


        <div v-if="isPriceSliderVisible">
          <vue-slider v-model="priceRange" :min="minPrice" :max="maxPrice"></vue-slider>

          <button @click="applyPriceFilter">Filtra per prezzo</button>
        </div>

      </div>



    </div>

    <div class="filters">
      <div class="scrolling-container">
        <button class="filter" @click="filterByCategory(null)">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path
                d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
            </svg>
          </div>
          Tutte le categorie
        </button>
        <button class="filter" @click="filterByCategory('gigs')">Gigs</button>
        <button class="filter" @click="filterByCategory('party')">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style="width: 24px; height: 24px">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 4a.5.5 0 01.5.5v1.518a7 7 0 11-1 0V4.5A.5.5 0 0112 4zm-5.892 7.859a6.03 6.03 0 000 2.282c.976.29 1.967.508 2.966.65-.099-1.192-.099-2.39 0-3.583-.999.143-1.99.36-2.966.65zm.338-1.134c.903-.24 1.818-.42 2.738-.541.12-.92.301-1.835.54-2.738a6.02 6.02 0 00-3.278 3.279zm4.413-3.617c-.29.976-.508 1.967-.65 2.966 1.192-.099 2.39-.099 3.583 0-.143-.999-.36-1.99-.65-2.966a6.031 6.031 0 00-2.283 0zm3.416.338c.24.903.42 1.818.541 2.738.92.12 1.835.301 2.738.54a6.02 6.02 0 00-3.279-3.278zm3.617 4.413a20.633 20.633 0 00-2.966-.65c.099 1.192.099 2.39 0 3.583 1-.143 1.99-.36 2.966-.65a6.034 6.034 0 000-2.283zm-.338 3.416c-.903.24-1.818.42-2.738.541-.12.92-.301 1.835-.54 2.738a6.021 6.021 0 003.278-3.279zm-4.413 3.617c.29-.976.508-1.967.65-2.966-1.192.099-2.39.099-3.583 0 .143.999.36 1.99.65 2.966a6.034 6.034 0 002.283 0zm-3.416-.338c-.24-.903-.42-1.818-.541-2.738-.92-.12-1.835-.301-2.738-.54a6.02 6.02 0 003.279 3.278zm.364-3.643c1.271.119 2.55.119 3.822 0a20.648 20.648 0 000-3.822 20.632 20.632 0 00-3.822 0 20.638 20.638 0 000 3.822z"
                fill="#fff"></path>
            </svg>
          </div>
          Party
        </button>
        <button class="filter" @click="filterByCategory('theatre')">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style="width: 24px; height: 24px">
              <path
                d="M6.5 7a.5.5 0 000 1V7zm1 1a.5.5 0 000-1v1zm4-1a.5.5 0 000 1V7zm1 1a.5.5 0 000-1v1zm2 1.5H14h.5zm-10-6V3a.5.5 0 00-.5.5h.5zm10 0h.5a.5.5 0 00-.5-.5v.5zm-2.4 13.7a.5.5 0 00.8.599l-.8-.6zm2.4-.7v.5-.5zm1.605 1.306a.5.5 0 10.803-.596l-.803.596zM11.9 11.301a.5.5 0 00-.8-.6l.8.6zM9.5 12v-.5.5zm-1.605-1.306a.5.5 0 10-.803.596l.803-.596zM16.5 13a.5.5 0 000 1v-1zm1 1a.5.5 0 000-1v1zm-7.409 2.407a.5.5 0 10-.98.202l.98-.202zM14.5 20.5v.5-.5zm5-5h.5-.5zm0-6h.5a.5.5 0 00-.5-.5v.5zm-3-.5a.5.5 0 000 1V9zm-10-1h1V7h-1v1zm5 0h1V7h-1v1zM14 9.5a4.5 4.5 0 01-1.318 3.182l.707.707A5.5 5.5 0 0015 9.5h-1zm-1.318 3.182A4.5 4.5 0 019.5 14v1a5.5 5.5 0 003.89-1.61l-.708-.708zM9.5 14a4.5 4.5 0 01-3.182-1.318l-.707.707A5.5 5.5 0 009.5 15v-1zm-3.182-1.318A4.5 4.5 0 015 9.5H4a5.5 5.5 0 001.61 3.89l.708-.708zM5 9.5v-6H4v6h1zM4.5 4h10V3h-10v1zm9.5-.5v6h1v-6h-1zm-1.1 14.299c.187-.248.428-.45.706-.588l-.447-.895c-.417.208-.78.51-1.059.883l.8.6zm.706-.588c.277-.14.583-.211.894-.211v-1c-.465 0-.925.108-1.341.316l.447.895zM14.5 17c.312 0 .62.073.898.212l.45-.893c-.419-.21-.88-.32-1.348-.319v1zm.898.212c.279.14.52.344.707.594l.803-.596a2.996 2.996 0 00-1.06-.891l-.45.893zM11.1 10.701c-.187.248-.428.45-.706.588l.447.895c.417-.208.78-.51 1.059-.883l-.8-.6zm-.706.588c-.277.14-.583.211-.894.211v1c.465 0 .925-.108 1.341-.316l-.447-.894zM9.5 11.5c-.312 0-.62-.072-.898-.213l-.45.894c.419.21.88.32 1.348.319v-1zm-.898-.213a1.996 1.996 0 01-.707-.593l-.803.596c.28.376.642.68 1.06.891l.45-.893zM16.5 14h1v-1h-1v1zm-7.388 2.609a5.502 5.502 0 001.912 3.154l.632-.775a4.502 4.502 0 01-1.565-2.581l-.98.202zm1.912 3.154c.982.8 2.21 1.237 3.476 1.237v-1a4.502 4.502 0 01-2.844-1.012l-.632.775zM14.5 21a5.5 5.5 0 003.89-1.61l-.708-.708A4.5 4.5 0 0114.5 20v1zm3.89-1.61A5.5 5.5 0 0020 15.5h-1a4.5 4.5 0 01-1.318 3.182l.707.707zM20 15.5v-6h-1v6h1zM19.5 9h-3v1h3V9z"
                fill="#fff"></path>
            </svg>
          </div>
          Theatre
        </button>
        <button class="filter" @click="filterByCategory('film')">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style="width: 24px; height: 24px">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.453 6H4.5a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-2.953a.508.508 0 00-.094 0H7.547a.507.507 0 00-.094 0zM16 7H8v4.5h8V7zm1 0v1.5h2V7h-2zm2 2.5h-2v2h2v-2zm0 3h-2v2h2v-2zm0 3h-2V17h2v-1.5zM16 17v-4.5H8V17h8zm-9 0v-1.5H5V17h2zm-2-2.5h2v-2H5v2zm0-3h2v-2H5v2zm0-3h2V7H5v1.5z"
                fill="#fff"></path>
            </svg>
          </div>
          Film
        </button>
        <button class="filter" @click="filterByCategory('dj')">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style="width: 24px; height: 24px">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M16 5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H19v7a.5.5 0 01-.146.354l-3 3a.5.5 0 01-.708-.708L18 14.793V8h-1.5a.5.5 0 01-.5-.5v-2zM19 7h-2V6h2v1zm-9 0a5 5 0 100 10 5 5 0 000-10zm-3.333.011a6 6 0 116.667 9.978A6 6 0 016.667 7.01zM10 11a1 1 0 100 2.001A1 1 0 0010 11zm-1.111-.663a2 2 0 112.222 3.325 2 2 0 01-2.222-3.325z"
                fill="fff"></path>
            </svg>
          </div>
          DJ
        </button>
        <button class="filter" @click="filterByCategory('talk')">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="fff" xmlns="http://www.w3.org/2000/svg"
              style="width: 24px; height: 24px">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 4a.5.5 0 01.5.5V6h7a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-7v2.15l5.17 1.88a.5.5 0 01-.34.94L12 18.032 6.67 19.97a.5.5 0 11-.34-.94l5.17-1.88V15h-7a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h7V4.5A.5.5 0 0112 4zm0 10h7V7H5v7h7z"
                fill="#fff"></path>
            </svg>
          </div>
          Talk
        </button>
        <button class="filter" @click="filterByCategory('social')">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="fff" class="bi bi-chat-left"
              viewBox="0 0 16 16">
              <path
                d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            </svg>
          </div>
          Social
        </button>
        <button class="filter" @click="filterByCategory('art')">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style="width: 24px; height: 24px">
              <path
                d="M8 17.5a.5.5 0 100-1 .5.5 0 000 1zM8 7.5a.5.5 0 100-1 .5.5 0 000 1zM11.5 16a.5.5 0 100-1 .5.5 0 000 1zM13 12.5a.5.5 0 100-1 .5.5 0 000 1zM11.5 9a.5.5 0 100-1 .5.5 0 000 1z"
                fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
              <path
                d="M8.156 4.5C5.394 4.5 3 5.906 3 7.781 3 10.125 5.5 9.656 5.5 12c0 2.344-2.5 1.875-2.5 4.219C3 18.094 5.394 19.5 8.156 19.5a7.501 7.501 0 000-15v0z"
                stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M18 16a1.47 1.47 0 011.5-1.5s1.5 0 1.5 2-1 3.5-2 3.5c1-2.5-1-2.5-1-4z" fill="fff"></path>
              <path d="M18.5 5.5a1 1 0 012 0v8a1 1 0 11-2 0v-8z" stroke="#fff" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
          </div>
          Art
        </button>
        <button class="filter" @click="filterByCategory('workshop')">
          <div></div>
          workshop
        </button>
        <button class="filter" @click="filterByCategory('workshop')">
          <div></div>
          art signing
        </button>
      </div>
    </div>

    <p>eventi in {{ selectedCity }}</p>
    <div class="row">
      <div class="col-6 col-md-4 col-lg-3 mt-4" v-for="event in filteredEvents" :key="event.id">
        <router-link :to="'/event/' + event.id">
          <!-- Aggiungi un link per il dettaglio dell'evento -->
          <div class="card">
            <img :src="event.image" class="card-img-top" alt="Event Image" />
            <div class="card-body">
              <h5 class="card-title">{{ event.name }}</h5>
              <p class="card-data">{{ event.date }}</p>
              <p class="card-text">{{ event.at }}</p>
              <p class="card-text">{{ event.price }} €</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


export default {
  components: {
    VueDatePicker
  },
  data() {
    return {
      priceFilterClicked: false, // Aggiornato a false
      selectedCategory: null,
      selectedCity: "Milano",
      minPrice: 0,
      maxPrice: 50,
      priceRange: [0, 50],
      // Aggiunta una variabile per gestire se il pulsante "Filtra per prezzo" è stato cliccato
      isPriceSliderVisible: false, // Nuovo dato per mostrare/nascondere lo slider dei prezzi
      selectedDate: null, // Inizializza con null o con una data iniziale se necessario
      isDatePickerVisible: false, // Variabile di stato per mostrare il DatePicker
      datePickerFormat: "dd MMM", // Formato della data nel DatePicker
    };
  },
  computed: {
    
    formattedSelectedDate() {
      if (this.selectedDate) {
        const date = new Date(this.selectedDate);
        const day = date.getDate();
        const month = date.getMonth() + 1; // I mesi in JavaScript partono da 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }
      return "Data";
    },
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
          this.dateToString(this.selectedDate) === event.date;
        const categoryMatch =
          !this.selectedCategory || event.category === this.selectedCategory;

        return cityMatch && priceMatch && dateMatch && categoryMatch;
      });
    },
  },
  methods: {
    clearDateFilter() {
    this.selectedDate = null; // Imposta selectedDate su null per rimuovere il filtro
  },
    togglePriceSlider() {
      this.isPriceSliderVisible = !this.isPriceSliderVisible; // Mostra/nascondi lo slider dei prezzi
    },

    applyPriceFilter() {
      this.priceFilterClicked = true;
      console.log(this.priceFilterClicked);
    },
    openDatePicker() {
      this.isDatePickerVisible = true; // Mostra il DatePicker
    },
    dateToString(date) {
      return date.toLocaleDateString("it-IT", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    },
    closeDatePicker() {
      this.isDatePickerVisible = false; // Chiudi il DatePicker quando viene selezionata una data
    },
    filterByCategory(category) {
      this.selectedCategory = category;
    },
  },
  watch: {
    priceRange: function (newPriceRange, oldPriceRange) {
      // Esegui qualche azione quando il valore dello slider cambia
      if (newPriceRange != oldPriceRange) { this.priceFilterClicked = false; console.log(this.priceFilterClicked) }



      // Puoi inserire qui la logica per tracciare le variazioni del prezzo
      // Ad esempio, puoi aggiornare un indicatore visuale del prezzo in base a newPriceRange.
    }
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

.filter {
  background-color: rgb(71, 64, 64);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 1%;
  margin: 5px;
  width: 100px;
}

.scrolling-container {
  white-space: nowrap;
  overflow-x: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  /* Aggiungi questo se stai lavorando con Internet Explorer */
  flex-wrap: nowrap;
  /* Assicurati che i pulsanti rimangano su una singola riga */
  display: flex;
  /* Mostra i pulsanti come una serie orizzontale */
}

.filter-buttons {
  display: flex;
}
</style>
