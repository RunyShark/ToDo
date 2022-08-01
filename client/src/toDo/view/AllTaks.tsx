import {
  Grid,
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { DeleteOutlined, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";

export const AllTaks = () => {
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
      <Card sx={{ maxWidth: "calc(100vh - 110px)", borderRadius: 5, mt: 4 }}>
        <Grid container justifyContent="end">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </Grid>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Titulo de tarea
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="primary">Terminar</Button>
          <Grid container justifyContent="end">
            <Button color="error">
              <DeleteOutlined />
              Eliminar
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};
