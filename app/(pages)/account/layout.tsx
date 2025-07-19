import Container from "@/components/module/container/Container";
import SidebarPanelUser from "@/components/module/PanelUser/Sidebar/SidebarPanelUser";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="bg-bg-panel rounded-xl p-4 m-3 flex justify-between gap-1.5">
        <SidebarPanelUser />
        <div className="w-full bg-white rounded-md p-4">{children}</div>
      </div>
    </Container>
  );
}

export default layout;
