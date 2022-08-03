import { NavBar } from "../components/NavBar";
import { Box, Toolbar } from "@mui/material";
import { AuthLayoutProps } from "../interfaces/interfacesUi";

export const UserLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
