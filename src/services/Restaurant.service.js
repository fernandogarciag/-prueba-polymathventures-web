import http from "../http-common";

const url = "/restaurants";
class RestaurantService {
  getAll() {
    return http.get(url);
  }

  create(data) {
    return http.post(url, data);
  }

  get(id) {
    return http.get(`${url}/${id}`);
  }

  update(id, data) {
    return http.put(`${url}/${id}`, data);
  }

  delete(id) {
    return http.delete(`${url}/${id}`);
  }
}

export default new RestaurantService();
