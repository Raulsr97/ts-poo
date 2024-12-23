import { ProductMemoryService } from "./service/product-memory.service";

// Creamos una nueva instancia de la clase ProductMemoryService
const productService = new ProductMemoryService()

// Creamos un nuevo producto, (omitimos los atributos de dto)
productService.create({
  title: 'Producto 1',
  price: 100,
  description: 'bla bla bla',
  categoryId: '12',
  images: []
})

// Almacenamos el array de prodcutos en la variable products ya que el metodo getAll retorna dicho array
const products = productService.getAll()
// Almacenamos el id del producto en la posición [0]
const productId = products[0].id

// Realizamos una actualizacion del titulo al primer producto del array
productService.update(productId, {
  title: 'cambiar nombre'
})

const rta = productService.findOne(productId)
console.log(rta);


