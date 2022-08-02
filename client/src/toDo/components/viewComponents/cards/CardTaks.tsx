import { Grid, Typography, Button } from "@mui/material";

import {
  FavoriteBorder,
  Favorite,
  Upgrade,
  LibraryBooks,
  Delete,
  Beenhere,
} from "@mui/icons-material";

import { ResultRes } from "../../../../hooks/interfaces/interfaceTaks";

import { useTaks } from "../../../../hooks/useTaks";
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
  const { startUpdate } = useTaks();

  const note = {
    _id,
    active,
    dateEnd,
    dateStart,
    deleted,
    important,
    text,
    title,
    user,
  };

  const onActiveTask = () => {
    startUpdate(note);
  };

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
          {important ? (
            <Favorite
              color="error"
              sx={{
                fontSize: 30,
                mr: 1,
                mt: 1,
              }}
            />
          ) : (
            <FavoriteBorder
              sx={{
                fontSize: 30,
                mr: 1,
                mt: 1,
              }}
            />
          )}
        </Grid>

        <Typography variant="h5" sx={{ mt: 1, mb: 1, fontWeight: "bold" }}>
          {title}
        </Typography>

        <Grid container justifyContent="center">
          <Typography sx={{ fontFamily: "inherit" }}>
            {/* Fecha de creacion:{" "}
              <span style={{ fontFamily: "initial" }}>
                {dateStart.toString()}
              </span>{" "} */}
            Categoria:{" "}
            <strong style={{ color: important ? "green" : "grey" }}>
              {important ? "Importante" : "No importante"}
            </strong>
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
              {active ? (
                <LibraryBooks
                  color="warning"
                  sx={{
                    fontSize: 20,
                    mt: 2,
                  }}
                />
              ) : (
                <Beenhere
                  color="info"
                  sx={{
                    fontSize: 20,
                    mt: 2,
                  }}
                />
              )}

              <Typography
                sx={{
                  mr: 25,
                  ml: 1,
                  mb: 1,
                  mt: 2.5,
                  fontFamily: "unset",
                  color: active ? "green" : "brack",
                }}
              >
                {active ? "Pendiente" : "Completada"}
              </Typography>
              {deleted ? (
                <Delete
                  color="secondary"
                  sx={{
                    fontSize: 20,
                    mt: 2,
                    mr: 1,
                  }}
                />
              ) : (
                <Beenhere
                  color="info"
                  sx={{
                    fontSize: 20,
                    mt: 2,
                  }}
                />
              )}

              <Typography
                sx={{
                  mr: 22,
                  ml: 1,
                  mb: 1,
                  mt: 2.5,
                  fontFamily: "unset",
                  color: deleted ? "red" : "brack",
                }}
              >
                {deleted ? "Eliminada" : "Activa"}
              </Typography>
              <Button
                onClick={onActiveTask}
                color="primary"
                sx={{
                  mr: 1,
                }}
              >
                <Upgrade />
                <Typography>Actualizar tarea</Typography>{" "}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
