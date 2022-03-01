import axios from "axios";
import { joinUrlPath } from "@/utils";
import { FIND_USER } from "@/constants/api";

export const findEmail = async (email) => {
  try {
    const { data } = await axios.get(joinUrlPath(config.api, FIND_USER), {
      params: {
        email,
      },
    });
    return { data, error: false };
  } catch (error) {
    return { data: null, error: error.response };
  }
};
