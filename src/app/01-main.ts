import axios from "axios"
import { Product } from "./models/product.model"

(async () => {
                                // con el tipado generico podemos tipar nuestra promesa pero solo hacia afuera, por dentro nuestra data va a seguir siendo any
  async function getProducts(): Promise<Product[]> {
                                // Para arreglar el problema tipamos a data por dentro
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    return data
  }

  const products = await getProducts()
  console.log(products.map(item => `${item.id} - ${item.title}`));

})()
