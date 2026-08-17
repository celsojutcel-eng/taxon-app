import React from "react";
import { FolderKanban, PlusCircle } from "lucide-react";
import { TaxonLogo } from "./TaxonLogo";

interface HeaderProps {
  savedCount: number;
  onOpenSaved: () => void;
  onNewPlan: () => void;
  hasActivePlan: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  savedCount,
  onOpenSaved,
  onNewPlan,
  hasActivePlan,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand with TAXON Logo */}
        <div className="flex items-center space-x-3">
          <TaxonLogo size="sm" variant="dark" showTagline={true} />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {hasActivePlan && (
            <button
              onClick={onNewPlan}
              className="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition cursor-pointer"
              title="Criar novo plano de aula"
            >
              <PlusCircle className="w-4 h-4 mr-1.5 text-indigo-400" />
              <span className="hidden xs:inline">Novo Plano</span>
            </button>
          )}

          <button
            onClick={onOpenSaved}
            className="inline-flex items-center px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition cursor-pointer"
          >
            <FolderKanban className="w-4 h-4 mr-1.5" />
            <span>Meus Planos</span>
            {savedCount > 0 && (
              <span className="ml-2 px-1.5 py-0.2 rounded-full text-xs bg-indigo-950 text-indigo-200 font-bold border border-indigo-400/30">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
