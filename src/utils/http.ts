import { R } from '@storybook/react/dist/types-0a347bb9';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:8080',
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export const http = {
  get: function <Response = unknown>(url: string) {
    return axiosInstance.get<Response>(url);
  },
  post: function <Request, Response = unknown>(url: string, data: Request) {
    return axiosInstance.post<Response>(url, data);
  },
  put: function <Request, Response = unknown>(url: string, data: Request) {
    return axiosInstance.put<Response>(url, data);
  },
  delete: function <Response = unknown>(url: string) {
    return axiosInstance.delete<Response>(url);
  },
};

const useGet = (url: string) => {
  return useQuery({
    queryKey: ['get', url],
    queryFn: async () => await http.get(url).then(res => res.data),
  });
};

// const query = useQuery({
//   queryKey: 'todos',
//   queryFn: () => axiosInstance.get('/todos'),
//   config: {
//     retry: 3,
//     retryDelay: 1000,
//     staleTime: 1000 * 60 * 5,
//   },
// });
