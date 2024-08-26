import { prisma } from "@/prisma/prisma-client";
import { CartDTO } from "@/shared/services/cart-dto/cart-dto";
import { calcCartItemTotalPrice } from ".";

export const updateCartTotalAmount = async (token: string) => {

    const userCart = await prisma.cart.findFirst({
        where: {
            token,
        },
        include: {
            items: {
                include: {
                    productItem: {
                        include: {
                            product: true,
                        },
                    },
                    ingredients: true,
                }
            }
        }
      });


 if (!userCart) {
    return;
 }

 
 const totalAmount = userCart.items.reduce((totalAmount, cartItem) => totalAmount + calcCartItemTotalPrice(cartItem), 0);


 console.log(totalAmount);
 
 
 return await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
       totalAmount
    },
    include: {
        items: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
  })
};
