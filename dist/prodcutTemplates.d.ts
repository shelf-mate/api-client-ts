import { ProductTemplate, ProductTemplateCreateData, Response } from "./types";
export declare const getProductTemplates: () => Promise<Response<ProductTemplate[]>>;
export declare const getProductTemplate: (id: string) => Promise<Response<ProductTemplate>>;
export declare const getProductTemplateByEan: (ean: string) => Promise<Response<ProductTemplate>>;
export declare const createProductTemplate: (productTemplate: ProductTemplateCreateData) => Promise<Response<ProductTemplate>>;
export declare const updateProductTemplate: (id: string, productTemplate: Partial<ProductTemplateCreateData>) => Promise<Response<ProductTemplate>>;
export declare const deleteProductTemplate: (id: string) => Promise<Response<ProductTemplate>>;
