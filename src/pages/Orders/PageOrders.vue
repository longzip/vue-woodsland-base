<template>
  <div class="content-wrapper">
    <section class="content">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Các phiếu đề xuất</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
          <orders-todo :orders="orders.data" />
        </div>
        <!-- /.card-body -->
        <div class="card-footer clearfix">
          <button
            type="button"
            @click="newModal"
            class="btn btn-info float-right"
          >
            <i class="fas fa-plus"></i> Thêm đề xuất
          </button>
        </div>
      </div>
      <!-- /.card -->
      <order-modal :order="order" />
    </section>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import OrdersTodo from "@/components/Orders/OrdersTodo.vue";
import OrderModal from "@/components/Orders/Modals/OrderModal.vue";
export default {
  name: "Orders",
  components: {
    OrdersTodo,
    OrderModal
  },
  computed: {
    ...mapGetters("orders", ["orders", "order"])
  },
  methods: {
    ...mapActions("orders", ["resetOrder", "getAllOrders"]),
    newModal() {
      this.resetOrder();
      // eslint-disable-next-line no-undef
      $("#order-modal").modal("show");
    }
  },
  created() {
    this.resetOrder();
    this.getAllOrders();
  }
};
</script>
