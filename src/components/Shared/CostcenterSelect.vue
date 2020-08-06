<template>
  <div class="form-group">
    <label>Phòng ban</label>
    <select class="form-control">
      <option selected disabled>Chọn một</option>
      <option
        v-for="option in costcenters"
        v-bind:value="option.id"
        :key="option.id"
        >{{ option.name }}</option
      >
    </select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import CostcenterSelect from "@/components/Shared/CostcenterSelect.vue";
export default {
  props: ["costcenter"],

  computed: {
    ...mapGetters("costcenters", ["costcenters"])
  }
};
</script>

<style lang="scss" scoped></style>
