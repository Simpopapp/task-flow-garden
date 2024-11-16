import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTaskStore } from "@/store/taskStore";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { TaskFormFields } from "./TaskFormFields";
import { Task, TaskFormValues } from "@/utils/types";

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  status: z.enum(["progress", "completed", "cancelled"]),
  priority: z.enum(["high", "medium", "low"]),
});

interface TaskFormProps {
  task?: Task;
  onClose?: () => void;
}

export const TaskForm = ({ task, onClose }: TaskFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthStore();
  const addTask = useTaskStore((state) => state.addTask);
  const updateTask = useTaskStore((state) => state.updateTask);

  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: task || {
      title: "",
      description: "",
      status: "progress",
      priority: "medium",
    },
  });

  const onSubmit = async (values: TaskFormValues) => {
    if (!user?.id) return;
    setIsLoading(true);

    try {
      if (task) {
        const { error } = await supabase
          .from("tasks")
          .update(values)
          .eq("id", task.id);

        if (error) throw error;
        updateTask(task.id, values);
        toast.success("Task updated successfully");
      } else {
        const { data, error } = await supabase
          .from("tasks")
          .insert({ ...values, user_id: user.id })
          .select()
          .single();

        if (error) throw error;
        addTask(data as Task);
        toast.success("Task created successfully");
      }

      onClose?.();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <TaskFormFields form={form} />
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {task ? "Update" : "Create"} Task
          </Button>
        </div>
      </form>
    </Form>
  );
};