<script setup>
import { inject } from 'vue';

const appName = inject('appName', 'Unknown App');
</script>

<template>
  <p class="app-info">
    Built with Vue 3 — {{ appName }}
  </p>
</template>

<style scoped>
.app-info {
  text-align: center;
  color: #9ca3af;
  font-size: 12px;
  margin-top: 25px;
}
</style>