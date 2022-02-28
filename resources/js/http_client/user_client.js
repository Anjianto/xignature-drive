import { joinUrlPath } from "@/utils";
import { FIND_USER_EMAIL } from "@/constants/api";
import axios from "axios";

export const findEmail = async (base, { email }) => {
  try {
    const { data } = await axios.post(joinUrlPath(base, FIND_USER_EMAIL), {
      email,
    });
    return { data, error: false };
  } catch (error) {
    return { data: null, error: error.response };
  }
};
