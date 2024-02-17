<template>
  <div class="container">
    <kanban-column
      v-for="(column, index) in columns"
      :key="index"
      :column="column"
    ></kanban-column>
  </div>
</template>

<script>
import KanbanColumn from "./KanbanColumn.vue";

export default {
  components: {
    KanbanColumn
  },
  data() {
    return {
      columns: [
        { name: 'To Do', profiles: [] },
        { name: 'In Progress', profiles: [] },
        { name: 'Done', profiles: [] }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>
