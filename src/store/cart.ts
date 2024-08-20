
import { getCartDetails } from '@/shared/lib/utils/get-cart-details';
import { Api } from '@/shared/services/api-client';
import { create } from 'zustand';



export type ICartItem = {
    id: number;
    quantity: number;
    price: number;
    name: string;
    imageUrl: string;
    pizzaSize?: number | null;
    pizzaType?: number | null;
    ingredients: Array<{name: string, price: number}>;
}


interface CartState {
    loading: boolean;
    error: boolean;
    items: ICartItem[];
    totalAmout: number;


    fetchCartItems: () => Promise<void>;
    addCartItem: (value: ICartItem) => Promise<void>;
    updateItemQuintity: (id: number, quantity: number) => Promise<void>;
    removeCartItem: (id: number) => Promise<void>;
    
}

export const useCartStore = create<CartState>((set, get) => ({
    loading: true,
    error: false,
    items: [],
    totalAmout: 0,

    fetchCartItems: async () => {
        try {
            set({ loading: true, error: false });
            const data = await Api.cart.fetchCart();
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({error: true});
        } finally {
            set({loading: false});
        }
    },
    addCartItem: async () => {},
    updateItemQuintity: async () => {},
    removeCartItem: async () => {},
}));