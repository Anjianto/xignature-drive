import axios from 'axios';
import { format, addDays } from 'date-fns'

export const client = ({base_url, key}) => axios.create({
    baseURL: base_url,	
    headers: {
        'api-key': key
    }
});

export default {
    client: client({
        base_url: "https://sandbox.xignature.co.id/v1/",
        key: "aMIhFatJnGJHRQFB6fwgM4R22Lfrajnkbi5B"
    }),
    loadDocuments(page, limit, doctype, status, search) {
        return this.client.post('/document/list', {
                page,
                limit,
                doctype,
                status,
                search
            });
    },
    genOTP(data) {
        // format date
        const birthdate = data.birthdate ? format(data.birthdate, 'yyyy-MM-dd') : null;
        data = {
            email: data.email,
            fullname: data.fullname,
            nik: data.nik,
            ktp: data.ktp,
            selfie: data.selfie,
            phone: data.phone,
            birthplace: data.birthplace,
            birthdate: birthdate,
        }
        return this.client.post(
            'auth/generateToken',
            data
        )
    },
    genLTC(data, duration) {
        const birthdate = data.birthdate ? format(data.birthdate, 'yyyy-MM-dd') : null;
        const expiredDate = format(addDays(Date.now(), duration), 'yyyy-MM-dd'); 
        data = {
            expiredToken: expiredDate,
            email: data.email,
            fullname: data.fullname,
            nik: data.nik,
            ktp: data.ktp,
            selfie: data.selfie,
            phone: data.phone,
            birthplace: data.birthplace,
            birthdate: birthdate,
        }
        return this.client.post(
            'auth/generateLtcToken',
            data
        )
    }
}