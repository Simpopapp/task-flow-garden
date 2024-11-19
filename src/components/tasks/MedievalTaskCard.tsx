import { Task } from "@/utils/types";
import { cn } from "@/lib/utils";
import { Shield, Trophy, Skull, Dragon } from "lucide-react";
import { useState } from "react";
import { TaskForm } from "./TaskForm";

interface TaskCardProps {
  task: Task;
}

export const MedievalTaskCard = ({ task }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const StatusIcon = () => {
    switch (task.status) {
      case "progress":
        return <Shield className="status-icon status-progress" />;
      case "completed":
        return <Trophy className="status-icon status-completed" />;
      case "cancelled":
        return <Skull className="status-icon status-cancelled" />;
      default:
        return null;
    }
  };

  if (isEditing) {
    return (
      <div className="medieval-card">
        <TaskForm task={task} onClose={() => setIsEditing(false)} />
      </div>
    );
  }

  return (
    <div className={cn(
      "medieval-card group",
      task.priority === "high" && "border-medieval-blood/50",
      task.priority === "medium" && "border-medieval-gold/50",
      task.priority === "low" && "border-medieval-metal/50"
    )}>
      {task.priority === "high" && <Dragon className="dragon-icon" />}
      
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h3 className="text-xl font-medieval font-bold text-medieval-gold">
            {task.title}
          </h3>
          <p className="text-medieval-gold-light/80">{task.description}</p>
        </div>
        
        <div className="flex flex-col gap-4 items-end">
          <StatusIcon />
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsEditing(true)}
              className="medieval-button text-sm px-4 py-2"
            >
              Edit Quest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};