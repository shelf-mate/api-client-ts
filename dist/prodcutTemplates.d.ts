import { ProductTemplate, Response, WithoutDates } from "./types";
export declare const getProductTemplates: () => Promise<Response<ProductTemplate[]>>;
export declare const getProductTemplate: (id: string) => Promise<Response<ProductTemplate>>;
export declare const getProductTemplateByEan: (ean: string) => Promise<Response<ProductTemplate>>;
export declare const createProductTemplate: (productTemplate: WithoutDates<ProductTemplate>) => Promise<Response<ProductTemplate>>;
export declare const updateProductTemplate: (id: string, productTemplate: Partial<WithoutDates<ProductTemplate>>) => Promise<Response<ProductTemplate>>;
export declare const deleteProductTemplate: (id: string) => Promise<Response<ProductTemplate>>;
