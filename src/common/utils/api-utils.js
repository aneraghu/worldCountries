import axios from "axios";
const axiosConfig = {
  baseURL: process.env.GATSBY_API_URL,
  timeout: 3600 * 5000,
};
export const APIServices = axios.create(axiosConfig);

//These pieces allow us to throw errors on connection timeouts
const getRequestAbortionPieces = () => {
  const abort = axios.CancelToken.source();
  const connectionTimeout = setTimeout(
    () => abort.cancel(`Connection timeout of ${axiosConfig.timeout}ms.`),
    axiosConfig.timeout
  );

  return { abort, connectionTimeout };
};

/**
 * @param {string} path
 * @param {{token: string}} options
 * @param {?Object.<string, any>} parameters URL parameters to include in the query string
 * @returns {Promise<AxiosPromise<any>>}
 */
export const get = async (
  path,
  {parameters, headers } = {},
  axiosClient = APIServices
) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .get(`/${path}`, {
      headers: headers ,
      cancelToken: abort.token,
      params: parameters,
    })
    .then(response => {
      clearTimeout(connectionTimeout);
      return response;
    });
};
