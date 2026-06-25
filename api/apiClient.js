const axios = require("axios");
const env = require("../utils/env");

const apiClient = axios.create({
  baseURL: env.API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

apiClient.interceptors.request.use((request) => {
  request.metadata = {
    startTime: new Date()
  };
  console.log(`${request.method.toUpperCase()} ${request.url}`);
  if (request.data) {
  console.log("BODY:",JSON.stringify(request.data,null,2)
  );
}
  return request;
});

apiClient.interceptors.response.use((response) => {
  const duration = new Date() - response.config.metadata.startTime;
  response.duration = duration;
  console.log("STATUS:", response.status);
  console.log("TIME:", `${duration}ms`);
  return response;
});

module.exports = apiClient;