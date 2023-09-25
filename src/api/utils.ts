import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const onSuccess = (response: AxiosResponse<any>) => {
  if (
    response.headers &&
    response.headers["content-type"].indexOf("application/json") !== -1
  ) {
    return response.data;
  }
  throw new Error(
    `The response of this API endpoint is not JSON, URL: ${response.config.url}`
  );
};

export const onError = (error: any) => {
  console.error("Post Request Failed:", error.config);

  if (error.response) {
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
    toast.error(error.response.data.error);
    console.error("Headers:", error.response.headers);
  } else {
    console.error("Error Message:", error.message);
  }

  return Promise.reject(error.response || error.message);
};
