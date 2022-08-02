import { useField, ErrorMessage } from "formik";
import { TextField, Grid, Typography } from "@mui/material";

interface Props {
  name: string;
  [x: string]: any;
}

export const MyDate = ({ label, ...props }: Props) => {
  const [filed] = useField(props);

  return (
    <Grid container direction="row" justifyContent="end">
      <Grid item xs={12}>
        <Typography sx={{ mr: 2, mt: 1 }}>Fecha de finalizacion</Typography>
        <TextField
          {...filed}
          {...props}
          variant="standard"
          type="date"
          sx={{ border: "none", mb: 2 }}
        />
        <ErrorMessage name={props.name} component="strong" />
      </Grid>
    </Grid>
  );
};
