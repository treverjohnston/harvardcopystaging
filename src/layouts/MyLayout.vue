<template>
  <q-layout view="lHh Lpr fff" :class="">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <div class="mobile-only text-black">
          <div class="full-width row no-wrap justify-start items-start content-start header-container">
            <div class="col-7">
              <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="fa fa-bars">
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

    <q-page-container :class="backgroundClass">
      <router-view />
    </q-page-container>

    <q-footer bordered>
      <q-toolbar class="text-black desktop-only">
        <q-toolbar-title class="row justify-center q-mt-sm">
          <div class="col-md-4 self-center text-center">
            <div class="text-h5">San Ramon Office:</div>
            <div class="text-subtitle2">2010 Crow Canyon Place, Suite 100</div>
            <div class="text-subtitle2">San Ramon, CA 94583</div>
            <a href="tel:9258559998" class="phoneNumber heading">
              <q-btn flat icon="fa fa-phone"><span class="q-ml-xs text-h5">(925) 855-9998</span></q-btn>
            </a>
            <div class="text-subtitle2"><a :href="cali" target="_blank" rel="noopener" class="phoneNumber heading">
                <q-btn flat no-caps icon="fa fa-compass"><span class="q-ml-xs">View on map</span></q-btn>
              </a></div>
            <div class="text-h5 q-mt-md">Boise Office:</div>
            <div class="text-subtitle2 ">11700 W Carmichael St</div>
            <div class="text-subtitle2 ">Boise, ID 83709</div>
            <a href="tel:2089997994" class="phoneNumber heading">
              <q-btn flat icon="fa fa-phone"><span class="q-ml-xs text-h5">(208) 999-7994</span></q-btn>
            </a>
            <div class="text-subtitle2"><a :href="boise" target="_blank" rel="noopener" class="phoneNumber heading">
                <q-btn flat no-caps icon="fa fa-compass"><span class="q-ml-xs">View on map</span></q-btn>
              </a></div>

          </div>
          <div class="col-md-4 self-center">
            <q-img class="" src="../statics/icons/harvardCopyOverUnder.jpeg" alt="Harvard Copy Logo"></q-img>
          </div>
          <div class="col-md-4 self-center text-center q-mt-xl q-mb-xl">
            <div class="text-h5 q-mt-md text-black">
              <q-btn to="/contact" icon="fa fa-paper-plane" class="heading" color="" no-caps flat>
                <span class="q-ml-sm text-h5"> {{email}}</span></q-btn>
            </div>
            <q-btn class="q-mt-sm self-center" @click="openURL('https://www.facebook.com/HARVARDCOPY')"
              aria-label="Facebook Link" flat>
              <q-icon size="3rem" class="q-mr-xs" name="fab fa-facebook-square" /> <iframe title="facebookLike"
                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FHARVARDCOPY&width=140&layout=button_count&action=like&size=large&show_faces=false&share=true&height=46&appId"
                width="140" height="46" style="border:none;overflow:hidden" class="self-center q-mt-sm" scrolling="no"
                frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </q-btn>
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
              <q-btn flat no-caps icon="fa fa-phone"><span class="q-ml-xs">(925) 855-9998</span></q-btn>
            </a>
            <div class="text-subtitle2"><a :href="cali" target="_blank" rel="noopener" class="phoneNumber heading">
                <q-btn flat no-caps icon="fa fa-compass"><span class="q-ml-xs">View on map</span></q-btn>
              </a></div>
            <div class="text-h5 q-mt-md">Boise Office:</div>
            <div class="text-subtitle2 ">11700 W Carmichael St</div>
            <div class="text-subtitle2 ">Boise, ID 83709</div>
            <a href="tel:2089997994" class="phoneNumber heading text-subtitle1">
              <q-btn flat no-caps icon="fa fa-phone"><span class="q-ml-xs">(208) 999-7994</span></q-btn>
            </a>
            <div class="text-subtitle2"><a :href="boise" target="_blank" class="phoneNumber heading" rel="noopener">
                <q-btn flat no-caps icon="fa fa-compass"><span class="q-ml-xs">View on map</span></q-btn>
              </a></div>

            <hr>
          </div>

          <div class="col-md-4 self-center text-center q-mt-sm q-mb-md">
            <q-btn class="q-mt-sm self-center" aria-label="Facebook Link"
              @click="openURL('https://www.facebook.com/HARVARDCOPY')" flat>
              <q-icon size="3rem" name="fab fa-facebook-square" /> <iframe title="facebookLike"
                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FHARVARDCOPY&width=140&layout=button_count&action=like&size=large&show_faces=false&share=true&height=46&appId"
                width="140" height="46" style="border:none;overflow:hidden" class="q-mt-sm" scrolling="no"
                frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </q-btn>
            <div class="text-h5 q-mt-sm">
              <q-btn to="/contact" icon="fa fa-paper-plane" color="" flat no-caps class="heading">
                <span class="text-h5 q-ml-sm">{{email}}</span></q-btn>
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
    <q-page-sticky v-if="!contactPage" position="bottom-right" :offset="[18, 18]" class="desktop-only">
      <q-btn to="/contact" color="info" size="lg" outline rounded no-caps class="bg-white shadow-12">
        Request a Quote
      </q-btn>
    </q-page-sticky>
    <q-page-sticky v-if="!contactPage" position="bottom-right" :offset="[35, 35]" class="mobile-only">
      <q-btn to="/contact" color="info" size="md" outline rounded no-caps class="bg-white shadow-12">
        Request a Quote
      </q-btn>
    </q-page-sticky>

  </q-layout>
</template>

<script>
  import { openURL } from 'quasar'

  export default {
    name: 'MyLayout',
    data() {
      return {
        tabModel: '/',
        backgroundClass: 'background',
        leftDrawerOpen: false,
        boise: 'https://www.google.com/maps/place/11700+W+Carmichael+St,+Boise,+ID+83709/@43.5429106,-116.3317988,17z',
        cali: 'https://www.google.com/maps/place/2010+Crow+Canyon+Pl+%2523100,+San+Ramon,+CA+94583/@37.779354,-121.973807,16z'
      }
    },
    computed: {
      contactPage() {
        return this.$route.path == "/contact";
      },
      tabs() {
        return this.$store.state.tabs.tabs
      },
      companyName() {
        return this.$store.state.state.companyName
      },
      email() {
        return this.$store.state.state.email
      },
      year() {
        var y = new Date;
        return y.getFullYear();
      }
    },
    mounted() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.backgroundClass = 'backgroundMobile';
      }
    },
    methods: {
      openURL,
      push(tab) {
        this.$router.push(tab.link)
        this.leftDrawerOpen = false;
      }
    }
  }
</script>

<style>
</style>