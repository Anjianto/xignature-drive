import axios from "axios";
import { format, addDays } from "date-fns";

export const client = ({ base_url, key }) =>
  axios.create({
    baseURL: base_url,
    headers: {
      "api-key": key,
    },
  });

const baseUrl = "https://sandbox.xignature.co.id/";  
const key = "aMIhFatJnGJHRQFB6fwgM4R22Lfrajnkbi5B";

export default {
  client: client({
    base_url: baseUrl,
    key: key,
  }),
  loadDocuments(page, limit, doctype, status, search) {
    return this.client.post("/v1/document/list", {
      page,
      limit,
      doctype,
      status,
      search,
    });
  },
  genOTP(data) {
    // format date
    const birthdate = data.birthdate
      ? format(data.birthdate, "yyyy-MM-dd")
      : null;
    data = {
      ...data,
      birthdate,

    };
    return this.client.post("/v1/auth/generateToken", data);
  },
  genLTC(data, duration) {
    const birthdate = data.birthdate
      ? format(data.birthdate, "yyyy-MM-dd")
      : null;
    const expiredToken = format(addDays(Date.now(), duration), "yyyy-MM-dd");
    data = {
      ...data,
      expiredToken,
      birthdate,
    };

    return this.client.post("/v1/auth/generateLtcToken", data);
  },
  getDoucmentURL(id) {
    return `${baseUrl}/v1/document/download/${id}`;
  },
  sign({
    otp,
    token,
    title,
    reason,
    signPage,
    signPos: {
      x, y,
    },
    shareToCustomer = true,
    document
  }) {
    const signType = "data:application/pdf;base64,";
    const docData = document.slice(signType.length)
    return this.client.post("/v1/document/sign", 
      {
        title,
        reason,
        signPage,
        signPos: {
          x, y,
        },
        shareDocumentToCustomer: shareToCustomer,
        document: docData,
      }, {
        headers: {
          "one-time-token": token,
          otp: otp,
        },
      }
    )
  },
};
