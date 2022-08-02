import {
  Button,
  Typography,
  Divider,
  Backdrop,
  Box,
  Modal,
  Fade,
} from "@mui/material";
import { useUIModal } from "../../index";
import { ModalForm } from "./ModalForm";
import { AddCircle } from "@mui/icons-material";

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

export const ModalUpdate = ({ props }: { props: string }) => {
  const { modalState, modalClose, modalOpen } = useUIModal();
  console.log(props);
  return (
    <div>
      <Button
        onClick={modalOpen}
        size="large"
        sx={{
          ml: 3,
          mt: 1,
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
