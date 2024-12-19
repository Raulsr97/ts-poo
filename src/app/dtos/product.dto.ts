import { Product } from "../models/product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'creationAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}






