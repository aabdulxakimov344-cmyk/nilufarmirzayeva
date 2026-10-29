import React from 'react';
import { Topic, Language } from '../types';
import { translations } from '../data/translations';
import { soundManager } from '../utils/audio';
import {
  Compass,
  Landmark,
  Coins,
  Wheat,
  Scale,
  TrendingUp,
  Users,
  Hammer,
  BarChart3,
  Maximize2,
  Activity,
  DollarSign,
  Briefcase,
  BrainCircuit,
  Globe,
  CheckCircle,
  Heart,
  ArrowRight
} from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  lang: Language;
  isRead: boolean;
  isFavorite: boolean;
  onToggleRead: (id: number) => void;
  onToggleFavorite: (id: number) => void;
  onSelect: (topic: Topic) => void;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Compass,
  Landmark,
  Coins,
  Wheat,
  Scale,
  TrendingUp,
  Users,
  Hammer,
  BarChart3,
  Maximize2,
  Activity,
  DollarSign,
  Briefcase,
  BrainCircuit,
  Globe
};

export const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  lang,
  isRead,
  isFavorite,
  onToggleRead,
  onToggleFavorite,
  onSelect
}) => {
  const t = translations[lang];
  const IconComponent = iconMap[topic.iconName] || Globe;

  return (
    <article
      onClick={() => {
        soundManager.playClick();
        onSelect(topic);
      }}
      className={`group relative rounded-2xl p-6 bg-slate-900/70 border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 ${
        isRead
          ? 'border-emerald-500/40 bg-slate-900/90'
          : 'border-slate-800 hover:border-amber-500/50'
      }`}
    >
      <div>
        {/* Card Header: Topic Number, Period, Actions */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
              {topic.numberStr}
            </span>
            <span className="text-xs text-slate-400 truncate max-w-[170px]">
              {topic.period[lang]}
            </span>
          </div>

          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            {/* Favorite button */}
            <button
              onClick={() => {
                soundManager.playClick();
                onToggleFavorite(topic.id);
              }}
              className={`p-1.5 rounded-lg hover:bg-slate-800 transition-colors ${
                isFavorite ? 'text-rose-400' : 'text-slate-500 hover:text-slate-300'
              }`}
              title={t.favorite}
              aria-label={t.favorite}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-400' : ''}`} />
            </button>

            {/* Read status toggle */}
            <button
              onClick={() => {
                soundManager.playClick();
                onToggleRead(topic.id);
              }}
              className={`p-1.5 rounded-lg hover:bg-slate-800 transition-colors ${
                isRead ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
              }`}
              title={isRead ? t.markedAsRead : t.markAsRead}
              aria-label={isRead ? t.markedAsRead : t.markAsRead}
            >
              <CheckCircle className={`w-4 h-4 ${isRead ? 'fill-emerald-400/20 text-emerald-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title & Icon */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-700/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 group-hover:scale-105 transition-transform">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-2">
              {topic.title[lang]}
            </h3>
          </div>
        </div>

        {/* Short description */}
        <p className="mt-3 text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
          {topic.shortDesc[lang]}
        </p>
      </div>

      {/* Card Footer: Scholars Summary & Action */}
      <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <div className="text-xs text-slate-400 truncate max-w-[210px]">
          <span className="text-slate-500">{t.scholar}: </span>
          <span className="text-slate-300 font-medium">{topic.scholarsSummary[lang]}</span>
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-0.5 transition-transform">
          <span>{t.viewDetail}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
