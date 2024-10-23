import { AxiosError } from "axios";

export interface Dates {
  createdAt: Date;
  updatedAt: Date;
}

export type Response<T> = { message: string; data: T } | AxiosError;
export type WithoutDates<T> = Omit<T, "createdAt" | "updatedAt">;
export type WithoutId<T> = Omit<T, "id">;
export type SimpleCreateData<T> = WithoutId<WithoutDates<T>>;

export interface Category extends Dates {
  id: string;
  name: string;
}

export interface Unit extends Dates {
  id: string;
  name: string;
}

export interface Storage extends Dates {
  id: string;
  name: string;
}

export interface ProductTemplateCreateData {
  ean?: string;
  name: string;
  expirationTime: number;
  categoryId: string;
  unitId: string;
}

export interface ProductTemplate extends Dates {
  id: string;
  ean?: string;
  name?: string;
  expirationTime?: number;

  category?: Category;
  unit?: Unit;
}

export interface ProductCreateData {
  ean?: string;
  name: string;
  quantity: number;
  expirationDate: Date;
  description?: string;
  unitId: string;
  storageId: string;
  categoryId: string;
}
export interface Product extends Dates {
  id: string;
  name: string;
  type?: string;
  quantity: number;
  ean?: string;
  expirationDate: Date;
  description?: string;
  unit: Unit;
  storage: Storage;
  category: Category;
}
