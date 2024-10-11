var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getClient } from "./client";
export const getProductTemplates = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get("/productTemplates")).data;
});
export const getProductTemplate = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get(`/productTemplates/${id}`)).data;
});
export const getProductTemplateByEan = (ean) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get(`/productTemplates/by-ean/${ean}`)).data;
});
export const createProductTemplate = (productTemplate) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().post("/productTemplates", productTemplate)).data;
});
export const updateProductTemplate = (id, productTemplate) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().put(`/productTemplates/${id}`, productTemplate))
        .data;
});
export const deleteProductTemplate = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().delete(`/productTemplates/${id}`)).data;
});
