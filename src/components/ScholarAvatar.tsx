import React, { useState } from 'react';
import { Scholar, Language } from '../types';

interface ScholarAvatarProps {
  scholar: Scholar;
  lang: Language;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showDetails?: boolean;
}

export const ScholarAvatar: React.FC<ScholarAvatarProps> = ({
  scholar,
  lang,
  size = 'md',
  showDetails = false
}) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name: string) => {
    const parts = name.split(/[\s,]+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-24 h-24 text-lg',
    xl: 'w-32 h-32 text-2xl'
  };

  return (
    <div className={`flex ${showDetails ? 'items-start gap-4' : 'flex-col items-center'}`}>
      <div
        className={`relative ${sizeClasses[size]} shrink-0 rounded-full overflow-hidden border-2 border-[#d4af37]/40 shadow-md bg-gradient-to-br from-slate-800 to-slate-900 group`}
      >
        {!imageError && scholar.portraitUrl ? (
          <img
            src={scholar.portraitUrl}
            alt={scholar.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center font-display font-bold text-[#f3e5ab] bg-gradient-to-tr from-indigo-950 via-slate-900 to-amber-950/80 select-none">
            <span>{getInitials(scholar.name)}</span>
            <span className="text-[9px] tracking-wider font-sans font-normal opacity-70">
              {scholar.years.slice(0, 4)}
            </span>
          </div>
        )}
      </div>

      {showDetails && (
        <div className="flex-1 min-w-0">
          <h4 className="font-display font-semibold text-base text-slate-100 dark:text-slate-100 group-hover:text-amber-400 transition-colors">
            {scholar.name}
          </h4>
          <p className="text-xs text-amber-400/90 font-medium mt-0.5">
            {scholar.title[lang]}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-1">
            <span>{scholar.years}</span>
            <span aria-hidden="true">·</span>
            <span>{scholar.country[lang]}</span>
          </div>
          {scholar.quote && (
            <p className="text-xs italic text-slate-300/80 mt-2 pl-3 border-l-2 border-amber-500/30 line-clamp-2">
              «{scholar.quote[lang]}»
            </p>
          )}
        </div>
      )}
    </div>
  );
};
