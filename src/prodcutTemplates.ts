import { getClient } from "./client";
import { ProductTemplate, ProductTemplateCreateData, Response } from "./types";

export const getProductTemplates = async (): Promise<
  Response<ProductTemplate[]>
> => {
  return (await getClient().get("/productTemplates")).data;
};

export const getProductTemplate = async (
  id: string
): Promise<Response<ProductTemplate>> => {
  return (await getClient().get(`/productTemplates/${id}`)).data;
};

export const getProductTemplateByEan = async (
  ean: string
): Promise<Response<ProductTemplate>> => {
  return (await getClient().get(`/productTemplates/by-ean/${ean}`)).data;
};

export const createProductTemplate = async (
  productTemplate: ProductTemplateCreateData
): Promise<Response<ProductTemplate>> => {
  return (await getClient().post("/productTemplates", productTemplate)).data;
};

export const updateProductTemplate = async (
  id: string,
  productTemplate: Partial<ProductTemplateCreateData>
): Promise<Response<ProductTemplate>> => {
  return (await getClient().patch(`/productTemplates/${id}`, productTemplate))
    .data;
};

export const deleteProductTemplate = async (
  id: string
): Promise<Response<ProductTemplate>> => {
  return (await getClient().delete(`/productTemplates/${id}`)).data;
};
