export interface CreateNewTodoRes {
  Error: boolean;
  msg: string;
  newTodo: NewTodoRes;
}

export interface NewTodoRes {
  title: string;
  text: string;
  dateStart: Date;
  dateEnd: Date;
  active: boolean;
  important: boolean;
  deleted: boolean;
  _id: string;
  user: string;
  __v: number;
}

export interface GetTodosRes {
  Error: boolean;
  msg: string;
  results: ResultRes[];
}

export interface ResultRes {
  _id: string;
  title: string;
  text: string;
  dateStart: Date;
  dateEnd: Date;
  active: boolean;
  important: boolean;
  deleted: boolean;
  user: string;
  __v: number;
}

export interface PutTodosRes {
  Error: boolean;
  msg: string;
  todoUdate: TodoUdateRes;
}

export interface TodoUdateRes {
  _id: string;
  title: string;
  text: string;
  dateStart: Date;
  dateEnd: Date;
  active: boolean;
  important: boolean;
  deleted: boolean;
  user: string;
  __v: number;
}

export interface DeleteTodoRes {
  Error: boolean;
  msg: string;
  todo: Todo;
}

export interface Todo {
  _id: string;
  title: string;
  text: string;
  dateStart: Date;
  dateEnd: Date;
  active: boolean;
  important: boolean;
  deleted: boolean;
  user: string;
  __v: number;
}

export interface PutTodoProps {
  id: string;
  tite?: string;
  text?: string;
  dateEnd?: string;
  active?: boolean;
  important?: boolean;
  deleted?: boolean;
}

export interface PostTodoProps {
  title: string;
  dateEnd: string;
  text?: string;
  important?: boolean;
}
