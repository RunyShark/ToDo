import { useFormik } from "formik";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useTaks } from "../../../index";
import { DeleteOutlined, SaveOutlined } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";

export const UpdateNote = () => {
  const { update } = useTaks();

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      _id: update._id,
      title: update.title,
      text: update.text,
      active: update.active,
      deleted: update.deleted,
      important: update.important,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        maxWidth: "calc(100vh - 10px)",
        border: 1,
        borderStyle: "solid",
        backgroundColor: "white",
        borderColor: "grey",
        borderRadius: 3,
        mt: 2,
        mb: 2,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid item>
          <Typography fontSize={20} fontWeight="light">
            Fecha de creacion:{" "}
            <span style={{ fontWeight: "bold" }}>{update.dateStart}</span>
          </Typography>
          <Typography fontSize={20} fontWeight="light">
            Fecha de expiracion:
            <span style={{ fontWeight: "bold" }}> {update.dateEnd}</span>
          </Typography>
        </Grid>

        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            value={values.title}
            name="title"
            onChange={handleChange}
            placeholder="Ingrese un titulo"
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            value={values.text}
            name="text"
            onChange={handleChange}
            placeholder="Que sucedío en el dia de hoy"
            minRows={5}
          />
          <Grid>
            <FormControlLabel
              label={values.active ? "Terminada" : "Pendiente"}
              control={
                <Checkbox
                  color="info"
                  name="active"
                  checked={values.active}
                  value={values.active}
                  onChange={handleChange}
                  sx={{ ml: 5, "& .MuiSvgIcon-root": { fontSize: 30 } }}
                />
              }
            />

            <FormControlLabel
              label={values.important ? "Importante" : "No importante"}
              control={
                <Checkbox
                  name="important"
                  checked={values.important}
                  value={values.important}
                  onChange={handleChange}
                  color="error"
                  checkedIcon={<Favorite />}
                  sx={{ ml: 5, "& .MuiSvgIcon-root": { fontSize: 30 } }}
                />
              }
            />
            <FormControlLabel
              label={values.deleted ? "Eliminadad" : "Eliminar tarea"}
              control={
                <Checkbox
                  name="deleted"
                  checked={values.deleted}
                  value={values.deleted}
                  onChange={handleChange}
                  color="error"
                  checkedIcon={<DeleteOutlined />}
                  sx={{ ml: 5, "& .MuiSvgIcon-root": { fontSize: 30 } }}
                />
              }
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="end">
          <Grid item>
            <Button color="primary" sx={{ padding: 2 }} type="submit">
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
              Gurdar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
