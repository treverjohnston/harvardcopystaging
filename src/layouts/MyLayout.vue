<template>
  <q-layout view="lHh Lpr fff" class="background">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <div class="mobile-only text-black">
          <div class="full-width row no-wrap justify-start items-start content-start header-container">
            <div class="col-7">
              <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu">
              </q-btn>
            </div>
            <div class="col-5">
              <q-btn aria-label="Home Page" flat @click="$router.push('/')">
                <img class="logo-mobile" src="../assets/harvard-logo.jpeg" alt="Harvard Copy logo" />
              </q-btn>
            </div>
          </div>
        </div>

        <!-- Desktop Tabs -->
        <div class="desktop-only">
          <div class="row header-container">
            <div class="col-md-4">
              <img class="logo" src="../assets/harvard-logo.jpeg" alt="Harvard Copy logo" />
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

    <q-footer bordered>
      <q-toolbar class="text-black desktop-only">
        <q-toolbar-title class="row justify-center q-mt-sm">
          <div class="col-md-4 self-center text-center">
            <div class="text-h5">San Ramon Office:</div>
            <div class="text-subtitle2">2010 Crow Canyon Place, Suite 100</div>
            <div class="text-subtitle2">San Ramon, CA 94583</div>
            <a href="tel:9258559998" class="phoneNumber heading text-subtitle1">
              <q-btn flat>(925)-855-9998</q-btn>
            </a>
            <div class="text-subtitle2"><a :href="cali" target="_blank" rel="noopener">
                <q-btn flat no-caps>View on map</q-btn>
              </a></div>
            <div class="text-h5 q-mt-md">Boise Office:</div>
            <div class="text-subtitle2 ">11700 W Carmichael St</div>
            <div class="text-subtitle2 ">Boise, ID 83709</div>
            <a href="tel:2089997994" class="phoneNumber heading text-subtitle1">
              <q-btn flat>(208)-999-7994</q-btn>
            </a>
            <div class="text-subtitle2"><a :href="boise" target="_blank" rel="noopener">
                <q-btn flat no-caps>View on map</q-btn>
              </a></div>
            <q-btn class="q-mt-sm self-center" @click="launch('https://www.facebook.com/HARVARDCOPY')"
              aria-label="Facebook Link" flat>
              <q-icon size="3rem" name="fab fa-facebook-square" />
            </q-btn>
          </div>
          <div class="col-md-4 self-center">
            <q-img class="" src="../statics/icons/harvardCopyOverUnder.jpeg" alt="Harvard Copy Logo"></q-img>
          </div>
          <div class="col-md-4 self-center text-center q-mt-xl q-mb-xl">
            <div class="text-h4 heading">
              <a href="tel:9258559998" class="phoneNumber heading">
                <q-icon name="fa fa-phone" class="q-mr-sm" />(925)-855-9998</a>
            </div>
            <div class="text-h4 heading">
              <a href="tel:2089997994" class="phoneNumber heading">
                <q-icon name="fa fa-phone" class="q-mr-sm" />(208)-999-7994</a>
            </div>
            <div class="text-h5 q-mt-md text-black">
              <a href="mailto:info@harvardcopy.com" class="phoneNumber text-black">
                <q-icon name="fa fa-paper-plane" class="q-mr-sm" /> info@harvardcopy.com
              </a>
            </div>
            <div class="text-subtitle1 q-mt-lg">&copy;{{year}} Harvard Print and Copy Center</div>
            <div class="text-subtitle1">All rights reserved</div>
            <div class="text-subtitle1 q-mt-lg">Website By: <a href="https://www.ebenezerwebsites.com" rel="noopener"
                target="_blank">Ebenezer
                Websites LLC</a>
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <q-toolbar class="text-black mobile-only">
        <q-toolbar-title class="row justify-center q-mt-md">
          <div class="col-xs-10 self-center q-mt-sm q-mb-sm">
            <img class="footer-mobile" src="../assets/harvard-logo.jpeg" alt="Harvard Copy Logo"></img>
          </div>
          <div class="col-xs-12 self-center text-center">
            <hr>
            <div class="text-h5">San Ramon Office:</div>
            <div class="text-subtitle2">2010 Crow Canyon Place, Suite 100</div>
            <div class="text-subtitle2">San Ramon, CA 94583</div>
            <a href="tel:9258559998" class="phoneNumber heading text-subtitle1">
              <q-btn flat no-caps>(925)-855-9998</q-btn>
            </a>
            <div class="text-subtitle2"><a :href="cali" target="_blank" rel="noopener">
                <q-btn flat no-caps>View on map</q-btn>
              </a></div>
            <div class="text-h5 q-mt-md">Boise Office:</div>
            <div class="text-subtitle2 ">11700 W Carmichael St</div>
            <div class="text-subtitle2 ">Boise, ID 83709</div>
            <a href="tel:2089997994" class="phoneNumber heading text-subtitle1">
              <q-btn flat no-caps>(208)-999-7994</q-btn>
            </a>
            <div class="text-subtitle2"><a :href="boise" target="_blank" rel="noopener">
                <q-btn flat no-caps>View on map</q-btn>
              </a></div>
            <q-btn class="q-mt-sm self-center" aria-label="Facebook Link"
              @click="launch('https://www.facebook.com/HARVARDCOPY')" flat>
              <q-icon size="3rem" name="fab fa-facebook-square" />
            </q-btn>
            <hr>
          </div>

          <div class="col-md-4 self-center text-center q-mt-sm q-mb-md">
            <div class="text-h4 heading">
              <a href="tel:9258559998" class="phoneNumber heading">
                <q-icon name="fa fa-phone" class="q-mr-sm" />
                (925)-855-9998
              </a> </div>
            <div class="text-h4 heading">
              <a href="tel:2089997994" class="phoneNumber heading">
                <q-icon name="fa fa-phone" class="q-mr-sm" />
                (208)-999-7994
              </a>
            </div>
            <div class="text-h5 q-mt-sm">
              <a href="mailto:info@harvardcopy.com" class="phoneNumber text-black">
                <q-icon name="fa fa-paper-plane" class="q-mr-sm" />info@harvardcopy.com
              </a>
            </div>
            <div class="text-subtitle2 q-mt-lg">&copy;{{year}} Harvard Print and Copy Center</div>
            <div class="text-subtitle2">All rights reserved</div>
            <div class="text-subtitle2 q-mt-lg">Website By: <a href="https://www.ebenezerwebsites.com" rel="noopener"
                target="_blank">Ebenezer
                Websites LLC</a>
            </div>
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
        leftDrawerOpen: false,
        boise: 'https://www.google.com/maps/place/11700+W+Carmichael+St,+Boise,+ID+83709/@43.5429106,-116.3317988,17z',
        cali: 'https://www.google.com/maps/place/2010+Crow+Canyon+Pl+%2523100,+San+Ramon,+CA+94583/@37.779354,-121.973807,16z'
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
  .phoneNumber {
    text-decoration: none;
    color: teal;
  }

  .footer-mobile {
    max-width: 80vw;
  }

  .mobile-margin {
    margin-top: -50px;
  }

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
    /* background-color: gray; */
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

    -webkit-transition: opacity 1s ease-in;
    -moz-transition: opacity 1s ease-in;
    -ms-transition: opacity 1s ease-in;
    -o-transition: opacity 1s ease-in;
    transition: opacity 1s ease-in;
  }

  .loaded {
    opacity: 1;
  }
</style>