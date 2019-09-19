import axios from 'axios'
import { Notify } from 'quasar'


var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//harvardcopy.ebenezerwebsites.com/' : '//localhost:3000/';

let auth_api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})

export function sendEmail({ commit, dispatch }, obj) {
    auth_api.post('email', obj)
        .then(res => {
            Notify.create({ message: 'Message Sent', color: 'positive' });
        })
        .catch(err => {
            Notify.create({ message: 'Message Failed to Send: \n' + err, color: 'negative' });
        })
}

export function getAuth({ commit, dispatch }) {
    auth_api('authenticate')
        .then(res => {
            if (res.data.data == null) {
                console.log("failed login")
                console.log(res)
            }
            else if (res.data.data._id !== null) {
                console.log("successful login")
                commit('setLoginStatus', true)
            } else {
                console.log("login failed")
            }
        })
        .catch(err => {
        })
}
export function createAccount({ commit, dispatch }, obj) {
    auth_api.post('register', obj)
        .then(res => {
            if (res.data.message == 'Successfully created user account') {
                commit('setLoginStatus', true)
                Notify.create({ message: 'Successfully created user account', color: 'positive' });
            }
            else {
                Notify.create({ message: 'Failed to create account: \n' + err, color: 'negative' });
            }
        })
        .catch(err => {
            Notify.create({ message: 'Failed to Login: \n' + err, color: 'negative' });
        })
}
export function login({ commit, dispatch }, obj) {
    auth_api.post('login', obj)
        .then(res => {
            if (res.data.message != 'Invalid Email or Password') {
                commit('setLoginStatus', true);
                Notify.create({ message: 'Successfully Logged In', color: 'positive' });
            }
            else {
                Notify.create({ message: 'Invalid Email or Password: \n' + err, color: 'negative' });
            }
        })
        .catch(err => {
            Notify.create({ message: 'Failed to Login: \n' + err, color: 'negative' });
        })
}
export function logout({ commit, dispatch }) {
    auth_api.delete('logout')
        .then(res => {
            commit('setLoginStatus', false)
        }).catch(err => {
        })
}
