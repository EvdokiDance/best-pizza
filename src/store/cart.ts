
import { getCartDetails } from '@/shared/lib/utils/get-cart-details';
import { Api } from '@/shared/services/api-client';
import { CreateCartItemValues } from '@/shared/services/cart-dto/cart-dto';
import { create } from 'zustand';



export type ICartItem = {
    id: number;
    quantity: number;
    price: number;
    name: string;
    imageUrl: string;
    disabled?: boolean;
    pizzaSize?: number | null;
    pizzaType?: number | null;
    ingredients: Array<{name: string, price: number}>;
}


 interface CartState {
    loading: boolean;
    error: boolean;
    items: ICartItem[];
    totalAmount: number;


    fetchCartItems: () => Promise<void>;
    addCartItem: (values: CreateCartItemValues) => Promise<void>;
    updateItemQuintity: (id: number, quantity: number) => Promise<void>;
    removeCartItem: (id: number) => Promise<void>;
    
}

export const useCartStore = create<CartState>((set, get) => ({
    loading: true,
    error: false,
    items: [],
    totalAmount: 0,

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
    addCartItem: async (values) => {
        try {
            set({ loading: true, error: false });
            console.log(values);
            
            const data = await Api.cart.addCartItem(values);
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({error: true});
        } finally {
            set({loading: false});
        } 
    },
    updateItemQuintity: async (id, quantity) => {
        try {
            set({ loading: true, error: false });
            const data = await Api.cart.updateCartItemQuantity(id, quantity);
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({error: true});
        } finally {
            set({loading: false});
        }
    },
    removeCartItem: async (id) => {
        try {
            const items = get().items.map((item) => { return item.id === id ? {...item, disabled: true} : item});
            set({ loading: true, error: false, items: items});
            const data = await Api.cart.removeCartItem(id);
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({error: true});
        } finally {
            set({loading: false, items: get().items.map((item) => { return {...item, disabled: false}})});
        }
    },
}));