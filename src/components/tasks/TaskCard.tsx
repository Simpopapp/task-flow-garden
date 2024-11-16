import { Task } from "@/utils/types";
import { useTaskStore } from "@/store/taskStore";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TaskForm } from "./TaskForm";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const statusColors = {
    progress: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
    cancelled: "bg-gray-100 text-gray-800",
  };

  const priorityColors = {
    high: "border-red-500",
    medium: "border-yellow-500",
    low: "border-green-500",
  };

  if (isEditing) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-sm border border-border">
        <TaskForm task={task} onClose={() => setIsEditing(false)} />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "task-card border-l-4 animate-fade-in",
        priorityColors[task.priority],
        task.status === "completed" && "opacity-75"
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-gray-600 mt-1">{task.description}</p>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <div className="flex gap-2">
            <span
              className={cn(
                "px-2 py-1 rounded-full text-sm font-medium",
                statusColors[task.status]
              )}
            >
              {task.status}
            </span>
            <span
              className={cn(
                "px-2 py-1 rounded-full text-sm font-medium",
                task.priority === "high"
                  ? "bg-red-100 text-red-800"
                  : task.priority === "medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              )}
            >
              {task.priority}
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(true)}
              className="hover:bg-gray-100 transition-colors"
            >
              Edit
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deleteTask(task.id)}
              className="hover:bg-red-600 transition-colors"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};