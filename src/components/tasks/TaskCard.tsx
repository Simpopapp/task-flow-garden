import { Task } from "@/utils/types";
import { useTaskStore } from "@/store/taskStore";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const updateTask = useTaskStore((state) => state.updateTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const statusColors = {
    todo: "bg-task-todo",
    progress: "bg-task-progress",
    completed: "bg-task-completed",
  };

  return (
    <div className="task-card animate-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-gray-600 mt-1">{task.description}</p>
        </div>
        <div className="flex gap-2">
          <span
            className={`px-2 py-1 rounded-full text-white text-sm ${
              statusColors[task.status]
            }`}
          >
            {task.status}
          </span>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};