const apiClient = require("./apiClient");
const endpoints = require("./apiEndpoints");

class UserService {

  async getUsers() {
    return apiClient.get(endpoints.USERS);
  }

  async getUserById(id) {
    return apiClient.get(endpoints.USER_BY_ID(id));
  }

  async createUser(payload) {
    return apiClient.post(endpoints.USERS,payload);
  }

  async updateUser(id, payload) {
    return apiClient.put(endpoints.USER_BY_ID(id),payload);
  }

  async patchUser(id, payload) {
    return apiClient.patch(endpoints.USER_BY_ID(id),payload);
  }

  async deleteUser(id) {
    return apiClient.delete(endpoints.USER_BY_ID(id));
  }
}

module.exports = new UserService();