import { axiosInstance } from "./instance";
import { ApiRoutes } from './constants';
import { CartDTO } from "./cart-dto/cart-dto";



export const fetchCart = async () : Promise<CartDTO> => {
    const { data } = await axiosInstance.get(ApiRoutes.CART);
    return data;
}