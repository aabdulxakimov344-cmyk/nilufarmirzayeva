import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { soundManager } from '../utils/audio';
import { ArrowUp, Printer, Download } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  const handleScrollTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  const handleExportOfflineHtml = () => {
    soundManager.playClick();
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Iqtisodiy_Talimotlar_Tarixi.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center font-serif text-base">
              🏛️
            </span>
            <div>
              <div className="font-display font-bold text-white text-base">
                {t.siteTitle} — {t.siteSubtitle}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {t.allTopicsCount}
              </div>
            </div>
          </div>

          {/* Action Utilities */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title={t.printFriendly}
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>{t.printFriendly}</span>
            </button>

            <button
              onClick={handleExportOfflineHtml}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title={t.exportData}
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>{t.exportData}</span>
            </button>

            <button
              onClick={handleScrollTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-400 transition-colors"
              title={t.backToTop}
              aria-label={t.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="max-w-xl text-center sm:text-left">
            {t.footerText}
          </p>
          <p>
            &copy; {new Date().getFullYear()} {t.siteTitle}. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};
