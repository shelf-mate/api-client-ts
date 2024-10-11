import axios from "axios";
export let client;
export const init = (config) => {
    client = axios.create(config);
};
export const getClient = () => {
    if (!client) {
        throw new Error("Client not initialized");
    }
    return client;
};
