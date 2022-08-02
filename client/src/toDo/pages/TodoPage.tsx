import { TaksViewAllTaks } from "../components/viewComponents/TaksViewAllTaks";
import {
  TodoLayout,
  TaksModal,
  useTaks,
  NothingSelectedView,
  TaksPendin,
  ViewDad,
  TaksDeleteView,
  TaksExpired,
  TaksFinished,
  TaksImportants,
} from "../../index";

export const TodoPage = () => {
  const { view } = useTaks();

  return (
    <TodoLayout>
      {view === "no-view" ? (
        <NothingSelectedView />
      ) : view === "all" ? (
        <ViewDad title="Todas mis tareas📖" children={<TaksViewAllTaks />} />
      ) : view === "importan" ? (
        <ViewDad title="Tareas importantes🌟" children={<TaksImportants />} />
      ) : view === "pending" ? (
        <ViewDad title="Tareas pendientes📚" children={<TaksPendin />} /> //*terminada
      ) : view === "fishs" ? (
        <ViewDad title="Tareas terminadas📝" children={<TaksFinished />} /> //*terminada
      ) : view === "caduco" ? (
        <ViewDad title="Tareas expiradas⏰" children={<TaksExpired />} /> //*pendiente
      ) : view === "delete" ? (
        <ViewDad title="Tareas eliminadas🗑" children={<TaksDeleteView />} /> //*terminada
      ) : (
        ""
      )}

      <TaksModal />
    </TodoLayout>
  );
};
