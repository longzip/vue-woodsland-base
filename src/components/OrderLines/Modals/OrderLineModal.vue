<template>
  <div class="modal fade" id="orderLine-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Mặt hàng</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="confirmSaveOrderLine">
          <div class="modal-body">
            <div class="form-group">
              <label for="inputTenMatHang">Tên mặt hàng</label>
              <input
                type="text"
                id="inputTenMatHang"
                v-model="orderLine.code"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="inputXuatXu">Xuất xứ</label>
              <input
                type="text"
                id="inputXuatXu"
                v-model="orderLine.name"
                class="form-control"
              />
            </div>
            <unit-select :item="orderLine" />
            <div class="form-group">
              <label for="inputSoLuong">Số lượng</label>
              <input
                type="number"
                v-model="orderLine.quantity"
                id="inputSoLuong"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="inputYeuCauKyThuat">Yêu cầu kỹ thuật</label>
              <input
                type="text"
                v-model="orderLine.title"
                id="inputYeuCauKyThuat"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="inputThoiGianCungCap">Thời gian cung cấp</label>
              <input
                type="date"
                v-model="orderLine.finishedAt"
                id="inputThoiGianCungCap"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="inputLyDoYeuCau">Lý do yêu cầu</label>
              <textarea
                id="inputLyDoYeuCau"
                v-model="orderLine.note"
                class="form-control"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Đóng
            </button>
            <button type="submit" class="btn btn-primary">
              Lưu
            </button>
          </div>
        </form>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /.modal -->
</template>

<script>
import UnitSelect from "@/components/Shared/UnitSelect.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["orderLine"],
  components: {
    UnitSelect
  },
  computed: {
    ...mapGetters("costcenters", ["successStatus"])
  },
  methods: {
    ...mapActions("orders", ["addorder"]),
    ...mapActions("units", ["getAllUnits"]),
    confirmSaveOrderLine() {
      this.addCostcenter(this.costcenter);
      if (this.successStatus) {
        // eslint-disable-next-line no-undef
        $("#costcenter-modal").modal("hide");
      }
    }
  },
  created() {
    this.getAllUnits();
  }
};
</script>
