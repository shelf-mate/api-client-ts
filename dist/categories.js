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
export const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get("/categories")).data;
});
export const getCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get(`/categories/${id}`)).data;
});
export const createCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().post("/categories", category)).data;
});
export const updateCategory = (id, category) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().put(`/categories/${id}`, category)).data;
});
export const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().delete(`/categories/${id}`)).data;
});
