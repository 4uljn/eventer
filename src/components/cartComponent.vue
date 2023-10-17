<template>
  <div class="row">
    <div class="col">
      <button v-on:click="togliAlCarrello">Togli</button>
      <button v-on:click="aggiungiAlCarrello">Aggiungi</button>
    </div>
  </div>

</template>


<script>



export default {

methods: {
  aggiungiAlCarrello: function () {
    this.$store.commit("AGGIUNGI");
  },
  togliAlCarrello: function () {
    this.$store.commit("TOGLI");
  },
},
};
</script>


