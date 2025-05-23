 import Axios, { AxiosRequestConfig } from 'axios';
 
 export const AXIOS_INSTANCE = Axios.create({ baseURL: 'https://fullstack.exercise.applifting.cz' ,headers:{"X-API-KEY": "5bca7429-fc0e-4494-a363-b36ccbb9b798"}}); 
 
 export const customAxiosInstance = <T>(
   config: AxiosRequestConfig,
   options?: AxiosRequestConfig,
 ): Promise<T> => {
   const source = Axios.CancelToken.source();
   const promise = AXIOS_INSTANCE({
     ...config,
     ...options,
     cancelToken: source.token,
   }).then(({ data }) => data);
 
   // @ts-expect-error unknown type
   promise.cancel = () => {
     source.cancel('Query was cancelled');
   };
 
   return promise;
 };
 
