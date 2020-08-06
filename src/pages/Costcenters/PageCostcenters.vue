<template>
  <div class="content-wrapper">
    <section class="content">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Danh phòng ban</h3>
          <div class="card-tools">
            <a href="#" @click="newModal" class="btn btn-primary">
              Thêm nhân viên <i class="fa fa-user-plus"></i>
            </a>
          </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
          <users-todo />
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
      <add-user :editmode="editmode" :user="user" />
    </section>
  </div>
</template>
<script>
import UsersTodo from "@/components/Users/UsersTodo.vue";
import AddUser from "@/components/Users/Modals/AddUser.vue";
export default {
  name: "Users",
  components: {
    UsersTodo,
    AddUser
  },
  data() {
    return {
      editmode: false,
      costcenters: [],
      costcenter: {
        id: "",
        code: "",
        name: ""
      }
    };
  },
  methods: {
    newModal() {
      this.editmode = false;
      // eslint-disable-next-line no-undef
      $("#userModalCenter").modal("show");
    }
  }
};
</script>
