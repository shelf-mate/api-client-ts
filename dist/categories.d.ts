import { Category, Response, WithoutDates } from "./types";
export declare const getCategories: () => Promise<Response<Category[]>>;
export declare const getCategory: (id: string) => Promise<Response<Category>>;
export declare const createCategory: (category: WithoutDates<Category>) => Promise<Response<Category>>;
export declare const updateCategory: (id: string, category: Partial<WithoutDates<Category>>) => Promise<Response<Category>>;
export declare const deleteCategory: (id: string) => Promise<Response<Category>>;
