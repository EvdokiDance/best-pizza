import { prisma } from "@/prisma/prisma-client";
import {
  Container,
  GroupVariants,
  PizzaImage,
  Title,
} from "@/shared/components";
import { notFound } from "next/navigation";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
    include: {
        ingredients: true
    }
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex my-10">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product?.imageUrl || ""} size={40} />
        <div className="w-[495px] bg-[#F4F1EE] p-7">
          <Title text="Пепперони фреш" />
          <p className="text-gray-400">25 см, традиционное тесто 25, 380 г</p>
          <GroupVariants
            variants={[
              { name: "Маленькая", value: "20" },
              { name: "Средняя", value: "30" },
              { name: "Большая", value: "40" },
            ]}
            selectedValue={"20"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Page;
