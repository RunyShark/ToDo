import { useField, ErrorMessage } from "formik";
import { TextField, Grid } from "@mui/material";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInputUser = ({ label, ...props }: Props) => {
  const [filed] = useField(props);

  return (
    <Grid container sx={{ mt: 3 }}>
      <Grid item xs={12}>
        <TextField
          {...filed}
          {...props}
          label={label}
          fullWidth
          sx={{ border: "none", mb: 1 }}
        />
        <ErrorMessage name={props.name} component="strong" />
      </Grid>
    </Grid>
  );
};
