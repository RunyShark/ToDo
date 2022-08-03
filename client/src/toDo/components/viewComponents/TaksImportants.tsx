import { Typography } from "@mui/material";

import { CardTaks, ResultRes, useTaks } from "../../../index";
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
