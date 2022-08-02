import { useField, ErrorMessage } from "formik";
import { Grid, Checkbox } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

interface Props {
  label?: string;
  name: string;
  [x: string]: any;
}

export const MyChechBox = ({ important, ...props }: Props) => {
  const [filed] = useField({ ...props, type: "checkbox" });

  return (
    <Grid container justifyContent="end">
      <Checkbox
        {...filed}
        {...props}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 30 },
        }}
        color="error"
      />

      <ErrorMessage name={props.name} component="span" />
    </Grid>
  );
};
