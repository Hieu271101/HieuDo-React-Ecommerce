import axios from "axios";
import axiosClient from "./axiosClient";

const movieApi = {
    async getAll(params) {
        const url = '/movie';
        return await axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/movie/${id}`;
        return axiosClient.get(url);
    },

};

export default movieApi;