import { Unit, Response, SimpleCreateData } from "./types";
export declare const getUnits: () => Promise<Response<Unit[]>>;
export declare const getUnit: (id: string) => Promise<Response<Unit>>;
export declare const createUnit: (unit: SimpleCreateData<Unit>) => Promise<Response<Unit>>;
export declare const updateUnit: (id: string, unit: Partial<SimpleCreateData<Unit>>) => Promise<Response<Unit>>;
export declare const deleteUnit: (id: string) => Promise<Response<Unit>>;
