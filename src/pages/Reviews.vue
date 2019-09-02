<template>
  <q-page padding>
    <div class="row justify-center header text-center">
      <div class="col-sm-10 col-md-12 heading">
        <h2 class="desktop-only text-bold">Harvard Print and Copy Center Reviews</h2>
        <h4 class="mobile-only">Harvard Print and Copy Center Reviews</h4>
      </div>
    </div>
    <div class="row justify-center header text-center">
      <div class="col-xs-12 col-sm-10 col-md-12 heading">
        <div class="row justify-center q-gutter-xl"
          v-anime="{ translateY: { value: ['300px', '0px'], duration: 2500, } }">
          <q-card v-for="review in reviews" :name="review.id" class="col-xs-10 col-sm-5 col-md-3">
            <q-card-section class="q-mt-md text-center text-black text-body1 review-text">
              {{review.review}}
            </q-card-section>
            <q-card-section>
              <q-rating v-model="ratingModel" size="2.5rem" color="yellow" icon="star" readonly />
            </q-card-section>
            <q-card-section class="q-mt-md text-center text-black text-h6">
              <q-btn flat no-caps @click.native="openURL(review.link)">
                <q-icon size="xl" color="negative" name="fab fa-yelp" />
                <span class="text-black text-h6">
                  {{review.reviewer}}
                </span>
              </q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  import { openURL } from 'quasar'
  export default {
    name: 'Reviews',
    data() {
      return {
        slide: 0,
        ratingModel: 5
      }
    },
    computed: {
      reviews() {
        return this.$store.state.items.reviews;
      }
    },
    methods: {
      openURL
    }
  }
</script>

<style scoped>
  .review-text {
    margin: 1rem 1rem;
  }
</style>