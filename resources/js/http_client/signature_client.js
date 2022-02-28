import axios from "axios";
import {GEN_OTP, LOAD_DOC, SIGNER_FIND, SIGN_DOC} from "../constants/api";
import { joinUrlPath } from "../utils";

<<<<<<< HEAD
export const client = ({ base_url, key }) =>
  axios.create({
    baseURL: base_url,
    headers: {
      "api-key": key,
    },
  });

export const baseUrl = process.env.MIX_XIGNATURE_END_POINT;
export const key = process.env.MIX_XIGNATURE_APP_KEY;

export default {
  client: client({
    base_url: baseUrl,
    key: key,
  }),
  key,
  loadDocuments(page, limit, doctype, status, search) {
    return this.client.post("/v1/document/list", {
=======
export const loadDocuments = async ({
  page, 
  limit, 
  doctype, 
  status, 
  search}) => {
  try {
    const {data} = await axios.post(joinUrlPath(config.api, LOAD_DOC), {
>>>>>>> e5cfa189f292cb5b61f073730bea8c1dd7fa3fdf
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

export const signDoc = async (fileId) => {
  try {
    const {data} = await axios.post(joinUrlPath(config.api, SIGN_DOC), {
      file_id: fileId,
    });
    return {data, error: false};
  } catch (error) {
    return {data: null,  error: error.response};
  }
}

export const genOTP = async (base) => {
  try {
    const {data} = axios.post(joinUrlPath(config.api, GEN_OTP),
      {
        email: user.email,
        fullname: user.name,
        nik: user.nik,
        phone: user.phone,
        birthplace: user.birth_place,
        birthdate: user.birth_date,
        selfie: user.selfie,
        ktp: user.ktp,
      },
    )
    return {data, error: false};
  } catch (error) {
    return {data: null,  error: error.response};
  }
}
