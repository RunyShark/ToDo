import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import {
  AddBox,
  Favorite,
  FavoriteBorder,
  SaveOutlined,
} from "@mui/icons-material";
export const TodoView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        mt: 10,
        padding: 10,
        backgroundColor: "#F9FAFB",
        borderRadius: 5,
      }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="ligth">
          28 de agosto, 2023
        </Typography>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="standard"
          fullWidth
          placeholder="ingresa el titulo"
          label="Titulo de la tarea"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="standard"
          fullWidth
          multiline
          placeholder="Descripcion"
          label="Tarea"
          minRows={4}
          sx={{ border: "none", mb: 1 }}
        />
        <Grid item xs={3}>
          <TextField
            type="date"
            variant="standard"
            sx={{ border: "none", mt: 2 }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            type="date"
            variant="standard"
            sx={{ border: "none", mt: 2 }}
          />
        </Grid>
        <Grid item xs={3}>
          <Checkbox
            sx={{
              border: "none",
              mt: 2,
            }}
          />
          <label style={{ margin: "10px" }}>Importante</label>
        </Grid>
        <Grid item>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
