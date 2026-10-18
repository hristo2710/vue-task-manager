<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const time = ref(new Date().toLocaleTimeString());

let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    time.value = new Date().toLocaleTimeString();
  }, 1000);

  console.log('Clock mounted');
});

onUnmounted(() => {
  clearInterval(intervalId);

  console.log('Clock unmounted');
});
</script>

<template>
  <p>Current time: {{ time }}</p>
</template>