import { useAuthStore } from "@/store/authStore";
import { Link } from "react-router-dom";
import { Crown, Plus, Filter, Navigation2 } from "lucide-react";

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 animate-fade-in"
          >
            <div className="w-8 h-8 bg-akaflow-purple rounded-lg flex items-center justify-center">
              <Navigation2 className="w-5 h-5 text-white transform -rotate-45" />
            </div>
            <span className="text-2xl font-logo font-bold bg-gradient-to-r from-akaflow-purple to-akaflow-aqua bg-clip-text text-transparent">
              Akaflow
            </span>
          </Link>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <button className="nav-link">
                  <Plus className="w-5 h-5 text-akaflow-purple" />
                </button>
                <button className="nav-link">
                  <Filter className="w-5 h-5 text-akaflow-purple" />
                </button>
                <Link to="/premium-settings" className="nav-link">
                  <div className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-premium-gold-dark" />
                    <span className="font-medium">Premium</span>
                  </div>
                </Link>
                <button 
                  onClick={logout} 
                  className="px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Sair
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="px-4 py-2 bg-akaflow-purple text-white rounded-lg hover:bg-akaflow-purple-dark transition-colors"
              >
                Entrar
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};