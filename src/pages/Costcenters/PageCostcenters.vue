<template>
  <div class="content-wrapper">
    <section class="content">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Danh phòng ban</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
          <costcenters-todo :costcenters="costcenters.data" />
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
import { mapGetters, mapActions } from "vuex";
import CostcentersTodo from "@/components/Costcenters/CostcentersTodo.vue";
import AddCostcenter from "@/components/Costcenters/Modals/AddCostcenter.vue";
export default {
  name: "Costcenters",
  components: {
    CostcentersTodo,
    AddCostcenter
  },
  computed: {
    ...mapGetters("costcenters", ["costcenters", "costcenter"])
  },
  methods: {
    ...mapActions("costcenters", ["resetCostcenter", "getAll"]),
    newModal() {
      this.resetCostcenter();
      // eslint-disable-next-line no-undef
      $("#costcenter-modal").modal("show");
    },
    loadData: async () => {
      await this.getAll();
      this.$Progress.start();
    }
  },
  // mounted() {
  //   this.$Progress.finish();
  // },
  created() {
    this.$Progress.start();
    this.getAll();
  }
};
</script>
