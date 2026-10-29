import { useState, useEffect, useMemo } from 'react';
import { Topic, Language } from './types';
import { allTopics } from './data/topics';
import { translations } from './data/translations';
import { soundManager } from './utils/audio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TopicCard } from './components/TopicCard';
import { TopicDetailModal } from './components/TopicDetailModal';
import { TimelineSection } from './components/TimelineSection';
import { ScholarsGallery } from './components/ScholarsGallery';
import { GrandQuizModal } from './components/GrandQuizModal';
import { Footer } from './components/Footer';
import { Search, Filter, Heart, Sparkles, BookOpen } from 'lucide-react';

export default function App() {
  // Detect language from localStorage or browser preferences
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('econ_lang') as Language;
    if (saved && ['uz', 'ru', 'en'].includes(saved)) {
      return saved;
    }
    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ru')) return 'ru';
      if (browserLang.startsWith('en')) return 'en';
    }
    return 'uz';
  });

  // Detect theme from localStorage or system preference
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('econ_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [isSoundOn, setIsSoundOn] = useState<boolean>(() => soundManager.isEnabled());

  // Stored read topic IDs
  const [readTopics, setReadTopics] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('econ_read_topics');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Stored favorite topic IDs
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('econ_favorite_topics');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filter and search states
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'ancient' | 'classical' | 'marxist' | 'modern' | 'uzbekistan' | 'favorites'>('all');

  // Modals
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isGrandQuizOpen, setIsGrandQuizOpen] = useState(false);

  // Sync theme changes with DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('econ_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Sync language changes
  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('econ_lang', newLang);
  };

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  const handleSoundToggle = () => {
    const newVal = soundManager.toggle();
    setIsSoundOn(newVal);
  };

  // Toggle read
  const handleToggleRead = (id: number) => {
    setReadTopics((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('econ_read_topics', JSON.stringify(updated));
      return updated;
    });
  };

  // Toggle favorite
  const handleToggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('econ_favorite_topics', JSON.stringify(updated));
      return updated;
    });
  };

  // Filter topics
  const filteredTopics = useMemo(() => {
    return allTopics.filter((topic) => {
      // 1. Text search
      const query = searchQuery.toLowerCase().trim();
      if (query) {
        const matchesTitle = topic.title[lang].toLowerCase().includes(query);
        const matchesDesc = topic.shortDesc[lang].toLowerCase().includes(query);
        const matchesScholars = topic.scholarsSummary[lang].toLowerCase().includes(query);
        const matchesKeyTerms = topic.keyTerms.some((k) =>
          k.term[lang].toLowerCase().includes(query)
        );
        if (!matchesTitle && !matchesDesc && !matchesScholars && !matchesKeyTerms) {
          return false;
        }
      }

      // 2. Category filter
      if (activeFilter === 'favorites') {
        return favorites.includes(topic.id);
      }
      if (activeFilter === 'ancient') {
        return topic.id === 1 || topic.id === 2;
      }
      if (activeFilter === 'classical') {
        return topic.id >= 3 && topic.id <= 7;
      }
      if (activeFilter === 'marxist') {
        return topic.id >= 8 && topic.id <= 10;
      }
      if (activeFilter === 'modern') {
        return topic.id >= 11 && topic.id <= 14;
      }
      if (activeFilter === 'uzbekistan') {
        return topic.id === 15;
      }

      return true;
    });
  }, [searchQuery, activeFilter, lang, favorites]);

  // Navigate next/prev inside modal
  const handlePrevTopic = () => {
    if (!selectedTopic) return;
    const currentIndex = allTopics.findIndex((t) => t.id === selectedTopic.id);
    if (currentIndex > 0) {
      setSelectedTopic(allTopics[currentIndex - 1]);
    }
  };

  const handleNextTopic = () => {
    if (!selectedTopic) return;
    const currentIndex = allTopics.findIndex((t) => t.id === selectedTopic.id);
    if (currentIndex < allTopics.length - 1) {
      setSelectedTopic(allTopics[currentIndex + 1]);
    }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {/* Sticky Glass Navbar */}
      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
        isDark={isDark}
        onThemeToggle={handleThemeToggle}
        isSoundOn={isSoundOn}
        onSoundToggle={handleSoundToggle}
        readCount={readTopics.length}
        totalTopics={allTopics.length}
        onOpenGrandQuiz={() => setIsGrandQuizOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onStartLearning={() => {
            const el = document.getElementById('topics');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenGrandQuiz={() => setIsGrandQuizOpen(true)}
        />

        {/* Topics Section */}
        <section id="topics" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>15 Fundamental Bob</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                {t.navTopics}
              </h2>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Interactive Filter Tabs (Segmented Controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs">
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveFilter('all');
              }}
              className={`px-3.5 py-2 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeFilter === 'all'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>{t.filterAll} (15)</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setActiveFilter('ancient');
              }}
              className={`px-3.5 py-2 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'ancient'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {t.filterAncient}
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setActiveFilter('classical');
              }}
              className={`px-3.5 py-2 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'classical'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {t.filterClassical}
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setActiveFilter('marxist');
              }}
              className={`px-3.5 py-2 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'marxist'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {t.filterMarxistNeoclassical}
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setActiveFilter('modern');
              }}
              className={`px-3.5 py-2 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'modern'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {t.filterModern}
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setActiveFilter('uzbekistan');
              }}
              className={`px-3.5 py-2 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'uzbekistan'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {t.filterUzbekistan}
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setActiveFilter('favorites');
              }}
              className={`px-3.5 py-2 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeFilter === 'favorites'
                  ? 'bg-rose-500 text-white font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>{t.favorited} ({favorites.length})</span>
            </button>
          </div>

          {/* Topics Grid */}
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  lang={lang}
                  isRead={readTopics.includes(topic.id)}
                  isFavorite={favorites.includes(topic.id)}
                  onToggleRead={handleToggleRead}
                  onToggleFavorite={handleToggleFavorite}
                  onSelect={(t) => setSelectedTopic(t)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
              <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <p className="text-slate-400 text-sm">
                {t.noResults}
              </p>
            </div>
          )}
        </section>

        {/* Timeline Section */}
        <TimelineSection
          lang={lang}
          onSelectTopicById={(topicId) => {
            const found = allTopics.find((t) => t.id === topicId);
            if (found) setSelectedTopic(found);
          }}
        />

        {/* Scholars Gallery */}
        <ScholarsGallery
          lang={lang}
          onSelectTopicById={(topicId) => {
            const found = allTopics.find((t) => t.id === topicId);
            if (found) setSelectedTopic(found);
          }}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Topic Detail Modal */}
      {selectedTopic && (
        <TopicDetailModal
          topic={selectedTopic}
          lang={lang}
          onClose={() => setSelectedTopic(null)}
          onPrev={handlePrevTopic}
          onNext={handleNextTopic}
          isRead={readTopics.includes(selectedTopic.id)}
          onToggleRead={handleToggleRead}
          isFirst={selectedTopic.id === 1}
          isLast={selectedTopic.id === allTopics.length}
        />
      )}

      {/* Grand Comprehensive Exam Modal */}
      {isGrandQuizOpen && (
        <GrandQuizModal
          topics={allTopics}
          lang={lang}
          onClose={() => setIsGrandQuizOpen(false)}
        />
      )}
    </div>
  );
}
