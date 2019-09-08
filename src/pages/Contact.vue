<template>
  <q-page padding>
    <div class="row justify-center header text-center header-padding">
      <div class="col-sm-10 col-md-12 heading">
        <h3 class="desktop-only text-regular">Harvard Print and Copy Center</h3>
        <h5 text-regular class="mobile-only">Harvard Print and Copy Center</h5>
        <hr class="heading-hr">
        <h2 class="desktop-only text-bold">Contact</h2>
        <h4 class="mobile-only text-bold">Contact</h4>
      </div>
    </div>
    <div class="row justify-center second-header">
      <div class="col-xs-11 col-md-10">
        <!-- DESKTOP -->
        <div class="row justify-center desktop-only "
          v-anime="{ translateY: { value: ['0px', '-150px'], duration: 2500, } }">
          <div class="col-xs-6 self-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4496847463192!2d-121.97518868481245!3d37.77949997975849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff2c1632e1e27%3A0x6b5d9ecd9f2a09b!2sRegus%20-%20California%2C%20San%20Ramon%20-%20Crow%20Canyon%20Plaza!5e0!3m2!1sen!2sus!4v1567442610193!5m2!1sen!2sus"
              width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </div>
          <div class="col-xs-5 self-center text-black white-background text-padding shadow-12">
            <q-input v-model="name" color="teal" label="Name" name="name" type="text" class="input" ref="input"
              :rules="[val => !!val || 'Field is required']" />
            <q-input v-model="email" color="teal" label="Email" name="email" type="email" class="input" ref="input"
              :rules="[val => !!val || 'Field is required']" />
            <q-input v-model="phone" color="teal" label="Phone" name="phone" type="tel" class="input" />
            <q-input v-model="subject" color="teal" label="Subject" name="subject" type="text" class="input" ref="input"
              :rules="[val => !!val || 'Field is required']" />
            <q-input v-model="message" color="teal" type="textarea" name="message" label="Message" :max-height="100"
              class="input" :min-rows="5" ref="input" :rules="[val => !!val || 'Field is required']" />
            <q-btn outline color="teal" @click="sendEmail" class="send-btn">Send</q-btn>
          </div>
        </div>
        <!-- END DESKTOP -->
        <!-- MOBILE -->
        <div class="row wrap justify-center mobile-only text-black ">
          <div class="col-xs-12 q-mb-lg white-background shadow-12 text-padding"
            v-anime="{ opacity: { value: ['0', '1'], duration: 8000 } }">
            <q-input v-model="name" color="teal" label="Name" name="name" ref="input"
              :rules="[val => !!val || 'Field is required']" />
            <q-input v-model="email" color="teal" label="Email" name="email" ref="input"
              :rules="[val => !!val || 'Field is required']" />
            <q-input v-model="phone" color="teal" label="Phone" name="phone" />
            <q-input v-model="subject" color="teal" label="Subject" name="subject" ref="input"
              :rules="[val => !!val || 'Field is required']" />
            <q-input v-model="message" color="teal" type="textarea" name="message" label="Message" :max-height="100"
              :min-rows="5" ref="input" :rules="[val => !!val || 'Field is required']" />
            <q-btn outline color="teal" class="send-btn">Send</q-btn>
          </div>
          <div class="col-xs-12 q-mt-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4496847463192!2d-121.97518868481245!3d37.77949997975849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff2c1632e1e27%3A0x6b5d9ecd9f2a09b!2sRegus%20-%20California%2C%20San%20Ramon%20-%20Crow%20Canyon%20Plaza!5e0!3m2!1sen!2sus!4v1567442610193!5m2!1sen!2sus"
              width="300" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </div>
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
        message: ''
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