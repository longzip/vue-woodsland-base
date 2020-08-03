<template>
  <div class="card card-info">
    <div class="card-header">
      <h3 class="card-title">Mặt hàng cần mua</h3>

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
    <div class="card-body p-0">
      <table class="table">
        <thead>
          <tr>
            <th>Tên mặt hàng</th>
            <th>Số lượng</th>
            <th>ĐVT</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="mathang in mathangs" :key="mathang.id">
            <td>{{ mathang.tenMatHang }}</td>
            <td>{{ mathang.soLuong }}</td>
            <td>{{ mathang.donViTinh }}</td>
            <td class="text-right py-0 align-middle">
              <div class="btn-group btn-group-sm">
                <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                <button @click="xoaMatHang(mathang.id)" class="btn btn-danger">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    mathangs: null
  },
  methods: {
    ...mapActions("muahangs", ["xoaMatHang"])
  }
};
</script>

<style lang="scss" scoped></style>
