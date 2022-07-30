import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";

export const SideBar = ({ drawerWidth }: { drawerWidth: number }) => {
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
            {/* {displayName} */}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {/* {notes.map((notes) => (
            <CardNotes key={notes.id} {...notes} />
          ))} */}
        </List>
      </Drawer>
    </Box>
  );
};
