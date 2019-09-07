<template>
  <q-page padding>
    <div class="row justify-center header text-center">
      <div class="col-sm-10 col-md-12 heading">
        <h3 class="desktop-only text-regular">Harvard Print and Copy Center</h3>
        <hr class="heading-hr">
        <h2 class="desktop-only text-bold">Print/Copy Services</h2>
        <!-- <q-btn to="/contact" color="info" size="xl" outline rounded no-caps class="quote-btn shadow-24 desktop-only">
          Request a Quote
        </q-btn> -->
        <h4 class="mobile-only">Harvard Print and Copy Services</h4>
      </div>
    </div>
    <!-- DESKTOP -->
    <div class="row justify-between header desktop-only">
      <q-list separator class="col-md-6">
        <q-item clickable v-for="service in services">
          <q-item-section v-if="selected == service.id" @click="selected = service.id">
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

      <div class="col-md-4 space-right">
        <q-card dark bordered :class="services[selected].class">
          <q-card-section>
            <div class="text-h4 text-bold">{{services[selected].name}}</div>
          </q-card-section>

          <q-separator dark inset />
          <q-card-section v-for="sub in services[selected].subservices" class="sub">
            <q-icon name="fa fa-check-square" /> {{sub}}
          </q-card-section>
        </q-card>
        <q-btn to="/contact" color="info" size="lg" outline rounded no-caps class="quote-btn shadow-24 float-right">
          Request a Quote
        </q-btn>
      </div>
    </div>
    <!-- END DESKTOP -->

    <!-- MOBILE -->
    <div class="row justify-center header mobile-only">
      <div v-anime="{ translateY: { value: ['-30px', '0px'], duration: 4000 } }" class="col-xs-11">
        <q-list bordered :class="service.classMobile" v-for="service in services">
          <q-expansion-item expand-separator :label="service.name" class="text-white" expand-icon-class="text-white">
            <q-card>
              <q-card-section v-for="sub in service.subservices" class="text-black">
                {{sub}}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
      <q-btn to="/contact" color="info" size="lg" outline rounded no-caps class="quote-btn shadow-24 col-xs-8">Request a
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

  .selected {
    color: white;
    padding: 1rem;
    border-radius: 15px;
  }

  .service {
    font-size: 2.5rem;
  }

  .card {
    margin: 1rem;
  }
</style>