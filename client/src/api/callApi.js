import axios from "axios";

import { baseUrl } from "../constants/urlConstants";

const callApi = async (data) => {
  const { url, method = "", payload = {}, params = {} } = data || {};
  try {
    const response = await axios({
      url: `${baseUrl}/api${url}`,
      method: method?.toUpperCase() || "GET",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
      params: params,
    });
    return response;
  } catch (error) {
    console.log("function: callApi(), \n error: ", error);
    throw new Error(error?.message || "Something went wrong");
  }
};

export default callApi;
