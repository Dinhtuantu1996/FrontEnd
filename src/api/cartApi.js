import http from "./axiosHttp";

const getAll = () => {
    return http.get("/cart");
};

const get = id => {
    return http.get(`/cart/${id}`);
};

const create = data => {
    return http.post("/cart", data);
};

const update = (id, data) => {
    return http.put(`/cart/${id}`, data);
};

const remove = id => {
    return http.delete(`/cart/${id}`);
};





export default {
    getAll,
    get,
    create,
    update,
    remove,
};