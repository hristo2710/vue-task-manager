<template>
  <div class="card">
    <header class="card-header">
      <slot name="header" />
    </header>

    <main class="card-body">
      <slot />
    </main>

    <footer class="card-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
.card {
  background: #252936;
  border: 1px solid #343b4d;
  border-radius: 12px;
  padding: 16px 20px;
  margin: 20px 0;
  text-align: center;
}

.card-header {
  color: #4adea0;
  margin-bottom: 8px;
}

.card-header :deep(h2) {
  margin: 0;
  font-size: 20px;
}

.card-body :deep(p) {
  margin: 8px 0;
}

.card-footer {
  margin-top: 8px;
  font-size: 13px;
  color: #9ca3af;
}

.card-footer :deep(p) {
  margin: 0;
}
</style>