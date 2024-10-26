<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo-container">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
    </div>

    <nav>
      <RouterLink to="/todo-list">ToDo</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

</template>

<style scoped>
header {
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #383838;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  display: inline-block;
}

nav {
  display: flex;
  font-size: 1.2rem;
  text-align: center;
}

nav a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
  width: 100px;
}

nav a:hover {
  color: #41B883;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #41B883;
}

main {
  padding: 40px;
}
</style>
