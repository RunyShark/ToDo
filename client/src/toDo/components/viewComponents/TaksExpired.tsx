import { ResultRes } from "../../../hooks/interfaces/interfaceTaks";
import { Typography } from "@mui/material";
import { useTaks } from "../../../index/index";
import { CardTaks } from "../viewComponents/cards/CardTaks";
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
