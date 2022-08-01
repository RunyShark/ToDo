import {
  TodoLayout,
  NothingSelectedView,
  TaksModal,
  AllTaks,
} from "../../index";

export const TodoPage = () => {
  return (
    <TodoLayout>
      <NothingSelectedView />
      {/* <AllTaks /> */}
      {/* <CompletdTasks /> */}

      <TaksModal />
    </TodoLayout>
  );
};
