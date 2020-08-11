<template>
  <div class="card card-secondary">
    <div class="card-header">
      <h3 class="card-title">Thêm mặt hàng</h3>

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
    <div class="card-body">
      <div class="form-group">
        <label for="inputTenMatHang">Tên mặt hàng</label>
        <input
          type="text"
          id="inputTenMatHang"
          v-model="mathang.tenMatHang"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="inputXuatXu">Xuất xứ</label>
        <input
          type="text"
          id="inputXuatXu"
          v-model="mathang.xuatXu"
          class="form-control"
        />
      </div>
      <unit-select :item="mathang" />
      <div class="form-group">
        <label for="inputSoLuong">Số lượng</label>
        <input
          type="number"
          v-model="mathang.soLuong"
          id="inputSoLuong"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="inputYeuCauKyThuat">Yêu cầu kỹ thuật</label>
        <input
          type="text"
          v-model="mathang.yeuCauKyThuat"
          id="inputYeuCauKyThuat"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="inputThoiGianCungCap">Thời gian cung cấp</label>
        <input
          type="date"
          v-model="mathang.thoiGianCungCap"
          id="inputThoiGianCungCap"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="inputLyDoYeuCau">Lý do yêu cầu</label>
        <textarea
          id="inputLyDoYeuCau"
          v-model="mathang.lyDoYeuCau"
          class="form-control"
          rows="3"
        ></textarea>
      </div>
    </div>
    <!-- /.card-body -->
    <div class="card-footer clearfix">
      <button @click="taoMatHang()" class="btn btn-sm btn-secondary float-left">
        Xóa
      </button>
      <button
        @click="themMatHang(mathang)"
        class="btn btn-sm btn-primary float-right"
      >
        Thêm mặt hàng
      </button>
    </div>
  </div>
</template>

<script>
import UnitSelect from "@/components/Shared/UnitSelect.vue";
import { mapActions } from "vuex";
export default {
  props: {
    mathang: {}
  },
  components: {
    UnitSelect
  },
  methods: {
    ...mapActions("muahangs", ["themMatHang", "taoMatHang"]),
    ...mapActions("units", ["getAllUnits"])
  },
  created(){
    this.getAllUnits();
  }
};
</script>

<style lang="scss" scoped></style>
