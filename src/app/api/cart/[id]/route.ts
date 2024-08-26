import { prisma } from "@/prisma/prisma-client";
import { updateCartTotalAmount } from "@/shared/lib";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    
  try {
    const id = Number(params.id);
  const { quantity } = await req.json()
  const cartToken = req.cookies.get('cartToken')?.value;


  if (!cartToken) {
    return NextResponse.json({error: 'Token not found!'});
  }


  const cartItem = await prisma.cartItem.findFirst({
    where: {
          id,
    },
  })


  if (!cartItem) {
    return NextResponse.json({error: 'Cart not found!'});
  }


   await prisma.cartItem.update({
    where: {
        id: id
    },
    data: {
        quantity: Number(quantity),
    }
  })

  
  const updatedUserCart = await updateCartTotalAmount(cartToken);
  
  return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log('[CART_PATCH_SERVER_ERROR]:', error);
    return NextResponse.json({message: 'Не удалось обновить корзину'}, {status: 500});
  }
}


export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

 try {
  const id = Number(params.id);

  const cartToken = req.cookies.get('cartToken')?.value;

  if (!cartToken) {
    return NextResponse.json({error: 'Token not found!'});
  }

  const cartItem = await prisma.cartItem.findFirst({
    where: {
          id,
    },
  })


  if (!cartItem) {
    return NextResponse.json({error: 'Cart not found!'});
  }

  await prisma.cartItem.delete({
    where: {
        id: id
    },
  })


  const updatedUserCart = await updateCartTotalAmount(cartToken);
  
  return NextResponse.json(updatedUserCart);

 } catch (error) {
    console.log('[CART_DELETE_SERVER_ERROR]:', error);
    return NextResponse.json({message: 'Не удалось удалить позицию в корзине'}, {status: 500});
 }




}