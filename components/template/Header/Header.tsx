"use client";

import React, { useState, useEffect } from "react";
import ItemListHeader from "./ItemListHeader/ItemListHeader";
import { IconsListHeader } from "./IconsListHeader/IconsListHeader";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

function Header() {
  const [cookie, setCookie] = useState(false);

  useEffect(() => {
    const cookieValue = localStorage.getItem("cookie") === "true";
    setCookie(cookieValue);
  }, []);

  return (
    <header className="shadow-sm">
      <div className="hidden md:block">
        <IconsListHeader cookie={cookie} />
        <ItemListHeader />
      </div>
      <div className="block md:hidden">
        <MobileNavbar cookie={cookie} />
      </div>
    </header>
  );
}

export default Header;
