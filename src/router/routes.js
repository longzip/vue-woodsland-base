const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("../pages/Index.vue") },
      { path: "mua-hang", component: () => import("../pages/MuaHang.vue") },
      {
        path: "them-phieu-mua-hang",
        component: () => import("../pages/ThemPhieuMuaHang.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("../pages/Error404.vue")
  }
];

export default routes;
