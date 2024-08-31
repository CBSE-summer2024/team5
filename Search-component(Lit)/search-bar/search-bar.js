import { LitElement, html, css } from 'lit';

export class SearchBar extends LitElement {
  static properties = {
    query: { type: String },
    products: { type: Array },
    filteredProducts: { type: Array },
  };

  constructor() {
    super();
    this.query = '';
    this.products = [];
    this.filteredProducts = [];
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px;
      font-family: 'Verdana', sans-serif;
      background-color: #e0f7fa;
      color: #2e2e2e;
      border: 2px solid #00796b;
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .search-container {
      width: 100%;
      max-width: 500px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      background-color: #ffffff;
      border-radius: 10px;
      padding: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    input[type='text'] {
      flex-grow: 1;
      padding: 12px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      color: #333;
      background-color: #f9f9f9;
      margin-right: 5px;
      transition: background-color 0.3s ease;
    }

    input[type='text']:focus {
      background-color: #e3f2fd;
      outline: none;
    }

    button {
      padding: 10px 15px;
      border: none;
      border-radius: 8px;
      background-color: #00796b;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #004d40;
    }

    ul {
      width: 100%;
      max-width: 500px;
      list-style: none;
      padding: 0;
      margin: 0;
      border-radius: 10px;
      overflow: hidden;
      background-color: #f0f4c3;
      border: 1px solid #c0ca33;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    li {
      padding: 12px 20px;
      border-bottom: 1px solid #dcedc8;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    li:last-child {
      border-bottom: none;
    }

    li:hover {
      background-color: #c5e1a5;
      color: #004d40;
    }

    li {
      font-size: 15px;
      cursor: pointer;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.fetchProducts();
  }

  async fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      this.products = data;
      this.filteredProducts = data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  updateQuery(event) {
    this.query = event.target.value.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(this.query)
    );
  }

  render() {
    return html`
      <div class="search-container">
        <input
          type="text"
          placeholder="Type to search products..."
          @input="${this.updateQuery}"
        />
        <button @click="${() => (this.query = '', this.filteredProducts = this.products)}">Clear</button>
      </div>
      <ul>
        ${this.filteredProducts.map(
          (product) => html`<li>${product.title}</li>`
        )}
      </ul>
    `;
  }
}

customElements.define('search-bar', SearchBar);
