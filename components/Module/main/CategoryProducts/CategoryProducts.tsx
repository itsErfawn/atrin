import React from "react";
import Container from "../../container/Container";
import SectionDivider from "../../ui/SectionDivider";
import { Cproducts } from "@/context/DataCproducts";

function CategoryProducts() {
  return (
    <Container>
      <SectionDivider title="دسته بندی محصولات" />
      <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center mt-10 mx-auto gap-5 w-full sm:w-250">
        {Cproducts.map((item) => (
          <div
            key={item.srcimage}
            className="relative w-full h-28 sm:w-48 sm:h-32 rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={item.srcimage}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <p className="text-white text-sm sm:text-lg ">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default CategoryProducts;
