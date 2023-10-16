<template>
  <!-- Contenitore per le colonne -->
  <div class="container my-4">
    <div class="row mb-4">
      <div class="col-12 align-self-center">
        <p id="hometext">This is eventer</p>
        <p>
          We’ve always believed that a gig can change lives. So we created a
          platform for fans to experience more of the shows they love in the
          most hassle-free way possible.
        </p>
      </div>
    </div>

    <div class="row mb-4 mt-5">
      <div class="col-12">
        <img src="../assets/media/chiSiamo1.jpg" />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <h1>Going out makes us feel good</h1>
        <p>
          That’s true whether you’re looking for basement gigs or club nights,
          massive festivals or sweaty raves, comedy nights or drag cabarets.
          Live events are where we create memories that last, where we find our
          communities and discover the unseen corners of our cities.
          <br />
          We know how much these moments matter, which is why we’ve created an
          app that makes it easier for you to experience more of the events you
          love.
          <br />
          Since 2014, DICE has been reshaping the ticketing industry for fans,
          artists and venues, breaking down barriers that get in the way of a
          good time, and creating a fairer and more inclusive industry in the
          process.
        </p>
      </div>
    </div>
    <div class="row mb-4 mt-5">
      <div class="col-12">
        <img src="../assets/media/chiSiamo2.jpg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  #hometext {
    font-size: 3rem;
  }
  p {
    font-size: 0.3rem;
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
  }
}

#hometext {
  font-size: 4rem;
  text-transform: uppercase;
  font-family: Neuehaas;
  text-align: center;
}

p {
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
}

img {
  max-width: 100%;
  border-radius: 1%;
}

@font-face {
  font-family: Neuehaas;
  src: url(../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBlack.ttf);
}
</style>
