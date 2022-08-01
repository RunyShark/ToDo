import { MouseEvent } from "react";
import ListItemButton from "@mui/material/ListItemButton";
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
} from "@mui/material";
import { useAuth, useTaks } from "../../index";

export const SideBar = ({ drawerWidth }: { drawerWidth: number }) => {
  const { startGetTask } = useTaks();
  const { user } = useAuth();

  const onTaks = (action: string) => {
    console.log(action);
    switch (action) {
      case "Todas mis tareas":
        startGetTask();
        break;
      case "Tareas importantes":
        console.log("Hola2");
        break;
      case "Tareas pendientes":
        console.log("Hola3");
        break;
      case "Tareas finalizadas":
        console.log("Hola4");
        break;
      case "Tareas vencidas":
        console.log("Hola5");
        break;
      case "Tareas eliminadas":
        console.log("Hola6");
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
            {user.name || "No name"} 📑
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
            "Tareas eliminadas",
          ].map((note) => (
            <ListItem key={note} disablePadding sx={{ mb: 5 }}>
              <ListItemButton onClick={() => onTaks(note)}>
                <ListItemIcon>
                  {note === "Todas mis tareas"
                    ? "🧾"
                    : note === "Tareas importantes"
                    ? "🌟"
                    : note === "Tareas pendientes"
                    ? "📚"
                    : note === "Tareas finalizadas"
                    ? "✔"
                    : note === "Tareas vencidas"
                    ? "📅"
                    : "❌"}
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
