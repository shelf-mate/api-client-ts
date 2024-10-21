import { Storage, Response, SimpleCreateData } from "./types";
export declare const getStorages: () => Promise<Response<Storage[]>>;
export declare const getStorage: (id: string) => Promise<Response<Storage>>;
export declare const createStorage: (storage: SimpleCreateData<Storage>) => Promise<Response<Storage>>;
export declare const updateStorage: (id: string, storage: Partial<SimpleCreateData<Storage>>) => Promise<Response<Storage>>;
export declare const deleteStorage: (id: string) => Promise<Response<Storage>>;
