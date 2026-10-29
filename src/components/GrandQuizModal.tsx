import React, { useState, useEffect } from 'react';
import { Topic, Language, QuizQuestion } from '../types';
import { translations } from '../data/translations';
import { soundManager } from '../utils/audio';
import { X, Award, CheckCircle2, XCircle, RotateCcw, ArrowRight } from 'lucide-react';

interface GrandQuizModalProps {
  topics: Topic[];
  lang: Language;
  onClose: () => void;
}

interface SelectedQuizItem {
  question: QuizQuestion;
  topicTitle: string;
}

export const GrandQuizModal: React.FC<GrandQuizModalProps> = ({
  topics,
  lang,
  onClose
}) => {
  const t = translations[lang];

  const [questions, setQuestions] = useState<SelectedQuizItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Initialize 10 random questions from across all topics
  const startQuiz = () => {
    const pool: SelectedQuizItem[] = [];
    topics.forEach((topic) => {
      topic.quiz.forEach((q) => {
        pool.push({
          question: q,
          topicTitle: topic.title[lang]
        });
      });
    });

    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);

    setQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswers(new Array(selected.length).fill(-1));
    setIsCompleted(false);
  };

  useEffect(() => {
    startQuiz();
  }, [lang]);

  const handleSelect = (optionIndex: number) => {
    if (isCompleted) return;
    soundManager.playClick();
    const updated = [...selectedAnswers];
    updated[currentIndex] = optionIndex;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    soundManager.playClick();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Finished
      setIsCompleted(true);
      const score = calculateScore();
      if (score >= 8) {
        soundManager.playCelebration();
      } else if (score >= 5) {
        soundManager.playCorrect();
      } else {
        soundManager.playIncorrect();
      }
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.question.correctIndex) {
        score++;
      }
    });
    return score;
  };

  if (questions.length === 0) return null;

  const currentQ = questions[currentIndex];
  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-6 text-slate-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="font-display font-bold text-base sm:text-lg text-white">
              {t.grandQuizTitle}
            </h3>
          </div>
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {!isCompleted ? (
            <div className="space-y-6">
              {/* Question Progress bar */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>
                  {t.questionNumber} {currentIndex + 1} {t.of} {questions.length}
                </span>
                <span className="text-amber-400 font-medium">
                  {currentQ.topicTitle}
                </span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-400 h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Title */}
              <h4 className="text-lg sm:text-xl font-display font-semibold text-white leading-relaxed">
                {currentQ.question.question[lang]}
              </h4>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQ.question.options[lang].map((opt, optIdx) => {
                  const isSelected = selectedAnswers[currentIndex] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(optIdx)}
                      className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-amber-500/20 border-amber-500 text-amber-200'
                          : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span>{opt}</span>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-amber-400 bg-amber-400' : 'border-slate-600'
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="pt-4 flex justify-end">
                <button
                  disabled={selectedAnswers[currentIndex] === -1}
                  onClick={handleNext}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                    selectedAnswers[currentIndex] !== -1
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <span>
                    {currentIndex === questions.length - 1 ? t.finishQuiz : t.nextQuestion}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-400 flex items-center justify-center mx-auto text-amber-400 shadow-xl">
                <Award className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {t.yourResult}
                </h3>
                <div className="text-4xl font-display font-extrabold text-amber-400 mt-2 tabular-nums">
                  {score} / {questions.length} ({percentage}%)
                </div>
                <p className="mt-3 text-sm text-slate-300 max-w-md mx-auto">
                  {score >= 8 ? t.excellent : score >= 5 ? t.good : t.keepLearning}
                </p>
              </div>

              {/* Review List */}
              <div className="text-left mt-8 space-y-4 max-h-60 overflow-y-auto p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                {questions.map((q, idx) => {
                  const userAnswer = selectedAnswers[idx];
                  const isCorrect = userAnswer === q.question.correctIndex;

                  return (
                    <div key={idx} className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/60 text-xs">
                      <div className="flex items-start gap-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <div className="font-medium text-slate-200">
                            {idx + 1}. {q.question.question[lang]}
                          </div>
                          {!isCorrect && (
                            <div className="text-rose-300 mt-1">
                              {t.incorrect} «{q.question.options[lang][q.question.correctIndex]}»
                            </div>
                          )}
                          <div className="text-slate-400 mt-1 italic">
                            {q.question.explanation[lang]}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    startQuiz();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-amber-500/20"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t.retakeGrandQuiz}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
