import { ProductHttpService } from "./service/product-http.service";

(async () => {
  const productService = new ProductHttpService()

  console.log('----'.repeat(10));

  const products = await productService.getAll()
  console.log(products.length)

})()

