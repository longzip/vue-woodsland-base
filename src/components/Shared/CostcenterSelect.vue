<template>
  <div class="form-group">
    <label>Phòng ban</label>
    <select class="form-control" v-model="item.costcenterId">
      <option selected disabled>Chọn một</option>
      <option
        v-for="option in costcenters.data"
        v-bind:value="option.id"
        :key="option.id"
        >{{ option.name }}</option
      >
    </select>
    <span>Selected: {{ item.costcenterId }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import CostcenterSelect from "@/components/Shared/CostcenterSelect.vue";
export default {
  props: ["item"],

  computed: {
    ...mapGetters("costcenters", ["costcenters"])
  }
};
</script>
