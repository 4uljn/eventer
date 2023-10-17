
<template>
    <div class="form">
        <form @submit.prevent="searchEvents" class="search-form">
            <input v-model="searchQuery" type="text" placeholder="Cerca eventi per nome o città" class="search-input" />
            <button type="submit" class="search-button">
                <p class="Dignus">Cerca</p>
            </button>
        </form>
    </div>
</template>
  
<script>
import router from '../router'; 

export default {
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
        searchEvents() {
            const query = this.searchQuery.toLowerCase().trim();
            router.push({ name: 'search-results', params: { query } });
        },
    },
};
</script>
<style scoped>
/* Allineamento verticale */

.form {margin-left: 5%; align-items: baseline;}
.search-form {
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-input,
.search-button {
    height: 40px;
    align-items: center;
    text-align: center;
}

button {
    background-color: transparent;
    margin: 0;
}

@font-face {
    font-family: Dignus;
    src: url(../assets/fonts/Dignus/Dignus.ttf);
}

.Dignus {
    font-family: Dignus;
}
</style>  