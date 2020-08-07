import http from "./axiosHttp";

const getAll = () => {
    return http.get("/topics");
};

const get = id => {
    return http.get(`/topics/${id}`);
};

const create = data => {
    return http.post("/topics", data);
};

const update = (id, data) => {
    return http.put(`/topics/${id}`, data);
};

const remove = id => {
    return http.delete(`/topics/${id}`);
};




export default {
    getAll,
    get,
    create,
    update,
    remove,
};