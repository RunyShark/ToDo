import { useNavigate, useParams } from "react-router-dom";
import { Fragment, useState, KeyboardEvent, MouseEvent } from "react";
import { IconButton, Grid } from "@mui/material";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Link,
} from "@mui/material";
import { ExitToApp, MenuOutlined } from "@mui/icons-material";

export const DrawerComponent = () => {
  const valor = Object.values(useParams())[0];

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };

  const changePage = (text: string) => {
    if (text === valor) {
      navigate("/");
      return;
    }

    navigate(`/${text}`);
  };

  const closeSecion = () => {
    //cerrar secion
  };

  return (
    <Fragment>
      <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)}>
        <MenuOutlined />
      </IconButton>
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
              Menu
            </Typography>
            <Divider />

            <ListItem disablePadding sx={{ mb: 2 }}>
              <ListItemButton onClick={() => changePage("Perfil")}>
                <ListItemIcon>👥</ListItemIcon>
                <ListItemText primary={"Perfil"} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ mb: 2 }}>
              <ListItemButton onClick={closeSecion}>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText primary={"Cerrar sesión"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Fragment>
  );
};
