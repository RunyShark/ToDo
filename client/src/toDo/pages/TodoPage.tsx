import {
  TodoLayout,
  TaksModal,
  AllTaks,
  useTaks,
  NothingSelectedView,
} from "../../index";

export const TodoPage = () => {
  const { view } = useTaks();

  return (
    <TodoLayout>
      {view === "no-view" ? <NothingSelectedView /> : <AllTaks />}

      {/* <AllTaks /> */}
      {/* <CompletdTasks /> */}

      <TaksModal />
    </TodoLayout>
  );
};
