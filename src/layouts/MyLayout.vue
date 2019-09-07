<template>
  <q-layout view="lHh Lpr fff" class="background">
    <q-header>
      <q-toolbar class="toolbar">
        <div class="mobile-only text-black">
          <div class="full-width row no-wrap justify-start items-start content-start header-container">
            <div class="col-7">
              <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu">
              </q-btn>
            </div>
            <div class="col-5">
              <q-btn flat @click="$router.push('/')">
                <img class="logo-mobile" src="../assets/harvard-logo.png" alt="Harvard Copy logo" />
              </q-btn>
            </div>
          </div>
        </div>

        <!-- Desktop Tabs -->
        <div class="desktop-only">
          <div class="row header-container">
            <div class="col-md-4">
              <img class="logo" src="../assets/harvard-logo.png" alt="Harvard Copy logo" />
            </div>
            <q-tabs dense shrink stretch indicator-color="info" class="text-black col-md-8 absolute-right"
              v-model="tabModel">
              <span v-for="tab in tabs">
                <q-route-tab :label="tab.name" :name="tab.name" :to="tab.link" />
              </span>
            </q-tabs>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Mobile Tabs -->
    <q-drawer v-model="leftDrawerOpen" class="mobile-only">
      <q-list link bordered v-for="tab in tabs">
        <q-item clickable @click.native="push(tab)" v-ripple>
          <q-item-section>{{tab.name}}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal>
      <q-toolbar class="text-black">
        <q-toolbar-title class="row justify-center">
          <div class="col-md-2 q-mt-xs self-center">

            &copy;{{year}} {{companyName}}
          </div>
          <div class="col-md-8"></div>
          <div class="col-md-2 self-center float-right">
            <q-btn flat @click="launch('https://www.facebook.com/')" flat>
              <q-icon size="2rem" name="fab fa-facebook-square" />
            </q-btn>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
  import { openURL } from 'quasar'

  export default {
    name: 'MyLayout',
    data() {
      return {
        tabModel: '/',
        leftDrawerOpen: false
      }
    },
    computed: {
      tabs() {
        return this.$store.state.tabs.tabs
      },
      companyName() {
        return this.$store.state.state.companyName
      },
      year() {
        var y = new Date;
        return y.getFullYear();
      }
    },
    mounted() {
    },
    methods: {
      openURL,
      push(tab) {
        this.$router.push(tab.link)
      }
    }
  }
</script>

<style>
  .text-padding {
    padding: 2rem;
  }

  .heading-hr {
    width: 20vw;
    border-color: #31CCEC;
  }

  .heading {
    color: #31CCEC;
  }

  .white-background {
    background-color: white;
  }

  .second-header {
    background-color: rgba(49, 205, 236, 0.95);
    padding: 2rem 2rem;
  }

  .header {
    background-color: rgba(255, 255, 255, 0.95);
    padding: 2rem 2rem;
  }

  .header-padding {
    padding: 0rem 0rem 10rem 0rem;
  }

  .toolbar {
    border-top: 4px solid #31CCEC;
    background-color: rgba(255, 255, 255, 0.829);
  }

  .logo {
    max-width: 28vw;
  }

  .logo-mobile {
    max-width: 50vw;
  }

  .header-container {
    margin: .5rem 0rem;
  }

  .background {
    background: url(../statics/backgrounds/stamps.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    overflow: hidden;
  }

  .set-size-outer {
    max-width: 65vh;
  }

  .white-text {
    color: white;
  }

  .black-text {
    color: black;
  }

  .grow {
    transition: all .35s ease-in-out;
  }

  .grow:hover {
    transform: scale(1.1);
  }

  .grow:hover .hidden-text {
    opacity: 1;
  }

  .not-loaded {
    opacity: 0;

    -webkit-transition: opacity 2s ease-in;
    -moz-transition: opacity 2s ease-in;
    -ms-transition: opacity 2s ease-in;
    -o-transition: opacity 2s ease-in;
    transition: opacity 2s ease-in;
  }

  .loaded {
    opacity: 1;
  }
</style>