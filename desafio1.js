class ProductManager {
    constructor() {
      this.products = [];
      this.nextProductId = 1;
    }
  
    addProduct(product) {
      // Validar que todos los campos sean obligatorios
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  
      // Validar que no se repita el campo "code"
      if (this.products.some(existingProduct => existingProduct.code === product.code)) {
        console.error("Ya existe un producto con el mismo código.");
        return;
      }
  
      // Agregar el producto al arreglo
      const newProduct = {
        id: this.nextProductId++,
        title: product.title,
        description: product.description,
        price: product.price,
        thumbnail: product.thumbnail,
        code: product.code,
        stock: product.stock
      };
  
      this.products.push(newProduct);
      console.log(`Producto añadido: ${newProduct.title}`);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (product) {
        return product;
      } else {
        console.error("Producto no encontrado");
      }
    }
  }
  
  // Ejemplo de uso
  const productManager = new ProductManager();
  
  productManager.addProduct({
    title: "Producto 1",
    description: "Descripción del Producto 1",
    price: 19.99,
    thumbnail: "path/to/image1.jpg",
    code: "P001",
    stock: 50
  });
  
  productManager.addProduct({
    title: "Producto 2",
    description: "Descripción del Producto 2",
    price: 29.99,
    thumbnail: "path/to/image2.jpg",
    code: "P002",
    stock: 30
  });
  
  const allProducts = productManager.getProducts();
  console.log("Todos los productos:", allProducts);
  
  const productIdToFind = 2;
  const foundProduct = productManager.getProductById(productIdToFind);
