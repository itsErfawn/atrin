import Container from "@/components/Module/container/Container";
import SidebarPanelUser from "@/components/Module/PanelUser/Sidebar/SidebarPanelUser";
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
