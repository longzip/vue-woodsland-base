<template>
  <div class="form-group">
    <label>Đợn vị tính</label>
    <select class="form-control" v-model="item.unitId">
      <option selected disabled>Chọn một</option>
      <option
        v-for="option in units.data"
        v-bind:value="option.id"
        :key="option.id"
        >{{ option.name }}</option
      >
    </select>
    <span>Selected: {{ item.unitId }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import CostcenterSelect from "@/components/Shared/CostcenterSelect.vue";
export default {
  props: ["item"],

  computed: {
    ...mapGetters("units", ["units"])
  }
};
</script>

<style lang="scss" scoped></style>
