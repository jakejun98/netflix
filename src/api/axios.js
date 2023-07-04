import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3b4ee1089062dd930cf37454707272db",
    language: "ko-KR",
  },
});

export default instance;
