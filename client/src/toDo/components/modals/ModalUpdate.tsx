import {
  Button,
  Typography,
  Divider,
  Backdrop,
  Box,
  Modal,
  Fade,
} from "@mui/material";
import { useUIModal } from "../../../index/index";
import { ModalFormUpdate } from "../modalForm/ModalFormUpdate";
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
  const { modalUpdate, modalClose, modalUpdateOpen } = useUIModal();

  return (
    <div>
      <Button
        onClick={modalUpdateOpen}
        size="large"
        sx={{
          ml: 3,
          mt: 1,
        }}
      >
        <AddCircle />
        Crear
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalUpdate}
        onClose={() => modalClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalUpdate}>
          <Box sx={style}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Actualizar tarea
            </Typography>
            <Divider />
            <ModalFormUpdate />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
