<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th style="width: 10px">#</th>
        <th>Số</th>
        <th>Tiêu đề</th>
        <th>Phòng ban</th>
        <th>Trạng thái</th>
        <th>Ngày</th>
        <th style="width: 40px">Sửa/Xóa</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(order, index) in orders" :key="order.id">
        <td>{{ index + 1 }}</td>
        <td>{{ order.code }}</td>
        <td>{{ order.name }}</td>
        <td>{{ getCostcenterNameById(order.costcenterId) }}</td>
        <td>{{ order.status }}</td>
        <td>{{ order.updatedAt | luc }}</td>

        <td class="text-right py-0 align-middle">
          <div class="btn-group btn-group-sm">
            <button @click="showOrderModal(order)" class="btn btn-info">
              <i class="fas fa-eye"></i>
            </button>
            <button
              @click="confirmDeleteOrder(order.id)"
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
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["orders"],
  computed: {
    ...mapGetters("costcenters", ["costcenters"])
  },
  methods: {
    ...mapActions("orders", ["selectOrder", "deleteOrder"]),
    ...mapActions("costcenters", ["getAllCostcenters"]),
    showOrderModal(order) {
      this.selectOrder(order);
      // eslint-disable-next-line no-undef
      $("#order-modal").modal("show");
    },
    confirmDeleteOrder(id) {
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
          this.deleteOrder(id);
        }
      });
    },
    getCostcenterNameById(id) {
      if (!this.costcenters.data) return "";
      let foundCostcenter = this.costcenters.data.find(
        costcenter => costcenter.id === id
      );
      if (foundCostcenter) return foundCostcenter.name;
      return "";
    }
  },
  mounted() {
    this.getAllCostcenters();
  }
};
</script>
