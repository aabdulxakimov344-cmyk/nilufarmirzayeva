export type Language = 'uz' | 'ru' | 'en';

export interface MultilingualString {
  uz: string;
  ru: string;
  en: string;
}

export interface Scholar {
  id: string;
  name: string;
  years: string;
  country: MultilingualString;
  portraitUrl: string;
  title: MultilingualString;
  quote: MultilingualString;
  majorWorks: string[];
}

export interface QuizQuestion {
  question: MultilingualString;
  options: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  correctIndex: number;
  explanation: MultilingualString;
}

export interface KeyTerm {
  term: MultilingualString;
  definition: MultilingualString;
}

export interface FamousWork {
  title: string;
  year?: string;
  author: string;
  description: MultilingualString;
}

export interface TopicDetail {
  introduction: MultilingualString;
  historicalContext: MultilingualString;
  coreIdeas: MultilingualString[];
  significance: MultilingualString;
}

export interface Topic {
  id: number;
  numberStr: string;
  title: MultilingualString;
  period: MultilingualString;
  scholarsSummary: MultilingualString;
  iconName: string;
  shortDesc: MultilingualString;
  scholars: Scholar[];
  detail: TopicDetail;
  keyTerms: KeyTerm[];
  famousWorks: FamousWork[];
  interestingFact: MultilingualString;
  quiz: QuizQuestion[];
}

export interface TimelineEvent {
  year: string;
  era: MultilingualString;
  title: MultilingualString;
  description: MultilingualString;
  topicId: number;
  scholar: string;
}
