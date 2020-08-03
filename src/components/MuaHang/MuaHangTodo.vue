<template>
  <table class="table table-head-fixed text-nowrap">
    <thead>
      <tr>
        <th>Mã</th>
        <th>Họ tên</th>
        <th>Ngày</th>
        <th>Trạng thái</th>
        <th>Lý do</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="muahang in muahangs" :key="muahang.id">
        <td>
          <a :href="'/in-phieu-mua-hang?id=' + muahang.id">{{
            muahang.soPhieu
          }}</a>
        </td>
        <td>{{ muahang.soPhieu }}</td>
        <td>{{ muahang.ngayDeXuat }}</td>
        <td>
          <span class="tag tag-success">{{ muahang.trangThai }}</span>
        </td>
        <td>
          {{ muahang.noiDung }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    muahangs: null
  }
};
</script>
