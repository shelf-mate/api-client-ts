import { AxiosError } from "axios";

export interface Dates {
  createdAt: Date;
  updatedAt: Date;
}

export type Response<T> = { message: string; data: T } | AxiosError;
export type WithoutDates<T> = Omit<T, "createdAt" | "updatedAt">;

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

export interface ProductTemplate extends Dates {
  id: string;
  ean?: string;
  name?: string;
  expirationTime?: number;

  category?: Category;
  unit?: Unit;
}

export interface Product extends Dates {
  id: string;
  name: string;
  type?: string;
  quantity: number;
  ean?: string;
  expirationDate: string;
  description?: string;
  unit: Unit;
  storage: Storage;
  category: Category;
}
