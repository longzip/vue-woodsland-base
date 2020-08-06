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
            <costcenter-select :costcenter="user.username" />
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
export default {
  props: ["user"],
  components: {
    CostcenterSelect
  },
  computed: {
    ...mapGetters("users", ["successStatus"])
  },
  methods: {
    ...mapActions("users", ["addUser"]),
    confirmSave() {
      this.addUser(this.user);
      if (this.successStatus) {
        // eslint-disable-next-line no-undef
        $("#user-modal").modal("hide");
      }
    }
  }
};
</script>
