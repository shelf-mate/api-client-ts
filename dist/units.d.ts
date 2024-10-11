import { Unit, Response, WithoutDates } from "./types";
export declare const getUnits: () => Promise<Response<Unit[]>>;
export declare const getUnit: (id: string) => Promise<Response<Unit>>;
export declare const createUnit: (unit: WithoutDates<Unit>) => Promise<Response<Unit>>;
export declare const updateUnit: (id: string, unit: Partial<WithoutDates<Unit>>) => Promise<Response<Unit>>;
export declare const deleteUnit: (id: string) => Promise<Response<Unit>>;
