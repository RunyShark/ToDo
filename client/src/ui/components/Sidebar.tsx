import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
  ListItemButton,
} from "@mui/material";

import { useAuth, useTaks } from "../../index";

export const SideBar = ({ drawerWidth }: { drawerWidth: number }) => {
  const {
    startGetTask,
    importanTakns,
    pendigTaks,
    deleteTaks,
    expiredTaks,
    finishTaks,
  } = useTaks();
  const { user } = useAuth();

  const onTaks = (action: string) => {
    switch (action) {
      case "Todas mis tareas":
        startGetTask();
        break;
      case "Tareas importantes":
        importanTakns();
        break;
      case "Tareas pendientes":
        pendigTaks();
        break;
      case "Tareas finalizadas":
        finishTaks();
        break;
      case "Tareas vencidas":
        expiredTaks();
        break;
      case "Papelera":
        deleteTaks();
        break;
      default:
        console.log("nada por aqui");
        break;
    }
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { sx: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {user.name || "No name"} ๐
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {[
            "Todas mis tareas",
            "Tareas importantes",
            "Tareas pendientes",
            "Tareas finalizadas",
            "Tareas vencidas",
            "Papelera",
          ].map((note) => (
            <ListItem key={note} disablePadding sx={{ mb: 5 }}>
              <ListItemButton onClick={() => onTaks(note)}>
                <ListItemIcon>
                  {note === "Todas mis tareas"
                    ? "๐งพ"
                    : note === "Tareas importantes"
                    ? "๐"
                    : note === "Tareas pendientes"
                    ? "๐"
                    : note === "Tareas finalizadas"
                    ? "โ"
                    : note === "Tareas vencidas"
                    ? "๐"
                    : "โ"}
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={note} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
