import axios from "axios";
import { format, addDays } from "date-fns";

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
  async getDoucment(id) {
    const { data } = await this.client.get(`/v1/document/${id}`);
    return data;
  },
  getDocUrl(id) {
    return `${baseUrl}v1/document/download/${id}`;
  },
  async downloadDocument(id) {
    const resp = await this.client.get(`/v1/document/download/${id}`, {
      headers: {
        accept: "blob",
      },
    });
    var ia = new Uint8Array(resp.data.length);
    for (var i = 0; i < resp.data.length; i++) {
      ia[i] = resp.data.charCodeAt(i);
    }

    return new Blob([ia], { type: "application/pdf", name: "selfie.pdf" });
    // return resp.data;
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
