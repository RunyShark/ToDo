import { ResultRes } from "../../../hooks/interfaces/interfaceTaks";
import { Typography } from "@mui/material";
import { useTaks } from "../../../index/index";
import { CardTaks } from "../viewComponents/cards/CardTaks";
export const TaksViewAllTaks = () => {
  const { todos } = useTaks();

  return (
    <>
      {todos.length === 0 ? (
        <Typography variant="h5" sx={{ color: "white" }}>
          Actualmente no tienes ninguna tarea creada
        </Typography>
      ) : (
        todos.map((taksData: ResultRes) => (
          <CardTaks key={taksData._id} {...taksData} />
        ))
      )}
    </>
  );
};
