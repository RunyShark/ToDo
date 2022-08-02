import { Grid, Typography } from "@mui/material";

interface Props {
  children: JSX.Element;
  title: string;
}

export const ViewDad = ({ children, title }: Props) => {
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
      <Grid container justifyContent="center" sx={{ mt: 4, mb: 4 }}>
        <Typography color="white" variant="h5">
          {title}
        </Typography>
      </Grid>

      {children}
    </Grid>
  );
};
