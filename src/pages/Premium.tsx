import { CalendarCheck, ChartBar, Bell, Crown } from "lucide-react";
import { PremiumButton } from "@/components/premium/PremiumButton";
import { Card } from "@/components/ui/card";

const PremiumFeature = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <Card className="group transform space-y-4 rounded-xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-blue-100 p-6 transition-all duration-300 hover:scale-105 hover:border-blue-300/50 hover:shadow-lg dark:from-blue-900/20 dark:to-blue-800/20">
    <div className="flex items-start space-x-4">
      <Icon className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:text-blue-400" />
      <div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
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
      "transform space-y-6 p-6 transition-all duration-300 hover:scale-105",
      highlighted
        ? "relative bg-gradient-to-br from-amber-100 to-amber-50 before:absolute before:inset-0 before:animate-pulse before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100"
        : "bg-white"
    )}
  >
    <div className="relative">
      <h3 className="text-2xl font-bold">{name}</h3>
      <div className="mt-2 text-3xl font-bold text-amber-600">{price}</div>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Crown className="h-5 w-5 text-amber-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-white transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-lg">
        Escolher Plano
      </button>
    </div>
  </Card>
);

export const Premium = () => {
  return (
    <div className="min-h-screen space-y-16 py-12">
      {/* Banner Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 p-12 text-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-20" />
        <div className="relative z-10">
          <div className="mb-6 flex justify-center">
            <Crown className="h-16 w-16 text-amber-100" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Seja Premium com AKALIBRE
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-amber-100">
            Desbloqueie ferramentas exclusivas e leve sua produtividade a um novo patamar.
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
      <div className="rounded-xl bg-gradient-to-r from-orange-100 to-amber-100 p-12 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Pronto para transformar sua produtividade?
        </h2>
        <p className="mb-8 text-gray-600">Experimente AKALIBRE Premium agora.</p>
        <div className="flex justify-center space-x-4">
          <PremiumButton />
          <button className="rounded-lg border border-amber-300 bg-white px-8 py-3 font-semibold text-amber-600 transition-all duration-300 hover:bg-amber-50">
            Começar Teste Gratuito
          </button>
        </div>
      </div>
    </div>
  );
};