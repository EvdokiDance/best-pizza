import { useRouter } from "next/navigation";
import qs from 'qs';
import { useEffect } from "react";
import { Filters } from "./use-filters";


export const useQueryFilters = ({selectedIngredients, sizes, pizzaTypes, prices} : Filters) => {
    

    const router = useRouter();


    useEffect(() => {

        const filters = {
            ...prices,
            pizzaTypes: Array.from(pizzaTypes),
            sizes: Array.from(sizes),
            ingredients: Array.from(selectedIngredients)
        }

        router.push(`?${qs.stringify(filters, { arrayFormat: 'comma' })}`, {scroll: false})

    }, [selectedIngredients, sizes, pizzaTypes, prices])
    
}