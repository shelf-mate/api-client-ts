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
export const getStorages = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get("/storages")).data;
});
export const getStorage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get(`/storages/${id}`)).data;
});
export const createStorage = (storage) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().post("/storages", storage)).data;
});
export const updateStorage = (id, storage) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().put(`/storages/${id}`, storage)).data;
});
export const deleteStorage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().delete(`/storages/${id}`)).data;
});
