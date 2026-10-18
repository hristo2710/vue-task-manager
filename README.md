# Vue Task Manager

A simple task management application built with Vue 3, Vite, Vue Router, and Pinia.

This project was created as a hands-on learning exercise to explore Vue 3's Composition API, component communication, routing, and state management.

## Features

- Add new tasks
- Mark tasks as completed or active
- Delete tasks
- Filter tasks by status (All, Active, Completed)
- View total and completed task counts
- Save tasks in localStorage so they persist after page refresh
- Navigate between Home, Tasks, and About pages
- Display a live clock with show/hide functionality

## Technologies Used

- **Vue 3** – JavaScript framework for building user interfaces
- **Vite** – Development server and build tool
- **Vue Router** – Client-side routing
- **Pinia** – Centralized reactive state management
- **JavaScript** – Application logic
- **CSS** – Custom styling and layout
- **localStorage** – Browser-based data persistence

## Project Structure

```text
src/
├── components/
│   ├── AppInfo.vue
│   ├── BaseCard.vue
│   ├── Clock.vue
│   └── TaskItem.vue
├── composables/
│   └── useTasks.js
├── router/
│   └── index.js
├── stores/
│   └── taskStore.js
├── views/
│   ├── HomeView.vue
│   ├── TaskView.vue
│   └── AboutView.vue
├── App.vue
├── main.js
└── style.css
```

## How It Works

### Components

The application uses reusable Vue components:

- `TaskItem.vue` displays individual tasks and emits events when tasks are completed or deleted.
- `Clock.vue` displays the current time and demonstrates Vue lifecycle hooks.
- `BaseCard.vue` provides a reusable layout using named and default slots.
- `AppInfo.vue` demonstrates dependency injection with `provide()` and `inject()`.

### State Management

Pinia manages the shared task state through `taskStore.js`.

The store contains:

- **State:** Tasks and the currently selected filter
- **Getters:** Filtered tasks, total task count, and completed task count
- **Actions:** Adding, deleting, and toggling tasks

A Vue watcher saves task changes to `localStorage`.

### Routing

Vue Router provides three routes:

- `/` – Home page
- `/tasks` – Task Manager
- `/about` – About page

Navigation uses `RouterLink` and `RouterView` without full-page reloads.

### Vue Concepts Practiced

- Composition API and `<script setup>`
- `ref()` and `computed()`
- `watch()` and `watchEffect()`
- `v-model`, `v-if`, and `v-for`
- Props and custom events (`defineProps`, `defineEmits`)
- Lifecycle hooks (`onMounted`, `onUnmounted`)
- `nextTick()` and template refs
- Default and named slots
- Composables
- `provide()` and `inject()`
- Vue Router
- Pinia

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/hristo2710/vue-task-manager.git
cd vue-task-manager
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Production Build

```bash
npm run build
```

The production files will be generated in the `dist` directory.

## Future Improvements

- Task editing
- Due dates and priorities
- Search functionality
- Drag-and-drop task ordering
- Unit tests

## About

This project was built to practice Vue 3 development and gain hands-on experience with modern frontend concepts.