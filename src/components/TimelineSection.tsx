import React from 'react';
import { Language, TimelineEvent } from '../types';
import { translations } from '../data/translations';
import { timelineEvents } from '../data/timeline';
import { soundManager } from '../utils/audio';
import { Clock, ArrowUpRight } from 'lucide-react';

interface TimelineSectionProps {
  lang: Language;
  onSelectTopicById: (topicId: number) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  lang,
  onSelectTopicById
}) => {
  const t = translations[lang];

  return (
    <section id="timeline" className="py-16 md:py-24 bg-slate-950/60 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>2500+ Yillik Tarix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            {t.timelineTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.timelineSubtitle}
          </p>
        </div>

        {/* Timeline Rail */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-10">
          {timelineEvents.map((evt: TimelineEvent, idx: number) => (
            <div key={idx} className="relative pl-6 md:pl-10 group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-400 group-hover:scale-125 group-hover:bg-amber-400 transition-all shadow-sm" />

              {/* Year label on desktop floating to left */}
              <div className="md:absolute md:-left-32 md:top-1 md:w-24 md:text-right text-xs font-mono font-bold text-amber-400">
                {evt.year}
              </div>

              {/* Content Card */}
              <div
                onClick={() => {
                  soundManager.playClick();
                  onSelectTopicById(evt.topicId);
                }}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 hover:bg-slate-900 transition-all cursor-pointer group-hover:-translate-y-0.5 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs text-amber-400/90 font-semibold tracking-wider uppercase">
                    {evt.era[lang]}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {evt.scholar}
                  </span>
                </div>

                <h3 className="text-lg font-display font-semibold text-slate-100 group-hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>{evt.title[lang]}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {evt.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
