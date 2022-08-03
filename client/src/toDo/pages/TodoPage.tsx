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
  UpdateNote,
} from "../components";

export const TodoPage = () => {
  const { view } = useTaks();

  return (
    <TodoLayout>
      {view === "no-view" ? (
        <NothingSelectedView />
      ) : view === "all" ? (
        <ViewDad title="Todas mis tareas📖" children={<TaksViewAllTaks />} /> //*terminada
      ) : view === "importan" ? (
        <ViewDad title="Tareas importantes🌟" children={<TaksImportants />} /> //*terminada
      ) : view === "pending" ? (
        <ViewDad title="Tareas pendientes📚" children={<TaksPendin />} /> //*terminada
      ) : view === "fishs" ? (
        <ViewDad title="Tareas terminadas📝" children={<TaksFinished />} /> //*terminada
      ) : view === "caduco" ? (
        <ViewDad title="Tareas expiradas⏰" children={<TaksExpired />} /> //*terminada
      ) : view === "delete" ? (
        <ViewDad title="Tareas eliminadas🗑" children={<TaksDeleteView />} /> //*terminada
      ) : view === "actualizar" ? (
        <ViewDad title="ActualizarNote" children={<UpdateNote />} /> //*terminada
      ) : (
        ""
      )}

      <TaksModal />
    </TodoLayout>
  );
};
