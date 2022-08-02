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
      <Typography color="white" variant="h5" sx={{ mt: 4 }}>
        {title}
      </Typography>
      {children}
    </Grid>
  );
};
