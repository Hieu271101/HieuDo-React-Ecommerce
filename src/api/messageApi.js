import axios from "axios";
import axiosClient from "./axiosClient";

const messageApi = {

    async getAll(params) {
        axios.get('http://localhost:9090/message')
            .then(response => {
                return (response.data);
            })
        // const url = '/message';
        // return await axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/message/${id}`;
        return axiosClient.get(url);
    },

};

export default messageApi;