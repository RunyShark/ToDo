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
import { Upgrade } from "@mui/icons-material";
import { useState } from "react";

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

export const ModalUpdate = () => {
  const { modalUpdate, modalClose, modalUpdateOpen } = useUIModal();

  const [updateInfor, setupdateInfor] = useState({
    titie: "",
  });
  return (
    <div>
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
            {/* <ModalFormUpdate /> */}
            <form>
              <input type="text" value={updateInfor.titie} />
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
