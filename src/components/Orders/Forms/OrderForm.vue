<template>
  <div class="card card-primary">
    <div class="card-header">
      <h3 class="card-title">Đề xuất mua hàng</h3>
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
        <label for="inputName">Số phiếu</label>
        <input
          type="text"
          id="inputName"
          v-model="order.code"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="inputDescription">Nội dung</label>
        <textarea
          id="inputDescription"
          class="form-control"
          v-model="order.note"
          rows="4"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="inputStatus">Trạng thái</label>
        <select v-model="order.status" class="form-control custom-select">
          <option selected="" disabled="">Chọn một</option>
          <option>Tạm dừng</option>
          <option>Hủy</option>
          <option>Hoàn thành</option>
        </select>
      </div>
      <div class="form-group">
        <label for="inputClientCompany">Ban giám đốc</label>
        <input type="text" id="inputClientCompany" class="form-control" />
      </div>
      <div class="form-group">
        <label for="inputProjectLeader">Trưởng bộ phận</label>
        <input type="text" id="inputProjectLeader" class="form-control" />
      </div>
    </div>
    <!-- /.card-body -->
  </div>
</template>

<script>
export default {
  props: ["order"]
};
</script>
