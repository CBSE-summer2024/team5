<template>
  <div id="app">
    <header class="app-header">
      <h1>Mart<span>.ps</span></h1>
      <p>Your ultimate shopping companion. Explore, shop, and enjoy!</p>
    </header>
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/cart" class="nav-link">Category</router-link>
      <router-link to="/filter" class="nav-link">Filter</router-link>
      <router-link to="/search" class="nav-link">Search</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import router from './router';

export default {
  name: 'App',
  router,
};
</script>

<style scoped>
/* General Layout */
#app {
  text-align: center;
  padding: 20px;
  background-color: #f4f4f9;
  font-family: 'Verdana', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Header Section */
.app-header {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  text-align: center;
}

.app-header h1 {
  font-size: 36px;
  color: #00796b;
}

.app-header h1 span {
  color: #263238;
}

.app-header p {
  font-size: 16px;
  color: #555;
  margin-top: 10px;
}

/* Navigation Bar */
.navbar {
  display: flex;
  justify-content: center;
  background-color: #263238;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 1200px;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  padding: 12px 20px;
  margin: 0 10px;
  font-size: 14px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  border-radius: 8px;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  background-color: #00796b;
  transform: translateY(-2px);
}

.nav-link.active {
  background-color: #42b983;
  color: #ffffff;
}
</style>
