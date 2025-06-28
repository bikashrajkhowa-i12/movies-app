import axios from "axios";

import { baseUrl } from "../constants/urlConstants";

const callApi = async (data) => {
  const { url, method = "", payload = {}, params = {} } = data || {};
  
  const controller = new AbortController();
  const signal = controller.signal;

  const axiosConfig = {
    url: `${baseUrl}/api${url}`,
    method: method?.toUpperCase() || "GET",
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
    params,
    signal,
  };

  try {
    const response = await axios(axiosConfig);
    return response;
  } catch (error) {
    if (signal.aborted) {
      console.log('Request aborted by this AbortController');
    } else {
      console.log("function: callApi(), \n error: ", error);
      throw new Error(error?.message || "Something went wrong");
    }
  }
};

export default callApi;
