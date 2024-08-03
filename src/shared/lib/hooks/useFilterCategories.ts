import { categories } from './../../../prisma/constants';
import React from 'react';
import { Category } from '@prisma/client';
import { Categories } from './../../components/shared/categories';
import { Api } from "@/shared/services/api-client"

export const useFilterCategories = () => {
    const [categories, setCategories] = React.useState<Category[]>([])

    React.useEffect(() => {
        Api.categories
        .getAll()
        .then(setCategories)
        .catch((e) => console.log(e));
    }, [])    



    return {
       categories: categories
    }


}