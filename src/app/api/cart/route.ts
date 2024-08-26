import { CartItemValues } from "./../../../shared/services/cart-dto/cart-dto";
import { prisma } from "@/prisma/prisma-client";

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { findOrCreateCart, updateCartTotalAmount } from "@/shared/lib";

export async function GET(req: NextRequest) {
  try {
    const cartToken = req.cookies.get("cartToken")?.value;

    if (!cartToken) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const cart = await prisma.cart.findFirst({
      where: {
        OR: [
          {
            token: cartToken,
          },
        ],
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
    });

    return NextResponse.json(cart);
  } catch (error) {
    console.log("[CART_GET_SERVER_ERROR]:", error);
    return NextResponse.json(
      { message: "Не удалось получить корзину" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    let cartToken = req.cookies.get("cartToken")?.value;

    const data = (await req.json()) as CartItemValues;

    if (!cartToken) {
      cartToken = crypto.randomUUID();
    }
    
    const cart = await findOrCreateCart(cartToken);
    
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productItemId: Number(data.productItemId),
        ingredients: {
          every: {
            id: {
              in: data.ingredients,
            },
          },
        },
      },
    });
    
    if (cartItem) {
      await prisma.cartItem.update({
        where: {
          id: cartItem.id,
        },
        data: {
          quantity: cartItem.quantity + 1,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productItemId: Number(data.productItemId),
          quantity: 1,
          ingredients: {
            connect: data.ingredients?.map((id) => ({ id })),
          },
        },
      });
    }
    
    const updatedCart = await updateCartTotalAmount(cartToken);
    
    const resp = NextResponse.json(updatedCart);
    resp.cookies.set("cartToken", cartToken);
    return resp;
  } catch (error) {
    console.log("[CART_POST_SERVER_ERROR]:", error);
    return NextResponse.json(
      { message: "Не удалось добавить в корзину" },
      { status: 500 }
    );
  }
}
