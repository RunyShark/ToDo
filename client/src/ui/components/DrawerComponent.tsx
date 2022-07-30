import { Fragment, useState, KeyboardEvent, MouseEvent } from "react";
import { IconButton } from "@mui/material";
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
} from "@mui/material";
import {
  AccountCircle,
  ExitToApp,
  NoteAdd,
  MenuOutlined,
} from "@mui/icons-material";

export const DrawerComponent = () => {
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

  return (
    <Fragment>
      <IconButton color="inherit" edge="start">
        <MenuOutlined onClick={toggleDrawer(true)} />
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
            {["Perfil", "Crear", "Cerrar sesión"].map((text) => (
              <>
                <ListItem key={text} disablePadding sx={{ mb: 2 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      {text === "Crear" ? (
                        <NoteAdd />
                      ) : text === "Perfil" ? (
                        <AccountCircle />
                      ) : (
                        <ExitToApp />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              </>
            ))}
          </List>
        </Box>
      </Drawer>
    </Fragment>
  );
};
