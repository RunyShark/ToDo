import { useDispatch, useSelector } from "react-redux";
import { onOpenDateModal, onCloseDateModal } from "../index";

export const useUIModal = () => {
  const { modalState, modalUpdate } = useSelector<unknown, any>(
    (state: any) => state.modal
  );

  const modalOpen = () => {
    dispatch(onOpenDateModal());
  };

  const modalClose = () => {
    dispatch(onCloseDateModal());
  };
  const dispatch = useDispatch();

  return {
    modalUpdate,
    modalState,
    modalOpen,
    modalClose,
  };
};
