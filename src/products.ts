import { getClient } from "./client";
import { Product, ProductCreateData, Response } from "./types";

export const getProducts = async (): Promise<Response<Product[]>> => {
  return (await getClient().get("/products")).data;
};

export const getProduct = async (id: string): Promise<Response<Product>> => {
  return (await getClient().get(`/products/${id}`)).data;
};

export const createProduct = async (
  product: ProductCreateData
): Promise<Response<Product>> => {
  return (await getClient().post("/products", product)).data;
};

export const updateProduct = async (
  id: string,
  product: Partial<ProductCreateData>
): Promise<Response<Product>> => {
  return (await getClient().patch(`/products/${id}`, product)).data;
};

export const deleteProduct = async (id: string): Promise<Response<Product>> => {
  return (await getClient().delete(`/products/${id}`)).data;
};

export const getProductsByStorage = async (
  storageId: string
): Promise<Response<Product[]>> => {
  return (await getClient().get(`/storages/${storageId}/products`)).data;
};

export const getProductsByCategory = async (
  categoryId: string
): Promise<Response<Product[]>> => {
  return (await getClient().get(`/categories/${categoryId}/products`)).data;
};
