<template>
  <div class="home-page">
    <header class="hero-section">
      <h1>Welcome to Our Platform</h1>
      <p>Your one-stop solution for finding the best products.</p>
      <button @click="exploreMore">Explore More</button>
    </header>
    <section class="about-section">
      <h2>About Us</h2>
      <p>
        We are dedicated to bringing you the best products from various categories, ensuring quality and satisfaction. Discover our wide range of items and enjoy a seamless shopping experience.
      </p>
    </section>
    <section class="features-section">
      <h2>Our Features</h2>
      <ul>
        <li>✔️ Wide variety of products</li>
        <li>✔️ User-friendly search and filter</li>
        <li>✔️ Secure and fast checkout process</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    exploreMore() {
      alert('Explore more features coming soon!');
    },
  },
};
</script>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to right, #e0f7fa, #b2ebf2);
  color: #004d40;
  font-family: 'Verdana', sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 800px;
}

.hero-section h1 {
  font-size: 36px;
  color: #00796b;
}

.hero-section p {
  font-size: 18px;
  color: #555;
  margin: 10px 0 20px 0;
}

.hero-section button {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background-color: #00796b;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hero-section button:hover {
  background-color: #004d40;
}

/* About Section */
.about-section {
  text-align: left;
  max-width: 800px;
  padding: 30px;
  background-color: #f9fbe7;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.about-section h2 {
  font-size: 28px;
  color: #558b2f;
}

.about-section p {
  font-size: 16px;
  color: #333;
  margin-top: 10px;
}

/* Features Section */
.features-section {
  max-width: 800px;
  padding: 30px;
  background-color: #f1f8e9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.features-section h2 {
  font-size: 28px;
  color: #33691e;
  margin-bottom: 15px;
}

.features-section ul {
  list-style: none;
  padding: 0;
}

.features-section li {
  font-size: 16px;
  padding: 8px 0;
  border-bottom: 1px solid #c5e1a5;
}

.features-section li:last-child {
  border-bottom: none;
}

.features-section li::before {
  content: '🌟';
  margin-right: 10px;
}
</style>
