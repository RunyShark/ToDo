import { ResultRes } from "../../../hooks/interfaces/interfaceTaks";
import { Typography } from "@mui/material";
import { useTaks } from "../../../index/index";
import { CardTaks } from "../viewComponents/cards/CardTaks";
export const TaksImportants = () => {
  const { todoCopia } = useTaks();

  return (
    <>
      {todoCopia.length === 0 ? (
        <Typography variant="h5" sx={{ color: "white" }}>
          No tienes tareas importantes
        </Typography>
      ) : (
        todoCopia.map((taksData: ResultRes) => (
          <CardTaks key={taksData._id} {...taksData} />
        ))
      )}
    </>
  );
};
