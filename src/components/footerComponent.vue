<template>
  <footer>
    <div class="row justify-content-between">
      <div class="col-sm-12 col-md-3 my-5">
        <h1>
          <router-link to="/" class="navbar-brand">Eventer</router-link>
        </h1>
      </div>
      <div class="col-sm-12 col-md-3 my-5">
        <p id="scopri">
          Check out some of the most popular events coming up in your city, from
          club nights and gigs to artist signings and comedy shows.
        </p>
      </div>
      <div class="col-sm-12 col-md-3 my-5" id="link">
        <router-link :to="'/about'">
          <p>Eventi</p>
        </router-link>

        <router-link :to="'/chiSiamo'">
          <p>Chi Siamo</p>
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerComponent",
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  #link {
    display: block;
    text-align: center;
    align-items: center;
  }
}

a {
  color: black;
  justify-self: right;
}

h1 {
  font-size: 30px;
  font-family: Neuehaas;
  text-transform: uppercase;
  color: black;
  text-align: center;
}

footer {
  background-color: white;
}

.elementiFooter {
  display: flex;
  justify-content: center;
  align-items: center;
}

#scopri {
  text-align: center;
  font-weight: 500;
}
</style>
