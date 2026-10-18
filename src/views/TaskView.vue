<script setup>
import { ref, nextTick, provide } from 'vue';

import TaskItem from '../components/TaskItem.vue';
import Clock from '../components/Clock.vue';
import BaseCard from '../components/BaseCard.vue';
import AppInfo from '../components/AppInfo.vue';

import { storeToRefs } from 'pinia';
import { useTaskStore } from '../stores/taskStore.js';

const taskStore = useTaskStore();

const {
  tasks,
  currentFilter,
  filteredTasks,
  totalTasks,
  completedTasks
} = storeToRefs(taskStore);

const {
  addTask,
  toggleTask,
  deleteTask
} = taskStore;

// Local UI state
const title = ref('My Task Manager');
provide('appName', title);
const newTask = ref('');
const taskInput = ref(null);
const showClock = ref(true);

// Add a new task and focus the input
async function handleAddTask() {
  if (!newTask.value.trim()) return;

  addTask(newTask.value);

  newTask.value = '';

  await nextTick();
  taskInput.value?.focus();
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>

    <!-- Clock -->
    <div class="clock-container">
      <button @click="showClock = !showClock">
        Toggle Clock
      </button>

      <Clock v-if="showClock" />
    </div>

    <!-- Statistics card -->
    <BaseCard>
      <template #header>
        <h2>Task Statistics</h2>
      </template>

      <p>Total tasks: {{ totalTasks }}</p>
      <p>Completed tasks: {{ completedTasks }}</p>

      <template #footer>
        <p>Keep up the good work!</p>
      </template>
    </BaseCard>

    <!-- Add task -->
    <div class="task-form">
      <input
        ref="taskInput"
        v-model="newTask"
        type="text"
        placeholder="Enter a new task"
        @keyup.enter="handleAddTask"
      />

      <button @click="handleAddTask">
        Add task
      </button>
    </div>

    <h2>My Tasks</h2>

    <!-- Filters -->
    <div class="filters">
      <button
        :class="{ active: currentFilter === 'all' }"
        @click="currentFilter = 'all'"
      >
        All
      </button>

      <button
        :class="{ active: currentFilter === 'active' }"
        @click="currentFilter = 'active'"
      >
        Active
      </button>

      <button
        :class="{ active: currentFilter === 'completed' }"
        @click="currentFilter = 'completed'"
      >
        Completed
      </button>
    </div>

    <!-- Task list -->
    <ul>
      <TaskItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask"
        @delete="deleteTask"
      />
    </ul>

    <p v-if="filteredTasks.length === 0">
      No tasks in this category.
    </p>
    <AppInfo />
  </div>
</template>
