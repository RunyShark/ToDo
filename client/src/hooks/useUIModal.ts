import { useDispatch, useSelector } from "react-redux";
import { onOpenDateModal, onCloseDateModal } from "../index";

export const useUIModal = () => {
  const { modalState } = useSelector<unknown, any>((state: any) => state.modal);

  const modalOpen = () => {
    dispatch(onOpenDateModal());
  };
  const modalClose = () => {
    dispatch(onCloseDateModal());
  };
  const dispatch = useDispatch();

  return {
    modalState,
    modalOpen,
    modalClose,
  };
};
