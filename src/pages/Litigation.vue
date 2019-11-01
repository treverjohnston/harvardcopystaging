<template>
  <q-page>
    <div class="row justify-center header text-center header-padding">
      <div class="col-sm-10 col-md-12 heading">
        <h1 class="desktop-only text-regular">Harvard Print and Copy Center</h1>
        <h5 text-regular class="mobile-only">Harvard Print and Copy Center</h5>
        <hr class="heading-hr">
        <h2 class="desktop-only text-bold">Litigation Services</h2>
        <h4 class="mobile-only text-bold">Litigation Services</h4>
      </div>
    </div>
    <div class="row justify-around second-header header-padding">
      <div class="col-xs-10 col-sm-6 col-md-6 white-background shadow-12 text-padding border-background"
        v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['100px', '-125px'], duration: 1000},  easing: 'linear' }">
        <h6 class="text-weight-regular desktop-only">Harvard Litigation Services has over {{years}} years of experience
          offering litigation support services. <b class="heading">We are currently only servicing the Boise Treasure
            Valley area.</b> We understand your firm’s needs and have the expertise to get the
          job done
          right and on time.</h6>
        <h6 class="text-bold desktop-only">We are your one stop shop for trial prep and litigation copying needs
          providing the
          following litigation support
          services in-house:
        </h6>

        <p class="text-weight-regular mobile-only">Harvard Litigation Services has over {{years}} years of experience
          offering litigation support services. <b class="heading">We are currently only servicing the Boise Treasure
            Valley area.</b> We understand your firm’s needs and have the expertise to get the
          job done
          right and on time.</p>
        <p class="text-bold mobile-only">We are your one stop shop for trial prep and litigation copying needs providing
          the
          following litigation support
          services in-house:
        </p>

        <ul class="desktop-only" v-scroll-fire="fadeInImage">
          <li style="list-style-type: none;">
            <q-icon name="fa fa-check" size="sm" class="q-mr-sm" />
            <span class="text-h6 text-weight-light vertical-middle">Litigation Copying</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="fa fa-check" size="sm" class="q-mr-sm" />
            <span class="text-h6 text-weight-light vertical-middle">Trial Exhibit (full color digital copies or black &
              white)</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="fa fa-check" size="sm" class="q-mr-sm" />
            <span class="text-h6 text-weight-light vertical-middle">Document Scanning</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="fa fa-check" size="sm" class="q-mr-sm" />
            <span class="text-h6 text-weight-light vertical-middle">Poster, Banners & Signs</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="fa fa-check" size="sm" class="q-mr-sm" />
            <span class="text-h6 text-weight-light vertical-middle">X-Ray Copies</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="fa fa-check" size="sm" class="q-mr-sm" />
            <span class="text-h6 text-weight-light vertical-middle">High Speed Copies</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="fa fa-check" size="sm" class="q-mr-sm" />
            <span class="text-h6 text-weight-light vertical-middle">Color Laser Copies</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="fa fa-check" size="sm" class="q-mr-sm" />
            <span class="text-h6 text-weight-light vertical-middle">Large Format Copying (Blueprints, etc.)</span>
          </li>
          <li style="list-style-type: none;">
            <q-icon name="fa fa-check" size="sm" class="q-mr-sm" />
            <span class="text-h6 text-weight-light vertical-middle">and More!</span>
          </li>
        </ul>

        <ul class="mobile-only" v-scroll-fire="fadeInImage" style="list-style-type: none;">
          <li class="text-weight-light">
            <q-icon name="check" size="xs" class="" />
            Litigation Copying</li>
          <li class="text-weight-light">
            <q-icon name="check" size="xs" class="" />Trial Exhibit (full color digital copies or black & white)</li>
          <li class="text-weight-light">
            <q-icon name="check" size="xs" class="" />Document Scanning</li>
          <li class="text-weight-light">
            <q-icon name="check" size="xs" class="" />Poster, Banners & Signs</li>
          <li class="text-weight-light">
            <q-icon name="check" size="xs" class="" />X-Ray Copies</li>
          <li class="text-weight-light">
            <q-icon name="check" size="xs" class="" />High Speed Copies</li>
          <li class="text-weight-light">
            <q-icon name="check" size="xs" class="" />Color Laser Copies</li>
          <li class="text-weight-light">
            <q-icon name="check" size="xs" class="" />Large Format Copying (Blueprints, etc.)</li>
          <li class="text-weight-bold">and More!</li>
        </ul>
      </div>
      <div class="col-xs-10 col-sm-5 col-md-5 self-center"
        v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['100px', '-125px'], duration: 1000},  easing: 'linear' }">
        <q-img src="../statics/various/judge.jpg" class="shadow-12 border-background" alt="litigation stock photo" />
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
      <!-- <div class="col-xs-12 col-sm-9 col-md-10 text-center">
        <q-btn to="/contact" size="lg" outline rounded no-caps class="heading shadow-24">
          Request
          a
          Quote
        </q-btn>
      </div> -->
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
          <q-btn to="/contact" outline rounded no-caps class="q-mr-sm heading shadow-1">
            Request
            a
            Quote
          </q-btn>
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
      },
      years() {
        var y = new Date;
        return parseInt(y.getFullYear()) - 1995;
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