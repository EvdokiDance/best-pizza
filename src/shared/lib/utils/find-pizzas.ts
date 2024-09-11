import { pizzaTypes } from './../../constants/group-variants';
import { prisma } from "@/prisma/prisma-client";

export interface FilterSearchParams {
    sizes?: string;
    ingredients?: string;
    pizzaTypes?: string;
    pizzaSizes?: string;
    priceFrom?: string;
    priceTo?: string;
  }


const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;

export const findPizzas = async (searchParams : FilterSearchParams) => {


    const ingredientsIdArr = searchParams.ingredients?.split(',').map(Number);
    const sizesIdArr = searchParams.sizes?.split(',').map(Number);
    const pizzaTypes = searchParams.pizzaTypes?.split(',').map(Number);

    const minPrice = Number(searchParams.priceFrom) || DEFAULT_MIN_PRICE;
    const maxPrice = Number(searchParams.priceTo) || DEFAULT_MAX_PRICE;

    const categories = await prisma.category.findMany({
        include: {
          products: {
            orderBy: {
              id: 'desc',
            },
            where: {
              ingredients: ingredientsIdArr ? 
                {
                  some: {
                    id: {
                      in: ingredientsIdArr
                    }
                  }
                }:  undefined,
                  items: {
                    some: {
                      size: {
                        in: sizesIdArr
                      },
                      pizzaType: {
                        in: pizzaTypes
                      },
                      price: {
                        gte: minPrice,
                        lte: maxPrice,
                      }
                    },
                  
                  },               
              },
              include: {
                ingredients: true,
                items: {
                  where: {
                    price: {
                      gte: minPrice,
                      lte: maxPrice,
                    }
                  },
                  orderBy: {
                    price: 'asc',
                  }
                },
              }
            },
          }
        });
      return categories;
}



