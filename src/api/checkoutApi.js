import http from "./axiosHttp";

const getAll = () => {
    return http.get("/checkouts");
};

const get = id => {
    return http.get(`/checkouts/${id}`);
};

const create = data => {
    return http.post("/checkouts", data);
};

const update = (id, data) => {
    return http.put(`/checkouts/${id}`, data);
};

const remove = id => {
    return http.delete(`/checkouts/${id}`);
};




export default {
    getAll,
    get,
    create,
    update,
    remove,
};