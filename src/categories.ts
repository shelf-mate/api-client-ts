import { getClient } from "./client";
import { Category, Response } from "./types";

export const getCategories = async (): Promise<Response<Category[]>> => {
  return (await getClient().get("/categories")).data;
};

export const getCategory = async (id: string): Promise<Response<Category>> => {
  return (await getClient().get(`/categories/${id}`)).data;
};

export const createCategory = async (
  category: Category
): Promise<Response<Category>> => {
  return (await getClient().post("/categories", category)).data;
};

export const updateCategory = async (
  id: string,
  category: Partial<Category>
): Promise<Response<Category>> => {
  return (await getClient().put(`/categories/${id}`, category)).data;
};

export const deleteCategory = async (
  id: string
): Promise<Response<Category>> => {
  return (await getClient().delete(`/categories/${id}`)).data;
};
