<template>
  <div class="content-wrapper">
    <section class="content">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Danh phòng ban</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
          <costcenters-todo :costcenters="costcenters" />
        </div>
        <!-- /.card-body -->
        <div class="card-footer clearfix">
          <button
            type="button"
            @click="newModal"
            class="btn btn-info float-right"
          >
            <i class="fas fa-plus"></i> Thêm phòng ban
          </button>
        </div>
      </div>
      <!-- /.card -->
      <add-costcenter :costcenter="costcenter" />
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import CostcentersTodo from "@/components/Costcenters/CostcentersTodo.vue";

import AddCostcenter from "@/components/Costcenters/Modals/AddCostcenter.vue";
export default {
  name: "Users",
  components: {
    CostcentersTodo,
    AddCostcenter
  },
  computed: {
    ...mapGetters("costcenters", ["costcenters", "costcenter"])
  },
  methods: {
    ...mapActions("costcenters", ["resetCostcenter"]),
    newModal() {
      this.resetCostcenter();
      // eslint-disable-next-line no-undef
      $("#costcenter-modal").modal("show");
    }
  }
};
</script>
