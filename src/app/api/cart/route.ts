import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({totalAmount: 0, items: []});
  }

  const cart = await prisma.cart.findFirst({
    where: {
      OR: [
        {
          token
        }
      ]
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
}
