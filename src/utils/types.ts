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
  description: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  user_id: string;
  created_at: string;
  updated_at: string;
};

export type TaskFormValues = {
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
};

export type TaskFilters = {
  status?: TaskStatus;
  priority?: TaskPriority;
};