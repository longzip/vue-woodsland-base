<template>
  <div class="wrapper">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"
            ><i class="fas fa-bars"></i
          ></a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link">
        <img
          src="dist/img/logo.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: .8"
        />
        <span class="brand-text font-weight-light">Woodsland</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="dist/img/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">Lỗ Văn Long</a>
          </div>
        </div>

        <main-menu />
      </div>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper"><router-view /></div>

    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="float-right d-none d-sm-inline">
        Phòng IT
      </div>
      <!-- Default to the left -->
      <strong
        >Copyright &copy; 2002-2020
        <a href="#">Công ty CP WOODSLAND</a>.</strong
      >
      Địa chỉ: Nhà máy Thuận Hưng, lô số 49K, KCN Quang Minh, Huyện Mê Linh,
      Thành phố Hà Nội.
    </footer>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  components: {
    "main-menu": require("../components/Menu.vue").default
  }
};
</script>
