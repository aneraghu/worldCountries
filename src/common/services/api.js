import { get } from "../utils/api-utils";

export const getCountries = () =>
  get(`countries.json`).then(({ data }) => {
    return data;
  });
export const getState = () =>
  get(`states.json`).then(({ data }) => {
    return data;
  });
export const getCity = () =>
  get(`cities.json`).then(({ data }) => {
    return data;
  });
