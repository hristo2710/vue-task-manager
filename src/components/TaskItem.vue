<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['toggle', 'delete']);
</script>

<template>
  <li>
    <span
      :class="{ completed: task.completed }"
      @click="emit('toggle', task.id)"
    >
      {{ task.text }}
    </span>

    <button @click="emit('delete', task.id)">
      Delete
    </button>
  </li>
</template>