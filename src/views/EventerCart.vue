<template>
    <div class="container mt-4">
      <h1>Carrello</h1>
      <div class="card">
        <img :src="event.image" class="card-img-top" alt="Event Image" />
        <div class="card-body">
          <h5 class="card-title">{{ event.name }}</h5>
          <p class="card-data">{{ event.date }}</p>
          <p class="card-text">{{ event.at }}</p>
          <p class="card-text">{{ event.price }} €</p>
        </div>
      </div>
      <button @click="confermaAcquisto">Conferma Acquisto</button>
    </div>
  </template>
<script>
export default {
  computed: {
    event() {
      // Puoi ottenere i dati dell'evento selezionato dalla route o dallo store, a seconda di come gestisci i dati
      // Esempio: const eventId = this.$route.params.id;
      // E quindi cerca l'evento nel tuo store o nel tuo server
      // Sostituisci questo esempio con il codice reale per ottenere l'evento selezionato.
      const eventId = 1; // Esempio, dovresti sostituire con la logica corretta
      // Ora puoi cercare l'evento nel tuo store o nel tuo server usando l'ID.
      const event = {}; // Sostituisci questo con la logica reale.
      return event;
    },
  },
  methods: {
    confermaAcquisto() {
      // Aggiungi la logica per confermare l'acquisto qui
      // Ad esempio, puoi mostrare un messaggio di conferma o aggiornare uno stato nel tuo store.
    },
  },
};
</script>
  