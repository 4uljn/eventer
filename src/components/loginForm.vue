<template>
  <div class="container mt-4">
    <div class="row my-5 justify-content-center">
      <div class="col-12">
        <p id="hometext">Accedi / Registrati</p>
        <p>
          Scopri le migliori serate nella tua città con consigli personalizzati
          <br />basati sulla tua libreria musicale.
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
        <form @submit.prevent="onSubmit">
          <div class="my-3">
            <input
              required
              type="email"
              class="form-control"
              v-model="email"
              placeholder="Inserisci la tua email: name@gmail.com"
            />
          </div>

          <div class="my-3">
            <input
              required
              type="text"
              class="form-control"
              v-model="nome"
              placeholder="Inserisci il tuo nome"
            />
          </div>
          <div class="my-3">
            <input
              required
              type="password"
              class="form-control"
              v-model="password"
              placeholder="Inserisci la password"
            />
          </div>

          <div>
            <p id="privacyPolicy">
              Registrandoti accetti i nostri <br />Terms of Use e Privacy Policy
            </p>
          </div>
          <div class="mb-5 bottoneCentrale">
            <!--NON STA AL CENTRO-->

            <button type="submit" class="btn btn-dark rounded-pill">
              Avanti
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      email: null,
      nome: null,
      password: null,
    };
  },
};
</script>

<style scoped>
#hometext {
  font-size: 4rem;
  text-transform: uppercase;
  font-family: Neuehaas;
  justify-self: center;
}
#testoCentro {
  text-align: center;
}

p {
  font-size: 1.1rem;
  font-weight: 600;
  justify-self: center;
  text-align: center;
}
#privacyPolicy {
  font-size: 1rem;
  font-weight: 300;
}

.container {
  color: white;
}

.bottoneCentrale {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
