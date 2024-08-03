import { Api } from "@/shared/services/api-client"
import { Ingredient } from "@prisma/client"
import React, { useEffect } from "react"
import { useSet } from "react-use"

export const useFilterIngredients = () => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([])
    const [loading, setLoading] = React.useState(true);

    const [ingredientsIds, { toggle }] = useSet(new Set<string>([]));



    useEffect(() => {
        Api.ingredients
        .getAll()
        .then(setIngredients)
        .catch((e) => console.log(e))
        .finally(() => setLoading(false))
    }, [])


    return {
        ingredients: ingredients,
        ingredientsIds: ingredientsIds,
        onAddIngredientId : (id: string) => toggle(id),
        loading: loading,
    }
}