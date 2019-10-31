<template>
  <q-page>
    <div class="row justify-center header text-center">
      <div class="col-sm-10 col-md-12 heading">
        <h1 class="desktop-only text-regular">Harvard Print and Copy Center</h1>
        <h5 text-regular class="mobile-only">Harvard Print and Copy Center</h5>
        <hr class="heading-hr">
        <h2 class="desktop-only text-bold">Print/Copy Services</h2>
        <!-- <q-btn to="/contact" color="info" size="xl" outline rounded no-caps class="quote-btn shadow-24 desktop-only">
          Request a Quote
        </q-btn> -->
        <h4 class="mobile-only text-bold">Print/Copy Services</h4>
      </div>
    </div>
    <!-- DESKTOP -->
    <div class="row justify-between desktop-only second-header">
      <q-list separator class="col-md-4">
        <q-item clickable v-for="service in services">
          <q-item-section v-if="selected == service.id" @click="selected = service.id" class="">
            <p :class="service.highlightClass" v-anime="{ translateX: { value: ['-30px', '0px'], duration: 4000, }}">
              {{service.name}}
            </p>
          </q-item-section>
          <q-item-section v-else="selected == service.id" @click="selected = service.id">
            <p class="text-bold service">
              {{service.name}}
            </p>
          </q-item-section>
        </q-item>
      </q-list>

      <div class="col-sm-6 col-md-4 col-lg-3 space-right">
        <q-card dark bordered :class="services[selected].class">
          <q-card-section>
            <div class="text-h4 text-bold text-blue">{{services[selected].name}}</div>
          </q-card-section>

          <q-separator dark inset />
          <q-card-section v-for="sub in services[selected].subservices" class="sub text-blue">
            <q-icon name="fa fa-check-square" class="self-center" />
            <span class="">
              {{sub}}
            </span>
          </q-card-section>
        </q-card>
        <q-btn to="/contact" color="white" size="lg" outline rounded no-caps
          class="quote-btn shadow-24 float-right gray-bg">
          Request a Quote
        </q-btn>
      </div>

      <div class="col-sm-4 col-md-3 col-lg-4">
        <q-img src="../statics/various/hues.jpg" class="shadow-12 service-img " alt="color chart picture" />
      </div>
    </div>
    <!-- END DESKTOP -->

    <!-- MOBILE -->
    <div class="row justify-center second-header mobile-only q-gutter-xs">
      <div v-anime="{ translateY: { value: ['-30px', '0px'], duration: 4000 } }" class="col-xs-11 self-center">
        <q-list bordered :class="service.classMobile" v-for="service in services">
          <q-expansion-item expand-separator :label="service.name" class="text-white" expand-icon-class="text-white">
            <q-card>
              <q-card-section v-for="sub in service.subservices" class="text-black">
                <q-icon name="fa fa-check" class="q-mr-sm self-center" />{{sub}}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
      <div class="col-xs-10 self-center">
        <q-img src="../statics/various/line.jpeg" class="shadow-12 service-img" alt="color chart picture" />
      </div>
      <q-btn to="/contact" color="white" size="lg" outline rounded no-caps class="quote-btn shadow-24 col-xs-8">Request
        a
        Quote
      </q-btn>
    </div>
    <!-- END MOBILE -->
  </q-page>
</template>

<script>
  export default {
    name: 'Services',
    data() {
      return {
        selected: 0
      }
    },
    methods: {
      selectService(id) {
        this.selected = id;
      }
    },
    computed: {
      services() {
        return this.$store.state.items.services;
      }
    }
  }
</script>

<style scoped>
  .service-img {
    max-height: 75vh;
  }

  .quote-btn {
    margin: 2rem 0;
  }

  .expansion-space {
    margin: .5rem 0;
  }

  .sub {
    font-size: 1.2rem;
  }

  .space-right {
    margin-right: 3rem;
  }

  .service {
    font-size: 2.5rem;
    color: black;
  }

  .selected {
    background-color: rgba(255, 255, 255, 0.87);

    padding: 1rem;
    border-radius: 15px;
  }

  .card {
    margin: 1rem;
    background-color: rgba(255, 255, 255, 0.87);
  }
</style>