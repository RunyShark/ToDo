import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Divider,
  Backdrop,
  Box,
  Modal,
  Fade,
} from "@mui/material";
import { useUIModal } from "../../index";

import { AddCircle, SaveOutlined } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  p: 6,
  borderRadius: 5,
};

export const TaksModal = () => {
  const { modalState, modalClose, modalOpen } = useUIModal();

  return (
    <div>
      <Button
        onClick={modalOpen}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "secondary.main",
          ":hover": { backgroundColor: "secondary.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
        // disabled={isSaving}
      >
        <AddCircle />
        Crear
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalState}
        onClose={() => modalClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalState}>
          <Box sx={style}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              {" "}
              Nueva tarea{" "}
            </Typography>
            <Divider />
            <form>
              <Grid container sx={{ mt: 3 }}>
                <Grid container direction="row" justifyContent="end">
                  <Typography sx={{ mr: 2, mt: 1 }}>
                    Fecha de finalizacion
                  </Typography>
                  <TextField
                    type="date"
                    variant="standard"
                    sx={{ border: "none", mb: 2 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="ingresa el titulo"
                    label="Titulo de la tarea"
                    sx={{ border: "none", mb: 1 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Descripcion"
                    label="Tarea"
                    minRows={4}
                    sx={{ border: "none", mb: 1 }}
                  />
                </Grid>

                <Grid item>
                  <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
