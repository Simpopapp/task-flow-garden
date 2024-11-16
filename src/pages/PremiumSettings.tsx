import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Bell, Palette, Star } from "lucide-react";

const PremiumSettings = () => {
  const [notifications, setNotifications] = useState({
    taskReminders: true,
    deadlineAlerts: true,
    progressUpdates: false,
  });

  const [priorityKeywords, setPriorityKeywords] = useState(50);
  const [selectedTheme, setSelectedTheme] = useState("light");

  const handleSave = () => {
    toast.success("Configurações salvas com sucesso!");
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-8">Configurações Premium</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Notifications Card */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">Notificações</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label>Lembretes de Tarefas</label>
              <Switch
                checked={notifications.taskReminders}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, taskReminders: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <label>Alertas de Prazo</label>
              <Switch
                checked={notifications.deadlineAlerts}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, deadlineAlerts: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <label>Atualizações de Progresso</label>
              <Switch
                checked={notifications.progressUpdates}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, progressUpdates: checked })
                }
              />
            </div>
          </div>
        </Card>

        {/* Priority Settings Card */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">Priorização Automática</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600">
              Ajuste a sensibilidade da detecção de palavras-chave
            </p>
            <Slider
              value={[priorityKeywords]}
              onValueChange={(value) => setPriorityKeywords(value[0])}
              max={100}
              step={1}
            />
            <p className="text-sm text-gray-500">
              Sensibilidade atual: {priorityKeywords}%
            </p>
          </div>
        </Card>

        {/* Theme Settings Card */}
        <Card className="p-6 hover:shadow-lg transition-shadow md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">Tema</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {["light", "dark", "system"].map((theme) => (
              <button
                key={theme}
                onClick={() => setSelectedTheme(theme)}
                className={`p-4 rounded-lg border transition-all ${
                  selectedTheme === theme
                    ? "border-primary bg-primary/10"
                    : "border-gray-200 hover:border-primary"
                }`}
              >
                <p className="capitalize">{theme}</p>
              </button>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-8 flex justify-end">
        <Button
          onClick={handleSave}
          className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
        >
          Salvar Configurações
        </Button>
      </div>
    </div>
  );
};

export default PremiumSettings;