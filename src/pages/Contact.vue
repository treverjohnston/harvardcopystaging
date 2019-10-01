<template>
  <q-page>
    <div class="row justify-center header text-center header-padding desktop-only">
      <div class="col-sm-10 col-md-12 heading">
        <h1 class="desktop-only text-regular">Harvard Print and Copy Center</h1>
        <hr class="heading-hr">
        <h2 class="desktop-only text-bold">Contact</h2>
      </div>
    </div>
    <div class="row justify-center header text-center mobile-only">
      <div class="col-sm-10 col-md-12 heading">
        <h5 text-regular class="mobile-only">Harvard Print and Copy Center</h5>
        <hr class="heading-hr">
        <h4 class="mobile-only text-bold">Contact</h4>
      </div>
    </div>
    <div class="row justify-center second-header">
      <div class="col-xs-11 col-md-12">
        <!-- DESKTOP -->
        <div class="row justify-between desktop-only q-gutter-sm"
          v-anime="{ translateY: { value: ['0px', '-150px'], duration: 2500, } }">
          <q-card class="col-xs-3 shadow-12">
            <q-card-section>
              <iframe :src="boise" width="100%" height="450" frameborder="0" style="border:0;"
                allowfullscreen=""></iframe>
            </q-card-section>
            <q-card-section class="text-h5 text-center">Harvard Print and Copy Center Boise, Idaho</q-card-section>
          </q-card>
          <div class="col-xs-4 self-center text-black white-background text-padding shadow-12 grow">
            <q-input v-model="name" color="teal" label="Name" name="name" type="text" class="input" ref="input"
              :rules="[val => !!val || 'Field is required']" />
            <q-input v-model="email" color="teal" label="Email" name="email" type="email" class="input" ref="input"
              :rules="[val => !!val || 'Field is required']" />
            <q-input v-model="phone" color="teal" label="Phone" name="phone" type="tel" class="input" />
            <q-input v-model="subject" color="teal" label="Subject" name="subject" type="text" class="input" ref="input"
              :rules="[val => !!val || 'Field is required']" />
            <q-input v-model="message" color="teal" type="textarea" name="message" label="Message" :max-height="100"
              class="input" :min-rows="5" ref="input" :rules="[val => !!val || 'Field is required']" />
            <q-btn outline color="teal" @click="sendEmail" rounded class="send-btn self-center">Send</q-btn>
            <a href="tel:2089997994" class="phoneNumber self-center">
              <q-btn outline color="teal" rounded class="send-btn float-right">
                <q-icon name="fa fa-phone" class="q-mr-sm" />
                (208)-999-7994 - Boise
              </q-btn>
            </a>
            <a href="tel:9258559998" class="phoneNumber self-center">
              <q-btn outline color="teal" rounded class="send-btn float-right">
                <q-icon name="fa fa-phone" class="q-mr-sm" />
                (925)-855-9998 - San Ramon
              </q-btn>
            </a>

          </div>
          <q-card class="col-xs-3 shadow-12">
            <q-card-section>
              <iframe :src="cali" width="100%" height="450" frameborder="0" style="border:0;"
                allowfullscreen=""></iframe>
            </q-card-section>
            <q-card-section class="text-h5 text-center">Harvard Print and Copy Center San Ramon, California</q-card-section>
          </q-card>
        </div>
        <!-- END DESKTOP -->
        <!-- MOBILE -->
        <div class="row wrap justify-center mobile-only text-black  mobile-margin">
          <div class="col-xs-12 q-mb-lg white-background shadow-12 text-padding"
            v-anime="{ opacity: { value: ['0', '1'], duration: 8000 } }">
            <div class="row">
              <div class="col-xs-12">
                <q-input v-model="name" color="teal" label="Name" name="name" ref="input"
                  :rules="[val => !!val || 'Field is required']" />
                <q-input v-model="email" color="teal" label="Email" name="email" ref="input"
                  :rules="[val => !!val || 'Field is required']" />
                <q-input v-model="phone" color="teal" label="Phone" name="phone" />
                <q-input v-model="subject" color="teal" label="Subject" name="subject" ref="input"
                  :rules="[val => !!val || 'Field is required']" />
                <q-input v-model="message" color="teal" type="textarea" name="message" label="Message" :max-height="100"
                  :min-rows="5" ref="input" :rules="[val => !!val || 'Field is required']" />
              </div>
              <div class="col-xs-12">
                <q-btn outline color="teal" rounded class="send-btn">Send</q-btn>
              </div>
              <div class="col-xs-12">
                <a href="tel:2089997994" class="phoneNumber">
                  <q-btn outline color="teal" rounded no-caps class="send-btn">
                    <q-icon name="fa fa-phone" class="q-mr-sm" />
                    (208)-999-7994 - Boise
                  </q-btn>
                </a>
              </div>
              <div class="col-xs-12">
                <a href="tel:9258559998" class="phoneNumber">
                  <q-btn outline color="teal" rounded no-caps class="send-btn">
                    <q-icon name="fa fa-phone" class="q-mr-sm" />
                    (925)-855-9998 - San Ramon
                  </q-btn>
                </a>
              </div>
            </div>
          </div>
          <q-card class="col-xs-12 q-mt-xl shadow-12">
            <q-card-section>
              <iframe :src="boise" width="100%" height="450" frameborder="0" style="border:0;"
                allowfullscreen=""></iframe>
            </q-card-section>
            <q-card-section class="text-h5 text-center">Harvard Print and Copy Center Boise, Idaho</q-card-section>
          </q-card>
          <q-card class="col-xs-12 q-mt-xl shadow-12">
            <q-card-section>
              <iframe :src="cali" width="100%" height="450" frameborder="0" style="border:0;"
                allowfullscreen=""></iframe>
            </q-card-section>
            <q-card-section class="text-h5 text-center">Harvard Print and Copy Center San Ramon, California</q-card-section>
          </q-card>
        </div>
        <!-- END MOBILE -->
      </div>
    </div>
  </q-page>
</template>

<script>
  import anime from "animejs";
  export default {
    name: 'Contact',
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        boise: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.054271023959!2d-116.33179882206778!3d43.54291060065357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae5a74f9e1fd65%3A0xa0245063b1bc4063!2s11700%20W%20Carmichael%20St%2C%20Boise%2C%20ID%2083709!5e0!3m2!1sen!2sus!4v1568780066252!5m2!1sen!2sus',
        cali: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4496847463192!2d-121.97518868481245!3d37.77949997975849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff2c1632e1e27%3A0x6b5d9ecd9f2a09b!2sRegus%20-%20California%2C%20San%20Ramon%20-%20Crow%20Canyon%20Plaza!5e0!3m2!1sen!2sus!4v1567442610193!5m2!1sen!2sus'
      }
    },
    mounted() {
      anime({
        targets: '.input',
        translateX: ['-50px', '0px'],
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
      });
    },
    methods: {
      sendEmail() {
        var emailContent = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          subject: this.subject,
          message: this.message
        }
        this.$store.dispatch('auth/sendEmail', emailContent)
      }
    }
  }
</script>

<style scoped>
  .send-btn {
    margin: 1rem 0;
  }
</style>