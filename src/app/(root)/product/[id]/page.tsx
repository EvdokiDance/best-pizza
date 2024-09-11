
import { prisma } from "@/prisma/prisma-client";
import {
ChoosePizzaForm,
  Container,
  GroupVariants,
  PizzaImage,
  Title,
} from "@/shared/components";
import { notFound } from "next/navigation";

import { useCartStore } from "@/store";
import toast from "react-hot-toast";
import { ProductForm } from "@/shared/components/shared/product-form";


const Page = async ({ params: { id } }: { params: { id: string } }) => {


  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
    include: {
        ingredients: true,
        items: true
    }
  });

  
  if (!product) {
    return notFound();
  }
  
  return (
    <Container className="flex my-10">
      <ProductForm product={product}/>
    </Container>
  );
};

export default Page;
