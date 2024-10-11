import { Product, Response, WithoutDates } from "./types";
export declare const getProducts: () => Promise<Response<Product[]>>;
export declare const getProduct: (id: string) => Promise<Response<Product>>;
export declare const createProduct: (product: WithoutDates<Product>) => Promise<Response<Product>>;
export declare const updateProduct: (id: string, product: Partial<WithoutDates<Product>>) => Promise<Response<Product>>;
export declare const deleteProduct: (id: string) => Promise<Response<Product>>;
export declare const getProductsByStorage: (storageId: string) => Promise<Response<Product[]>>;
export declare const getProductsByCategory: (categoryId: string) => Promise<Response<Product[]>>;
