<template>
  <div class="content-wrapper">
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Đề xuất mua hàng</h3>
              </div>
              <!-- /.card-header -->
              <div
                class="card-body table-responsive p-0"
                style="height: 300px;"
              >
                <mua-hang-todo :muahangs="muahangs" />
              </div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <a href="/them-phieu-mua-hang" class="btn btn-info float-right"
                  ><i class="fas fa-plus"></i> Thêm mới</a
                >
              </div>
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MuaHang",
  components: {
    "mua-hang-todo": require("../../components/MuaHang/MuaHangTodo.vue").default
  },
  computed: {
    ...mapGetters("muahangs", ["muahangs"])
  }
};
</script>
