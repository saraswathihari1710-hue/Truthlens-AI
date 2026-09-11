import React, { useState } from 'react';
import { INDIAN_LANGUAGES, LanguageOption } from '../i18n/languages';
import {
  ShieldAlert,
  Globe,
  Radio,
  Search,
  ChevronDown,
  Sparkles,
  Layers,
  Network,
  Image as ImageIcon,
  CheckCircle2,
  FileSearch,
  Plus
} from 'lucide-react';

interface NavbarProps {
  currentLanguage: LanguageOption;
  onSelectLanguage: (lang: LanguageOption) => void;
  activeTab: 'verify' | 'dossier' | 'graph' | 'medialab' | 'radar';
  onSelectTab: (tab: 'verify' | 'dossier' | 'graph' | 'medialab' | 'radar') => void;
  onOpenCopilot: () => void;
  onNewInvestigation: () => void;
  hasActiveReport: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  onSelectLanguage,
  activeTab,
  onSelectTab,
  onOpenCopilot,
  onNewInvestigation,
  hasActiveReport,
}) => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [langSearch, setLangSearch] = useState('');

  const filteredLanguages = INDIAN_LANGUAGES.filter(
    (l) =>
      l.name.toLowerCase().includes(langSearch.toLowerCase()) ||
      l.nativeName.toLowerCase().includes(langSearch.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-6">
          <div
            onClick={onNewInvestigation}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            {/* Glowing Logo Icon */}
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
                <ShieldAlert className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-black text-lg tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors">
                  TRUTHLENS<span className="text-cyan-400">.AI</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  v2.6
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase hidden sm:block">
                Verify Before You Believe
              </p>
            </div>
          </div>

          {/* Navigation Items (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
            <button
              onClick={() => onSelectTab('verify')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'verify'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <FileSearch className="w-3.5 h-3.5" />
              Verify Engine
            </button>

            {hasActiveReport && (
              <button
                onClick={() => onSelectTab('dossier')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === 'dossier'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Intelligence Dossier
              </button>
            )}

            <button
              onClick={() => onSelectTab('graph')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'graph'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              Evidence Graph
            </button>

            <button
              onClick={() => onSelectTab('medialab')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'medialab'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              Media Lab
            </button>

            <button
              onClick={() => onSelectTab('radar')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'radar'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-rose-400" />
              Misinfo Radar
            </button>
          </nav>
        </div>

        {/* Right side: Language Selector & Copilot Trigger */}
        <div className="flex items-center gap-3">
          {/* Indian Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">{currentLanguage.name}</span>
              <span className="text-cyan-400 font-semibold">{currentLanguage.nativeName}</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </button>

            {/* Language dropdown menu */}
            {langDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-72 max-h-96 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                  {/* Search input in dropdown */}
                  <div className="p-2.5 border-b border-slate-800 bg-slate-950">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search all 22 Indian languages..."
                        value={langSearch}
                        onChange={(e) => setLangSearch(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-500 placeholder:text-slate-500"
                        autoFocus
                      />
                    </div>
                  </div>

                  {/* Languages list */}
                  <div className="flex-1 overflow-y-auto p-1.5 space-y-0.5 max-h-64">
                    {filteredLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onSelectLanguage(lang);
                          setLangDropdownOpen(false);
                          setLangSearch('');
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors font-mono ${
                          currentLanguage.code === lang.code
                            ? 'bg-cyan-500 text-slate-950 font-bold'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{lang.name}</span>
                          <span className={`text-[11px] ${currentLanguage.code === lang.code ? 'text-slate-950' : 'text-cyan-400'}`}>
                            ({lang.nativeName})
                          </span>
                        </div>
                        <span className="text-[10px] uppercase text-slate-500">
                          {lang.code}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="p-2 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-400 text-center font-mono">
                    Official 8th Schedule + Pan-Indian Coverage
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Copilot Action Button */}
          <button
            onClick={onOpenCopilot}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold font-mono text-xs shadow-lg shadow-cyan-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Copilot</span>
          </button>
        </div>
      </div>
    </header>
  );
};
