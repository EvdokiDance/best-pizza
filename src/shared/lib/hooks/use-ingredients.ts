import { Api } from "@/shared/services/api-client"
import { Ingredient } from "@prisma/client"
import React, { useEffect } from "react"

export const useIngredients = () => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([])
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        Api.ingredients
        .getAll()
        .then(setIngredients)
        .catch((e) => console.log(e))
        .finally(() => setLoading(false))
    }, [])


    return {
        ingredients: ingredients,   
        loading: loading,
    }
}