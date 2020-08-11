<template>
  <div class="card card-info">
    <div class="card-header">
      <h3 class="card-title">Mặt hàng cần mua</h3>

      <div class="card-tools">
        <button
          type="button"
          class="btn btn-tool"
          data-card-widget="collapse"
          data-toggle="tooltip"
          title="Collapse"
        >
          <i class="fas fa-minus"></i>
        </button>
      </div>
    </div>
    <div class="card-body p-0">
      <table class="table">
        <thead>
          <tr>
            <th>Tên mặt hàng</th>
            <th>Số lượng</th>
            <th>ĐVT</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="orderLine in orderLines" :key="orderLine.id">
            <td>{{ orderLine.code }}</td>
            <td>{{ orderLine.quantity }}</td>
            <td>{{ orderLine.unitId }}</td>
            <td class="text-right py-0 align-middle">
              <div class="btn-group btn-group-sm">
                <button
                  @click="selectOrderLine(orderLine)"
                  class="btn btn-info"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <button
                  @click="confirmDeleteOrderLine(orderLine.id)"
                  class="btn btn-danger"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["orderLines"],
  methods: {
    ...mapActions("orderLines", ["selectOrderLine", "deleteOrderLine"]),
    showModalsCostcenter(orderLine) {
      this.selectCostcenter(orderLine);
      // eslint-disable-next-line no-undef
      $("#orderLine-modal").modal("show");
    },
    confirmDeleteOrderLine(id) {
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
          this.deleteOrderLine(id);
        }
      });
    }
  }
};
</script>
