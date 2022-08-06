import { FC } from "react";
import { Backdrop, Box, Modal, Fade, Typography } from "@mui/material";
import { MainButton, ModalButton } from "./Buttons";

interface Props {
  open: boolean;
  onHandleDelete: (value: any) => void;
  onHandleClose: (value: any) => void;
}

export const ModalDelete: FC<Props> = ({
  open,
  onHandleDelete,
  onHandleClose,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 330,
    bgcolor: "#EDEEF2",
    boxShadow: 24,
    p: "20px",
    borderRadius: 4,
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onHandleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              fontSize={18}
              fontWeight={800}
              textAlign="center"
              mt={1}
            >
              ¿Quieres eliminar esta reseña?
            </Typography>

            <Box display="flex" flexDirection="column" gap={1} mt={3}>
              <ModalButton
                actions="delete"
                text="Eliminar"
                onHandleClick={onHandleDelete}
              />
              <ModalButton
                actions="cancel"
                text="Cancelar"
                onHandleClick={onHandleClose}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
