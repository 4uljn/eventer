<template>
  <div class="container mt-4">
    <h1 class="sequel">Carrello</h1>
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
          </div>
        </div>
      </div>
      <div class="price">
        <p class="price-info">
          €
          {{
            isValidNumber(item.price) && isValidNumber(item.quantity)
              ? (item.price * item.quantity).toFixed(2)
              : isValidNumber(item.price)
              ? item.price
              : "Gratis"
          }}
        </p>

        <p class="disponibility">{{ item.disponibilita }} disponibili</p>
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
  data() {},
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    ...mapMutations(["addToCart", "removeOneFromCart"]),
    aggiungiAlCarrello(event) {
      if (event.disponibilita > 0) {
        this.addToCart(event);
        // Decrementa la disponibilità dopo aver aggiunto al carrello
        event.disponibilita--;
      }
    },
    togliDalCarrello(event) {
      this.removeOneFromCart(event);
      event.disponibilita++;
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
    closeAlert() {
      this.showAlert = false; // Nascondi il componente di avviso
    },
  },
};
</script>

<style scoped>
.container {
  color: white;
  min-height: 100vh;
}

.price {
  display: flex;
  justify-content: space-between;
  /* Allinea i due paragrafi ai lati opposti del contenitore */
  align-items: center;
}
.price-info {
  display: flex;
  flex-direction: column; /* Allinea i paragrafi in verticale */
}
.disponibility {
  text-align: right;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.rounded-image {
  border-radius: 10%;
  max-width: 20%;
  /* Imposta la larghezza massima desiderata */
  height: auto;
  margin-right: 20px;
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
  background-color: transparent;
  width: 50%;
  text-align: center;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  /* Riduci il padding per adattarlo meglio all'aspetto */
  margin: 0 5px;
  cursor: pointer;
}

hr {
  background-color: white;
}
</style>
