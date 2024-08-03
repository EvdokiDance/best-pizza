import { axiosInstance } from "./instance";
import { ApiRoutes } from './constants';
import { Category } from "@prisma/client";

export const getAll = async () : Promise<Category[]> => {
    const { data } = await axiosInstance.get(ApiRoutes.CATEGORIES);
    return data;
}