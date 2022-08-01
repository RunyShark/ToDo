import { useDispatch, useSelector } from "react-redux";
import todoAPI from "../api/todoAPI";
import {
  CreateNewTodoRes,
  GetTodosRes,
  PostTodoProps,
  PutTodoProps,
  PutTodosRes,
} from "./interfaces/interfaceTaks";
import { onAddNewTodo, onDeleteTodo, onUpdateTodo, onGetTodos } from "../index";
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
    dispatch(onGetTodos(data));
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
  };
};
