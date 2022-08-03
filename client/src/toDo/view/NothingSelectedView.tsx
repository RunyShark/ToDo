import { Grid, Typography } from "@mui/material";
import { AddBox } from "@mui/icons-material";

export const NothingSelectedView = () => {
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
      <Grid item xs={12}>
        <AddBox sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Selecciona una accion o crea una nueva tarea
        </Typography>
      </Grid>
    </Grid>
  );
};
