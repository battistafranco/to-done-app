export interface Todo {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
  labels: any;
  due_date: string;
  notes: string;
  state: STATE;
  valid: boolean;
}

export enum STATE {
  Pending,
  Completed,
}

export function newTodo() {
  const task: Todo = {
    id: '',
    name: '',
    thumbnail: '',
    description: '',
    labels: [],
    due_date: '',
    notes: '',
    state: STATE.Pending,
    valid: false,
  };

  return task;
}
