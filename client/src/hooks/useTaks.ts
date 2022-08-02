import { useDispatch, useSelector } from "react-redux";
import todoAPI from "../api/todoAPI";
import {
  CreateNewTodoRes,
  GetTodosRes,
  PostTodoProps,
  PutTodoProps,
  PutTodosRes,
} from "./interfaces/interfaceTaks";
import {
  conversDateTodo,
  onAddNewTodo,
  onExpiredTodo,
  onDeleteSaveTodos,
  onDeleteTodo,
  onFinishSaving,
  onFinishTodo,
  onGetTodos,
  onImportanTodo,
  onLogoutUser,
  onPedingTodo,
  onUpdateTodo,
} from "../index";
export const useTaks = () => {
  const { todos, isSaving, messageSaved, isLoadingTodos, view } = useSelector<
    unknown,
    any
  >((state: any) => state.todo);
  const dispatch = useDispatch();

  const startGetTask = async () => {
    const { data }: { data: GetTodosRes } = await todoAPI.get<GetTodosRes>(
      "/todo/getTodos"
    );

    const results = conversDateTodo(data.results);

    const obj = {
      Error: data.Error,
      msg: data.msg,
      results,
    };
    dispatch(onGetTodos(obj));
  };

  const startSaveTaks = async (todo: PostTodoProps) => {
    const { data }: { data: CreateNewTodoRes } =
      await todoAPI.post<CreateNewTodoRes>("/todo/createTodo", todo);
  };
  const startUpdateTaks = async (todo: PutTodoProps) => {
    const { data }: { data: PutTodosRes } = await todoAPI.put<PutTodosRes>(
      `todo/updateTodo/${todo.id}`
    );
  };
  const startDeleteTaks = async (id: string) => {
    const { data } = await todoAPI.delete(`todo/deleteTodo/${id}`);
  };

  const importanTakns = () => {
    dispatch(onImportanTodo());
  };

  const pendigTaks = () => {
    dispatch(onPedingTodo());
  };
  const finishTaks = () => {
    dispatch(onFinishTodo());
  };
  const expiredTaks = () => {
    dispatch(onExpiredTodo());
  };
  const deleteTaks = () => {
    dispatch(onDeleteSaveTodos());
  };

  return {
    view,
    todos,
    isSaving,
    messageSaved,
    isLoadingTodos,
    //*f
    startGetTask,
    startSaveTaks,
    startUpdateTaks,
    startDeleteTaks,
    importanTakns,
    pendigTaks,
    finishTaks,
    expiredTaks,
    deleteTaks,
  };
};
