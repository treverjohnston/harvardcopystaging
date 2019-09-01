<template>
  <q-page padding>
    <div class="row justify-center header text-center">
      <div class="col-sm-10 col-md-12 heading">
        <h2 class="desktop-only text-bold">Contact Harvard Print and Copy Services</h2>
        <h4 class="mobile-only"> Contact Harvard Print and Copy Services</h4>
      </div>
    </div>
    <div class="row justify-center header">
      <div class="col-xs-11 col-md-10">
        <!-- DESKTOP -->
        <div class="row justify-center bot desktop-only xs-gutter">
          <div class="col-xs-5 self-center">
            <!-- Place for maps -->
          </div>
          <div class="col-xs-5 self-center text-black">
            <q-input v-model="name" label="Name" name="name" type="text" />
            <q-input v-model="email" label="Email" name="email" type="email" />
            <q-input v-model="phone" label="Phone" name="phone" type="tel" />
            <q-input v-model="subject" label="Subject" name="subject" type="text" />
            <q-input v-model="message" type="textarea" name="message" label="Message" :max-height="100" :min-rows="5" />
            <q-btn outline class="send-btn">Send</q-btn>
          </div>
        </div>
        <!-- END DESKTOP -->
        <!-- MOBILE -->
        <div class="row wrap justify-center mobile-only text-black">
          <div class="col-xs-11">
            <q-input v-model="name" label="Name" name="name" />
            <q-input v-model="email" label="Email" name="email" />
            <q-input v-model="phone" label="Phone" name="phone" />
            <q-input v-model="subject" label="Subject" name="subject" />
            <q-input v-model="message" type="textarea" name="message" label="Message" :max-height="100" :min-rows="5" />
            <q-btn outline class="send-btn">Send</q-btn>
          </div>
          <div class="col-xs-10 bot">
            <!-- Spot for maps -->
          </div>
        </div>
        <!-- END MOBILE -->
      </div>
    </div>
  </q-page>
</template>

<script>
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
    }
  }
</script>

<style scoped>
  .send-btn {
    margin: 1rem 0;
  }
</style>