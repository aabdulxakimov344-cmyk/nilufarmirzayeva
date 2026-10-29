import React, { useState, useEffect } from 'react';
import { Topic, Language } from '../types';
import { translations } from '../data/translations';
import { soundManager } from '../utils/audio';
import { ScholarAvatar } from './ScholarAvatar';
import {
  X,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Award,
  Sparkles
} from 'lucide-react';

interface TopicDetailModalProps {
  topic: Topic;
  lang: Language;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  isRead: boolean;
  onToggleRead: (id: number) => void;
  isFirst: boolean;
  isLast: boolean;
}

export const TopicDetailModal: React.FC<TopicDetailModalProps> = ({
  topic,
  lang,
  onClose,
  onPrev,
  onNext,
  isRead,
  onToggleRead,
  isFirst,
  isLast
}) => {
  const t = translations[lang];

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<Record<number, boolean>>({});

  // Reset quiz on topic change
  useEffect(() => {
    setSelectedAnswers({});
    setSubmittedQuiz({});
  }, [topic.id]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && !isFirst) {
        onPrev();
      } else if (e.key === 'ArrowRight' && !isLast) {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, isFirst, isLast]);

  const handleSelectOption = (qIndex: number, optIndex: number) => {
    if (submittedQuiz[qIndex]) return;
    soundManager.playClick();
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleCheckQuestion = (qIndex: number) => {
    const selected = selectedAnswers[qIndex];
    if (selected === undefined) return;
    setSubmittedQuiz((prev) => ({ ...prev, [qIndex]: true }));
    if (selected === topic.quiz[qIndex].correctIndex) {
      soundManager.playCorrect();
    } else {
      soundManager.playIncorrect();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-6 text-slate-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded">
              {topic.numberStr}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {topic.period[lang]}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundManager.playClick();
                onToggleRead(topic.id);
              }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition-colors ${
                isRead
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-amber-400/50'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isRead ? t.markedAsRead : t.markAsRead}</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title={t.close}
              aria-label={t.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Headline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
              {topic.title[lang]}
            </h2>
            <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">
              {topic.shortDesc[lang]}
            </p>
          </div>

          {/* Scholars Profiles */}
          <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>{t.scholar}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topic.scholars.map((scholar) => (
                <ScholarAvatar
                  key={scholar.id}
                  scholar={scholar}
                  lang={lang}
                  size="md"
                  showDetails={true}
                />
              ))}
            </div>
          </div>

          {/* Detailed Scientific Content (250-350+ words) */}
          <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-300">
            {/* Introduction */}
            <div>
              <h4 className="text-base font-display font-semibold text-amber-300 mb-2">
                1. Kirish va Nazariy Asos
              </h4>
              <p>{topic.detail.introduction[lang]}</p>
            </div>

            {/* Historical Context */}
            <div>
              <h4 className="text-base font-display font-semibold text-amber-300 mb-2">
                2. {t.historicalContext}
              </h4>
              <p>{topic.detail.historicalContext[lang]}</p>
            </div>

            {/* Core Ideas */}
            <div>
              <h4 className="text-base font-display font-semibold text-amber-300 mb-2">
                3. {t.coreIdeas}
              </h4>
              <ul className="space-y-2 list-disc list-inside text-slate-300">
                {topic.detail.coreIdeas.map((idea, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {idea[lang]}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scientific and Practical Significance */}
            <div>
              <h4 className="text-base font-display font-semibold text-amber-300 mb-2">
                4. {t.significance}
              </h4>
              <p>{topic.detail.significance[lang]}</p>
            </div>
          </div>

          {/* Key Concepts (3-5 terms) */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{t.keyConcepts}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {topic.keyTerms.map((termItem, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="font-semibold text-amber-300 text-xs sm:text-sm">
                    {termItem.term[lang]}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 leading-normal">
                    {termItem.definition[lang]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Famous Works */}
          {topic.famousWorks.length > 0 && (
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>{t.famousWorks}</span>
              </h3>
              <div className="space-y-3">
                {topic.famousWorks.map((work, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-4 p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div>
                      <div className="font-semibold text-sm text-slate-200">
                        {work.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {work.author} {work.year ? `(${work.year})` : ''}
                      </div>
                      <div className="text-xs text-slate-300 mt-1">
                        {work.description[lang]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interesting Fact Callout */}
          <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {t.interestingFact}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
                {topic.interestingFact[lang]}
              </p>
            </div>
          </div>

          {/* Mini-Quiz (3 questions) */}
          <div className="pt-6 border-t border-slate-800">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-display font-bold text-white">
                {t.miniQuizTitle}
              </h3>
            </div>

            <div className="space-y-6">
              {topic.quiz.map((q, qIndex) => {
                const selectedOpt = selectedAnswers[qIndex];
                const isSubmitted = submittedQuiz[qIndex];
                const isCorrect = selectedOpt === q.correctIndex;

                return (
                  <div
                    key={qIndex}
                    className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3"
                  >
                    <div className="font-medium text-sm sm:text-base text-slate-100">
                      <span className="text-amber-400 font-mono font-bold mr-1.5">
                        {qIndex + 1}.
                      </span>
                      {q.question[lang]}
                    </div>

                    {/* Options list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {q.options[lang].map((opt, optIndex) => {
                        let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';

                        if (selectedOpt === optIndex) {
                          btnStyle = 'bg-amber-500/20 border-amber-500 text-amber-200';
                        }

                        if (isSubmitted) {
                          if (optIndex === q.correctIndex) {
                            btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-200';
                          } else if (selectedOpt === optIndex && !isCorrect) {
                            btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-200';
                          }
                        }

                        return (
                          <button
                            key={optIndex}
                            disabled={isSubmitted}
                            onClick={() => handleSelectOption(qIndex, optIndex)}
                            className={`p-3 rounded-lg border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-2 ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isSubmitted && optIndex === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            )}
                            {isSubmitted && selectedOpt === optIndex && !isCorrect && (
                              <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Check button & Feedback */}
                    <div className="pt-2 flex items-center justify-between gap-3">
                      {!isSubmitted ? (
                        <button
                          disabled={selectedOpt === undefined}
                          onClick={() => handleCheckQuestion(qIndex)}
                          className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                            selectedOpt !== undefined
                              ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                          }`}
                        >
                          {t.checkAnswer}
                        </button>
                      ) : (
                        <div
                          className={`text-xs font-semibold flex items-center gap-1.5 ${
                            isCorrect ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" />
                              <span>{t.correct}</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4" />
                              <span>
                                {t.incorrect} «{q.options[lang][q.correctIndex]}»
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Explanation */}
                    {isSubmitted && (
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                        <span className="font-semibold text-amber-400">{t.explanation} </span>
                        {q.explanation[lang]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Bottom Navigation */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between gap-4 sticky bottom-0 z-20">
          <button
            disabled={isFirst}
            onClick={() => {
              soundManager.playClick();
              onPrev();
            }}
            className={`flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-lg border transition-colors ${
              !isFirst
                ? 'border-slate-700 hover:border-amber-400 text-slate-200'
                : 'border-slate-800 text-slate-600 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{t.prevTopic}</span>
          </button>

          <span className="text-xs text-slate-400 font-mono">
            {topic.id} / 15
          </span>

          <button
            disabled={isLast}
            onClick={() => {
              soundManager.playClick();
              onNext();
            }}
            className={`flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-lg border transition-colors ${
              !isLast
                ? 'border-slate-700 hover:border-amber-400 text-slate-200'
                : 'border-slate-800 text-slate-600 cursor-not-allowed'
            }`}
          >
            <span className="hidden sm:inline">{t.nextTopic}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
