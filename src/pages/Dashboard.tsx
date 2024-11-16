import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useTaskStore } from "@/store/taskStore";
import { TaskCard } from "@/components/tasks/TaskCard";
import { TaskForm } from "@/components/tasks/TaskForm";
import { Button } from "@/components/ui/button";
import { TaskStatus, TaskPriority } from "@/utils/types";
import { useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { tasks, filters, setFilter, clearFilters, fetchTasks } = useTaskStore();
  const [showTaskForm, setShowTaskForm] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      fetchTasks();
    }
  }, [isAuthenticated, navigate, fetchTasks]);

  const filteredTasks = tasks.filter((task) => {
    if (user?.role === "employee" && task.user_id !== user.id) return false;
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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button onClick={() => setShowTaskForm(true)}>Create Task</Button>
        </div>

        {showTaskForm && (
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-border">
            <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
            <TaskForm onClose={() => setShowTaskForm(false)} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800">In Progress</h3>
            <p className="text-2xl text-blue-900">{statusCounts.progress}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800">Completed</h3>
            <p className="text-2xl text-green-900">{statusCounts.completed}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">Cancelled</h3>
            <p className="text-2xl text-gray-900">{statusCounts.cancelled}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Filter by Status</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => handleStatusFilter("progress")}
                variant={filters.status === "progress" ? "default" : "outline"}
                className="bg-blue-500 hover:bg-blue-600"
              >
                In Progress
              </Button>
              <Button
                onClick={() => handleStatusFilter("completed")}
                variant={filters.status === "completed" ? "default" : "outline"}
                className="bg-green-500 hover:bg-green-600"
              >
                Completed
              </Button>
              <Button
                onClick={() => handleStatusFilter("cancelled")}
                variant={filters.status === "cancelled" ? "default" : "outline"}
                className="bg-gray-500 hover:bg-gray-600"
              >
                Cancelled
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Filter by Priority</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => handlePriorityFilter("high")}
                variant={filters.priority === "high" ? "default" : "outline"}
                className="bg-red-500 hover:bg-red-600"
              >
                High
              </Button>
              <Button
                onClick={() => handlePriorityFilter("medium")}
                variant={filters.priority === "medium" ? "default" : "outline"}
                className="bg-yellow-500 hover:bg-yellow-600"
              >
                Medium
              </Button>
              <Button
                onClick={() => handlePriorityFilter("low")}
                variant={filters.priority === "low" ? "default" : "outline"}
                className="bg-green-500 hover:bg-green-600"
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