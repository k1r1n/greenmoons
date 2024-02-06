import axios from "axios";
import { BASE, MOVIE } from "../constants/endpoint";
import { CONFIG_HEADER } from "../constants/axios";

export const fetchMovies = async () => {
  const response = await axios.get(`${BASE}${MOVIE}`, {
    headers: CONFIG_HEADER,
  });

  return response;
};
