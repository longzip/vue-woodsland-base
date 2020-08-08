<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <i class="ion ion-clipboard mr-1"></i> Chờ phê duyệt
          </h3>
        </div>
        <div class="card-body">
          <ul
            v-for="approve in approves"
            data-widget="todo-list"
            class="todo-list"
            :key="approve.id"
          >
            <li class="">
              <!-- <span class="handle"
                ><i class="fas fa-ellipsis-v"></i
                ><i class="fas fa-ellipsis-v"></i
              ></span> -->
              <div class="icheck-primary d-inline ml-2">
                <input
                  type="checkbox"
                  v-model="approve.completed"
                  name="todo1"
                  :id="approve.id"
                  @click="
                    approve.completed ? notApproved(approve) : approved(approve)
                  "
                /><label :for="approve.id"></label>
              </div>
              <span class="text">Design a nice theme</span>
              <span class="text">{{ approve.status }}</span>
              <small class="badge badge-danger"
                ><i class="far fa-clock"></i>
                {{ approve.createdAt | luc }}</small
              >
              <div class="tools">
                <i class="fas fa-eye blue"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="card-footer clearfix">
          <ul class="pagination pagination-sm">
            <li class="page-item"><a href="#" class="page-link">«</a></li>
            <li class="page-item"><a href="#" class="page-link">1</a></li>
            <li class="page-item"><a href="#" class="page-link">2</a></li>
            <li class="page-item"><a href="#" class="page-link">3</a></li>
            <li class="page-item"><a href="#" class="page-link">»</a></li>
          </ul>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PageIndex",
  computed: {
    ...mapGetters("approves", ["approve", "approves"])
  },
  methods: {
    ...mapActions("approves", ["notApproved", "approved"])
    // newModal() {
    //   this.resetCostcenter();
    //   // eslint-disable-next-line no-undef
    //   $("#costcenter-modal").modal("show");
    // }
  }
};
</script>
