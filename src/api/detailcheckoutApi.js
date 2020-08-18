import http from "./axiosHttp";

const getAll = () => {
    return http.get("/detailcheckouts");
};

const get = id => {
    return http.get(`/detailcheckouts/${id}`);
};

const create = data => {
    return http.post("/detailcheckouts", data);
};

const update = (id, data) => {
    return http.put(`/detailcheckouts/${id}`, data);
};

const remove = id => {
    return http.delete(`/detailcheckouts/${id}`);
};




export default {
    getAll,
    get,
    create,
    update,
    remove,
};