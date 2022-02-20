import Vue from "vue";
import axios from "axios";


const defaultState = {
    token: null,
    appliant: {
        ktp: null,
        name: null,
        birthPlace: null,
        birthDate: null,
        selfie: null,
        nik: null,
        fullname: null,
        phone,
    },
    isLoading: false,
    isError: false,
    isSuccess: false,
    isAuthorized: false,
}

const actions = {
    generateOST: ({commit, getters}, payload) => {
        commit('LOADING_STATE', {loading: true, data: []})
        axios
            .post(getters.api + '/applicants/generate-ost', payload)
            .then(response => {
                commit('LOADING_STATE', {loading: false, data: response.data})
                commit('SET_APPLICANT', response.data)
            })
            .catch(error => {
                commit('LOADING_STATE', {loading: false, data: []})
                commit('SET_ERROR', error)
            })
    },
}