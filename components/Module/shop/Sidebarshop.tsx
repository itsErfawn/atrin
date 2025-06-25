import React from "react";
import Container from "../container/Container";
import HeaderSidebarshop from "./pageshop/Sidebarshop/HeaderSidebarshop";
import DescripationSidebarshop from "./pageshop/DescripationSidebarshop/DescripationSidebarshop";
import HighlightSidebarshop from "./pageshop/HighlightSidebarshop/HighlightSidebarshop";
import FilterSidebarshop from "./pageshop/FilterSidebarshop/FilterSidebarshop";

function Sidebarshop() {
  return (
    <Container>
      <section className="space-y-4 shadow-sm p-2 rounded-2xl">
        <HeaderSidebarshop />
        <DescripationSidebarshop />
        <HighlightSidebarshop />
        <FilterSidebarshop />
      </section>
    </Container>
  );
}

export default Sidebarshop;
