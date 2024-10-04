import { getClient } from "./client";
import { Unit, Response, WithoutDates } from "./types";

export const getUnits = async (): Promise<Response<Unit[]>> => {
  return (await getClient().get("/units")).data;
};

export const getUnit = async (id: string): Promise<Response<Unit>> => {
  return (await getClient().get(`/units/${id}`)).data;
};

export const createUnit = async (
  unit: WithoutDates<Unit>
): Promise<Response<Unit>> => {
  return (await getClient().post("/units", unit)).data;
};

export const updateUnit = async (
  id: string,
  unit: Partial<WithoutDates<Unit>>
): Promise<Response<Unit>> => {
  return (await getClient().put(`/units/${id}`, unit)).data;
};

export const deleteUnit = async (id: string): Promise<Response<Unit>> => {
  return (await getClient().delete(`/units/${id}`)).data;
};
