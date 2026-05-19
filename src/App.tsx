/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Book, 
  Type, 
  Sparkles, 
  GraduationCap, 
  Info, 
  Menu, 
  X,
  ChevronRight,
  Music,
  Heart,
  Scroll,
  MessageCircle,
  Zap,
  Eye,
  Settings2,
  Users,
  Compass,
  Link as LinkIcon,
  Library,
  ChevronDown,
  HelpCircle,
  Wind,
  Coffee,
  BookOpen,
  Network,
  Clock
} from 'lucide-react';
import { 
  CONSONANTS, 
  VOWELS, 
  SUBSCRIPTS, 
  SUPERSCRIPTS, 
  PROVERBS, 
  READING_CONTENT,
  UMLAUT_RULES,
  SYLLABLE_TREE,
  CHAPTERS,
  NOUNS,
  PRONOUNS,
  GENITIVE_RULES,
  DEMONSTRATIVES,
  POSSESSIVE_PRONOUNS,
  GENITIVE_EXAMPLES,
  DATIVE_LOCATIVE,
  AGENTIVE_PRONOUNS,
  VERBS_TO_BE,
  EQUATIONAL_VERBS,
  EXISTENTIAL_VERBS,
  SPATIAL_PREPOSITIONS,
  INTERROGATIVE_WORDS,
  CHAPTER3_EXAMPLES,
  CHAPTER3_QUIZ,
  CH3_TAG_QUESTIONS,
  EXISTENTIAL_VERBS_THERE_IS,
  AUXILIARY_SUMMARY,
  CH4_COLORS,
  CH4_PERSONAL_ADJ,
  CH4_QUALITATIVE_ADJ,
  CH4_INTENSIFIERS,
  CH4_COMPARATIVES,
  CH4_COMPARATIVE_RULES,
  CH4_WORD_ORDER_EXAMPLES,
  CH4_EQUATIONAL_ADJ_EXAMPLES,
  CH4_NOMINALIZING,
  CH4_NUMBERS,
  CH4_FRACTIONS,
  CH4_DAYS_OF_WEEK,
  CH4_NUMBER_EXAMPLES,
  CH4_PERCENTAGE_EXAMPLES,
  CH4_QUANTIFIER_EXAMPLES,
  CH4_COMPARISON_EXAMPLES,
  CH4_ORDINALS,
  CH4_COLLECTIVES,
  CH4_MONTHS,
  CH4_TIME_EXAMPLES,
  CH4_TIME_VOCAB,
  CH5_VOLUNTARY_VERBS,
  CH5_AGENTIVE_RULES,
  CH5_PRONOUN_AGENTIVES,
  CH5_SPEAKING_VERBS,
  CH5_VERBALIZERS_BYED,
  CH5_VERBALIZERS_BGTANG,
  CH5_FIRST_PERSON_TENSES,
  CH5_PAST_INTRANS_EXAMPLES,
  CH5_PAST_TRANS_EXAMPLES,
  CH5_PRES_PERF_INT_EXAMPLES,
  CH5_PRES_PERF_UNINT_EXAMPLES,
  CH5_PRES_TENSE_EXAMPLES,
  CH5_FUT_TENSE_EXAMPLES,
  CH5_OTHERS_TENSES,
  CH5_OTHERS_PAST_WITNESSED,
  CH5_OTHERS_PAST_NOT_WITNESSED,
  CH5_OTHERS_PRES_PERF_WITNESSED,
  CH5_OTHERS_PRES_TENSE,
  CH5_OTHERS_FUT_TENSE,
  CH5_ADV_TENSES_1ST,
  CH5_ADV_1ST_EXAMPLES,
  CH5_ADV_TENSES_OTHERS,
  CH5_ADV_OTHERS_EXAMPLES,
  CH5_INTERROGATIVE_FORMS_2ND,
  CH5_INTERROGATIVE_2ND_EXAMPLES,
  CH5_INTERROGATIVE_FORMS_3RD,
  CH5_INTERROGATIVE_3RD_EXAMPLES,
  CH5_NEGATIVE_SUMMARY,
  CH5_PASSIVE_EXAMPLES,
  CH5_INVOLUNTARY_VERBS,
  CH5_INVOLUNTARY_EXAMPLES,
  CH5_NOMINALIZERS,
  CH6_IMPERATIVES,
  CH6_NEG_IMPERATIVES,
  CH6_REQUESTS,
  CH6_OFFERING,
  CH6_SUGGESTIONS,
  CH6_CAUSATIVES,
  CH6_INDIRECT_REQUESTS,
  CH7_DESIRES_NOUN,
  CH7_DESIRES_VERB,
  CH7_INTENTIONS,
  CH7_OBLIGATION,
  CH7_PROHIBITION,
  CH7_PERMISSION,
  CH7_HOPES,
  CH8_INFINITIVES,
  CH8_TEMPORAL,
  CH8_CONDITIONAL,
  CH8_CLAUSES,
  CH8_CONJUNCTIONS,
  CHAPTER1_QUIZ,
  CHAPTER2_QUIZ,
  CHAPTER4_QUIZ,
  CHAPTER5_QUIZ,
  CHAPTER6_QUIZ,
  CHAPTER7_QUIZ,
  CHAPTER8_QUIZ,
  CHAPTER9_QUIZ,
  CH9_PRESUMPTION_RULES,
  CH9_EVIDENTIALITY,
  CH9_PRAGMATICS,
  CH9_IDIOMS,
  CH9_QUOTATIONS,
  CHAPTER_HINTS
} from './constants.ts';

type Section = 'consonants' | 'vowels' | 'subscripts' | 'superscripts' | 'orthography' | 'reading' | 'quiz_ch1' | 'nouns' | 'pronouns' | 'particles' | 'quiz_ch2' | 'equational_verbs' | 'existential_verbs' | 'possession' | 'questions' | 'quiz_ch3' | 'adjectives' | 'numbers' | 'time' | 'verbs_intro' | 'verb_tenses_1st' | 'verb_tenses_others' | 'verb_advanced' | 'verb_interrogative' | 'verb_negative' | 'verb_passive' | 'verb_involuntary' | 'quiz_ch4' | 'quiz_ch5' | 'imperatives' | 'requests' | 'indirect_requests' | 'offering' | 'suggestions' | 'causatives' | 'situations' | 'quiz_ch6' | 'desires' | 'intentions' | 'obligation' | 'prohibition' | 'permission' | 'hopes' | 'quiz_ch7' | 'infinitives' | 'temporal' | 'conditional' | 'causal' | 'concessive' | 'purpose' | 'sequential' | 'conjunctions' | 'quiz_ch8' | 'evidentiality' | 'pragmatics' | 'idioms' | 'quotations' | 'quiz_ch9';

interface MasteryInfo {
  tib: string;
  eng: string;
  tone?: string;
  type?: string;
  vocab?: string[];
}

const gridContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } }
};
const gridItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('consonants');
  const [activeChapter, setActiveChapter] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MasteryInfo | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [revealedQuiz, setRevealedQuiz] = useState<Record<number, boolean>>({});
  const [visitedSections, setVisitedSections] = useState<Set<Section>>(new Set(['consonants']));
  const [revealAllReading, setRevealAllReading] = useState(false);

  const navigateTo = (section: Section) => {
    setActiveSection(section);
    setVisitedSections(prev => new Set([...prev, section]));
    setRevealAllReading(false);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const toggleQuiz = (index: number) => {
    setRevealedQuiz(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Syllable Builder State
  const [builderBase, setBuilderBase] = useState(CONSONANTS[0]);
  const [builderVowel, setBuilderVowel] = useState<any>(null);

  const composedSyllable = builderBase.tib.replace('་', '') + (builderVowel?.symbol || '');

  const SectionWrapper = ({ children, title, description }: { children: React.ReactNode, title: string, description?: string }) => (
    <motion.div
      key={activeSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto p-4 md:p-8"
    >
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3 text-brand-secondary/50 text-[10px] uppercase tracking-[0.3em] font-black">
          <div className="h-px w-8 bg-current" />
          <span>Chapter {activeChapter}</span>
          <div className="h-px w-8 bg-current" />
        </div>
        <h2 className="text-3xl font-bold text-brand-dark mb-2 tracking-tight">{title}</h2>
        {description && <p className="text-brand-dark/70 font-medium">{description}</p>}
      </div>
      {children}
    </motion.div>
  );

  const navItems: { id: Section; label: string; icon: any; chapter: number }[] = [
    { id: 'consonants', label: '30 Consonants', icon: Type, chapter: 1 },
    { id: 'vowels', label: 'The 4 Vowels', icon: Music, chapter: 1 },
    { id: 'subscripts', label: 'Subscripts', icon: ChevronRight, chapter: 1 },
    { id: 'superscripts', label: 'Superscripts', icon: GraduationCap, chapter: 1 },
    { id: 'orthography', label: 'Orthography', icon: Info, chapter: 1 },
    { id: 'reading', label: 'Reading Practice', icon: Scroll, chapter: 1 },
    { id: 'quiz_ch1', label: 'Chapter 1 Quiz', icon: HelpCircle, chapter: 1 },
    { id: 'nouns', label: 'Nouns', icon: Library, chapter: 2 },
    { id: 'pronouns', label: 'Pronouns', icon: Users, chapter: 2 },
    { id: 'particles', label: 'Particles', icon: LinkIcon, chapter: 2 },
    { id: 'quiz_ch2', label: 'Chapter 2 Quiz', icon: HelpCircle, chapter: 2 },
    { id: 'equational_verbs', label: 'Equational Verbs', icon: Zap, chapter: 3 },
    { id: 'existential_verbs', label: 'Location & Existence', icon: Compass, chapter: 3 },
    { id: 'possession', label: 'Possession', icon: Heart, chapter: 3 },
    { id: 'questions', label: 'Question Formats', icon: MessageCircle, chapter: 3 },
    { id: 'quiz_ch3', label: 'Chapter 3 Quiz', icon: HelpCircle, chapter: 3 },
    { id: 'adjectives', label: 'Adjectives & Comparison', icon: Sparkles, chapter: 4 },
    { id: 'numbers', label: 'Numbers & Quantifiers', icon: Zap, chapter: 4 },
    { id: 'time', label: 'Time & Dates', icon: Compass, chapter: 4 },
    { id: 'quiz_ch4', label: 'Chapter 4 Quiz', icon: HelpCircle, chapter: 4 },
    { id: 'verbs_intro', label: 'Verb Basics', icon: Zap, chapter: 5 },
    { id: 'verb_tenses_1st', label: '1st Person Tenses', icon: Heart, chapter: 5 },
    { id: 'verb_tenses_others', label: 'Others Tenses', icon: Users, chapter: 5 },
    { id: 'verb_advanced', label: 'Advanced Aspects', icon: Sparkles, chapter: 5 },
    { id: 'verb_involuntary', label: 'Involuntary Verbs', icon: Wind, chapter: 5 },
    { id: 'verb_interrogative', label: 'Interrogatives', icon: MessageCircle, chapter: 5 },
    { id: 'verb_negative', label: 'Negatives', icon: X, chapter: 5 },
    { id: 'verb_passive', label: 'Passive Voice', icon: Scroll, chapter: 5 },
    { id: 'quiz_ch5', label: 'Chapter 5 Quiz', icon: HelpCircle, chapter: 5 },
    { id: 'imperatives', label: 'Imperatives', icon: Zap, chapter: 6 },
    { id: 'requests', label: 'Polite Requests', icon: Heart, chapter: 6 },
    { id: 'indirect_requests', label: 'Reporting Requests', icon: Scroll, chapter: 6 },
    { id: 'offering', label: 'Offering/Shall I?', icon: Sparkles, chapter: 6 },
    { id: 'suggestions', label: 'Suggestions/Let\'s', icon: Compass, chapter: 6 },
    { id: 'causatives', label: 'Causatives', icon: Users, chapter: 6 },
    { id: 'situations', label: 'Situations', icon: Compass, chapter: 6 },
    { id: 'quiz_ch6', label: 'Chapter 6 Quiz', icon: HelpCircle, chapter: 6 },
    { id: 'desires', label: 'Desires (Want)', icon: Heart, chapter: 7 },
    { id: 'intentions', label: 'Intentions & Plans', icon: Compass, chapter: 7 },
    { id: 'obligation', label: 'Obligation & Must', icon: Zap, chapter: 7 },
    { id: 'prohibition', label: 'Prohibition', icon: X, chapter: 7 },
    { id: 'permission', label: 'Permission (Can I?)', icon: Eye, chapter: 7 },
    { id: 'hopes', label: 'Hopes & Wishes', icon: Wind, chapter: 7 },
    { id: 'quiz_ch7', label: 'Chapter 7 Quiz', icon: HelpCircle, chapter: 7 },
    { id: 'infinitives', label: '8.1 Infinitives & Gerunds', icon: Zap, chapter: 8 },
    { id: 'temporal', label: '8.2 Temporal Clauses', icon: Clock, chapter: 8 },
    { id: 'conditional', label: '8.3 Conditional Clauses', icon: HelpCircle, chapter: 8 },
    { id: 'causal', label: '8.4 Causal Clauses', icon: LinkIcon, chapter: 8 },
    { id: 'concessive', label: '8.5 Concessive Clauses', icon: Compass, chapter: 8 },
    { id: 'purpose', label: '8.6 Purpose Clauses', icon: Compass, chapter: 8 },
    { id: 'sequential', label: '8.7 Sequential Actions', icon: Compass, chapter: 8 },
    { id: 'conjunctions', label: '8.8 Conjunctions', icon: Network, chapter: 8 },
    { id: 'quiz_ch8', label: 'Chapter 8 Quiz', icon: HelpCircle, chapter: 8 },
    { id: 'evidentiality', label: '9.1 Evidentiality', icon: Eye, chapter: 9 },
    { id: 'pragmatics', label: '9.2 Pragmatics', icon: MessageCircle, chapter: 9 },
    { id: 'idioms', label: '9.3 Idioms', icon: Zap, chapter: 9 },
    { id: 'quotations', label: '9.4 Direct Speech', icon: BookOpen, chapter: 9 },
    { id: 'quiz_ch9', label: 'Chapter 9 Quiz', icon: HelpCircle, chapter: 9 },
  ];

  const filteredNavItems = navItems.filter(item => item.chapter === activeChapter);

  const changeChapter = (id: number) => {
    setActiveChapter(id);
    const firstSectionInChapter = navItems.find(i => i.chapter === id)?.id;
    if (firstSectionInChapter) navigateTo(firstSectionInChapter);
    setIsSidebarOpen(false);
  };

  const MasteryModal = () => (
    <AnimatePresence>
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-md"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#f5f5f0] w-full max-w-lg rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden border border-white/20"
          >
            <div className="p-12 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-primary/5 blur-3xl rounded-full group-hover:bg-brand-primary/10 transition-all" />
                <span className="relative tibetan-text text-[8rem] sm:text-[10rem] text-brand-dark leading-normal mb-4 select-none drop-shadow-xl block whitespace-nowrap">
                  {selectedItem.tib}
                </span>
              </div>
              
              <div className="space-y-2 mb-10">
                <h3 className="text-5xl font-black text-brand-dark uppercase tracking-tight">
                  {selectedItem.eng}
                </h3>
                {selectedItem.tone && (
                  <div className={`text-sm font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block ${
                    selectedItem.tone.includes('Low') ? 'bg-indigo-100 text-indigo-700' : 'bg-brand-muted text-brand-primary'
                  }`}>
                    {selectedItem.tone} Tone
                  </div>
                )}
              </div>

              {selectedItem.vocab && selectedItem.vocab.length > 0 && (
                <div className="w-full">
                  <div className="flex items-center justify-center gap-4 mb-6 text-brand-dark/20 uppercase tracking-[0.3em] text-[10px] font-black">
                    <div className="h-px flex-1 bg-current" />
                    <span>Linguistic Context</span>
                    <div className="h-px flex-1 bg-current" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedItem.vocab.map((v, i) => (
                      <div key={i} className="px-6 py-4 bg-white/60 rounded-3xl text-brand-dark border border-brand-muted/20 text-sm font-bold italic shadow-sm">
                        {v}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-8 right-8 p-3 rounded-full hover:bg-black/5 transition-all active:scale-95"
            >
              <X className="w-8 h-8 text-brand-dark/20" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const ReadingWord = ({ word, english }: { word: string; english: string; key?: React.Key }) => {
    const [showEnglish, setShowEnglish] = useState(false);
    const isRevealed = showEnglish || revealAllReading;
    return (
      <div
        className="inline-block relative cursor-help select-none"
        onClick={(e) => {
          e.stopPropagation();
          setShowEnglish(!showEnglish);
        }}
      >
        <motion.span
          animate={{ scale: isRevealed ? 1.1 : 1 }}
          className={`tibetan-text text-4xl block cursor-pointer transition-all duration-300 ${
            isRevealed ? 'text-brand-primary' : 'text-brand-dark hover:text-brand-primary/60'
          }`}
        >
          {word}
        </motion.span>
        <AnimatePresence>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-brand-dark text-white text-xs font-bold rounded-xl whitespace-nowrap z-10 shadow-xl"
            >
              {english}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-brand-dark" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  interface QuizItem { type: string; eng: string; tib: string; }
  const QuizSection = ({ items, baseIndex }: { items: QuizItem[], baseIndex: number }) => {
    const total = items.length;
    const revealedCount = items.filter((_, i) => revealedQuiz[baseIndex + i]).length;
    const allRevealed = revealedCount === total;

    const revealAll = () => {
      const next: Record<number, boolean> = { ...revealedQuiz };
      items.forEach((_, i) => { next[baseIndex + i] = true; });
      setRevealedQuiz(next);
    };
    const resetAll = () => {
      const next: Record<number, boolean> = { ...revealedQuiz };
      items.forEach((_, i) => { delete next[baseIndex + i]; });
      setRevealedQuiz(next);
    };

    return (
      <div>
        {/* Score header */}
        <div className="flex items-center justify-between mb-6 bg-white rounded-2xl px-6 py-4 border border-orange-50 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="text-sm font-black text-brand-dark">
              <span className="text-brand-primary text-lg">{revealedCount}</span>
              <span className="text-brand-dark/40"> / {total} revealed</span>
            </div>
            <div className="w-32 chapter-progress-track">
              <motion.div
                className="chapter-progress-fill"
                animate={{ width: `${(revealedCount / total) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={revealAll}
              disabled={allRevealed}
              className="text-[11px] font-black uppercase tracking-widest px-4 py-2 bg-brand-primary text-white rounded-xl disabled:opacity-30 hover:bg-brand-dark transition-colors"
            >
              Reveal All
            </button>
            <button
              onClick={resetAll}
              className="text-[11px] font-black uppercase tracking-widest px-4 py-2 bg-brand-muted/40 text-brand-dark rounded-xl hover:bg-brand-muted transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        <AnimatePresence>
          {allRevealed && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-5 rounded-2xl text-center shimmer-gold font-black text-lg border border-brand-secondary/30 bg-brand-secondary/5"
            >
              ✦ All answers revealed — excellent work! ✦
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          variants={gridContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((quiz, i) => {
            const isRevealed = !!revealedQuiz[baseIndex + i];
            return (
              <motion.div
                key={i}
                variants={gridItem}
                onClick={() => toggleQuiz(baseIndex + i)}
                className={`cursor-pointer bg-brand-dark p-8 rounded-[2.5rem] border shadow-2xl hover:scale-[1.02] transition-all relative overflow-hidden ${isRevealed ? 'border-green-500/20' : 'border-white/5'}`}
              >
                {isRevealed && (
                  <div className="absolute top-4 left-4 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                )}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full flex items-center justify-center font-black text-white/10">
                  {i + 1}
                </div>
                <div className="mb-6">
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-secondary/40 mb-2">{quiz.type}</p>
                  <p className="text-xl font-bold text-white/90 leading-tight">{quiz.eng}</p>
                </div>
                <div
                  className={`tibetan-text text-3xl text-brand-secondary transition-all duration-700 bg-white/5 p-6 rounded-2xl text-center shadow-inner ${!isRevealed ? 'quiz-hint-pulse' : ''}`}
                  style={{ filter: isRevealed ? 'blur(0px)' : 'blur(15px)', opacity: isRevealed ? 1 : 0.05 }}
                >
                  {quiz.tib}
                </div>
                {!isRevealed && (
                  <p className="text-center text-[10px] text-white/20 font-bold uppercase tracking-widest mt-3">tap to reveal</p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans bg-[#fdfcfb]">
      <MasteryModal />
      
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-orange-100 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Book className="text-brand-primary w-6 h-6" />
          <span className="font-bold text-brand-dark">Tibetan Mastery</span>
        </div>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2">
          <Menu className="w-6 h-6 text-brand-primary" />
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-brand-dark/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
        {(isSidebarOpen || window.innerWidth >= 768) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className={`fixed inset-0 z-50 flex w-72 flex-col bg-white border-r border-orange-50 shadow-xl md:relative md:shadow-none ${!isSidebarOpen && 'hidden md:flex'}`}
          >
            <div className="p-6 flex items-center justify-between md:mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary p-2 rounded-xl text-white">
                  <Book className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-lg font-black text-brand-dark leading-none">Tibetan Treasury</h1>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-primary mt-1">Grammar · Vol. I</p>
                </div>
              </div>
              <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2">
                <X className="w-6 h-6 text-brand-primary" />
              </button>
            </div>

            <div className="px-6 mb-6">
              <div className="bg-brand-muted/30 p-2 rounded-2xl border border-brand-primary/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 mb-2 px-2">Active Chapter</p>
                <div className="space-y-1">
                  {CHAPTERS.map(chapter => (
                    <button
                      key={chapter.id}
                      onClick={() => changeChapter(chapter.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                        activeChapter === chapter.id 
                        ? 'bg-white shadow-sm ring-1 ring-brand-primary/10' 
                        : 'hover:bg-white/50 text-brand-dark/50'
                      }`}
                    >
                      <div className="text-left">
                        <div className={`text-[10px] font-black uppercase ${activeChapter === chapter.id ? 'text-brand-primary' : 'text-brand-dark/40'}`}>CH. 0{chapter.id}</div>
                        <div className={`text-xs font-bold leading-tight ${activeChapter === chapter.id ? 'text-brand-dark' : 'text-brand-dark/60'}`}>{chapter.title}</div>
                      </div>
                      {activeChapter === chapter.id && <ChevronRight className="w-3 h-3 text-brand-primary" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-dark/30">Chapter Progress</span>
                <span className="text-[9px] font-black text-brand-primary">
                  {filteredNavItems.filter(i => visitedSections.has(i.id)).length}/{filteredNavItems.length}
                </span>
              </div>
              <div className="chapter-progress-track">
                <motion.div
                  className="chapter-progress-fill"
                  animate={{
                    width: `${(filteredNavItems.filter(i => visitedSections.has(i.id)).length / filteredNavItems.length) * 100}%`
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto">
              {filteredNavItems.map((item) => {
                const isVisited = visitedSections.has(item.id);
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      navigateTo(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-primary text-white shadow-lg shadow-orange-200'
                        : 'text-brand-dark/70 hover:bg-orange-50 hover:text-brand-primary'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-brand-primary/40'}`} />
                    <span className="font-medium flex-1 text-left">{item.label}</span>
                    {isVisited && !isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="p-6 mt-auto border-t border-orange-50 bg-orange-50/50">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-brand-secondary" />
                <span className="text-xs font-semibold text-brand-dark uppercase tracking-wider">{CHAPTER_HINTS[activeChapter]?.title || "Language Note"}</span>
              </div>
              <p className="text-xs text-brand-dark/60 leading-relaxed italic">
                {CHAPTER_HINTS[activeChapter]?.desc || "Keep practicing!"}
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto" onClick={() => { if(isSidebarOpen) setIsSidebarOpen(false); }}>
        <AnimatePresence mode="wait">
          {activeSection === 'consonants' && (
            <SectionWrapper 
              title="The Alphabet" 
              description="Click any character to view its deep mastery info. High tone (warm) vs Low tone (cool)."
            >
              <motion.div
                variants={gridContainer}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {CONSONANTS.map((c, idx) => (
                  <motion.div
                    key={idx}
                    variants={gridItem}
                    whileHover={{ scale: 1.07, y: -6 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedItem({ ...c, vocab: [] })}
                    className={`bg-white p-8 rounded-[2rem] border border-orange-50 shadow-sm flex flex-col items-center gap-4 group transition-all cursor-pointer relative overflow-hidden ${c.tone === 'Low' ? 'glow-card-cool' : 'glow-card-warm'}`}
                  >
                    <div className={`absolute top-0 right-0 w-20 h-20 opacity-5 -mr-10 -mt-10 rounded-full ${c.tone === 'Low' ? 'bg-indigo-600' : 'bg-brand-primary'}`} />
                    <div className={`absolute bottom-0 left-0 h-1 w-full opacity-20 ${c.tone === 'Low' ? 'bg-indigo-500' : 'bg-brand-secondary'}`} />
                    <span className="tibetan-text text-6xl text-brand-dark group-hover:text-brand-primary transition-colors drop-shadow-sm">{c.tib}</span>
                    <div className="text-center">
                      <p className="text-xl font-black text-brand-dark mb-1">{c.eng}</p>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                        c.tone === 'Low' ? 'bg-indigo-50 text-indigo-600' : 'bg-brand-muted text-brand-primary'
                      }`}>
                        {c.tone}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </SectionWrapper>
          )}

          {activeSection === 'vowels' && (
            <SectionWrapper 
              title="Vowel Synthesis" 
              description="The four vowel signs modify the root sound. Use the builder below to experiment."
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {VOWELS.map((v, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm flex flex-col gap-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-brand-dark mb-1">{v.name}</h3>
                          <p className="text-brand-dark/50 text-xs">Vowel sound: <span className="font-bold text-brand-primary">"{v.sound}"</span></p>
                        </div>
                        <span className="tibetan-text text-6xl text-brand-primary leading-normal p-2 bg-brand-muted/20 rounded-2xl whitespace-nowrap">{v.symbol}</span>
                      </div>
                      
                      <div className="bg-orange-50/30 p-4 rounded-xl">
                        <p className="text-[10px] font-bold text-brand-primary/40 uppercase mb-3 tracking-widest">Vocabulary Examples</p>
                        <div className="flex flex-wrap gap-2">
                          {v.vocab?.map((item, i) => (
                            <span onClick={() => setSelectedItem({ tib: item.split(' ')[0], eng: item.split(' ')[1] })} key={i} className="text-xs px-3 py-1.5 bg-white rounded-lg border border-brand-primary/10 text-brand-dark cursor-pointer hover:border-brand-primary transition-colors">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="sticky top-8 bg-brand-dark rounded-[2.5rem] p-8 text-white shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-8 -mt-8 rounded-full" />
                  <Settings2 className="w-8 h-8 text-brand-secondary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Syllable Builder</h3>
                  <p className="text-white/60 text-sm mb-8 leading-relaxed">Combine any consonant with a vowel to see the construction.</p>
                  
                  <div className="bg-white/10 p-8 rounded-3xl mb-8 flex items-center justify-center min-h-[360px] relative overflow-hidden backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 to-transparent" />
                    <div className="relative tibetan-text text-[8rem] sm:text-[14rem] text-brand-secondary leading-tight py-12 select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] whitespace-nowrap">
                      {composedSyllable}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">1. Select Root</p>
                        <p className="text-[10px] font-bold text-brand-secondary/60">{builderBase.eng} · {builderBase.tone} tone</p>
                      </div>
                      <div className="grid grid-cols-6 gap-1.5 max-h-36 overflow-y-auto pr-1">
                        {CONSONANTS.map((c, i) => (
                          <motion.button
                            key={i}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setBuilderBase(c)}
                            className={`w-full aspect-square rounded-xl tibetan-text text-lg flex items-center justify-center transition-all ${builderBase.tib === c.tib ? 'bg-brand-secondary text-brand-dark shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}
                          >
                            {c.tib}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">2. Select Vowel</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setBuilderVowel(null)}
                          className={`w-12 h-12 rounded-xl text-xs font-bold transition-all ${!builderVowel ? 'bg-brand-secondary text-brand-dark' : 'bg-white/10 text-white'}`}
                        >
                          NONE
                        </button>
                        {VOWELS.map((v, i) => (
                          <button 
                            key={i} 
                            onClick={() => setBuilderVowel(v)}
                            className={`w-12 h-12 rounded-xl tibetan-text text-2xl flex items-center justify-center transition-all ${builderVowel?.symbol === v.symbol ? 'bg-brand-secondary text-brand-dark' : 'bg-white/10 text-white hover:bg-white/20'}`}
                          >
                            {v.symbol}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'subscripts' && (
            <SectionWrapper title="Advanced Subscripts" description="Subscripts stack below the root letter, altering the sound entirely.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(SUBSCRIPTS).map(([key, data]) => (
                  <div key={key} className="bg-white p-10 rounded-[2.5rem] border border-orange-50 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-brand-muted/50 rounded-2xl flex items-center justify-center tibetan-text text-3xl text-brand-primary">
                        {key === 'wasur' ? 'ྭ' : data.consonants[0].tib.slice(-1)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-brand-dark">{data.name}</h3>
                        {(data as any).description && <p className="text-brand-dark/40 text-[10px] uppercase font-bold tracking-widest mt-1">{(data as any).description}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 mb-10">
                      {data.consonants.map((c, i) => (
                        <motion.div 
                          key={i} 
                          whileTap={{ scale: 0.90 }}
                          onClick={() => setSelectedItem({ ...c, vocab: data.vocab })}
                          className="flex flex-col items-center p-3 hover:bg-brand-muted/20 rounded-2xl transition-colors cursor-pointer"
                        >
                          <span className="tibetan-text text-3xl text-brand-dark mb-1">{c.tib}</span>
                          <span className="text-[10px] font-bold text-brand-primary uppercase tracking-tighter opacity-40 group-hover:opacity-100">{c.eng}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-orange-50/30 p-6 rounded-2xl">
                      <p className="text-[10px] font-bold text-brand-primary/40 uppercase mb-3 tracking-widest font-mono">Literature Context</p>
                      <div className="flex flex-wrap gap-2">
                        {data.vocab.map((v, i) => (
                          <span key={i} className="text-sm italic text-brand-dark/80 px-2 py-1 bg-white/60 rounded border border-orange-100">{v}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'superscripts' && (
            <SectionWrapper title="Head Letters" description="Superscripts (Head Letters) sit above the root. They are silent but raise the tone.">
              <div className="space-y-8">
                {Object.entries(SUPERSCRIPTS).map(([key, data]) => (
                  <div key={key} className="bg-white p-10 rounded-[3rem] border border-orange-50 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-6 mb-4">
                        <div className="w-16 h-16 bg-brand-dark text-white rounded-3xl flex items-center justify-center font-bold text-3xl shadow-xl shadow-brand-dark/10">
                          {data.name.charAt(0)}
                        </div>
                        <h3 className="text-3xl font-black text-brand-dark">{data.name}</h3>
                      </div>
                      <p className="text-brand-dark/60 leading-relaxed mb-6">
                        Silent superscript that enforces a <span className="text-brand-primary font-bold">High Tone</span> on the root consonant.
                      </p>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 mb-8">
                        {data.consonants.map((c, i) => (
                          <motion.div 
                            key={i} 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedItem({ 
                              tib: c, 
                              eng: `${data.name.split(' ')[0]} combination`, 
                              vocab: data.vocab 
                            })}
                            className="w-14 h-14 bg-brand-muted/10 rounded-2xl text-brand-dark tibetan-text text-2xl flex items-center justify-center border border-brand-muted/20 hover:scale-110 hover:border-brand-primary transition-all cursor-pointer whitespace-nowrap"
                          >
                            {c}
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] font-black text-brand-primary/40 uppercase tracking-widest mr-2 self-center">Roots</span>
                        {data.vocab.map((v, i) => (
                          <span key={i} className="px-3 py-1 bg-brand-muted/30 text-brand-dark text-xs rounded-lg font-medium cursor-pointer hover:bg-brand-primary hover:text-white transition-all">{v}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'orthography' && (
            <SectionWrapper title="Advanced Orthography" description="Deep dive into the structural rules of silent prefixes and complex suffix interactions.">
              <div className="space-y-12">
                {/* Umlaut Explorer */}
                <div className="bg-white rounded-[3rem] border border-orange-50 shadow-sm overflow-hidden p-10">
                   <div className="flex items-center gap-3 mb-10">
                      <Zap className="w-6 h-6 text-brand-secondary fill-brand-secondary" />
                      <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">The Umlaut Rules (Rules 5-10)</h3>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {UMLAUT_RULES.map((rule, idx) => (
                      <div key={idx} className="group relative">
                        <div className="p-6 h-full bg-brand-muted/10 rounded-3xl border border-brand-muted/30 hover:border-brand-primary transition-all">
                          <h4 className="text-sm font-black text-brand-primary uppercase mb-3 tracking-widest">{rule.title}</h4>
                          <p className="text-xs text-brand-dark/70 mb-6 leading-relaxed italic">{rule.description}</p>
                          
                          <div className="space-y-3">
                            {rule.examples.map((ex, i) => (
                              <div key={i} className="flex items-center justify-between p-3 bg-white rounded-2xl border border-orange-50 shadow-sm">
                                <span className="tibetan-text text-2xl">{ex.t}</span>
                                <ChevronRight className="w-4 h-4 text-brand-primary/20" />
                                <div className="text-right">
                                  <span className="text-xs font-bold text-brand-dark">{ex.eng}</span>
                                  <div className="text-[10px] text-brand-primary/40 uppercase font-bold leading-none">Sound</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                   </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-10 rounded-[3rem] border border-orange-50 shadow-sm">
                    <h3 className="text-xl font-black text-brand-dark uppercase mb-8 flex items-center gap-3 tracking-tight">
                      <div className="w-2 h-2 bg-brand-primary rounded-full" /> The Ten Suffixes
                    </h3>
                    <div className="grid grid-cols-5 gap-3 mb-10">
                      {["ག་", "ང་", "ད་", "ན་", "བ་", "མ་", "འ་", "ར་", "ལ་", "ས་"].map((s, i) => (
                        <div key={i} className="flex items-center justify-center p-4 bg-brand-muted/10 rounded-2xl tibetan-text text-3xl text-brand-dark border border-brand-muted/20">
                          {s}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-6 text-sm text-brand-dark/80 bg-orange-50/30 p-6 rounded-2xl">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-muted flex-shrink-0 flex items-center justify-center font-bold text-[10px]">01</div>
                        <p><strong>ད་ and ས་:</strong> Silent suffixes that act as the vowel <strong>'e'</strong>, shifting the root vowel sound.</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-muted flex-shrink-0 flex items-center justify-center font-bold text-[10px]">02</div>
                        <p><strong>ན་ and ལ་:</strong> These change the sound to <strong>'e'</strong> and MUST be fully pronounced.</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-muted flex-shrink-0 flex items-center justify-center font-bold text-[10px]">03</div>
                        <p><strong>བ་ between syllables:</strong> Identically read as <strong>'wa/way'</strong> (Construction: ཀ་བ་ → kawa).</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-[3.5rem] border border-orange-50 shadow-xl p-6 md:p-12 lg:overflow-visible">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                      <div className="flex-1 w-full lg:max-w-xl">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-brand-primary/10 rounded-xl">
                            <Eye className="w-6 h-6 text-brand-primary" />
                          </div>
                          <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tight text-center sm:text-left">The Syllable Tree</h3>
                        </div>
                        <p className="text-brand-dark/60 leading-relaxed mb-8 font-medium text-center sm:text-left">
                          Tibetan syllables are vertical stacks. Each position has a specific name and function. Tap the components to explore.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 xl:grid-cols-1">
                          {SYLLABLE_TREE.parts.map((part, i) => (
                            <motion.div 
                              key={i}
                              whileHover={{ x: 10 }}
                              onClick={() => setSelectedItem({ 
                                tib: part.tib, 
                                eng: part.label, 
                                vocab: [part.description] 
                              })}
                              className="flex items-center gap-6 p-4 rounded-3xl hover:bg-brand-muted/20 cursor-pointer border border-transparent hover:border-brand-primary/10 group transition-all"
                            >
                              <span className={`tibetan-text text-4xl w-14 text-center ${part.color} group-hover:scale-125 transition-transform`}>
                                {part.tib}
                              </span>
                              <div>
                                <div className="text-xs font-black uppercase tracking-widest text-brand-dark">{part.label}</div>
                                <div className="text-[10px] text-brand-dark/40 font-bold uppercase">{part.description}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1 w-full flex flex-col items-center">
                        <div className="relative p-6 sm:p-12 md:p-16 bg-brand-muted/20 rounded-[3rem] border border-brand-primary/5 shadow-inner w-full flex flex-col items-center overflow-x-auto lg:overflow-visible">
                          <div className="flex items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 min-w-max sm:min-w-0">
                            {/* Prefix Column */}
                            <motion.div 
                              whileHover={{ scale: 1.2, y: -5 }}
                              onClick={() => setSelectedItem({ tib: 'བ', eng: 'Prefix', vocab: ['Silent. Usually specifies the root letter.'] })}
                              className="tibetan-text text-6xl md:text-8xl text-amber-600 cursor-pointer opacity-70 hover:opacity-100 transition-all"
                            >
                              བ
                            </motion.div>

                            {/* Center Stack Column */}
                            <div className="flex flex-col items-center">
                              {/* Vowel + Superscript */}
                              <div className="flex flex-col items-center -space-y-4 md:-space-y-8 mb-[-1rem] md:mb-[-2rem]">
                                <motion.div 
                                  whileHover={{ scale: 1.3 }}
                                  onClick={() => setSelectedItem({ tib: 'ི', eng: 'Vowel', vocab: ['The "i" sound sign (giku).'] })}
                                  className="tibetan-text text-5xl md:text-6xl text-rose-500 cursor-pointer opacity-70 hover:opacity-100 transition-all z-20"
                                >
                                  ི
                                </motion.div>
                                <motion.div 
                                  whileHover={{ scale: 1.3 }}
                                  onClick={() => setSelectedItem({ tib: 'ས', eng: 'Superscript', vocab: ['Silent head letter. Elevates tone.'] })}
                                  className="tibetan-text text-5xl md:text-6xl text-blue-600 cursor-pointer opacity-70 hover:opacity-100 transition-all z-10"
                                >
                                  ས
                                </motion.div>
                              </div>

                              {/* Root */}
                              <motion.div 
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setSelectedItem({ tib: 'ག', eng: 'Root Letter', vocab: ['The core sound carrier.'] })}
                                className="tibetan-text text-[10rem] md:text-[14rem] text-brand-primary leading-none cursor-pointer select-none drop-shadow-sm"
                              >
                                ག
                              </motion.div>

                              {/* Subscript */}
                              <motion.div 
                                whileHover={{ scale: 1.3, y: 5 }}
                                onClick={() => setSelectedItem({ tib: 'ྲ', eng: 'Subscript', vocab: ['Attached below root. ga -> dra.'] })}
                                className="tibetan-text text-6xl md:text-8xl text-green-600 -mt-6 md:-mt-12 cursor-pointer opacity-70 hover:opacity-100 transition-all"
                              >
                                ྲ
                              </motion.div>
                            </div>

                            {/* Suffix Group Column */}
                            <div className="flex items-center gap-4 md:gap-8">
                              <motion.div 
                                whileHover={{ scale: 1.2, y: -5 }}
                                onClick={() => setSelectedItem({ tib: 'བ', eng: 'Suffix', vocab: ['The closing consonant.'] })}
                                className="tibetan-text text-6xl md:text-8xl text-purple-600 cursor-pointer opacity-70 hover:opacity-100 transition-all"
                              >
                                བ
                              </motion.div>
                              <motion.div 
                                whileHover={{ scale: 1.2, y: -5 }}
                                onClick={() => setSelectedItem({ tib: 'ས', eng: 'Post-Suffix', vocab: ['Silent. Softens vowel (Umlaut).'] })}
                                className="tibetan-text text-6xl md:text-8xl text-orange-500 cursor-pointer opacity-70 hover:opacity-100 transition-all"
                              >
                                ས
                              </motion.div>
                            </div>
                          </div>
                          
                          <div className="mt-16 pt-8 border-t border-brand-primary/10 w-full flex flex-col items-center">
                            <div className="px-6 py-2 bg-brand-dark text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] mb-6 shadow-lg">
                              The Unified Syllable
                            </div>
                            <div className="tibetan-text text-7xl md:text-8xl text-brand-dark tracking-widest text-center whitespace-nowrap">
                              {SYLLABLE_TREE.word}
                            </div>
                          </div>
                        </div>
                        <div className="mt-12 text-center">
                          <div className="text-4xl font-black text-brand-dark tracking-tighter uppercase mb-2">{SYLLABLE_TREE.transliteration}</div>
                          <div className="text-xl font-bold text-brand-primary italic opacity-60">"{SYLLABLE_TREE.meaning}"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'reading' && (
            <SectionWrapper title="Sacred Reading" description="Click any word to reveal its translation. This is where your mastery is tested.">
              <div className="flex items-center justify-between mb-8 bg-white rounded-2xl px-6 py-4 border border-orange-50 shadow-sm">
                <p className="text-sm font-bold text-brand-dark/60">
                  {revealAllReading ? 'All words revealed' : 'Tap any word to reveal its meaning'}
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setRevealAllReading(prev => !prev)}
                  className={`text-[11px] font-black uppercase tracking-widest px-5 py-2 rounded-xl transition-colors ${revealAllReading ? 'bg-brand-primary text-white' : 'bg-brand-muted/40 text-brand-dark hover:bg-brand-muted'}`}
                >
                  {revealAllReading ? 'Hide All' : 'Reveal All'}
                </motion.button>
              </div>
              <div className="space-y-16">
                {READING_CONTENT.map((prayer, idx) => (
                  <div key={idx} className="bg-white rounded-[3rem] border border-orange-50 shadow-sm overflow-hidden p-1">
                    <div className="bg-brand-dark/95 backdrop-blur-md px-10 py-6 text-white flex items-center justify-between rounded-t-[2.8rem]">
                      <h4 className="text-xl font-black uppercase tracking-tight">{prayer.title}</h4>
                      <Scroll className="w-6 h-6 text-brand-secondary/40" />
                    </div>
                    <div className="p-10 space-y-12 bg-white rounded-b-[2.8rem]">
                      {prayer.lines.map((line, i) => (
                        <div key={i} className="group border-l-2 border-orange-50 hover:border-brand-primary pl-8 transition-all">
                          <div className="mb-4 flex flex-wrap gap-x-3 items-end">
                            {line.words?.map((w, wi) => (
                              <ReadingWord key={wi} word={w.t} english={w.e} />
                            ))}
                          </div>
                          <div className="text-brand-dark/70 text-base font-medium italic leading-relaxed max-w-3xl">
                            "{line.fullEng}"
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'quiz_ch1' && (
            <SectionWrapper title="Chapter 1 Practice Quiz" description="Test your knowledge of the Tibetan alphabet, vowels, and combinations.">
              <QuizSection items={CHAPTER1_QUIZ} baseIndex={1000} />
            </SectionWrapper>
          )}

          {activeSection === 'nouns' && (
            <SectionWrapper title="The Tibetan Lexicon" description="Common, abstract, and compound nouns. Explore the building blocks of communication.">
              <div className="space-y-12">
                {Object.entries(NOUNS).map(([category, items]) => {
                  const isExpanded = expandedCategories[category];
                  const displayedItems = isExpanded ? items : items.slice(0, 6);
                  const hasMore = items.length > 6;

                  return (
                  <div key={category} className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="h-8 w-1.5 bg-brand-primary rounded-full" />
                      <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">{category} Nouns</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {displayedItems.map((item, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02, y: -2 }}
                          onClick={() => setSelectedItem({ tib: item.tib, eng: item.eng, vocab: [item.lit || item.skt || item.tone || ''] })}
                          className="bg-white p-6 rounded-[2rem] border border-orange-50 shadow-sm flex items-center justify-between gap-4 group hover:border-brand-primary/20 transition-all cursor-pointer"
                        >
                          <div className="flex-shrink-0 min-w-[4rem] h-16 px-3 bg-brand-muted/10 rounded-2xl flex items-center justify-center tibetan-text text-3xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all whitespace-nowrap">
                            {item.tib}
                          </div>
                          <div className="text-right flex-1">
                            <p className="text-lg font-bold text-brand-dark leading-tight">{item.eng}</p>
                            <p className="text-[10px] uppercase font-black tracking-widest text-brand-dark/30 mt-1">
                              {item.lit ? `Lit: ${item.lit}` : item.skt ? `SKT: ${item.skt}` : item.tone ? `Tone: ${item.tone}` : item.hon ? `Hon: ${item.hon}` : ''}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    {hasMore && (
                      <div className="flex justify-center mt-4">
                        <button 
                          onClick={() => toggleCategory(category)}
                          className="flex items-center gap-2 px-6 py-3 bg-brand-muted/10 hover:bg-brand-muted/20 text-brand-dark font-bold rounded-xl transition-all text-sm"
                        >
                          {isExpanded ? (
                            <>Show Less <ChevronDown className="w-4 h-4 rotate-180 transition-transform" /></>
                          ) : (
                            <>Show All ({items.length}) <ChevronDown className="w-4 h-4 transition-transform" /></>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                  );
                })}
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'pronouns' && (
            <SectionWrapper title="Pronouns & Plurality" description="Learn to address yourself and others across three levels of formality.">
              <div className="space-y-12">
                <div className="bg-white rounded-[3rem] border border-orange-50 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-brand-dark text-white uppercase text-[10px] font-black tracking-widest">
                          <th className="px-8 py-6">Person</th>
                          <th className="px-8 py-6">Singular</th>
                          <th className="px-8 py-6">Plural (+ ཚོ་)</th>
                          <th className="px-8 py-6">Oblique (+ ལ་)</th>
                          <th className="px-8 py-6">Function</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-orange-50">
                        {PRONOUNS.map((row, idx) => (
                          <tr key={idx} className="group hover:bg-orange-50/30 transition-colors">
                            <td className="px-8 py-6 font-black text-brand-primary">{row.p}</td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-3">
                                <span className="tibetan-text text-3xl text-brand-dark whitespace-nowrap">{row.s}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-3">
                                <span className="tibetan-text text-3xl text-brand-dark/60 whitespace-nowrap">{row.pl}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-3">
                                <span className="tibetan-text text-3xl text-indigo-400 whitespace-nowrap">{row.oblique}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <p className="text-sm font-bold text-brand-dark/70">{row.eng}</p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-10 rounded-[3rem] border border-orange-50 shadow-sm">
                    <h3 className="text-xl font-black text-brand-dark uppercase tracking-tight mb-8">Demonstratives</h3>
                    <div className="space-y-4">
                      {DEMONSTRATIVES.map((d, i) => (
                        <div key={i} onClick={() => setSelectedItem({ tib: d.tib, eng: d.eng, vocab: [d.type] })} className="flex items-center justify-between p-4 bg-brand-muted/10 rounded-2xl border border-brand-muted/20 hover:border-brand-primary transition-all cursor-pointer group">
                           <div className="flex items-center gap-4">
                             <span className="tibetan-text text-3xl text-brand-dark group-hover:text-brand-primary transition-colors whitespace-nowrap">{d.tib}</span>
                             <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/20">{d.type}</span>
                           </div>
                           <span className="text-sm font-bold text-brand-dark/60">{d.eng}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-10 bg-brand-dark rounded-[3rem] text-white relative overflow-hidden flex flex-col justify-center">
                    <Compass className="absolute -right-12 -bottom-12 w-64 h-64 text-white/5 rotate-12" />
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <Info className="w-5 h-5 text-brand-secondary" />
                      Understanding Formality
                    </h4>
                    <div className="text-sm text-white/70 leading-relaxed font-medium space-y-4">
                      <p>In Tibetan, social hierarchy is embedded in language. Always use <span className="text-brand-secondary">ཁོང་ (Khong)</span> when referring to teachers, monks, or elders. Using <span className="text-brand-secondary">ཁོ་ (Kho)</span> for a respected person is considered extremely impolite.</p>
                      <p>The pluralizer <span className="text-brand-secondary">ཚོ་ (tsho)</span> is remarkably consistent. It can be added to almost any noun to indicate a group, though it is most frequently used with pronouns and people.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'particles' && (
            <SectionWrapper title="Connective Particles" description="The glue of the language. Mastery of these suffixes allows you to express possession and agency.">
              <div className="space-y-12">
                {/* Genitive Section */}
                <div className="bg-white rounded-[3rem] border border-orange-50 shadow-sm p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-10">
                    <LinkIcon className="w-8 h-8 text-brand-primary" />
                    <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">2.4 The Genitive (Possession)</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                    {GENITIVE_RULES.map((rule, idx) => (
                      <div key={idx} className="p-6 bg-brand-muted/10 rounded-[2.5rem] border border-brand-primary/5 hover:border-brand-primary transition-all text-center">
                        <div className="text-[10px] uppercase font-black tracking-[0.2em] text-brand-dark/40 mb-4 px-2 line-clamp-1">Suffix {rule.endings[0]}...</div>
                        <div className="tibetan-text text-5xl text-brand-primary mb-4">{rule.particle}</div>
                        <div className="flex flex-wrap justify-center gap-1">
                          {rule.endings.map(e => <span key={e} className="text-[10px] font-bold text-brand-dark/30">{e}</span>)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-brand-dark/40 mb-6">Possessive Pronouns</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {POSSESSIVE_PRONOUNS.map((p, i) => (
                          <div key={i} className="flex items-center justify-between p-4 bg-orange-50/30 rounded-2xl border border-orange-100">
                             <div className="flex flex-col">
                               <span className="tibetan-text text-2xl text-brand-dark whitespace-nowrap">{p.tib}</span>
                               <span className="text-[10px] font-bold text-brand-dark/30 uppercase">{p.formation}</span>
                             </div>
                             <span className="text-sm font-bold text-brand-primary">{p.eng}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-brand-dark/40 mb-6">Worked Examples</h4>
                      <div className="space-y-3">
                        {GENITIVE_EXAMPLES.map((ex, i) => (
                          <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-brand-muted/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <span className="tibetan-text text-2xl text-brand-dark whitespace-nowrap">{ex.tib}</span>
                            <span className="text-sm font-medium text-brand-dark/60 italic text-right flex-1">{ex.eng}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dative Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="bg-brand-primary rounded-[3rem] p-10 text-white shadow-xl shadow-brand-primary/10 relative overflow-hidden">
                    <Compass className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 rotate-12" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <LinkIcon className="w-8 h-8 text-brand-secondary" />
                        <h3 className="text-2xl font-black uppercase tracking-tight">2.5 Dative / Locative (ལ་)</h3>
                      </div>
                      <p className="text-white/70 text-sm mb-8 leading-relaxed font-medium">
                        The particle ལ་ serves location (at/in), direction (to), time (at), and indirect objects (for).
                      </p>
                      <div className="space-y-3">
                        {DATIVE_LOCATIVE.map((v, i) => (
                          <div key={i} className="flex items-center justify-between p-5 bg-white/10 rounded-2xl border border-white/5 hover:bg-white/20 transition-all group">
                            <div>
                              <span className="tibetan-text text-3xl group-hover:text-brand-secondary transition-colors whitespace-nowrap">{v.tib}</span>
                              <p className="text-[10px] uppercase font-bold text-white/40 mt-1">{v.function}</p>
                            </div>
                            <span className="text-sm font-bold text-white/80">{v.eng}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Agentive Section */}
                  <div className="bg-white rounded-[3rem] p-10 border border-orange-50 shadow-sm flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <Zap className="w-8 h-8 text-brand-secondary fill-brand-secondary" />
                      <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">2.6 The Agentive (ཀྱིས་)</h3>
                    </div>
                    <p className="text-brand-dark/60 text-sm mb-8 leading-relaxed font-medium">
                      Marks the subject of a transitive verb. Note how it differs from the dative (indirect object).
                    </p>
                    
                    <div className="bg-brand-muted/20 rounded-[2rem] overflow-hidden border border-brand-primary/10">
                      <table className="w-full text-left text-xs font-bold">
                        <thead>
                          <tr className="bg-brand-dark text-white/40 uppercase tracking-widest text-[9px]">
                            <th className="px-6 py-4">English</th>
                            <th className="px-6 py-4 text-brand-primary">Agentive</th>
                            <th className="px-6 py-4">Dative</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-primary/5">
                          {AGENTIVE_PRONOUNS.map((p, i) => (
                            <tr key={i} className="hover:bg-white/50 transition-colors">
                              <td className="px-6 py-4 text-brand-dark/50">{p.eng}</td>
                              <td className="px-6 py-4 tibetan-text text-2xl text-brand-primary whitespace-nowrap">{p.agentive}</td>
                              <td className="px-6 py-4 tibetan-text text-2xl text-brand-dark/60 whitespace-nowrap">{p.dative}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Verbs Sections */}
                  <div className="bg-white rounded-[3rem] p-10 border border-orange-50 shadow-sm flex flex-col mt-12">
                     <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-8 h-8 text-brand-primary" />
                        <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">2.7 The Verb To Be (རེད་ & ཡིན་)</h3>
                     </div>
                     <p className="text-brand-dark/60 text-sm mb-8 leading-relaxed font-medium">
                        Standard Tibetan uses two main verbs for "to be": <strong>ཡིན་ (yin)</strong> for the 1st person (egophoric), and <strong>རེད་ (re)</strong> for the 2nd/3rd person (assertive).
                     </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {VERBS_TO_BE.map((v, i) => (
                        <div key={i} className="p-6 bg-brand-muted/10 rounded-3xl border border-brand-primary/10 flex flex-col gap-2 relative group hover:border-brand-primary/30 transition-all">
                          <span className="tibetan-text text-4xl text-brand-primary group-hover:text-brand-secondary transition-colors whitespace-nowrap">{v.tib}</span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/30">{v.pron}</span>
                          <span className="text-sm font-bold text-brand-dark/80">{v.eng}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'quiz_ch2' && (
            <SectionWrapper title="Chapter 2 Practice Quiz" description="Test your knowledge of nouns, pronouns, and their various forms.">
              <QuizSection items={CHAPTER2_QUIZ} baseIndex={2000} />
            </SectionWrapper>
          )}

          {activeSection === 'equational_verbs' && (
            <SectionWrapper title="Equational Verbs" description={"Copulas linking a subject to a noun predicate — \"I am a teacher\", \"he is a doctor\"."}>
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {EQUATIONAL_VERBS.map((verb, i) => (
                    <div key={i} className="bg-white rounded-3xl p-8 border border-orange-50 shadow-sm flex flex-col items-center text-center">
                      <span className="text-[10px] font-black uppercase text-brand-dark/40 tracking-widest mb-4 inline-block px-3 py-1 bg-brand-muted/20 rounded-full">{verb.p} Person</span>
                      <div className="flex items-end gap-4 mb-4">
                        <div className="flex flex-col items-center">
                          <span className="text-xl text-brand-dark/40 font-semibold mb-1">Affirmative</span>
                          <span className="tibetan-text text-5xl text-brand-primary">{verb.affirmative}</span>
                        </div>
                        <div className="w-px h-12 bg-orange-50 mb-2"></div>
                        <div className="flex flex-col items-center">
                          <span className="text-xl text-brand-dark/40 font-semibold mb-1">Negative</span>
                          <span className="tibetan-text text-5xl text-brand-dark/60">{verb.neg}</span>
                        </div>
                      </div>
                      <p className="text-brand-dark/80 font-bold mt-2">{verb.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-brand-muted/10 p-8 rounded-3xl border border-brand-primary/10">
                  <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/50 mb-6">Examples: 1st Person</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                    {CHAPTER3_EXAMPLES.equational_1st.map((ex, i) => (
                      <div key={i} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm">
                        <span className="tibetan-text text-2xl text-brand-dark">{ex.tib}</span>
                        <span className="text-sm font-medium text-brand-dark/60 italic ml-4 text-right">{ex.eng}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/50 mb-6">Examples: 2nd & 3rd Person</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                    {CHAPTER3_EXAMPLES.equational_2nd.map((ex, i) => (
                      <div key={i} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm">
                        <span className="tibetan-text text-2xl text-brand-dark">{ex.tib}</span>
                        <span className="text-sm font-medium text-brand-dark/60 italic ml-4 text-right">{ex.eng}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/60 p-6 rounded-2xl border border-brand-primary/10 flex items-start gap-4">
                     <Info className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                     <div>
                       <h4 className="text-sm font-black uppercase tracking-widest text-brand-dark/70 mb-2">Note: Adjectives as Abstract Nouns</h4>
                       <p className="text-sm font-medium text-brand-dark/80 leading-relaxed">
                         A physical noun should always precede an abstract modifier. Words such as <span className="italic">new, old, young</span> function as abstract nouns in Tibetan, not adjectives in the Western sense.
                       </p>
                     </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-primary/10 to-transparent p-8 rounded-3xl">
                  <h3 className="text-sm font-black uppercase tracking-widest text-brand-primary mb-6">Stating Origin (from)</h3>
                  <p className="text-brand-dark/80 mb-6 font-medium">Attach the ablative particle <span className="tibetan-text text-2xl px-2">ནས་</span> to the place name, then add the appropriate copula.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {CHAPTER3_EXAMPLES.origin.map((ex, i) => (
                      <div key={i} className="bg-white/80 backdrop-blur border border-white p-4 rounded-2xl flex justify-between items-center">
                        <span className="tibetan-text text-2xl text-brand-dark">{ex.tib}</span>
                        <span className="text-sm font-medium text-brand-dark/60 italic ml-4 text-right">{ex.eng}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'existential_verbs' && (
            <SectionWrapper title="Location & Existence" description="Expressing that someone or something is somewhere, or exists.">
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {EXISTENTIAL_VERBS.map((verb, i) => (
                    <div key={i} className="bg-white rounded-3xl p-8 border border-orange-50 shadow-sm flex flex-col items-center text-center">
                      <span className="text-[10px] font-black uppercase text-brand-dark/40 tracking-widest mb-4 inline-block px-3 py-1 bg-brand-muted/20 rounded-full">{verb.p} Person</span>
                      <div className="flex items-end gap-3 mb-4 flex-wrap justify-center">
                        <div className="flex flex-col items-center bg-brand-muted/10 p-3 rounded-2xl">
                          <span className="text-xs text-brand-dark/40 font-semibold mb-1 uppercase">Affirmative</span>
                          <span className="tibetan-text text-3xl text-brand-primary">{verb.affirmative}</span>
                        </div>
                        <div className="flex flex-col items-center bg-brand-muted/10 p-3 rounded-2xl">
                          <span className="text-xs text-brand-dark/40 font-semibold mb-1 uppercase">Negative</span>
                          <span className="tibetan-text text-3xl text-brand-dark/60">{verb.neg}</span>
                        </div>
                      </div>
                      <p className="text-brand-dark/80 font-bold mt-2 text-sm">{verb.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-brand-muted/10 p-8 rounded-3xl border border-brand-primary/10">
                   <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/50 mb-6">Location Examples</h3>
                   <div className="space-y-3 mb-10">
                    {CHAPTER3_EXAMPLES.location.map((ex, i) => (
                      <div key={i} className="bg-white p-5 rounded-2xl flex justify-between items-center shadow-sm hover:border-brand-primary/20 border border-transparent transition-colors">
                        <span className="tibetan-text text-3xl text-brand-dark drop-shadow-sm">{ex.tib}</span>
                        <span className="text-brand-dark/60 italic ml-4 text-right font-medium">{ex.eng}</span>
                      </div>
                    ))}
                   </div>
                   
                   <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/50 mb-6">Existence (There is / There are)</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {EXISTENTIAL_VERBS_THERE_IS.map((ex, i) => (
                      <div key={i} className="bg-white border border-orange-50 p-5 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                        <span className="tibetan-text text-2xl text-brand-dark mb-4">{ex.tib}</span>
                        <span className="text-sm text-brand-dark/60 italic font-medium">{ex.eng}</span>
                      </div>
                    ))}
                   </div>
                </div>

                <div>
                   <h3 className="text-lg font-bold text-brand-dark mb-4">Spatial Prepositions & Relational Nouns</h3>
                   <p className="text-brand-dark/60 mb-6">Tibetan expresses spatial relationships through relational nouns functioning as postpositions, followed by the dative-locative particle <span className="tibetan-text text-xl">ལ་</span>.</p>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                     {SPATIAL_PREPOSITIONS.map((sp, i) => (
                       <div key={i} className="p-4 bg-white border border-brand-muted/30 rounded-2xl flex flex-col hover:border-brand-primary/40 transition-colors">
                         <span className="tibetan-text text-2xl text-brand-primary mb-1">{sp.tib}</span>
                         <span className="text-xs font-bold text-brand-dark/50 uppercase tracking-tight">{sp.eng}</span>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'possession' && (
            <SectionWrapper title="Possession ('To Have')" description="Possession uses the same existential verb stem as location. The possessed item is treated as existing at the possessor.">
              <div className="bg-white rounded-[3rem] p-10 border border-orange-50 shadow-lg">
                <div className="text-center mb-10 max-w-xl mx-auto">
                    <div className="inline-flex bg-brand-muted/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-4">Core Structure</div>
                    <p className="text-brand-dark/80 text-lg leading-relaxed font-medium">
                      The possessor is marked with <span className="tibetan-text text-2xl px-1 text-brand-secondary">ལ་</span> before the possessed noun. The subject is optional — <span className="tibetan-text text-2xl px-1">ཡོད།</span> already implies "I have".
                    </p>
                </div>
                
                <div className="space-y-4">
                  {CHAPTER3_EXAMPLES.possession.map((ex, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center justify-between p-6 bg-brand-muted/5 rounded-3xl border border-brand-primary/5 hover:bg-brand-muted/10 transition-colors">
                      <span className="tibetan-text text-3xl md:text-4xl text-brand-dark mb-3 md:mb-0">{ex.tib}</span>
                      <span className="text-brand-dark/70 font-semibold italic text-center md:text-right">{ex.eng}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'questions' && (
            <SectionWrapper title="Question Formation" description="Forming questions using markers and interrogative words.">
              <div className="space-y-8">
                
                <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 border border-indigo-100">
                  <h3 className="text-lg font-black text-indigo-900 uppercase tracking-wider mb-4">Yes / No Questions</h3>
                  <p className="text-indigo-900/60 font-medium mb-6">
                    The question marker <span className="tibetan-text text-2xl px-2 text-indigo-600">པས།</span> is appended to a statement to turn it into a yes/no question.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CHAPTER3_EXAMPLES.questions.map((ex, i) => (
                       <div key={i} className="bg-white p-5 rounded-2xl shadow-sm flex items-center justify-between border border-indigo-50">
                         <span className="tibetan-text text-2xl text-indigo-900 break-words flex-1 pr-4">{ex.tib}</span>
                         <span className="text-sm font-bold text-indigo-400 italic text-right shrink-0">{ex.eng}</span>
                       </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-orange-50 shadow-sm">
                  <h3 className="text-lg font-black text-brand-dark uppercase tracking-wider mb-4">Tag Questions</h3>
                  <p className="text-brand-dark/60 font-medium mb-6">
                    To formulate a question with an implied answer “yes/no”, use the same auxiliary verb as a tag question. It translates as “is it?”, “isn’t it”, “do you”, “don’t you?”.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CH3_TAG_QUESTIONS.map((ex, i) => (
                       <div key={i} className="bg-brand-muted/5 p-5 rounded-2xl flex flex-col justify-between border border-brand-primary/5 hover:bg-brand-muted/10 transition-colors">
                         <span className="tibetan-text text-2xl text-brand-dark break-words flex-1 mb-2">{ex.tib}</span>
                         <span className="text-sm font-bold text-brand-dark/50 italic">{ex.eng}</span>
                       </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-orange-50 shadow-sm">
                   <div className="flex items-center justify-between mb-8 cursor-pointer" onClick={() => toggleCategory('interrogatives')}>
                     <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40">Interrogative Words <span className="tibetan-text text-xl ml-2">འདྲི་ཚིག</span></h3>
                     <ChevronDown className={`w-5 h-5 text-brand-dark/30 transition-transform ${expandedCategories['interrogatives'] ? 'rotate-180' : ''}`} />
                   </div>
                   
                   {expandedCategories['interrogatives'] && (
                     <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                       {INTERROGATIVE_WORDS.map((word, i) => (
                         <div key={i} className="bg-brand-muted/10 p-4 rounded-xl flex flex-col hover:bg-brand-muted/20 transition-colors">
                           <span className="tibetan-text text-2xl text-brand-dark mb-1">{word.tib}</span>
                           <span className="text-xs font-bold text-brand-primary uppercase tracking-tight">{word.eng}</span>
                         </div>
                       ))}
                     </motion.div>
                   )}
                </div>

                <div className="bg-brand-dark rounded-3xl p-8 border border-brand-primary/20 text-white shadow-xl overflow-hidden relative">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 -mr-16 -mt-16 rounded-full blur-3xl pointer-events-none" />
                   <h3 className="text-xl font-bold mb-6 text-white/90">Auxiliary Summary Table</h3>
                   <div className="overflow-x-auto pb-4">
                     <table className="w-full min-w-[600px] text-left">
                       <thead>
                         <tr>
                           <th className="py-3 px-4 text-xs font-black uppercase tracking-widest text-brand-secondary/60">Type</th>
                           <th className="py-3 px-4 text-xs font-black uppercase tracking-widest text-brand-secondary/60">Noun - To Be</th>
                           <th className="py-3 px-4 text-xs font-black uppercase tracking-widest text-brand-secondary/60">Possession - To Have</th>
                           <th className="py-3 px-4 text-xs font-black uppercase tracking-widest text-brand-secondary/60">Location - To Be At</th>
                         </tr>
                       </thead>
                       <tbody className="divide-y divide-white/10">
                         {AUXILIARY_SUMMARY.map((row, i) => (
                           <tr key={i} className="hover:bg-white/5 transition-colors">
                             <td className="py-4 px-4 font-bold text-sm tracking-widest text-white/40 uppercase whitespace-nowrap">{row.person}</td>
                             <td className="py-4 px-4 tibetan-text text-2xl text-brand-primary">{row.eq}</td>
                             <td className="py-4 px-4 tibetan-text text-2xl text-brand-secondary">{row.pos}</td>
                             <td className="py-4 px-4 tibetan-text text-2xl text-white/80">{row.loc}</td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                </div>

              </div>
            </SectionWrapper>
          )}

          {activeSection === 'quiz_ch3' && (
            <SectionWrapper title="Chapter 3 Practice Quiz" description="Test your knowledge of basic sentence structure, equational verbs, and existential verbs.">
              <QuizSection items={CHAPTER3_QUIZ} baseIndex={3000} />
            </SectionWrapper>
          )}

          {activeSection === 'adjectives' && (
            <SectionWrapper title="Attributes & Comparison" description="Describing nouns, equational statements, and intensive modifiers.">
              <div className="space-y-12">
                <div className="bg-brand-dark text-white rounded-[3rem] p-10 shadow-xl border border-brand-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-brand-secondary">Word Order Rule</h3>
                  <p className="text-white/80 font-medium text-lg leading-relaxed flex items-center flex-wrap gap-2 mb-8">
                    In Tibetan, the sentence order is: 
                    <span className="px-3 py-1 bg-white/10 rounded-lg text-brand-primary font-bold">Noun</span> + 
                    <span className="px-3 py-1 bg-white/10 rounded-lg text-brand-secondary font-bold">Colour</span> + 
                    <span className="px-3 py-1 bg-white/10 rounded-lg text-brand-primary/80 font-bold">Adjective</span> + 
                    <span className="px-3 py-1 bg-white/10 rounded-lg text-brand-secondary/80 font-bold">Number</span>.
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {CH4_WORD_ORDER_EXAMPLES.map((ex, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
                        <span className="tibetan-text text-2xl text-brand-primary mb-2">{ex.tib}</span>
                        <span className="text-sm font-medium italic text-white/60">{ex.eng}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Qualitative Adjectives</h3>
                    <div className="flex flex-col h-[400px] overflow-y-auto pr-4 space-y-2 scrollbar-hide">
                      {CH4_QUALITATIVE_ADJ.map((adj, i) => (
                        <div key={i} className="flex justify-between items-center p-3 hover:bg-brand-muted/10 rounded-xl transition-colors">
                          <span className="tibetan-text text-2xl text-brand-dark">{adj.tib}</span>
                          <span className="text-sm font-medium text-brand-dark/60">{adj.eng}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                      <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Personal Attributes</h3>
                      <div className="flex flex-col h-[200px] overflow-y-auto pr-4 space-y-2 scrollbar-hide">
                        {CH4_PERSONAL_ADJ.map((adj, i) => (
                          <div key={i} className="flex justify-between items-center p-3 hover:bg-brand-muted/10 rounded-xl transition-colors">
                            <span className="tibetan-text text-xl text-brand-primary">{adj.tib}</span>
                            <span className="text-sm font-medium text-brand-dark/60">{adj.eng}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                      <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Colours</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {CH4_COLORS.map((c, i) => (
                          <div key={i} className="flex flex-col bg-brand-muted/10 p-3 rounded-xl border border-transparent hover:border-brand-primary/20 transition-colors">
                            <span className="tibetan-text text-xl text-brand-dark mb-1">{c.tib}</span>
                            <span className="text-xs font-bold uppercase text-brand-primary tracking-tight">{c.eng}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Equational Statements with Adjectives</h3>
                    <p className="text-brand-dark/60 text-sm mb-6">First person uses ཡོད།, second/third person uses འདུག། or ཡོད་རེད།</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {CH4_EQUATIONAL_ADJ_EXAMPLES.map((ex, i) => (
                        <div key={i} className="flex flex-col bg-brand-muted/10 p-4 rounded-xl border border-transparent hover:border-brand-primary/20 transition-colors">
                          <span className="text-[10px] font-bold text-brand-primary/60 uppercase tracking-widest mb-2">{ex.type}</span>
                          <span className="tibetan-text text-xl text-brand-dark mb-2">{ex.tib}</span>
                          <span className="text-sm italic font-medium text-brand-dark/60">{ex.eng}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Nominalizing (How + Adj)</h3>
                    <p className="text-brand-dark/60 text-sm mb-6">Adjective stem + ལོས་ + ཡོད་རེད། / འདུག། means "How [adjective] is it?"</p>
                    <div className="flex flex-col h-[300px] overflow-y-auto pr-4 space-y-3 scrollbar-hide">
                      {CH4_NOMINALIZING.map((ex, i) => (
                        <div key={i} className="flex flex-col bg-brand-muted/10 p-4 rounded-xl border border-transparent hover:border-brand-primary/20 transition-colors">
                          <span className="tibetan-text text-xl text-brand-dark mb-2">{ex.tib}</span>
                          <span className="text-sm italic font-medium text-brand-dark/60">{ex.eng}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Intensifiers</h3>
                    <div className="flex flex-col h-[300px] overflow-y-auto pr-4 space-y-2 scrollbar-hide">
                      {CH4_INTENSIFIERS.map((v, i) => (
                        <div key={i} className="flex justify-between items-center p-3 hover:bg-brand-muted/10 rounded-xl transition-colors">
                          <span className="tibetan-text text-2xl text-brand-primary">{v.tib}</span>
                          <span className="text-sm font-medium text-brand-dark/60">{v.eng}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                  <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Comparatives & Superlatives</h3>
                  
                  <div className="mb-10 bg-brand-muted/5 p-6 rounded-2xl border border-brand-primary/10">
                    <h4 className="text-xs font-black uppercase tracking-widest text-brand-dark/50 mb-4">Spelling Rule for Comparatives</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {CH4_COMPARATIVE_RULES.map((rule, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-brand-muted/20">
                          <span className="text-xs font-bold text-brand-primary uppercase block mb-1">Ends in {rule.suffix}</span>
                          <span className="text-sm font-medium text-brand-dark block mb-2">{rule.rule}</span>
                          <span className="tibetan-text text-sm text-brand-dark/60">{rule.example}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-left min-w-[600px]">
                      <thead>
                        <tr>
                          <th className="py-2 px-4 text-xs font-bold text-brand-primary uppercase tracking-wider">English</th>
                          <th className="py-2 px-4 text-xs font-bold text-brand-dark/50 uppercase tracking-wider">Base</th>
                          <th className="py-2 px-4 text-xs font-bold text-brand-dark/50 uppercase tracking-wider">Comparative</th>
                          <th className="py-2 px-4 text-xs font-bold text-brand-dark/50 uppercase tracking-wider">Superlative</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-muted/20">
                        {CH4_COMPARATIVES.map((comp, i) => (
                          <tr key={i} className="hover:bg-brand-muted/5">
                            <td className="py-3 px-4 text-sm font-medium text-brand-dark/70">{comp.eng}</td>
                            <td className="py-3 px-4 tibetan-text text-xl text-brand-dark">{comp.adj}</td>
                            <td className="py-3 px-4 tibetan-text text-xl text-brand-primary">{comp.comp}</td>
                            <td className="py-3 px-4 tibetan-text text-xl text-brand-secondary">{comp.sup}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xs font-black uppercase tracking-widest text-brand-dark/30 mb-4">Sentence Examples</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CH4_COMPARISON_EXAMPLES.map((ex, i) => (
                      <div key={i} className="bg-brand-muted/5 border border-brand-muted/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-brand-muted/10 transition-colors">
                        <span className="tibetan-text text-2xl text-brand-primary mb-2">{ex.tib}</span>
                        <span className="text-sm font-medium italic text-brand-dark/60">{ex.eng}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </SectionWrapper>
          )}

          {activeSection === 'numbers' && (
            <SectionWrapper title="Numbers & Quantifiers" description="Cardinal numbers, fractions, and counting.">
               <div className="space-y-12">
                 <div>
                   <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Cardinal Numbers</h3>
                   <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                     {CH4_NUMBERS.map((num, i) => (
                       <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-orange-50 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform cursor-default">
                         <span className="tibetan-text text-4xl text-brand-primary mb-2 group-hover:-translate-y-1 transition-transform">{num.tib}</span>
                         <span className="text-3xl font-black text-brand-dark/20 mb-2">{num.num}</span>
                         <span className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">{num.eng}</span>
                       </div>
                     ))}
                   </div>
                 </div>

                 <div>
                   <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Fractions & Decimals</h3>
                   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                     {CH4_FRACTIONS.map((num, i) => (
                       <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-orange-50 flex flex-col items-center justify-center text-center">
                         <span className="tibetan-text text-2xl text-brand-primary mb-2">{num.tib}</span>
                         <span className="text-xl font-black text-brand-dark/20 mb-2">{num.num}</span>
                         <span className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">{num.eng}</span>
                       </div>
                     ))}
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm transition-all hover:shadow-md">
                     <h3 className="text-xl font-bold mb-6 text-brand-dark">Ordinal Numbers</h3>
                     <div className="grid grid-cols-2 gap-4">
                       {CH4_ORDINALS.map((o, i) => (
                         <div key={i} className="flex justify-between items-center p-3 bg-brand-muted/10 rounded-xl border border-transparent hover:border-brand-primary/10">
                           <span className="text-xs font-bold text-brand-dark/40">{o.eng}</span>
                           <span className="tibetan-text text-xl text-brand-primary">{o.tib}</span>
                         </div>
                       ))}
                     </div>
                   </div>

                   <div className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm transition-all hover:shadow-md">
                     <h3 className="text-xl font-bold mb-6 text-brand-dark">Collective Numbers</h3>
                     <div className="grid grid-cols-1 gap-3">
                       {CH4_COLLECTIVES.map((c, i) => (
                         <div key={i} className="flex justify-between items-center p-3 bg-brand-muted/10 rounded-xl border border-transparent hover:border-brand-primary/10">
                           <span className="text-sm font-bold text-brand-dark/60">{c.eng}</span>
                           <span className="tibetan-text text-xl text-brand-primary">{c.tib}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-brand-dark text-white rounded-[3rem] p-10 shadow-xl border border-brand-primary/20">
                    <h3 className="text-xl font-bold mb-4 text-brand-secondary">Counting Rule</h3>
                    <p className="text-white/80 font-medium text-lg leading-relaxed flex items-center flex-wrap gap-2 mb-6">
                      The number <span className="underline decoration-brand-primary decoration-2 underline-offset-4 font-bold">must come after</span> a noun. If there is a number greater than one, do not use the pluraliser.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {CH4_NUMBER_EXAMPLES.map((ex, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
                          <span className="tibetan-text text-2xl text-brand-primary mb-2">{ex.tib}</span>
                          <span className="text-sm font-medium italic text-white/60">{ex.eng}</span>
                        </div>
                      ))}
                    </div>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                   <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                      <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Percentages <span className="tibetan-text ml-2 text-xl">བརྒྱ་ཆ་</span></h3>
                      <p className="text-brand-dark/60 text-sm mb-6">
                        <span className="tibetan-text text-lg">བརྒྱ་</span> = hundred, <span className="tibetan-text text-lg">ཆ་</span> = aspect, <span className="tibetan-text text-lg">བརྒྱ་ཆ་</span> = percentage.
                        For example, 10% = བརྒྱ་ཆ་ + བཅུ་.
                      </p>
                      <div className="space-y-3">
                        {CH4_PERCENTAGE_EXAMPLES.map((ex, i) => (
                          <div key={i} className="flex flex-col bg-brand-muted/10 p-4 rounded-xl border border-transparent hover:border-brand-primary/20 transition-colors">
                            <span className="tibetan-text text-xl text-brand-dark mb-1">{ex.tib}</span>
                            <span className="text-sm italic font-medium text-brand-dark/60">{ex.eng}</span>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                      <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Quantifiers</h3>
                      <p className="text-brand-dark/60 text-sm mb-6">
                        <span className="font-bold">Number + ཙམ་</span> = about, more or less, approximately. <span className="tibetan-text text-lg">ཙམ་</span> comes after a number or a noun and is pronounced together with it.
                      </p>
                      <div className="space-y-3">
                        {CH4_QUANTIFIER_EXAMPLES.map((ex, i) => (
                          <div key={i} className="flex flex-col bg-brand-muted/10 p-4 rounded-xl border border-transparent hover:border-brand-primary/20 transition-colors">
                            <span className="tibetan-text text-xl text-brand-dark mb-1">{ex.tib}</span>
                            <span className="text-sm italic font-medium text-brand-dark/60">{ex.eng}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                 </div>
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'time' && (
            <SectionWrapper title="Time & Dates" description="Telling time, months, days of the week, and time-related vocabulary.">
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Months of the Year</h3>
                    <p className="text-brand-dark/70 text-sm mb-6">Use <span className="tibetan-text px-1 text-lg">ཕྱི་</span> (outside/foreign) + month + ordinal number.</p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {CH4_MONTHS.map((m, i) => (
                        <div key={i} className="bg-brand-muted/5 p-3 rounded-xl border border-transparent hover:border-brand-primary/20 transition-colors">
                          <span className="text-xs font-bold text-brand-primary/60 uppercase tracking-wider block mb-1">{m.mt}</span>
                          <span className="tibetan-text text-lg text-brand-dark">{m.tib}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Days of the Week</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {CH4_DAYS_OF_WEEK.map((d, i) => (
                        <div key={i} className="bg-brand-muted/5 p-3 rounded-xl border border-transparent hover:border-brand-primary/20 transition-colors flex justify-between items-center">
                          <span className="text-xs font-bold text-brand-primary/60 uppercase tracking-wider block">{d.eng}</span>
                          <span className="tibetan-text text-lg text-brand-dark">{d.tib}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                     <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Time Vocabulary</h3>
                     <div className="flex flex-col h-[400px] overflow-y-auto pr-4 space-y-2 scrollbar-hide">
                        {CH4_TIME_VOCAB.map((v, i) => (
                          <div key={i} className="flex justify-between items-center p-3 hover:bg-brand-muted/10 rounded-xl transition-colors">
                            <span className="tibetan-text text-2xl text-brand-dark">{v.tib}</span>
                            <span className="text-sm font-medium text-brand-dark/60 text-right">{v.eng}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Telling Time & Sentence Examples</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {CH4_TIME_EXAMPLES.map((ex, i) => (
                        <div key={i} className="bg-brand-muted/5 border border-brand-muted/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-brand-muted/10 transition-colors">
                          <span className="tibetan-text text-2xl text-brand-primary mb-2">{ex.tib}</span>
                          <span className="text-sm font-medium italic text-brand-dark/60">{ex.eng}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'verbs_intro' && (
            <SectionWrapper title="The Verb System" description="Introduction to honorific, non-honorific, and humilific verb forms.">
              <div className="space-y-12">
                <div className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 text-brand-dark">Voluntary Verbs (Hon vs Non-Hon)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-brand-dark text-white uppercase text-[10px] font-black tracking-widest">
                          <th className="px-6 py-4">Meaning</th>
                          <th className="px-6 py-4 text-brand-secondary">Honorific</th>
                          <th className="px-6 py-4">Past</th>
                          <th className="px-6 py-4">Present</th>
                          <th className="px-6 py-4">Future</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-orange-50">
                        {CH5_VOLUNTARY_VERBS.map((v, i) => (
                          <tr key={i} className="hover:bg-brand-muted/5">
                            <td className="px-6 py-4 font-bold text-brand-dark/60">{v.eng}</td>
                            <td className="px-6 py-4 tibetan-text text-2xl text-brand-secondary">{v.hon}</td>
                            <td className="px-6 py-4 tibetan-text text-2xl">{v.past}</td>
                            <td className="px-6 py-4 tibetan-text text-2xl">{v.pres}</td>
                            <td className="px-6 py-4 tibetan-text text-2xl">{v.fut}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Agentive Particles (ཀྱིས་)</h3>
                    <div className="space-y-4">
                      {CH5_AGENTIVE_RULES.map((rule, i) => (
                        <div key={i} className="p-4 bg-brand-muted/10 rounded-2xl flex justify-between items-center transition-all">
                           <div className="flex flex-col">
                             <span className="text-[10px] uppercase font-bold text-brand-dark/40">Ends in Suffix</span>
                             <span className="tibetan-text text-xl text-brand-dark">{rule.suffixes}</span>
                           </div>
                           <div className="text-right">
                             <span className="text-[10px] uppercase font-bold text-brand-primary/60">Particle</span>
                             <span className="tibetan-text text-3xl text-brand-primary">{rule.particle}</span>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-3xl border border-orange-50 shadow-sm">
                     <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark/40 mb-6">Agentive vs Indirect Objects</h3>
                     <div className="flex flex-col h-[200px] overflow-y-auto pr-2 gap-2 scrollbar-hide">
                       {CH5_PRONOUN_AGENTIVES.map((p, i) => (
                         <div key={i} className="grid grid-cols-3 gap-2 items-center p-2 rounded-xl hover:bg-brand-muted/10 transition-colors">
                           <span className="text-xs font-bold text-brand-dark/60">{p.eng}</span>
                           <span className="tibetan-text text-center text-xl text-brand-primary">{p.ag}</span>
                           <span className="tibetan-text text-right text-xl text-brand-secondary">{p.indir}</span>
                         </div>
                       ))}
                     </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-brand-dark text-white rounded-[3rem] p-10 relative overflow-hidden">
                     <MessageCircle className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10" />
                     <h3 className="text-xl font-bold mb-6 text-brand-primary">Speaking Verbs</h3>
                     <div className="space-y-4">
                       {CH5_SPEAKING_VERBS.map((v, i) => (
                         <div key={i} className="flex flex-col bg-white/5 p-4 rounded-2xl border border-white/5">
                           <span className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">{v.eng}</span>
                           <div className="grid grid-cols-2 gap-4">
                             <div className="flex flex-col">
                               <span className="text-[9px] uppercase font-bold text-brand-secondary/60">Honorific</span>
                               <span className="tibetan-text text-xl text-brand-secondary">{v.hon}</span>
                             </div>
                             <div className="flex flex-col">
                               <span className="text-[9px] uppercase font-bold text-white/40">Non-Hon</span>
                               <span className="tibetan-text text-xl">{v.non}</span>
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                  </div>

                  <div className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm">
                     <h3 className="text-xl font-bold mb-6">Verbalizers (BYED བྱེད་)</h3>
                     <div className="grid grid-cols-2 gap-3 h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                       {CH5_VERBALIZERS_BYED.map((v, i) => (
                         <div key={i} className="p-3 bg-brand-muted/10 rounded-xl flex flex-col hover:border-brand-primary/20 border border-transparent transition-all">
                           <span className="tibetan-text text-lg text-brand-dark mb-1">{v.tib}</span>
                           <span className="text-[10px] font-bold text-brand-dark/40 uppercase">{v.eng}</span>
                         </div>
                       ))}
                     </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm">
                  <h3 className="text-xl font-bold mb-6">Verbalizers (BGTANG བཏང་)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CH5_VERBALIZERS_BGTANG.map((v, i) => (
                      <div key={i} className="p-6 bg-brand-muted/5 rounded-3xl border border-brand-primary/5 hover:bg-brand-muted/10 transition-all">
                         <div className="text-[10px] font-black uppercase tracking-widest text-brand-dark/30 mb-2">{v.eng}</div>
                         <div className="flex flex-col gap-3">
                           <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
                             <span className="text-[9px] uppercase font-bold text-brand-secondary/60">Hon</span>
                             <span className="tibetan-text text-xl text-brand-secondary">{v.hon}</span>
                           </div>
                           <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
                             <span className="text-[9px] uppercase font-bold text-brand-dark/30">Non</span>
                             <span className="tibetan-text text-xl text-brand-dark">{v.non}</span>
                           </div>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-dark text-white rounded-[3rem] p-10 relative overflow-hidden">
                   <h3 className="text-xl font-bold mb-6 text-brand-secondary">Verbal Nominalizers</h3>
                   <p className="text-white/60 text-sm mb-8">Suffixes placed after the verb root to turn it into a noun (agent, place, instrument, etc.)</p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                     {CH5_NOMINALIZERS.map((n, i) => (
                       <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-all">
                         <div className="flex justify-between items-start mb-3">
                            <span className="tibetan-text text-3xl text-brand-secondary">{n.tib}</span>
                            <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Suffix</span>
                         </div>
                         <p className="text-xs font-bold text-white/80 mb-4">{n.eng}</p>
                         <div className="bg-black/20 p-3 rounded-xl">
                            <span className="tibetan-text text-xl text-white block mb-1">{n.ex}</span>
                            <span className="text-[10px] italic text-white/40">{n.ex_eng}</span>
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'verb_tenses_1st' && (
            <SectionWrapper title="First Person Tenses (I / We)" description="Specific verb markers used when the subject is the speaker.">
              <div className="space-y-12">
                 <div className="bg-brand-dark rounded-[3rem] p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 -mr-16 -mt-16 rounded-full blur-3xl pointer-events-none" />
                    <h3 className="text-xl font-bold mb-8">1st Person Tense Formulas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {CH5_FIRST_PERSON_TENSES.map((t, i) => (
                        <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all">
                          <span className="text-xs font-black uppercase tracking-widest text-brand-primary mb-3 block">{t.tense}</span>
                          <div className="tibetan-text text-2xl text-white mb-4">{t.structure}</div>
                          <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase font-bold">
                            <span className="px-2 py-0.5 bg-brand-primary/10 text-brand-primary rounded font-black">NEG</span>
                            <span>{t.neg}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                 </div>

                 <div className="space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="h-8 w-1.5 bg-brand-primary rounded-full" />
                      <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">Past Tense Examples</h3>
                   </div>
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-brand-dark/40 mb-4 px-2">Intransitive (No Agentive)</h4>
                        <div className="space-y-3">
                          {CH5_PAST_INTRANS_EXAMPLES.map((ex, i) => (
                            <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-orange-50 flex flex-col gap-1">
                              <span className="tibetan-text text-xl text-brand-dark">{ex.tib}</span>
                              <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-brand-dark/40 mb-4 px-2">Transitive (With Agentive)</h4>
                        <div className="space-y-3">
                          {CH5_PAST_TRANS_EXAMPLES.map((ex, i) => (
                            <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-brand-primary/5 flex flex-col gap-1">
                              <span className="tibetan-text text-xl text-brand-primary">{ex.tib}</span>
                              <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-brand-dark">Present Perfect (Intentional)</h3>
                      <div className="space-y-3">
                        {CH5_PRES_PERF_INT_EXAMPLES.map((ex, i) => (
                          <div key={i} className="p-4 bg-brand-muted/10 rounded-2xl flex flex-col gap-1">
                            <span className="tibetan-text text-xl text-brand-dark">{ex.tib}</span>
                            <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-8 bg-brand-muted/20 rounded-[2.5rem] border border-brand-primary/10">
                      <h3 className="text-xl font-bold mb-4 text-brand-secondary">Present Perfect (Unintentional)</h3>
                      <p className="text-xs font-bold text-brand-dark/40 uppercase mb-6 tracking-widest">When something happened by surprise or mistake</p>
                      <div className="space-y-3">
                        {CH5_PRES_PERF_UNINT_EXAMPLES.map((ex, i) => (
                          <div key={i} className="p-4 bg-white/60 rounded-2xl border border-brand-secondary/20 flex flex-col gap-1">
                            <span className="tibetan-text text-xl text-brand-secondary">{ex.tib}</span>
                            <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                       <div className="flex items-center gap-4">
                          <div className="h-8 w-1.5 bg-brand-primary rounded-full" />
                          <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">Present Tense</h3>
                       </div>
                       <div className="space-y-3">
                          {CH5_PRES_TENSE_EXAMPLES.map((ex, i) => (
                            <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-brand-muted/20 flex flex-col gap-1">
                              <span className="tibetan-text text-xl text-brand-dark">{ex.tib}</span>
                              <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                    <div className="space-y-8">
                       <div className="flex items-center gap-4">
                          <div className="h-8 w-1.5 bg-brand-secondary rounded-full" />
                          <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">Future Tense</h3>
                       </div>
                       <div className="space-y-3">
                          {CH5_FUT_TENSE_EXAMPLES.map((ex, i) => (
                            <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-brand-secondary/20 flex flex-col gap-1">
                              <span className="tibetan-text text-xl text-brand-secondary">{ex.tib}</span>
                              <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'verb_tenses_others' && (
            <SectionWrapper title="Others (2nd & 3rd Person) & Evidentiality" description="Verbs change based on whether you witnessed the action or are making an assumption.">
              <div className="space-y-12">
                 <div className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-brand-dark">Tense & Evidentiality Formulas</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-brand-dark text-white uppercase text-[10px] font-black tracking-widest">
                            <th className="px-6 py-4">Tense / Evidentiality</th>
                            <th className="px-6 py-4 text-brand-primary">Structure</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-orange-50">
                          {CH5_OTHERS_TENSES.map((t, i) => (
                            <tr key={i} className="hover:bg-brand-muted/5">
                              <td className="px-6 py-4 font-bold text-brand-dark/60">{t.tense}</td>
                              <td className="px-6 py-4 tibetan-text text-2xl text-brand-primary">{t.structure}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                         <Eye className="w-5 h-5 text-brand-primary" /> Past (Witnessed)
                      </h3>
                      <div className="space-y-3">
                        {CH5_OTHERS_PAST_WITNESSED.map((ex, i) => (
                          <div key={i} className="p-4 bg-brand-muted/10 rounded-2xl border border-brand-primary/10 flex flex-col gap-1">
                            <span className="tibetan-text text-xl text-brand-dark">{ex.tib}</span>
                            <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                         <Scroll className="w-5 h-5 text-brand-secondary" /> Past (Historical / Not witnessed)
                      </h3>
                      <div className="space-y-3">
                        {CH5_OTHERS_PAST_NOT_WITNESSED.map((ex, i) => (
                          <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-brand-secondary/20 flex flex-col gap-1">
                            <span className="tibetan-text text-xl text-brand-secondary">{ex.tib}</span>
                            <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-6">
                     <h3 className="text-xl font-bold text-brand-dark">Present Perfect (Witnessed)</h3>
                     <div className="space-y-3">
                       {CH5_OTHERS_PRES_PERF_WITNESSED.map((ex, i) => (
                         <div key={i} className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100 flex flex-col gap-1">
                           <span className="tibetan-text text-xl text-brand-dark">{ex.tib}</span>
                           <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                   <div className="space-y-6">
                     <h3 className="text-xl font-bold text-brand-dark">Present Tense (Witnessed vs Assumption)</h3>
                     <div className="space-y-3">
                       {CH5_OTHERS_PRES_TENSE.map((ex, i) => (
                         <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-brand-muted/20 flex flex-col gap-1">
                           <span className="tibetan-text text-xl text-brand-dark">{ex.tib}</span>
                           <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>

                 <div className="bg-brand-dark text-white p-10 rounded-[3rem] relative overflow-hidden">
                    <Compass className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10" />
                    <h3 className="text-xl font-bold mb-6 text-brand-primary">Future Tense (Others)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {CH5_OTHERS_FUT_TENSE.map((ex, i) => (
                        <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-2">
                           <span className="tibetan-text text-xl text-brand-secondary">{ex.tib}</span>
                           <span className="text-sm font-medium italic text-white/50">{ex.eng}</span>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'verb_advanced' && (
            <SectionWrapper title="Advanced Verb Aspects" description="Continuous, habitual, and progressive tense structures.">
              <div className="space-y-12">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                       <div className="bg-white p-8 rounded-[2.5rem] border border-orange-50 shadow-sm">
                          <h3 className="text-lg font-bold mb-6 text-brand-primary">1st Person Advanced Formats</h3>
                          <div className="space-y-4">
                            {CH5_ADV_TENSES_1ST.map((t, i) => (
                              <div key={i} className="p-4 bg-brand-muted/10 rounded-2xl">
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 block mb-1">{t.tense}</span>
                                <span className="tibetan-text text-xl text-brand-dark mb-2 block">{t.structure}</span>
                                <div className="flex items-center gap-2 text-[10px] text-brand-dark/20 uppercase font-black">
                                  <span className="px-2 py-0.5 bg-brand-muted rounded text-brand-dark/40 font-black">NEG</span>
                                  <span>{t.neg}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                       </div>
                       <div className="space-y-3 px-2">
                          <h4 className="text-xs font-black uppercase tracking-widest text-brand-dark/40 mb-4">Examples</h4>
                          {CH5_ADV_1ST_EXAMPLES.map((ex, i) => (
                            <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-orange-50 flex flex-col gap-1">
                              <span className="tibetan-text text-xl text-brand-dark">{ex.tib}</span>
                              <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-8">
                       <div className="bg-brand-dark p-8 rounded-[2.5rem] text-white shadow-xl">
                          <h3 className="text-lg font-bold mb-6 text-brand-secondary">Others Advanced Formats</h3>
                          <div className="space-y-4">
                            {CH5_ADV_TENSES_OTHERS.map((t, i) => (
                              <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-1">{t.tense}</span>
                                <span className="tibetan-text text-xl text-white mb-2 block">{t.structure}</span>
                                <div className="flex items-center gap-2 text-[10px] text-white/20 uppercase font-black">
                                  <span className="px-2 py-0.5 bg-white/10 rounded text-brand-secondary/60 font-black">NEG</span>
                                  <span>{t.neg}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                       </div>
                       <div className="space-y-3 px-2">
                          <h4 className="text-xs font-black uppercase tracking-widest text-brand-dark/40 mb-4">Examples</h4>
                          {CH5_ADV_OTHERS_EXAMPLES.map((ex, i) => (
                            <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-brand-secondary/10 flex flex-col gap-1">
                              <span className="tibetan-text text-xl text-brand-secondary">{ex.tib}</span>
                              <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'verb_interrogative' && (
            <SectionWrapper title="Interrogative Verb Forms" description="Asking questions in various tenses and levels of witness evidentiality.">
              <div className="space-y-12">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                       <div className="bg-white p-8 rounded-[2.5rem] border border-orange-50 shadow-sm">
                          <h3 className="text-lg font-bold mb-6 text-brand-dark">2nd Person Question Markers</h3>
                          <div className="space-y-4">
                            {CH5_INTERROGATIVE_FORMS_2ND.map((t, i) => (
                              <div key={i} className="p-4 bg-brand-muted/10 rounded-2xl flex flex-col gap-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40">{t.tense}</span>
                                <span className="tibetan-text text-xl text-brand-primary">{t.structure}</span>
                              </div>
                            ))}
                          </div>
                       </div>
                       <div className="space-y-3">
                          {CH5_INTERROGATIVE_2ND_EXAMPLES.map((ex, i) => (
                            <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-orange-50 flex flex-col gap-1 hover:border-brand-primary transition-all">
                              <span className="tibetan-text text-xl text-brand-dark">{ex.tib}</span>
                              <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-8">
                      <div className="bg-brand-dark p-8 rounded-[2.5rem] text-white shadow-xl overflow-hidden relative">
                         <MessageCircle className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10" />
                         <h3 className="text-lg font-bold mb-6 text-white/90">3rd Person Question Auxiliaries</h3>
                         <div className="space-y-4">
                            {CH5_INTERROGATIVE_FORMS_3RD.map((t, i) => (
                              <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{t.p}</span>
                                <div className="flex justify-between items-center">
                                  <span className="tibetan-text text-xl text-brand-secondary">{t.aux}</span>
                                  <span className="text-[10px] font-bold text-brand-secondary/60 uppercase">NEG: {t.neg}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                      </div>
                      <div className="space-y-3">
                          {CH5_INTERROGATIVE_3RD_EXAMPLES.map((ex, i) => (
                            <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-brand-secondary/20 flex flex-col gap-1 hover:bg-brand-muted/5 transition-all">
                              <span className="tibetan-text text-xl text-brand-secondary">{ex.tib}</span>
                              <span className="text-sm font-medium italic text-brand-dark/50">{ex.eng}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'verb_negative' && (
            <SectionWrapper title="Negative Verb Forms" description="Summarizing the various negative markers across all tenses.">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {CH5_NEGATIVE_SUMMARY.map((row, i) => (
                   <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm hover:border-brand-primary/20 transition-all relative overflow-hidden group">
                     <div className="flex justify-between items-start mb-6">
                       <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/30 tracking-[0.2em]">{row.p}</span>
                       <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">{row.tense}</span>
                     </div>
                     <div className="flex flex-col items-center py-6 relative z-10">
                       <span className="tibetan-text text-6xl text-brand-dark mb-4 transform group-hover:scale-105 transition-all duration-500">{row.marker}</span>
                       <div className="h-px w-8 bg-brand-primary/10 mb-4" />
                       <span className="text-[10px] font-bold text-brand-dark/20 uppercase tracking-[0.3em]">Negator</span>
                     </div>
                     <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                        <X className="w-32 h-32 text-brand-dark" strokeWidth={1} />
                     </div>
                     <div className="absolute top-0 left-0 w-1 h-0 bg-brand-primary/20 group-hover:h-full transition-all duration-500" />
                   </div>
                 ))}
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'verb_involuntary' && (
            <SectionWrapper title="Involuntary Verbs (Non-Intentional)" description="Verbs that describe states, sensations, or actions that happen without the subject's direct will.">
              <div className="space-y-12">
                <div className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 text-brand-dark">Involuntary Verbs Table</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-brand-dark text-white uppercase text-[10px] font-black tracking-widest">
                          <th className="px-6 py-4">Meaning</th>
                          <th className="px-6 py-4 text-brand-secondary">Hon</th>
                          <th className="px-6 py-4">Past/Pres/Fut</th>
                          <th className="px-6 py-4 text-brand-primary">Subject Case</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-orange-50">
                        {CH5_INVOLUNTARY_VERBS.map((v, i) => (
                          <tr key={i} className="hover:bg-brand-muted/5">
                            <td className="px-6 py-4 font-bold text-brand-dark/60">{v.eng}</td>
                            <td className="px-6 py-4 tibetan-text text-2xl text-brand-secondary">{v.hon}</td>
                            <td className="px-6 py-4 tibetan-text text-2xl">{v.past}</td>
                            <td className="px-6 py-4 text-xs font-bold text-brand-primary uppercase tracking-tighter">{v.case}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-brand-muted/10 p-8 rounded-[3rem] border border-brand-primary/10">
                   <h3 className="text-xl font-bold mb-6 text-brand-dark">Usage Examples</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                     {CH5_INVOLUNTARY_EXAMPLES.map((ex, i) => (
                       <div key={i} className="bg-white p-5 rounded-2xl flex flex-col justify-between shadow-sm border border-transparent hover:border-brand-primary/20 transition-all">
                         <span className="tibetan-text text-2xl text-brand-dark mb-2">{ex.tib}</span>
                         <span className="text-sm font-medium italic text-brand-dark/40">{ex.eng}</span>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'quiz_ch4' && (
            <SectionWrapper title="Chapter 4 Practice Quiz" description="Test your knowledge of adjectives, number order, and time.">
              <QuizSection items={CHAPTER4_QUIZ} baseIndex={100} />
            </SectionWrapper>
          )}

          {activeSection === 'quiz_ch5' && (
            <SectionWrapper title="Chapter 5 Practice Quiz" description="Test your knowledge of verb tenses, intentionality, and evidentiality markers.">
              <QuizSection items={CHAPTER5_QUIZ} baseIndex={200} />
            </SectionWrapper>
          )}

          {activeSection === 'imperatives' && (
            <SectionWrapper title="Commands & Imperatives" description="Giving direct orders using different imperative patterns and ending particles.">
               <div className="space-y-12">
                  <div className="bg-brand-muted/10 p-10 rounded-[4rem] border border-brand-primary/5">
                    <h3 className="text-xl font-bold mb-8 text-brand-dark flex items-center gap-3">
                      <Zap className="w-5 h-5 text-brand-primary" />
                      Imperative Particles
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                       <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-brand-primary/5 hover:border-brand-primary/20 transition-all">
                          <span className="tibetan-text text-4xl text-brand-primary block mb-4">ཨ།</span>
                          <h4 className="font-black text-brand-dark uppercase tracking-widest text-[10px] mb-2">The Friendly 'A'</h4>
                          <p className="text-sm text-brand-dark/60 leading-relaxed">
                            The most common particle. It softens the command, making it sound more like a friendly suggestion or a polite order.
                          </p>
                       </div>
                       <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-brand-primary/5 hover:border-brand-primary/20 transition-all">
                          <span className="tibetan-text text-4xl text-brand-primary block mb-4">ད།</span>
                          <h4 className="font-black text-brand-dark uppercase tracking-widest text-[10px] mb-2">The Incentive 'Da'</h4>
                          <p className="text-sm text-brand-dark/60 leading-relaxed">
                            Used to encourage or urge someone to do something. It adds a slight sense of "Go ahead and do it."
                          </p>
                       </div>
                       <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-brand-primary/5 hover:border-brand-primary/20 transition-all">
                          <span className="tibetan-text text-4xl text-brand-primary block mb-4">ཤིག།</span>
                          <h4 className="font-black text-brand-dark uppercase tracking-widest text-[10px] mb-2">The Formal 'Shig'</h4>
                          <p className="text-sm text-brand-dark/60 leading-relaxed">
                            Strictly imperative. Used in formal writing or when someone in authority gives a very direct, non-negotiable order.
                          </p>
                       </div>
                    </div>
                  </div>
                  <div className="p-6 bg-brand-dark text-white rounded-3xl shadow-lg border border-white/5">
                    <p className="text-[10px] font-black uppercase text-white/40 mb-2 tracking-[0.2em]">Beginner's Joy</p>
                    <p className="text-sm font-medium text-white/50 leading-relaxed">
                      Imperatives don’t need any auxiliaries, which beginners often find difficult when starting Tibetan.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-10 rounded-[3.5rem] border border-orange-50 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8">
                      <Zap className="w-12 h-12 text-brand-primary/10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-8 text-brand-dark flex items-center gap-3">
                      Affirmative Commands
                      <span className="text-[10px] bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-tighter">Direct</span>
                    </h3>
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 scrollbar-hide">
                      {CH6_IMPERATIVES.map((ex, i) => (
                        <div key={i} className="group p-6 bg-brand-muted/10 rounded-[2rem] border border-transparent hover:border-brand-primary/20 transition-all">
                          <span className="tibetan-text text-3xl text-brand-primary block mb-3">{ex.tib}</span>
                          <span className="text-sm font-medium text-brand-dark/60 leading-relaxed italic">"{ex.eng}"</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-brand-dark p-10 rounded-[3.5rem] shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8">
                      <X className="w-12 h-12 text-white/5" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                      Negative Commands
                      <span className="text-[10px] bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-tighter">Don't</span>
                    </h3>
                    <div className="mb-8 p-6 bg-white/5 rounded-3xl border border-white/5">
                      <p className="text-[10px] font-black uppercase text-white/40 mb-2">Basic Formula</p>
                      <div className="flex items-center gap-3">
                        <span className="tibetan-text text-3xl text-brand-secondary">མ་</span>
                        <span className="text-white/20 text-xl">+</span>
                        <span className="text-lg font-bold text-white/80">Verb</span>
                      </div>
                    </div>
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 scrollbar-hide">
                      {CH6_NEG_IMPERATIVES.map((ex, i) => (
                        <div key={i} className="group p-6 bg-white/5 rounded-[2rem] border border-transparent hover:border-white/10 transition-all">
                          <span className="tibetan-text text-3xl text-brand-secondary block mb-3">{ex.tib}</span>
                          <span className="text-sm font-medium text-white/50 leading-relaxed italic">"{ex.eng}"</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-10 rounded-[3.5rem] border border-orange-50 shadow-sm">
                   <div className="flex items-start gap-6">
                     <div className="p-4 bg-brand-secondary/10 rounded-2xl">
                       <Compass className="w-8 h-8 text-brand-primary" />
                     </div>
                     <div>
                       <h3 className="text-xl font-bold mb-4 text-brand-dark">Search vs. Look For</h3>
                       <p className="text-brand-dark/70 leading-relaxed max-w-3xl mb-4">
                         The Tibetan word <span className="tibetan-text text-xl text-brand-primary">འཚོལ་</span> (tsöl) includes the concept of "for". You do not need an additional word for "for" when using this verb.
                       </p>
                       <div className="p-4 bg-brand-muted/5 rounded-2xl border border-brand-primary/5 inline-block">
                         <span className="tibetan-text text-2xl text-brand-dark">ཁང་པ་འཚོལ་</span>
                         <span className="mx-4 text-brand-dark/20">=</span>
                         <span className="text-sm font-bold text-brand-dark/60 tracking-wider">Search for a house</span>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'requests' && (
            <SectionWrapper title="Polite Requests & Manners" description="Softening commands into requests using helpers like 'rog-nang' (please).">
              <div className="space-y-12">
                <div className="bg-brand-muted/10 p-10 rounded-[3rem] border border-orange-50/50">
                  <h3 className="text-xl font-bold mb-6 text-brand-dark">Grammar Patterns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-brand-primary/5">
                      <p className="text-[10px] font-black uppercase text-brand-dark/40 mb-2">Please Do...</p>
                      <span className="tibetan-text text-2xl text-brand-primary">VERB + རོགས་གནང།</span>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-brand-primary/5">
                      <p className="text-[10px] font-black uppercase text-brand-dark/40 mb-2">Please Don't...</p>
                      <span className="tibetan-text text-2xl text-brand-secondary">མ་ + VERB + རོགས་གནང།</span>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-brand-primary/5">
                      <p className="text-[10px] font-black uppercase text-brand-dark/40 mb-2">Would you mind...?</p>
                      <span className="tibetan-text text-2xl text-brand-primary">VERB + རོགས་གནང་གས། / རོགས་བྱེད་གས།</span>
                    </div>
                    <div className="p-6 bg-brand-dark text-white rounded-2xl shadow-lg border border-white/5">
                      <p className="text-[10px] font-black uppercase text-white/40 mb-2">Pro Tip</p>
                      <p className="text-xs leading-relaxed text-white/60">
                        In many syllables verbs, the negator <span className="tibetan-text text-brand-secondary">མ་</span> often comes before the last syllable of the verb.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {CH6_REQUESTS.map((req, i) => (
                    <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                          {req.type}
                        </span>
                        <Heart className="w-5 h-5 text-brand-muted/20 group-hover:text-brand-primary transition-colors" />
                      </div>
                      <span className="tibetan-text text-3xl text-brand-dark block mb-4 leading-normal">{req.tib}</span>
                      <p className="text-lg font-medium text-brand-dark leading-relaxed italic">"{req.eng}"</p>
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-tl-full -mr-8 -mb-8 transition-all group-hover:scale-150" />
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'indirect_requests' && (
            <SectionWrapper title="Reporting Requests" description="How to report what someone else requested, or ask on behalf of someone else.">
              <div className="space-y-12">
                 <div className="bg-brand-dark text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                      <Scroll className="w-32 h-32" />
                    </div>
                    <h3 className="text-3xl font-black mb-8 text-brand-secondary tracking-tight">Indirect Request Formula</h3>
                    <div className="flex flex-wrap gap-4 mb-8">
                      <span className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 font-bold">VERB + རོགས་གནང་ཟེར་</span>
                      <span className="px-6 py-3 bg-brand-secondary text-brand-dark rounded-2xl font-black">+ འདུན་ཞུ་</span>
                    </div>
                    <p className="text-white/60 max-w-2xl leading-relaxed">
                      To "request to" or "ask someone to" do something, use this construction. It literally means "To offer a request saying 'Please do...'".
                    </p>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {CH6_INDIRECT_REQUESTS.map((req, i) => (
                      <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm hover:border-brand-primary/30 transition-all flex flex-col justify-center relative group">
                         <div className="absolute top-4 right-8 opacity-0 group-hover:opacity-20 transition-opacity">
                           <Library className="w-8 h-8 text-brand-dark" />
                         </div>
                         <span className="tibetan-text text-2xl text-brand-primary block mb-4 leading-relaxed">{req.tib}</span>
                         <span className="text-lg font-medium text-brand-dark/70 italic">"{req.eng}"</span>
                      </div>
                    ))}
                 </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'offering' && (
            <SectionWrapper title="Offering Assistance" description="How to say 'Shall I...?' or 'Let me...' when offering to help someone.">
              <div className="space-y-8">
                <div className="bg-brand-dark text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-10">
                     <Sparkles className="w-32 h-32" />
                   </div>
                   <h3 className="text-3xl font-black mb-8 text-brand-secondary tracking-tight">Standard Formula</h3>
                   <div className="flex flex-wrap gap-4 mb-8">
                     <span className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 font-bold">ངས་ (I) / ང་ཚོས་ (We)</span>
                     <span className="px-6 py-3 bg-brand-secondary text-brand-dark rounded-2xl font-black">+ VERB</span>
                     <span className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 font-bold">+ དགོས་ / ཆོག་ / ཡོང་</span>
                   </div>
                   <p className="text-white/60 max-w-2xl leading-relaxed">
                     When offering to do something in favor of the listener, use these auxiliaries at the end of the sentence.
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {CH6_OFFERING.map((off, i) => (
                    <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm hover:border-brand-primary/30 transition-all flex flex-col justify-center">
                       <span className="tibetan-text text-3xl text-brand-primary block mb-4">{off.tib}</span>
                       <span className="text-lg font-bold text-brand-dark">"{off.eng}"</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'suggestions' && (
            <SectionWrapper title="Suggestions: 'Let's Go'" description="Inviting others to join an action.">
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    {CH6_SUGGESTIONS.map((sug, i) => (
                      <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-4">
                          <Compass className="w-5 h-5 text-brand-primary" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40">{sug.type}</span>
                        </div>
                        <span className="tibetan-text text-3xl text-brand-dark block mb-4">{sug.tib}</span>
                        <p className="text-lg font-medium text-brand-dark/70">"{sug.eng}"</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-brand-muted/10 p-10 rounded-[4rem] border border-brand-primary/5 flex flex-col justify-center">
                    <h3 className="text-2xl font-black mb-6 text-brand-dark">Quick Tip</h3>
                    <div className="space-y-6">
                       <div className="p-6 bg-white rounded-3xl shadow-sm border border-brand-primary/5">
                         <p className="text-sm font-bold text-brand-dark/40 mb-2 uppercase tracking-widest">Go</p>
                         <p className="text-lg font-medium text-brand-dark leading-relaxed">
                           For the verb <span className="font-black">"go"</span>, you need not add "let's" — simply say <span className="tibetan-text text-2xl text-brand-primary">འགྲོ།</span>
                         </p>
                       </div>
                       <div className="p-6 bg-white rounded-3xl shadow-sm border border-brand-primary/5">
                         <p className="text-sm font-bold text-brand-dark/40 mb-2 uppercase tracking-widest">Negation</p>
                         <p className="text-lg font-medium text-brand-dark leading-relaxed">
                           To say "Let's not...", use: <br/>
                           <span className="font-black text-brand-primary">མ་ + verbaliser + དགོས་</span>
                         </p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'causatives' && (
            <SectionWrapper title="Causatives: Making it Happen" description="Letting or forcing someone to do something.">
              <div className="space-y-12">
                <div className="bg-white p-12 rounded-[4rem] border border-orange-100 shadow-sm flex flex-col items-center text-center">
                   <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mb-8">
                      <Users className="w-10 h-10 text-brand-primary" />
                   </div>
                   <h3 className="text-3xl font-black mb-6 text-brand-dark tracking-tight">The Causative Marker</h3>
                   <div className="flex gap-4 mb-8">
                      <div className="px-8 py-4 bg-brand-muted/20 rounded-2xl flex flex-col">
                        <span className="text-[10px] font-black uppercase text-brand-dark/40 mb-1">Pres/Fut</span>
                        <span className="tibetan-text text-4xl text-brand-primary">འཇུག་</span>
                        <span className="text-[10px] text-brand-dark/40 mt-1">'jug</span>
                      </div>
                      <div className="px-8 py-4 bg-brand-primary/10 rounded-2xl flex flex-col border border-brand-primary/20">
                        <span className="text-[10px] font-black uppercase text-brand-primary mb-1">Past</span>
                        <span className="tibetan-text text-4xl text-brand-primary">བཅུག་</span>
                        <span className="text-[10px] text-brand-primary/60 mt-1">bcug</span>
                      </div>
                   </div>
                   <p className="text-lg text-brand-dark/60 max-w-2xl leading-relaxed">
                     In Tibetan, the same marker is used to <span className="font-bold text-brand-dark underline decoration-brand-secondary decoration-4">let</span> or <span className="font-bold text-brand-dark underline decoration-brand-primary decoration-4">force</span> someone to do something. Context reveals whether it is desirable or undesirable.
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {CH6_CAUSATIVES.map((cau, i) => (
                    <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                      <div className="mb-6 flex justify-between items-center text-[10px] font-black uppercase text-brand-dark/20 tracking-widest">
                        <span>Causative Phrase</span>
                        <div className="w-2 h-2 rounded-full bg-brand-primary group-hover:animate-ping" />
                      </div>
                      <span className="tibetan-text text-2xl text-brand-dark block mb-4 group-hover:translate-x-2 transition-transform leading-relaxed">{cau.tib}</span>
                      <p className="text-sm font-bold text-brand-dark/50">"{cau.eng}"</p>
                      <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary/20 group-hover:bg-brand-primary transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'situations' && (
            <SectionWrapper title="Situational Practice" description="Apply Chapter 6 patterns in common real-life scenarios.">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "At the Restaurant",
                      icon: <Coffee className="w-6 h-6" />,
                      sentences: [
                        { tib: "ཇ་ཐེངས་གཅིག་བཟོ་ག", eng: "Shall I make some tea?", type: "Offer" },
                        { tib: "ཨ་རག་མ་མཆོད།", eng: "Don’t drink alcohol.", type: "Advice" },
                        { tib: "ཟ་ཁང་རྙིང་པ་དེ་ལ་མཆོད།", eng: "Eat at the old restaurant.", type: "Command" }
                      ]
                    },
                    {
                      title: "In the Classroom",
                      icon: <BookOpen className="w-6 h-6" />,
                      sentences: [
                        { tib: "འཛིན་གྲྭ་ལ་བཀའ་མོལ་མ་གནང་།", eng: "Don’t speak in the class.", type: "Rule" },
                        { tib: "རྒན་ལགས་ལ་འགྲེལ་བཤད་ཀྱོན་རོགས་གནང་ཟེར་ཞུས།", eng: "Request the teacher to explain.", type: "Indirect" },
                        { tib: "སློབ་ཕྲུག་ཚོ་ལ་དུས་ཚོད་འཕྲོ་བརླག་མ་གཏང་རོགས་གནང་ཟེར་ཞུས།", eng: "Request students not to waste time.", type: "Indirect" }
                      ]
                    },
                    {
                      title: "Seeking Assistance",
                      icon: <HelpCircle className="w-6 h-6" />,
                      sentences: [
                        { tib: "ང་ལ་དགོན་པ་དེ་སྟོན་རོགས་གནང་གས།", eng: "Would you mind showing me the monastery?", type: "Request" },
                        { tib: "ངའི་བུ་ལ་དབྱིན་ཇི་སླབ་རོགས་གནང་གས།", eng: "Would you mind teaching my son English?", type: "Request" },
                        { tib: "རོགས་པ་གནང་རོགས་གནང་ཟེར་ཞུས།", eng: "Request him to help.", type: "Indirect" }
                      ]
                    },
                    {
                      title: "Family Life",
                      icon: <Users className="w-6 h-6" />,
                      sentences: [
                        { tib: "ཁྱེད་རང་གི་ཕྲུ་གུའི་མཉམ་དུ་བོད་སྐད་ཀྱོན་ཨ།", eng: "Speak Tibetan with your children.", type: "Advice" },
                        { tib: "ཕྲུ་གུ་ཚོ་ལ་སྒྲུང་གཅིག་བཤད་གནང་ད།", eng: "Tell the children a story.", type: "Command" },
                        { tib: "ཕྲུ་གུ་ཚོ་ལ་ལས་ཀ་བྱེད་མ་བཅུག།", eng: "Don’t make the children work.", type: "Causative" }
                      ]
                    }
                  ].map((scenario, i) => (
                    <div key={i} className="bg-white rounded-[3rem] border border-orange-50 shadow-sm overflow-hidden flex flex-col">
                       <div className="bg-brand-dark p-8 text-white flex items-center justify-between">
                          <h3 className="text-xl font-bold">{scenario.title}</h3>
                          <div className="text-brand-secondary">{scenario.icon}</div>
                       </div>
                       <div className="p-8 space-y-6 flex-1">
                          {scenario.sentences.map((s, j) => (
                            <div key={j} className="group relative">
                               <div className="flex justify-between items-center mb-2">
                                  <span className="text-[10px] font-black uppercase text-brand-dark/20 tracking-tighter">{s.type}</span>
                               </div>
                               <span className="tibetan-text text-2xl text-brand-dark group-hover:text-brand-primary transition-colors block leading-relaxed">{s.tib}</span>
                               <span className="text-sm font-medium text-brand-dark/40 italic">"{s.eng}"</span>
                            </div>
                          ))}
                       </div>
                    </div>
                  ))}
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'quiz_ch6' && (
            <SectionWrapper title="Chapter 6 Practice Quiz" description="Test your mastery of commands, requests, and causative structures.">
              <QuizSection items={CHAPTER6_QUIZ} baseIndex={300} />
            </SectionWrapper>
          )}

          {activeSection === 'desires' && (
            <SectionWrapper title="Desires & Wants" description="Expressing what you want (nouns) or what you would like to do (actions).">
               <div className="space-y-12">
                 <div className="bg-brand-muted/10 p-10 rounded-[3rem] border border-orange-50/50">
                    <h3 className="text-xl font-bold mb-6 text-brand-dark">Two Ways to Desire</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="p-8 bg-white rounded-3xl shadow-sm border border-brand-primary/5">
                          <div className="flex items-center gap-3 mb-4">
                             <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                                <Scroll className="w-5 h-5 text-brand-primary" />
                             </div>
                             <h4 className="font-black text-brand-dark uppercase tracking-widest text-xs">Wanting Nouns</h4>
                          </div>
                          <p className="text-sm text-brand-dark/60 mb-4 leading-relaxed">
                             When the object is a noun, use <span className="tibetan-text text-xl text-brand-primary">དགོས།</span> (affirmative) and <span className="tibetan-text text-xl text-brand-secondary">མ་དགོས།</span> (negative).
                          </p>
                          <div className="flex items-center gap-2 text-2xl tibetan-text text-brand-dark bg-brand-muted/5 p-4 rounded-xl">
                             NOUN + དགོས།
                          </div>
                       </div>
                       <div className="p-8 bg-white rounded-3xl shadow-sm border border-brand-primary/5">
                          <div className="flex items-center gap-3 mb-4">
                             <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                                <Zap className="w-5 h-5 text-brand-primary" />
                             </div>
                             <h4 className="font-black text-brand-dark uppercase tracking-widest text-xs">Wanting Action</h4>
                          </div>
                          <p className="text-sm text-brand-dark/60 mb-4 leading-relaxed">
                             When the object is a verb, use <span className="tibetan-text text-xl text-brand-primary">འདོད་ཡོད།</span> (affirmative) and <span className="tibetan-text text-xl text-brand-secondary">འདོད་མེད།</span> (negative).
                          </p>
                          <div className="flex items-center gap-2 text-2xl tibetan-text text-brand-dark bg-brand-muted/5 p-4 rounded-xl">
                             VERB + འདོད་ཡོད།
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                       <h3 className="text-xl font-bold text-brand-dark px-4 flex items-center gap-2">
                          <Library className="w-5 h-5 text-brand-primary" />
                          Desiring Things
                       </h3>
                       {CH7_DESIRES_NOUN.map((d, i) => (
                         <div key={i} className="bg-white p-6 rounded-[2rem] border border-orange-50 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                            <span className="text-[10px] font-black uppercase text-brand-dark/30 absolute top-4 right-6 tracking-widest">{d.type}</span>
                            <span className="tibetan-text text-3xl text-brand-dark block mb-2">{d.tib}</span>
                            <p className="text-lg font-medium text-brand-dark/60">"{d.eng}"</p>
                         </div>
                       ))}
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-xl font-bold text-brand-dark px-4 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-brand-primary" />
                          Desiring Actions
                       </h3>
                       {CH7_DESIRES_VERB.map((d, i) => (
                         <div key={i} className="bg-white p-6 rounded-[2rem] border border-orange-50 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                            <span className="text-[10px] font-black uppercase text-brand-dark/30 absolute top-4 right-6 tracking-widest">{d.type}</span>
                            <span className="tibetan-text text-3xl text-brand-dark block mb-2">{d.tib}</span>
                            <p className="text-lg font-medium text-brand-dark/60">"{d.eng}"</p>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'intentions' && (
            <SectionWrapper title="Intentions, Plans & Near Future" description="How to say 'I plan to', 'I'm going to', or 'I'm about to' in Tibetan.">
               <div className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                     {[
                       { label: 'Plan', tib: 'འཆར་གཞི་ཡོད།', eng: 'I have a plan to...' },
                       { label: 'Calculated', tib: 'རྩིས་ཡོད།', eng: 'I intend to/calc to...' },
                       { label: 'Going to', tib: '—ཡག་ཡིན།', eng: 'Scheduled activity' },
                       { label: 'About to', tib: 'གྲབས་ཡོད།', eng: 'Very near future' }
                     ].map((box, i) => (
                       <div key={i} className="bg-brand-dark p-6 rounded-3xl border border-white/5 shadow-xl text-center">
                          <p className="text-[10px] font-black uppercase text-brand-secondary/40 mb-2 tracking-widest">{box.label}</p>
                          <span className="tibetan-text text-2xl text-brand-secondary block leading-normal mb-1">{box.tib}</span>
                          <span className="text-[10px] text-white/40 font-medium">{box.eng}</span>
                       </div>
                     ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {CH7_INTENTIONS.map((int, i) => (
                       <div key={i} className="bg-white p-8 rounded-[3.5rem] border border-orange-50 shadow-sm hover:border-brand-primary/20 transition-all group relative overflow-hidden">
                          <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] font-black uppercase text-brand-dark/20 tracking-widest">{int.type}</span>
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-primary/5 rounded-full group-hover:scale-[3] transition-all duration-700" />
                          </div>
                          <span className="tibetan-text text-3xl text-brand-dark block mb-4 relative z-10 leading-normal">{int.tib}</span>
                          <p className="text-lg font-medium text-brand-dark relative z-10 italic">"{int.eng}"</p>
                       </div>
                     ))}
                  </div>
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'obligation' && (
            <SectionWrapper title="Obligation & Necessity" description="Expressing 'have to', 'must', and absolute necessities.">
               <div className="space-y-12">
                  <div className="p-12 bg-white rounded-[4rem] border border-orange-100 shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-4 -translate-y-4">
                       <Zap className="w-48 h-48" />
                     </div>
                     <div className="max-w-2xl relative z-10">
                        <h3 className="text-3xl font-black text-brand-dark mb-6 tracking-tight">Compulsory Actions</h3>
                        <p className="text-lg text-brand-dark/60 leading-relaxed mb-8">
                           The basic way to say "have to" is <span className="tibetan-text text-2xl text-brand-primary">དགོས་རེད།</span>. For mandatory "must", add <span className="tibetan-text text-2xl text-brand-primary">ཡིན་ཅིག་མིན་ཅིག་</span> before the verb.
                        </p>
                        <div className="flex flex-wrap gap-4">
                           <div className="px-6 py-3 bg-brand-primary/10 rounded-2xl border border-brand-primary/20 font-bold text-brand-primary">
                             Verb + དགོས་རེད།
                           </div>
                           <div className="px-6 py-3 bg-brand-dark text-white rounded-2xl font-bold shadow-lg">
                             ཡིན་ཅིག་མིན་ཅིག་ + Verb
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {CH7_OBLIGATION.map((ob, i) => (
                       <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm hover:shadow-md transition-all relative group">
                          <div className="flex justify-between items-center mb-6">
                            <span className="text-[10px] font-black uppercase text-brand-dark/20 tracking-widest">{ob.type}</span>
                            <div className="h-px flex-1 mx-4 bg-orange-50" />
                          </div>
                          <span className="tibetan-text text-3xl text-brand-dark block mb-4 leading-relaxed">{ob.tib}</span>
                          <p className="text-lg font-medium text-brand-dark italic">"{ob.eng}"</p>
                       </div>
                     ))}
                  </div>
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'prohibition' && (
            <SectionWrapper title="Prohibition & Avoidance" description="Things one shouldn't do or would be better off avoiding.">
               <div className="space-y-12">
                  <div className="bg-brand-dark p-12 rounded-[4rem] text-white flex flex-col md:flex-row gap-12 items-center">
                     <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                       <X className="w-12 h-12 text-brand-secondary" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-black mb-4 tracking-tight">The Negative Mandate</h3>
                        <p className="text-white/60 leading-relaxed text-lg">
                           While <span className="tibetan-text text-brand-secondary text-2xl">དགོས་རེད།</span> means "should", it has no positive counterpart with <span className="tibetan-text text-brand-secondary text-2xl">རྒྱུ་ཡོད་རེད།</span>. Instead, we use <span className="tibetan-text text-brand-secondary text-2xl">རྒྱུ་ཡོད་མ་རེད།</span> specifically for general prohibitions.
                        </p>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {CH7_PROHIBITION.map((pro, i) => (
                       <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm hover:border-brand-secondary/30 transition-all group overflow-hidden relative">
                          <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                            <X className="w-12 h-12" />
                          </div>
                          <p className="text-[10px] font-black uppercase text-brand-dark/20 mb-6 tracking-widest">{pro.type}</p>
                          <span className="tibetan-text text-3xl text-brand-dark block mb-4 leading-normal">{pro.tib}</span>
                          <p className="text-lg font-bold text-brand-dark/70 italic">"{pro.eng}"</p>
                       </div>
                     ))}
                  </div>
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'permission' && (
            <SectionWrapper title="Permission & Ability" description="Asking 'Can I?' or 'May I?' and expressing rules about what is allowed.">
               <div className="space-y-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <div className="space-y-8">
                        <div className="bg-brand-muted/10 p-10 rounded-[3.5rem] border border-orange-50/50">
                           <h3 className="text-xl font-black mb-6 text-brand-dark flex items-center gap-2">
                             <HelpCircle className="w-5 h-5 text-brand-primary" />
                             Asking Consent
                           </h3>
                           <p className="text-sm text-brand-dark/70 leading-relaxed mb-6">
                              The formula <span className="tibetan-text text-xl font-bold">...ན་འགྲིགས་ཀྱི་རེད་པས།</span> literally means "Is it okay if...?"
                           </p>
                           <div className="p-6 bg-brand-dark text-white rounded-2xl shadow-lg border border-white/5 space-y-3">
                              <p className="text-[10px] font-black uppercase text-brand-secondary/60 tracking-tighter">Grammar Rule</p>
                              <p className="text-xs leading-relaxed">
                                 When using the conditional particle <span className="tibetan-text text-brand-secondary">ན་</span>, the verb in front of it <span className="underline decoration-brand-secondary">must be in the past tense</span>.
                              </p>
                           </div>
                        </div>

                        <div className="space-y-4">
                           {CH7_PERMISSION.filter(p => p.type === 'Can I?').map((per, i) => (
                              <div key={i} className="bg-white p-6 rounded-[2rem] border border-orange-50 shadow-sm hover:shadow-md transition-all relative group overflow-hidden">
                                 <span className="tibetan-text text-2xl text-brand-dark block mb-2 leading-relaxed">{per.tib}</span>
                                 <p className="text-lg font-medium text-brand-dark/60 italic">"{per.eng}"</p>
                                 <div className="absolute top-0 right-0 w-1 h-full bg-brand-primary opacity-20" />
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-8">
                        <div className="bg-brand-dark p-10 rounded-[3.5rem] shadow-xl text-white relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-8 opacity-10">
                              <Heart className="w-24 h-24" />
                           </div>
                           <h3 className="text-xl font-black mb-6 text-brand-secondary uppercase tracking-tight">Polite Requests</h3>
                           <p className="text-sm text-white/50 leading-relaxed mb-6">
                              Using <span className="tibetan-text text-xl text-brand-secondary">ཆོག་པ་ཅིག།</span> is more polite than "can I".
                           </p>
                           <div className="p-4 bg-white/5 rounded-2xl border border-white/10 italic text-[11px] text-white/40 leading-relaxed">
                              Note: The verb <span className="tibetan-text text-brand-secondary">བཅར་</span> is the humilific (polite) form for both <span className="font-bold text-white/60">going</span> and <span className="font-bold text-white/60">coming</span>.
                           </div>
                        </div>

                        <div className="space-y-4">
                           {CH7_PERMISSION.filter(p => p.type === 'May I?').map((per, i) => (
                              <div key={i} className="bg-white p-6 rounded-[2rem] border border-orange-50 shadow-sm hover:shadow-md transition-all relative group overflow-hidden">
                                 <span className="tibetan-text text-2xl text-brand-primary block mb-2 leading-relaxed">{per.tib}</span>
                                 <p className="text-lg font-medium text-brand-dark/60 italic">"{per.eng}"</p>
                                 <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary opacity-20" />
                              </div>
                           ))}
                        </div>

                        <div className="space-y-6 pt-8">
                           <h3 className="text-xl font-black uppercase tracking-[0.2em] text-brand-dark/40 px-4 flex items-center gap-4">
                              <span className="w-8 h-px bg-brand-secondary/30"></span>
                              Rules & Ability
                              <span className="flex-1 h-px bg-brand-secondary/30"></span>
                           </h3>
                           {CH7_PERMISSION.filter(p => p.type === 'Allowed' || p.type === 'Ability/Req' || p.type === 'Prohibition').map((per, i) => (
                              <div key={i} className="bg-white p-6 rounded-[2rem] border border-orange-50 shadow-sm flex flex-col justify-center relative group">
                                 <div className="flex items-center gap-3 mb-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/30">{per.type}</span>
                                 </div>
                                 <span className="tibetan-text text-xl text-brand-dark block mb-2 leading-relaxed">{per.tib}</span>
                                 <p className="text-sm font-medium text-brand-dark/50 italic">"{per.eng}"</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'hopes' && (
            <SectionWrapper title="Hopes, Wishes & Aspirations" description="Expressing future hopes, aspirations for peace, and counter-factual wishes.">
               <div className="space-y-16">
                  <div className="bg-brand-muted/10 p-10 rounded-[4rem] border border-brand-primary/5">
                     <h3 className="text-2xl font-black mb-8 text-brand-dark">Grammar Specifics</h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                           <h4 className="font-bold text-brand-dark uppercase tracking-widest text-xs flex items-center gap-2">
                             <ChevronRight className="w-3 h-3 text-brand-primary" />
                             The 'Hope' Construction
                           </h4>
                           <p className="text-sm text-brand-dark/60 leading-relaxed">
                             Depends on the suffix of the preceding verb: <br/>
                             - After <span className="font-bold">g, d, n, b, m, s</span> use <span className="tibetan-text font-black text-brand-primary">པའི་རེ་བ་ཡོད།</span> <br/>
                             - After <span className="font-bold">ng, 'a, r, l</span> or no suffix use <span className="tibetan-text font-black text-brand-primary">བའི་རེ་བ་ཡོད།</span>
                           </p>
                        </div>
                        <div className="space-y-4">
                           <h4 className="font-bold text-brand-dark uppercase tracking-widest text-xs flex items-center gap-2">
                             <ChevronRight className="w-3 h-3 text-brand-primary" />
                             Aspirations ('May...')
                           </h4>
                           <p className="text-sm text-brand-dark/60 leading-relaxed">
                             Use <span className="tibetan-text font-bold text-brand-primary">བར་ཤོག།</span> (after ng, 'a, r, l) or <span className="tibetan-text font-bold text-brand-primary">པར་ཤོག།</span> (after g, d, n, b, m, s). <br/>
                             For nouns/adjectives, insert the verb <span className="tibetan-text text-brand-primary">ཡོང་</span> (be/come) first.
                           </p>
                        </div>
                        <div className="space-y-4">
                           <h4 className="font-bold text-brand-dark uppercase tracking-widest text-xs flex items-center gap-2">
                             <ChevronRight className="w-3 h-3 text-brand-primary" />
                             Wishes (If Only...)
                           </h4>
                           <p className="text-sm text-brand-dark/60 leading-relaxed">
                             Two main constructions: <br/>
                             - Verb + <span className="tibetan-text font-bold text-brand-primary">རོགས་བྱས་ན།</span> <br/>
                             - Verb + <span className="tibetan-text font-bold text-brand-primary">ཆོག་ག།</span> <br/>
                             Use 1st person auxiliaries even for 2nd/3rd person subjects.
                           </p>
                        </div>
                     </div>
                  </div>

                  {['Hope', 'Aspiration', 'Wish'].map((cat) => (
                    <div key={cat} className="space-y-8">
                       <h3 className="text-xl font-black uppercase tracking-[0.2em] text-brand-dark/40 px-4 flex items-center gap-4">
                          <span className="w-12 h-px bg-brand-primary/20"></span>
                          {cat === 'Hope' ? 'Hopes & Expectations' : cat === 'Aspiration' ? 'May it be... (Aspirations)' : 'I Wish / If Only'}
                          <span className="flex-1 h-px bg-brand-primary/20"></span>
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {CH7_HOPES.filter(h => h.type.includes(cat)).map((hope, i) => (
                           <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm flex flex-col group hover:scale-[1.02] transition-all">
                              <div className="flex justify-between items-start mb-6">
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/20">{hope.type}</span>
                                <div className="p-2 bg-brand-primary/5 rounded-xl group-hover:rotate-12 transition-transform">
                                  <Wind className="w-4 h-4 text-brand-primary opacity-40" />
                                </div>
                              </div>
                              <span className="tibetan-text text-xl text-brand-dark block mb-6 leading-relaxed flex-1">{hope.tib}</span>
                              <div className="h-px w-8 bg-brand-primary/10 mb-6" />
                              <p className="text-sm font-bold text-brand-dark/60 italic">"{hope.eng}"</p>
                           </div>
                         ))}
                       </div>
                    </div>
                  ))}
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'quiz_ch7' && (
            <SectionWrapper title="Chapter 7 Practice Quiz" description="Test your knowledge of desires, intentions, obligations, permissions, and hopes.">
              <QuizSection items={CHAPTER7_QUIZ} baseIndex={400} />
            </SectionWrapper>
          )}

          {activeSection === 'infinitives' && (
            <SectionWrapper title="8.1 Infinitives & Gerunds" description="How to express 'to do' or 'doing' actions, such as 'It is easy to learn'.">
               <div className="space-y-12">
                   <div className="bg-brand-muted/10 p-10 rounded-[4rem] border border-brand-primary/5">
                      <h3 className="text-xl font-black text-brand-dark mb-4">The Grammar Magic: <span className="tibetan-text text-brand-primary tracking-widest text-3xl ml-4">ཡག་ / ག་</span></h3>
                      <p className="text-brand-dark/70 max-w-3xl leading-relaxed mb-6">
                        Tibetan doesn't use prepositions like "to". Instead, it uses nominalizing particles at the end of verbs. Use <span className="tibetan-text text-lg text-brand-primary">ཡག་</span> (pronounced <em>ya</em>) after most verbs. Use <span className="tibetan-text text-lg text-brand-secondary">ག་</span> (pronounced <em>ga</em>) specifically after verbs of motion like going and coming.
                      </p>
                   </div>
                   
                   <div className="space-y-16">
                      {['Adjective + To', 'Object to Verb', 'Two Verbs', 'Motion + To', 'Infinitive ཡག་', 'Gerund (Verb+ing)'].map(cat => (
                         <div key={cat} className="space-y-6">
                            <h3 className="text-xl font-black uppercase tracking-[0.2em] text-brand-dark/40 px-4 flex items-center gap-4">
                               <span className="w-8 h-px bg-brand-primary/20"></span>
                               {cat}
                               <span className="flex-1 h-px bg-brand-primary/20"></span>
                            </h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                               {CH8_INFINITIVES.filter(inf => inf.type === cat).map((inf, i) => (
                                  <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-orange-50 shadow-sm hover:shadow-md transition-all flex flex-col justify-center relative">
                                     <span className="tibetan-text text-2xl text-brand-dark block mb-4 leading-relaxed">{inf.tib}</span>
                                     <p className="text-sm font-medium text-brand-dark italic">"{inf.eng}"</p>
                                  </div>
                               ))}
                            </div>
                         </div>
                      ))}
                   </div>
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'temporal' && (
            <SectionWrapper title="8.2 Temporal Clauses" description="Expressing 'before', 'after', 'when', 'while', and 'until'.">
               <div className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {CH8_TEMPORAL.map((temp, i) => (
                        <div key={i} className="bg-brand-dark p-8 rounded-[3rem] border border-white/5 shadow-xl flex flex-col group overflow-hidden relative">
                           <div className="absolute -top-4 right-8 bg-brand-secondary/10 px-4 py-8 rounded-b-[2rem] opacity-0 group-hover:opacity-100 transition-opacity">
                              <Clock className="w-8 h-8 text-brand-secondary" />
                           </div>
                           <p className="text-[10px] font-black uppercase text-brand-secondary/40 mb-6 tracking-widest">{temp.type}</p>
                           <span className="tibetan-text text-2xl text-brand-secondary block mb-4 leading-relaxed">{temp.tib}</span>
                           <p className="text-sm font-medium text-white/50 italic flex-1">"{temp.eng}"</p>
                        </div>
                     ))}
                  </div>

                  <div className="bg-white p-10 rounded-[3.5rem] border border-orange-50/50 shadow-sm">
                     <h3 className="text-xl font-bold mb-6 text-brand-dark">Quick Reference: Time Markers</h3>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="p-4 bg-brand-muted/10 rounded-2xl">
                           <span className="block font-black text-brand-dark mb-1">Before</span>
                           <span className="tibetan-text text-brand-primary">པའི་སྔོན་ལ་</span>
                        </div>
                        <div className="p-4 bg-brand-muted/10 rounded-2xl">
                           <span className="block font-black text-brand-dark mb-1">After</span>
                           <span className="tibetan-text text-brand-primary">པའི་རྗེས་ལ་ / ནས་</span>
                        </div>
                        <div className="p-4 bg-brand-muted/10 rounded-2xl">
                           <span className="block font-black text-brand-dark mb-1">While</span>
                           <span className="tibetan-text text-brand-primary">གིན་...གིན་</span>
                        </div>
                        <div className="p-4 bg-brand-muted/10 rounded-2xl">
                           <span className="block font-black text-brand-dark mb-1">Until</span>
                           <span className="tibetan-text text-brand-primary">(མ་) ... བར་དུ་</span>
                        </div>
                     </div>
                  </div>
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'conditional' && (
            <SectionWrapper title="8.3 Conditional Clauses" description="If, what if, could, and expressing hypothetical 'would have / should have' situations.">
               <div className="space-y-12">
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                       <div className="space-y-6">
                           <h3 className="text-xl font-black uppercase tracking-[0.2em] text-brand-dark/40 px-4 flex items-center gap-4">
                              If / What if (ན་)
                           </h3>
                           {CH8_CONDITIONAL.filter(c => c.type.includes('If') || c.type.includes('What if')).map((cond, i) => (
                              <div key={i} className="bg-white p-6 rounded-[2rem] border border-orange-50 shadow-sm">
                                 <span className="tibetan-text text-2xl text-brand-dark block mb-2 leading-relaxed">{cond.tib}</span>
                                 <p className="text-sm font-medium text-brand-dark/50 italic">"{cond.eng}"</p>
                              </div>
                           ))}
                       </div>
                       
                       <div className="space-y-6">
                           <h3 className="text-xl font-black uppercase tracking-[0.2em] text-brand-dark/40 px-4 flex items-center gap-4">
                              Hypothetical (Would / Should)
                           </h3>
                           {CH8_CONDITIONAL.filter(c => !c.type.includes('If') && !c.type.includes('What if')).map((cond, i) => (
                              <div key={i} className="bg-brand-dark p-6 rounded-[2rem] border border-white/5 shadow-xl relative group">
                                 <div className="absolute top-0 right-0 bg-brand-secondary/10 px-3 py-1 rounded-bl-xl text-[9px] font-black uppercase text-brand-secondary">
                                   {cond.type}
                                 </div>
                                 <span className="tibetan-text text-2xl text-brand-secondary block mb-2 leading-relaxed mt-2">{cond.tib}</span>
                                 <p className="text-sm font-medium text-white/50 italic">"{cond.eng}"</p>
                              </div>
                           ))}
                       </div>
                   </div>
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'causal' && (
            <SectionWrapper title="8.4 Causal Clauses" description="Using 'Because', 'Due to', and 'As' with ཙང་ and other structures.">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {CH8_CLAUSES.filter(clause => clause.type.includes('Because')).map((clause, i) => (
                     <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm flex flex-col justify-center hover:shadow-md transition-all">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 mb-4">{clause.type}</span>
                        <span className="tibetan-text text-2xl text-brand-dark block mb-4 leading-relaxed">{clause.tib}</span>
                        <p className="text-sm font-bold text-brand-dark/50 italic">"{clause.eng}"</p>
                     </div>
                  ))}
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'concessive' && (
            <SectionWrapper title="8.5 Concessive Clauses" description="Using 'However', 'Although', 'But' with ཏེ་, དེ་, སྟེ་.">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {CH8_CLAUSES.filter(clause => clause.type.includes('However')).map((clause, i) => (
                     <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm flex flex-col justify-center hover:shadow-md transition-all">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 mb-4">{clause.type}</span>
                        <span className="tibetan-text text-2xl text-brand-dark block mb-4 leading-relaxed">{clause.tib}</span>
                        <p className="text-sm font-bold text-brand-dark/50 italic">"{clause.eng}"</p>
                     </div>
                  ))}
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'purpose' && (
            <SectionWrapper title="8.6 Purpose Clauses" description="Expressing 'In order to' and 'So as not to' using ཡག་གི་ཆེད་དུ་.">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {CH8_CLAUSES.filter(clause => clause.type.includes('Purpose')).map((clause, i) => (
                     <div key={i} className="bg-brand-dark p-8 rounded-[3rem] border border-white/5 shadow-xl flex flex-col justify-center">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-4">{clause.type}</span>
                        <span className="tibetan-text text-2xl text-brand-secondary block mb-4 leading-relaxed">{clause.tib}</span>
                        <p className="text-sm font-bold text-white/50 italic">"{clause.eng}"</p>
                     </div>
                  ))}
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'sequential' && (
            <SectionWrapper title="8.7 Sequential Actions" description="Describing multiple actions in sequence using བྱས་ / བྱེད་.">
               <div className="grid grid-cols-1 gap-8">
                  {CH8_CLAUSES.filter(clause => clause.type.includes('Sequential')).map((clause, i) => (
                     <div key={i} className="bg-white p-10 rounded-[3rem] border border-brand-primary/10 shadow-lg flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary/80 mb-6">{clause.type}</span>
                        <span className="tibetan-text text-3xl text-brand-dark block mb-6 leading-loose">{clause.tib}</span>
                        <p className="text-lg font-bold text-brand-dark/60 italic">"{clause.eng}"</p>
                     </div>
                  ))}
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'conjunctions' && (
            <SectionWrapper title="8.8 Conjunctions & Connectives" description="A vocabulary list of bridging words to make your sentences flow naturally.">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {CH8_CONJUNCTIONS.map((conj, i) => (
                     <div key={i} className="bg-brand-muted/10 p-6 rounded-[2rem] flex flex-col items-center justify-center text-center hover:bg-brand-primary hover:text-white transition-colors group">
                        <span className="text-[9px] font-black uppercase tracking-widest text-brand-dark/40 group-hover:text-white/60 mb-2">{conj.eng}</span>
                        <span className="tibetan-text text-2xl text-brand-dark group-hover:text-white leading-normal">{conj.tib}</span>
                     </div>
                  ))}
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'quiz_ch8' && (
            <SectionWrapper title="Chapter 8 Practice Quiz" description="Test your knowledge of complex syntax, conjunctions, and clause chaining.">
              <QuizSection items={CHAPTER8_QUIZ} baseIndex={500} />
            </SectionWrapper>
          )}

          {activeSection === 'evidentiality' && (
            <SectionWrapper title="9.1 Evidentiality: Discovery, Hearsay, Presumption & Refutation" description="Nuance markers that clarify how the speaker came to know the information.">
               <div className="space-y-16">
                  {['Discovery', 'Hearsay', 'Presumption', 'Refutation/Assertion'].map(cat => (
                     <div key={cat} className="space-y-6">
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] text-brand-dark/40 px-4 flex items-center gap-4">
                           <span className="w-8 h-px bg-brand-primary/20"></span>
                           {cat}
                           <span className="flex-1 h-px bg-brand-primary/20"></span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {cat === 'Hearsay' && (
                             <div className="col-span-1 md:col-span-2 bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex items-start gap-4 mb-6">
                                <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                <div className="text-sm text-brand-dark/70 space-y-2">
                                   <p><strong>Note:</strong> Add <code>ཟ་</code> at the end of the sentence. The word <code>ཟ་</code> comes from <code>ཟེར་</code> which means "they say".</p>
                                </div>
                             </div>
                           )}
                           {cat === 'Presumption' && (
                             <div className="col-span-1 md:col-span-2 bg-brand-dark p-8 rounded-[2.5rem] border border-white/5 mb-6">
                               <h4 className="text-brand-secondary font-black tracking-widest text-sm uppercase mb-6">Presumption Rules (ཤག་ཡིན། / ཤག་རེད།)</h4>
                               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                 {CH9_PRESUMPTION_RULES.map((rule, idx) => (
                                   <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5">
                                      <span className="text-[10px] font-black uppercase tracking-widest text-white/50 block mb-2">{rule.type}</span>
                                      <span className="tibetan-text text-lg text-white block">{rule.pos}</span>
                                      {rule.neg && (
                                        <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between">
                                          <span className="text-[9px] text-red-400 font-bold uppercase tracking-widest bg-red-400/10 px-2 py-0.5 rounded">NEG</span>
                                          <span className="tibetan-text text-sm text-red-200">{rule.neg}</span>
                                        </div>
                                      )}
                                   </div>
                                 ))}
                               </div>
                             </div>
                           )}
                           {cat === 'Refutation/Assertion' && (
                             <div className="col-span-1 md:col-span-2 bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex items-start gap-4 mb-6">
                                <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                <div className="text-sm text-brand-dark/70 space-y-2">
                                   <p><strong>Note:</strong> <code>verb + པ་མ་རེད།</code> = it is not that (to refute a statement).</p>
                                   <p>Contrast this with <code>མ་ + verb + པ་རེད།</code> = someone chose not to do something.</p>
                                </div>
                             </div>
                           )}
                           {CH9_EVIDENTIALITY.filter(item => item.type.includes(cat)).map((item, i) => (
                              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-orange-50 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
                                 <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 mb-4">{item.type}</span>
                                 <span className="tibetan-text text-2xl text-brand-dark block mb-4 leading-relaxed">{item.tib}</span>
                                 <p className="text-sm font-bold text-brand-dark/60 italic">"{item.eng}"</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'pragmatics' && (
            <SectionWrapper title="9.2 Conversational Pragmatics" description="Managing conversational flow with emphatic tags and clarification ('You mean?').">
               <div className="space-y-16">
                  {[
                     { label: "9.2.1 'You mean to say'", match: "You mean? (ཨས་)" },
                     { label: "9.2.2 'I am letting you know' / Emphatic tags", match: "Letting you know (ད)" },
                     { label: "Emphatic tags (Confirmation)", match: "Confirmation tag" },
                     { label: "9.2.3 'As far as I know / remember'", match: "As far as I know" },
                     { label: "9.2.4 'It depends on' / 'Whether or not'", match: "Depends On/Whether" }
                  ].map(cat => (
                     <div key={cat.label} className="space-y-6">
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] text-brand-dark/40 px-4 flex items-center gap-4">
                           <span className="w-8 h-px bg-brand-primary/20"></span>
                           {cat.label}
                           <span className="flex-1 h-px bg-brand-primary/20"></span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {cat.match === 'Depends On/Whether' && (
                             <div className="col-span-1 md:col-span-2 bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex items-start gap-4 mb-6">
                                <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                <div className="text-sm text-brand-dark/70 space-y-2">
                                   <p><strong>Note:</strong> In order to say "whether or not" in Tibetan, use first person positive and negative auxiliary next to each other. If there is a verb, use positive verb and negative verb or verbalizer next to each other.</p>
                                </div>
                             </div>
                           )}
                           {CH9_PRAGMATICS.filter(item => item.type.includes(cat.match)).map((item, i) => (
                              <div key={i} className="bg-brand-muted/10 p-8 rounded-[3rem] border border-brand-primary/5 hover:border-brand-primary/20 transition-colors flex flex-col justify-center">
                                 <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 mb-4">{item.type}</span>
                                 <span className="tibetan-text text-2xl text-brand-dark block mb-4 leading-relaxed">{item.tib}</span>
                                 <p className="text-sm font-bold text-brand-dark/60 italic">"{item.eng}"</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'idioms' && (
            <SectionWrapper title="9.3 Advanced Idiomatic Structures" description="Expressing complex scenarios like 'Leave no stone unturned' and 'Without doing...'.">
               <div className="space-y-16">
                  {[
                     "Do one's best", "Leave no stone unturned", "Feel free to", 
                     "Why on earth", "Out of the question", "No point in", "What a nonsense",
                     "Worth doing", "Without doing", "Entails", "Merely because"
                  ].map(cat => (
                     <div key={cat} className="space-y-6">
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] text-brand-dark/40 px-4 flex items-center gap-4">
                           <span className="w-8 h-px bg-brand-primary/20"></span>
                           {cat}
                           <span className="flex-1 h-px bg-brand-primary/20"></span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {cat === 'Why on earth' && (
                             <div className="col-span-1 md:col-span-2 bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex items-start gap-4 mb-6">
                                <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                <div className="text-sm text-brand-dark/70 space-y-2">
                                   <p><strong>Note:</strong> Why on earth / why the hell = <code>verb in past tense + ནས་ག་རེ་བྱས་ག།</code></p>
                                </div>
                             </div>
                           )}
                           {cat === 'No point in' && (
                             <div className="col-span-1 md:col-span-2 bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex items-start gap-4 mb-6">
                                <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                <div className="text-sm text-brand-dark/70 space-y-2">
                                   <p><strong>Note:</strong> There is no point in = <code>verb (past) + ནས་ཆོ་ཡོད་མ་རེད།</code></p>
                                </div>
                             </div>
                           )}
                           {cat === 'Worth doing' && (
                             <div className="col-span-1 md:col-span-2 bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex items-start gap-4 mb-6">
                                <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                <div className="text-sm text-brand-dark/70 space-y-2">
                                   <p><strong>Note:</strong> It is worth + verb + ing = <code>verb (present) + འོས་པ་ཡོད་རེད།</code> or <code>རིན་ཆོག་པ་ཡོད་རེད།</code></p>
                                </div>
                             </div>
                           )}
                           {cat === 'Without doing' && (
                             <div className="col-span-1 md:col-span-2 bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex items-start gap-4 mb-6">
                                <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                <div className="text-sm text-brand-dark/70 space-y-2">
                                   <p><strong>Note:</strong> Without + noun = <code>noun + མེད་པ་ལ་</code></p>
                                   <p>Without + verb + ing = <code>མ་ + last syllable (past) + ནས་</code></p>
                                </div>
                             </div>
                           )}
                           {cat === 'Entails' && (
                             <div className="col-span-1 md:col-span-2 bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex items-start gap-4 mb-6">
                                <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                <div className="text-sm text-brand-dark/70 space-y-2">
                                   <p><strong>Note:</strong> <code>པ་ཁྱབ་ཀྱི་ཡོད་རེད།</code> = it is needless to say / it entails</p>
                                   <p><code>ཁྱབ་ཀྱི་ཡོད་མ་རེད།</code> = it doesn't necessarily mean</p>
                                </div>
                             </div>
                           )}
                           {cat === 'Merely because' && (
                             <div className="col-span-1 md:col-span-2 bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex items-start gap-4 mb-6">
                                <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                <div className="text-sm text-brand-dark/70 space-y-2">
                                   <p><strong>Note:</strong> <code>པ་ཙམ་གྱིས་</code> = simply because / merely because</p>
                                </div>
                             </div>
                           )}
                           {CH9_IDIOMS.filter(item => item.type.includes(cat)).map((item, i) => (
                              <div key={i} className="bg-brand-dark p-8 rounded-[2.5rem] border border-white/5 shadow-xl flex flex-col justify-center">
                                 <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-4">{item.type}</span>
                                 <span className="tibetan-text text-2xl text-brand-secondary block mb-4 leading-relaxed">{item.tib}</span>
                                 <p className="text-sm font-bold text-white/50 italic">"{item.eng}"</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'quotations' && (
            <SectionWrapper title="9.4 Direct Speech & Quotations" description="Reporting what others say; Tibetan uses only direct speech using ཟ་ / ཟ་གས།.">
               <div className="space-y-6">
                  <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex items-start gap-4 mb-8">
                     <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                     <div className="text-sm text-brand-dark/70 space-y-2">
                        <p><strong>Note:</strong> The question mark for ཟ་ is གས།</p>
                        <p>When the one who said it and the subject are the <strong>same</strong> (e.g. Tashi says "I am..."), add <strong>no agentive</strong> to the subject.</p>
                        <p>When the speaker and subject <strong>differ</strong> (e.g. Tashi says <em>he</em> [someone else] is...), the <strong>agentive particle</strong> must be added to the speaker's name.</p>
                     </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                     {CH9_QUOTATIONS.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-50 shadow-sm flex flex-col hover:shadow-md transition-all">
                           <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-4">{item.type}</span>
                           <span className="tibetan-text text-3xl text-brand-dark block mb-4 leading-loose">{item.tib}</span>
                           <p className="text-lg font-bold text-brand-dark/50 italic">"{item.eng}"</p>
                        </div>
                     ))}
                  </div>
               </div>
            </SectionWrapper>
          )}

          {activeSection === 'verb_passive' && (
            <SectionWrapper title="Voice: Passive Transformation" description="Examples of changing Active Voice into Passive Voice by adjusting the agentive focus.">
              <div className="space-y-8">
                {CH5_PASSIVE_EXAMPLES.map((ex, i) => (
                  <div key={i} className="bg-white rounded-[2.5rem] p-8 border border-orange-100 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-2 h-full bg-brand-primary/10 group-hover:bg-brand-primary transition-colors" />
                     <div className="space-y-4">
                        <div className="inline-block px-3 py-1 bg-brand-muted/30 rounded-full text-[10px] font-black uppercase text-brand-dark/40 tracking-widest">Active Voice</div>
                        {ex.act !== "—" ? (
                          <>
                            <span className="tibetan-text text-2xl text-brand-dark block">{ex.act}</span>
                            <p className="text-sm font-medium italic text-brand-dark/50 italic leading-relaxed">"{ex.act_eng}"</p>
                          </>
                        ) : (
                          <p className="text-xs text-brand-dark/20 italic">No specific active form noted</p>
                        )}
                     </div>
                     <div className="space-y-4 border-t lg:border-t-0 lg:border-l border-orange-50 pt-6 lg:pt-0 lg:pl-8">
                        <div className="inline-block px-3 py-1 bg-brand-primary/10 rounded-full text-[10px] font-black uppercase text-brand-primary tracking-widest">Passive Voice</div>
                        <span className="tibetan-text text-2xl text-brand-primary block">{ex.pas}</span>
                        <p className="text-sm font-bold text-brand-dark italic leading-relaxed">"{ex.pas_eng}"</p>
                     </div>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'quiz_ch9' && (
            <SectionWrapper title="Chapter 9 Practice Quiz" description="Test your knowledge of evidentiality, idiomatic expressions, and pragmatics.">
              <QuizSection items={CHAPTER9_QUIZ} baseIndex={600} />
            </SectionWrapper>
          )}

        </AnimatePresence>

        <footer className="p-12 text-center">
          <div className="inline-flex items-center gap-3 text-brand-dark/20 text-[10px] uppercase font-black tracking-[0.3em]">
            <div className="h-px w-10 bg-current" />
             Inspired by Gen Dawa's Teachings
            <div className="h-px w-10 bg-current" />
          </div>
        </footer>
      </main>
    </div>
  );
}

