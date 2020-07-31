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
          v-model="muahangct.tenMatHang"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="inputXuatXu">Xuất xứ</label>
        <input
          type="text"
          id="inputXuatXu"
          v-model="muahangct.xuatXu"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="inputDonViTinh">Đơn vị tính</label>
        <input
          type="text"
          v-model="muahangct.donViTinh"
          id="inputDonViTinh"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="inputSoLuong">Số lượng</label>
        <input
          type="number"
          v-model="muahangct.soLuong"
          id="inputSoLuong"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="inputYeuCauKyThuat">Yêu cầu kỹ thuật</label>
        <input type="text" id="inputYeuCauKyThuat" class="form-control" />
      </div>
      <div class="form-group">
        <label for="inputThoiGianCungCap">Thời gian cung cấp</label>
        <input
          type="date"
          v-model="muahangct.thoiGianCungCap"
          id="inputThoiGianCungCap"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="inputLyDoYeuCau">Lý do yêu cầu</label>
        <textarea
          id="inputLyDoYeuCau"
          v-model="muahangct.lyDoYeuCau"
          class="form-control"
          rows="3"
        ></textarea>
      </div>
    </div>
    <!-- /.card-body -->
    <div class="card-footer clearfix">
      <a href="javascript:void(0)" class="btn btn-sm btn-secondary float-left"
        >Xóa</a
      >
      <a href="javascript:void(0)" class="btn btn-sm btn-primary float-right"
        >Thêm mặt hàng</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    muahangct: {}
  }
};
</script>

<style lang="scss" scoped></style>
