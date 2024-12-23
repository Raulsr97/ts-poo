import { faker } from '@faker-js/faker';
// Modelo que define como luce un producto
import { Product } from '../models/product.model';
// Interfaces que definen como deben ser las estructuras para crear y actualizar productos
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

// Clase que actua como servicio para gestionar una lista de productos en memoria
export class ProductMemoryService implements ProductService {
  // Array privado que alamacena los productos en memoria
  private products: Product[] = []

  // Metodo para retornar los productos ya que no puedo usar mi array por fuera porque es privado
  getAll() {
    return this.products
  }

  // Metodo para crear un producto
  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.number.int(),
      creationAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: faker.number.int(),
        name: faker.commerce.department(),
        image: faker.image.url(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      }
    }
    // Me agrega un nuevo producto a mi array de productos con el metodo add.
    return this.add(newProduct)
  }

  // Metodo para agregar un producto a la lista de productos
  add(product: Product) {
    this.products.push(product);
    return product;
  }

  // Metodo para actualizar un producto
  update(id: Product['id'], changes: UpdateProductDto ): Product {
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index];
  }

  // Metodo para buscar un producto
  findOne(id: Product['id']) {
    return this.products.find(item => item.id === id)
  }


}








