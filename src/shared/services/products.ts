import { axiosInstance } from "./instance";
import { ApiRoutes } from './constants';


export const search = async (query: string) => {
    const { data } = await axiosInstance.get(ApiRoutes.SEARCH_PRODUCTS, { params: { query } });
    return data;
}