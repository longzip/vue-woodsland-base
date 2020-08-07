<template>
  <table class="table table-hover">
    <tbody>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>User Name</th>
        <th>Vai trò</th>
        <th>Showroom</th>
        <th>Cập nhật</th>
        <th>Sửa/Xóa</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.username }}</td>
        <td>
          <span
            v-for="role in users.roles"
            class="badge badge-info"
            :key="role.id"
            >{{ role }}</span
          >
        </td>
        <td>
          {{ user.costcenter }}
        </td>
        <td>{{ user.updatedAt }}</td>
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
import { mapActions } from "vuex";
export default {
  props: ["users"],
  methods: {
    ...mapActions("users", ["deleteUser", "selectUser"]),
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
    }
  }
};
</script>
