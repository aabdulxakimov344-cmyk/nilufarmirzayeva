import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { soundManager } from '../utils/audio';
import { ArrowDown, Award, Sparkles, BookOpen } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onStartLearning: () => void;
  onOpenGrandQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onStartLearning,
  onOpenGrandQuiz,
}) => {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-radial from-slate-900 via-[#0a0e1a] to-[#06080f] border-b border-slate-800/60">
      {/* Floating economic ambient symbols */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="absolute top-[12%] left-[8%] text-3xl md:text-5xl font-mono text-amber-500/20 animate-float-slow">
          $
        </span>
        <span className="absolute top-[28%] right-[10%] text-4xl md:text-6xl font-mono text-sky-400/20 animate-float-medium">
          €
        </span>
        <span className="absolute bottom-[20%] left-[14%] text-3xl md:text-5xl font-mono text-amber-400/20 animate-float-fast">
          ₿
        </span>
        <span className="absolute top-[60%] right-[16%] text-4xl md:text-6xl text-emerald-400/15 animate-float-slow">
          📈
        </span>
        <span className="absolute top-[18%] left-[45%] text-2xl md:text-4xl text-amber-300/15 animate-float-medium">
          ⚖️
        </span>
        <span className="absolute bottom-[25%] right-[35%] text-3xl md:text-5xl text-purple-400/15 animate-float-fast">
          %
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Editorial kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.heroBadge}</span>
        </div>

        {/* Display headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white max-w-4xl mx-auto text-balance leading-tight">
          {t.heroTitle}
        </h1>

        {/* Lead subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed text-balance">
          {t.heroSubtitle}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              soundManager.playClick();
              onStartLearning();
            }}
            className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-semibold text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-slate-950" />
            <span>{t.startLearning}</span>
            <ArrowDown className="w-4 h-4 text-slate-950 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              onOpenGrandQuiz();
            }}
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base hover:border-amber-400/50 transition-all flex items-center gap-2 shadow-sm"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>{t.tryQuiz}</span>
          </button>
        </div>

        {/* Metrics strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-display font-bold text-amber-400 tabular-nums">
              15
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">
              {t.statsTopics}
            </div>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-display font-bold text-sky-400 tabular-nums">
              25+
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">
              {t.statsScholars}
            </div>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-display font-bold text-emerald-400 tabular-nums">
              2500+
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">
              {t.statsHistory}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
