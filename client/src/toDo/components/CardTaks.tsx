import {
  Card,
  Grid,
  Checkbox,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import { FavoriteBorder, Favorite, DeleteOutlined } from "@mui/icons-material";
import { useTaks } from "../../index";
import { ResultRes } from "../../hooks/interfaces/interfaceTaks";

export const CardTaks = () => {
  const { todos } = useTaks();

  return (
    <>
      {todos?.map(
        ({
          _id,
          active,
          dateEnd,
          dateStart,
          deleted,
          important,
          text,
          title,
          user,
        }: ResultRes) => (
          <Grid
            key={_id}
            className="animate__animated animate__fadeIn"
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              minHeight: "calc(100vh - 800px)",
              maxWidth: "calc(100vh - 110px)",
              border: 1,
              borderStyle: "solid",
              backgroundColor: "white",
              borderColor: "grey",
              borderRadius: 3,
              mt: 2,
              mb: 2,
            }}
          >
            <Grid container justifyContent="end">
              <Checkbox
                color="error"
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                defaultChecked={important}
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 30 },
                }}
              />
            </Grid>
            <Typography variant="h5" sx={{ mt: 1 }}>
              {title}
            </Typography>
            <p>
              Categoria:{" "}
              {important ? (
                <span style={{ color: "green" }}>importante</span>
              ) : (
                "no es importante"
              )}
            </p>

            <Grid container justifyContent="center">
              <Grid item xs={8}>
                <p style={{ fontSize: "15px", color: "black" }}>
                  Fecha de creacion:{" "}
                  <span style={{ fontFamily: "initial" }}>{dateStart}</span>
                  Fecha de finalizacion:
                  <span style={{ fontFamily: "initial" }}>{dateEnd}</span>
                </p>
              </Grid>
              <Grid item xs={8}>
                <p style={{ fontSize: "17px" }}>{text}</p>
              </Grid>
            </Grid>

            {/* <Grid container justifyContent="end" sx={{ mb: 2 }}>
              <Grid item justifyContent="end">
               
              </Grid>
            </Grid> */}
            <Grid container justifyContent="end">
              <Grid item justifyContent="end">
                <p>{active ? "Completada" : "Pendiente"}</p>
                <Checkbox
                  color="info"
                  defaultChecked={active}
                  sx={{ mr: 60, mb: 1, "& .MuiSvgIcon-root": { fontSize: 30 } }}
                />

                <Button color="error" sx={{ ml: 3 }}>
                  <DeleteOutlined />
                  Eliminar
                </Button>

                <Button color="secondary" sx={{ ml: 3 }}>
                  actualizar
                </Button>
              </Grid>
            </Grid>

            {/* <Grid container justifyContent="end">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              </Grid>
  
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {text}
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
              </CardActions> */}
          </Grid>
        )
      )}
    </>
  );
};
