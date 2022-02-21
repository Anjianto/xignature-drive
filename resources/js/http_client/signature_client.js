import axios from "axios";
import { format, addDays } from "date-fns";

export const client = ({ base_url, key }) =>
  axios.create({
    baseURL: base_url,
    headers: {
      "api-key": key,
    },
  });

export default {
  client: client({
    base_url: "https://sandbox.xignature.co.id/",
    key: "aMIhFatJnGJHRQFB6fwgM4R22Lfrajnkbi5B",
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
      email: data.email,
      fullname: data.fullname,
      nik: data.nik,
      selfie: data.selfie,
      phone: data.phone,
      birthplace: data.birthPlace,
      birthdate: birthdate,
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
  sign({
    otp,
    token,
    title,
    reason,
    signPage,
    signPos: { x, y },
    shareToCustomer = true,
    document,
  }) {
    return this.client.post(
      "/v1/document/sign",
      {
        title,
        reason,
        signPage,
        signPos: {
          x,
          y,
        },
        shareDocumentToCustomer: shareToCustomer,
        document,
      },
      {
        headers: {
          "one-time-token": token,
          otp: otp,
        },
      }
    );
  },
};
