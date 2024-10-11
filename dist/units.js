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
export const getUnits = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get("/units")).data;
});
export const getUnit = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().get(`/units/${id}`)).data;
});
export const createUnit = (unit) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().post("/units", unit)).data;
});
export const updateUnit = (id, unit) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().put(`/units/${id}`, unit)).data;
});
export const deleteUnit = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield getClient().delete(`/units/${id}`)).data;
});
