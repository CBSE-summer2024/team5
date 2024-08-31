<template>
  <div class="filter-page">
    <header class="filter-header">
      <h1>Find Your Desired Posts</h1>
      <p>Search and filter posts by title or price to quickly find what you're looking for.</p>
    </header>
    <div class="filter-container">
      <aside class="filter-sidebar">
        <h2>Search Filters</h2>
        <input
          type="text"
          v-model="filterTitle"
          placeholder="Filter by title..."
          class="search-input"
          @input="filterData"
        />
        <label for="price-range" class="price-label">Filter by Price:</label>
        <input
          type="range"
          id="price-range"
          v-model="filterPrice"
          min="0"
          max="100"
          class="price-slider"
          @input="filterData"
        />
        <p class="price-display">Price: ${{ filterPrice }}</p>
        <ul class="filter-list">
          <li v-for="(post, index) in filteredPosts" :key="index" class="filter-section">
            <a href="#" class="filter-link">{{ post.title }}</a>
          </li>
        </ul>
      </aside>
      <main class="filter-main-content">
        <h2>Filtered Results</h2>
        <ul class="item-list">
          <li
            v-for="(post, index) in filteredPosts"
            :key="index"
            class="item-card"
          >
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <span class="item-price">Price: ${{ post.price }}</span>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      filteredPosts: [],
      filterTitle: "",
      filterPrice: 100, // Set the initial maximum price
    };
  },
  methods: {
    fetchData() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          this.posts = data;
          this.filteredPosts = data;
        })
        .catch((error) => console.error("Error fetching data:", error));
    },
    filterData() {
      const searchTerm = this.filterTitle.toLowerCase();
      this.filteredPosts = this.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm) &&
          post.price <= this.filterPrice
      );
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
/* General Layout */
.filter-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #e1f5fe, #b3e5fc);
  min-height: 100vh;
  font-family: 'Verdana', sans-serif;
  color: #004d40;
}

/* Header Section */
.filter-header {
  text-align: center;
  margin-bottom: 30px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.filter-header h1 {
  font-size: 32px;
  color: #00796b;
}

.filter-header p {
  font-size: 16px;
  color: #555;
}

/* Container and Sidebar Styles */
.filter-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
}

.filter-sidebar {
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filter-sidebar h2 {
  font-size: 24px;
  color: #388e3c;
  margin-bottom: 15px;
}

.search-input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.search-input:focus {
  border-color: #388e3c;
  box-shadow: 0 4px 12px rgba(56, 142, 60, 0.3);
}

.price-label {
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
}

.price-slider {
  width: 100%;
  margin-bottom: 10px;
  appearance: none;
  height: 6px;
  border-radius: 5px;
  background: #81c784;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.price-slider:hover {
  opacity: 1;
}

.price-display {
  font-size: 14px;
  color: #388e3c;
  margin-bottom: 20px;
}

.filter-list {
  list-style: none;
  padding: 0;
  width: 100%;
}

.filter-section {
  margin-bottom: 10px;
}

.filter-link {
  color: #2e7d32;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 10px;
  display: block;
  border-radius: 6px;
  transition: background-color 0.3s, color 0.3s;
}

.filter-link:hover {
  background-color: #81c784;
  color: #ffffff;
}

/* Main Content Styles */
.filter-main-content {
  flex-grow: 1;
  padding: 20px;
  background-color: #f1f8e9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.filter-main-content h2 {
  font-size: 24px;
  color: #33691e;
  margin-bottom: 20px;
}

.item-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.item-card {
  background: #ffffff;
  border: 1px solid #c8e6c9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
}

.item-card h3 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #2e7d32;
}

.item-card p {
  font-size: 14px;
  color: #555;
}

.item-price {
  display: block;
  margin-top: 10px;
  font-size: 14px;
  color: #d32f2f;
  font-weight: bold;
}
</style>
