
<template>
  <div class="app-layout">
    <nav class="navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/tasks">Tasks</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 30px;
}

.navigation a {
  color: #9ca3af;
  text-decoration: none;
  font-weight: 600;
  padding: 10px;
  transition: color 0.2s;
}

.navigation a:hover {
  color: #4adea0;
}

.navigation a.router-link-active {
  color: #4adea0;
  border-bottom: 2px solid #4adea0;
}

main {
  width: 100%;
}
</style>
