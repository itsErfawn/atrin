import React from "react";
import ItemListHeader from "./ItemListHeader/ItemListHeader";
import { IconsListHeader } from "./IconsListHeader/IconsListHeader";

function Header() {
  return (
    <header>
      <IconsListHeader />
      <ItemListHeader />
    </header>
  );
}

export default Header;
