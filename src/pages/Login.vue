<template>
  <div class=" login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="#"><b>Woodsland</b> Base</a>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">
            Đăng nhập để bắt đầu phiên làm việc của bạn
          </p>

          <form>
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="ID" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Mật khẩu"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <button type="submit" class="btn btn-primary btn-block">
                  Đăng nhập
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <div class="social-auth-links text-center mb-3">
            <p>- OR -</p>
            <a href="#" class="btn btn-block btn-primary">
              <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
            </a>
            <a href="#" class="btn btn-block btn-danger">
              <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
            </a>
          </div>
          <!-- /.social-auth-links -->

          <p class="mb-1">
            <a href="#">Tôi quên mật khẩu</a>
          </p>
          <p class="mb-0">
            <a href="#" class="text-center">Gửi yêu cầu đăng ký tài khoản</a>
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
    <!-- /.login-box -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
