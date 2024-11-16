import { Crown, Bell, ChartBar, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PremiumFeature = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200/50 hover:border-blue-300/50 transition-all duration-300">
    <div className="flex items-start space-x-4">
      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  </Card>
);

const PricingTier = ({
  name,
  price,
  features,
  highlighted = false,
}: {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}) => (
  <Card
    className={cn(
      "p-6 transition-all duration-300 hover:scale-105",
      highlighted
        ? "bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-300 shadow-xl"
        : "bg-white border border-gray-200"
    )}
  >
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <div className="text-3xl font-bold mb-4">{price}</div>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-2">
          <Crown className="w-4 h-4 text-amber-500" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </Card>
);

export const PremiumSection = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Banner Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 p-8 text-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-20 animate-pulse" />
        <div className="relative z-10">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Crown className="w-10 h-10 text-amber-100" />
            <h1 className="text-4xl font-bold text-white">Seja Premium com AKALIBRE</h1>
          </div>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Desbloqueie ferramentas avançadas para levar sua produtividade ao próximo nível.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid gap-8 md:grid-cols-3">
        <PremiumFeature
          icon={CalendarCheck}
          title="Produtividade Avançada"
          description="Integração de lembretes automáticos e análises de tarefas"
        />
        <PremiumFeature
          icon={ChartBar}
          title="Estatísticas Personalizadas"
          description="Painel de controle com gráficos interativos"
        />
        <PremiumFeature
          icon={Bell}
          title="Notificações Inteligentes"
          description="Alertas automáticos via e-mail e push"
        />
      </div>

      {/* Pricing Section */}
      <div className="grid gap-8 md:grid-cols-3">
        <PricingTier
          name="Básico"
          price="R$ 29/mês"
          features={["Lembretes básicos", "Estatísticas simples", "Suporte por email"]}
        />
        <PricingTier
          name="Avançado"
          price="R$ 59/mês"
          features={[
            "Lembretes avançados",
            "Estatísticas detalhadas",
            "Suporte prioritário",
            "API access",
          ]}
          highlighted
        />
        <PricingTier
          name="Exclusivo"
          price="R$ 99/mês"
          features={[
            "Recursos ilimitados",
            "Estatísticas em tempo real",
            "Suporte 24/7",
            "API dedicada",
            "Treinamento personalizado",
          ]}
        />
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-12">
        <h2 className="text-2xl font-bold text-gray-800">
          Pronto para transformar sua produtividade?
        </h2>
        <p className="text-gray-600">Experimente AKALIBRE Premium agora.</p>
        <div className="space-x-4">
          <Button
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 
                     transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                     border border-amber-400 hover:border-amber-500"
          >
            Torne-se AKALIBRE Premium
          </Button>
          <Button variant="outline" className="hover:scale-105 transition-all duration-300">
            Começar Teste Gratuito
          </Button>
        </div>
      </div>
    </div>
  );
};