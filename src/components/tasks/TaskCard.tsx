import { Task } from "@/utils/types";
import { useTaskStore } from "@/store/taskStore";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const updateTask = useTaskStore((state) => state.updateTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const statusColors = {
    progress: "bg-blue-500",
    completed: "bg-green-500",
    cancelled: "bg-red-500",
  };

  const priorityColors = {
    high: "border-red-500",
    medium: "border-yellow-500",
    low: "border-green-500",
  };

  return (
    <div className={`task-card border-l-4 ${priorityColors[task.priority]} animate-fade-in`}>
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
          <span className="px-2 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
            {task.priority}
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