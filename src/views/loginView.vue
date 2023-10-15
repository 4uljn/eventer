<template>
  <div>
    <loginForm></loginForm>
  </div>
</template>

<script>
import loginForm from "@/components/loginForm.vue";

export default {
  components: {
    loginForm, // Registra il componente all'interno della vista
  },

  computed: {
    utenti: function () {
      return this.$store.state.utenti;
    },
  },
  methods: {
    onsubmit: function () {
      this.$store.commit("riconosciUtente");
      this.$router.push({ name: "home" });
    },
  },
};
</script>
