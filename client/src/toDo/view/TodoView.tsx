import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";

//*ojito
export const TodoView = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="ligth">
          28 de agosto, 2023
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <Grid item xs={20}>
          <TextField
            type="text"
            variant="standard"
            fullWidth
            placeholder="ingresa el titulo"
            label="Titulo de la tarea"
            sx={{ border: "none", mb: 1 }}
          />
        </Grid>

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
      </Grid>
    </Grid>
  );
};
