import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useTaskStore } from "@/store/taskStore";
import { TaskCard } from "@/components/tasks/TaskCard";
import { TaskForm } from "@/components/tasks/TaskForm";
import { Button } from "@/components/ui/button";
import { TaskStatus, TaskPriority } from "@/utils/types";
import { PremiumSection } from "@/components/premium/PremiumSection";
import { Plus, Filter, LayoutGrid, ListFilter } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { tasks, filters, setFilter, clearFilters, fetchTasks } = useTaskStore();
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showPremium, setShowPremium] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");

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

  const totalTasks = Object.values(statusCounts).reduce((a, b) => a + b, 0);
  const completionRate = totalTasks
    ? Math.round((statusCounts.completed / totalTasks) * 100)
    : 0;

  const handleStatusFilter = (status: TaskStatus) => {
    setFilter({ status });
  };

  const handlePriorityFilter = (priority: TaskPriority) => {
    setFilter({ priority });
  };

  const getMotivationalMessage = () => {
    if (completionRate >= 75) return "Excelente progresso! Continue assim! 🌟";
    if (completionRate >= 50) return "Você está no caminho certo! 🎯";
    if (completionRate >= 25) return "Bom começo! Mantenha o foco! 💪";
    return "Comece sua jornada de produtividade! 🚀";
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-akaflow-purple to-akaflow-aqua bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Bem-vindo de volta, {user?.name || "usuário"}!
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setView(view === "grid" ? "list" : "grid")}
              variant="outline"
              size="icon"
              className="w-10 h-10"
            >
              {view === "grid" ? (
                <LayoutGrid className="w-5 h-5" />
              ) : (
                <ListFilter className="w-5 h-5" />
              )}
            </Button>
            <Button onClick={() => setShowTaskForm(true)}>
              <Plus className="w-5 h-5 mr-2" /> Nova Tarefa
            </Button>
            <Button
              onClick={() => setShowPremium(true)}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 
                       transform hover:scale-105 transition-all duration-300"
            >
              AKALIBRE Premium
            </Button>
          </div>
        </div>

        <Card className="bg-white/50 backdrop-blur-sm border-akaflow-purple/20">
          <CardHeader>
            <CardTitle>Nível de Organização</CardTitle>
            <CardDescription>{getMotivationalMessage()}</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={completionRate} className="h-2" />
            <p className="text-sm text-gray-600 mt-2">
              Você completou {statusCounts.completed} de {totalTasks} tarefas
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-blue-50/50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-700">Em Progresso</CardTitle>
              <CardDescription className="text-3xl font-bold text-blue-800">
                {statusCounts.progress}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-green-50/50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700">Completadas</CardTitle>
              <CardDescription className="text-3xl font-bold text-green-800">
                {statusCounts.completed}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gray-50/50 border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-700">Canceladas</CardTitle>
              <CardDescription className="text-3xl font-bold text-gray-800">
                {statusCounts.cancelled}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {showTaskForm && (
          <Card className="border-akaflow-purple/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Nova Tarefa</CardTitle>
            </CardHeader>
            <CardContent>
              <TaskForm onClose={() => setShowTaskForm(false)} />
            </CardContent>
          </Card>
        )}

        {showPremium && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
            <div className="min-h-screen flex items-center justify-center p-4">
              <div className="bg-white rounded-xl max-w-6xl w-full relative">
                <button
                  onClick={() => setShowPremium(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <PremiumSection />
              </div>
            </div>
          </div>
        )}

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start bg-transparent border-b mb-6">
            <TabsTrigger value="all" className="data-[state=active]:text-akaflow-purple">
              Todas
            </TabsTrigger>
            <TabsTrigger
              value="progress"
              onClick={() => handleStatusFilter("progress")}
              className="data-[state=active]:text-blue-600"
            >
              Em Progresso
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              onClick={() => handleStatusFilter("completed")}
              className="data-[state=active]:text-green-600"
            >
              Completadas
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              onClick={() => handleStatusFilter("cancelled")}
              className="data-[state=active]:text-gray-600"
            >
              Canceladas
            </TabsTrigger>
            <Button
              onClick={clearFilters}
              variant="ghost"
              size="sm"
              className="ml-auto"
            >
              Limpar Filtros
            </Button>
          </TabsList>

          <div
            className={
              view === "grid"
                ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                : "space-y-4"
            }
          >
            {filteredTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
            {filteredTasks.length === 0 && (
              <div className="col-span-full text-center py-8 text-gray-500">
                Nenhuma tarefa encontrada
              </div>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;