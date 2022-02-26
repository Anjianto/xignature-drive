import axios from "axios";
import {GEN_OTP, LOAD_DOC, SIGN_DOC} from "../constants/api";
import { joinUrlPath } from "../utils";

export const loadDocuments = async (base, {
  page, 
  limit, 
  doctype, 
  status, 
  search}) => {
  try {
    const {data} = await axios.post(joinUrlPath(base, LOAD_DOC), {
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

export const signDoc = async (base, fileid) => {
  try {
    const {data} = await axios.post(joinUrlPath(base, SIGN_DOC), {
      file_id: fileid,
    });
    return {data, error: false};
  } catch (error) {
    return {data: null,  error: error.response};
  }
}

export const genOTP = async (base) => {
  try {
    const {data} = axios.post(joinUrlPath(base, GEN_OTP),
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
