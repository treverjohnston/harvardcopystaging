<template>
  <q-page>
    <div class="row justify-center header header-padding text-center">
      <div class="col-sm-10 col-md-12 heading">
        <h1 class="desktop-only text-regular">Harvard Print and Copy Center</h1>
        <h5 text-regular class="mobile-only">Harvard Print and Copy Center</h5>
        <hr class="heading-hr">
        <h2 class="desktop-only text-bold">Reviews</h2>
        <h4 class="mobile-only text-bold">Reviews</h4>
      </div>
    </div>
    <div class="row justify-center second-header text-center">
      <div class="col-xs-12 col-sm-12 col-md-12 heading">
        <div class="row justify-center q-gutter-xl"
          v-anime="{opacity: { value: ['0', '1'], duration: 5000 }, translateY: { value: ['100px', '-125px'], duration: 2500, } }">
          <q-card v-for="review in reviews" :name="review.id" class="col-xs-10 col-sm-8 col-md-3">
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

<style>
  .review-text {
    margin: 1rem 1rem;
  }
</style>

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