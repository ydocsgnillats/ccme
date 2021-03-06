import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { useRealmApp } from "./RealmApp";
import ProjectScreen from "./components/ProjectScreen";
import Sidebar from "./components/Sidebar";

export default function TaskApp() {
  const app = useRealmApp();
  const [isEditingPermissions, setIsEditingPermissions] = React.useState(false);
  return (
    <Container>
      <Sidebar
        css={gridAreaSidebar}
        setIsEditingPermissions={setIsEditingPermissions}
      ></Sidebar>
      <ProjectScreen
        css={gridAreaMain}
        isEditingPermissions={isEditingPermissions}
        setIsEditingPermissions={setIsEditingPermissions}
      />
    </Container>
  );
}

const sidebarWidth = "420px";
const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100vh;
  display: grid;
  grid-template-columns: ${sidebarWidth} calc(100vw - ${sidebarWidth});
  grid-template-rows: 1fr;
  grid-template-areas: "sidebar main";
`;

const gridAreaSidebar = css`
  grid-area: sidebar;
`;
const gridAreaMain = css`
  grid-area: sidebar;
`;
