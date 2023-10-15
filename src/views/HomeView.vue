<template>
  <!-- Contenitore per le colonne -->
  <div class="container mt-4">
    <div class="row mb-4">
      <div class="col-12 col-md-6 align-self-end">
        <p id="hometext">
          Find more of <br />the events <br />
          you love
        </p>
        <p>
          Incredible live shows. Upfront pricing. Relevant recommendations.
          <br />We make going out easy.
        </p>
      </div>
      <div class="col-12 col-md-6">
        <video autoplay loop>
          <source src="../assets/media/videohome.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="row my-4">
      <div class="col">
        <RelatedEventsCarousel></RelatedEventsCarousel>
        <!--NON SI VEDE-->
      </div>
    </div>
    <div class="row my-5">
      <div class="col-sm-12 col-md-7">
        <p>
          Check out some of the most popular events coming up in your city, from
          club nights and gigs to artist signings and comedy shows.
        </p>
      </div>
      <!--NON STA AL CENTRO-->
      <div class="col-sm-12 col-md-5 justify-content-center">
        <router-link :to="'/about/'">
          <button type="button" class="btn btn-dark rounded-pill">
            SEE MORE
          </button>
        </router-link>
      </div>
    </div>
    <div class="row mb-4 mt-5">
      <div class="col">
        <h2 id="testoCentro">Easier than all-over body hair</h2>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col" id="videoWrapper">
        <iframe
          class="videoYoutube"
          src="https://www.youtube.com/embed/v4XDBP1pD2c"
        >
        </iframe>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <p>
          Why can’t finding and booking shows be as easy as ordering a pizza? It
          can. <br />You just need DICE. See, that was easy.
        </p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-sm-12 col-md-8">
        <h3>Who we are, what we do, and why we do it</h3>
      </div>
    </div>
    <div class="row mb-4 mt-2">
      <div class="col-sm-12 col-md-8">
        <img src="../assets/media/newDoorOpens.jpg" />
      </div>
      <div class="col-sm-12 col-md-4 align-self-end">
        <h3>A new door opens: the queer security shake-up</h3>
        <p>
          There’s a long-overdue revolution happening in the world of queer
          event security. We caught up with those leading the charge to find out
          how they’re making nightlife safer for everyone
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <div class="row">
          <div class="col-sm-6 col-md-12">
            <img src="../assets/media/nextGeneration.jpg" /><br />
          </div>
          <div class="col-sm-6 col-md-12">
            <h3>The next generation: work experience with ERIC</h3>
            <br />
            <p>
              What we learnt from our workshops and mentoring sessions in our
              London office
            </p>
            <hr />
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4">
        <div class="row">
          <div class="col-sm-6 col-md-12">
            <img src="../assets/media/unlockingPotential.jpg" /><br />
          </div>
          <div class="col-sm-6 col-md-12">
            <h3>Unlocking potential for our employees</h3>
            <br />
            <p>
              How we’re empowering our people through learning and development
            </p>
            <hr />
          </div>
        </div>
      </div>
      <hr />
      <div class="col-sm-12 col-md-4">
        <div class="row">
          <div class="col-sm-6 col-md-12">
            <img src="../assets/media/newportJazz.jpg" /><br />
          </div>
          <div class="col-sm-6 col-md-12">
            <h3>A new era for Newport Jazz and Folk festivals</h3>
            <br />
            <p>
              Why the historic music festivals made the switch to digital
              ticketing with DICE
            </p>
            <hr />
          </div>
        </div>
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
  h2 {
    font-size: 2rem;
    text-align: center;
  }
  h3 {
    font-size: 1.5rem;
    text-align: center;
  }
}
@media screen and (min-width: 769px) {
  hr {
    display: none;
  }
}

#hometext {
  font-size: 4rem;
  text-transform: uppercase;
  font-family: Neuehaas;
}

p {
  font-size: 1.1rem;
  font-weight: 600;
}
#testoCentro {
  text-align: center;
}

/* css per dare la giusta altezza in relazione alla grandezza al video youtube 
https://stackoverflow.com/questions/60164596/how-to-embed-youtube-iframe-video-100-full-width*/
#videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}

#videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
img {
  max-width: 100%;
  border-radius: 1%;
}

@font-face {
  font-family: Neuehaas;
  src: url(../assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBlack.ttf);
}

.videoYoutube {
  border-radius: 1%;
}

video {
  max-width: 100%;
  border-radius: 1%;
}
</style>
