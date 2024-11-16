export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "employee";
};

export type TaskStatus = "progress" | "completed" | "cancelled";
export type TaskPriority = "high" | "medium" | "low";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: Date;
  userId: string;
};

export type TaskFilters = {
  status?: TaskStatus;
  priority?: TaskPriority;
};