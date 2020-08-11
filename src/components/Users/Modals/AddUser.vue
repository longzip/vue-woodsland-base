<template>
  <div class="modal fade" id="user-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            Nhân viên
          </h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="confirmSave">
          <div class="modal-body">
            <div class="form-group">
              <label for="ho-ten" class="col-form-label">Họ tên:</label>
              <input
                v-model="user.name"
                type="text"
                name="name"
                placeholder="Họ và tên"
                class="form-control"
                id="ho-ten"
              />
            </div>
            <div class="form-group">
              <label for="email" class="col-form-label">Email:</label>
              <input
                v-model="user.email"
                type="email"
                name="email"
                placeholder="Email"
                class="form-control"
                id="email"
              />
            </div>
            <div class="form-group">
              <label for="ma-nhan-vien" class="col-form-label"
                >Mã nhân viên:</label
              >
              <input
                v-model="user.username"
                type="text"
                name="username"
                placeholder="Mã số nhân viên"
                class="form-control"
                id="ma-nhan-vien"
              />
            </div>
            <costcenter-select :item="user" />
            <user-select :item="user" />
            <div class="form-group">
              <label for="password" class="col-form-label">Mật khẩu:</label>
              <input
                v-model="user.password"
                type="password"
                name="password"
                placeholder="Mật khẩu"
                class="form-control"
                id="password"
              />
            </div>
          </div>
          <div class="modal-footer  justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Đóng
            </button>
            <button type="submit" class="btn btn-primary">
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CostcenterSelect from "@/components/Shared/CostcenterSelect.vue";
import UserSelect from "@/components/Shared/UserSelect.vue";
export default {
  props: ["user"],
  components: {
    CostcenterSelect,
    UserSelect
  },
  computed: {
    ...mapGetters("users", ["successStatus"])
  },
  methods: {
    ...mapActions("users", ["addUser"]),
    confirmSave() {
      this.addUser(this.user);
      // eslint-disable-next-line no-undef
      $("#user-modal").modal("hide");
    }
  }
};
</script>
