import React from "react";
import Container from "../container/Container";
import HeaderSidebarshop from "./pageshop/Sidebarshop/HeaderSidebarshop";
import DescripationSidebarshop from "./pageshop/DescripationSidebarshop/DescripationSidebarshop";
import HighlightSidebarshop from "./pageshop/HighlightSidebarshop/HighlightSidebarshop";

function Sidebarshop() {
  return (
    <Container>
      <HeaderSidebarshop />
      <DescripationSidebarshop />
      <HighlightSidebarshop />
      <div className="bg-amber-700">Sidebarshop</div>
    </Container>
  );
}

export default Sidebarshop;
