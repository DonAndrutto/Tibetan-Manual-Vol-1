export const CONSONANTS = [
  { tib: "ཀ་", eng: "ka", tone: "High" }, { tib: "ཁ་", eng: "kha", tone: "High asp." }, { tib: "ག་", eng: "ga", tone: "Low" }, { tib: "ང་", eng: "nga", tone: "Low" },
  { tib: "ཅ་", eng: "ca", tone: "High" }, { tib: "ཆ་", eng: "cha", tone: "High asp." }, { tib: "ཇ་", eng: "ja", tone: "Low" }, { tib: "ཉ་", eng: "nya", tone: "Low" },
  { tib: "ཏ་", eng: "ta", tone: "High" }, { tib: "ཐ་", eng: "tha", tone: "High asp." }, { tib: "ད་", eng: "da", tone: "Low" }, { tib: "ན་", eng: "na", tone: "Low" },
  { tib: "པ་", eng: "pa", tone: "High" }, { tib: "ཕ་", eng: "pha", tone: "High asp." }, { tib: "བ་", eng: "ba", tone: "Low" }, { tib: "མ་", eng: "ma", tone: "Low" },
  { tib: "ཙ་", eng: "tsa", tone: "High" }, { tib: "ཚ་", eng: "tsha", tone: "High asp." }, { tib: "ཛ་", eng: "dza", tone: "Low" }, { tib: "ཝ་", eng: "wa", tone: "Low" },
  { tib: "ཞ་", eng: "zha", tone: "Low" }, { tib: "ཟ་", eng: "za", tone: "Low" }, { tib: "འ་", eng: "'a", tone: "Low" }, { tib: "ཡ་", eng: "ya", tone: "Low" },
  { tib: "ར་", eng: "ra", tone: "Low" }, { tib: "ལ་", eng: "la", tone: "Low" }, { tib: "ཤ་", eng: "sha", tone: "High" }, { tib: "ས་", eng: "sa", tone: "High" },
  { tib: "ཧ་", eng: "ha", tone: "High" }, { tib: "ཨ་", eng: "a", tone: "High" }
];

export const VOWELS = [
  { 
    name: "གི་གུ་ (giku)", 
    symbol: "ི", 
    sound: "i", 
    examples: ["ཀི་ (ki)"],
    vocab: ["གི་ (of)", "ཉི་མ་ (sun/day)", "ནི་ (as for)", "མི་ (human)", "རི་ (mountain)", "ཤི་ (to die)"]
  },
  { 
    name: "ཞབས་ཀྱུ་ (shabkyu)", 
    symbol: "ུ", 
    sound: "u", 
    examples: ["ཀུ་ (ku)"],
    vocab: ["ངུ་ (to cry)", "ཆུ་ (water)", "བུ་ (son)", "སུ་ (who)"]
  },
  { 
    name: "འགྲེང་བུ་ (drengbu)", 
    symbol: "ེ", 
    sound: "e", 
    examples: ["ཀེ་ (ke)"],
    vocab: ["དེ་ (the/it)", "མེ་ (fire)", "ཚེ་ (life)"]
  },
  { 
    name: "ན་རོ་ (naro)", 
    symbol: "ོ", 
    sound: "o", 
    examples: ["ཀོ་ (ko)"],
    vocab: ["ཁོ་ (he)", "གོ་ (to hear)", "ཉོ་ (to buy)", "ཕོ་ (male)", "མོ་ (female)", "བུ་མོ་ (girl)", "འོ་མ་ (milk)"]
  }
];

export const VOWEL_VOCAB = [
  { tib: "ཀོ་", rom: "ko",   eng: "leather" },
  { tib: "ཁེ་", rom: "khe",  eng: "profit, advantage" },
  { tib: "ཁོ་", rom: "kho",  eng: "he, him" },
  { tib: "ངོ་", rom: "ngo",  eng: "face" },
  { tib: "ཆུ་", rom: "chu",  eng: "water" },
  { tib: "ཇོ་", rom: "jo",   eng: "lord, master" },
  { tib: "ཉི་", rom: "nyi",  eng: "sun" },
  { tib: "ཐོ་", rom: "tho",  eng: "list, register" },
  { tib: "དེ་", rom: "de",   eng: "that" },
  { tib: "དུ་", rom: "du",   eng: "smoke" },
  { tib: "ནུ་", rom: "nu",   eng: "breast" },
  { tib: "ཕོ་", rom: "pho",  eng: "male" },
  { tib: "བུ་", rom: "bu",   eng: "son, boy" },
  { tib: "མི་", rom: "mi",   eng: "man, person, human" },
  { tib: "མུ་", rom: "mu",   eng: "boundary, edge" },
  { tib: "མེ་", rom: "me",   eng: "fire" },
  { tib: "མོ་", rom: "mo",   eng: "female, divination" },
  { tib: "ཚེ་", rom: "tshe", eng: "life, lifespan" },
  { tib: "ཞི་", rom: "zhi",  eng: "peace" },
  { tib: "ཟོ་", rom: "zo",   eng: "eat (imperative)" },
  { tib: "རི་", rom: "ri",   eng: "mountain" },
  { tib: "རུ་", rom: "ru",   eng: "horn, division" },
  { tib: "རེ་", rom: "re",   eng: "each, to hope" },
  { tib: "ལི་", rom: "li",   eng: "bronze, bell-metal" },
  { tib: "ལོ་", rom: "lo",   eng: "year" },
  { tib: "ཤི་", rom: "shi",  eng: "to die" },
  { tib: "སུ་", rom: "su",   eng: "who" },
  { tib: "སོ་", rom: "so",   eng: "tooth" },
];

export const PROVERBS = [
  {
    tib: "སྐྱུར་མོ་གཅིག་དང་མ་འཕྲད་ན། མངར་མོ་ཚང་མ་ཅང་ཅང་ཡིན།",
    words: [
      { t: "སྐྱུར་མོ་", e: "sour" },
      { t: "གཅིག་", e: "something" },
      { t: "དང་", e: "with" },
      { t: "མ་འཕྲད་ན།", e: "if don't encounter" },
      { t: "མངར་མོ་", e: "sweet" },
      { t: "ཚང་མ་", e: "all" },
      { t: "ཅང་ཅང་", e: "tasteless" },
      { t: "ཡིན།", e: "are" }
    ],
    eng: "Without encountering something sour, all sweet things taste of nothing."
  },
  {
    tib: "ཁ་བཤད་ཆུ་ཡི་ལྦུ་བ། ལག་ལེན་གསེར་གྱི་ཐིག་པ།",
    words: [
      { t: "ཁ་བཤད་", e: "mouth said" },
      { t: "ཆུ་ཡི་", e: "water of" },
      { t: "ལྦུ་བ།", e: "bubble" },
      { t: "ལག་ལེན་", e: "practice" },
      { t: "གསེར་གྱི་", e: "gold of" },
      { t: "ཐིག་པ།", e: "droplets" }
    ],
    eng: "Speech is a bubble on water; practice is a drop of gold."
  },
  {
    tib: "སྔོན་མ་གང་བྱས་ད་ལྟའི་ལུས་ལ་ལྟོས། ཕྱི་མ་གར་འགྲོ་ད་ལྟའི་ལས་ལ་ལྟོས།།",
    words: [
      { t: "སྔོན་མ་", e: "in the past" },
      { t: "གང་བྱས་", e: "what did" },
      { t: "ད་ལྟའི་", e: "present (of)" },
      { t: "ལུས་", e: "body/form" },
      { t: "ལ་", e: "at/to" },
      { t: "ལྟོས།", e: "look" },
      { t: "ཕྱི་མ་", e: "later" },
      { t: "གར་འགྲོ་", e: "where go" },
      { t: "ད་ལྟའི་", e: "present" },
      { t: "ལས་", e: "action" },
      { t: "ལ་", e: "to" },
      { t: "ལྟོས།", e: "look" }
    ],
    eng: "To know what you did in the past, look at your present body; to know where you will go, look at your present actions."
  },
  {
    tib: "རེ་བ་བཟང་ས་ནས་བྱེད། གྲ་སྒྲིགས་སྡུག་ས་ནས་བྱེད།",
    words: [
      { t: "རེ་བ་", e: "hope" },
      { t: "བཟང་ས་", e: "good side" },
      { t: "ནས་", e: "from" },
      { t: "བྱེད།", e: "do" },
      { t: "གྲ་སྒྲིགས་", e: "prepare" },
      { t: "སྡུག་ས་", e: "bad side" },
      { t: "ནས་", e: "from" },
      { t: "བྱེད།", e: "do" }
    ],
    eng: "Hope for the best; prepare for the worst."
  },
  {
    tib: "ཆུ་ཐིག་བསགས་པའི་རྒྱ་མཚོ།",
    words: [
      { t: "ཆུ་ཐིག་", e: "water droplets" },
      { t: "བསགས་པའི་", e: "accumulated" },
      { t: "རྒྱ་མཚོ།", e: "ocean" }
    ],
    eng: "An ocean is formed by the accumulation of drops of water."
  }
];

export const CHAPTERS = [
  { id: 1, title: "Orthography & Phonetics", subtitle: "The Foundation" },
  { id: 2, title: "Nouns & Pronouns", subtitle: "The Building Blocks" },
  { id: 3, title: "Basic Sentence Structure", subtitle: "Copulas & Existential Verbs" },
  { id: 4, title: "Attributes & Time", subtitle: "Describing & Counting" },
  { id: 5, title: "The Verb System", subtitle: "Actions, Tense & Evidentiality" },
  { id: 6, title: "Imperatives & Requests", subtitle: "Commands, Requests & Causatives" },
  { id: 7, title: "Modality & Intentions", subtitle: "Desires, Intentions & Obligations" },
  { id: 8, title: "Complex Syntax", subtitle: "Clause Chaining & Conjunctions" },
  { id: 9, title: "Idioms & Epistemic Nuance", subtitle: "Advanced Conversational Expressions" }
];

export const NOUNS = {
  common: [
    { tib: "སློབ་གྲྭ་", eng: "school", lit: "school/corner" },
    { tib: "སློབ་ཕྲུག་", eng: "student", lit: "school-child" },
    { tib: "སློབ་དཔོན་", eng: "guru / teacher", lit: "classical" },
    { tib: "དགེ་རྒན་", eng: "teacher", lit: "virtue-senior" },
    { tib: "བླ་མ་", eng: "lama", lit: "spiritual teacher" },
    { tib: "སློབ་མ་", eng: "disciple", lit: "student" },
    { tib: "ཁང་པ་", eng: "house", lit: "building" },
    { tib: "ཟ་ཁང་", eng: "restaurant", lit: "eating-house" },
    { tib: "སྨན་", eng: "medicine", tone: "High" },
    { tib: "སྨན་ཁང་", eng: "hospital", lit: "medicine-house" },
    { tib: "སྨན་པ་", eng: "doctor", lit: "medicine-person" },
    { tib: "ཚོང་", eng: "business", tone: "High" },
    { tib: "ཚོང་ཁང་", eng: "shop", lit: "business-house" },
    { tib: "ཚོང་པ་", eng: "merchant", lit: "business-person" },
    { tib: "མགྲོན་པོ་", eng: "guest", lit: "visitor" },
    { tib: "མགྲོན་ཁང་", eng: "guesthouse", lit: "guest-house" },
    { tib: "གསེར་", eng: "gold", tone: "High" },
    { tib: "དངུལ་", eng: "money/silver", tone: "Low" },
    { tib: "དངུལ་ཁང་", eng: "bank", lit: "money-house" },
    { tib: "དགོན་པ་", eng: "monastery", lit: "hermitage" },
    { tib: "དགེ་བ་", eng: "merit/virtue", tone: "High" },
    { tib: "དགེ་འདུན་པ་", eng: "monk", lit: "virtue-wish-person" },
    { tib: "དགེ་སློང་", eng: "ordained monk", skt: "bhikshu" },
    { tib: "དགེ་བའི་བཤེས་གཉེན་", eng: "spiritual friend", skt: "kalyanamitra" },
    { tib: "བྱུང་ཁུངས་", eng: "origin/source", lit: "coming-source" },
    { tib: "ལས་ཁུངས་", eng: "office", lit: "work-source" },
    { tib: "ཁུངས་སྐྱེལ་", eng: "proof", lit: "to prove" },
    { tib: "མི་", eng: "person", tone: "Low" },
    { tib: "མི་མང་", eng: "people", lit: "many-people" }
  ],
  abstract: [
    { tib: "ཉོན་མོངས་", eng: "afflictions", skt: "klesha" },
    { tib: "འདོད་ཆགས་", eng: "attachment", skt: "desire" },
    { tib: "ཞེ་སྡང་", eng: "hatred", skt: "aversion" },
    { tib: "ཏི་མུག་", eng: "ignorance", skt: "moha" },
    { tib: "ང་རྒྱལ་", eng: "ego/pride", lit: "i-victory" },
    { tib: "ཕྲག་དོག་", eng: "jealousy", tone: "High" },
    { tib: "སྡུག་བསྔལ་", eng: "suffering", skt: "duhkha" },
    { tib: "བདེ་བ་", eng: "happiness", skt: "sukha" },
    { tib: "འཕྲོ་བརླག་", eng: "waste", lit: "scattering" },
    { tib: "དཀོན་མཆོག་གསུམ་", eng: "Three Jewels", skt: "Triratna" },
    { tib: "སྙིང་", eng: "heart", tone: "High" },
    { tib: "སྙིང་རྗེ་", eng: "compassion", skt: "karuna" },
    { tib: "སྙིང་དོན་", eng: "moral/essence", lit: "heart-meaning" },
    { tib: "སྙིང་པོ་", eng: "essence/core", lit: "heart-thing" },
    { tib: "སེམས་", eng: "mind", tone: "High" },
    { tib: "སེམས་ཅན་", eng: "sentient being", lit: "mind-having" },
    { tib: "སེམས་ཤུགས་", eng: "courage", lit: "mind-strength" },
    { tib: "བྱང་ཆུབ་ཀྱི་སེམས་", eng: "bodhicitta", lit: "awakening-mind" },
    { tib: "བྱང་ཆུབ་སེམས་དཔའ་", eng: "bodhisattva", lit: "awakening-hero" }
  ],
  proper: [
    { tib: "རྒྱ་གར་", eng: "India", lit: "Indian", flag: "🇮🇳" },
    { tib: "རྒྱ་ནག་", eng: "China", lit: "Chinese", flag: "🇨🇳" },
    { tib: "བལ་ཡུལ་", eng: "Nepal", lit: "Nepalese", flag: "🇳🇵" },
    { tib: "འབྲུག་ཡུལ་", eng: "Bhutan", lit: "Bhutanese", flag: "🇧🇹" },
    { tib: "ཨ་རི་", eng: "U.S.A.", lit: "American", flag: "🇺🇸" },
    { tib: "དབྱིན་ཡུལ་", eng: "England", lit: "English", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { tib: "ཉི་ཧོང་", eng: "Japan", lit: "Japanese", flag: "🇯🇵" },
    { tib: "བོད་", eng: "Tibet", lit: "Tibetan", flag: "🏔️" },
    { tib: "རྡོ་རྗེ་གདན་", eng: "Bodhgaya", lit: "diamond-seat" },
    { tib: "ལྷ་ས་", eng: "Lhasa", lit: "god-place" },
    { tib: "ཡིད་བཞིན་ནོར་བུ་", eng: "Dalai Lama", lit: "wish-fulfilling jewel" }
  ],
  nature: [
    { tib: "གནམ་", eng: "sky", tone: "High" },
    { tib: "གནམ་གཤིས་", eng: "weather", lit: "sky-character" },
    { tib: "ཉི་མ་", eng: "sun/day", tone: "High" },
    { tib: "ཟླ་བ་", eng: "moon/month", tone: "Low" },
    { tib: "སྐར་མ་", eng: "star/minute", tone: "High" },
    { tib: "ཤིང་", eng: "wood/tree", tone: "High" },
    { tib: "ཤིང་ནགས་", eng: "forest", lit: "wood-woods" },
    { tib: "ཤིང་སྡོང་", eng: "tree", lit: "wood-trunk" },
    { tib: "ཤིང་ཏོག་", eng: "fruit", lit: "wood-fruit" },
    { tib: "མེ་", eng: "fire", tone: "High" },
    { tib: "མེ་ཏོག་", eng: "flower", lit: "fire-top" },
    { tib: "ཆུ་", eng: "water", tone: "High" },
    { tib: "ཆུ་མིག་", eng: "spring", lit: "water-eye" },
    { tib: "ཚ་ཆུ་", eng: "hot spring", lit: "hot-water" },
    { tib: "འཐུང་ཆུ་", eng: "drinking water", lit: "drinking-water" },
    { tib: "མཚོ་", eng: "lake/sea", tone: "Low" },
    { tib: "རྒྱ་མཚོ་", eng: "ocean", lit: "vast-sea" },
    { tib: "ཆུ་མོ་", eng: "river", lit: "female-water" },
    { tib: "ཆར་པ་", eng: "rain", tone: "High" },
    { tib: "གངས་", eng: "snow", tone: "High" },
    { tib: "རི་", eng: "hill/mountain", tone: "Low" },
    { tib: "གངས་རི་", eng: "snow mountain", tone: "High" },
    { tib: "འཁྱགས་པ་", eng: "ice", tone: "High" }
  ],
  polity: [
    { tib: "རྒྱལ་བ་", eng: "Victorious One", hon: "His Holiness" },
    { tib: "རྒྱལ་པོ་", eng: "king", tone: "High" },
    { tib: "རྒྱལ་མོ་", eng: "queen", tone: "High" },
    { tib: "རྒྱལ་ས་", eng: "capital", lit: "king-place" },
    { tib: "རྒྱལ་ཁབ་", eng: "country", lit: "king-state" },
    { tib: "རྒྱལ་ཚབ་", eng: "regent", lit: "king-representative" },
    { tib: "སྲིད་", eng: "politics", tone: "Low" },
    { tib: "སྲིད་འཛིན་", eng: "president", lit: "politics-holder" },
    { tib: "བློན་པོ་", eng: "minister", tone: "Low" },
    { tib: "སྲིད་བློན་", eng: "prime minister", lit: "politics-minister" },
    { tib: "སྲིད་དོན་པ་", eng: "politician", lit: "politics-matter-person" },
    { tib: "སྲིད་ཇུས་", eng: "policy", lit: "politics-strategy" }
  ],
  family: [
    { tib: "པོ་པོ་ལགས་", eng: "grandfather", hon: "Yes" },
    { tib: "རྨོ་རྨོ་ལགས་", eng: "grandmother", hon: "Yes" },
    { tib: "ཨ་མ་ལགས་", eng: "mother", hon: "Yes" },
    { tib: "པཱ་ལགས་", eng: "father", hon: "Yes" },
    { tib: "ཨ་ཅག་ལགས་", eng: "elder sister", hon: "Yes" },
    { tib: "ཇོ་ལགས་", eng: "elder brother", hon: "Yes" },
    { tib: "སྲུ་མོ་", eng: "maternal aunt", tone: "High" },
    { tib: "ཨ་ནི་", eng: "paternal aunt", tone: "High" },
    { tib: "བུ་", eng: "son", tone: "High" },
    { tib: "བུ་མོ་", eng: "daughter/girl", tone: "High" },
    { tib: "ཚ་བོ་", eng: "grandson", tone: "High" },
    { tib: "ཚ་མོ་", eng: "granddaughter", tone: "High" },
    { tib: "ཨ་ཞང་", eng: "maternal uncle", tone: "High" },
    { tib: "ཨ་ཁུ་", eng: "paternal uncle", tone: "High" },
    { tib: "སྐྱེས་དམན་", eng: "wife", tone: "Low" },
    { tib: "ཁྱོ་ག་", eng: "husband", tone: "Low" },
    { tib: "མནའ་མ་", eng: "daughter-in-law", tone: "Low" },
    { tib: "མག་པ་", eng: "son-in-law", tone: "Low" }
  ],
  qualities: [
    { tib: "རྒྱུ་མཚན་དང་ལྡན་པ་", eng: "reasonable", lit: "possessing reasons" },
    { tib: "ཉམས་མྱོང་དང་ལྡན་པ་", eng: "experienced", lit: "possessing experience" },
    { tib: "སློབ་སྦྱོང་དང་ལྡན་པ་", eng: "educated", lit: "possessing education" },
    { tib: "གདེངས་ཚོད་དང་ལྡན་པ་", eng: "confident", lit: "possessing confidence" },
    { tib: "ཚད་ལྡན་", eng: "qualified", lit: "possessing standard" },
    { tib: "དོན་དང་ལྡན་པ་", eng: "meaningful", lit: "possessing meaning" }
  ]
};

export const PRONOUNS = [
  { p: "1st", s: "ང་", pl: "ང་ཚོ་", eng: "I / We", oblique: "ང་ལ་" },
  { p: "2nd", s: "ཁྱེད་རང་", pl: "ཁྱེད་རང་ཚོ་", eng: "You", oblique: "ཁྱེད་རང་ལ་" },
  { p: "3rd (H)", s: "ཁོང་", pl: "ཁོང་ཚོ་", eng: "He / She (Hon.)", oblique: "ཁོང་ལ་" },
  { p: "3rd (M)", s: "ཁོ་", pl: "ཁོང་ཚོ་", eng: "He", oblique: "ཁོ་ལ་" },
  { p: "3rd (F)", s: "མོ་", pl: "—", eng: "She", oblique: "མོ་ལ་" },
  { p: "Reflexive", s: "རང་", pl: "སོ་སོ་", eng: "Self / Oneself", oblique: "སོ་སོ་ལ་" }
];

export const DEMONSTRATIVES = [
  { tib: "འདི་", eng: "this", type: "near" },
  { tib: "དེ་", eng: "that / the / it", type: "distant" },
  { tib: "འདི་ཚོ་", eng: "these", type: "near plural" },
  { tib: "དེ་ཚོ་", eng: "those", type: "distant plural" },
  { tib: "ཕ་གི་", eng: "that over there", type: "visible distance" },
  { tib: "ཡ་གི་", eng: "that up there", type: "visible above" },
  { tib: "མ་གི་", eng: "that down there", type: "visible below" }
];

export const POSSESSIVE_PRONOUNS = [
  { tib: "ངའི་", eng: "my", formation: "ང་ + འི་" },
  { tib: "ང་ཚོའི་", eng: "our", formation: "ང་ཚོ་ + འི་" },
  { tib: "ཁྱེད་རང་གི་", eng: "your", formation: "ཁྱེད་རང་ + གི་" },
  { tib: "ཁོ་ + འི་", eng: "his", formation: "ཁོའི་" },
  { tib: "མོ་ + འི་", eng: "her", formation: "མོའི་" },
  { tib: "ཁོང་གི་", eng: "his/her (hon.)", formation: "ཁོང་ + གི་" },
  { tib: "ཁོང་ཚོའི་", eng: "their", formation: "ཁོང་ཚོ་ + འི་" },
  { tib: "དེའི་", eng: "its", formation: "དེ་ + འི་" }
];

export const GENITIVE_RULES = [
  { endings: ["ད་", "བ་", "ས་"], particle: "ཀྱི་" },
  { endings: ["ག་", "ང་"], particle: "གི་" },
  { endings: ["ན་", "མ་", "ར་", "ལ་"], particle: "གྱི་" },
  { endings: ["None"], particle: "འི་" },
  { endings: ["འ་"], particle: "ི" }
];

export const GENITIVE_EXAMPLES = [
  { tib: "འདི་ངའི་དེབ་རེད།", eng: "This is my book." },
  { tib: "འདི་ཁྱེད་རང་གི་སྨྱུ་གུ་རེད།", eng: "This is your pen." },
  { tib: "དེ་ཁོའི་ཁང་པ་རེད།", eng: "That is his house." },
  { tib: "དེ་བཀྲ་ཤིས་ཀྱི་པ་ལགས་རེད།", eng: "That is Tashi's father." },
  { tib: "དེབ་འདི་ངའི་མ་རེད།", eng: "This is not my book." }
];

export const DATIVE_LOCATIVE = [
  { tib: "ཆུ་ཚོད་གཅིག་ལ་", eng: "At one o'clock", function: "Time" },
  { tib: "གཟའ་ཟླ་བ་ལ་", eng: "On Monday", function: "Time" },
  { tib: "རྒྱ་གར་ལ་", eng: "In India", function: "Location" },
  { tib: "སྨན་ཁང་ལ་", eng: "At the hospital", function: "Location" }
];

export const AGENTIVE_PRONOUNS = [
  { eng: "I / me", agentive: "ངས་", dative: "ང་ལ་" },
  { eng: "we / us", agentive: "ང་ཚོས་", dative: "ང་ཚོ་ལ་" },
  { eng: "you", agentive: "ཁྱེད་རང་གིས་", dative: "ཁྱེད་རང་ལ་" },
  { eng: "he (hon.)", agentive: "ཁོང་གིས་", dative: "ཁོང་ལ་" },
  { eng: "she", agentive: "མོས་", dative: "མོ་ལ་" },
  { eng: "they", agentive: "ཁོང་ཚོས་", dative: "ཁོང་ཚོ་ལ་" }
];

export const VERBS_TO_BE = [
  { tib: "རེད་", pron: "re", eng: "Assertive 'is' (objective / 3rd person)" },
  { tib: "མ་རེད་", pron: "ma re", eng: "Negative: is not" },
  { tib: "རེད་པས་ / རེད་དམ", pron: "re pä", eng: "Question: is it?" },
  { tib: "ཡིན་", pron: "yin", eng: "Egophoric 'am' (subjective / 1st person)" },
  { tib: "མན་ / མིན་", pron: "män / min", eng: "Negative: am not" },
  { tib: "ཡིན་པས་ / ཡིན་ནམ", pron: "yin pä", eng: "Question: am I?" },
];

export const READING_CONTENT = [
  {
    title: "A Prayer to Manjushree",
    lines: [
      { 
        words: [
          { t: "བརྩེ་ལྡན་", e: "compassionate" },
          { t: "ཁྱེད་ཀྱི་", e: "your" },
          { t: "མཁྱེན་རབ་", e: "excellent wisdom" },
          { t: "འོད་ཟེར་", e: "light" },
          { t: "གྱིས།", e: "by" }
        ],
        fullEng: "By the light of your excellent wisdom, O Compassionate One," 
      },
      { 
        words: [
          { t: "བདག་", e: "my" },
          { t: "བློའི་", e: "mind's" },
          { t: "ཏི་མུག་", e: "ignorance" },
          { t: "མུན་པ་", e: "darkness" },
          { t: "རབ་", e: "completely" },
          { t: "བསལ་", e: "cleared" },
          { t: "ནས།", e: "after" }
        ],
        fullEng: "Having completely cleared the darkness of my mind's ignorance," 
      },
      { 
        words: [
          { t: "བཀའ་", e: "words of Buddha" },
          { t: "དང་", e: "and" },
          { t: "བསྟན་བཅོས་", e: "treatise" },
          { t: "གཞུང་ལུགས་", e: "texts/traditions" },
          { t: "རྟོག་པ་", e: "understand" },
          { t: "ཡི།", e: "of" }
        ],
        fullEng: "To understand the words of the Buddha, the treatises, and traditions," 
      },
      { 
        words: [
          { t: "བློ་གྲོས་", e: "wisdom" },
          { t: "སྤོབས་པའི་", e: "confidence" },
          { t: "སྣང་བ་", e: "feeling" },
          { t: "སྩལ་དུ་", e: "bestow" },
          { t: "གསོལ།", e: "pray" }
        ],
        fullEng: "I pray, bestow the light of wisdom and confidence." 
      }
    ]
  },
  {
    title: "Taking Refuge & Bodhicitta",
    lines: [
      { 
        words: [
          { t: "སངས་རྒྱས་", e: "Buddha" },
          { t: "ཆོས་", e: "Dharma" },
          { t: "དང་", e: "and" },
          { t: "ཚོགས་ཀྱི་", e: "of assembly" },
          { t: "མཆོག་", e: "excellent" },
          { t: "རྣམས་", e: "plural" },
          { t: "ལ་", e: "to" }
        ],
        fullEng: "To the Buddha, the Dharma, and the Supreme Assembly," 
      },
      { 
        words: [
          { t: "བྱང་ཆུབ་", e: "Buddhahood" },
          { t: "བར་དུ་", e: "until" },
          { t: "བདག་", e: "I" },
          { t: "ནི་", e: "as for" },
          { t: "སྐྱབས་སུ་", e: "refuge" },
          { t: "མཆི།", e: "go" }
        ],
        fullEng: "Until Buddhahood, I go for refuge," 
      },
      { 
        words: [
          { t: "བདག་གིས་", e: "I (by)" },
          { t: "སྦྱིན་", e: "generosity" },
          { t: "སོགས་", e: "and so forth" },
          { t: "བགྱིས་པའི་", e: "do which" },
          { t: "བསོད་ནམས་", e: "merit" },
          { t: "ཀྱིས།", e: "by" }
        ],
        fullEng: "By the merit of my generosity and so forth," 
      },
      { 
        words: [
          { t: "འགྲོ་", e: "beings" },
          { t: "ལ་", e: "to" },
          { t: "ཕན་", e: "benefit" },
          { t: "ཕྱིར་", e: "for sake of" },
          { t: "སངས་རྒྱས་", e: "Buddhahood" },
          { t: "འགྲུབ་པར་", e: "accomplish" },
          { t: "ཤོག།", e: "may I" }
        ],
        fullEng: "May I accomplish Buddhahood to benefit all beings." 
      }
    ]
  },
  {
    title: "Examine the Words",
    lines: [
      {
        words: [
          { t: "དགེ་སློང་", e: "monks" },
          { t: "དག་", e: "plural" },
          { t: "དང་", e: "and" },
          { t: "མཁས་", e: "scholars" },
          { t: "རྣམས་", e: "plural" },
          { t: "ཀྱིས།", e: "by" }
        ],
        fullEng: "By fully-ordained monks and scholars,"
      },
      {
        words: [
          { t: "བསྲེག་", e: "burn" },
          { t: "བཅད་", e: "cut" },
          { t: "བརྡར་བའི་", e: "rub/refined" },
          { t: "གསེར་", e: "gold" },
          { t: "བཞིན་དུ།", e: "like" }
        ],
        fullEng: "Like gold that is burned, cut, and rubbed,"
      },
      {
        words: [
          { t: "ལེགས་པར་", e: "nicely" },
          { t: "བརྟགས་", e: "examine" },
          { t: "ལ་", e: "to" },
          { t: "ང་ཡི་", e: "my" },
          { t: "བཀའ།", e: "words" }
        ],
        fullEng: "Nicely examine my words,"
      },
      {
        words: [
          { t: "བླངས་པར་", e: "accept" },
          { t: "བྱ་ཡི་", e: "do" },
          { t: "གུས་", e: "respect" },
          { t: "ཕྱིར་", e: "for sake of" },
          { t: "མིན།།", e: "not" }
        ],
        fullEng: "And then accept them, not just for respect's sake."
      }
    ]
  },
  {
    title: "The Four Perceptions",
    lines: [
      {
        words: [
          { t: "སངས་རྒྱས་", e: "Buddha" },
          { t: "ལ་", e: "to" },
          { t: "སྨན་པ་", e: "doctor" },
          { t: "མཁས་པའི་", e: "expert" },
          { t: "འདུ་ཤེས་", e: "perception" },
          { t: "བཞག།", e: "keep" }
        ],
        fullEng: "Perceive the Buddha as an expert doctor."
      },
      {
        words: [
          { t: "ཆོས་", e: "Dharma" },
          { t: "ལ་", e: "to" },
          { t: "སྨན་", e: "medicine" },
          { t: "གྱི་", e: "of" },
          { t: "འདུ་ཤེས་", e: "perception" },
          { t: "བཞག།", e: "keep" }
        ],
        fullEng: "Perceive the Dharma as medicine."
      },
      {
        words: [
          { t: "དགེ་འདུན་", e: "Sangha" },
          { t: "ལ་", e: "to" },
          { t: "ནད་གཡོག་", e: "nurse" },
          { t: "གྱི་", e: "of" },
          { t: "འདུ་ཤེས་", e: "perception" },
          { t: "བཞག།", e: "keep" }
        ],
        fullEng: "Perceive the Sangha as a nurse."
      },
      {
        words: [
          { t: "རང་", e: "self" },
          { t: "ལ་", e: "to" },
          { t: "ནད་པའི་", e: "patient" },
          { t: "འདུ་ཤེས་", e: "perception" },
          { t: "བཞག།", e: "keep" }
        ],
        fullEng: "Perceive yourself as a patient."
      }
    ]
  },
  {
    title: "Verses on Bodhisattva Practice",
    lines: [
      {
        words: [
          { t: "སྲིད་གསུམ་", e: "three cyclic existences" },
          { t: "བདེ་བ་", e: "happiness" },
          { t: "རྩ་རྩེའི་", e: "grass tip" },
          { t: "ཟིལ་པ་", e: "dewdrops" },
          { t: "བཞིན་", e: "like" }
        ],
        fullEng: "Happiness in the three realms is like dewdrops on a blade of grass,"
      },
      {
        words: [
          { t: "ཡུད་ཙམ་", e: "matter of moments" },
          { t: "ཞིག་གིས་", e: "in a" },
          { t: "འཇིག་པའི་", e: "perish" },
          { t: "ཆོས་ཅན་", e: "subject" },
          { t: "ཡིན།", e: "is" }
        ],
        fullEng: "In a matter of moments, it perishes and is gone."
      },
      {
        words: [
          { t: "ནམ་ཡང་", e: "at all" },
          { t: "མི་འགྱུར་", e: "not change" },
          { t: "ཐར་པའི་", e: "liberation" },
          { t: "གོ་འཕང་", e: "state" },
          { t: "མཆོག།", e: "supreme" }
        ],
        fullEng: "The supreme state of liberation that never changes,"
      },
      {
        words: [
          { t: "དོན་དུ་", e: "for that" },
          { t: "གཉེར་བ་", e: "to strive" },
          { t: "རྒྱལ་སྲས་", e: "Bodhisattva" },
          { t: "ལག་ལེན་", e: "practice" },
          { t: "ཡིན།།", e: "is" }
        ],
        fullEng: "To strive for that is the practice of a Bodhisattva."
      }
    ]
  },
  {
    title: "The Mother's Love (Verse 2)",
    lines: [
      {
        words: [
          { t: "བདག་གིས་", e: "I (by)" },
          { t: "བུ་བཞིན་", e: "son like" },
          { t: "གཅེས་པར་", e: "dearly" },
          { t: "བསྐྱངས་པའི་", e: "looked after" },
          { t: "མིས།", e: "whom a man" }
        ],
        fullEng: "A person whom I have looked after dearly like a son,"
      },
      {
        words: [
          { t: "བདག་ལ་", e: "to me" },
          { t: "དགྲ་བཞིན་", e: "enemy like" },
          { t: "ལྟ་བར་", e: "look" },
          { t: "བྱས་ན་", e: "even if" },
          { t: "ཡང།", e: "and" }
        ],
        fullEng: "Even if they look at me like an enemy,"
      },
      {
        words: [
          { t: "ནད་ཀྱིས་", e: "illness by" },
          { t: "བཏབ་པའི་", e: "tormented" },
          { t: "བུ་ལ་", e: "to son" },
          { t: "མ་བཞིན་", e: "mother like" },
          { t: "དུ།", e: "exactly" }
        ],
        fullEng: "To specifically love them like a mother to her sick son,"
      },
      {
        words: [
          { t: "ལྷག་པར་", e: "particular" },
          { t: "བརྩེ་བ་", e: "love" },
          { t: "རྒྱལ་སྲས་", e: "Bodhisattva" },
          { t: "ལག་ལེན་", e: "practice" },
          { t: "ཡིན།", e: "is" }
        ],
        fullEng: "Is the practice of a Bodhisattva."
      }
    ]
  },
  {
    title: "Offering to the Three Jewels",
    lines: [
      {
        words: [
          { t: "སྟོན་པ་", e: "teacher" },
          { t: "བླ་མེད་", e: "unsurpassable" },
          { t: "སངས་རྒྱས་", e: "Buddha" },
          { t: "རིན་པོ་ཆེ།", e: "precious" }
        ],
        fullEng: "The unsurpassable teacher, the precious Buddha,"
      },
      {
        words: [
          { t: "སྐྱོབ་པ་", e: "refuge provider" },
          { t: "བླ་མེད་", e: "unsurpassable" },
          { t: "དམ་ཆོས་", e: "holy Dharma" },
          { t: "རིན་པོ་ཆེ།", e: "precious" }
        ],
        fullEng: "The unsurpassable refuge, the precious holy Dharma,"
      },
      {
        words: [
          { t: "འདྲེན་པ་", e: "guide" },
          { t: "བླ་མེད་", e: "unsurpassable" },
          { t: "དགེ་འདུན་", e: "Sangha" },
          { t: "རིན་པོ་ཆེ།", e: "precious" }
        ],
        fullEng: "The unsurpassable guide, the precious Sangha,"
      },
      {
        words: [
          { t: "སྐྱབས་གནས་", e: "refuge source" },
          { t: "དཀོན་མཆོག་", e: "jewels" },
          { t: "གསུམ་ལ་", e: "three to" },
          { t: "མཆོད་པ་", e: "offering" },
          { t: "འབུལ།།", e: "offer" }
        ],
        fullEng: "To the three sources of refuge, I make this offering."
      }
    ]
  },
  {
    title: "Traditional Wisdom (Proverbs)",
    lines: [
      {
        words: [
          { t: "སྐྱུར་མོ་", e: "sour" },
          { t: "གཅིག་", e: "something" },
          { t: "དང་", e: "with" },
          { t: "མ་འཕྲད་ན།", e: "if don't encounter" }
        ],
        fullEng: "Without encountering something sour,"
      },
      {
        words: [
          { t: "མངར་མོ་", e: "sweet" },
          { t: "ཚང་མ་", e: "all" },
          { t: "ཅང་ཅང་", e: "tasteless" },
          { t: "ཡིན།", e: "are" }
        ],
        fullEng: "All sweet things taste of nothing."
      },
      {
        words: [
          { t: "ཁ་བཤད་", e: "speech" },
          { t: "ཆུ་ཡི་", e: "water of" },
          { t: "ལྦུ་བ།", e: "bubble" }
        ],
        fullEng: "Speech is a bubble on water;"
      },
      {
        words: [
          { t: "ལག་ལེན་", e: "practice" },
          { t: "གསེར་གྱི་", e: "gold of" },
          { t: "ཐིག་པ།", e: "droplets" }
        ],
        fullEng: "Practice is a drop of gold."
      },
      {
        words: [
          { t: "སྔོན་མ་", e: "in past" },
          { t: "གང་བྱས་", e: "what done" },
          { t: "ད་ལྟའི་", e: "present" },
          { t: "ལུས་ལ་", e: "to body" },
          { t: "ལྟོས།", e: "look" }
        ],
        fullEng: "To know what you did in the past, look at your present body;"
      },
      {
        words: [
          { t: "ཕྱི་མ་", e: "later" },
          { t: "གར་འགྲོ་", e: "where go" },
          { t: "ད་ལྟའི་", e: "present" },
          { t: "ལས་ལ་", e: "to action" },
          { t: "ལྟོས།།", e: "look" }
        ],
        fullEng: "To know where you will go, look at your present actions."
      }
    ]
  },
  {
    title: "Hope & Preparation",
    lines: [
      {
        words: [
          { t: "རེ་བ་", e: "hope" },
          { t: "བཟང་ས་", e: "good side" },
          { t: "ནས་", e: "from" },
          { t: "བྱེད།", e: "do" }
        ],
        fullEng: "Hope for the best;"
      },
      {
        words: [
          { t: "གྲ་སྒྲིགས་", e: "prepare" },
          { t: "སྡུག་ས་", e: "bad side" },
          { t: "ནས་", e: "from" },
          { t: "བྱེད།", e: "do" }
        ],
        fullEng: "Prepare for the worst."
      },
      {
        words: [
          { t: "ཆུ་ཐིག་", e: "water drops" },
          { t: "བསགས་པའི་", e: "accumulated" },
          { t: "རྒྱ་མཚོ།", e: "ocean" }
        ],
        fullEng: "An ocean is formed by the accumulation of drops of water."
      }
    ]
  }
];

export const UMLAUT_RULES = [
  { 
    title: "The Suffix 'e' Effect", 
    description: "Suffixes ད་ (da) and ས་ (sa) work like the vowel 'e'. They soften the pronunciation, but the suffixes themselves are silent.",
    examples: [
      { t: "ཆད་", target: "ཆེ་", eng: "che" },
      { t: "ནས་", target: "ནེ་", eng: "ne" },
      { t: "ལས་", target: "ལེ་", eng: "le" }
    ]
  },
  { 
    title: "The 'ü' Transformation", 
    description: "If suffixes ད་ or ས་ follow ུ་ (shabkyu), an umlaut 'ü' sound is added. The suffixes remain inaudible.",
    examples: [
      { t: "གུས་", target: "གུད་", eng: "gü" },
      { t: "དུས་", target: "དུད་", eng: "dü" },
      { t: "ལུས་", target: "ལུད་", eng: "lü" }
    ]
  },
  { 
    title: "The 'ö' Transformation", 
    description: "If suffixes ད་ or ས་ follow ོ་ (naro), the umlaut 'ö' sound is added; the suffixes remain silent.",
    examples: [
      { t: "གོས་", target: "གོད་", eng: "gö" },
      { t: "ཆོས་", target: "ཆོད་", eng: "chö" },
      { t: "བློས་", target: "བློད་", eng: "lö" }
    ]
  }
];

export const SUBSCRIPTS = {
  yatag: {
    name: "Yatag (ྱ)",
    consonants: [
      { tib: "ཀྱ་", eng: "kya", tone: "High" }, { tib: "ཁྱ་", eng: "khya", tone: "High asp." }, { tib: "གྱ་", eng: "gya", tone: "Low" },
      { tib: "པྱ་", eng: "cha", tone: "High" }, { tib: "ཕྱ་", eng: "chha", tone: "High asp." }, { tib: "བྱ་", eng: "ja", tone: "Low" }, { tib: "མྱ་", eng: "nya", tone: "Low" }
    ],
    vocab: ["ཀྱི་ (of)", "ཁྱི་ (dog)", "ཁྱོ་ག་ (husband)", "བྱ་ (bird)", "ཕྱི་པོ་ (late)"]
  },
  ratag: {
    name: "Ratag (ྲ)",
    description: "Column 1: tra (High), Column 2: thra (High asp.), Column 3: dra (Low).",
    consonants: [
      { tib: "ཀྲ་", eng: "tra", tone: "High" }, { tib: "ཁྲ་", eng: "thra", tone: "High asp." }, { tib: "གྲ་", eng: "dra", tone: "Low" },
      { tib: "ཏྲ་", eng: "tra", tone: "High" }, { tib: "ཐྲ་", eng: "thra", tone: "High asp." }, { tib: "དྲ་", eng: "dra", tone: "Low" },
      { tib: "པྲ་", eng: "tra", tone: "High" }, { tib: "ཕྲ་", eng: "thra", tone: "High asp." }, { tib: "བྲ་", eng: "dra", tone: "Low" },
      { tib: "མྲ་", eng: "ma", tone: "High (raised)" }, { tib: "སྲ་", eng: "sa", tone: "High" }, { tib: "ཧྲ་", eng: "hra", tone: "High" }
    ],
    vocab: ["ཁྲི་ (throne)", "གྲི་ (knife)"]
  },
  latag: {
    name: "Latag (ླ)",
    description: "Raises the tone of the subscript; the consonant itself remains silent. Exception: ཟླ་ (da).",
    consonants: [
      { tib: "ཀླ་", eng: "la", tone: "High" }, { tib: "གླ་", eng: "la", tone: "High" }, { tib: "བླ་", eng: "la", tone: "High" },
      { tib: "ཟླ་", eng: "da", tone: "High" }, { tib: "རླ་", eng: "la", tone: "High" }, { tib: "སླ་", eng: "la", tone: "High" }
    ],
    vocab: ["ཀླུ་ (serpent god)", "གླུ་ (song)", "བླ་མ་ (teacher)", "གླ་ཆ་ (salary)"]
  },
  wasur: {
    name: "Wasur (ྭ)",
    description: "The 'Wa corner'. It is joined to the bottom right of certain consonants. It is usually silent but maintains the root letter's sound.",
    consonants: [
      { tib: "ཀྭ་", eng: "kwa", tone: "High" }, 
      { tib: "ཁྭ་", eng: "khwa", tone: "High asp." }, 
      { tib: "གྭ་", eng: "gwa", tone: "Low" },
      { tib: "ཅྭ་", eng: "chwa", tone: "High" },
      { tib: "ཉྭ་", eng: "nywa", tone: "Low" },
      { tib: "ཏྭ་", eng: "twa", tone: "High" }
    ],
    vocab: ["གྲྭ་པ་ (monk)", "ལྭ་བ་ (clothing)", "ཚྭ་ (salt)", "ཞྭ་མོ་ (hat)"]
  }
};

export const SYLLABLE_TREE = {
  word: "བསྒྲིབས་",
  meaning: "Obscured",
  transliteration: "bsgribs",
  parts: [
    { label: "Prefix", tib: "བ་", description: "Silent. Helps specify the root.", color: "text-amber-600" },
    { label: "Superscript", tib: "ས་", description: "Silent. Elevates the tone.", color: "text-blue-600" },
    { label: "Root", tib: "ག་", description: "The core sound carrier.", color: "text-brand-primary" },
    { label: "Subscript", tib: "ར་", description: "Mutates the root sound (ga -> dra).", color: "text-green-600" },
    { label: "Vowel", tib: "ི", description: "The 'i' sound sign.", color: "text-rose-500" },
    { label: "Suffix", tib: "བ་", description: "The closing consonant.", color: "text-purple-600" },
    { label: "Post-Suffix", tib: "ས་", description: "Silent. Softens the vowel (Umlaut).", color: "text-orange-500" }
  ]
};

export const ORTHOGRAPHY_DETAILS = {
  prefixes: {
    title: "The Five Prefixes",
    letters: ["ག་", "ད་", "བ་", "མ་", "འ་"],
    rules: [
      "Prefixes are generally silent.",
      "Except when ད་ is followed by བ་, it becomes 'wa'.",
      "They help identify the root letter in complex syllables."
    ]
  },
  suffixes: {
    title: "The Ten Suffixes",
    letters: ["ག་", "ང་", "ད་", "ན་", "བ་", "མ་", "འ་", "ར་", "ལ་", "ས་"],
    rules: [
      "ག་, ང་, བ་, མ་, འ་, ར་, ལ་ are usually pronounced.",
      "ད་ and ས་ are silent but change the preceding vowel (Umlaut).",
      "ན་ and ལ་ change the vowel to 'e' and are pronounced."
    ]
  }
};

export const SUPERSCRIPTS = {
  rago: {
    name: "Rago (ར)",
    consonants: ["རྐ་", "རྒ་", "རྔ་", "རྗ་", "རྙ་", "རྟ་", "རྡ་", "རྣ་", "རྦ་", "རྨ་", "རྩ་", "རྫ་"],
    vocab: ["རྐུ་མ་ (thief)", "རྔ་ (drum)", "རྟ་ (horse)", "རྡོ་ (stone)", "རྩ་ (grass)"]
  },
  lago: {
    name: "Lago (ལ)",
    consonants: ["ལྐ་", "ལྒ་", "ལྔ་", "ལྕ་", "ལྗ་", "ལྟ་", "ལྡ་", "ལྤ་", "ལྦ་", "ལྷ་"],
    vocab: ["ལྷ་ (god)", "ལྷ་མོ་ (goddess)", "ལྔ་ (five)", "ལྷོ་ (south)"]
  },
  sago: {
    name: "Sago (ས)",
    consonants: ["སྐ་", "སྒ་", "སྔ་", "སྙ་", "སྟ་", "སྡ་", "སྣ་", "སྤ་", "སྦ་", "སྨ་", "སྩ་"],
    vocab: ["སྐུ་ (statue)", "སྒོ་ (door)", "སྒྱུ་མ་ (delusion)", "སྤོ་ (to move)"]
  }
};

export const ORTHOGRAPHY = {
  suffixes: ["ག་", "ང་", "ད་", "ན་", "བ་", "མ་", "འ་", "ར་", "ལ་", "ས་"],
  prefixes: ["ག་", "ད་", "བ་", "མ་", "འ་"]
};

// --- CHAPTER 3 DATA ---

export const EQUATIONAL_VERBS = [
  { p: "1st", affirmative: "ཡིན།", neg: "མིན།", q_aff: "ཡིན་པས།", desc: "Egophoric (Subjective)" },
  { p: "2nd/3rd", affirmative: "རེད།", neg: "མ་རེད།", q_aff: "རེད་པས།", desc: "Assertive (Objective)" }
];

export const EXISTENTIAL_VERBS = [
  { p: "1st", affirmative: "ཡོད།", neg: "མེད།", q_aff: "ཡོད་པས།", desc: "Location / Possession" },
  { p: "2nd/3rd", affirmative: "ཡོད་རེད། / འདུག།", neg: "ཡོད་མ་རེད། / མི་འདུག།", q_aff: "ཡོད་རེད་པས། / འདུག་གས།", desc: "Location / Possession (Inferred / Witnessed)" }
];

export const SPATIAL_PREPOSITIONS = [
  { tib: "གི་མདུན་ལ་", eng: "in front of" }, { tib: "གི་རྒྱབ་ལ་", eng: "behind" },
  { tib: "གི་སྒང་ལ་", eng: "above / on" }, { tib: "གི་འོག་ལ་", eng: "under / below" },
  { tib: "གི་ཟུར་ལ་", eng: "in the corner" }, { tib: "གི་འགྲམ་ལ་", eng: "near" },
  { tib: "གི་གཡས་ལ་", eng: "to the right" }, { tib: "གི་གཡོན་ལ་", eng: "to the left" },
  { tib: "གི་ནང་ལ་", eng: "inside of" }, { tib: "གི་ཕྱི་ལ་", eng: "outside of" },
  { tib: "གི་བར་ལ་", eng: "between" }, { tib: "གི་དཀྱིལ་ལ་", eng: "in the middle" },
  { tib: "གི་རྩ་ལ་", eng: "next to" }, { tib: "གི་ཕར་ཕྱོགས་ལ་", eng: "on the other side" },
  { tib: "གི་བྱང་ལ་", eng: "to the north" }, { tib: "གི་ལྷོ་ལ་", eng: "to the south" },
  { tib: "གི་ཤར་ལ་", eng: "to the east" }, { tib: "གི་ནུབ་ལ་", eng: "to the west" },
  { tib: "གཡས་གཡོན་ལ་", eng: "in the vicinity" }, { tib: "ག་ས་ག་ལ་", eng: "everywhere" }
];

export const INTERROGATIVE_WORDS = [
  { tib: "ག་རེ་", eng: "What" }, { tib: "སུ་", eng: "Who" },
  { tib: "ག་པར་", eng: "Where" }, { tib: "ག་དུས་", eng: "When" },
  { tib: "ག་གི་", eng: "Which" }, { tib: "ག་རེ་བྱས་ནས་", eng: "Why" },
  { tib: "ག་ནས་", eng: "From where" }, { tib: "ཆུ་ཚོད་ག་ཚོད་ལ་", eng: "At what time" },
  { tib: "ག་ཚོད་", eng: "How many / much" }, { tib: "ག་འདྲས་", eng: "How (w/ verb)" },
  { tib: "ལོས་", eng: "How (w/ adj)" }, { tib: "སྟངས་", eng: "How to / method" },
  { tib: "སུའི་", eng: "Whose" }, { tib: "སུ་ལ་", eng: "To whom" },
  { tib: "སུའི་ཆེད་དུ་", eng: "For whom" }, { tib: "ག་རེའི་ཆེད་དུ་", eng: "For what" }
];

export const CHAPTER3_EXAMPLES = {
  equational_1st: [
    { tib: "ང་དགེ་རྒན་ཡིན།", eng: "I am a teacher." },
    { tib: "ང་ཚོ་བོད་པ་ཡིན།", eng: "We are Tibetan." },
    { tib: "སྔོན་མ་ང་སློབ་ཕྲུག་ཡིན།", eng: "I was a student." },
    { tib: "ང་ཚོ་སྨན་པ་མིན།", eng: "We are not doctors." }
  ],
  equational_2nd: [
    { tib: "འདི་སྨན་རེད།", eng: "This is medicine." },
    { tib: "ཁོང་སྨན་པ་རེད།", eng: "He is a doctor." },
    { tib: "ཁོང་བཀྲ་ཤིས་མ་རེད།", eng: "He is not Tashi." },
    { tib: "དེ་སློབ་གྲྭ་མ་རེད།", eng: "That is not a school." }
  ],
  origin: [
    { tib: "ང་རྒྱ་གར་ནས་ཡིན།", eng: "I am from India." },
    { tib: "ཁོང་བལ་ཡུལ་ནས་རེད།", eng: "He/She is from Nepal." }
  ],
  location: [
    { tib: "ང་ལས་ཁུངས་ལ་ཡོད།", eng: "I am at the office." },
    { tib: "ང་ནང་ལ་མེད།", eng: "I am not at home." },
    { tib: "ཁོང་ཟ་ཁང་དེ་ལ་ཡོད་རེད། / འདུག།", eng: "He is at the restaurant." },
    { tib: "ཁོང་ལས་ཁུངས་དེ་ལ་ཡོད་མ་རེད། / མི་འདུག།", eng: "He is not at the office." }
  ],
  possession: [
    { tib: "ང་ལ་དེབ་དེ་ཡོད།", eng: "I have the book." },
    { tib: "དུས་ཚོད་མེད།", eng: "I don't have time." },
    { tib: "ཁོང་ལ་དངུལ་འདང་པ་ཡོད་རེད། / འདུག།", eng: "He has enough money." },
    { tib: "ཁོང་ལ་དུས་ཚོད་ཡོད་མ་རེད། / མི་འདུག།", eng: "He doesn't have time." }
  ],
  questions: [
    { tib: "ཁྱེད་རང་བོད་པ་ཡིན་གནང་པས།", eng: "Are you Tibetan?" },
    { tib: "འདི་ཟ་ཁང་རེད་པས།", eng: "Is this a restaurant?" },
    { tib: "ནང་ལ་ཡོད་པས།", eng: "Are you at home?" },
    { tib: "ཁོང་ཚོ་རྒྱ་གར་ལ་ཡོད་རེད་པས།", eng: "Are they in India?" }
  ]
};

export const EXISTENTIAL_VERBS_THERE_IS = [
    { tib: "ཚོང་ཁང་དེ་ལ་ཚ་ལུ་མ་ལི་ལྦང་ཆུང་ཆུང་ཁ་ཤས་ཡོད་རེད།", eng: "There are some small oranges at the shop." },
    { tib: "དཔེ་མཛོད་ཁང་ལ་དེབ་སེར་པོ་ཆེན་པོ་དགུ་ཡོད་རེད། / འདུག།", eng: "There are nine large yellow books in the library." },
    { tib: "སྔོན་མ་ཁང་པ་རྙིང་པ་ནག་པོ་གཅིག་ཡོད་རེད།", eng: "There was an old black house." },
    { tib: "ང་ཚོའི་གྲོང་གསེབ་ལ་སློབ་གྲྭ་ཡག་པོ་གཅིག་ཀྱང་ཡོད་མ་རེད།", eng: "There aren't any good schools in our village." }
];

export const CH3_TAG_QUESTIONS = [
  { tib: "ཁྱེད་རང་བོད་པ་ཡིན་པས། ཡིན།", eng: "Are you Tibetan? Yes, I am." },
  { tib: "ཁོང་ཨ་རི་ནས་རེད་པས། མ་རེད།", eng: "Is he from America? No, he isn't." },
  { tib: "འདི་རྐུབ་ཀྱག་རེད་པས། མ་རེད། སྒྲོག་ཙེ་རེད།", eng: "Is this a chair? No, it's not. It's a table." }
];

export const AUXILIARY_SUMMARY = [
    { person: "1st (+)", eq: "ཡིན།", pos: "ཡོད།", loc: "ཡོད།" },
    { person: "1st (-)", eq: "མིན།", pos: "མེད།", loc: "མེད།" },
    { person: "2/3 (+)", eq: "རེད།", pos: "ཡོད་རེད། / འདུག།", loc: "ཡོད་རེད། / འདུག།" },
    { person: "2/3 (-)", eq: "མ་རེད།", pos: "ཡོད་མ་རེད། / མི་འདུག།", loc: "ཡོད་མ་རེད། / མི་འདུག།" },
    { person: "Q 1st", eq: "ཡིན་པས།", pos: "ཡོད་པས།", loc: "ཡོད་པས།" },
    { person: "Q 2/3", eq: "རེད་པས།", pos: "ཡོད་རེད་པས། / འདུག་གས།", loc: "ཡོད་རེད་པས། / འདུག་གས།" }
];

export const CHAPTER3_QUIZ = [
  { eng: "Who are you?", tib: "ཁྱེད་རང་སུ་ཡིན།", type: "2nd person noun, interrogative" },
  { eng: "Who are they?", tib: "ཁོང་ཚོ་སུ་རེད།", type: "3rd person noun, interrogative" },
  { eng: "Were you a teacher?", tib: "སྔོན་མ་ཁྱེད་རང་དགེ་རྒན་ཡིན་པས།", type: "2nd person noun, past" },
  { eng: "Was he a doctor?", tib: "སྔོན་མ་ཁོང་སྨན་པ་རེད་པས།", type: "3rd person noun, past" },
  { eng: "Where are you?", tib: "ག་པར་ཡོད།", type: "2nd person location, interrogative" },
  { eng: "Where were you then?", tib: "དེ་དུས་ཁྱེད་རང་ག་པར་ཡོད།", type: "2nd person location, past, interrogative" },
  { eng: "Weren't they in India?", tib: "དེ་དུས་ཁོང་ཚོ་རྒྱ་གར་ལ་ཡོད་མ་རེད་པས།", type: "3rd person negative location, past" },
  { eng: "Where are they?", tib: "ཁོང་ཚོ་ག་པར་ཡོད་རེད། / འདུག", type: "3rd person location, interrogative" },
  { eng: "Don't you have the book?", tib: "ཁྱེད་རང་ལ་དེབ་དེ་མེད་པས།", type: "2nd person possession, negative" },
  { eng: "How many cars did you have?", tib: "སྔོན་མ་ཁྱེད་རང་ལ་མོ་ཊྲ་ག་ཚོད་ཡོད།", type: "2nd person possession, past, interrogative" },
  { eng: "What is it?", tib: "དེ་ག་རེ་རེད།", type: "noun question, interrogative" },
  { eng: "Where were they?", tib: "དེ་དུས་ཁོང་ཚོ་ག་པར་ཡོད་རེད།", type: "3rd person location, past, interrogative" },
  { eng: "Where are they?", tib: "ཁོང་ཚོ་ག་པར་ཡོད་རེད།", type: "3rd person location, interrogative" },
  { eng: "Who was at the office?", tib: "དེ་དུས་ལས་ཁུངས་ལ་སུ་འདུག། / ཡོད་རེད།", type: "location, past, interrogative" },
  { eng: "Are they rich?", tib: "ཁོང་ཚོ་ཕྱུག་པོ་འདུག་གས། / ཡོད་རེད་པས།", type: "3rd person adjective" },
  { eng: "Were you strong then?", tib: "དེ་དུས་ཁྱེད་རང་ཤུགས་ཆེན་པོ་ཡོད་པས།", type: "2nd person adjective, past" },
  { eng: "Was he poor then?", tib: "དེ་དུས་ཁོང་སྐྱོ་པོ་ཡོད་རེད་པས།", type: "3rd person adjective, past" },
  { eng: "Didn't you have interest?", tib: "སྔོན་མ་ནང་ཆོས་ལ་དོ་སྣང་མེད་པས།", type: "2nd person possession, negative, past" },
  { eng: "Did you have money then?", tib: "དེ་དུས་དངུལ་ཡོད་པས།", type: "2nd person possession, past" },
  { eng: "Didn't they have a house?", tib: "དེ་དུས་ཁོང་ཚོ་ལ་ཁང་པ་ཡོད་མ་རེད་པས།", type: "3rd person possession, negative, past" },
  { eng: "Was there a school?", tib: "དེ་དུས་སློབ་གྲྭ་གཅིག་ཀྱང་ཡོད་མ་རེད་པས།", type: "existence, past" },
  { eng: "Wasn't there a big school?", tib: "དེ་དུས་སློབ་གྲྭ་ཆེན་པོ་དེ་ཡོད་མ་རེད་པས།", type: "negative existence, past" },
  { eng: "Who is at your house?", tib: "ཁྱེད་རང་གི་ཁང་པ་ལ་སུ་ཡོད་རེད།", type: "location, interrogative" },
  { eng: "Who is Mary?", tib: "མེ་རི་སུ་རེད།", type: "3rd person noun, interrogative" },
  { eng: "Which is the hospital?", tib: "སྨན་ཁང་ག་གི་རེད།", type: "3rd person noun, interrogative" },
  { eng: "Aren't they the students?", tib: "ཁོང་ཚོ་སློབ་གྲྭ་འདིའི་སློབ་ཕྲུག་མ་རེད་པས།", type: "3rd person noun, negative" },
  { eng: "Where are you from?", tib: "ཁྱེད་རང་ག་ནས་ཡིན།", type: "origin, 2nd person, interrogative" },
  { eng: "Aren't they from India?", tib: "ཁོང་ཚོ་རྒྱ་གར་ནས་མ་རེད་པས།", type: "origin, 3rd person, negative" },
  { eng: "Who is Tibetan?", tib: "སུ་བོད་པ་རེད། / བོད་པ་སུ་རེད།", type: "noun, interrogative" },
  { eng: "Who are Tibetan?", tib: "སུ་སུ་བོད་པ་རེད།", type: "noun, plural interrogative" }
];

export const CH4_COLORS = [
    { tib: "དཀར་པོ་", eng: "white" },
    { tib: "ནག་པོ་", eng: "black" },
    { tib: "དམར་པོ་", eng: "red" },
    { tib: "ལྗངས་ཁུ་", eng: "green" },
    { tib: "ལི་ལྦང་", eng: "orange" },
    { tib: "སེར་པོ་", eng: "yellow" },
    { tib: "སྔོན་པོ་", eng: "blue" },
    { tib: "རྒྱ་སྨུག་", eng: "brown" }
];

export const CH4_PERSONAL_ADJ = [
    { tib: "ལས་ཀ་ཧུར་པོ་", eng: "hardworking" },
    { tib: "སྒྱིད་ལ་ངན་པོ་", eng: "lazy" },
    { tib: "བརྩོན་འགྲུས་ཆེན་པོ་", eng: "diligent" },
    { tib: "སྙིང་རྗེ་ཆེན་པོ་", eng: "compassionate" },
    { tib: "གཏོང་ཕོད་ཆེན་པོ་", eng: "generous" },
    { tib: "དོག་གཟོན་ཚ་པོ་", eng: "suspicious" },
    { tib: "སེར་སྣ་ཚ་པོ་", eng: "stingy" },
    { tib: "རླུང་ཚ་པོ་", eng: "short-tempered" },
    { tib: "ཆོག་ཤེས་ཆེན་པོ་", eng: "content" },
    { tib: "འདོད་རྔམ་ཚ་པོ་", eng: "greedy" },
    { tib: "སེམས་བཟང་པོ་", eng: "kind-hearted" },
    { tib: "སྤྱང་པོ་", eng: "clever" },
    { tib: "ཕྲག་དོག་ཚ་པོ་", eng: "jealous" },
    { tib: "ཤུགས་ཆེན་པོ་", eng: "strong" },
    { tib: "བཟོད་སེམས་ཆེན་པོ་", eng: "patient" },
    { tib: "འཇོན་པོ་", eng: "capable" },
    { tib: "གདེངས་ཚོད་ཆེན་པོ་", eng: "confident" },
    { tib: "བྲེལ་བ་ཚ་པོ་", eng: "busy" },
    { tib: "ཕྱུག་པོ་", eng: "rich" },
    { tib: "སྐྱོ་པོ་", eng: "poor" }
];

export const CH4_QUALITATIVE_ADJ = [
    { tib: "ཡག་པོ་", eng: "good" },
    { tib: "སྡུག་ཅག་", eng: "bad" },
    { tib: "གསར་པ་", eng: "new" },
    { tib: "རྙིང་པ་", eng: "old (opp. new)" },
    { tib: "ཆེན་པོ་", eng: "big" },
    { tib: "ཆུང་ཆུང་", eng: "small" },
    { tib: "གཞོན་གཞོན་", eng: "young" },
    { tib: "རྒན་གོག་", eng: "old (opp. young)" },
    { tib: "མཐུག་པོ་", eng: "thick" },
    { tib: "སྲབ་སྲབ་", eng: "thin" },
    { tib: "གལ་ཆེན་པོ་", eng: "important" },
    { tib: "ཡང་པོ་", eng: "light" },
    { tib: "དཀའ་ལས་ཁག་པོ་", eng: "difficult" },
    { tib: "ལས་སླ་པོ་", eng: "easy" },
    { tib: "མཐོ་པོ་", eng: "high" },
    { tib: "དམའ་པོ་", eng: "low" },
    { tib: "གྲང་མོ་", eng: "cold" },
    { tib: "ཚ་པོ་", eng: "hot" },
    { tib: "དྲོ་པོ་", eng: "warm" },
    { tib: "སྐྱིད་པོ་", eng: "pleasant" },
    { tib: "ཐག་རིང་པོ་", eng: "far" },
    { tib: "ཐག་ཉེ་པོ་", eng: "near" },
    { tib: "ཕན་ཐོག་པོ་", eng: "helpful, useful" },
    { tib: "གནོད་པོ་", eng: "harmful" },
    { tib: "མཛེས་པོ་", eng: "beautiful" },
    { tib: "མདོག་ཉེས་པོ་", eng: "ugly" },
    { tib: "སྙིང་རྗེ་པོ་", eng: "nice, beautiful" },
    { tib: "བློ་ཁོག་ཆེན་པོ་", eng: "brave" },
    { tib: "གཙང་མ་", eng: "clean" },
    { tib: "རྫོར་པོ་", eng: "dirty" },
    { tib: "སྐྱུར་མོ་", eng: "sour" },
    { tib: "མངར་མོ་", eng: "sweet" },
    { tib: "ཞིམ་པོ་", eng: "delicious" },
    { tib: "བརྟན་པོ་", eng: "reliable" },
    { tib: "རྙོག་པོ་", eng: "complicated" },
    { tib: "སྟབས་བདེ་པོ་", eng: "convenient" }
];

export const CH4_INTENSIFIERS = [
    { tib: "ཨའོ་ཙམ་", eng: "fairly, reasonably" },
    { tib: "ཞེ་དྲགས་", eng: "very" },
    { tib: "དཔེ་", eng: "extremely" },
    { tib: "གཞི་པོ་གཅིག་", eng: "exceptionally" },
    { tib: "དཔེ་མ་སྲིད་", eng: "incredibly" },
    { tib: "ཧ་ལས་པའི་", eng: "surprisingly" },
    { tib: "བསམ་གྱིས་མི་ཁྱབ་པའི་", eng: "inconceivably" },
    { tib: "སྨྲ་བརྗོད་ལས་འདས་པའི་", eng: "inexpressibly" },
    { tib: "ག་ཆེན་གྱིས་", eng: "far + comp." },
    { tib: "ཞེ་དྲགས་ཀྱིས་", eng: "much + comp." }
];

export const CH4_WORD_ORDER_EXAMPLES = [
    { tib: "ང་ལ་ཁང་པ་ཆེན་པོ་གཉིས་ཡོད།", eng: "I have two big houses." },
    { tib: "ང་ལ་ཟ་ཁང་ཆུང་ཆུང་བདུན་ཡོད།", eng: "I have seven small restaurants." },
    { tib: "ང་ལ་སྟོད་ཐུང་གསར་པ་ཡག་པོ་བཞི་ཡོད།", eng: "I have four good new shirts." },
    { tib: "ང་ལ་གོས་ཐུང་རྙིང་པ་ཆེན་པོ་ལྔ་ཡོད།", eng: "I have five big old pants." },
    { tib: "ང་ཚོ་ལ་ཁང་པ་རྙིང་པ་ཆུང་ཆུང་གསུམ་ཡོད།", eng: "We have three small old houses." },
    { tib: "སྔོན་མ་ང་ཚོ་ལ་རྟ་ཡག་པོ་གསུམ་ཡོད།", eng: "We had three good horses." },
    { tib: "ཁྱེད་རང་ལ་རྟ་ནག་པོ་ཆེན་པོ་གཅིག་ཡོད་རེད།", eng: "You have one big black horse." },
    { tib: "ཁོང་ལ་ཞི་མི་དཀར་པོ་ཆུང་ཆུང་གཉིས་ཡོད་རེད། / འདུག།", eng: "He/she has two small white cats." },
    { tib: "ཁོང་ཚོ་ལ་ཀུ་ཤུ་དམར་པོ་ཆེན་པོ་གསུམ་ཡོད་རེད། / འདུག།", eng: "They have three big red apples." },
    { tib: "བཀྲ་ཤིས་ལ་ཁྱི་ནག་པོ་ཆེན་པོ་བཞི་ཡོད་རེད། / འདུག།", eng: "Tashi has four big black dogs." }
];

export const CH4_EQUATIONAL_ADJ_EXAMPLES = [
    { type: "First Person (+)", tib: "ང་གདེངས་ཚོད་ཆེན་པོ་ཡོད།", eng: "I am confident." },
    { type: "First Person (-)", tib: "ང་གདེངས་ཚོད་ཆེན་པོ་མེད།", eng: "I am not confident." },
    { type: "Second/Third Person (+)", tib: "ཁོང་སེམས་བཟང་པོ་འདུག / ཡོད་རེད།", eng: "He is kind-hearted." },
    { type: "Second/Third Person (-)", tib: "ཁོང་སེམས་བཟང་པོ་མི་འདུག / ཡོད་མ་རེད།", eng: "He is not kind-hearted." },
    { type: "Question", tib: "ཁོང་སེམས་བཟང་པོ་འདུག་གས། / ཡོད་རེད་པས།", eng: "Is he kind-hearted?" },
    { type: "Negative Question", tib: "ཁོང་སེམས་བཟང་པོ་མི་འདུག་གས། / ཡོད་མ་རེད་པས།", eng: "Isn't he kind-hearted?" },
    { type: "Third Person Unsure Question", tib: "ཁོང་སེམས་བཟང་པོ་ཡོད་ངེས་རེད། / ཡོད་ཀྱི་རེད། / ཡོད་པ་ཡིན་པས།", eng: "Is he probably kind-hearted?" },
    { type: "Adj to Noun (+)", tib: "ཁོང་མི་ཕྱུག་པོ་གཅིག་རེད།", eng: "He is a rich man." },
    { type: "Adj to Noun (-)", tib: "ཁོང་མི་ཕྱུག་པོ་གཅིག་མ་རེད།", eng: "He is not a rich man." }
];

export const CH4_NOMINALIZING = [
    { tib: "ནང་པའི་ཆོས་ལ་སྙིང་རྗེ་གལ་ཆེ་ལོས་ཡོད་རེད།", eng: "How important is compassion in Buddhism?" },
    { tib: "ཐ་མག་གཟུགས་པོ་ལ་གནོད་ལོས་ཡོད་རེད།", eng: "How harmful is a cigarette to one’s health?" },
    { tib: "ཤིང་ཏོག་གཟུགས་པོ་ལ་ཕན་ལོས་ཡོད་རེད།", eng: "How beneficial is fruit for one’s health?" },
    { tib: "འདི་ནས་དགོན་པ་དེ་ཐག་རིང་ལོས་ཡོད་རེད།", eng: "How far is the monastery from here?" },
    { tib: "བོད་སྐད་ལས་སླ་ལོས་ཡོད་རེད།", eng: "How easy is Tibetan?" },
    { tib: "སློབ་གྲྭ་དེ་ཡག་ལོས་ཡོད་རེད།", eng: "How good is the school?" },
    { tib: "དགེ་རྒན་དེ་བཟོད་སེམས་ཆེ་ལོས་ཡོད་རེད།", eng: "How patient is the teacher?" },
    { tib: "ཁོང་ཚོ་བརྩོན་འགྲུས་ཆེ་ལོས་ཡོད་རེད།", eng: "How diligent are they?" }
];

export const CH4_COMPARISON_EXAMPLES = [
    { type: "Comparative", tib: "དངུལ་ལས་གཟུགས་པོ་གལ་ཆེ་བ་ཡོད་རེད།", eng: "Health is more important than money." },
    { type: "Comparative", tib: "དགུན་ཁ་ལས་དབྱར་ཀ་སྐྱིད་པ་ཡོད་རེད།", eng: "Summer is more pleasant than winter." },
    { type: "Superlative", tib: "ནང་ཆོས་ལ་སྙིང་རྗེ་གལ་ཆེ་ཤོས་རེད།", eng: "Compassion is the most important in Buddhism." },
    { type: "Superlative", tib: "འབྲུག་ཡུལ་རྒྱལ་ཁབ་ཆུང་ཤོས་གྲས་གཅིག་རེད།", eng: "Bhutan is one of the smallest countries." },
    { type: "Superlative", tib: "རྒྱ་མཚོ་ཚང་མའི་ནང་ནས་པེ་སི་ཕིག་རྒྱ་མཚོ་ཆེ་ཤོས་རེད།", eng: "Of all the oceans, the Pacific is the largest." },
    { type: "Not So...", tib: "དེ་ཙམ་གྱི་དཀའ་ལས་ཁག་པོ་ཡོད་མ་རེད།", eng: "It is not that difficult." },
    { type: "Not So...", tib: "སློབ་གྲྭ་དེ་དེ་ཙམ་གྱི་ཐག་རིང་པོ་ཡོད་མ་རེད།", eng: "The school is not that far." },
    { type: "A Little Too...", tib: "དགོན་པ་དེ་གྲོང་ཁྱེར་ནས་ཐག་རིང་སའི་རང་ཡོད་རེད།", eng: "The monastery is a little too far from the town." },
    { type: "A Little Too...", tib: "ནིའུ་ཡོརཀ་ལ་ཁང་གླ་ཆེ་སའི་རང་ཡོད་རེད།", eng: "The rent is a little too expensive in New York." },
    { type: "Quite...", tib: "བཟོད་པ་གལ་ཆེ་སའི་ཡོད་རེད།", eng: "Patience is quite important." },
    { type: "Quite...", tib: "རྒྱ་གར་ཆེ་སའི་ཡོད་རེད།", eng: "India is quite big." }
];

export const CH4_COMPARATIVE_RULES = [
    { suffix: "ང་", rule: "add ང་", example: "ཆུང་ཆུང་ (small) → ཆུང་ང་" },
    { suffix: "ག་", rule: "add ག་", example: "ཡག་པོ་ (good) → ཡག་ག་" },
    { suffix: "ད་ ན་ མ་ ས་", rule: "add པ་", example: "གསར་པ་ (new) → གསར་པ་ (same shape but read differently)" },
    { suffix: "འ་ ར་ ལ་ / no suffix", rule: "add བ་", example: "ལས་སླ་པོ་ (easy) → ལས་སླ་བ་" },
    { suffix: "ཆེན་པོ་", rule: "drop ན་ with པོ་, add བ་", example: "ཆེན་པོ་ (big) → ཆེ་བ་" }
];

export const CH4_COMPARATIVES = [
    { adj: "ལས་སླ་པོ་", comp: "ལས་སླ་བ་", sup: "ལས་སླ་ཤོས་", eng: "easy" },
    { adj: "དཀའ་ལས་ཁག་པོ་", comp: "དཀའ་ལས་ཁག་ག་", sup: "དཀའ་ལས་ཁག་ཤོས་", eng: "difficult" },
    { adj: "གལ་ཆེན་པོ་", comp: "གལ་ཆེ་བ་", sup: "གལ་ཆེ་ཤོས་", eng: "important" },
    { adj: "ཆེན་པོ་", comp: "ཆེ་བ་", sup: "ཆེ་ཤོས་", eng: "big" },
    { adj: "ཆུང་ཆུང་", comp: "ཆུང་ང་", sup: "ཆུང་ཤོས་", eng: "small" },
    { adj: "ཡག་པོ་", comp: "ཡག་ག་", sup: "ཡག་ཤོས་", eng: "good" },
    { adj: "སྡུག་ཅག་", comp: "སྡུག་ག་", sup: "སྡུག་ཤོས་", eng: "bad" },
    { adj: "ཐག་རིང་པོ་", comp: "ཐག་རིང་ང་", sup: "ཐག་རིང་ཤོས་", eng: "far" },
    { adj: "གྲང་མོ་", comp: "གྲང་ང་", sup: "གྲང་ཤོས་", eng: "cold" },
    { adj: "ཚ་པོ་", comp: "ཚ་བ་", sup: "ཚ་ཤོས་", eng: "hot" },
    { adj: "གོང་ཆེན་པོ་", comp: "གོང་ཆེ་བ་", sup: "གོང་ཆེ་ཤོས་", eng: "expensive" }
];

export const CH4_NUMBERS = [
    { num: "༠", tib: "ཀླད་སྐོར་", eng: "zero" },
    { num: "༡", tib: "གཅིག་", eng: "1" },
    { num: "༢", tib: "གཉིས་", eng: "2" },
    { num: "༣", tib: "གསུམ་", eng: "3" },
    { num: "༤", tib: "བཞི་", eng: "4" },
    { num: "༥", tib: "ལྔ་", eng: "5" },
    { num: "༦", tib: "དྲུག་", eng: "6" },
    { num: "༧", tib: "བདུན་", eng: "7" },
    { num: "༨", tib: "བརྒྱད་", eng: "8" },
    { num: "༩", tib: "དགུ་", eng: "9" },
    { num: "༡༠", tib: "བཅུ་", eng: "10" }
];

export const CH4_FRACTIONS = [
    { num: "1/2", tib: "ཕྱེད་ཀ་ / གཉིས་ཆ་གཅིག་", eng: "one half" },
    { num: "1/3", tib: "གསུམ་ཆ་གཅིག་", eng: "one third" },
    { num: "1/4", tib: "བཞི་ཆ་གཅིག་ / བཞི་ཟུར་གཅིག་", eng: "one fourth (a quarter)" },
    { num: "3/4", tib: "བཞི་ཆ་གསུམ་ / བཞི་ཟུར་གསུམ་", eng: "three fourths" },
    { num: "2 1/2", tib: "གཉིས་དང་ཕྱེད་ཀ་", eng: "two and a half" },
    { num: "5.5", tib: "ལྔ་གྲངས་ཆུང་ལྔ་", eng: "five point five" }
];

export const CH4_DAYS_OF_WEEK = [
    { eng: "Sunday", tib: "གཟའ་ཉི་མ་" },
    { eng: "Monday", tib: "གཟའ་ཟླ་བ་" },
    { eng: "Tuesday", tib: "གཟའ་མིག་དམར་" },
    { eng: "Wednesday", tib: "གཟའ་ལྷག་པ་" },
    { eng: "Thursday", tib: "གཟའ་ཕུར་བུ་" },
    { eng: "Friday", tib: "གཟའ་པ་སངས་" },
    { eng: "Saturday", tib: "གཟའ་སྤེན་པ་" }
];

export const CH4_NUMBER_EXAMPLES = [
    { tib: "ང་ལ་ཁང་པ་གཅིག་ཡོད།", eng: "I have one house." },
    { tib: "སྔོན་མ་ཁང་པ་གཉིས་ཡོད།", eng: "I had two houses." },
    { tib: "ང་ཚོ་ལ་དེབ་མང་པོ་ཡོད།", eng: "We have many books." },
    { tib: "ང་ལ་སྨྱུ་གུ་ཁ་ཤས་ཡོད།", eng: "I have some pens." },
    { tib: "ང་ལ་སྟོད་ཐུང་གསུམ་ཡོད།", eng: "I have three shirts." },
    { tib: "ང་ཚོ་ལ་ཉལ་ཆས་བདུན་ཡོད།", eng: "We have seven blankets." },
    { tib: "ང་ལ་མཛུ་གུ་བཅུ་ཡོད།", eng: "I have ten fingers." }
];

export const CH4_PERCENTAGE_EXAMPLES = [
    { tib: "སློབ་ཕྲུག་བརྒྱ་ཆ་བཅུ་བོད་པ་རེད།", eng: "10% of the students are Tibetan." },
    { tib: "ཡོང་འབབ་ནས་བརྒྱ་ཆ་ལྔ་ཁྲལ་སྤྲད་དགོས་རེད།", eng: "One has to pay 5% of their income as tax." },
    { tib: "བརྒྱ་ཆ་བརྒྱ་གཏན་གཏན་མེད།", eng: "I am not 100% sure." }
];

export const CH4_QUANTIFIER_EXAMPLES = [
    { tib: "རྒྱ་གར་ལ་ཉི་མ་གཉིས་ཙམ་བཞུགས།", eng: "Stay in India for about two days." },
    { tib: "ང་ལ་བོད་ལ་གྲོགས་པོ་མང་པོ་ཡོད།", eng: "I have many friends in Tibet." },
    { tib: "ཁོང་དགུང་ལོ་ལྔ་བཅུ་ཙམ་རེད།", eng: "He is about fifty years old." },
    { tib: "ཁ་ལག་ཏོག་ཙམ་བཞེས་གནང་།", eng: "Please have a little food." },
    { tib: "སློབ་ཕྲུག་ཁ་ཤས་བོད་པ་རེད།", eng: "Some students are Tibetan." },
    { tib: "དེབ་ཚང་མ་བརླག་ཤག།", eng: "All the books are lost." }
];

export const CH4_ORDINALS = [
  { eng: "1st", tib: "དང་པོ།" },
  { eng: "2nd", tib: "གཉིས་པ།" },
  { eng: "3rd", tib: "གསུམ་པ།" },
  { eng: "4th", tib: "བཞི་པ།" },
  { eng: "5th", tib: "ལྔ་པ།" },
  { eng: "10th", tib: "བཅུ་པ།" },
  { eng: "Last", tib: "མཐའ་མ། / རྗེས་མ།" }
];

export const CH4_COLLECTIVES = [
  { eng: "both / all two", tib: "གཉིས་ཀ།" },
  { eng: "all three", tib: "གསུམ་ཀ།" },
  { eng: "all four", tib: "བཞི་ཀ།" },
  { eng: "all five", tib: "ལྔ་ཀ།" }
];

export const CH4_MONTHS = [
    { mt: "January", tib: "ཕྱི་ཟླ་དང་པོ་" },
    { mt: "February", tib: "ཕྱི་ཟླ་གཉིས་པ་" },
    { mt: "March", tib: "ཕྱི་ཟླ་གསུམ་པ་" },
    { mt: "April", tib: "ཕྱི་ཟླ་བཞི་པ་" },
    { mt: "May", tib: "ཕྱི་ཟླ་ལྔ་པ་" },
    { mt: "June", tib: "ཕྱི་ཟླ་དྲུག་པ་" },
    { mt: "July", tib: "ཕྱི་ཟླ་བདུན་པ་" },
    { mt: "August", tib: "ཕྱི་ཟླ་བརྒྱད་པ་" },
    { mt: "September", tib: "ཕྱི་ཟླ་དགུ་པ་" },
    { mt: "October", tib: "ཕྱི་ཟླ་བཅུ་པ་" },
    { mt: "November", tib: "ཕྱི་ཟླ་བཅུ་གཅིག་" },
    { mt: "December", tib: "ཕྱི་ཟླ་བཅུ་གཉིས་" }
];

export const CH4_TIME_EXAMPLES = [
    { tib: "ཆུ་ཚོད་དང་པོ་", eng: "one o’clock" },
    { tib: "ཆུ་ཚོད་བཅུ་གཉིས་", eng: "twelve o’clock" },
    { tib: "ཆུ་ཚོད་དང་པོ་དང་ཕྱེད་ཀ་", eng: "half past one" },
    { tib: "ཆུ་ཚོད་གསུམ་པ་ཟིན་པ་ལ་སྐར་མ་བཅུ་", eng: "ten minutes to three" },
    { tib: "ལྔ་པ་ཡོལ་ནས་སྐར་མ་བཅུ་", eng: "ten minutes past five" },
    { tib: "ཁ་སང་ཆར་པ་ཞེ་དྲགས་བབས་སོང་།", eng: "It rained a lot yesterday." },
    { tib: "སང་ཉིན་ང་ལས་ཀ་ལ་འགྲོ་གི་མིན།", eng: "I will not go to work tomorrow." },
    { tib: "ཟླ་བ་རྗེས་མར་ང་བོད་ལ་འགྲོ་གི་ཡིན།", eng: "Next month I will go to Tibet." }
];

export const CH4_TIME_VOCAB = [
    { tib: "དུས་ཚོད་", eng: "time" },
    { tib: "ཆུ་ཚོད་", eng: "hour, clock, watch" },
    { tib: "སྐར་མ་", eng: "minute(s)" },
    { tib: "སྐར་ཆ་", eng: "second(s)" },
    { tib: "སྔོན་མ་", eng: "earlier" },
    { tib: "རྗེས་མ་", eng: "later" },
    { tib: "ཕྱི་པོ་", eng: "late" },
    { tib: "སྔ་པོ་", eng: "early" },
    { tib: "ཁ་སང་", eng: "yesterday" },
    { tib: "སང་ཉིན་", eng: "tomorrow" },
    { tib: "ཁས་ཉིན་", eng: "day before yesterday" },
    { tib: "གནངས་ཉིན་", eng: "day after tomorrow" },
    { tib: "དེང་སང་", eng: "these days" },
    { tib: "ད་ལྟ་", eng: "now" },
    { tib: "ལོ་སྔོན་མ་", eng: "last year" },
    { tib: "ལོ་རྗེས་མ་", eng: "next year" },
    { tib: "ཟླ་བ་སྔོན་མ་", eng: "last month" },
    { tib: "ཟླ་བ་རྗེས་མ་", eng: "next month" },
    { tib: "བདུན་ཕྲག་སྔོན་མ་", eng: "last week" },
    { tib: "བདུན་ཕྲག་རྗེས་མ་", eng: "next week" },
    { tib: "ད་ལོ་", eng: "this year" },
    { tib: "དབྱར་ཀ་", eng: "summer" },
    { tib: "དཔྱིད་ཀ་", eng: "spring" },
    { tib: "སྟོན་ཀ་", eng: "autumn" },
    { tib: "དགུན་ཁ་", eng: "winter" },
    { tib: "ནམ་དུས་", eng: "season" },
    { tib: "རྟག་པར་", eng: "always" },
    { tib: "མཚམས་མཚམས་", eng: "sometimes" },
    { tib: "ཡང་སེ་", eng: "often, frequently" },
    { tib: "ལམ་སེང་", eng: "immediately" },
    { tib: "ག་དུས་", eng: "when (interrog.)" },
    { tib: "ད་ནས་བཟུང་", eng: "from now on" },
    { tib: "མ་འོངས་པ་", eng: "future" },
    { tib: "སྔོན་ཆད་", eng: "in the bygone days" },
    { tib: "དུས་རབས་", eng: "century" },
    { tib: "ཚེས་", eng: "date" },
    { tib: "ཡུན་རིང་པོ་", eng: "long time" },
    { tib: "གཏན་དུ་", eng: "permanently" },
    { tib: "ཡང་བསྐྱར་", eng: "again" },
    { tib: "ཐེངས་", eng: "times (counter)" },
    { tib: "ཉིན་གང་", eng: "all day" },
    { tib: "མཚན་གང་", eng: "all night" },
    { tib: "ཚེ་གང་", eng: "all life" },
    { tib: "ཚེ་ཕྱི་མ་", eng: "next life" }
];

export const CHAPTER_HINTS: Record<number, { title: string, desc: string }> = {
  1: {
    title: "Tone System",
    desc: "Mastering the high/low tone registers is critical for being understood by native speakers."
  },
  2: {
    title: "Particles",
    desc: "Particles act as the glue of Tibetan, attaching to nouns to indicate their grammatical role."
  },
  3: {
    title: "Verb Endings",
    desc: "Verbs change depending on whether it's 1st person or 2nd/3rd person, and whether it's a statement or a question."
  },
  4: {
    title: "Word Order",
    desc: "Always remember: Noun + Adjective + Number. (e.g. House + Big + Two)."
  },
  5: {
    title: "Evidentiality",
    desc: "Tibetan verbs indicate how you know something—whether you saw it happen or are making an assumption."
  },
  6: {
    title: "Intentionality",
    desc: "The choice of auxiliary ('yin' vs 're') in commands often depends on whether the action is voluntary."
  }
};

export const CH5_VOLUNTARY_VERBS = [
  { eng: "come", hon: "ཕེབས་", past: "ཡོང་", pres: "ཡོང་", fut: "ཡོང་" },
  { eng: "go", hon: "ཕེབས་", past: "འགྲོ་", pres: "འགྲོ་", fut: "འགྲོ་" },
  { eng: "went", hon: "ཕེབས་", past: "ཕྱིན་", pres: "ཕྱིན་", fut: "ཕྱིན་" },
  { eng: "listen", hon: "གསན་", past: "ཉན་", pres: "ཉན་", fut: "ཉན་" },
  { eng: "look", hon: "གཟིགས་", past: "བལྟས་", pres: "ལྟ་", fut: "བལྟ་" },
  { eng: "keep", hon: "བཞག་གནང་", past: "བཞག་", pres: "བཞག་", fut: "བཞག་" },
  { eng: "take", hon: "བཞེས་", past: "ལེན་", pres: "ལེན་", fut: "ལེན་" },
  { eng: "sleep", hon: "གཟིམ་", past: "ཉལ་", pres: "ཉལ་", fut: "ཉལ་" },
  { eng: "get up", hon: "བཞེངས་", past: "ལངས་", pres: "ལངས་", fut: "ལངས་" },
  { eng: "search", hon: "བཙལ་གནང་", past: "བཙལ་", pres: "ཚོལ་", fut: "འཚོལ་" },
  { eng: "eat", hon: "བཞེས་ / མཆོད་", past: "བཟས་", pres: "ཟ་", fut: "ཟ་" },
  { eng: "drink", hon: "བཞེས་ / མཆོད་", past: "བཏུང་", pres: "འཐུང་", fut: "འཐུང་" },
  { eng: "make", hon: "བཟོས་གནང་", past: "བཟོས་", pres: "ཟོ་", fut: "བཟོ་" },
  { eng: "do", hon: "གནང་", past: "བྱས་", pres: "བྱེད་", fut: "བྱེད་" },
  { eng: "buy", hon: "གཟིགས་", past: "ཉོས་", pres: "ཉོ་", fut: "ཉོ་" },
  { eng: "sell", hon: "བཙོང་གནང་", past: "བཙོང་", pres: "འཚོང་", fut: "འཚོང་" },
  { eng: "give", hon: "གནང་", past: "སྤྲད་", pres: "སྤྲོད་", fut: "སྤྲད་" },
  { eng: "show", hon: "སྟོན་གནང་", past: "བསྟན་", pres: "སྟོན་", fut: "སྟོན་" },
  { eng: "tell / say", hon: "གསུངས་", past: "ལབ་", pres: "ལབ་", fut: "ལབ་" },
  { eng: "stay, sit, live", hon: "བཞུགས་", past: "བསྡད་", pres: "སྡད་", fut: "སྡད་" },
  { eng: "wait", hon: "བཞུགས་", past: "བསྒུགས་", pres: "སྒུག་", fut: "སྒུག་" },
  { eng: "accumulate", hon: "བསག་གནང་", past: "བསགས་", pres: "གསོག་", fut: "གསག་" },
  { eng: "wear", hon: "མཆོད་", past: "གོན་", pres: "གོན་", fut: "གོན་" },
  { eng: "meet", hon: "ཐུག་གནང་", past: "ཐུག་", pres: "ཐུག་", fut: "ཐུག་" },
  { eng: "learn", hon: "སྦྱང་གནང་", past: "སྦྱངས་", pres: "སྦྱོང་", fut: "སྦྱང་" },
  { eng: "teach", hon: "སླབ་གནང་", past: "བསླབས་", pres: "སློབ་", fut: "བསླབ་" }
];

export const CH5_AGENTIVE_RULES = [
  { suffixes: "ད་ བ་ ས་", particle: "ཀྱིས་" },
  { suffixes: "ག་ ང་", particle: "གིས་" },
  { suffixes: "ན་ མ་ ར་ ལ་ / none", particle: "གྱིས་ / ས་" }
];

export const CH5_PRONOUN_AGENTIVES = [
  { eng: "By me", ag: "ངས་", indir: "ང་ལ་", indir_eng: "to me" },
  { eng: "By her", ag: "མོས་", indir: "མོ་ལ་", indir_eng: "to her" },
  { eng: "By us", ag: "ང་ཚོས་", indir: "ང་ཚོ་ལ་", indir_eng: "to us" },
  { eng: "By them", ag: "ཁོང་ཚོས་", indir: "ཁོང་ཚོ་ལ་", indir_eng: "to them" },
  { eng: "By you", ag: "ཁྱེད་རང་གིས་", indir: "ཁྱེད་རང་ལ་", indir_eng: "to you" },
  { eng: "By you (pl.)", ag: "ཁྱེད་རང་ཚོས་", indir: "ཁྱེད་རང་ཚོ་ལ་", indir_eng: "to you (pl.)" },
  { eng: "By him", ag: "ཁོས་", indir: "ཁོ་ལ་", indir_eng: "to him" },
  { eng: "By oneself", ag: "སོ་སོས་", indir: "སོ་སོ་ལ་", indir_eng: "to oneself" }
];

export const CH5_SPEAKING_VERBS = [
  { eng: "to speak", hon: "བཀའ་མོལ་གནང་", non: "སྐད་ཆ་བཤད་" },
  { eng: "to speak a language", hon: "ཀྱོན་", non: "རྒྱབ་" },
  { eng: "to tell a story", hon: "སྒྲུང་བཤད་གནང་", non: "སྒྲུང་བཤད་" },
  { eng: "to tell a lie", hon: "རྫུན་བཤད་གནང་", non: "རྫུན་བཤད་" },
  { eng: "to say / to tell", hon: "གསུངས་", non: "ལབ་" }
];

export const CH5_VERBALIZERS_BYED = [
  { eng: "to try", tib: "ཐབས་ཤེས་བྱས་" }, { eng: "to examine", tib: "བརྟག་དཔྱད་བྱས་" },
  { eng: "to promise", tib: "ཁས་ལེན་བྱས་" }, { eng: "to pay attention", tib: "དོ་སྣང་བྱས་" },
  { eng: "to use", tib: "བེད་སྤྱོད་བྱས་" }, { eng: "to make effort", tib: "འབད་བརྩོན་བྱས་" },
  { eng: "to guess", tib: "ཚོད་དཔག་བྱས་" }, { eng: "to place hope on", tib: "རེ་བ་བྱེད་" },
  { eng: "to consult", tib: "གོ་བསྡུར་བྱས་" }, { eng: "to have faith", tib: "དད་པ་བྱས་" },
  { eng: "to analyse", tib: "དཔྱད་པ་བྱེད་" }, { eng: "to be diligent", tib: "བརྩོན་འགྲུས་བྱས་" },
  { eng: "to work", tib: "ལས་ཀ་བྱས་" }, { eng: "to test", tib: "ཚོད་ལྟ་བྱས་" },
  { eng: "do research", tib: "ཉམས་ཞིབ་བྱས་" }, { eng: "to study", tib: "སློབ་སྦྱོང་བྱས་" },
  { eng: "to help", tib: "རོགས་པ་བྱས་" }, { eng: "to like", tib: "དགའ་པོ་བྱས་" },
  { eng: "to believe", tib: "ཡིད་ཆེས་བྱས་" }
];

export const CH5_VERBALIZERS_BGTANG = [
  { eng: "to waste", hon: "འཕྲོ་བརླག་བཏང་གནང་", non: "འཕྲོ་བརླག་བཏང་" },
  { eng: "to call (phone)", hon: "ཁ་པར་གཏང་གནང་", non: "ཁ་པར་བཏང་" },
  { eng: "to call, invite", hon: "སྐད་བཏང་གནང་", non: "སྐད་བཏང་" },
  { eng: "to improve", hon: "ཡར་རྒྱས་གཏང་གནང་", non: "ཡར་རྒྱས་གཏང་" },
  { eng: "to think", hon: "དགོངས་པ་བཞེས་", non: "བསམ་བློ་གཏང་" },
  { eng: "to rain", hon: "—", non: "ཆར་པ་གཏང་" },
  { eng: "to snow", hon: "—", non: "གངས་གཏང་" },
  { eng: "to drive a car", hon: "མོ་ཊྲ་གཏང་གནང་", non: "མོ་ཊྲ་གཏང་" },
  { eng: "to sacrifice", hon: "བློས་གཏང་གནང་", non: "བློས་གཏང་" },
  { eng: "to spend money", hon: "འགྲོ་སོང་གཏང་གནང་", non: "འགྲོ་སོང་གཏང་" }
];

export const CH5_FIRST_PERSON_TENSES = [
  { tense: "Past", structure: "Verb (past) + པ་ཡིན།", neg: "མ་ + verb" },
  { tense: "Present perfect (intentional)", structure: "Verb (past) + ཡོད།", neg: "Verb + མེད།" },
  { tense: "Present perfect (unintentional)", structure: "Verb (past) + ཤག། / འདུག།", neg: "Verb + མི་འདུག།" },
  { tense: "Present", structure: "Verb (present) + གི་ཡོད།", neg: "Verb + གི་མེད།" },
  { tense: "Future", structure: "Verb (future) + གི་ཡིན།", neg: "Verb + གི་མིན།" },
  { tense: "Going to + verb", structure: "Verb + ཡག་ཡིན།", neg: "Verb + ཡག་མིན།" }
];

export const CH5_PAST_INTRANS_EXAMPLES = [
  { tib: "ང་རྒྱ་གར་ལ་ཕྱིན་པ་ཡིན།", eng: "I went to India." },
  { tib: "ང་སྒྲོན་ཁང་གཅིག་ལ་བསྡད་པ་ཡིན།", eng: "I stayed at a hotel." },
  { tib: "ང་ཆུ་ཚོད་བཅུ་པ་ལ་ཉལ་པ་ཡིན།", eng: "I slept at ten o’clock." },
  { tib: "ང་གཟའ་ཉི་མ་ལ་ངལ་གསོ་བརྒྱབས་པ་ཡིན།", eng: "I rested on Sunday." },
  { tib: "ང་ཆུ་ཚོད་ལྔ་པ་ལ་ལངས་པ་ཡིན།", eng: "I got up at 5 in the morning." },
  { tib: "ང་ཁང་པ་གསར་པ་གཅིག་ལ་སྤོས་པ་ཡིན།", eng: "I moved to a new house." },
  { tib: "ང་ཚོ་གཟའ་ཉི་མ་ལ་རྒྱ་གར་ལ་ཕྱིན་པ་ཡིན།", eng: "We went to India on Sunday." },
  { tib: "ང་ཚོ་སློབ་གྲ་ལ་དུས་ཚོད་ལ་ཡོང་བ་ཡིན།", eng: "We came to the school on time." },
  { tib: "རྒྱ་གར་ལ་ཐེངས་གསུམ་ཕྱིན་པ་ཡིན།", eng: "I went to India three times." }
];

export const CH5_PAST_TRANS_EXAMPLES = [
  { tib: "ངས་ཁོང་ཚོ་ལ་ལབ་པ་ཡིན།", eng: "I told them." },
  { tib: "ངས་ཁོང་ཚོ་ལ་དགོན་པ་དེ་བསྟན་པ་ཡིན།", eng: "I showed them the monastery." },
  { tib: "ངས་ཁོ་ལ་དེབ་དེ་སྤྲད་པ་ཡིན།", eng: "I gave him the book." },
  { tib: "ངས་ཁོང་ཚོ་ལ་བོད་སྐད་བསླབས་པ་ཡིན།", eng: "I taught them Tibetan." },
  { tib: "ངས་ཁོང་ཚོ་སློབ་གྲྭ་དེ་ལ་ཁྲིད་པ་ཡིན།", eng: "I took them to the school." },
  { tib: "ངས་ཁོ་ལ་རོགས་པ་བྱས་པ་ཡིན།", eng: "I helped him." },
  { tib: "ངས་བྱས་པ་ཡིན།", eng: "I did it." }
];

export const CH5_PRES_PERF_INT_EXAMPLES = [
  { tib: "དེབ་དེ་འཁྱེར་ཡོད།", eng: "I have brought the book." },
  { tib: "ཁོང་ཚོ་ལ་ཀློག་སྟངས་བསླབས་ཡོད།", eng: "I have taught them how to read." },
  { tib: "ཁྱེད་རང་གི་ཆེད་དུ་ཐུག་པ་བཟོས་ཡོད།", eng: "I have made noodle soup for you." },
  { tib: "སློབ་གྲྭའི་མདུན་ལ་མེ་ཏོག་མང་པོ་བཏབ་ཡོད།", eng: "I have planted many flowers in front of the school." },
  { tib: "ངས་ཁང་པ་ཆེ་རུ་བཏང་ཡོད།", eng: "I have enlarged the house." }
];

export const CH5_PRES_PERF_UNINT_EXAMPLES = [
  { tib: "ལས་ཁུངས་ཀྱི་ལྡེ་མིག་ངའི་མཉམ་དུ་འཁྱེར་ཡོང་འདུག།", eng: "Oh, I have brought the key to the office with me." },
  { tib: "ངས་དེ་དེབ་ལ་བྲིས་འདུག།", eng: "Oh, I have written it in the book." },
  { tib: "ངས་ཇ་ལ་བྱེ་མ་དཀར་ར་བླུགས་ཤག།", eng: "Oh, I have added sugar to the tea." },
  { tib: "ངའི་དངུལ་ཁུག་འཁྱེར་ཡོང་ཡག་བརྗེད་ཤག།", eng: "Oh, I have forgotten to bring my wallet." },
  { tib: "ངས་དེབ་དེ་འཁྱེར་མི་འདུག།", eng: "Oh, I haven’t brought the book with me." },
  { tib: "ང་ནོར་ཤག", eng: "Oh, I have made a mistake." }
];

export const CH5_PRES_TENSE_EXAMPLES = [
  { tib: "སྨན་ཁང་ལ་འགྲོ་གི་ཡོད།", eng: "I am going to the hospital." },
  { tib: "ང་ཚོ་བདུན་ཕྲག་གཅིག་ལ་ཉི་མ་སློབ་གྲྭ་ལ་འགྲོ་གི་ཡོད།", eng: "We go to the school five days a week." },
  { tib: "ང་ཚོ་རྒྱ་གར་ལ་སྡད་ཀྱི་ཡོད།", eng: "We live in India." },
  { tib: "དེ་སོང་ཙང་ང་ཚོ་བོད་སྐད་སྦྱང་གི་ཡོད།", eng: "Therefore we are learning Tibetan." },
  { tib: "ང་ཚོ་མཚམས་མཚམས་ཟ་ཁང་དེ་ལ་འགྲོ་གི་ཡོད།", eng: "Sometimes we go to that restaurant." },
  { tib: "ང་ཚོ་རྟག་པར་ནང་པའི་ཆོས་སློབ་སྦྱོང་བྱེད་ཀྱི་ཡོད།", eng: "We always study Buddhism." },
  { tib: "ཟ་ཁང་ཡག་པོ་གཅིག་འཚོལ་གི་ཡོད།", eng: "I am looking for a good restaurant." },
  { tib: "དུས་ཚོད་ཏག་ཏག་ལ་ཡོང་གི་ཡོད།", eng: "I come exactly on time." }
];

export const CH5_FUT_TENSE_EXAMPLES = [
  { tib: "ང་ཡོང་གི་ཡིན།", eng: "I will come." },
  { tib: "ང་སང་ཉིན་ཡོང་གི་ཡིན།", eng: "I will come tomorrow." },
  { tib: "སང་ཉིན་ཆུ་ཚོད་བཅུ་པ་ཏག་ཏག་ལ་ཡོང་གི་ཡིན།", eng: "I will come exactly at 10 o’clock tomorrow." },
  { tib: "དེ་སོང་ཙང་ཁྱེད་རང་གི་ཆེད་དུ་ཁང་པ་ཡག་པོ་གཅིག་འཚོལ་གྱི་ཡིན།", eng: "I will look for a good house for you." },
  { tib: "བྱས་ཙང་རྡོ་རྗེ་གདན་ལ་དགུན་ཁ་འགྲོ་གི་ཡིན།", eng: "So I will go to Bodhgaya in winter." }
];

export const CH5_OTHERS_TENSES = [
  { tense: "Past (witnessed)", structure: "Verb (past) + སོང།" },
  { tense: "Past (not witnessed)", structure: "Verb (past) + པ་རེད།" },
  { tense: "Present perfect (witnessed)", structure: "Verb (past) + ཤག། / འདུག།" },
  { tense: "Present perfect (assumption)", structure: "Verb (past) + ཡོད་རེད།" },
  { tense: "Present (witnessed)", structure: "Verb (present) + གི་འདུག།" },
  { tense: "Present (assumption)", structure: "Verb (present) + གི་ཡོད་རེད།" },
  { tense: "Future", structure: "Verb (future) + གི་རེད།" }
];

export const CH5_OTHERS_PAST_WITNESSED = [
  { tib: "ཁོང་ཚོ་སྔ་པོ་ཕེབས་སོང།", eng: "They came early." },
  { tib: "ཁོང་ཚོ་ཁ་ཤས་ལས་ཁུངས་ལ་ཕྱི་པོ་ཕེབས་སོང།", eng: "Some of them came late to the office." },
  { tib: "ཁོང་ཚོ་རྒྱ་གར་ལ་ཉི་མ་བཅུ་བཞུགས་སོང།", eng: "They stayed in India for ten days." },
  { tib: "ཁོང་ཚོ་སྒྲོན་ཁང་ཆུང་ཆུང་གཅིག་ལ་བཞུགས་སོང།", eng: "They stayed in a small hotel." },
  { tib: "ཁོང་ཚོ་ཚང་མ་ལོགས་ཙམ་གནས་སྐོར་ལ་ཕེབས་སོང།", eng: "Almost all of them went on pilgrimage." },
  { tib: "བྱས་ཙང་ཁོང་གིས་ཁོང་ཚོ་ལ་དེའི་སྐོར་ལ་གསུངས་སོང།", eng: "So, he told them about it." }
];

export const CH5_OTHERS_PAST_NOT_WITNESSED = [
  { tib: "སངས་རྒྱས་རྒྱ་གར་ལ་ཁྲུངས་པ་རེད།", eng: "Buddha was born in India." },
  { tib: "དེ་ཡིད་བཞིན་ནོར་བུས་ཕྱག་བྲིས་གནང་བ་རེད།", eng: "It was written by the Dalai Lama." },
  { tib: "མཁྱེན་ཆེན་ཞི་བ་འཚོ་བོད་ལ་དུས་རབས་བདུན་པ་ལ་ཕེབས་པ་རེད།", eng: "Shantarakshita went to Tibet in the seventh century." },
  { tib: "ཁོང་བོད་ལ་གྲོངས་པ་རེད།", eng: "He passed away in Tibet." },
  { tib: "སྐུ་ཞབས་ཀོ་ལམ་བའ་སེ་ཨི་ཏྲི་ལི་ལ་ཁྲུངས་པ་རེད།", eng: "Columbus was born in Italy." },
  { tib: "སྐུ་ཞབས་ཧན་རིག་ཧེ་རར་བོད་ལ་ལོ་བདུན་བཞུགས་པ་རེད།", eng: "Heinrich Harrer stayed in Tibet for seven years." },
  { tib: "བོད་ཀྱི་རྒྱལ་པོ་སྲོང་བཙན་སྒམ་པོས་ཕོ་བྲང་པོ་ཊ་ལ་བཞེངས་པ་རེད།", eng: "King Songtsen Gampo built the Potala Palace." },
  { tib: "སྲོང་བཙན་སྒམ་པོས་ཐོན་མི་སམ་བྷོ་ཏ་རྒྱ་གར་ལ་བཏང་བ་རེད།", eng: "Songtsen Gampo sent Thonmi Sambhota to India." }
];

export const CH5_OTHERS_PRES_PERF_WITNESSED = [
  { tib: "ཁོ་སློབ་གྲྭ་ལ་བསླེབས་འདུག།", eng: "He has come to the school." },
  { tib: "མོ་སྨན་ཁང་ལ་ཕྱིན་ཤག།", eng: "She has gone to the hospital." },
  { tib: "ཁོང་ཚོས་ཁོ་ལ་ཁྱི་ནག་པོ་ཆུང་ཆུང་གཅིག་སྤྲད་ཤག།", eng: "They have given him a small black dog." },
  { tib: "ཁོང་ཚོ་ལས་ཀ་ཚར་ཤག།", eng: "They have finished the work." },
  { tib: "དངུལ་ཁང་སྒོ་བརྒྱབས་འདུག།", eng: "The bank is closed." },
  { tib: "ཁོ་སློབ་གྲྭ་ལ་བསླེབས་མི་འདུག།", eng: "He hasn’t come to the school." },
  { tib: "ཚོང་ཁང་སྒོ་བརྒྱབས་མི་འདུག།", eng: "The shop isn’t closed." }
];

export const CH5_OTHERS_PRES_TENSE = [
  { tib: "ཁོང་ཕེབས་ཀྱི་ཡོད་རེད།", eng: "He comes. (assumption)" },
  { tib: "ཁོང་ཕེབས་ཀྱི་འདུག།", eng: "He is coming. (witnessed)" },
  { tib: "ཁོང་དབྱིན་ཇི་སླབ་ཀྱི་ཡོད་རེད།", eng: "He teaches English. (assumption)" },
  { tib: "ཁོང་དབྱིན་ཇི་སླབ་ཀྱི་འདུག།", eng: "He is teaching English. (witnessed)" },
  { tib: "ཁོང་ཚོ་སློབ་གྲྭ་ལ་འགྲོ་གི་ཡོད་རེད།", eng: "They go to the school. (assumption)" },
  { tib: "ཁོང་ཚོ་སློབ་གྲྭ་ལ་འགྲོ་གི་འདུག།།", eng: "They are going to the school. (witnessed)" },
  { tib: "ཆར་པ་གཏང་གི་འདུག།།", eng: "It is raining. (witnessed)" },
  { tib: "ཆར་པ་མང་པོ་གཏང་གི་ཡོད་རེད།", eng: "It rains a lot. (assumption)" }
];

export const CH5_OTHERS_FUT_TENSE = [
  { tib: "ཁོང་ཚོ་རྒྱ་གར་ལ་བདུན་ཕྲག་གཅིག་མིན་ཙམ་བཞུགས་ཀྱི་རེད།", eng: "They will stay in India for a little less than a week." },
  { tib: "ཁོང་བལ་ཡུལ་ལ་ཟླ་བ་གཅིག་ཙམ་བཞུགས་ཀྱི་རེད།", eng: "He will stay in Nepal for about a month." },
  { tib: "དངུལ་ཁང་ཞོགས་གས་ཆུ་ཚོད་བཅུ་པ་ལ་སྒོ་ཕྱེ་གི་རེད།", eng: "The bank will open at ten in the morning." },
  { tib: "རྒན་ལགས་ཀྱིས་སློབ་ཕྲུག་ཚོ་ལ་དེའི་སྐོར་ལ་སང་ཉིན་གསུངས་ཀྱི་རེད།", eng: "The teacher will tell the students about it tomorrow." }
];

export const CH5_ADV_TENSES_1ST = [
  { tense: "Past perfect continuous", structure: "སྔོན་མ་ + verb (past) + བསྡད་པ་ཡིན།", neg: "... + བསྡད་པ་མིན།" },
  { tense: "Past continuous", structure: "སྔོན་མ་ + verb (pres.) + གི་ཡོད།", neg: "... + གི་མེད།" },
  { tense: "Present perfect continuous", structure: "Verb (past) + བསྡད་ཡོད།", neg: "... + བསྡད་མེད།" },
  { tense: "Present habitual", structure: "Verb (past) + སྡད་ཀྱི་ཡོད།", neg: "... + སྡད་ཀྱི་མེད།" },
  { tense: "Future continuous", structure: "Verb (past) + སྡད་ཀྱི་ཡིན།", neg: "... + སྡད་ཀྱི་མིན།" }
];

export const CH5_ADV_1ST_EXAMPLES = [
  { tib: "འདས་པའི་ལོ་ཉི་ཤུ་ཙ་གཉིས་རིང་བོད་སྐད་བསླབས་བསྡད་པ་ཡིན།", eng: "I have been teaching Tibetan for the past twenty-two years." },
  { tib: "དེ་དུས་བོད་སྐད་བསླབས་བསྡད་ཡོད།", eng: "I was busy teaching Tibetan." },
  { tib: "ང་སྔོན་མ་གཅན་གཟན་ཁང་ལ་མང་པོ་འགྲོ་གི་ཡོད།", eng: "I used to go to the zoo a lot." },
  { tib: "ང་སྔོན་མ་ཨ་རག་འཐུང་གི་མེད།", eng: "I didn’t use to drink alcohol." },
  { tib: "དེབ་ཅོག་ཙེའི་སྒང་ལ་བཞག་ཡོད།", eng: "I have kept the book on the table." },
  { tib: "ཁོང་ཚོ་ལ་ལབ་མེད།", eng: "I haven’t told them." },
  { tib: "གཟའ་འཇུག་ལ་ངལ་གསོ་བརྒྱབས་སྡད་ཀྱི་ཡོད།", eng: "I rest on weekends. (habitual)" },
  { tib: "ང་ཁྱེད་རང་གི་ཆེད་དུ་ཟ་ཁང་དེ་ལ་སྒུགས་སྡད་ཀྱི་ཡིན།", eng: "I will be waiting for you at the restaurant." }
];

export const CH5_ADV_TENSES_OTHERS = [
  { tense: "Past perfect (witnessed)", structure: "སྔོན་མ་ + verb (past) + བཞུགས་སོང།", neg: "... + བཞུགས་མ་སོང།" },
  { tense: "Past perfect (not witnessed)", structure: "སྔོན་མ་ + verb + བཞུགས་པ་རེད།", neg: "... + བཞུགས་པ་མ་རེད།" },
  { tense: "Past continuous", structure: "སྔོན་མ་ + verb (pres.) + གི་ཡོད་རེད།", neg: "... + གི་ཡོད་མ་རེད།" },
  { tense: "Present progressive (witnessed)", structure: "Verb + བཞུགས་འདུག།", neg: "... + བཞུགས་མི་འདུག།" },
  { tense: "Present continuous (habitual, witnessed)", structure: "Verb + བཞུགས་ཀྱི་འདུག།", neg: "... + བཞུགས་ཀྱི་མི་འདུག།" },
  { tense: "Present continuous (habitual, assumed)", structure: "Verb + བཞུགས་ཀྱི་ཡོད་རེད།", neg: "... + བཞུགས་ཀྱི་ཡོད་མ་རེད།" },
  { tense: "Future continuous", structure: "Verb + བཞུགས་ཀྱི་རེད།", neg: "... + བཞུགས་ཀྱི་མ་རེད།" }
];

export const CH5_ADV_OTHERS_EXAMPLES = [
  { tib: "ཁོང་གིས་མི་སྐྱོ་པོ་ཚོ་ལ་རོགས་པ་གནང་བཞུགས་སོང།", eng: "He has been helping the poor people. (witnessed)" },
  { tib: "སྔོན་མ་སངས་རྒྱས་བདེན་པ་བཙལ་བཞུགས་པ་རེད།", eng: "Buddha had been looking for the truth. (not witnessed)" },
  { tib: "དེ་དུས་རིན་པོ་ཆེ་སྟོང་པ་ཉིད་འགྲེལ་བཤད་ཀྱོན་ཡག་ཐབས་ཤེས་གནང་བཞུགས་འདུག།།", eng: "Rinpoche was trying to explain emptiness. (witnessed)" },
  { tib: "སྔོན་མ་ངའི་པཱ་ལགས་ཀྱིས་ང་དགུང་གསེང་ལ་གཅན་གཟན་ཁང་ལ་འཁྲིད་ཀྱི་ཡོད་རེད།", eng: "My father used to take me to the zoo on holidays." },
  { tib: "ཁོང་ཚོ་ནང་པའི་ཆོས་སློབ་སྦྱོང་གནང་བཞུགས་འདུག།།", eng: "They are busy studying Buddhism. (witnessed)" },
  { tib: "ཁོང་ཚོ་གཟའ་ཉི་མ་ལ་ངལ་གསོ་ཀྱོན་བཞུགས་ཀྱི་འདུག།།", eng: "They habitually rest on Sundays. (witnessed)" },
  { tib: "ཁོང་སྟོང་པ་ཉིད་འགྲེལ་བཤད་ཀྱོན་བཞུགས་ཀྱི་རེད།", eng: "He will be explaining emptiness. (future continuous)" }
];

export const CH5_INTERROGATIVE_FORMS_2ND = [
  { tense: "Past (Didn’t you?)", structure: "Verb (past) + མ་ + last syllable + པས།" },
  { tense: "Present perfect (Haven’t you?)", structure: "Verb (past) + མེད་པས།" },
  { tense: "Present (Don’t you?)", structure: "Verb (present) + གི་མེད་པས།" },
  { tense: "Future (Won’t you?)", structure: "Verb (future) + གི་མིན་པས།" }
];

export const CH5_INTERROGATIVE_2ND_EXAMPLES = [
  { tib: "སློབ་གྲྭ་ལ་མ་ཕྱིན་པས།", eng: "Didn’t you go to the school?" },
  { tib: "སློབ་གྲྭ་ལ་ག་རེ་བྱས་ནས་མ་ཕྱིན་པས།", eng: "Why didn’t you go to the school?" },
  { tib: "ག་རེ་བྱས་ནས་དུས་ཚོད་ལ་མ་ཡོང་པས།", eng: "Why didn’t you come on time?" },
  { tib: "ཁོང་ཚོ་ལ་དེའི་སྐོར་ལ་མ་ལབ་པས།", eng: "Didn’t you tell them about it?" },
  { tib: "དེབ་དེ་འཁྱེར་མེད་པས།", eng: "Haven’t you brought the book?" },
  { tib: "ཁོང་ཚོ་ལ་དེའི་སྐོར་ལ་གསུངས་མེད་པས།", eng: "Haven’t you told them about it?" },
  { tib: "ལས་ཀ་བྱས་ཚར་མེད་པས།", eng: "Haven’t you finished working?" },
  { tib: "རྒྱ་གར་ལ་སྡད་ཀྱི་མེད་པས།", eng: "Don’t you live in India?" },
  { tib: "ཀོ་ཕི་འཐུང་གི་མེད་པས།", eng: "Don’t you drink coffee?" },
  { tib: "དུས་ཚོད་ལ་ག་རེ་བྱས་ནས་ཡོང་གི་མེད།", eng: "Why don’t you come on time?" },
  { tib: "གཟའ་ཟླ་བ་ལ་ཡོང་གི་མིན་པས།", eng: "Won’t you come on Monday?" },
  { tib: "སང་ཉིན་ཁང་པ་གསར་པ་དེ་ལ་སྤོ་གི་མིན་པས།", eng: "Won’t you move to the new house tomorrow?" }
];

export const CH5_INTERROGATIVE_FORMS_3RD = [
  { p: "Did he/she/they (witnessed)?", aux: "སོང་ངས།", neg: "མ་སོང་ངས།" },
  { p: "Did someone (historical)?", aux: "པ་རེད་པས།", neg: "པ་མ་རེད་པས།" },
  { p: "Has he/she/they + verb?", aux: "འདུག་གས།", neg: "མི་འདུག་གས།" },
  { p: "Has (anticipation)?", aux: "ཡོད་རེད་པས།", neg: "ཡོད་མ་རེད་པས།" },
  { p: "Does he/she/they + verb?", aux: "གི་ཡོད་རེད་པས།", neg: "གི་ཡོད་མ་རེད་པས།" },
  { p: "Is he/she/they + verb?", aux: "གི་འདུག་གས།", neg: "གི་མི་འདུག་གས།" },
  { p: "Will he/she/they + verb?", aux: "གི་རེད་པས།", neg: "གི་མ་རེད་པས།" }
];

export const CH5_INTERROGATIVE_3RD_EXAMPLES = [
  { tib: "ཁོང་ཚོ་ཕེབས་སོང་ངས།", eng: "Did they come? (witnessed)" },
  { tib: "ཁོང་ཚོ་ཆུ་ཚོད་ག་ཚོད་ལ་ལས་ཁུངས་ལ་ཕེབས་སོང།", eng: "At what time did he come to the office?" },
  { tib: "ཁོང་གིས་ག་རེ་གསུངས་སོང།", eng: "What did he say?" },
  { tib: "བོད་ལ་ནང་པའི་ཆོས་ག་དུས་དར་བ་རེད།", eng: "When did Buddhism spread in Tibet?" },
  { tib: "སྐུ་ཞབས་ཧེ་རར་བོད་ལ་ལོ་ག་ཚོད་བཞུགས་པ་རེད།", eng: "How many years did Heinrich Harrer stay in Tibet?" },
  { tib: "སམ་ཡས་དགོན་པ་སུས་བཞེངས་པ་རེད།", eng: "Who built Samye monastery?" },
  { tib: "གླང་དར་མ་སུས་ཀྲོངས་པ་རེད།", eng: "Who killed Lang Darma?" },
  { tib: "ཁོང་ཚོ་སྔོན་མ་བོད་སྐད་སྦྱངས་འདུག་གས", eng: "Have they studied Tibetan before?" },
  { tib: "ཁོང་ཚོ་སློབ་གྲྭ་ལ་ལས་ཀ་བྱེད་ཀྱི་ཡོད་རེད་པས།", eng: "Do they work at the school?" },
  { tib: "ཁོང་ཚོ་སང་ཉིན་ཕེབས་ཀྱི་རེད་པས།", eng: "Will he come tomorrow?" }
];

export const CH5_NEGATIVE_SUMMARY = [
  { p: "1st", tense: "Past", marker: "མ་ + verb" },
  { p: "1st", tense: "Present perfect", marker: "Verb + མེད།" },
  { p: "1st", tense: "Present", marker: "Verb + གི་མེད།" },
  { p: "1st", tense: "Future", marker: "Verb + གི་མིན།" },
  { p: "2nd/3rd", tense: "Past (witnessed)", marker: "Verb + མ་སོང།" },
  { p: "2nd/3rd", tense: "Past (not witnessed)", marker: "མ་ + verb + པ་རེད།" },
  { p: "2nd/3rd", tense: "Present perfect", marker: "Verb + མི་འདུག།" },
  { p: "2nd/3rd", tense: "Present perfect (assumption)", marker: "Verb + ཡོད་མ་རེད།" },
  { p: "2nd/3rd", tense: "Present (witnessed)", marker: "Verb + གི་མི་འདུག།" },
  { p: "2nd/3rd", tense: "Present (assumption)", marker: "Verb + གི་ཡོད་མ་རེད།" },
  { p: "2nd/3rd", tense: "Future", marker: "Verb + གི་མ་རེད།" }
];

export const CH5_PASSIVE_EXAMPLES = [
  { act: "ཉེན་རྟོགས་པས་མི་གཅིག་ལ་སྲོག་སྐྱབས་པ་རེད།", act_eng: "The police saved a man.", pas: "མི་གཅིག་ལ་ཉེན་རྟོགས་པས་སྲོག་སྐྱབས་པ་རེད།", pas_eng: "A man was saved by the police." },
  { act: "ཤིང་བཟོ་བས་ངའི་ཁང་པ་ཟོ་གི་ཡོད་རེད།", act_eng: "Carpenters are building my house.", pas: "ངའི་ཁང་པ་ཤིང་ཟོ་བས་ཟོ་གི་ཡོད་རེད།", pas_eng: "My house is being built by carpenters." },
  { act: "—", act_eng: "—", pas: "ཁང་མིག་གཙང་མ་བཟོས་ཚར་འདུག།།", pas_eng: "The room has already been cleaned." },
  { act: "སྲིད་བློན་གྱིས་ཨ་རིའི་སྒོར་མོ་ས་ཡ་གཅིག་ཞལ་འདེབས་གནང་བ་རེད།", act_eng: "The prime minister donated one million dollars.", pas: "ཕྲུ་གུའི་སྨན་ཁང་ལ་ཨ་རིའི་སྒོར་མོ་ས་ཡ་གཅིག་ཞལ་འདེབས་གནང་བ་རེད།", pas_eng: "One million dollars was donated to the children’s hospital." },
  { act: "རྒྱལ་པོ་དེས་ཟམ་པ་དེ་དུས་རབས་བཅུ་པ་ལ་བཟོས་པ་རེད།", act_eng: "The king built the bridge in the tenth century.", pas: "ཟམ་པ་དེ་དུས་རབས་བཅུ་པ་ལ་བཟོས་པ་རེད།", pas_eng: "This bridge was built in the tenth century." },
  { act: "ཉེན་རྟོགས་པས་འཇིགས་སྐུལ་རིང་ལུགས་པ་དེ་མདངས་དགོང་འཛིན་བཟུང་བྱས་པ་རེད།", act_eng: "The police arrested the terrorist last night.", pas: "འཇིགས་སྐུལ་རིང་ལུགས་པ་དེ་མདངས་དགོང་འཛིན་བཟུང་བྱས་པ་རེད།", pas_eng: "The terrorist was arrested last night." },
  { act: "—", act_eng: "—", pas: "ཀུ་ཤུ་སྟོང་ཕྲག་མང་པོ་ཚོང་གི་ཡོད་རེད།", pas_eng: "Thousands of apples are being sold in the market." }
];

export const CH5_INVOLUNTARY_VERBS = [
  { eng: "to see", hon: "གཟིགས་", past: "མཐོང་", pres: "མཐོང་", fut: "མཐོང་", case: "Dative (Subject + ལ་)" },
  { eng: "to hear", hon: "གསན་", past: "གོ་", pres: "གོ་", fut: "གོ་", case: "Dative (Subject + ལ་)" },
  { eng: "to know", hon: "མཁྱེན་", past: "ཤེས་", pres: "ཤེས་", fut: "ཤེས་", case: "Dative (Subject + ལ་)" },
  { eng: "to understand", hon: "མཁྱེན་", past: "ཧ་གོ་", pres: "ཧ་གོ་", fut: "ཧ་གོ་", case: "Dative (Subject + ལ་)" },
  { eng: "to like", hon: "མཉེས་", past: "དགའ་", pres: "དགའ་", fut: "དགའ་", case: "Dative (Subject + ལ་)" },
  { eng: "to be afraid", hon: "ཞེད་གནང་", past: "ཞེད་", pres: "ཞེད་", fut: "ཞེད་", case: "Dative (Subject + ལ་)" },
  { eng: "to be sick", hon: "སྙུང་", past: "ན་", pres: "ན་", fut: "ན་", case: "Absolutive (Subject)" },
  { eng: "to be thirsty", hon: "ཁ་སྐོམ་གནང་", past: "ཁ་སྐོམ་", pres: "ཁ་སྐོམ་", fut: "ཁ་སྐོམ་", case: "Absolutive (Subject)" },
  { eng: "to be hungry", hon: "གྲོད་ཁོག་ལྟོགས་གནང་", past: "གྲོད་ཁོག་ལྟོགས་", pres: "གྲོད་ཁོག་ལྟོགས་", fut: "གྲོད་ཁོག་ལྟོགས་", case: "Absolutive (Subject)" },
  { eng: "to be lost", hon: "བརླག་གནང་", past: "བརླག་", pres: "བརླག་", fut: "བརླག་", case: "Absolutive (Object)" },
  { eng: "to win", hon: "རྒྱལ་གནང་", past: "རྒྱལ་", pres: "རྒྱལ་", fut: "རྒྱལ་", case: "Absolutive (Subject)" },
  { eng: "to lose", hon: "ཕམ་གནང་", past: "ཕམ་", pres: "ཕམ་", fut: "ཕམ་", case: "Absolutive (Subject)" },
  { eng: "to die", hon: "གྲོངས་", past: "ཤི་", pres: "ཤི་", fut: "ཤི་", case: "Absolutive (Subject)" },
  { eng: "to find", hon: "རྙེད་གནང་", past: "རྙེད་", pres: "རྙེད་", fut: "རྙེད་", case: "Dative (Subject + ལ་)" },
  { eng: "to separate", hon: "བྲལ་གནང་", past: "བྲལ་", pres: "བྲལ་", fut: "བྲལ་", case: "Ablative (from + ནས་)" }
];

export const CH5_INVOLUNTARY_EXAMPLES = [
  { tib: "ང་ལ་མཐོང་སོང་།", eng: "I saw (it)." },
  { tib: "ང་ལ་དེབ་དེ་རྙེད་སོང་།", eng: "I found the book." },
  { tib: "ང་ལ་ཧ་གོ་སོང་།", eng: "I understood." },
  { tib: "ང་ན་གི་འདུག།", eng: "I am sick." },
  { tib: "ང་གྲོད་ཁོག་ལྟོགས་ཀྱི་འདུག།", eng: "I am hungry." },
  { tib: "ཁོང་ལ་བོད་སྐད་ཤེས་ཀྱི་ཡོད་རེད།", eng: "He knows Tibetan." },
  { tib: "ཁོ་ཞེད་ཤག།", eng: "He has become afraid." },
  { tib: "ང་ཚོ་རྒྱལ་སོང་།", eng: "We won!" },
  { tib: "དེབ་དེ་བརླག་ཤག།", eng: "The book is lost." }
];

export const CHAPTER1_QUIZ = [
  { eng: "Ka (High tone, unemphasized)", tib: "ཀ་", type: "Consonant" },
  { eng: "Kha (High tone, emphasized)", tib: "ཁ་", type: "Consonant" },
  { eng: "Ga (Low tone, unemphasized)", tib: "ག་", type: "Consonant" },
  { eng: "Nga (Low tone, unemphasized)", tib: "ང་", type: "Consonant" },
  { eng: "ki (ka + gi-gu)", tib: "ཀི་", type: "Vowel" },
  { eng: "ku (ka + zhab-kyu)", tib: "ཀུ་", type: "Vowel" },
  { eng: "kya (ka + ya-tak)", tib: "ཀྱ་", type: "Subscript" },
  { eng: "kra (ka + ra-tak)", tib: "ཀྲ་", type: "Subscript" },
  { eng: "rga (ra + ga)", tib: "རྒ་", type: "Superscript" },
  { eng: "snga (sa + nga)", tib: "སྔ་", type: "Superscript" }
];

export const CHAPTER2_QUIZ = [
  { eng: "Student", tib: "སློབ་ཕྲུག་", type: "Noun" },
  { eng: "Teacher", tib: "དགེ་རྒན་", type: "Noun" },
  { eng: "I (First person)", tib: "ང་ / བདག་", type: "Pronoun" },
  { eng: "You (Second person, honorific)", tib: "ཁྱེད་རང་", type: "Pronoun" },
  { eng: "He / She (Third person)", tib: "ཁོང་", type: "Pronoun" },
  { eng: "We (Exclusive)", tib: "ང་ཚོ་", type: "Plural Pronoun" },
  { eng: "You all (Honorific)", tib: "ཁྱེད་རང་ཚོ་", type: "Plural Pronoun" },
  { eng: "They", tib: "ཁོང་ཚོ་", type: "Plural Pronoun" },
  { eng: "My (Genitive)", tib: "ངའི་", type: "Possessive" },
  { eng: "Your (Genitive)", tib: "ཁྱེད་རང་གི་", type: "Possessive" }
];

export const CHAPTER4_QUIZ = [
  { eng: "I have two big houses.", tib: "ང་ལ་ཁང་པ་ཆེན་པོ་གཉིས་ཡོད།", type: "Word order" },
  { eng: "Is he kind-hearted?", tib: "ཁོང་སེམས་བཟང་པོ་འདུག་གས།", type: "Equational adj" },
  { eng: "How far is the monastery?", tib: "དགོན་པ་དེ་ཐག་རིང་ལོས་ཡོད་རེད།", type: "Nominalizing" },
  { eng: "Health is more important than money.", tib: "དངུལ་ལས་གཟུགས་པོ་གལ་ཆེ་བ་ཡོད་རེད།", type: "Comparison" },
  { eng: "Stay for about two days.", tib: "ཉི་མ་གཉིས་ཙམ་བཞུགས།", type: "Quantifier" },
  { eng: "10% of students are Tibetan.", tib: "སློབ་ཕྲུག་བརྒྱ་ཆ་བཅུ་བོད་པ་རེད།", type: "Percentage" },
  { eng: "It is 10 minutes past 5.", tib: "ལྔ་པ་ཡོལ་ནས་སྐར་མ་བཅུ་རེད།", type: "Time" },
  { eng: "I am confident.", tib: "ང་གདེངས་ཚོད་ཆེན་པོ་ཡོད།", type: "First person adj" },
  { eng: "They have three big red apples.", tib: "ཁོང་ཚོ་ལ་ཀུ་ཤུ་དམར་པོ་ཆེན་པོ་གསུམ་ཡོད་རེད།", type: "Full order" },
  { eng: "Summer is more pleasant than winter.", tib: "དགུན་ཁ་ལས་དབྱར་ཀ་སྐྱིད་པ་ཡོད་རེད།", type: "Comparison" }
];

export const CHAPTER5_QUIZ = [
  { eng: "I went to India.", tib: "ང་རྒྱ་གར་ལ་ཕྱིན་པ་ཡིན།", type: "1st Person Past" },
  { eng: "I have brought the book.", tib: "དེབ་དེ་འཁྱེར་ཡོད།", type: "1st Person Pres. Perf." },
  { eng: "I will come tomorrow.", tib: "ང་སང་ཉིན་ཡོང་གི་ཡིན།", type: "1st Person Future" },
  { eng: "He is coming. (witnessed)", tib: "ཁོང་ཕེབས་ཀྱི་འདུག།", type: "3rd Person Present" },
  { eng: "Buddha was born in India.", tib: "སངས་རྒྱས་རྒྱ་གར་ལ་ཁྲུངས་པ་རེད།", type: "Historical Past" },
  { eng: "Didn't you go to school?", tib: "སློབ་གྲྭ་ལ་མ་ཕྱིན་པས།", type: "2nd Person Question" },
  { eng: "The bank is closed.", tib: "དངུལ་ཁང་སྒོ་བརྒྱབས་འདུག།", type: "Resultative state" },
  { eng: "I found the book.", tib: "ང་ལ་དེབ་དེ་རྙེད་སོང་།", type: "Involuntary past" },
  { eng: "He knows Tibetan.", tib: "ཁོང་ལ་བོད་སྐད་ཤེས་ཀྱི་ཡོད་རེད།", type: "Involuntary habit" },
  { eng: "The terrorist was arrested.", tib: "འཇིགས་སྐུལ་རིང་ལུགས་པ་དེ་འཛིན་བཟུང་བྱས་པ་རེད།", type: "Passive" }
];

export const CH5_NOMINALIZERS = [
  { tib: "—ཡག་", eng: "future, thing to..., objective", ex: "ལྟ་ཡག།", ex_eng: "something to look at / future looking" },
  { tib: "—མཁན་", eng: "the doer, -er", ex: "བཟོ་མཁན།", ex_eng: "builder / the one who makes" },
  { tib: "—ས་", eng: "the place of...", ex: "སྡོད་ས།", ex_eng: "place to stay / residence" },
  { tib: "—དུས་", eng: "the time of...", ex: "ཡོང་དུས།", ex_eng: "the time of coming / when coming" },
  { tib: "—སྟངས་", eng: "the manner/way of...", ex: "འགྲོ་སྟངས།", ex_eng: "way of going / behavior" },
  { tib: "—རྒྱུ་", eng: "future purpose, material", ex: "བཟོ་རྒྱུ།", ex_eng: "thing to be made" }
];

export const CH6_IMPERATIVES = [
  { tib: "སློབ་གྲ་ལ་སང་ཉིན་ཕེབས་ཨ།", eng: "Come tomorrow to the school." },
  { tib: "དགོན་པ་ལ་སང་ཉིན་ཕེབས་ཨ།", eng: "Go to the monastery tomorrow." },
  { tib: "ལས་ཁུངས་ལ་ཁྱུགས་ཙམ་སྒུགས་གནང་ཨ།", eng: "Wait at the office for a moment." },
  { tib: "སྒྲོན་ཁང་དེ་ལ་བཞུགས་ཨ།", eng: "Stay at the hotel." },
  { tib: "སྒྲོན་ཁང་གཅིག་འཚོལ་གནང་ཨ།", eng: "Look for / search for a hotel." },
  { tib: "སྒྲོན་ཁང་ཡག་པོ་གཅིག་འཚོལ་གནང་ད།", eng: "Look for a good hotel." },
  { tib: "སྒྲོད་ཁང་ཡག་པོ་གཅིག་ལ་བཞུགས་ད།", eng: "Stay at a good hotel." },
  { tib: "སྒྲོན་ཁང་ཆེན་པོ་ཡག་པོ་གཅིག་ལ་བཞུགས་ད།", eng: "Stay at a good big hotel." },
  { tib: "མགྲོན་ཁང་དཀར་པོ་ཆེན་པོ་དེ་ལ་བཞུགས་ད།", eng: "Stay at the big white guest house." },
  { tib: "རྒྱ་གར་ལ་ཉི་མ་གསུམ་བཞུགས་ད།", eng: "Stay in India for three days." },
  { tib: "ཁང་པ་ཡག་པོ་གཅིག་འཚོལ་གནང།", eng: "Look for a small good house." },
  { tib: "ཐབ་ཚང་ཆེ་རུ་གཏང་གནང།", eng: "Enlarge (make bigger) the kitchen." },
  { tib: "ཟ་ཁང་རྙིང་པ་དེ་ལ་མཆོད།", eng: "Eat at the old restaurant." },
  { tib: "དེ་ཡང་བསྐྱར་གསུངས་ད།", eng: "Say it again." },
  { tib: "ཁྱེད་རང་གི་ཕྲུ་གུའི་མཉམ་དུ་བོད་སྐད་ཀྱོན་ཨ།", eng: "Speak Tibetan with your children." },
  { tib: "ཁོང་ཚོ་ལ་སྒྲུང་གཅིག་བཤད་གནང་ད།", eng: "Tell them a story." }
];

export const CH6_NEG_IMPERATIVES = [
  { tib: "འཛིན་གྲྭ་ལ་བཀའ་མོལ་མ་གནང་།", eng: "Don’t speak in the class." },
  { tib: "རྒན་ལགས་ལ་དེའི་སྐོར་ལ་མ་གསུངས།", eng: "Don’t tell the teacher about it." },
  { tib: "རྫུན་བཤད་མ་གནང་ད།", eng: "Don’t tell lies." },
  { tib: "ཞི་མི་མ་གཟིགས།", eng: "Don’t buy a cat." },
  { tib: "མ་གཟིགས།", eng: "Don’t buy." },
  { tib: "ཁང་པ་གོང་ཆེན་པོ་འཚོལ་མ་གནང།", eng: "Don’t search for expensive houses." },
  { tib: "ཞི་མི་ནག་པོ་མ་གཟིགས།", eng: "Don’t buy black cats." },
  { tib: "ཉི་གདུགས་ནག་པོ་གསུམ་ལས་མང་ང་མ་གཟིགས།", eng: "Don’t buy more than three black umbrellas." },
  { tib: "མོཊྲ་གོང་ཆེ་ཤོས་དེ་མ་གཟིགས།", eng: "Don’t buy the most expensive car." },
  { tib: "ང་ཚོའི་ཁང་པའི་ཅོག་ཙེ་ཆེ་ཤོས་དེ་ལས་ཅོག་ཙེ་ཆེ་བ་མ་གཟིགས།", eng: "Don’t buy a bigger table than the biggest table at our house." },
  { tib: "ཡིན་ནའི་གསང་སྤྱོད་ཆེ་རུ་གཏང་མ་གནང།", eng: "But don’t enlarge the washroom." },
  { tib: "ཁོང་ཚོ་ལ་མ་གསུངས།", eng: "Don’t tell them." },
  { tib: "ཁང་པ་དེ་ཚོ་གསུམ་ཅ་མ་གཟིགས།", eng: "Don’t buy all those three houses." },
  { tib: "ཁང་པ་གསུམ་པོ་དེ་ཚོ་མ་གཟིགས།", eng: "Don’t buy those three houses." },
  { tib: "དེ་ཐེངས་མང་པོ་མ་གསུངས།", eng: "Don’t say it many times." },
  { tib: "ཟ་ཁང་གསར་པ་དེ་ལ་ཞལ་ལག་མ་མཆོད།", eng: "Don’t eat at the new restaurant." },
  { tib: "ཨ་རག་མ་མཆོད།", eng: "Don’t drink alcohol." }
];

export const CH6_REQUESTS = [
  { type: "Please + Verb", tib: "སྐར་མ་ལྔ་སྒུག་རོགས་གནང།", eng: "Please wait for five minutes." },
  { type: "Please + Verb", tib: "ཁོང་ཚོ་ལ་དེའི་སྐོར་ལ་གསུངས་རོགས་གནང།", eng: "Please tell them about it." },
  { type: "Please + Verb", tib: "དེབ་ཡག་ཤོས་དེ་གཟིགས་རོགས་གནང།", eng: "Please buy the best book." },
  { type: "Please + Verb", tib: "རྒྱ་གར་ལ་ཉི་མ་དྲུག་ལས་མང་ང་བཞུགས་རོགས་གནང།", eng: "Please stay in India for more than six days." },
  { type: "Please + Verb", tib: "རྒྱ་གར་ལ་ད་དུང་ཉི་མ་དྲུག་བཞུགས་རོགས་གནང།", eng: "Please stay six more days in India." },
  { type: "Please + Verb", tib: "སྒྲོན་ཁང་དེ་རང་ལ་བཞུགས་རོགས་གནང།", eng: "Please stay at the same hotel." },
  { type: "Please + Verb", tib: "ཉི་གདུགས་ལྔ་ཅ་གཟིགས་རོགས་གནང།", eng: "Please buy all the five umbrellas." },
  { type: "Please + Verb", tib: "ཁྱེད་རང་གི་བོད་སྐད་ཡར་རྒྱས་གཏང་རོགས་གནང།", eng: "Please improve your Tibetan." },
  { type: "Would You Mind", tib: "ང་ལ་དགོན་པ་དེ་སྟོན་རོགས་གནང་གས།", eng: "Would you be kind enough to show me the monastery?" },
  { type: "Would You Mind", tib: "ངའི་བུ་ལ་དབྱིན་ཇི་སླབ་རོགས་གནང་གས།", eng: "Would you be kind enough to teach my son English?" },
  { type: "Would You Mind", tib: "སྐར་མ་ལྔ་ཙམ་སྒུག་རོགས་གནང་གས།", eng: "Would you mind waiting for about five minutes?" },
  { type: "Would You Mind", tib: "འདི་འཁྱེར་རོགས་གནང་གས།", eng: "Would you be kind enough to carry this?" },
  { type: "Please Don't", tib: "ཁོང་ཚོ་ལ་དེའི་སྐོར་ལ་མ་གསུངས་རོགས་གནང།", eng: "Please don’t tell them about it." },
  { type: "Please Don't", tib: "ཁང་པ་གཅིག་ལས་མང་ང་མ་གཟིགས་རོགས་གནང།", eng: "Please don’t buy more than one house." },
  { type: "Please Don't", tib: "ཁང་པ་ཆེ་ཤོས་དེ་མ་གཟིགས་རོགས་གནང།", eng: "Please don’t buy the biggest house." },
  { type: "Please Don't", tib: "ལྡེག་གཅིག་ལ་སྐད་གཅིག་ལས་མང་ང་མ་སྦྱང་རོགས་གནང།", eng: "Please don’t learn more than one language at a time." }
];

export const CH6_INDIRECT_REQUESTS = [
  { tib: "རྒན་ལགས་ལ་ཡང་བསྐྱར་འགྲེལ་བཤད་ཀྱོན་རོགས་གནང་ཟེར་རེ་འདུན་ཞུས་པ་ཡིན།", eng: "I requested the teacher to explain it again." },
  { tib: "ང་ཚོས་ཁྱེད་རང་ལ་གང་ཐུབ་ཐུབ་གནང་རོགས་གནང་ཟེར་རེ་སྐུལ་ཞུ་གི་ཡོད།", eng: "We are requesting you to do your best." },
  { tib: "ཁོང་ཚོ་མ་ཐུབ་བར་དུ་ཐབས་ཤེས་གནང་རོགས་གནང་ཟེར་རེ་འདུན་ཞུ་གི་ཡིན།", eng: "I will request them to try until they succeed." },
  { tib: "ཁོང་ལ་རོགས་པ་གནང་རོགས་ཟེར་གསུངས་དགོས་རེད་པ།", eng: "You should have requested him to help you." },
  { tib: "ཁོང་ལ་རོགས་པ་གནང་རོགས་གནང་ཟེར་མ་གསུངས་དགོས་རེད་པ།", eng: "You shouldn’t have requested him to help." },
  { tib: "ཁོང་ཚོ་ལ་དབྱིན་ཇི་བསླབ་རོགས་གནང་ཟེར་རེ་འདུན་ཞུས་ནའི་ཏག་ཏག་ཡིན།", eng: "I should have requested them to teach English." },
  { tib: "ཁོང་ཚོ་ལ་ཟ་ཁང་ཡག་པོ་གཅིག་སྟོན་རོགས་གནང་ཟེར་རེ་འདུན་མ་ཞུས་ནའི་འགྲིགས་པ་ཡོད།", eng: "I shouldn’t have requested them to show me a good restaurant." },
  { tib: "མོ་ལ་དངུལ་ཕང་པོ་བྱས་ནས་བེད་སྤྱོད་བྱེད་རོགས་གནང་ཟེར་རེ་འདུན་ཞུ་ཡག་འཆར་གཞི་ཡོད།", eng: "I plan to request her to use the money sparingly." },
  { tib: "ང་ཚོ་མོ་ལ་དངུལ་ཕང་པོ་བྱས་ནས་བེད་སྤྱོད་བྱེད་རོགས་གནང་ཟེར་རེ་འདུན་ཞུ་འདོད་ཡོད།", eng: "We would like to request her to use the money sparingly." },
  { tib: "མོ་ལ་དངུལ་ཕང་པོ་བྱས་ནས་བེད་སྤྱོད་བྱེད་རོགས་གནང་ཟེར་རེ་འདུན་ཞུས་པས།", eng: "Did you request her to use the money sparingly?" },
  { tib: "མོ་ལ་དངུལ་ཕང་པོ་བྱས་ནས་བེད་སྤྱོད་བྱེད་རོགས་གནང་ཟེར་རེ་འདུན་ཞུ་དགོས་རེད་པ།", eng: "You should have requested her to use the money sparingly." },
  { tib: "མོ་ལ་དངུལ་ཕང་པོ་བྱས་ནས་བེད་སྤྱོད་བྱེད་རོགས་ཟེར་ལབ་ནའི་ཏག་ཏག་ཡིན།", eng: "I should have requested her to use the money sparingly." },
  { tib: "ཁོས་མོ་ལ་དངུལ་ཕང་པོ་བྱས་ནས་བེད་སྤྱོད་བྱེད་རོགས་གནང་ཟེར་རེ་འདུན་ཞུ་དགོས་ཡག་རེད།", eng: "He is expected to request her to use the money sparingly." },
  { tib: "ཁོང་གིས་སློབ་ཕྲུག་ཚོ་ལ་དུས་ཚོད་འཕྲོ་བརླག་མ་གཏང་རོགས་གནང་ཟེར་རེ་འདུན་ཞུས་སོང།", eng: "He requested the students not to waste time." },
  { tib: "ཁོང་ཚོ་ལ་དོ་སྣང་བྱས་ནས་གསན་རོགས་གནང་ཟེར་ཞུས་ག།", eng: "Should I request them to listen attentively?" },
  { tib: "ང་ཚོ་ཁོང་ཚོ་ལ་དོ་སྣང་བྱས་ནས་གསན་རོགས་གནང་ཟེར་ཞུ་གས།", eng: "Shall we request them to listen attentively?" },
  { tib: "ཁོང་ཚོ་ལ་དུས་ཚོད་རག་ན་ཕེབས་རོགས་གནང་ཟེར་རེ་འདུན་ཞུ་དོ།", eng: "Let’s request them to come if they get time." },
  { tib: "ཁོང་ཚོ་ལ་སྐྱོ་པོ་ཚོ་ལ་རོགས་པ་མ་གནང་རོགས་གནང་ཟེར་མ་ཞུ་དོ།", eng: "Let’s not request them not to help the poor." },
  { tib: "ཁོང་ལ་རོགས་པ་གནང་རོགས་ཟེར་རེ་འདུན་ཞུས་ནས་ཡུན་རིང་ལོས་འགྲོ་གི་འདུག།", eng: "How long has it been since you requested him to help you?" },
  { tib: "ཁོ་ལ་ཐ་མ་མ་འཐེན་རོགས་གནང་ཟེར་རེ་འདུན་ཞུས་ན་ག་འདྲའི་འདུག", eng: "How about requesting/ asking him not to smoke." },
  { tib: "ཁོ་ལ་ཐ་མ་མ་འཐེན་རོགས་ཟེར་ལབ་ན།", eng: "What if we ask him not to smoke?" }
];

export const CH6_OFFERING = [
  { tib: "ངས་བྱེད་དགོས། / ངས་བྱེད་ཆོག། / ངས་བྱེད་ཡོང།", eng: "I will do it for you." },
  { tib: "ངས་ཁྱེད་རང་ལ་དགོན་པ་དེ་སྟོན་དགོས།", eng: "I shall show you the monastery for you." },
  { tib: "ངས་ཁང་པ་ཡག་ག་གཅིག་བཙལ་ཡོང།", eng: "I shall look for a better house for you." },
  { tib: "ངས་ཁྱེད་རང་ལ་བོད་སྐད་བསླབ་ཆོག།", eng: "I'll teach you Tibetan (if you like)." },
  { tib: "ངས་ཁྱེད་རང་ལ་རོགས་པ་བྱེད་ཆོག།", eng: "I can help you." },
  { tib: "ཨམ་ཆི་གཅིག་སྐད་བཏང་ག", eng: "Should I call a doctor? (Offering)" },
  { tib: "ཇ་ཐེངས་གཅིག་བཟོ་ག", eng: "Shall I make some tea?" },
  { tib: "ད་ག་རེ་བྱས་ག།", eng: "What should I do now?" }
];

export const CH6_SUGGESTIONS = [
  { type: "Let's", tib: "རྒན་ལགས་ལ་བཀའ་འདྲི་ཞུ་ག་འགྲོ།", eng: "Let's go and ask the teacher." },
  { type: "Let's", tib: "ཁོང་ཚོ་ལ་རོགས་པ་བྱེད་ཡག་ཐབས་ཤེས་བྱེད་དགོས།", eng: "Let's try to help them." },
  { type: "Let's", tib: "ཚང་མ་མཉམ་དུ་འགྲོ།", eng: "Let's all go together." },
  { type: "Let's Not", tib: "ང་ཚོའི་དུས་ཚོད་འཕྲོ་བརླག་མ་གཏང་དགོས།", eng: "Let's not waste our time." },
  { type: "Let's Not", tib: "སྨན་པ་ལ་གོ་བསྡུར་བྱས་པའི་སྔོན་ལ་ཐག་མ་གཅད་དགོས།", eng: "Let's not decide before consulting a doctor." },
  { type: "Shall We?", tib: "ང་ཚོ་འཛིན་གྲྭ་ཚར་ནས་ག་པར་འགྲོ་གས།", eng: "Where shall we go after the class finishes?" },
  { type: "Shall We?", tib: "ང་ཚོ་འགྲོ་གས། མ་འགྲོ་གས།", eng: "Shall we go or not?" }
];

export const CH6_CAUSATIVES = [
  { tib: "ཁོང་ཚོ་ལ་ཐབས་ཤེས་བྱེད་བཅུག།", eng: "Let them try." },
  { tib: "ཁོས་ང་ལ་བདུན་ཕྲག་གཅིག་ལ་ཉི་མ་བདུན་ལས་ཀ་བྱེད་འཇུག་གི་འདུག།།", eng: "He forces me to work seven days a week." },
  { tib: "ཁོང་ཚོས་ང་ཚོ་ལ་གཟའ་འཇུག་ལ་ངལ་གསོ་རྒྱབ་འཇུག་གི་འདུག།།", eng: "They let us rest on weekends." },
  { tib: "ཁོང་གིས་ང་ལ་ཀུ་ཤུ་དམར་པོ་དེ་ཟ་བཅུག་སོང།", eng: "He let/made me eat that red apple." },
  { tib: "ཕྲུ་གུ་ཚོ་ལ་གཟའ་ཉི་མ་ལ་ལས་ཀ་བྱེད་མ་བཅུག།", eng: "Don’t make the children work on Sundays." }
];

export const CHAPTER6_QUIZ = [
  { eng: "Please wait for five minutes.", tib: "སྐར་མ་ལྔ་སྒུག་རོགས་གནང།", type: "Request" },
  { eng: "Don't tell lies.", tib: "རྫུན་བཤད་མ་གནང་ད།", type: "Negative command" },
  { eng: "Should I call a doctor?", tib: "ཨམ་ཆི་གཅིག་སྐད་བཏང་ག", type: "Offering" },
  { eng: "Let's go to the hospital.", tib: "སྨན་ཁང་ལ་འགྲོ།", type: "Suggestion" },
  { eng: "Let them try.", tib: "ཁོང་ཚོ་ལ་ཐབས་ཤེས་བྱེད་བཅུག།", type: "Causative" },
  { eng: "Don't buy expensive houses.", tib: "ཁང་པ་གོང་ཆེན་པོ་འཚོལ་མ་གནང།", type: "Negative command" },
  { eng: "Say it again.", tib: "དེ་ཡང་བསྐྱར་གསུངས་ད།", type: "Command" },
  { eng: "Would you mind waiting?", tib: "སྐར་མ་ལྔ་ཙམ་སྒུག་རོགས་གནང་གས།", type: "Polite Request" },
  { eng: "I will do it for you.", tib: "ངས་བྱེད་དགོས།", type: "Offering" },
  { eng: "Shall we go?", tib: "ང་ཚོ་འགྲོ་གས།", type: "Suggestion" }
];

export const CH7_DESIRES_NOUN = [
  { tib: "དེབ་གཅིག་དགོས།", eng: "I want a book.", type: "Affirmative" },
  { tib: "དེབ་གཉིས་ལས་མང་ང་དགོས།", eng: "I want more than two books.", type: "Affirmative" },
  { tib: "ད་དུང་དེབ་གཉིས་དགོས།", eng: "I want two more books.", type: "Affirmative" },
  { tib: "ཉི་གདུགས་ཡག་ཤོས་དེ་དགོས།", eng: "I want the best umbrella.", type: "Affirmative" },
  { tib: "ང་ཚོ་ལ་ཉི་མ་གཉིས་ཀྱི་དུས་ཚོད་དགོས།", eng: "We want two days’ time.", type: "Affirmative" },
  { tib: "དེབ་རྙིང་པ་དེ་མ་དགོས།", eng: "I don’t want the old book.", type: "Negative" },
  { tib: "དེབ་མང་པོ་མ་དགོས།", eng: "I don’t want many books.", type: "Negative" },
  { tib: "དེབ་གཉིས་ལས་མང་ང་མ་དགོས།", eng: "I don’t want more than two books.", type: "Negative" },
  { tib: "ག་རེ་དགོས།", eng: "What do you want?", type: "Question" },
  { tib: "དེབ་དེ་དགོས་པས།", eng: "Do you want the book?", type: "Question" },
  { tib: "སྨྱུ་གུ་ག་ཚོད་དགོས།", eng: "How many pens do you want?", type: "Question" },
  { tib: "ཁོང་ཚོ་ལ་ཀློག་དེབ་གཅིག་དགོས་འདུག།", eng: "They want a textbook.", type: "3rd Person" },
  { tib: "ཁོང་ཚོ་ལ་འབྲི་དེབ་ལྔ་དགོས་འདུག།", eng: "They want five notebooks.", type: "3rd Person" }
];

export const CH7_DESIRES_VERB = [
  { tib: "ང་སློབ་གྲྭ་ལ་ཡང་བསྐྱར་ཡོང་འདོད་ཡོད།", eng: "I want to come again to school.", type: "Affirmative" },
  { tib: "ང་ཚོ་ནང་པའི་ཆོས་སློབ་སྦྱོང་བྱེད་འདོད་ཡོད།", eng: "We want to study Buddhism.", type: "Affirmative" },
  { tib: "ཉི་མ་གསུམ་ལས་མང་ང་སྡད་འདོད་ཡོད།", eng: "We want to stay for more than three days.", type: "Affirmative" },
  { tib: "ངའི་བོད་སྐད་ཡར་རྒྱས་གཏང་འདོད་ཡོད།", eng: "I want to improve my Tibetan.", type: "Affirmative" },
  { tib: "ངའི་དུས་ཚོད་འཕྲོ་བརླག་གཏང་འདོད་མེད།", eng: "I don’t want to waste my time.", type: "Negative" },
  { tib: "རྫུན་བཤད་འདོད་མེད།", eng: "I don’t want to tell lies.", type: "Negative" },
  { tib: "རྒྱ་གར་ལ་ག་དུས་ཡོང་འདོད་ཡོད།", eng: "When do you want to come to India?", type: "Question" },
  { tib: "ཁོང་ཚོ་བོད་ལ་འགྲོ་འདོད་འདུག།", eng: "They want to go to Tibet.", type: "3rd Person" }
];

export const CH7_INTENTIONS = [
  { tib: "ང་བོད་སྐད་སྦྱང་ཡག་འཆར་གཞི་ཡོད།", eng: "I plan to learn Tibetan.", type: "Plan" },
  { tib: "ང་སྒྲོན་ཁང་ཡག་པོ་གཅིག་འཚོལ་རྩིས་ཡོད།", eng: "I plan to look for a good hotel.", type: "Plan" },
  { tib: "སང་ཉིན་རྒྱ་གར་ལ་འགྲོ་ཡག་ཡིན།", eng: "I am going to go to India tomorrow.", type: "Going to" },
  { tib: "ང་ཚོ་རྟ་ནག་པོ་དེ་ཉོ་ཡག་ཡིན།", eng: "We are going to buy the black horse.", type: "Going to" },
  { tib: "ལོ་རྗེས་མ་གནས་སྐོར་ལ་འགྲོ་མཁན་ཡིན།", eng: "I am going on pilgrimage next year.", type: "Scheduled" },
  { tib: "གཟའ་སྤེན་པ་ལ་ཡོང་མཁན་ཡིན།", eng: "I am coming on Saturday.", type: "Scheduled" },
  { tib: "ང་སློབ་གྲྭ་ལ་འགྲོ་གྲབས་ཡོད།", eng: "I am about to go to the school.", type: "About to" },
  { tib: "ཁོང་ཚོ་ལས་ཀ་མཚམས་བཞག་གྲབས་འདུག།", eng: "They are about to stop the work.", type: "About to" }
];

export const CH7_OBLIGATION = [
  { tib: "བཟོད་སེམས་ཆེན་པོ་དགོས་རེད།", eng: "You have to be patient.", type: "Have to" },
  { tib: "ང་སློབ་གྲྭ་ལ་དུས་ཚོད་ལ་ཡིན་ཅིག་མིན་ཅིག་འགྲོ་དགོས་རེད།", eng: "I must go to the school on time.", type: "Must" },
  { tib: "གསོན་པོ་སྡད་པ་ལ་ཆུ་མེད་དུ་མི་རུང་བ་རེད།", eng: "Water is indispensable in order to survive.", type: "Indispensable" },
  { tib: "ཐུགས་ཁྲལ་གནང་དགོས་ཡག་ཡོད་མ་རེད།", eng: "There is no need to worry.", type: "No need" },
  { tib: "ཁྱེད་རང་དཀའ་ངལ་གདོང་ལེན་མ་བྱེད་རང་བྱེད་རེད།", eng: "You have no choice but to face the problem.", type: "No choice" }
];

export const CH7_PROHIBITION = [
  { tib: "སེམས་གཡེང་རྒྱུ་ཡོད་མ་རེད།", eng: "One shouldn’t get distracted.", type: "Shouldn't" },
  { tib: "དུས་ཚོད་འཕྲོ་བརླག་གཏང་རྒྱུ་ཡོད་མ་རེད།", eng: "One shouldn’t waste time.", type: "Shouldn't" },
  { tib: "མཚན་ལ་གཅིག་པུ་འགྲོ་ཡག་ཡོད་མ་རེད།", eng: "One should avoid going alone at night.", type: "Avoid" },
  { tib: "ཟ་ཁང་ལ་ཐ་མག་འཐེན་ཡག་ཡོད་མ་རེད།", eng: "One should avoid smoking in a restaurant.", type: "Avoid" }
];

export const CH7_PERMISSION = [
  { tib: "ཁྱེད་རང་གི་སྨྱུ་གུ་བེད་སྤྱོད་བྱས་ན་འགྲིགས་ཀྱི་རེད་པས།", eng: "Can I use your pen?", type: "Can I?" },
  { tib: "ང་དེའི་བསྡད་ན་འགྲིགས་ཀྱི་རེད་པས།", eng: "Can I sit here?", type: "Can I?" },
  { tib: "ཁོང་ཚོ་ཐུགས་སྤྲོ་ལ་སྐད་བཏང་ན་འགྲིགས་ཀྱི་རེད་པས།", eng: "Can we invite them to the party?", type: "Can I?" },
  { tib: "ང་ཚོ་ལོ་གསར་ལ་ཐུགས་སྤྲོ་བཏང་ན་འགྲིགས་ཀྱི་རེད་པས།", eng: "Can we throw a party on New Year?", type: "Can I?" },
  { tib: "ང་ཚོ་ལས་ཁུངས་ལ་ག་དུས་ཡོང་ན་འགྲིགས་ཀྱི་རེད་པས།", eng: "When can we come to the office?", type: "Can I?" },
  { tib: "དེབ་དེ་ག་པར་བཞག་ན་འགྲིགས་ཀྱི་རེད།", eng: "Where can I keep the book?", type: "Can I?" },
  { tib: "དེབ་ག་གི་ཉོས་ན་འགྲིགས་ཀྱི་རེད།", eng: "Which book can I buy?", type: "Can I?" },
  { tib: "ལྡེ་མིག་སུ་ལ་སྤྲད་ན་འགྲིགས་ཀྱི་རེད།", eng: "Whom can I give the key?", type: "Can I?" },
  { tib: "ཁྱེད་རང་ཟ་ཁང་ལ་ཐ་མག་འཐེན་ན་འགྲིགས་ཀྱི་མ་རེད།", eng: "You can’t smoke in a restaurant.", type: "Prohibition" },
  { tib: "ཁྱེད་རང་དུས་ཚོད་དང་དངུལ་འཕྲོ་བརླག་བཏང་ན་འགྲིགས་ཀྱི་མ་རེད།", eng: "You can’t waste money and time.", type: "Prohibition" },
  { tib: "དངུལ་གྱི་ཆེད་དུ་གཟུགས་པོ་བློས་བཏང་ན་འགྲིགས་ཀྱི་མ་རེད།", eng: "You can’t sacrifice your health for money.", type: "Prohibition" },
  { tib: "ང་སང་ཉིན་མ་ཡོང་ན་འགྲིགས་ཀྱི་རེད་པས།", eng: "Is it ok if I don’t come tomorrow?", type: "Can I?" },
  { tib: "ང་བཅར་ཆོག་པ་ཅིག།", eng: "May I come?", type: "May I?" },
  { tib: "ང་ཚོ་ཁྱེད་རང་གི་དེབ་བེད་སྤྱོད་བྱེད་ཆོག་པ་ཅིག།", eng: "May we use your book?", type: "May I?" },
  { tib: "སྨན་པ་གཅིག་སྐད་གཏང་ཆོག་པ་ཅིག།", eng: "May I call a doctor?", type: "May I?" },
  { tib: "ད་དུང་སྐར་མ་ལྔ་སྡད་ཆོག་པ་ཅིག།", eng: "May I stay for five more minutes?", type: "May I?" },
  { tib: "དེ་ཡང་བསྐྱར་ཐབས་ཤེས་བྱེད་ཆོག་པ་ཅིག།", eng: "May I try it again?", type: "May I?" },
  { tib: "ང་ཚོ་དཔྱིད་ཀ་བཅར་ཆོག་པ་ཅིག།", eng: "May we come in spring?", type: "May I?" },
  { tib: "སྨན་པ་དེ་རང་ལ་གོ་བསྡུར་བྱེད་ཆོག་པ་ཅིག།", eng: "May I consult the same doctor?", type: "May I?" },
  { tib: "ཟ་ཁང་ལ་ཐ་མག་འཐེན་ཆོག་གི་ཡོད་རེད་པས།", eng: "Is it allowed to smoke in a restaurant?", type: "Allowed" },
  { tib: "ཕྱི་ལོགས་ཀྱི་མི་ཚོགས་འདུ་ལ་ཡོང་ཆོག་གི་ཡོད་མ་རེད།", eng: "Outsiders are not allowed to come to the meeting.", type: "Allowed" },
  { tib: "ཕྱི་རྒྱལ་བ་ཚོ་རྒྱ་གར་ལ་ཟླ་བ་གསུམ་ལས་མང་ང་སྡད་ཆོག་གི་ཡོད་མ་རེད།", eng: "Foreigners are not allowed to stay in India for more than three months.", type: "Allowed" },
  { tib: "དབྱིན་ཡུལ་ལ་ལས་ཀ་བྱེད་ཡའི་ཆེད་དུ་དབྱིན་ཇིའི་སྐད་རྒྱབ་ཐུབ་པ་དགོས་རེད།", eng: "One should be able to speak English in order to work in England.", type: "Ability/Req" },
  { tib: "འཛིན་གྲྭ་འགོ་བཙུག་པའི་སྔོན་ལ་གཙང་མ་བཟོས་ཚར་པ་དགོས་རེད།", eng: "One should be done with cleaning before the class starts.", type: "Ability/Req" },
  { tib: "ལོ་ཅོ་བརྒྱད་ལ་སོ་སོའི་རྐང་པའི་སྒང་ལ་ལངས་ཐུབ་པ་དགོས་རེད།", eng: "At eighteen, one should be able to stand on one’s feet.", type: "Ability/Req" }
];

export const CH7_HOPES = [
  { tib: "ཁོ་ཨམ་ཆི་ངོ་མ་ཡིན་པའི་རེ་བ་ཡོད།", eng: "I hope he is a real doctor.", type: "Hope" },
  { tib: "བལ་ཡུལ་ལ་གནམ་གཤིས་ཡག་པོ་ཡོད་པའི་རེ་བ་ཡོད།", eng: "I hope the weather in Nepal is good.", type: "Hope" },
  { tib: "ཚང་མ་ཡག་པོ་བྱུང་བའི་རེ་བ་ཡོད།", eng: "I hope everything went well.", type: "Hope" },
  { tib: "གནམ་གཤིས་ཡག་པོ་ཡོང་བའི་རེ་བ་ཡོད།", eng: "I hope the weather would be good.", type: "Hope" },
  { tib: "དེ་ཐག་རིང་པོ་མེད་པའི་རེ་བ་ཡོད།", eng: "I hope it is not far.", type: "Hope" },
  { tib: "ཁྱེད་རང་མགྱོགས་པོ་མཇལ་བའི་རེ་བ་ཡོད།", eng: "I hope to see you soon.", type: "Hope" },
  { tib: "དེ་རིང་ཆར་པ་མ་གཏང་བའི་རེ་བ་ཡོད།", eng: "I hope it wouldn’t rain today.", type: "Hope" },
  { tib: "ལས་ཀ་དེ་གནངས་ཉིན་ཚར་བའི་རེ་བ་བྱེད་ཀྱི་ཡོད།", eng: "I am hoping to finish the work the day after tomorrow.", type: "Hope (Tense)" },
  { tib: "བོད་ལ་འགྲོ་ཡག་གོ་སྐབས་གཅིག་རག་པའི་རེ་བ་བྱས་པ་ཡིན།", eng: "We hoped to get an opportunity to go to Tibet.", type: "Hope (Tense)" },
  { tib: "ང་ཚོ་དཀོན་མཆོག་གསུམ་ལ་རེ་བ་བྱེད་ཀྱི་ཡིན།", eng: "We will place our hope on the Three Jewels.", type: "Hope (Tense)" },
  { tib: "ཁོང་ཚོ་སྤྱི་ཟླ་དང་པོའི་ནང་ཚུད་ལ་ལས་ཀ་ཚར་བའི་རེ་བ་ཡོད་རེད།", eng: "They hope to finish the work by January.", type: "Hope (Tense)" },
  { tib: "ཁྱེད་རང་མགྱོགས་པོ་དྲག་པར་ཤོག།", eng: "May you recover soon.", type: "Aspiration" },
  { tib: "འཛམ་བུ་གླིང་ལ་ཞི་བདེ་ཡོང་བར་ཤོག།", eng: "May there be peace in the world.", type: "Aspiration" },
  { tib: "ཡག་པོ་ཡོང་བར་ཤོག།", eng: "May it work out smoothly.", type: "Aspiration" },
  { tib: "ཁྱེད་རང་མ་འོངས་པ་ལ་ལམ་འགྲོ་ཡོང་བར་ཤོག།", eng: "May you be successful in the future.", type: "Aspiration" },
  { tib: "སང་ཉིན་ཆར་པ་མ་གཏང་བར་ཤོག།", eng: "May it not rain tomorrow.", type: "Aspiration" },
  { tib: "གནས་ཚུལ་ཡག་ཏུ་འགྲོ་བར་ཤོག།", eng: "May the situation get better.", type: "Aspiration" },
  { tib: "བར་ཆད་མ་ཡོང་བར་ཤོག།", eng: "May there be no obstacles.", type: "Aspiration" },
  { tib: "ང་ཕྱུགས་པོ་ཡོད་རོགས་བྱས་ན།", eng: "I wish I were rich.", type: "Wish" },
  { tib: "ང་ཕྱུག་པོ་ཡིན་རོགས་བྱས་ན།", eng: "I wish I were a rich man.", type: "Wish" },
  { tib: "ང་རྒྱ་གར་ལ་ཡོད་ཆོག་ག།", eng: "I wish I were in India.", type: "Wish" },
  { tib: "ང་ཨམ་ཆི་ཡིན་ཆོག་ག།", eng: "I wish I were a doctor.", type: "Wish" },
  { tib: "ཁྱེད་རང་དབྱིན་ཇི་སྦྱངས་ཡོད་རོགས་བྱས་ན།", eng: "I wish you had learned English.", type: "Wish" },
  { tib: "ངས་ཁོང་ཚོ་ལ་ལབ་མེད་ཆོག་ག།", eng: "I wish I hadn’t told them.", type: "Wish" },
  { tib: "སློབ་ཕྲུག་ཚོས་དོ་སྣང་བྱས་ནས་ཉན་རོགས་བྱས་ན།", eng: "I wish the students would listen attentively.", type: "Wish" },
  { tib: "ཁོང་ཚོས་ང་ཚོ་ལ་རོགས་པ་བྱེད་ག་ཡོང་ཆོག་ག།", eng: "I wish they would come to help us.", type: "Wish" },
  { tib: "གནས་ཚུལ་ཡག་ཏུ་འགྲོ་རོགས་བྱས་ན།", eng: "I wish the situation would get better.", type: "Wish" },
  { tib: "ཁོང་ཡུན་རིང་ཙམ་བཞུགས་ཆོག་ག།", eng: "I wish he would stay a bit longer.", type: "Wish" },
  { tib: "ཁོང་མགྱོགས་པོ་དྲག་ཆོག་ག།", eng: "I wish he would recover soon.", type: "Wish" }
];

export const CHAPTER7_QUIZ = [
  { eng: "I want a book.", tib: "དེབ་གཅིག་དགོས།", type: "Desire (Noun)" },
  { eng: "I want to study Buddhism.", tib: "ང་ཚོ་ནང་པའི་ཆོས་སློབ་སྦྱོང་བྱེད་འདོད་ཡོད།", type: "Desire (Verb)" },
  { eng: "I plan to learn Tibetan.", tib: "ང་བོད་སྐད་སྦྱང་ཡག་འཆར་གཞི་ཡོད།", type: "Intention" },
  { eng: "You have to be patient.", tib: "བཟོད་སེམས་ཆེན་པོ་དགོས་རེད།", type: "Obligation" },
  { eng: "One shouldn’t waste time.", tib: "དུས་ཚོད་འཕྲོ་བརླག་གཏང་རྒྱུ་ཡོད་མ་རེད།", type: "Prohibition" },
  { eng: "Can I use your pen?", tib: "ཁྱེད་རང་གི་སྨྱུ་གུ་བེད་སྤྱོད་བྱས་ན་འགྲིགས་ཀྱི་རེད་པས།", type: "Permission" },
  { eng: "May there be peace in the world.", tib: "འཛམ་བུ་གླིང་ལ་ཞི་བདེ་ཡོང་བར་ཤོག།", type: "Aspiration" },
  { eng: "I wish I were rich.", tib: "ང་ཕྱུགས་པོ་ཡོད་རོགས་བྱས་ན།", type: "Wish" },
  { eng: "They want to go to Tibet.", tib: "ཁོང་ཚོ་བོད་ལ་འགྲོ་འདོད་འདུག།", type: "3rd Person Desire" },
  { eng: "I am about to go to school.", tib: "ང་སློབ་གྲྭ་ལ་འགྲོ་གྲབས་ཡོད།", type: "Imminence" }
];

export const CH8_INFINITIVES = [
  { tib: "བོད་སྐད་སྦྱང་ཡག་ལས་སླ་པོ་ཡོད་རེད།", eng: "It is easy to learn Tibetan.", type: "Adjective + To" },
  { tib: "དབྱིན་ཇིའི་སྐད་སྦྱང་ཡག་གལ་ཆེན་པོ་ཡོད་རེད།", eng: "It is important to learn English.", type: "Adjective + To" },
  { tib: "བཟོད་པ་སྒོམ་ཡག་ལས་སླ་པོ་ཡོད་མ་རེད།", eng: "It is not easy to be patient.", type: "Adjective + To" },
  { tib: "གོམས་གཤིས་གྱུར་ཡག་ལས་སླ་ལོས་ཡོད་རེད།", eng: "How easy is it to change one’s habits?", type: "Adjective + To" },
  { tib: "བོད་སྐད་སྦྱང་ཡག་ག་ཆེན་གྱིས་ལས་སླ་རུ་ཕྱིན་ཤག", eng: "It has gotten far easier to learn Tibetan.", type: "Adjective + To" },
  { tib: "ང་ལ་ཁྱེད་རང་ལ་གཅིག་ལབ་ཡག་ཡོད།", eng: "I have something to tell you.", type: "Object to Verb" },
  { tib: "བཀའ་འདྲི་ཞུ་ཡག་གང་ཡང་མེད།", eng: "I have nothing to ask.", type: "Object to Verb" },
  { tib: "ཁོང་ཚོ་ལ་ག་རེ་སྟོན་ཡག་འདུག།།", eng: "What do they have to show?", type: "Object to Verb" },
  { tib: "ང་ལས་ཀ་བྱེད་ཡག་འགོ་བཙུག་པ་ཡིན།", eng: "I started to work / I started working.", type: "Two Verbs" },
  { tib: "ཁོང་ཚོ་རྒྱ་གར་ལ་སྡད་ཡག་ཐག་བཅད་སོང།", eng: "They decided to stay in India.", type: "Two Verbs" },
  { tib: "ཁོང་ཚོ་ཤ་ཟ་ཡག་ག་དུས་མཚམས་བཞག་གི་རེད།", eng: "When will they stop eating meat?", type: "Two Verbs" },
  { tib: "ཁོང་ཚོ་ལ་རོགས་པ་བྱེད་ག་ཕྱིན་པ་ཡིན།", eng: "I went to help them.", type: "Motion + To" },
  { tib: "ཁོང་ཚོ་ཁྲོམ་ལ་དེབ་ཁ་ཤས་ཉོ་ག་འཁྲིད།", eng: "Take them to the market to buy some books.", type: "Motion + To" },
  { tib: "ཁྱེད་རང་གི་བུ་ནང་པའི་ཆོས་སློབ་སྦྱོང་བྱེད་ག་བཏང་པས།", eng: "Did you send your son to study Buddhism?", type: "Motion + To" },
  { tib: "ཁོང་ཚོ་ལ་དབྱིན་ཇི་སླབ་ཡག་ཐབས་ཤེས་བྱེད་ཀྱི་ཡོད།", eng: "I am trying to teach them English.", type: "Infinitive ཡག་" },
  { tib: "སློབ་གྲྭ་ལ་འགྲོ་ཡག་གྲ་སྒྲིག་བྱེད།", eng: "Get ready to go to the school.", type: "Infinitive ཡག་" },
  { tib: "ང་སྐད་སླབ་ཡག་དགའ་པོ་ཡོད།", eng: "I love teaching languages.", type: "Gerund (Verb+ing)" },
  { tib: "ང་རྫུན་བཤད་ཡག་དགའ་པོ་མེད།", eng: "I don’t like telling lies.", type: "Gerund (Verb+ing)" },
  { tib: "ཁ་ལག་ཟོ་ཡག་ལ་དོ་སྣང་མེད།", eng: "I don’t have any interest in making food.", type: "Gerund (Verb+ing)" }
];

export const CH8_TEMPORAL = [
  { tib: "བོད་ལ་ཕྱིན་པའི་སྔོན་ལ་བོད་སྐད་སྦྱངས་པ་ཡིན།", eng: "I learned Tibetan before going to Tibet.", type: "Before (སྔོན་ལ་)" },
  { tib: "སྨན་མ་བཟས་སྔོན་ལ་སྨན་པ་ལ་གོ་བསྡུར་བྱེད།", eng: "Consult a doctor before taking medicine.", type: "Before (སྔོན་ལ་)" },
  { tib: "ཁྱེད་རང་ཕེབས་པའི་སྔོན་ལ་ཁ་པར་གཏང་གནང་རོགས་གནང།", eng: "Please call me before you come.", type: "Before (སྔོན་ལ་)" },
  { tib: "ལས་ཀ་ཚར་ནས་གློག་གསད།", eng: "Turn off the light after you finish your work.", type: "After (ནས་)" },
  { tib: "བོད་སྐད་སྦྱངས་ནས་བོད་ལ་ཕྱིན་པ་ཡིན།", eng: "I went to Tibet after learning Tibetan.", type: "After (ནས་)" },
  { tib: "འཛིན་གྲྭ་ཚར་ནས་ཡོང་གི་ཡིན།", eng: "I will come after the class finishes.", type: "After (ནས་)" },
  { tib: "ཁོང་ཚོ་རྒྱ་གར་ལ་ཕེབས་དུས་ལབ་པ་ཡིན།", eng: "I told them when they came to India.", type: "When (དུས་)" },
  { tib: "དུས་ཚོད་རག་དུས་ཙམ་པ་རོགས་པ་བྱེད་ཀྱི་ཡོད།", eng: "I help them when I get time.", type: "When (དུས་)" },
  { tib: "ང་ཚོ་སློབ་གྲྭ་ལ་འགྲོ་གིན་འགྲོ་གིན་དེའི་སྐོར་ལ་གྲོས་བསྡུར་བྱས་པ་ཡིན།", eng: "We discussed about it while going to the school.", type: "While (གིན་)" },
  { tib: "ཁྱེད་རང་མ་དྲག་བར་དུ་སྨན་ཟ་དགོས་རེད།", eng: "You have to take medicine until you recover.", type: "Until (བར་དུ་)" },
  { tib: "སྨན་པ་མ་ཕེབས་བར་དུ་སྒུགས་འདོད་ཡོད།", eng: "I want to wait until the doctor comes.", type: "Until (བར་དུ་)" },
  { tib: "ན་པ་དང་ལམ་སང་ཨམ་ཆི་གཅིག་ལ་གོ་བསྡུར་བྱེད།", eng: "Consult a doctor as soon as you get sick.", type: "As soon as" },
  { tib: "འཛིན་གྲྭ་ཚར་བ་དང་ལམ་སང་ཡོང་ཡག་ཡིན།", eng: "I am going to come as soon as the class finishes.", type: "As soon as" }
];

export const CH8_CONDITIONAL = [
  { tib: "ཁྱེད་རང་རྒྱ་གར་ལ་ཕྱིན་ན་ང་ལ་ལབ་ཨ།", eng: "Let me know if you go to India.", type: "If (ན་)" },
  { tib: "ཐབས་ཤེས་བྱས་ན་ཡར་རྒྱས་འགྲོ་གི་རེད།", eng: "If you try it will improve.", type: "If (ན་)" },
  { tib: "འགྲོ་འདོད་མེད་ན་འགྲོ་དགོས་མ་རེད།", eng: "You don’t have to go if you don’t want to go.", type: "If (ན་)" },
  { tib: "ཁོང་ལས་ཁུངས་ལ་མེད་ན།", eng: "What if he is not in the office?", type: "What if (ན།)" },
  { tib: "ང་ཁྱེད་རང་ཡིན་ན་དེ་བྱེད་ས་རེད།", eng: "I would do it if I were you.", type: "Subjunctive (I would)" },
  { tib: "ང་ལ་དངུལ་ཡོད་ན་ཁྱེད་རང་ལ་གཡར་ས་རེད།", eng: "I would lend you some money if I had some.", type: "Subjunctive (I would)" },
  { tib: "ང་ཁྱེད་རང་ཡིན་ན་རྒྱ་གར་ལ་བསྡད་པ་ཡོད།", eng: "If I were you, I would have stayed in India.", type: "Past Subjunctive" },
  { tib: "ལག་ཆ་ཡོད་ན་དེ་བྱེད་ཐུབ་ས་རེད།", eng: "I could do it if I had tools.", type: "Could (ཐུབ་ས་རེད)" },
  { tib: "སྨན་འཟས་པའི་སྔོན་ལ་ཨམ་ཆི་གཅིག་ལ་གོ་བསྡུར་བྱས་ནའི་འགྲིགས་པ་ཡོད།", eng: "I should have consulted a doctor before taking medicine.", type: "Should have (Past)" },
  { tib: "དེའི་སྐོར་ལ་བསམ་བློ་གཏང་དགོས་རེད་པ།", eng: "You should have thought about it.", type: "Should have (Present)" }
];

export const CH8_CLAUSES = [
  { tib: "གནམ་གཤིས་ཀྱིས་བྱས་ཙང་རེད།", eng: "It is because of the weather.", type: "Because (of)" },
  { tib: "ངས་བྱས་ཙང་མ་རེད་པ།", eng: "It was not because of me, right?", type: "Because (of)" },
  { tib: "ནད་ཡམས་ཀྱིས་བྱས་ཙང་ཁོང་ཚོ་རྒྱ་ནག་ལ་འགྲོ་གི་ཡོད་མ་རེད།", eng: "Because of the epidemic they don’t go to China.", type: "Because (of)" },
  { tib: "ང་ཚོ་གྲོད་ཁོག་ལྟོག་ཙང་ཟ་ཁང་ལ་ཕྱིན་པ་ཡིན།", eng: "We went to a restaurant because we were hungry.", type: "Because (ཙང་)" },
  { tib: "རྒན་ལགས་མ་ཕེབས་ཙང་ཁོང་ཚོའི་ཁང་པ་ལ་ལོག་སོང།", eng: "They returned to their house as the teacher didn’t come.", type: "Because (ཙང་)" },
  { tib: "མགྲོན་པོ་ཕེབས་ཙང་ཁོང་ནང་ལ་བཞུགས་སོང།", eng: "He stayed home because a guest came.", type: "Because (ཙང་)" },
  { tib: "ཁོང་བོད་པ་རེད་དེ་བོད་སྐད་རྒྱབ་ཐུབ་ཀྱི་ཡོད་མ་རེད།", eng: "He is Tibetan however he can’t speak Tibetan.", type: "However (དེ་)" },
  { tib: "ང་ལ་དེབ་དེ་ཡོད་དེ་འཁྱེར་མེད།", eng: "I have the book however I don't have it on me.", type: "However (དེ་)" },
  { tib: "སློབ་གྲྭ་གཅིག་ཡོད་རེད་དེ་ཡག་པོ་ཡོད་མ་རེད།", eng: "There is a school however it is not good.", type: "However (དེ་)" },
  { tib: "ཡོང་ཡག་འཆར་གཞི་ཡོད་དེ་ཐག་བཅད་མེད།", eng: "I plan to come however I haven’t decided.", type: "However (དེ་)" },
  { tib: "ཁོ་ལོ་ཆུང་ཆུང་རེད་དེ་ད་ག་སེ་སྡད་སྡད་ཀྱི་ཡོད་རེད།", eng: "He is young however he idles around.", type: "However (དེ་)" },
  { tib: "ཁོ་ཕྱུག་པོ་ཡོད་རེད་དེ་སེར་སྣ་ཚ་པོ་ཡོད་རེད།", eng: "He is rich however he is stingy.", type: "However (དེ་)" },
  { tib: "ཨ་རི་ལ་ལས་ཀ་བྱེད་ཡག་ལ་ཡིན་ཅིག་མིན་ཅིག་ཨ་རི་བ་ཡིན་དགོས་ཡག་ཡོད་མ་རེད།", eng: "It is not compulsory to be American in order to work in America.", type: "Purpose (In order to)" },
  { tib: "ཚོང་རྒྱབ་ཡའི་ཆེད་དུ་དངུལ་ཡིན་ཅིག་མིན་ཅིག་ཡོད་དགོས་རེད།", eng: "One must have money in order to do business.", type: "Purpose (In order to)" },
  { tib: "གཅིག་སླབ་ཡག་ལ་ཡིན་ཅིག་མིན་ཅིག་བཟོད་པ་ཡོད་དགོས་རེད།", eng: "One must have patience in order to teach.", type: "Purpose (In order to)" },
  { tib: "ཆོས་ཉམས་ལེན་བྱེད་པ་ལ་ཡིན་ཅིག་མིན་ཅིག་སྙིང་རྗེ་ཡོད་དགོས་རེད།", eng: "One must have compassion in order to practice the Dharma.", type: "Purpose (In order to)" },
  { tib: "དབྱིན་ཡུལ་ལ་ལས་ཀ་བྱེད་ཡའི་ཆེད་དུ་དབྱིན་ཇི་སྦྱང་གི་ཡོད།", eng: "I am learning English in order to work in England.", type: "Purpose (In order to)" },
  { tib: "ཟ་ཁང་ཟིམ་ཡའི་ཆེད་དུ་མོག་མོག་བཟོ་སྟངས་སྦྱང་གི་ཡོད།", eng: "I am learning how to make momos in order to run a restaurant.", type: "Purpose (In order to)" },
  { tib: "སྐད་སྦྱང་ཡག་ལ་བཟོད་པ་དང་བརྩོན་འགྲུས་དོ་སྣང་བསམ་བརྟན་ཡིན་ཅིག་མིན་ཅིག་དགོས་རེད།", eng: "One must have patience, diligence, interest, and concentration to learn a language.", type: "Purpose (In order to)" },
  { tib: "བདེ་བ་ཡོང་ཡག་ལ་དགེ་བ་ཡིན་ཅིག་མིན་ཅིག་བསག་དགོས་རེད།", eng: "One must accumulate merit in order to have happiness.", type: "Purpose (In order to)" },
  { tib: "གཏན་གྱི་བདེ་བའི་ཆེད་དུ་གནས་སྐབས་ཀྱི་བདེ་བ་བློས་གཏང་དགོས་རེད།", eng: "One must sacrifice temporary happiness for permanent happiness.", type: "Purpose (In order to)" },
  { tib: "མ་རྗེད་ཡའི་ཆེད་དུ་འབྲི་གོ་ཡོད།", eng: "I write in order not to forget.", type: "Purpose (In order not to)" },
  { tib: "མ་རྗེད་ཡའི་ཆེད་དུ་འབྲི་དགོས་རེད།", eng: "One has to write in order not to forget.", type: "Purpose (In order not to)" },
  { tib: "ཡག་པོ་ཡོང་བ་ལ་སྔོན་ཚུད་ནས་གྲ་སྒྲིགས་བྱེད་དགོས་རེད།", eng: "One has to prepare in advance in order for things to go well.", type: "Purpose (In order not to)" },
  { tib: "ཁོང་ཚོ་ན་ཚ་མ་འགོས་ཡག་ལ་ཁབ་རྒྱབ་ཀྱི་ཡོད་རེད།", eng: "They are taking vaccines in order not to get infected.", type: "Purpose (In order not to)" },
  { tib: "ཡིན་ཅིག་མིན་ཅིག་འོས་ཤོག་བླུག་དགོས་ཡག་ཡོད་མ་རེད།", eng: "It is not mandatory to cast a vote.", type: "Purpose (In order not to)" },
  { tib: "གཙང་མ་བཟོས་ཁ་ལག་བཟོས་སྣོད་ཆས་བཀྲུས་བྱས་པ་ཡིན།", eng: "I did the cleaning, cooking and washing the dishes.", type: "Sequential Actions" },
  { tib: "ཁོང་གིས་ཁང་མིག་གཙང་མ་བཟོས་ཉིན་དགུང་ཁ་ལག་བཟོས་དུག་སློག་བཀྲུས་བྱས་ཤག།", eng: "He has cleaned the room, cooked the lunch and washed the clothes.", type: "Sequential Actions" },
  { tib: "ཁྱེད་རང་གིས་ཁང་མིག་གཙང་མ་བཟོས་ཉིན་དགུང་གི་ཁ་ལག་བཟོས་དུག་སློག་བཀྲུས་བྱེད་དགོས་རེད་པ།", eng: "You should have cleaned the room, cooked the lunch and washed the clothes.", type: "Sequential Actions" }
];

export const CH8_CONJUNCTIONS = [
  { tib: "ཡིན་ནའི་", eng: "But" },
  { tib: "ད་དུང་", eng: "Still" },
  { tib: "རྒྱུ་མཚན་དེ་ལ་བརྟེན་ནས་", eng: "Because of the reason" },
  { tib: "དེ་སོང་ཙང་", eng: "Therefore" },
  { tib: "བྱས་ཙང་", eng: "So" },
  { tib: "འདི་འདྲའི་ཡིན་པ་སོང་ཙང་", eng: "That is why" },
  { tib: "འདི་འདྲའི་ཡིན་དུས་རྩ་ནས་", eng: "Which is why" },
  { tib: "དེ་འདྲའི་ཡིན་པ་ཡིན་དུས་", eng: "Thus" },
  { tib: "ག་རེ་ཡིན་ཟེར་ན་", eng: "Because" },
  { tib: "དངོས་གནས་", eng: "Really" },
  { tib: "དངོས་གནས་བྱས་ན་", eng: "Actually" },
  { tib: "གཞི་ནས་", eng: "Eventually / Only then" },
  { tib: "འདི་འདྲའི་ཡིན་ན་", eng: "In that case" },
  { tib: "བྱས་ན་ / འོ་ན་", eng: "Well then" },
  { tib: "ནམ་རྒྱུན་", eng: "Normally / Usually" },
  { tib: "ཐ་མ་ལ་", eng: "Finally" },
  { tib: "སྤྱིར་བཏང་", eng: "Generally" },
  { tib: "དམིགས་བསལ་གྱི་", eng: "Specially / In particular" },
  { tib: "ཆེད་མངགས་", eng: "Especially / Deliberately" },
  { tib: "རྐང་བཙུག་ནས་", eng: "On purpose" },
  { tib: "དེ་ནང་བཞིན་", eng: "In the same way" },
  { tib: "ད་ག་ནང་བཞིན་", eng: "Similarly / Likewise" },
  { tib: "ག་རེ་ཡིན་ན་གང་ཤེས་", eng: "For some reason" },
  { tib: "ཡང་ན་", eng: "Or" },
  { tib: "ཕལ་ཆེར་", eng: "Probably" },
  { tib: "གཅིག་བྱས་ན་", eng: "Perhaps" },
  { tib: "འོང་བྱས་པས་", eng: "By the way" },
  { tib: "སྟབས་ཡག", eng: "Good for you / Thanks god" },
  { tib: "ཞོར་ལ་", eng: "On the side" },
  { tib: "ཡང", eng: "Too / Also / Even" },
  { tib: "གང་ལྟར་", eng: "Anyway" },
  { tib: "སྟབས་ལེགས་པ་ཅིག་ལ་", eng: "Fortunately" },
  { tib: "སྟབས་མ་ལེགས་པ་ཅིག་ལ་", eng: "Unfortunately" },
  { tib: "ཡག་ག་ཅིག་ལ་", eng: "Luckily" },
  { tib: "སྡུག་ག་ཅིག་ལ་", eng: "Sadly" },
  { tib: "ན་", eng: "If" },
  { tib: "དམའ་མཐའ་ལ་", eng: "At least" },
  { tib: "བྱུང་ན་", eng: "If possible" },
  { tib: "མ་བྱུང་ན་", eng: "If not possible" },
  { tib: "མང་ན་", eng: "At the most" },
  { tib: "ཉུང་ན་", eng: "At the least" },
  { tib: "དོན་དངོས་ལ་", eng: "In reality / In fact" },
  { tib: "རྩ་བའི་", eng: "Basically / Fundamentally" },
  { tib: "སྤྱི་ཡོངས་ནས་བཤད་ན་", eng: "By and large" },
  { tib: "ཕར་ཚུར་བྱས་ནས་", eng: "Somehow" },
  { tib: "ཨ་ལས་", eng: "Oh! I see" },
  { tib: "འདི་འདྲས་བྱས་ནས་", eng: "That way / Thus" },
  { tib: "བལྟ་གིན་བལྟ་གིན་བྱེད་", eng: "See how it goes / Wait and watch" },
  { tib: "གང་ཤེས་", eng: "No idea, who knows" },
  { tib: "ག་པར་ག་པར་", eng: "No way" },
  { tib: "ཨ་ཁ་", eng: "Sorry to know it" },
  { tib: "ཡ་ཡ་", eng: "Okay (agreeing)" },
  { tib: "ལེགས་སོ་", eng: "Okay (honorific)" },
  { tib: "འོ་ཛི་ལ་", eng: "Wow" },
  { tib: "ད་ལྟ་བྱེད་དུས་", eng: "Now I know that" },
  { tib: "དཀོན་མཆོག་མཁྱེན་ནོ།", eng: "Oh god!" },
  { tib: "ད་ག་སེ་", eng: "Just (without any effort)" },
  { tib: "དེ་ནས་ / ཨ་ནི་", eng: "And then, thereafter" },
  { tib: "ག་རེ་ཟ། / ག་རེ་ཞུ་དགོས་རེད།", eng: "Um, er, you know (word whisker)" }
];

export const CHAPTER8_QUIZ = [
  { eng: "It is easy to learn Tibetan.", tib: "བོད་སྐད་སྦྱང་ཡག་ལས་སླ་པོ་ཡོད་རེད།", type: "Infinitive" },
  { eng: "I went to help them.", tib: "ཁོང་ཚོ་ལ་རོགས་པ་བྱེད་ག་ཕྱིན་པ་ཡིན།", type: "Motion + To" },
  { eng: "I started working.", tib: "ང་ལས་ཀ་བྱེད་ཡག་འགོ་བཙུག་པ་ཡིན།", type: "Two Verbs" },
  { eng: "I learned Tibetan before going to Tibet.", tib: "བོད་ལ་ཕྱིན་པའི་སྔོན་ལ་བོད་སྐད་སྦྱངས་པ་ཡིན།", type: "Temporal (Before)" },
  { eng: "I told them when they came to India.", tib: "ཁོང་ཚོ་རྒྱ་གར་ལ་ཕེབས་དུས་ལབ་པ་ཡིན།", type: "Temporal (When)" },
  { eng: "I will come if I get time.", tib: "དུས་ཚོད་རག་ན་ཡོང་གི་ཡིན།", type: "Conditional (If)" },
  { eng: "I would do it if I were you.", tib: "ང་ཁྱེད་རང་ཡིན་ན་དེ་བྱེད་ས་རེད།", type: "Subjunctive" },
  { eng: "We went to a restaurant because we were hungry.", tib: "ང་ཚོ་གྲོད་ཁོག་ལྟོག་ཙང་ཟ་ཁང་ལ་ཕྱིན་པ་ཡིན།", type: "Casual (Because)" },
  { eng: "He is Tibetan however he can’t speak Tibetan.", tib: "ཁོང་བོད་པ་རེད་དེ་བོད་སྐད་རྒྱབ་ཐུབ་ཀྱི་ཡོད་མ་རེད།", type: "Concessive (However)" },
  { eng: "I am learning English in order to work in England.", tib: "དབྱིན་ཡུལ་ལ་ལས་ཀ་བྱེད་ཡའི་ཆེད་དུ་དབྱིན་ཇི་སྦྱང་གི་ཡོད།", type: "Purpose (In order to)" },
  { eng: "Consult a doctor as soon as you get sick.", tib: "ན་པ་དང་ལམ་སང་ཨམ་ཆི་གཅིག་ལ་གོ་བསྡུར་བྱེད།", type: "Temporal (As soon as)" },
  { eng: "But", tib: "ཡིན་ནའི་", type: "Conjunction" }
];

export const CHAPTER9_QUIZ = [
  { eng: "It turns out that they are Tibetan.", tib: "ཁོང་ཚོ་བོད་པ་རེད་ཤག", type: "Discovery (Noun)" },
  { eng: "I was told that negative emotions are the cause of suffering.", tib: "སྡུག་བསྔལ་གྱི་རྒྱུ་ཉོན་མོངས་རེད་ཟ།", type: "Hearsay (ཟ་)" },
  { eng: "I hired a taxi assuming you would come.", tib: "ཁྱེད་རང་ཕེབས་ཡག་ཡིན་ཤག་བྱས་ནས་མོ་ཊྲ་གཅིག་གླས་པ་ཡིན།", type: "Presumption" },
  { eng: "In fact I didn’t make this house.", tib: "ཁང་པ་འདི་ངས་བཟོས་པ་མ་རེད།", type: "Refutation" },
  { eng: "Are you telling me not to tell lies?", tib: "རྫུན་མ་བཤད་ཨས།", type: "You mean? (ཨས་)" },
  { eng: "Winter is colder than summer, right?", tib: "དབྱར་ཀ་ལས་དགུན་ཁ་གྲང་ང་འདུག་ག།", type: "Confirmation tag (ག)" },
  { eng: "As far as I remember, there is no school in that village.", tib: "ངས་དྲན་པ་ལ་གྲོང་གསེབ་དེ་ལ་སློབ་གྲྭ་ཡོད་མ་རེད།", type: "As far as I know" },
  { eng: "It depends on oneself.", tib: "སོ་སོ་ལ་རག་ལས་ཀྱི་ཡོད་རེད།", type: "Depends On/Whether" },
  { eng: "I did my best.", tib: "གང་ཐུབ་ཐུབ་བྱས་པ་ཡིན།", type: "Do one's best" },
  { eng: "I left no stone unturned.", tib: "ཡོད་གུ་རྩལ་སྦྲུག་བྱས་པ་ཡིན།", type: "Leave no stone unturned" },
  { eng: "Please feel free to ask questions.", tib: "བཀའ་འདྲི་གནང་རྐྱང་གནང་རོགས་གནང།", type: "Feel free to" },
  { eng: "Why on earth did you come without asking permission?", tib: "བཀའ་ཁྲོལ་མ་ཞུས་ནས་ཡོང་ནས་ག་རེ་བྱས་ག།", type: "Why on earth" },
  { eng: "One cannot do business without money.", tib: "དངུལ་མེད་པ་ལ་ཚོང་རྒྱབ་ཐུབ་ཀྱི་མ་རེད།", type: "Without doing" },
  { eng: "Tashi says \"I will come.\"", tib: "བཀྲ་ཤིས་ཡོང་གི་ཡིན།ཟ།", type: "Direct Speech (No agentive)" },
  { eng: "Tashi says it is not difficult to learn Tibetan.", tib: "བཀྲ་ཤིས་ཀྱིས་བོད་སྐད་སྦྱང་ཡག་དཀའ་ལས་ཁག་པོ་ཡོད་མ་རེད་ཟ།", type: "Direct Speech (With agentive)" }
];

export const CH9_PRESUMPTION_RULES = [
  { type: "Noun", pos: "ཡིན་ཤག་ཡིན། / ཡིན་ཤག་རེད།", neg: "མིན་ཤག་ཡིན། / མིན་ཤག་རེད།" },
  { type: "Adjective", pos: "ཡོད་ཤག་ཡིན། / ཡོད་ཤག་རེད།", neg: "མེད་ཤག་ཡིན། / མེད་ཤག་རེད།" },
  { type: "Adjective (Past)", pos: "བྱུང་ཤག་ཡིན། / བྱུང་ཤག་རེད།", neg: "" },
  { type: "Adjective (Past Perfect)", pos: "བྱུང་ཡོད་ཤག་ཡིན། / བྱུང་ཡོད་ཤག་རེད།", neg: "བྱུང་མེད་ཤག་ཡིན། / བྱུང་མེད་ཤག་རེད།" },
  { type: "Adjective (Present)", pos: "ཡོང་གི་ཡོད་ཤག་ཡིན། / ཡོད་གི་ཡོད་ཤག་རེད།", neg: "ཡོང་གི་མེད་ཤག་ཡིན། / ཡོང་གི་མེད་ཤག་རེད།" },
  { type: "Adjective (Future)", pos: "ཡོང་ཡག་ཡིན་ཤག་ཡིན། / ཡོང་ཡག་ཡིན་ཤག་རེད།", neg: "" },
  { type: "Preposition", pos: "ཡོད་ཤག་ཡིན། / ཡོད་ཤག་རེད།", neg: "" },
  { type: "Verb (Past)", pos: "པ་ཡིན་ཤག་ཡིན། / པ་ཡིན་ཤག་རེད།", neg: "" },
  { type: "Verb (Present Perfect)", pos: "ཡོད་ཤག་ཡིན། / ཡོད་ཤག་རེད།", neg: "" },
  { type: "Verb (Future)", pos: "ཡག་ཡིན་ཤག་ཡིན། / ཡག་ཡིན་ཤག་རེད།", neg: "" },
  { type: "Have to", pos: "དགོས་ཀྱི་ཡོད་ཤག་ཡིན། / དགོས་ཀྱི་ཡོད་ཤག་རེད།", neg: "" },
  { type: "Allowed to", pos: "ཆོག་གི་ཡོད་ཤག་ཡིན། / ཆོག་གི་ཡོད་ཤག་རེད།", neg: "" },
];

export const CH9_EVIDENTIALITY = [
  // Discovery
  { tib: "ཁོང་ཚོ་བོད་པ་རེད་ཤག", eng: "It turns out that they are Tibetan.", type: "Discovery (Noun related)" },
  { tib: "དེ་ཟ་ཁང་མ་རེད་ཤག", eng: "It turns out that it is not a restaurant.", type: "Discovery (Noun related)" },
  { tib: "ཁོང་ཚོ་ལས་ཁུངས་ལ་འདུག་ཤག", eng: "It turns out that they are at the office.", type: "Discovery (Existential)" },
  { tib: "ཁོང་ནང་ལ་མི་འདུག་ཤག་", eng: "It turns out that he is not at home.", type: "Discovery (Existential)" },
  { tib: "ཁོང་གི་རྒན་ལགས་རེད་ཤག", eng: "It turned out to be his teacher.", type: "Discovery (Possessive)" },
  { tib: "ཁོང་ཚོའི་སློབ་གྲྭ་མ་རེད་ཤག", eng: "It turned out not to be their school.", type: "Discovery (Possessive)" },

  // Hearsay (ཟ་)
  { tib: "འདོད་ཆགས་ཉོན་མོངས་ཀྱི་གྲས་གཅིག་རེད་ཟ།", eng: "They say attachment is one of the negative emotions.", type: "Hearsay (ཟ་)" },
  { tib: "སྡུག་བསྔལ་གྱི་རྒྱུ་ཉོན་མོངས་རེད་ཟ།", eng: "I was told that negative emotions are the cause of suffering.", type: "Hearsay (ཟ་)" },
  { tib: "སེམས་འདུལ་ཡག་དཀའ་ལས་ཁག་པོ་ཡོད་རེད་ཟ།", eng: "I was told that it is difficult to tame one’s mind.", type: "Hearsay (ཟ་)" },
  { tib: "དངུལ་ལས་གཟུགས་པོ་གལ་ཆེ་བ་ཡོད་རེད་ཟ།", eng: "They say health is more important than money.", type: "Hearsay (ཟ་)" },
  { tib: "ཀུན་སློང་གལ་ཆེ་ཤོས་རེད་ཟ།", eng: "I was told that motivation is the most important.", type: "Hearsay (ཟ་)" },
  { tib: "སྐད་སྦྱང་ཡག་ལ་བཟོད་པ་དང་བརྩོན་འགྲུས་དོ་སྣང་ཡོད་དགོས་རེད་ཟ།", eng: "They say one has to have patience, diligence, interest in order to learn a language.", type: "Hearsay (ཟ་)" },
  { tib: "དལ་འབྱོར་མི་ལུས་རིན་པོ་ཆེ་འཕྲོ་བརླག་མ་གཏང་ཟ།", eng: "I was told not to waste the precious human life.", type: "Hearsay (ཟ་)" },
  { tib: "ཨ་རག་སྤང་ཟ།", eng: "I was told to quit drinking alcohol.", type: "Hearsay (ཟ་)" },
  { tib: "གནས་ཚུལ་ཡག་ཏུ་འགྲོ་གི་ཡོད་རེད་ཟ།", eng: "They say the situation is becoming better.", type: "Hearsay (ཟ་)" },
  { tib: "ཚེས་པ་ཅོས་ལྔ་ལ་ཤ་ཟ་རྒྱུ་ཡོད་མ་རེད་ཟ།", eng: "I was told that one should not eat meat on full moon days.", type: "Hearsay (ཟ་)" },
  { tib: "བོད་ལ་ལས་ཀ་བྱེད་ཡག་ལ་བོད་སྐད་སྦྱང་དགོས་རེད་ཟ།", eng: "They say one has to learn Tibetan in order to work in Tibet.", type: "Hearsay (ཟ་)" },
  { tib: "ཤ་ཡིན་ཅིག་མིན་ཅིག་སྤང་དགོས་ཡག་ཡོད་མ་རེད་ཟ།", eng: "I was told that it is not compulsory to quit eating meat.", type: "Hearsay (ཟ་)" },
  { tib: "ང་ཁོང་ཚོ་དགོན་པ་རྙིང་པ་དེ་ལ་འཁྲིད་དགོས་རེད་ཟ།", eng: "They say I have to take them to the old monastery.", type: "Hearsay (ཟ་)" },
  { tib: "ཁོང་ཚོ་རྒྱ་གར་ལ་ད་དུང་ཉི་མ་དྲུག་སྡད་དགོས་རེད་ཟ།", eng: "I was told that they have to stay in India for six more days.", type: "Hearsay (ཟ་)" },
  { tib: "ཁོང་ཚོ་གཟའ་འཇུག་ལ་སློབ་གྲྭ་ལ་འགྲོ་དགོས་མ་རེད་ཟ།", eng: "They say that they don’t have to go to school on weekends.", type: "Hearsay (ཟ་)" },

  // Presumption (ཤག་ཡིན། / ཤག་རེད།)
  { tib: "ཁོང་སློབ་ཕྲུག་ཡིན་ཤག་བྱས་པ་ཡིན།", eng: "I presumed that he was a student.", type: "Presumption" },
  { tib: "ཁྱེད་རང་སློབ་ཕྲུག་ཡིན་ཤག་བྱེད་ཀྱི་ཡོད།", eng: "I presume that you are a student.", type: "Presumption" },
  { tib: "ཁོ་སློབ་ཕྲུག་མིན་ཤག་བྱས་པ་ཡིན།", eng: "I assumed that he was not a student.", type: "Presumption" },
  { tib: "ཁྱེད་རང་དགོན་པ་ལ་ཡོད་ཤག་བྱས་པ་ཡིན།", eng: "I assumed that you were at the monastery.", type: "Presumption" },
  { tib: "ཁྱེད་རང་དགོན་པ་ལ་ཡོད་ཤག་བྱེད་ཀྱི་ཡོད།", eng: "I assume that you are at the monastery.", type: "Presumption" },
  { tib: "ཁོང་ཚོ་ལས་ཁུངས་ལ་མེད་ཤག་བྱས་པ་ཡིན།", eng: "I presumed that they were not at the office.", type: "Presumption" },
  { tib: "ཁོང་ཚོ་སློབ་ཕྲུག་ཡིན་ཤག་བྱས་ནས་ཡོང་བཅུག་པ་ཡིན།", eng: "I let them come assuming that they were students.", type: "Presumption" },
  { tib: "ཁོང་ཚོ་ལས་ཀ་ཧུར་པོ་ཡོད་ཤག་བྱས་ནས་ལས་ཀ་དེ་སྤྲད་པ་ཡིན།", eng: "I gave them the job assuming they were hard working.", type: "Presumption" },
  { tib: "ཁྱེད་རང་ཕེབས་ཡག་ཡིན་ཤག་བྱས་ནས་མོ་ཊྲ་གཅིག་གླས་པ་ཡིན།", eng: "I hired a taxi assuming you would come.", type: "Presumption" },
  { tib: "ང་ཡོད་ཤག་མ་བྱེད་ཨ།", eng: "Don’t take me for granted to be there.", type: "Presumption" },
  { tib: "ཁོང་གིས་ཁྱེད་རང་རྒྱ་གར་ལ་ཕྱིན་པ་ཡིན་ཤག་བྱས་པ་རེད།", eng: "He assumed that you went to India.", type: "Presumption" },
  { tib: "ཁོང་ཚོས་ཁྱེད་རང་རྒྱ་གར་ལ་ཡོད་ཤག་བྱེད་ཀྱི་ཡོད་རེད།", eng: "They presume that you are in India.", type: "Presumption" },

  // Refutation (པ་མ་རེད།)
  { tib: "ཁང་པ་འདི་ངས་བཟོས་པ་རེད།", eng: "As a matter of fact, I built this house.", type: "Refutation/Assertion" },
  { tib: "ང་ཚོས་ཁོང་ཚོ་ལ་མོག་མོག་ཟོ་སྟངས་བསླབས་པ་རེད།", eng: "In fact, we taught them how to make momo.", type: "Refutation/Assertion" },
  { tib: "ཁྱེད་རང་བོད་སྐད་སྦྱང་ག་བཏང་བ་རེད།", eng: "In reality, you were sent to the school to learn Tibetan.", type: "Refutation/Assertion" },
  { tib: "ཁོང་ཚོས་མི་རྒན་ཁོག་དེ་ལ་རོགས་པ་བྱེད་ཡག་ཐབས་ཤེས་བྱས་པ་རེད།", eng: "As a matter of fact, they tried to help the old man.", type: "Refutation/Assertion" },
  { tib: "ཁང་པ་འདི་ངས་བཟོས་པ་མ་རེད།", eng: "In fact I didn’t make this house.", type: "Refutation/Assertion" },
  { tib: "ཁོང་ཚོ་བོད་སྐད་སྦྱང་ག་ཡོང་བ་མ་རེད།", eng: "In reality they didn’t come to learn Tibetan.", type: "Refutation/Assertion" },
  { tib: "ཁོས་ཕ་མའི་ཁ་ལ་ཉན་པ་མ་རེད།", eng: "In fact, he didn’t listen to his parents.", type: "Refutation/Assertion" },
  { tib: "གནས་ཚུལ་ཡག་ཏུ་ཕྱིན་པ་མ་རེད།", eng: "As a matter of fact, the situation didn’t get any better.", type: "Refutation/Assertion" },
  { tib: "ཁོང་ཚོས་ཁང་པ་གསར་པ་ཆེན་པོ་དེ་ཉོས་པ་མ་རེད།", eng: "In reality they didn’t buy the big new house.", type: "Refutation/Assertion" }
];

export const CH9_PRAGMATICS = [
  // You mean to say (ཨས་)
  { tib: "སྡུག་བསྔལ་གྱི་རྒྱུ་ཉོན་མོངས་རེད་ཨས།", eng: "Do you mean to say that negative emotions are the cause of suffering?", type: "You mean? (ཨས་)" },
  { tib: "བདེ་བའི་རྒྱུ་ཉོན་མོངས་མ་རེད་ཨས།", eng: "Do you mean to say that negative emotions are not the cause of happiness?", type: "You mean? (ཨས་)" },
  { tib: "བརྩོན་འགྲུས་ལས་བཟོད་པ་གལ་ཆེ་བ་ཡོད་རེད་ཨས།", eng: "Do you mean to say patience is more important than diligence?", type: "You mean? (ཨས་)" },
  { tib: "ཀུན་སློང་གལ་ཆེ་ཤོས་རེད་ཨས།", eng: "Do you mean to say that motivation is the most important?", type: "You mean? (ཨས་)" },
  { tib: "རྫུན་མ་བཤད་ཨས།", eng: "Are you telling me not to tell lies?", type: "You mean? (ཨས་)" },
  { tib: "དུས་ཚོད་ལ་ཤོག་ཨས།", eng: "Are you telling me to come on time?", type: "You mean? (ཨས་)" },
  { tib: "བོད་སྐད་སྦྱང་ག་ཡོང་བ་ཡིན་ཨས།", eng: "Do you mean to say that you came to learn Tibetan?", type: "You mean? (ཨས་)" },
  { tib: "སང་ཉིན་ཡོང་ཡག་ཡིན་ཨས།", eng: "Do you mean to say that you are going to come tomorrow?", type: "You mean? (ཨས་)" },

  // I am letting you know (ད / པ)
  { tib: "སྡུག་བསྔལ་གྱི་རྒྱུ་ཉོན་མོངས་རེད་ད།", eng: "I am letting you know that negative emotions are the cause of suffering.", type: "Letting you know (ད)" },
  { tib: "སྨན་པ་སྨན་ཁང་ལ་ཡོད་རེད་ད།", eng: "I am letting you know that the doctor is in the hospital.", type: "Letting you know (ད)" },
  { tib: "རྡོ་རྗེ་གླིང་ལ་དགུན་ཁ་གྲང་སའི་ཡོད་རེད་ད།", eng: "I am letting you know that it is quite cold in winter in Darjeeling.", type: "Letting you know (ད)" },
  { tib: "དུས་ཚོད་འཕྲོ་བརླག་གཏང་རྒྱུ་ཡོད་མ་རེད་ད།", eng: "I am letting you know that one shouldn’t waste time.", type: "Letting you know (ད)" },
  { tib: "སྐད་སྦྱང་ཡག་ལ་བཟོད་པ་དང་བརྩོན་འགྲུས་དོ་སྣང་ཡིན་ཅིག་མིན་ཅིག་དགོས་རེད་པ།", eng: "One has to have patience, diligence and interest in order to learn a language, right?", type: "Confirmation tag (པ)" },
  { tib: "ཁོང་ཚོས་ཁྱེད་རང་ལ་དེའི་སྐོར་ལ་ལབ་མ་སོང་ང།", eng: "They didn’t tell you about it, right?", type: "Confirmation tag (ང)" },
  { tib: "དབྱར་ཀ་ལས་དགུན་ཁ་གྲང་ང་འདུག་ག།", eng: "Winter is colder than summer, right?", type: "Confirmation tag (ག)" },

  // As far as I know (ངས་དྲན་པ་ལ་ / ངས་ཧ་གོ་ཡག་ལ་ / etc)
  { tib: "ངས་དྲན་པ་ལ་གྲོང་གསེབ་དེ་ལ་སློབ་གྲྭ་ཡོད་མ་རེད།", eng: "As far as I remember, there is no school in that village.", type: "As far as I know" },
  { tib: "ངས་ཧ་གོ་ཡག་ལ་དགོན་པ་དེ་ལ་གྲྭ་པ་གསུམ་བརྒྱ་མིན་ཙམ་ཡོད་རེད།", eng: "From what I know, there are a little less than three hundred monks at the monastery.", type: "As far as I know" },
  { tib: "ངས་མཐོང་པ་ལ་རྡོ་རྗེ་གླིང་ལ་དགུན་ཁ་གྲང་སའི་འདུག།", eng: "As far as I have seen, it is quite cold in winter in Darjeeling.", type: "As far as I know" },
  { tib: "ངས་གོ་ཡག་ལ་གཞུང་གི་སློབ་གྲ་ལས་སྒེར་གྱི་སློབ་གྲྭ་ཡག་ག་ཡོད་རེད།", eng: "From what I hear, private schools are better than public schools.", type: "As far as I know" },

  // It depends on (ལ་རག་ལས་ཀྱི་ཡོད་རེད།)
  { tib: "སོ་སོ་ལ་རག་ལས་ཀྱི་ཡོད་རེད།", eng: "It depends on oneself.", type: "Depends On/Whether" },
  { tib: "ཁྱེད་རང་གི་ཀུན་སློང་ལ་རག་ལས་ཀྱི་ཡོད་རེད།", eng: "It depends on your motivation.", type: "Depends On/Whether" },
  { tib: "རྒྱུ་རྐྱེན་མང་པོ་ལ་རག་ལས་ཀྱི་ཡོད་རེད།", eng: "It depends on many causes and conditions.", type: "Depends On/Whether" },
  { tib: "ཐུབ་མ་ཐུབ་རྒྱུ་རྐྱེན་མང་པོ་ལ་རག་ལས་ཀྱི་ཡོད་རེད།", eng: "Whether one will succeed or not depends on many causes and conditions.", type: "Depends On/Whether" },
  { tib: "ང་བལ་ཡུལ་ལ་འགྲོ་མ་འགྲོ་གནས་ཚུལ་ལ་རག་ལས་ཀྱི་ཡོད་རེད།", eng: "Whether I go to Nepal or not depends on the situation there.", type: "Depends On/Whether" },
  { tib: "ཐུབ་མ་ཐུབ་དོ་སྣང་ཡོད་མེད་ལ་རག་ལས་ཀྱི་ཡོད་རེད།", eng: "Whether you succeed depends on whether you have interest in it or not.", type: "Depends On/Whether" }
];

export const CH9_IDIOMS = [
  // To do one's best / Leave no stone unturned
  { tib: "གང་ཐུབ་ཐུབ་བྱས་པ་ཡིན།", eng: "I did my best.", type: "Do one's best" },
  { tib: "གང་ཡོང་ཅི་ཡོང་བྱེད་དགོས་རེད།", eng: "You have to do to the best of your ability.", type: "Do one's best" },
  { tib: "གང་ཐུབ་ཅི་ཐུབ་གནང་རོགས་གནང།", eng: "Please do your best.", type: "Do one's best" },
  { tib: "གང་ཐུབ་ཐུབ་བྱེད་ཡག་ཡིན།", eng: "I am going to do my best.", type: "Do one's best" },
  { tib: "ཁོང་ཚོས་ཁོང་ཚོ་ལ་གང་ཐུབ་ཅི་ཐུབ་རོགས་པ་གནང་ཤག།", eng: "They have done their best to help them.", type: "Do one's best" },
  { tib: "ཡོད་གུ་རྩལ་སྦྲུག་བྱས་པ་ཡིན།", eng: "I left no stone unturned.", type: "Leave no stone unturned" },
  { tib: "ཁོང་ཚོས་རྒྱལ་ཁབ་ཡར་རྒྱས་གཏང་ཡག་ལ་ཐབས་ཤེས་ཡོད་གུ་རྩལ་སྦྲུག་བྱས་ཤག", eng: "They have left no stone unturned to develop the country.", type: "Leave no stone unturned" },

  // Feel free to / Go right ahead
  { tib: "བཀའ་འདྲི་གནང་རྐྱང་གནང་རོགས་གནང།", eng: "Please feel free to ask questions.", type: "Feel free to" },
  { tib: "བཀའ་འདྲི་ཞུ་རྐྱང་གནས་དགོས་རེད།", eng: "You should feel free to ask questions.", type: "Feel free to" },
  { tib: "ངའི་ཆང་འཐུང་འདོད་ཡོད་ན་འཐུང་རྐྱང་གནང་ན་འགྲིགས་ཀྱི་རེད།", eng: "You can feel free to drink my beer if you want to.", type: "Feel free to" },
  { tib: "ངའི་གཙོ་འཛིན་གྱིས་ལས་འཆར་དེ་བྱེད་རྐྱང་བྱེད་གསུངས་བྱུང།", eng: "My boss told me to go ahead with the project.", type: "Feel free to" },
  { tib: "ཁོང་ཚོ་ངའི་ཁང་མིག་ལ་ཡོང་རྐྱང་བྱེད་ཀྱི་ཡོད་རེད།", eng: "They come to my room at will.", type: "Feel free to" },
  { tib: "ཁོང་གིས་གསང་བ་བཤད་རྐྱང་བྱེད་ཀྱི་ཡོད་རེད།", eng: "He tells his secret without giving second thought.", type: "Feel free to" },

  // Why on earth / What a nonsense (ནས་ག་རེ་བྱས་ག། / ཆོ་ལ།)
  { tib: "ཨམ་ཆི་ལ་གོ་བསྡུར་བྱས་པའི་སྔོན་ལ་སྨན་བཟས་ནས་ག་རེ་བྱས་ག།", eng: "Why on earth did you take medicine before consulting a doctor?", type: "Why on earth" },
  { tib: "ང་ལ་གོ་སྡུར་མ་བྱས་སྔོན་ལ་ཐག་བཅད་ནས་ག་རེ་བྱས་ག།", eng: "Why on earth did you decide before consulting me?", type: "Why on earth" },
  { tib: "ང་ལ་སྔོན་ལ་མ་ལབ་ནས་ག་རེ་བྱས་ག།", eng: "Why on earth didn’t you tell me before?", type: "Why on earth" },
  { tib: "བཀའ་ཁྲོལ་མ་ཞུས་ནས་ཡོང་ནས་ག་རེ་བྱས་ག།", eng: "Why on earth did you come without asking permission?", type: "Why on earth" },
  { tib: "དངུལ་མེད་པ་ལ་ཚོང་ག་པར་རྒྱབ་ཐུབ་ཀྱི་རེད།", eng: "There is no way one can do business without money.", type: "Out of the question" },
  { tib: "ཁོ་ཨ་རག་ག་པར་འཐུང་གི་རེད།", eng: "Him drinking alcohol is out of the question.", type: "Out of the question" },
  { tib: "ཚང་མ་ཚར་ཚར་ནས་འགྱོད་པ་སྐྱེས་ནས་ཆོ་ཡོད་མ་རེད།", eng: "There is no point in regretting after everything is over.", type: "No point in" },
  { tib: "ཆོ་ལ།", eng: "What a nonsense.", type: "What a nonsense" },

  // It is worth doing (རིན་ཆོག་པ་ཡོད་རེད།)
  { tib: "དགོན་པ་དེ་ལ་འགྲོ་འོས་པ་ཡོད་རེད།", eng: "It is worth going to the monastery.", type: "Worth doing" },
  { tib: "དེབ་དེ་ཉོ་འོས་པ་ཡོད་མ་རེད།", eng: "It is not worth buying the book.", type: "Worth doing" },
  { tib: "གྲོང་གསེབ་དེ་ལ་འགྲོ་འོས་པ་ཡོད་རེད་པས།", eng: "Is it worth going to the village?", type: "Worth doing" },

  // Without doing... (མ་…ནས་)
  { tib: "བཀའ་ཁྲོལ་མེད་པ་ལ་ཡོང་ཆོག་གི་ཡོད་མ་རེད།", eng: "Without permission one is not allowed to come.", type: "Without doing" },
  { tib: "དངུལ་མེད་པ་ལ་ཚོང་རྒྱབ་ཐུབ་ཀྱི་མ་རེད།", eng: "One cannot do business without money.", type: "Without doing" },
  { tib: "བཟོད་པ་མེད་པ་ལ་སྐད་སྦྱང་ཡག་དཀའ་ལས་ཁག་པོ་ཡོད་རེད།", eng: "It is difficult to learn a language without patience.", type: "Without doing" },
  { tib: "ཆུ་མེད་པ་ལ་གསོན་པོ་སྡད་ཐུབ་ཀྱི་མ་རེད།", eng: "One can’t survive without water.", type: "Without doing" },
  { tib: "ཁོང་གང་ཡང་མ་གསུངས་ནས་ཕེབས་སོང།", eng: "He went without saying anything.", type: "Without doing" },
  { tib: "བཀའ་ཁྲོལ་མ་ཞུས་ནས་ཕེབས་རྒྱུ་ཡོད་མ་རེད།", eng: "One shouldn’t go there without asking permission.", type: "Without doing" },
  { tib: "ཁོང་ཚོ་ལ་གོ་བསྡུར་མ་བྱས་ནས་ཐག་གཅོད་བྱེད་འདོད་མེད།", eng: "I don’t want to decide without consulting them.", type: "Without doing" },

  // Needless to say / Entails (པ་ཁྱབ་ཀྱི་ཡོད་རེད།)
  { tib: "དུ་བ་ཡོད་ན་མེ་ཡོད་པ་ཁྱབ་ཀྱི་ཡོད་རེད།", eng: "If there is smoke, it entails that there is fire.", type: "Entails" },
  { tib: "དཀོན་པོ་ཡོད་ན་གོང་ཆེན་པོ་ཡོད་པ་ཁྱབ་ཀྱི་ཡོད་རེད།", eng: "If it is scarce, it is needless to say that it is expensive.", type: "Entails" },
  { tib: "དུ་བ་མེད་ན་མེ་མེད་པ་ཁྱབ་ཀྱི་ཡོད་མ་རེད།", eng: "If there is no smoke, it doesn’t necessarily mean there isn’t fire.", type: "Merely because" },
  { tib: "ཕྱུག་པོ་ཡིན་ན་གཏོང་ཕོད་ཆེན་པོ་ཡོད་པ་ཁྱབ་ཀྱི་ཡོད་མ་རེད།", eng: "If he is rich, it doesn’t necessarily mean that he is generous.", type: "Merely because" },
  { tib: "ཁོང་ཨམ་ཆི་ཡིན་པ་ཙམ་གྱིས་སེམས་བཟང་པོ་ཡོད་པ་ཁྱབ་ཀྱི་ཡོད་མ་རེད།", eng: "It doesn’t necessarily mean he is kindhearted, simply because he is a doctor.", type: "Merely because" },
  { tib: "དུ་བ་མེད་པ་ཙམ་གྱིས་མེ་མེད་པ་ཁྱབ་ཀྱི་ཡོད་མ་རེད།", eng: "It doesn’t necessarily mean there is no fire, simply because there is no smoke.", type: "Merely because" }
];

export const CH9_QUOTATIONS = [
  { tib: "བཀྲ་ཤིས་ཡོང་གི་ཡིན།ཟ།", eng: "Tashi says \"I will come.\"", type: "Direct Speech (No agentive)" },
  { tib: "བཀྲ་ཤིས་རྒྱ་གར་ལ་ཡོད།ཟ།", eng: "Tashi says \"I am in India.\"", type: "Direct Speech (No agentive)" },
  { tib: "བཀྲ་ཤིས་རྒྱ་གར་ལ་འགྲོ་ཡག་ཡིན།ཟ།", eng: "Tashi says \"I am going to go to India.\"", type: "Direct Speech (No agentive)" },
  { tib: "བཀྲ་ཤིས་ཀྱིས་ཁོང་བལ་ཡུལ་ལ་ཡོད་མ་རེད།ཟ་གས།", eng: "Did Tashi say that he (someone else) is not in Nepal?", type: "Direct Speech (With agentive)" },
  { tib: "བཀྲ་ཤིས་ཀྱིས་བོད་སྐད་སྦྱང་ཡག་དཀའ་ལས་ཁག་པོ་ཡོད་མ་རེད་ཟ།", eng: "Tashi says it is not difficult to learn Tibetan.", type: "Direct Speech (With agentive)" }
];
