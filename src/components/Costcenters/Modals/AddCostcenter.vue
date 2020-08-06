<template>
  <div class="modal fade" id="costcenter-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Default Modal</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="ma-phong" class="col-form-label">Mã phòng:</label>
              <input
                type="text"
                v-model="costcenter.code"
                class="form-control"
                id="ma-phong"
              />
            </div>
            <div class="form-group">
              <label for="ten-phong" class="col-form-label">Tên phòng:</label>
              <input
                type="text"
                v-model="costcenter.name"
                class="form-control"
                id="ten-phong"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer justify-content-between">
          <button type="button" class="btn btn-default" data-dismiss="modal">
            Đóng
          </button>
          <button
            type="button"
            @click="confirmSaveCostcenter()"
            class="btn btn-primary"
          >
            Lưu
          </button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /.modal -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["costcenter"],
  computed: {
    ...mapGetters("costcenters", ["successStatus"])
  },
  methods: {
    ...mapActions("costcenters", ["addCostcenter"]),
    confirmSaveCostcenter() {
      this.addCostcenter(this.costcenter);
      if (this.successStatus) {
        // eslint-disable-next-line no-undef
        $("#costcenter-modal").modal("hide");
      }
    }
  }
};
</script>
