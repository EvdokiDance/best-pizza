import { axiosInstance } from "./instance";
import { ApiRoutes } from './constants';
import { CartDTO, CreateCartItemValues } from "./cart-dto/cart-dto";
import { PizzaSize, PizzaType } from "../constants/group-variants";
import { ProductItem } from "@prisma/client";



export const fetchCart = async () : Promise<CartDTO> => {
   return (await axiosInstance.get<CartDTO>(ApiRoutes.CART)).data;
}

export const updateCartItemQuantity = async (id: number, quantity: number) : Promise<CartDTO> => {
   return (await axiosInstance.patch<CartDTO>(`${ApiRoutes.CART}/${id}`, { quantity })).data;
}

export const removeCartItem = async (id: number) : Promise<CartDTO> => {
   return (await axiosInstance.delete<CartDTO>(`${ApiRoutes.CART}/${id}`)).data;
}

export const addCartItem = async (values: CreateCartItemValues) : Promise<CartDTO> => {
   return (await axiosInstance.post<CartDTO>(ApiRoutes.CART, values)).data;
}