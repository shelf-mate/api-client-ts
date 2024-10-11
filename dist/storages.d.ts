import { Storage, Response, WithoutDates } from "./types";
export declare const getStorages: () => Promise<Response<Storage[]>>;
export declare const getStorage: (id: string) => Promise<Response<Storage>>;
export declare const createStorage: (storage: WithoutDates<Storage>) => Promise<Response<Storage>>;
export declare const updateStorage: (id: string, storage: Partial<WithoutDates<Storage>>) => Promise<Response<Storage>>;
export declare const deleteStorage: (id: string) => Promise<Response<Storage>>;
