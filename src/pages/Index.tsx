import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TaskCard } from "@/components/tasks/TaskCard";
import { useTaskStore } from "@/store/taskStore";
import { useAuthStore } from "@/store/authStore";

const Index = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        {isAuthenticated ? (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">My Tasks</h1>
            {tasks.length === 0 ? (
              <p className="text-gray-600">No tasks yet. Create your first task!</p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Welcome to TaskManager
            </h1>
            <p className="text-xl text-gray-600">
              Please login to manage your tasks
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;