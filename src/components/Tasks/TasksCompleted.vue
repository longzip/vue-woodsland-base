<template>
  <div class="q-mt-lg">
    <list-header bgColor="bg-green-4">Completed</list-header>
    <q-list separator bordered>
      <task
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ["tasksCompleted"],
  components: {
    task: require("./Task.vue").default,
    "list-header": require("../Shared/ListHeader.vue").default
  }
};
</script>
