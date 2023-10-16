<template>
  <div class="container mt-4">
    <h1>Carrello</h1>
    <div v-for="item in cart" :key="item.id">
      <div class="cart-item">
        <img :src="item.image" class="rounded-image" />
        <div class="item-details">
          <p>{{ item.name }}</p>
          <p>{{ item.at }}</p>
          <div class="button-group">
            <button @click="togliDalCarrello(item)">-</button>
            <p id="quantity">{{ item.quantity }}</p>
            <button @click="aggiungiAlCarrello(item)">+</button>
            <p>
              {{
                isValidNumber(item.price) && isValidNumber(item.quantity)
                  ? (item.price * item.quantity).toFixed(2)
                  : isValidNumber(item.price)
                  ? item.price
                  : "Gratis"
              }}
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
    <div class="total-price">
      <p>Prezzo Totale: {{ calcolaPrezzoTotale().toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["cart", "contatore"]),
  },
  methods: {
    ...mapMutations(["addToCart", "removeOneFromCart"]),
    aggiungiAlCarrello(event) {
      this.addToCart(event);
    },
    togliDalCarrello(event) {
      this.removeOneFromCart(event);
    },
    calcolaPrezzoTotale() {
      // Inizializza il prezzo totale a zero
      let prezzoTotale = 0;

      // Scorrere il carrello e sommare i prezzi totali di tutti gli elementi
      this.cart.forEach((item) => {
        if (typeof item.quantity === "number") {
          const price = parseFloat(item.price);
          if (!isNaN(price)) {
            prezzoTotale += price * item.quantity;
          } else {
            console.error("Prezzo non valido per l'oggetto:", item);
          }
        } else {
          console.error("Quantità non valida per l'oggetto:", item);
        }
      });

      return prezzoTotale;
    },
    isValidNumber(value) {
      return typeof value === "number" && !isNaN(value);
    },
  },
};
</script>

<style scoped>
.container {
  color: white;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
}

.rounded-image {
  border-radius: 10%;
  max-width: 20%;
  /* Imposta la larghezza massima desiderata */
  height: auto;
  margin-right: 1.2rem;
}

#quantity {
  padding-left: 5%;
  padding-right: 5%;
}

.item-details {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-group {
  display: flex;

  align-items: baseline;
}

button {
  background-color: #007bff;
  min-width: 50%;
  text-align: center;
  color: white;
  border: none;
  border-radius: 10%;
  padding: 0.3rem 0.6rem;
  /* Riduci il padding per adattarlo meglio all'aspetto */
  margin: 0 0.3rem;
  cursor: pointer;
}
hr {
  background-color: white;
}
</style>
