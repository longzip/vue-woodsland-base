<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th style="width: 10px">#</th>
        <th>Mã phòng</th>
        <th>Tên phòng</th>
        <th style="width: 40px">Sửa/Xóa</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(costcenter, index) in costcenters" :key="costcenter.id">
        <td>{{ index + 1 }}</td>
        <td>{{ costcenter.code }}</td>
        <td>{{ costcenter.name }}</td>

        <td class="text-right py-0 align-middle">
          <div class="btn-group btn-group-sm">
            <button
              @click="showModalsCostcenter(costcenter)"
              class="btn btn-info"
            >
              <i class="fas fa-eye"></i>
            </button>
            <button
              @click="confirmDeleteCostcenter(costcenter.id)"
              class="btn btn-danger"
            >
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
  props: ["costcenters"],
  methods: {
    ...mapActions("costcenters", ["selectCostcenter", "deleteCostcenter"]),
    showModalsCostcenter(costcenter) {
      this.selectCostcenter(costcenter)
      // eslint-disable-next-line no-undef
      $("#costcenter-modal").modal("show");
    },
    confirmDeleteCostcenter(id) {
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
          this.deleteCostcenter(id);
          // eslint-disable-next-line no-undef
          Swal.fire("Đã xóa!", "Yêu cầu của bạn đã được thực hiện.", "success");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
