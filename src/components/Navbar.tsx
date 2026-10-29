import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { soundManager } from '../utils/audio';
import { Sun, Moon, Volume2, VolumeX, BookOpen, Award } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  isDark: boolean;
  onThemeToggle: () => void;
  isSoundOn: boolean;
  onSoundToggle: () => void;
  readCount: number;
  totalTopics: number;
  onOpenGrandQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  isDark,
  onThemeToggle,
  isSoundOn,
  onSoundToggle,
  readCount,
  totalTopics,
  onOpenGrandQuiz,
}) => {
  const t = translations[lang];
  const progressPercent = Math.round((readCount / totalTopics) * 100);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/85 dark:bg-slate-950/85 border-b border-slate-800/80 transition-colors">
      {/* Top progress indicator */}
      <div className="w-full bg-slate-900 h-1">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-sky-400 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
          title={`${t.progressTitle}: ${progressPercent}%`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={() => soundManager.playClick()}
          className="flex items-center gap-2 text-lg sm:text-xl font-display font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center font-serif text-base shadow-sm group-hover:scale-105 transition-transform">
            🏛️
          </span>
          <span className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">
            {t.siteTitle}
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a
            href="#topics"
            onClick={() => soundManager.playClick()}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            {t.navTopics}
          </a>
          <a
            href="#timeline"
            onClick={() => soundManager.playClick()}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            {t.navTimeline}
          </a>
          <a
            href="#scholars"
            onClick={() => soundManager.playClick()}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            {t.navScholars}
          </a>
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenGrandQuiz();
            }}
            className="flex items-center gap-1.5 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 text-amber-400/90"
          >
            <Award className="w-4 h-4" />
            <span>{t.navQuiz}</span>
          </button>
        </nav>

        {/* Zone 3: Interactive controls (Language, Theme, Sound, Progress) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Progress badge */}
          <div
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700/60 text-xs text-slate-300"
            title={`${readCount} / ${totalTopics} ${t.readCount}`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono tabular-nums">{progressPercent}%</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              onSoundToggle();
            }}
            className="p-2 rounded-lg text-slate-300 hover:text-amber-300 hover:bg-slate-800 transition-colors"
            title={isSoundOn ? t.audioOn : t.audioOff}
            aria-label={isSoundOn ? t.audioOn : t.audioOff}
          >
            {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              soundManager.playClick();
              onThemeToggle();
            }}
            className="p-2 rounded-lg text-slate-300 hover:text-amber-300 hover:bg-slate-800 transition-colors"
            title={t.themeToggle}
            aria-label={t.themeToggle}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-700/70 rounded-lg p-0.5 text-xs font-semibold">
            {(['uz', 'ru', 'en'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => {
                  soundManager.playClick();
                  onLanguageChange(l);
                }}
                className={`px-2 py-1 rounded transition-colors uppercase ${
                  lang === l
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
