<template>
  <div class="form-group">
    <label>Phòng ban</label>
    <select class="form-control">
      <option selected="" disabled="">Chọn một</option>
      <option
        v-for="option in costcenters"
        v-bind:value="option.name"
        :key="option.id"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["costcenter"],

  computed: {
    ...mapGetters("costcenters", ["costcenters"])
  }
};
</script>

<style lang="scss" scoped></style>
