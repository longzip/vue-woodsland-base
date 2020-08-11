<template>
  <div class="form-group">
    <label>Quản lý trực tiếp</label>
    <select class="form-control" v-model="item.userId">
      <option selected disabled>Chọn một</option>
      <option
        v-for="option in users.data"
        v-bind:value="option.id"
        :key="option.id"
        >@{{ option.username }} [{{ option.name }}]</option
      >
    </select>
    <span>Selected: {{ item.userId }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import CostcenterSelect from "@/components/Shared/CostcenterSelect.vue";
export default {
  props: ["item"],

  computed: {
    ...mapGetters("users", ["users"])
  }
};
</script>

<style lang="scss" scoped></style>
