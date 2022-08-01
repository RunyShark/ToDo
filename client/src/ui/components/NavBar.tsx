import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { DrawerComponent } from "./DrawerComponent";
import { useAuth } from "../../index";

export const NavBar = ({ drawerWidth }: { drawerWidth?: number }) => {
  const { logout } = useAuth();
  const closeSecion = () => {
    logout();
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <DrawerComponent />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            Menu
          </Typography>
          <IconButton color="error" onClick={closeSecion}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
