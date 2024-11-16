import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useTaskStore } from "@/store/taskStore";
import { TaskCard } from "@/components/tasks/TaskCard";
import { Button } from "@/components/ui/button";
import { TaskStatus, TaskPriority } from "@/utils/types";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { tasks, filters, setFilter, clearFilters } = useTaskStore();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const filteredTasks = tasks.filter((task) => {
    if (user?.role === "employee" && task.userId !== user.id) return false;
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true;
  });

  const statusCounts = {
    progress: filteredTasks.filter((t) => t.status === "progress").length,
    completed: filteredTasks.filter((t) => t.status === "completed").length,
    cancelled: filteredTasks.filter((t) => t.status === "cancelled").length,
  };

  const handleStatusFilter = (status: TaskStatus) => {
    setFilter({ status });
  };

  const handlePriorityFilter = (priority: TaskPriority) => {
    setFilter({ priority });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-semibold">In Progress</h3>
            <p className="text-2xl">{statusCounts.progress}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-semibold">Completed</h3>
            <p className="text-2xl">{statusCounts.completed}</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="font-semibold">Cancelled</h3>
            <p className="text-2xl">{statusCounts.cancelled}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Filter by Status</h3>
            <div className="flex gap-2">
              <Button
                onClick={() => handleStatusFilter("progress")}
                variant={filters.status === "progress" ? "default" : "outline"}
              >
                In Progress
              </Button>
              <Button
                onClick={() => handleStatusFilter("completed")}
                variant={filters.status === "completed" ? "default" : "outline"}
              >
                Completed
              </Button>
              <Button
                onClick={() => handleStatusFilter("cancelled")}
                variant={filters.status === "cancelled" ? "default" : "outline"}
              >
                Cancelled
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Filter by Priority</h3>
            <div className="flex gap-2">
              <Button
                onClick={() => handlePriorityFilter("high")}
                variant={filters.priority === "high" ? "default" : "outline"}
              >
                High
              </Button>
              <Button
                onClick={() => handlePriorityFilter("medium")}
                variant={filters.priority === "medium" ? "default" : "outline"}
              >
                Medium
              </Button>
              <Button
                onClick={() => handlePriorityFilter("low")}
                variant={filters.priority === "low" ? "default" : "outline"}
              >
                Low
              </Button>
            </div>
          </div>

          <Button onClick={clearFilters} variant="outline">
            Clear Filters
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;