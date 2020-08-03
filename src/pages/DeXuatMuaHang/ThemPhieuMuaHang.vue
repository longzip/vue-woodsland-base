<template>
  <section class="content">
    <div class="row">
      <div class="col-md-6"><de-xuat-mua-hang :muahang="muahang" /></div>
      <div class="col-md-6">
        <them-mat-hang :mathang="matHang" />
        <nhung-mat-hang-can-mua :mathangs="muahang.MuaHangCTs" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <a href="#" class="btn btn-secondary">Quay lại</a>
        <input
          type="submit"
          value="Tạo đề xuất mua hàng"
          class="btn btn-success float-right"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MuaHang",
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("muahangs", [
      "muahangs",
      "muahang",
      "matHang"
      // ...
    ])
  },
  components: {
    "de-xuat-mua-hang": require("../../components/MuaHang/Card/DeXuatMuaHang.vue")
      .default,
    "them-mat-hang": require("../../components/MuaHang/Card/ThemMatHang.vue").default,
    "nhung-mat-hang-can-mua": require("../../components/MuaHang/Card/NhungMatHangCanMua.vue")
      .default
  }
};
</script>
