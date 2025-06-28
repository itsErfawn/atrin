import React from "react";
import ListSideBarPanelUser from "./ListSideBarPanelUser";
import DetialUser from "./DetialUser";

function SidebarPanelUser() {
  return (
    <div className="flex flex-col">
      <DetialUser />
      <ListSideBarPanelUser />
    </div>
  );
}

export default SidebarPanelUser;
