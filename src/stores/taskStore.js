import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('tasks', () => {
  // State
  const tasks = ref(
    JSON.parse(localStorage.getItem('tasks') || '[]')
  );

  const currentFilter = ref('all');

  // Getters
  const filteredTasks = computed(() => {
    if (currentFilter.value === 'active') {
      return tasks.value.filter(task => !task.completed);
    }

    if (currentFilter.value === 'completed') {
      return tasks.value.filter(task => task.completed);
    }

    return tasks.value;
  });

  const totalTasks = computed(() => tasks.value.length);

  const completedTasks = computed(() =>
    tasks.value.filter(task => task.completed).length
  );

  // Actions
  function addTask(text) {
    if (!text.trim()) return;

    tasks.value.push({
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false
    });
  }

  function toggleTask(id) {
    const task = tasks.value.find(task => task.id === id);

    if (task) {
      task.completed = !task.completed;
    }
  }

  function deleteTask(id) {
    tasks.value = tasks.value.filter(task => task.id !== id);
  }

  // Persist tasks
  watch(
    tasks,
    (newTasks) => {
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    },
    { deep: true }
  );

  return {
    tasks,
    currentFilter,
    filteredTasks,
    totalTasks,
    completedTasks,
    addTask,
    toggleTask,
    deleteTask
  };
});
