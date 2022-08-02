import { useDispatch, useSelector } from "react-redux";
import { onOpenDateModal, onCloseDateModal, onOpenModalUpdate } from "../index";

export const useUIModal = () => {
  const { modalState, modalUpdate, ref } = useSelector<unknown, any>(
    (state: any) => state.modal
  );

  const modalOpen = () => {
    dispatch(onOpenDateModal());
  };
  const modalUpdateOpen = (data: any) => {
    dispatch(onOpenModalUpdate(data));
  };
  const modalClose = () => {
    dispatch(onCloseDateModal());
  };
  const dispatch = useDispatch();

  return {
    ref,
    modalUpdate,
    modalState,
    modalOpen,
    modalClose,
    modalUpdateOpen,
  };
};
