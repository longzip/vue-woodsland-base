<template>
  <table class="table table-hover">
    <tbody>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>User Name</th>
        <th>Vai trò</th>
        <th>Showroom</th>
        <th>Cập nhật</th>
        <th>Sửa/Xóa</th>
      </tr>
      <tr v-for="user in users.data" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.username }}</td>
        <td>
          <span
            v-for="role in usersTodo.roles"
            class="badge badge-info"
            :key="role.id"
            >{{ role }}</span
          >
          &nbsp;
        </td>
        <td>
          <span
            v-for="costcenter in getName(usersTodo.costcenters)"
            :key="costcenter.id"
            class="badge badge-light"
            >{{ costcenter }}</span
          >
        </td>
        <td>{{ user.update_at | myDate }}</td>
        <td>
          <a href="#" @click="editModal(user)">
            <i class="fa fa-edit blue"></i>
          </a>
          /
          <a href="#" @click="deleteUser(user)">
            <i class="fa fa-trash red"></i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default { props: ["usersTodo"] };
</script>

<style lang="scss" scoped></style>
