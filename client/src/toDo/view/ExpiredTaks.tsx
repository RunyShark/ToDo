import { Grid, Typography } from "@mui/material";
import { AddBox, StarOutline } from "@mui/icons-material";
import { TaksViewAllTaks } from "../components/viewComponents/TaksViewAllTaks";
export const ExpiredTaks = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 5,
      }}
    >
      <Typography color="white" variant="h5" sx={{ mt: 4 }}>
        Tareas expiradas⏰
      </Typography>
      <TaksViewAllTaks />
    </Grid>
  );
};
