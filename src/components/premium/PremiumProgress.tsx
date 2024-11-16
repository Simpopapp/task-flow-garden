import { Trophy, Clock, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const motivationalMessages = [
  "Parabéns! Você concluiu 2 tarefas hoje!",
  "Continue assim! Seu progresso é inspirador!",
  "Você está no caminho certo para alcançar seus objetivos!",
];

export const PremiumProgress = () => {
  const progress = 60; // Simulated progress
  const completedTasks = 3;
  const totalTasks = 5;
  const averageTime = "2h";

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Progress Section */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Nível de Organização</h3>
        <Progress value={progress} className="mb-2" />
        <p className="text-sm text-gray-600">
          Concluiu {completedTasks} de {totalTasks} tarefas. Continue assim!
        </p>
      </Card>

      {/* Motivational Message */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <p className="text-center text-lg font-medium text-blue-800">
          {motivationalMessages[0]}
        </p>
      </Card>

      {/* Premium Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary" />
            <div>
              <h4 className="font-medium">Tempo Médio por Tarefa</h4>
              <p className="text-2xl font-bold text-primary">{averageTime}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-500" />
            <div>
              <h4 className="font-medium">Conquistas Desbloqueadas</h4>
              <div className="flex gap-2 mt-2">
                <Award className="w-6 h-6 text-amber-500" />
                <Award className="w-6 h-6 text-amber-500" />
                <Award className="w-6 h-6 text-gray-300" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};