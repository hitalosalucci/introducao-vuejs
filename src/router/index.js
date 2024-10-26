import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/todo-list',
      name: 'todo',
      component: () => import('../views/ToDoListView.vue')
    },
  ]
})

export default router
