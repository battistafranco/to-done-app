export interface Todo {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
  labels: string;
  due_date: string;
  notes: string;
  state: STATE;
}

export enum STATE {
  Pending,
  Completed,
}
