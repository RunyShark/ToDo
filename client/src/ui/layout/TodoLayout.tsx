import { Box, Toolbar } from "@mui/material";
import { SideBar, NavBar } from "../components";
const drawerWidth = 250;

export const TodoLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
