<template id="sfondo">
  <div class="row justify-content-center">
    <div class="col-12 my-5 py-5"></div>
    <p id="hometext">Page not found</p>
  </div>
  <div class="row my-5 py-5 justify-content-center">
    <!--NON STA AL CENTRO LO TOLGO?-->
    <div class="col-12 bottoneCentrale">
      <router-link :to="'/about/'">
        <button type="button" class="btn btn-dark rounded-pill">
          SCOPRI I NOSTRI EVENTI
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
#hometext {
  font-size: 4rem;
  text-transform: uppercase;
  font-family: Neuehaas;
  color: white;
  justify-self: center;
}
.bottoneCentrale {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
