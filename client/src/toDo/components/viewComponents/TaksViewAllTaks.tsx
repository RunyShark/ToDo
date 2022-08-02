import { useTaks, CardTaks } from "../../../index";
import { ResultRes } from "../../../hooks/interfaces/interfaceTaks";
import { Typography } from "@mui/material";

export const TaksViewAllTaks = () => {
  const { todos } = useTaks();

  return (
    <>
      {todos.length === 0 ? (
        <Typography variant="h5" sx={{ color: "white" }}>
          Actualmente no tienes ninguna tarea creada
        </Typography>
      ) : (
        todos.map((taksData: ResultRes) => <CardTaks {...taksData} />)
      )}
    </>
  );
};
