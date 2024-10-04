import { AxiosInstance, CreateAxiosDefaults } from "axios";
import axios from "axios";
export let client: AxiosInstance;

export const init = (config: CreateAxiosDefaults) => {
  client = axios.create(config);
};

export const getClient = () => {
  if (!client) {
    throw new Error("Client not initialized");
  }
  return client;
};
