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

    <!-- DESKTOP -->
    <div class="row justify-between second-header text-center desktop-only">
      <div class="col-xs-12 col-sm-12 heading self-center"
        v-anime="{opacity: { value: ['0', '1'], duration: 5000 }, translateY: { value: ['100px', '-125px'], duration: 2500, } }">
        <div class="row justify-center q-gutter-xl">
          <div class="col-md-5 self-center">
            <q-img src="../statics/various/review_small.jpeg" class="border-background self-center"
              alt="people looking at colors and designs" />
          </div>
          <q-card v-for="review in reviews" :name="review.id" class="col-xs-12 col-sm-8 col-md-5 border-background">
            <q-card-section class="q-mt-md text-center text-black text-body1 review-text desktop-only">
              {{review.review}}
            </q-card-section>
            <q-card-section class="q-mt-md text-justified text-black text-subtitle2 review-text mobile-only">
              {{review.review}}
            </q-card-section>
            <q-card-section>
              <q-rating v-model="ratingModel" size="2.5rem" color="yellow" icon="fa fa-star" readonly />
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
          <div class="col-md-5 self-center">
            <q-btn no-caps color="white" rounded class="yelp-btn shadow-12"
              @click="openURL('https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon')">
              <q-icon size="xl" color="negative" name="fab fa-yelp" />
              <span class="text-black text-h6">
                All Yelp Reviews</span>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
    <!-- DESKTOP -->
    <!-- MOBILE -->

    <div class="row justify-center second-header text-center mobile-only">
      <div class="col-xs-12 heading">
        <div class="row justify-center q-gutter-xl"
          v-anime="{opacity: { value: ['0', '1'], duration: 5000 }, translateY: { value: ['100px', '-125px'], duration: 2500, } }">

          <div class="col-xs-10 self-center">
            <q-img src="../statics/various/review_small.jpeg" class="border-background" alt="stock photo" />
          </div>
          <q-card v-for="review in reviews" :name="review.id" class="col-xs-11 col-sm-8 col-md-3 border-background">
            <q-card-section class="q-mt-md text-center text-black text-body1 review-text desktop-only">
              {{review.review}}
            </q-card-section>
            <q-card-section class="q-mt-md text-justified text-black text-subtitle2 review-text mobile-only">
              {{review.review}}
            </q-card-section>
            <q-card-section>
              <q-rating v-model="ratingModel" size="2.5rem" color="yellow" icon="fa fa-star" readonly />
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
          <div class="col-xs-10 self-center">
            <q-btn no-caps color="white" rounded class="yelp-btn shadow-12"
              @click="openURL('https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon')">
              <q-icon size="xl" color="negative" name="fab fa-yelp" />
              <span class="text-black text-h6">
                All Yelp Reviews</span>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
  .review-text {
    margin: 1rem 1rem;
  }

  .yelp-btn {
    color: black;
  }
</style>

<script>
  import { openURL } from 'quasar'
  export default {
    name: 'Reviews',
    data() {
      return {
        slide: 7,
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