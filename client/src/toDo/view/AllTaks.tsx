import { Grid } from "@mui/material";
import { CardTaks } from "../../index";

export const AllTaks = () => {
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
      <CardTaks />
    </Grid>
  );
};
