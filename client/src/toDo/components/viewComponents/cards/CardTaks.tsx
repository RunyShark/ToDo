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
import { useTaks, ModalUpdate } from "../../../../index/index";
import { ResultRes } from "../../../../hooks/interfaces/interfaceTaks";

export const CardTaks = ({
  _id,
  active,
  dateEnd,
  dateStart,
  deleted,
  important,
  text,
  title,
  user,
}: ResultRes) => {
  return (
    <>
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
        <Grid container justifyContent="center">
          <Typography>
            {/* Fecha de creacion:{" "}
              <span style={{ fontFamily: "initial" }}>
                {dateStart.toString()}
              </span>{" "} */}
            Categoria:{" "}
            {important ? (
              <span style={{ color: "green" }}>importante</span>
            ) : (
              "no es importante"
            )}
            , fecha de finalizacion:{" "}
            <span style={{ fontFamily: "initial" }}>{dateEnd.toString()}</span>
          </Typography>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item xs={5}>
            <p style={{ fontSize: "17px" }}>{text}</p>
          </Grid>
        </Grid>

        <Grid container justifyContent="end">
          <Grid item justifyContent="end">
            <Grid container>
              <p>{active ? "Completada" : "Pendiente"}</p>
              <Checkbox
                color="info"
                defaultChecked={active}
                sx={{
                  mr: 50,
                  "& .MuiSvgIcon-root": { fontSize: 30 },
                }}
              />
              <ModalUpdate props="hola" />
              <Button color="error" sx={{ ml: 3 }}>
                <DeleteOutlined />
                Eliminar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
