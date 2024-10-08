import { getClient } from "./client";
import { Product, Response, WithoutDates } from "./types";

export const getProducts = async (): Promise<Response<Product[]>> => {
  return (await getClient().get("/products")).data;
};

export const getProduct = async (id: string): Promise<Response<Product>> => {
  return (await getClient().get(`/products/${id}`)).data;
};

export const createProduct = async (
  product: WithoutDates<Product>
): Promise<Response<Product>> => {
  return (await getClient().post("/products", product)).data;
};

export const updateProduct = async (
  id: string,
  product: Partial<WithoutDates<Product>>
): Promise<Response<Product>> => {
  return (await getClient().put(`/products/${id}`, product)).data;
};

export const deleteProduct = async (id: string): Promise<Response<Product>> => {
  return (await getClient().delete(`/products/${id}`)).data;
};
