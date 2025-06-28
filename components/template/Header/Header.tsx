import React from "react";
import ItemListHeader from "./ItemListHeader/ItemListHeader";
import { IconsListHeader } from "./IconsListHeader/IconsListHeader";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

function Header() {
  return (
    <header className="shadow-sm">
      <div className="hidden md:block">
        <IconsListHeader />
        <ItemListHeader />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </header>
  );
}

export default Header;
