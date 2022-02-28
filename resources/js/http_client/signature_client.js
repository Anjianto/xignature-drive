import axios from "axios";
import {GEN_OTP, LOAD_DOC, SIGNER_FIND, SIGNER_VERIFY, SIGNER_WRITE, SIGN_DOC} from "../constants/api";
import { joinUrlPath } from "../utils";

export const loadDocuments = async ({
  page, 
  limit, 
  doctype, 
  status, 
  search}) => {
  try {
    const {data} = await axios.post(joinUrlPath(config.api, LOAD_DOC), {
      page,
      limit,
      doctype,
      status,
      search,
    });
    return {data, error: false};
  } catch (error) {
    return {data: null,  error: error.response};
  }
}

export const findDocToSign = async (file_id) => {
  try {
    const {data} = await axios.post(joinUrlPath(config.api, SIGNER_FIND), {
      file_id
    });
    return {data, error: false};
  } catch (error) {
    return {data: null,  error: error.response};
  }
}

export const signDoc = async (formData) => {
  try {
    const {data} = await axios.post(joinUrlPath(config.api, SIGNER_VERIFY), formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return {data, error: false};
  } catch (error) {
    return {data: null,  error: error.response};
  }
}

export const rewriteSign = async () => {
  try {
    const {data} = await axios.post(joinUrlPath(config.api, SIGNER_WRITE))
    return {data, error: false};
  } catch (error) {
    return {data: null,  error: error.response};
  }
}
