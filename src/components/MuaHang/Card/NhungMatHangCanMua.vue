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
          <tr v-for="muahangct in muahangcts" :key="muahangct.id">
            <td>{{ muahangct.tenMatHang }}</td>
            <td>{{ muahangct.soLuong }}</td>
            <td>{{ muahangct.donViTinh }}</td>
            <td class="text-right py-0 align-middle">
              <div class="btn-group btn-group-sm">
                <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                <a href="#" class="btn btn-danger"
                  ><i class="fas fa-trash"></i
                ></a>
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
export default {
  props: {
    muahangcts: []
  }
};
</script>

<style lang="scss" scoped></style>
