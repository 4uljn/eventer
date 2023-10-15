<template>
  <footer>
    <div class="row justify-content-between">
      <div class="col-3 my-5 py-5">
        <a class="navbar-brand elementiFooter" href="#">
          <h1>Eventer</h1>
        </a>
      </div>
      <div class="col-3 my-5 py-5">
        <router-link :to="'/about/'">
          <p>About</p>
        </router-link>

        <router-link :to="'/login/'">
          <p>login</p>
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
</style>
