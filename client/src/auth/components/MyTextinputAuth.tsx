import { useField, ErrorMessage } from "formik";
import { TextField, Grid } from "@mui/material";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

export const MyTextinputAuth = ({ label, ...props }: Props) => {
  const [filed] = useField(props);

  return (
    <Grid container>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField {...filed} {...props} label={label} />
        <ErrorMessage name={props.name} component="strong" />
      </Grid>
    </Grid>
  );
};
