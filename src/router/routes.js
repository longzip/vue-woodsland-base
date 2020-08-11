const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("@/pages/Index.vue") },
      {
        path: "mua-hang",
        component: () => import("@/pages/DeXuatMuaHang/MuaHang.vue")
      },
      {
        path: "them-phieu-mua-hang",
        component: () => import("@/pages/Orders/PageOrder.vue")
      },
      {
        path: "in-phieu-mua-hang",
        component: () => import("@/pages/DeXuatMuaHang/InPhieuMuaHang.vue")
      },
      {
        path: "quan-ly-phong-ban",
        component: () => import("@/pages/Costcenters/PageCostcenters.vue")
      },
      {
        path: "quan-ly-nguoi-dung",
        component: () => import("@/pages/Users/PageUsers.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("../pages/Login.vue")
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("../pages/Error404.vue")
  }
];

export default routes;
