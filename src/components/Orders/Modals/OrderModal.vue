<template>
  <div class="modal fade" id="order-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Đề xuất</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="confirmSaveOrder">
          <div class="modal-body">
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
import { mapActions } from "vuex";

export default {
  props: ["order"],

  methods: {
    ...mapActions("orders", ["addOrder"]),
    confirmSaveOrder() {
      this.addOrder(this.order);
      // eslint-disable-next-line no-undef
      $("#order-modal").modal("hide");
    }
  }
};
</script>
