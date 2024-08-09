import { Ingredient, Product, ProductItem } from "@prisma/client";

export type iProduct = Product & { items: ProductItem[], ingredients: Ingredient[] };