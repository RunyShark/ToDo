import { Box, Toolbar } from "@mui/material";
import { SideBar, NavBar } from "../components";
import { AuthLayoutProps } from "../interfaces/interfacesUi";
const drawerWidth = 250;

export const TodoLayout = ({ children }: any) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
