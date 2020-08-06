<template>
  <div
    class="modal fade"
    id="userModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="userModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-show="!editmode" id="addNewLabel">
            Thêm nhân sự
          </h5>
          <h5 class="modal-title" v-show="editmode" id="addNewLabel">
            Cập nhật thông tin nhân sự
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="editmode ? updateUser() : createUser()">
          <div class="modal-body">
            <div class="form-group">
              <input
                v-model="user.name"
                type="text"
                name="name"
                placeholder="Họ và tên"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                v-model="user.email"
                type="email"
                name="email"
                placeholder="Email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                v-model="user.username"
                type="text"
                name="username"
                placeholder="Mã số nhân viên"
                class="form-control"
              />
            </div>
            <costcenter-select :costcenter="costcenter" />
            <!-- <div class="form-group">
              <label>Vai trò</label>
              <multiselect
                v-model="user.roles"
                tag-placeholder="Thêm vai trò"
                placeholder="Tìm hoặc chọn"
                :options="roles"
                :multiple="true"
                :taggable="true"
              ></multiselect>
            </div> -->
            <!-- <div>
              <label>Thuộc Showroom</label>
              <multiselect
                v-model="user.costcenters"
                tag-placeholder=""
                placeholder="Tìm showroom"
                label="name"
                track-by="id"
                :options="costcenters"
                :multiple="true"
                :taggable="true"
              ></multiselect>
            </div> -->
            <div class="form-group">
              <input
                v-model="user.password"
                type="password"
                name="password"
                placeholder="Mật khẩu"
                class="form-control"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Hủy
            </button>
            <button v-show="editmode" type="submit" class="btn btn-success">
              Lưu thông tin
            </button>
            <button v-show="!editmode" type="submit" class="btn btn-primary">
              Thêm nhân sự
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default { props: ["editmode", "user"] };
</script>

<style lang="scss" scoped></style>
