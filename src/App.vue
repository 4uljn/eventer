<template>
    <div id="navbar">
        <!-- Navbar con il logo -->
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                      <h1>Eventer</h1>  
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link">About</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ml-2" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ml-2" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ml-2" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

            <router-view> </router-view> <!-- Questo è dove vengono visualizzate le viste/router -->
            
        </div>
    </div>

</template>
 
       
<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'App',
    components: { RouterLink }
};
</script>

<style>
h1{
    font-size: 30px;
  font-family: Neuehaas;
  text-transform: uppercase;
}
</style>
  