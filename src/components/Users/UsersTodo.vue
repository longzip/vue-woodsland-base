<template>
  <table class="table table-hover">
    <tbody>
      <tr>
        <th>ID</th>
        <th>Họ tên</th>
        <th>Mã NV</th>
        <th>Vai trò</th>
        <th>Showroom</th>
        <th>Cập nhật</th>
        <th>Sửa/Xóa</th>
      </tr>
      <tr v-for="(user, index) in users" :key="user.id">
        <td>{{ index + 1 }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.role }}</td>
        <td>
          {{ getNameCostcenter(user.costcenterId) }}
        </td>
        <td>{{ user.updatedAt | ngay }}</td>
        <td class="text-right py-0 align-middle">
          <div class="btn-group btn-group-sm">
            <button @click="showModals(user)" class="btn btn-info">
              <i class="fas fa-eye"></i>
            </button>
            <button @click="confirmDelete(user.id)" class="btn btn-danger">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["users"],
  computed: {
    ...mapGetters("costcenters", ["costcenters"])
  },
  methods: {
    ...mapActions("users", ["deleteUser", "selectUser"]),
    ...mapActions("costcenters", ["getAll"]),
    showModals(user) {
      this.selectUser(user);
      // eslint-disable-next-line no-undef
      $("#user-modal").modal("show");
    },
    confirmDelete(id) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: "Bạn có muốn xóa?",
        text: "Sau khi xóa bạn không thể khôi phục được!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Có, xóa giúp tôi!",
        cancelButtonText: "Không"
      }).then(result => {
        if (result.value) {
          this.deleteUser(id);
          // eslint-disable-next-line no-undef
          Swal.fire("Đã xóa!", "Yêu cầu của bạn đã được thực hiện.", "success");
        }
      });
    },
    getNameCostcenter(id) {
      if (this.costcenters) {
        let found = this.costcenters.data.find(element => element.id === id);
        if (found) {
          return found.name;
        }
      }
      return "";
    }
  },
  created() {
    this.getAll();
  }
};
</script>
