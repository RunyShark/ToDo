import { useTaks, CardTaks } from "../../../index/index";
import { ResultRes } from "../../../hooks/interfaces/interfaceTaks";
import { Typography } from "@mui/material";

export const TaksExpired = () => {
  const { todoCopia } = useTaks();
  console.log("Soy yo", todoCopia);

  return (
    <>
      {todoCopia.length === 0 ? (
        <Typography variant="h5" sx={{ color: "white" }}>
          No tienes tareas expiradas
        </Typography>
      ) : (
        todoCopia.map((taksData: ResultRes) => <CardTaks {...taksData} />)
      )}
    </>
  );
};
