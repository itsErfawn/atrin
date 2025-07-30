"use client";

import React, { useState, useEffect } from "react";
import ItemListHeader from "./ItemListHeader/ItemListHeader";
import { IconsListHeader } from "./IconsListHeader/IconsListHeader";

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
    </header>
  );
}

export default Header;
