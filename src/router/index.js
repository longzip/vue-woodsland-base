import Vue from "vue";
import VueRouter from "vue-router";
import VueProgressBar from "vue-progressbar";

import routes from "./routes";

Vue.use(VueRouter);
Vue.use(VueProgressBar, {
  color: "rgb(143, 255, 199)",
  failedColor: "red",
  height: "3px"
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // if (to.meta.progress !== undefined) {
  //   let meta = to.meta.progress;
  //   // parse meta tags
  //   VueProgressBar.$Progress.parseMeta(meta);
  // }
  // //  start the progress bar
  // VueProgressBar.$Progress.start();
  //  continue to next page
  next();
  // let token = Cookies.get('access_token')
  //requiresAuth : kiểm tra đăng nhập
  //requiresFuniture : có quyền truy cập phân hệ nội thất
  //requiresProduction: có quyền truy cập phân hệ chế biến gỗ
  // let userInfoLocal = JSON.parse(localStorage.getItem("user_info"));
  // let last_login = localStorage.getItem("last_login");
  // let unit = "days";
  // let timeStamp = Date.now();
  // let diff = date.getDateDiff(timeStamp, last_login, unit);
  // if (parseInt(diff) >= 3) {
  //   userInfoLocal = null;
  // }

  // if (userInfoLocal) {
  //   if (to.matched.some(record => record.meta.requiresAuth)) {
  //     store.dispatch("base/AUTO_LOGIN", userInfoLocal);
  //     next();
  //   } else {
  //     //nêu chưa đăng nhập thì chuyển về đăng nhập
  //     store.dispatch("base/AUTO_LOGIN", userInfoLocal);
  //   }
  // } else {
  //   store.dispatch("base/ACTION_LOGOUT");
  //   next();
  // }
});

router.afterEach(() => {
  //  finish the progress bar
  // VueProgressBar.$Progress.finish();
});

export default router;
