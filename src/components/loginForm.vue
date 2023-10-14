<template>
  <div class="container mt-4">
    <div class="row my-5">
      <div class="col-12">
        <p id="hometext">Accedi / Registrati</p>
        <p>
          Scopri le migliori serate nella tua città con consigli personalizzati
          <br />basati sulla tua libreria musicale.
        </p>
      </div>
    </div>
    <div class="row mt-5 mb-2 justify-content-center">
      <div class="col-md-4 mb-3">
        <input
          required
          type="email"
          id="email"
          class="form-control"
          placeholder="Inserisci la tua email: name@gmail.com"
        />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4 mb-3">
        <input
          required
          type="text"
          id="nome"
          class="form-control"
          placeholder="Inserisci il tuo nome"
        />
      </div>
    </div>
    <div class="row my-2 justify-content-center">
      <div class="col-md-4 mb-3">
        <input
          required
          type="password"
          id="password"
          class="form-control"
          placeholder="Inserisci la password"
        />
      </div>
    </div>

    <div class="row my-3">
      <div class="col-12">
        <p>
          Registrandoti accetti i nostri <br />Terms of Use e Privacy Policy
        </p>
      </div>
    </div>
    <div class="row my-5 justify-content-center">
      <!--NON STA AL CENTRO-->
      <div class="col-12">
        <button type="button" class="btn btn-dark rounded-pill">Avanti</button>
      </div>
    </div>
  </div>
</template>

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

.container {
  color: white;
}
.jumbotron {
  background-color: rgb(52, 48, 48);
}
.custom-hr {
  background-color: white /* Imposta il tuo colore desiderato */;
}
</style>
