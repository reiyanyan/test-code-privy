import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
// const config = useRuntimeConfig();

class ApiService {
  public static axiosInstance: AxiosInstance;

  public static init() {
    const axiosInstance = axios.create({
      baseURL:
        "https://cors-anywhere.herokuapp.com/http://pretest-qa.dcidev.id/api/v1",
    });
    ApiService.axiosInstance = axiosInstance;
    this.setInterceptor();
  }

  public static setInterceptor() {
    ApiService.axiosInstance.interceptors.response.use(
      (response) => {
        if (response.status === 200 || response.status === 201) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(response);
        }
      },
      (error) => {
        if (error.response.status) {
          if (error.response?.data?.error) {
            const isTokenExpired = error.response.status === 402;
            if (isTokenExpired) {
              console.log("will be store logout");
              // store.dispatch(Actions.LOGOUT).then(() => {
              //   const lastRoute = router.currentRoute.value.fullPath;
              //   store.dispatch(Actions.LOGOUT).then(() => {
              //     router.replace({
              //       path: "/login",
              //       query: {
              //         redirect_to: lastRoute
              //       }
              //     });
              //   });
              // });
            }
          }
          switch (error.response.status) {
            case 400:
              // alert(error.response.data.message);
              break;
            case 401:
              // alert("session expired");
              break;
            case 403:
              break;
            case 404:
              // alert('page not exist');
              break;
            case 502:
            // setTimeout(() => {
            // }, 1000);
          }
          // return Promise.reject(error);
          throw error;
        }
      }
    );
  }

  public static setHeader(): void {
    ApiService.axiosInstance.defaults.headers.common[
      "haduuhhh"
    ] = `Bearer hehe`;
  }

  public static query(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    // ApiService.setHeader();
    return ApiService.axiosInstance.get(resource, params);
  }

  public static get(resource: string): Promise<AxiosResponse> {
    // ApiService.setHeader();
    return ApiService.axiosInstance.get(resource);
  }

  public static post(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    // ApiService.setHeader();
    return ApiService.axiosInstance.post(`${resource}`, params);
  }

  public static postFormData(
    resource: string,
    params: FormData
  ): Promise<AxiosResponse> {
    // ApiService.setHeader();
    return ApiService.axiosInstance.post(`${resource}`, params);
  }

  public static update(
    resource: string,
    slug: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    // ApiService.setHeader();
    return ApiService.axiosInstance.put(`${resource}/${slug}`, params);
  }

  public static put(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    // ApiService.setHeader();
    return ApiService.axiosInstance.put(`${resource}`, params);
  }

  public static delete(resource: string): Promise<AxiosResponse> {
    // ApiService.setHeader();
    return ApiService.axiosInstance.delete(resource);
  }
}

export default ApiService;
