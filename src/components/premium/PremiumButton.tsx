import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps {
  className?: string;
  onClick?: () => void;
}

export const PremiumButton = ({ className, onClick }: PremiumButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-lg border-2 border-[#DAA520] bg-gradient-to-r from-[#FFD700] to-[#FF8C00] px-8 py-3",
        "transform transition-all duration-300 hover:scale-105 hover:shadow-[0_5px_15px_rgba(255,215,0,0.5)]",
        "before:absolute before:left-[-100%] before:top-0 before:h-full before:w-[120%]",
        "before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        className
      )}
    >
      <span className="flex items-center gap-2 font-bold text-white drop-shadow-md">
        <Crown className="h-5 w-5" />
        Torne-se AKALIBRE Premium
      </span>
    </button>
  );
};