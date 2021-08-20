import http from "../http-common";

const url = "/reservations";
class ReservationService {
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

export default new ReservationService();
