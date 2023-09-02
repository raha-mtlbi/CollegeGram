import Axios from "axios";
import { getToken, removeToken } from "./token";

export const BaseUrl = "https://murphyteam.ir/api/";
export const apiAgent = Axios.create({ baseURL: BaseUrl });

apiAgent.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiAgent.interceptors.response.use(
  (config) => config,

  (error) => {
    if (error.response.status === 401) {
      removeToken();
    }

    return Promise.reject(error);
  }
);
