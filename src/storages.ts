import { getClient } from "./client";
import { Storage, Response, WithoutDates } from "./types";

export const getStorages = async (): Promise<Response<Storage[]>> => {
  return (await getClient().get("/storages")).data;
};

export const getStorage = async (id: string): Promise<Response<Storage>> => {
  return (await getClient().get(`/storages/${id}`)).data;
};

export const createStorage = async (
  storage: WithoutDates<Storage>
): Promise<Response<Storage>> => {
  return (await getClient().post("/storages", storage)).data;
};

export const updateStorage = async (
  id: string,
  storage: Partial<WithoutDates<Storage>>
): Promise<Response<Storage>> => {
  return (await getClient().put(`/storages/${id}`, storage)).data;
};

export const deleteStorage = async (id: string): Promise<Response<Storage>> => {
  return (await getClient().delete(`/storages/${id}`)).data;
};
