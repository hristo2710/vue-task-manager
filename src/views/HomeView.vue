
<template>
  <div class="page">
    <h1>Welcome!</h1>

    <p>Manage your daily tasks with Vue 3.</p>

    <RouterLink to="/tasks" class="home-link">
      Go to Task Manager →
    </RouterLink>
  </div>
</template>

<style scoped>
.page {
  text-align: center;
}

.page p {
  color: #9ca3af;
  margin-bottom: 28px;
}

.home-link {
  display: inline-block;
  padding: 12px 24px;
  background: #4adea0;
  color: #171923;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s, transform 0.2s;
}

.home-link:hover {
  background: #34d399;
  transform: translateY(-2px);
}
</style>
