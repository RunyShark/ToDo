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
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { Grid } from "@mui/material";

export const SideBar = ({ drawerWidth }: { drawerWidth: number }) => {
  const onTaks = (note: any) => {
    console.log(note);
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
            Dario Moreno 📑
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
