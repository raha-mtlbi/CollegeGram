import { AxiosResponse } from "axios";

export function onSuccess<T>(response: AxiosResponse<T>) {
  return response.data;
}

export function onError(error: any) {
  const errorObject = new Error(error.response || error.message);
  console.log("Request Failed:", errorObject);

  return Promise.reject(errorObject);
}
