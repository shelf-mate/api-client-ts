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
export const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get("/products")).data;
});
export const getProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get(`/products/${id}`)).data;
});
export const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().post("/products", product)).data;
});
export const updateProduct = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().put(`/products/${id}`, product)).data;
});
export const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().delete(`/products/${id}`)).data;
});
export const getProductsByStorage = (storageId) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get(`/storages/${storageId}/products`)).data;
});
export const getProductsByCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get(`/categories/${categoryId}/products`)).data;
});
