import axios from "axios";
import { LOG_IN, LOG_OUT, REGISTER } from "@/constants/api";
import { joinUrlPath } from "@/utils";

export const register = async (endpoint, formData) => {
  try {
    const { data } = await axios.post(joinUrlPath(config.api || endpoint, REGISTER), formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(data);
    return { data, error: false };
  } catch (error) {
    console.log(error);
    return { data: null, error: error.response };
  }
};

export const logout = async (endpoint) => {
  try {
    await axios.get(joinUrlPath(config.api || endpoint, LOG_OUT));
    return { data: true, error: false };
  } catch (error) {
    return { data: null, error: error.response };
  }
};

export const fetchAuth = async (endpoint) => {
  try {
    const { data } = await axios.get(joinUrlPath(config.api || endpoint, `${LOG_IN}${getters.sorting.URI}`));

    return { data, error: false };
  } catch (error) {
    return { data: null, error: error.response };
  }
};
