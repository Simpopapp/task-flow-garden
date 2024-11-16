import { create } from "zustand";
import { Task, TaskFilters } from "@/utils/types";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface TaskState {
  tasks: Task[];
  filters: TaskFilters;
  addTask: (task: Task) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  setFilter: (filters: TaskFilters) => void;
  clearFilters: () => void;
  fetchTasks: () => Promise<void>;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  filters: {},
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      ),
    })),
  deleteTask: async (id) => {
    try {
      const { error } = await supabase.from("tasks").delete().eq("id", id);
      if (error) throw error;

      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      }));
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("Failed to delete task");
    }
  },
  setFilter: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  clearFilters: () =>
    set({
      filters: {},
    }),
  fetchTasks: async () => {
    try {
      const { data, error } = await supabase.from("tasks").select("*");
      if (error) throw error;
      set({ tasks: data as Task[] });
    } catch (error) {
      toast.error("Failed to fetch tasks");
    }
  },
}));