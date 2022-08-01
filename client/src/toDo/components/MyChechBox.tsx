import { useField, ErrorMessage } from "formik";
import { TextField, Grid, Checkbox } from "@mui/material";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyChechBox = ({ label, ...props }: Props) => {
  const [filed] = useField({ ...props, type: "checkbox" });

  return (
    <Grid container direction="row" justifyContent="end">
      <label>
        <Checkbox {...filed} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </Grid>
  );
};
