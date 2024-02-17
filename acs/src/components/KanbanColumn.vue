<template>
  <div class="column">
    <h2>{{ column.name }}</h2>
    <div
      class="card"
      v-for="(profile, index) in column.profiles"
      :key="index"
      draggable="true"
      @dragstart="onDragStart(profile, index)"
    >
      <!-- Display profile details here -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['column'],
  methods: {
    onDragStart(profile, index) {
      this.$emit('dragstart', profile, index);
    }
  }
};
</script>

<style scoped>
.column {
  flex: 1;
  margin: 0 10px;
}
.card {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
}
</style>
