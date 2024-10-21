import { Category, Product, Response, SimpleCreateData } from "./types";
export declare const getCategories: () => Promise<Response<Category[]>>;
export declare const getCategory: (id: string) => Promise<Response<Category>>;
export declare const createCategory: (category: SimpleCreateData<Category>) => Promise<Response<Category>>;
export declare const updateCategory: (id: string, category: Partial<SimpleCreateData<Category>>) => Promise<Response<Category>>;
export declare const deleteCategory: (id: string) => Promise<Response<Category>>;
export declare const getCategoryProducts: (id: string) => Promise<Response<Product[]>>;
