<template>
  <q-page padding>
    <div class="row justify-center header text-center header-padding">
      <div class="col-sm-10 col-md-12 heading">
        <h3 class="desktop-only text-regular">Harvard Print and Copy Center</h3>
        <hr class="heading-hr">
        <h2 class="desktop-only text-bold">Litigation Services</h2>
        <h4 class="mobile-only">Harvard Litigation Services</h4>
      </div>
    </div>
    <div class="row justify-center second-header header-padding">
      <div class="col-xs-10 col-sm-8 col-md-8 white-background shadow-12 text-padding"
        v-anime="{ translateY: { value: ['300px', '-150px'], duration: 2500, } }">
        <h6 class="text-weight-regular desktop-only">Harvard Litigation Services has been providing litigation support
          services to
          the SF bay area community for
          over 20
          years. We understand your firm’s needs and have the expertise to get the job done right and on time.</h6>
        <h6 class="text-bold desktop-only">We are your one stop shop for trial prep and litigation copying needs
          providing the
          following litigation support
          services in-house:
        </h6>

        <p class="text-weight-regular mobile-only">Harvard Litigation Services has been providing litigation support
          services
          to
          the SF bay area community for
          over 20
          years. We understand your firm’s needs and have the expertise to get the job done right and on time.</p>
        <p class="text-bold mobile-only">We are your one stop shop for trial prep and litigation copying needs providing
          the
          following litigation support
          services in-house:
        </p>

        <ul class="desktop-only" v-scroll-fire="fadeInImage">
          <li style="list-style-type: none;">
            <q-icon name="check" size="md" class="" />
            <span class="text-h6 text-weight-light vertical-middle">Litigation Copying</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="check" size="md" class="" />
            <span class="text-h6 text-weight-light vertical-middle">Trial Exhibit (full color digital copies or black &
              white)</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="check" size="md" class="" />
            <span class="text-h6 text-weight-light vertical-middle">Document Scanning</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="check" size="md" class="" />
            <span class="text-h6 text-weight-light vertical-middle">Poster, Banners & Signs</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="check" size="md" class="" />
            <span class="text-h6 text-weight-light vertical-middle">X-Ray Copies</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="check" size="md" class="" />
            <span class="text-h6 text-weight-light vertical-middle">High Speed Copies</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="check" size="md" class="" />
            <span class="text-h6 text-weight-light vertical-middle">Color Laser Copies</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="check" size="md" class="" />
            <span class="text-h6 text-weight-light vertical-middle">Large Format Copying (Blueprints, etc.)</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="check" size="md" class="" />
            <span class="text-h6 text-weight-light vertical-middle">and More!</span>
          </li>
        </ul>

        <ul class="mobile-only" v-scroll-fire="fadeInImage">
          <li class="text-weight-light">Litigation Copying</li>
          <li class="text-weight-light">Trial Exhibit (full color digital copies or black & white)</li>
          <li class="text-weight-light">Document Scanning</li>
          <li class="text-weight-light">Poster, Banners & Signs</li>
          <li class="text-weight-light">X-Ray Copies</li>
          <li class="text-weight-light">High Speed Copies</li>
          <li class="text-weight-light">Color Laser Copies</li>
          <li class="text-weight-light">Large Format Copying (Blueprints, etc.)</li>
          <li class="text-weight-bold">and More!</li>
        </ul>
      </div>
    </div>
    <div class="row justify-center header">
      <q-card v-for="service in litigationServices" class="col-xs-10 col-sm-4 col-md-3 card not-loaded"
        v-anime="{ translateY: { value: ['0px', '-150px'], duration: 2500, } }" :id="service.name">
        <q-img :src="service.pic" @click="setSelectedService(service)" class="grow card-img" :alt="service.name">
          <div class="q-display-4 text-center fullscreen">
            <div class="row justify-center">
              <div class="col-xs-12">
                <span class="desktop-only text-h5">
                  {{service.name}}
                </span>
                <p class="mobile-only">
                  {{service.name}}
                </p>
              </div>
              <div class="col-xs-12 q-mt-xl grow desktop-only">
                <q-btn size="lg" rounded no-caps outline class="hidden-text">More Info</q-btn>
              </div>
              <div class="col-xs-12 q-mt-md grow mobile-only">
                <q-btn rounded no-caps outline class="hidden-text">More Info</q-btn>
              </div>
            </div>
          </div>
        </q-img>
      </q-card>
    </div>
    <q-dialog v-model="modal" minimized class="">
      <q-card class="">
        <q-img :src="selectedService.pic" class="">
          <q-btn icon="close" flat round dense v-close-popup />
          <div class="absolute-bottom">
            <div class="text-h4 text-center">
              {{selectedService.name}}
            </div>
          </div>
        </q-img>
        <q-card-section class="q-display-4 text-center">
          <div class="row justify-center">
            <div v-for="paragraph in selectedService.description" class="col-xs-10 q-body-1 text-justify q-mt-lg">
              {{paragraph}}
            </div>
          </div>
        </q-card-section>
        <q-card-section class="q-display-4 text-center q-mt-md">
          <q-btn outline rounded no-caps @click="modal = false" label="Close" />
        </q-card-section>
      </q-card>
      </div>
    </q-dialog>
  </q-page>
</template>

<script>
  export default {
    name: 'Litigation',
    data() {
      return {
        modal: false,
        selectedService: ''
      }
    },
    computed: {
      litigationServices() {
        return this.$store.state.items.litigationServices;
      }
    },
    methods: {
      setSelectedService(service) {
        this.selectedService = service;
        this.modal = true;
      },
      fadeInImage() {
        this.litigationServices.forEach(service => {
          var el = document.getElementById(service.name)
          el.classList.add('loaded')
        });
      }
    }
  }
</script>

<style scoped>
  .card-img {
    height: 100%;
  }

  .card {
    margin: 1rem;
  }
</style>