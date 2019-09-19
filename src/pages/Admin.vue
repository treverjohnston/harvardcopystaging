<template>
  <q-page padding>
    <div class="row justify-center">
      <div v-if="!loggedIn" class="col-xs-8 header">
        <div class="row justify-center text-center">
          <div class="col-xs-8">
            <h4>Admin Login:</h4>
          </div>
          <div class="col-xs-8">
            <q-input v-model="username" color="teal" label="Username" name="username" type="text" class="input"
              ref="input"></q-input>
          </div>
          <div class="col-xs-8">
            <q-input v-model="password" color="teal" label="Password" name="password" type="password" class="input"
              ref="input"></q-input>
          </div>
          <div class="col-xs-5 q-mt-md float-left">
            <q-btn @click="login">Login</q-btn>
          </div>
          <div class="col-xs-5 q-mt-md float-left">
            <q-btn @click="register">Register</q-btn>
          </div>
        </div>
      </div>
      <div v-else class="col-xs-8 header">
        <h3>Successfully logged in</h3>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'Admin',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.loggedIn;
      }
    },
    methods: {
      login() {
        var loginObj = {
          email: this.username,
          password: this.password
        }
        this.$store.dispatch('auth/login', loginObj);
      },
      register() {
        var loginObj = {
          email: this.username,
          name: this.username,
          password: this.password
        }
        this.$store.dispatch('auth/createAccount', loginObj);
      }
    }
  }
</script>

<style scoped>
</style>