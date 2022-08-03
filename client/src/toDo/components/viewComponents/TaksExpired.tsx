import { Typography } from "@mui/material";

import { CardTaks, ResultRes, useTaks } from "../../../index";
export const TaksExpired = () => {
  const { taksExpired } = useTaks();

  return (
    <>
      {taksExpired.length === 0 ? (
        <Typography variant="h5" sx={{ color: "white" }}>
          No tienes tareas expiradas
        </Typography>
      ) : (
        taksExpired.map((taksData: ResultRes) => (
          <CardTaks key={taksData._id} {...taksData} />
        ))
      )}
    </>
  );
};
