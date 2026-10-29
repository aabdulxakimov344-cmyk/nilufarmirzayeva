import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getAllScholars } from '../data/topics';
import { ScholarAvatar } from './ScholarAvatar';
import { soundManager } from '../utils/audio';
import { Users, Search } from 'lucide-react';

interface ScholarsGalleryProps {
  lang: Language;
  onSelectTopicById: (topicId: number) => void;
}

export const ScholarsGallery: React.FC<ScholarsGalleryProps> = ({
  lang,
  onSelectTopicById
}) => {
  const t = translations[lang];
  const allScholars = getAllScholars();
  const [scholarSearch, setScholarSearch] = useState('');

  const filteredScholars = allScholars.filter((s) => {
    const query = scholarSearch.toLowerCase().trim();
    if (!query) return true;
    return (
      s.name.toLowerCase().includes(query) ||
      s.country[lang].toLowerCase().includes(query) ||
      s.title[lang].toLowerCase().includes(query)
    );
  });

  return (
    <section id="scholars" className="py-16 md:py-24 bg-[#080d1a] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>25+ Buyuk Tafakkur Sohibi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            {t.scholarsTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.scholarsSubtitle}
          </p>

          {/* Search Scholar input */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={scholarSearch}
              onChange={(e) => setScholarSearch(e.target.value)}
              placeholder="Olim ismi yoki davlati..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/60 transition-colors"
            />
          </div>
        </div>

        {/* Scholars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholars.map((scholar) => (
            <div
              key={scholar.id}
              onClick={() => {
                soundManager.playClick();
                onSelectTopicById(scholar.topicId);
              }}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/50 hover:bg-slate-900 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <ScholarAvatar
                  scholar={scholar}
                  lang={lang}
                  size="lg"
                  showDetails={true}
                />
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="text-slate-500">Mavzu #{scholar.topicId}</span>
                <span className="text-amber-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                  Mavzuni ochish &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
