<template>
  <div
    id="relatedEventsCarousel"
    class="carousel slide mt-4"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(group, index) in imageGroups"
        :key="index"
        :class="{ 'carousel-item': index === 0 }"
      >
        <div class="row">
          <div class="col-2" v-for="image in group" :key="image.id">
            <router-link :to="'/event/' + image.id">
              <img
                :src="image.image"
                class="d-block w-100 img-thumbnail"
                :alt="image.alt"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
  name: "RelatedEventsCarousel", // Assicurati che il nome del componente sia "RelatedEventsCarousel"
  props: {
    imageGroups: Array, // Pass the image groups as a prop
  },
};
</script>
