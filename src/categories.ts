import { getClient } from "./client";
import { Category, Product, Response, SimpleCreateData } from "./types";

export const getCategories = async (): Promise<Response<Category[]>> => {
  return (await getClient().get("/categories")).data;
};

export const getCategory = async (id: string): Promise<Response<Category>> => {
  return (await getClient().get(`/categories/${id}`)).data;
};

export const createCategory = async (
  category: SimpleCreateData<Category>
): Promise<Response<Category>> => {
  return (await getClient().post("/categories", category)).data;
};

export const updateCategory = async (
  id: string,
  category: Partial<SimpleCreateData<Category>>
): Promise<Response<Category>> => {
  return (await getClient().put(`/categories/${id}`, category)).data;
};

export const deleteCategory = async (
  id: string
): Promise<Response<Category>> => {
  return (await getClient().delete(`/categories/${id}`)).data;
};

export const getCategoryProducts = async (
  id: string
): Promise<Response<Product[]>> => {
  return (await getClient().get(`/categories/${id}/products`)).data;
};
