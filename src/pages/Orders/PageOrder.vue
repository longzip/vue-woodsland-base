<template>
  <div class="content-wrapper">
    <section class="content">
      <div class="row">
        <div class="col-md-6"><order-form :order="order" /></div>
        <div class="col-md-6">
          <order-lines-todo :orderLines="orderLines" />
          <order-line-form :orderLine="orderLine" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <a href="#" class="btn btn-secondary">Quay lại</a>
          <input
            type="submit"
            value="Tạo đề xuất mua hàng"
            class="btn btn-success float-right"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import OrderForm from "@/components/Orders/Forms/OrderForm.vue";
import OrderLineForm from "@/components/OrderLines/Forms/OrderLineForm.vue";
import OrderLinesTodo from "@/components/OrderLines/OrderLinesTodo.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PageOrder",
  components: {
    OrderForm,
    OrderLineForm,
    OrderLinesTodo
  },
  computed: {
    ...mapGetters("orders", ["order"]),
    ...mapGetters("orderLines", ["orderLines", "orderLine"])
  },
  methods: {
    ...mapActions("orders", ["resetOrder"]),
    ...mapActions("orderLines", ["resetOrderLine"])
  },
  created() {
    this.resetOrder();
    this.resetOrderLine();
  }
};
</script>
