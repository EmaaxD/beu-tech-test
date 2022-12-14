import axios from "axios";

import { baseURL } from "@/config/index";

export const clientAxios = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
