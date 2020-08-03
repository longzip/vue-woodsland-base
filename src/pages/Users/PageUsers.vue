<template>
  <div class="content-wrapper">
    <section class="content">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Users</h3>
          <div class="card-tools">
            <a href="#" @click="newModal" class="btn btn-primary">
              Add User <i class="fa fa-user-plus"></i>
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
      <add-user :editmode="editmode" />
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
      users: {},
      roles: [],
      // Create a new form instance
      form: {
        id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        roles: [],
        costcenters: []
      },
      costcenters: []
    };
  },
  methods: {
    //   loadUsers(page = 1) {
    //     let queryName = queryString.stringify({ name: this.$parent.search });
    //     axios
    //       .get("/api/users?page=" + page + "&" + queryName)
    //       .then(({ data }) => (this.users = data));
    //   },
    //   createUser() {
    //     this.$Progress.start();
    //     this.form
    //       .post("/api/users")
    //       .then(() => {
    //         $("#userModalCenter").modal("hide");
    //         this.loadUsers();
    //         this.$Progress.finish();
    //       })
    //       .catch(() => {
    //         this.$Progress.fail();
    //       });
    //   },
    //   updateUser() {
    //     this.$Progress.start();
    //     if (this.form.password == "") {
    //       this.form.password = undefined;
    //     }
    //     // console.log('Editing data');
    //     this.form
    //       .put("api/users/" + this.form.id)
    //       .then(() => {
    //         // success
    //         $("#userModalCenter").modal("hide");
    //         swal.fire("Updated!", "Information has been updated.", "success");
    //         this.$Progress.finish();
    //         Fire.$emit("AfterCreate");
    //       })
    //       .catch(() => {
    //         this.$Progress.fail();
    //       });
    //   },
    //   editModal(user) {
    //     this.editmode = true;
    //     this.form.reset();
    //     $("#userModalCenter").modal("show");
    //     this.form.fill(user);
    //   },
    newModal() {
      this.editmode = false;
      // eslint-disable-next-line no-undef
      $("#userModalCenter").modal("show");
    }
    //   deleteUser(user) {
    //     swal
    //       .fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         type: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //       })
    //       .then(result => {
    //         // Send request to the server
    //         if (result.value) {
    //           // swal.fire({
    //           //     type: 'error',
    //           //     title: 'Oops...',
    //           //     text: 'Something went wrong!',
    //           //     footer: '<a href>Bạn đã bị khóa chức năng này?</a>'
    //           // })
    //           this.form
    //             .delete("api/users/" + user.id)
    //             .then(() => {
    //               swal("Deleted!", "Your file has been deleted.", "success");
    //               this.users.splice(this.users.indexOf(user), 1);
    //             })
    //             .catch(() => {
    //               swal.fire("Failed!", "There was something wronge.", "warning");
    //             });
    //         }
    //       });
    //   },
    //   getName(values) {
    //     if (!values) return "";
    //     return values.map((ten, index, values) => {
    //       return ten.name;
    //     });
    //   }
    // },
    // created() {
    //   this.loadUsers();
    //   Fire.$on("AfterCreate", () => {
    //     this.loadUsers();
    //   });
    //   Fire.$on("searching", () => {
    //     this.loadUsers();
    //   });
    //   axios.get("/api/getallroles").then(({ data }) => (this.roles = data));
    //   axios
    //     .get("/api/costcenters-list")
    //     .then(({ data }) => (this.costcenters = data));
  }
};
</script>
