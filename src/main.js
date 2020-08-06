import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import moment from "moment";
import VueProgressBar from "vue-progressbar";
import swal from "sweetalert2";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxM6VmxAI_-0-SKuwC6-xZmAXZuvj7gto",
  authDomain: "woodslandbase.firebaseapp.com",
  databaseURL: "https://woodslandbase.firebaseio.com",
  projectId: "woodslandbase",
  storageBucket: "woodslandbase.appspot.com",
  messagingSenderId: "451093276474",
  appId: "1:451093276474:web:1170d3983d6afa8cf15203",
  measurementId: "G-0488E2H9T8"
}; // 4. Get Firebase Configuration
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.usePublicVapidKey(
  "BFRv4mSZ8coW_bR-DG7bWd_T6mvNNjJOATFgTWCRee14tKzWJZpmCk9eDaAww58JuvX2d38zAfpvEv6o_C5Z_vI"
); // 1. Generate a new key pair

// Request Permission of Notifications
messaging
  .requestPermission()
  .then(() => {
    console.log("Notification permission granted.");

    // Get Token
    messaging.getToken().then(token => {
      console.log(token);
    });
  })
  .catch(err => {
    console.log("Unable to get permission to notify.", err);
  });

require("./bootstrap");
window.Vue = require("vue");

window.Swal = swal;

const toast = swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;

Vue.config.productionTip = false;
Vue.use(VueProgressBar, {
  color: "rgb(143, 255, 199)",
  failedColor: "red",
  height: "3px"
});

Vue.filter("upText", function(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter("myDate", function(created) {
  return moment(created).format("MMMM Do YYYY");
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
