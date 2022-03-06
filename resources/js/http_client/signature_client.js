import axios from "axios";
import {
  GEN_OTP,
  GET_DOC,
  LOAD_DOC,
  SIGNER_FIND,
  SIGNER_INVITE,
  SIGNER_VERIFY,
  SIGNER_WRITE,
  SIGN_DOC,
} from "../constants/api";
import { joinUrlPath } from "../utils";

export const client = ({ base_url, key }) =>
  axios.create({
    baseURL: base_url,
    headers: {
      "api-key": key,
    },
  });

export const baseUrl = process.env.MIX_XIGNATURE_END_POINT;
export const key = process.env.MIX_XIGNATURE_APP_KEY;

export const loadDocuments = async ({
  page,
  limit,
  doctype,
  status,
  search,
}) => {
  try {
    const { data } = await axios.post(joinUrlPath(config.api, LOAD_DOC), {
      page,
      limit,
      doctype,
      status,
      search,
    });
    return { data, error: false };
  } catch (error) {
    return { data: null, error: error.response };
  }
};

export const getDocument = async (id) => {
  try {
    const { data } = await axios.get(
      joinUrlPath(config.api, `${GET_DOC}/${id}`)
    );
    console.log(data);
    return { data, error: false };
  } catch (error) {
    return { data: null, error: error.response };
  }
};

export const findDocToSign = async (file_id) => {
  try {
    const { data } = await axios.post(joinUrlPath(config.api, SIGNER_FIND), {
      file_id,
    });
    console.log(data);
    return { data, error: false };
  } catch (error) {
    return { data: null, error: error.response };
  }
};

export const signDoc = async (formData) => {
  try {
    const { data } = await axios.post(
      joinUrlPath(config.api, SIGNER_VERIFY),
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return { data, error: false };
  } catch (error) {
    return { data: null, error: error.response };
  }
};

export const rewriteSign = async () => {
  try {
    const { data } = await axios.post(joinUrlPath(config.api, SIGNER_WRITE));
    return { data, error: false };
  } catch (error) {
    return { data: null, error: error.response };
  }
};

export const inviteSign = async (email, file_id) => {
  try {
    const { data } = await axios.post(joinUrlPath(config.api, SIGNER_INVITE), {
      email,
      file_id,
    });
    return { data, error: false };
  } catch (error) {
    return { data: null, error: error.response };
  }
};
