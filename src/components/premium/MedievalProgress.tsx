import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Dragon, Sword, Crown } from "lucide-react";

const motivationalMessages = [
  "Your quest for greatness continues, brave warrior!",
  "The dragon of productivity bows before your might!",
  "Your legend grows with each completed task!",
];

export const MedievalProgress = () => {
  const progress = 60; // Simulated progress
  const completedTasks = 3;
  const totalTasks = 5;

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="medieval-card">
        <div className="flex items-center gap-4 mb-4">
          <Crown className="w-8 h-8 text-medieval-gold animate-float" />
          <h3 className="text-2xl font-medieval font-bold text-medieval-gold">
            Quest Progress
          </h3>
        </div>
        
        <div className="relative">
          <Progress 
            value={progress} 
            className="h-4 bg-medieval-black border border-medieval-gold/30"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-r from-medieval-blood via-medieval-gold to-medieval-blood/50 
                     opacity-50 animate-flame-pulse"
            style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
          />
        </div>
        
        <p className="mt-4 text-medieval-gold-light/80 font-scroll">
          {completedTasks} of {totalTasks} quests completed
        </p>
      </Card>

      <Card className="medieval-card bg-gradient-to-br from-medieval-black/90 to-medieval-blood/20">
        <div className="flex items-center justify-between">
          <p className="text-xl font-scroll text-medieval-gold">
            {motivationalMessages[0]}
          </p>
          <Dragon className="w-12 h-12 text-medieval-gold/30 animate-float" />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="medieval-card">
          <div className="flex items-center gap-4">
            <Sword className="w-8 h-8 text-medieval-metal animate-pulse" />
            <div>
              <h4 className="font-medieval text-medieval-gold">Battle Stats</h4>
              <p className="text-2xl font-bold text-medieval-gold-light">
                Legendary
              </p>
            </div>
          </div>
        </Card>

        <Card className="medieval-card">
          <div className="flex items-center gap-4">
            <Crown className="w-8 h-8 text-medieval-gold animate-float" />
            <div>
              <h4 className="font-medieval text-medieval-gold">Royal Achievements</h4>
              <div className="flex gap-2 mt-2">
                <Trophy className="w-6 h-6 text-medieval-gold animate-pulse" />
                <Trophy className="w-6 h-6 text-medieval-gold-dark" />
                <Trophy className="w-6 h-6 text-medieval-metal" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};