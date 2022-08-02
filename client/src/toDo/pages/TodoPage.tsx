import {
  TodoLayout,
  TaksModal,
  AllTaks,
  useTaks,
  NothingSelectedView,
  DeleteTaks,
  ExpiredTaks,
  FinishedTaks,
  ImportantsTaks,
  PendinTaks,
} from "../../index";

export const TodoPage = () => {
  const { view } = useTaks();

  return (
    <TodoLayout>
      {view === "no-view" ? (
        <NothingSelectedView />
      ) : view === "all" ? (
        <AllTaks />
      ) : view === "importan" ? (
        <ImportantsTaks />
      ) : view === "pending" ? (
        <PendinTaks />
      ) : view === "fishs" ? (
        <FinishedTaks />
      ) : view === "caduco" ? (
        <ExpiredTaks />
      ) : (
        <DeleteTaks />
      )}

      <TaksModal />
    </TodoLayout>
  );
};
