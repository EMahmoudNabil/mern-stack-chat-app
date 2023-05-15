import axios from "axios";

const baseUrl = axios.create({ baseURL: "http://localhost:8002" });

export default baseUrl;
