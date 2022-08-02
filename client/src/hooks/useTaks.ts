import { useDispatch, useSelector } from "react-redux";
import todoAPI from "../api/todoAPI";
import Swal from "sweetalert2";
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
  const {
    todos,
    todoCopia,
    isSaving,
    messageSaved,
    isLoadingTodos,
    view,
    update,
  } = useSelector<unknown, any>((state: any) => state.todo);
  const dispatch = useDispatch();

  const startUpdate = async (datos: any) => {
    dispatch(onUpdateTodo(datos));
  };

  const startSaveTaks = async (todo: any) => {
    try {
      if (todo._id) {
      } else {
        const { data }: { data: CreateNewTodoRes } =
          await todoAPI.post<CreateNewTodoRes>("/todo/createTodo", todo);

        //dispatch(onGetTodos());
        dispatch(onAddNewTodo(data));
        Swal.fire(data.msg, "Se agrego correctamente", "success");
      }
    } catch (error: any) {
      console.log(error);
      if (error.response.data.msg) {
        Swal.fire("Verifique", "No tienes ninguna tarea pendiete", "info");
        return;
      }
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };

  const startGetTask = async () => {
    try {
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
    } catch (error: any) {
      if (error.response.data.msg) {
        Swal.fire("Verifique", "No tienes ninguna tarea pendiete", "info");
        return;
      }
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };

  // const startUpdateTaks = async (todo: PutTodoProps) => {
  //   const { data }: { data: PutTodosRes } = await todoAPI.put<PutTodosRes>(
  //     `todo/updateTodo/${todo.id}`
  //   );
  // };
  const startDeleteTaks = async (id: string) => {
    const { data } = await todoAPI.delete(`todo/deleteTodo/${id}`);
  };

  const importanTakns = async () => {
    try {
      if (todos.length === 0) {
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
        dispatch(onImportanTodo());
      } else {
        dispatch(onImportanTodo());
      }
    } catch (error: any) {
      if (error.response.data.msg) {
        Swal.fire("Verifique", "No tienes ninguna tarea pendiete", "info");
        return;
      }
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };

  const pendigTaks = async () => {
    try {
      if (todos.length === 0) {
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
        dispatch(onPedingTodo());
      } else {
        dispatch(onPedingTodo());
      }
    } catch (error: any) {
      if (error.response.data.msg) {
        Swal.fire("Verifique", "No tienes ninguna tarea pendiete", "info");
        return;
      }
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };
  const finishTaks = async () => {
    try {
      if (todos.length === 0) {
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
        dispatch(onFinishTodo());
      } else {
        dispatch(onFinishTodo());
      }
    } catch (error: any) {
      if (error.response.data.msg) {
        Swal.fire("Verifique", "No tienes ninguna tarea pendiete", "info");
        return;
      }
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };
  const expiredTaks = async () => {
    try {
      if (todos.length === 0) {
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
        dispatch(onExpiredTodo());
      } else {
        dispatch(onExpiredTodo());
      }
    } catch (error: any) {
      if (error.response.data.msg) {
        Swal.fire("Verifique", "No tienes ninguna tarea pendiete", "info");
        return;
      }
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };
  const deleteTaks = async () => {
    try {
      if (todos.length === 0) {
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
        dispatch(onDeleteSaveTodos());
      } else {
        dispatch(onDeleteSaveTodos());
      }
    } catch (error: any) {
      if (error.response.data.msg) {
        Swal.fire("Verifique", "No tienes ninguna tarea pendiete", "info");
        return;
      }
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };

  return {
    update,
    view,
    todos,
    todoCopia,
    isSaving,
    messageSaved,
    isLoadingTodos,
    //*f
    startGetTask,
    startSaveTaks,
    startUpdate,
    //startUpdateTaks,
    startDeleteTaks,
    importanTakns,
    pendigTaks,
    finishTaks,
    expiredTaks,
    deleteTaks,
  };
};
