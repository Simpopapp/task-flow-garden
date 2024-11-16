export type User = {
  id: string;
  name: string;
  email: string;
};

export type TaskStatus = "todo" | "progress" | "completed";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  userId: string;
};