<template>
  <div class="content-wrapper">
    <section class="content">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Danh sách nhân viên</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
          <users-todo :users="users.data" />
        </div>
        <!-- /.card-body -->
        <div class="card-footer clearfix">
          <button
            type="button"
            @click="showModal"
            class="btn btn-info float-right"
          >
            <i class="fas fa-plus"></i> Thêm mới nhân viên
          </button>
        </div>
      </div>
      <!-- /.card -->
      <add-user :user="user" />
    </section>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import UsersTodo from "@/components/Users/UsersTodo.vue";
import AddUser from "@/components/Users/Modals/AddUser.vue";
export default {
  name: "Users",
  components: {
    UsersTodo,
    AddUser
  },
  computed: {
    ...mapGetters("users", ["users", "user"])
  },
  methods: {
    ...mapActions("users", ["resetUser", "getAll"]),
    showModal() {
      this.resetUser();
      // eslint-disable-next-line no-undef
      $("#user-modal").modal("show");
    }
  },
  created() {
    this.getAll();
  }
};
</script>
