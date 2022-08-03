import { ModalForm } from "./ModalForm";
import {
  Button,
  Typography,
  Divider,
  Backdrop,
  Box,
  Modal,
  Fade,
} from "@mui/material";

import { AddCircle } from "@mui/icons-material";

import { useUIModal } from "../../../index";

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
              Nueva tarea
            </Typography>
            <Divider />
            <ModalForm />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
