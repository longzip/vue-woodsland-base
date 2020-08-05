<template>
  <!-- Sidebar Menu -->
  <nav class="mt-2">
    <ul
      class="nav nav-pills nav-sidebar flex-column"
      data-widget="treeview"
      role="menu"
      data-accordion="false"
    >
      <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
      <li class="nav-item menu-open">
        <a href="/" class="nav-link active">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p>
            Phê duyệt
          </p>
        </a>
      </li>
      <li class="nav-item has-treeview menu-open">
        <a href="#" class="nav-link">
          <i class="nav-icon fas fa-ticket-alt green"></i>
          <p>
            Mua hàng
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item">
            <a href="/mua-hang" class="nav-link">
              <i class="far fa-circle nav-icon green"></i>
              <p>Đề xuất mua hàng</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="./them-phieu-mua-hang" class="nav-link">
              <i class="far fa-circle nav-icon green"></i>
              <p>Tạo đề xuất mua hàng</p>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item has-treeview menu-open">
        <a href="#" class="nav-link">
          <i class="nav-icon fas fa-cogs cyan"></i>
          <p>
            Quản trị hệ thống
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item">
            <a href="/quan-ly-nguoi-dung" class="nav-link">
              <i class="fas fa-user-cog nav-icon cyan"></i>
              <p>Nhân viên</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/quan-ly-phong-ban" class="nav-link">
              <i class="fas fa-building nav-icon cyan"></i>
              <p>Phòng ban</p>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">
          <i class="nav-icon fas fa-th"></i>
          <p>
            Hướng dẫn
            <span class="right badge badge-danger">Mới</span>
          </p>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.sidebar-menu -->
</template>

<script>
export default {
  name: "Menu"
};
</script>
