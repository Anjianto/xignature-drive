import { findEmail } from "@/http_client/user_client";
import { extend } from "vee-validate/dist/vee-validate.full";

export const emailUniq = () => {
  return extend("mailcheck", {
    validate: async (value) => {
      // eslint-disable-next-line no-undef
      const { data, error } = await findEmail(value);
      console.log(data.data, error, !error && data.data.length === 0);
      if (!error && data.data.length === 0) {
        console.log(error.status);
        return true;
      }
      return "email already used by another user";
    },
  });
};
