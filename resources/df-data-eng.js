const randomness = {
    random: {
        text: 'Random',
        description: 'Make a character trully randomlly with no regard about its viability in game.'
    },
    coherent: {
        text: 'Coherent',
        description: 'Make a character randomlly, will trying to make it viable in game.'
    },
    question: {
        text: 'Questions',
        description: 'Make a character based on your answers.'
    },
    custom: {
        text: 'Custom',
        description: 'Edit your character as you like.'
    }
};

const genders = {
    female: { text: 'Female' },
    male: { text: 'Male' }
};

const races = [
    {
        key: 'argonian',
        text: 'Argonian',
        description: 'Argonians hail from the province of Black Marsh. You are part of a highly-evolved race of reptiles, known for their intelligence, agility, and speed. Because of their reptilian nature, Argonians do not tire easily when swimming. While many Argonians have successfully mastered the arts of thievery and spellcasting, there are some regarded well as warriors.',
        advantages: [
            'Reduced Fatigue loss while swimming',
            'Can hold breath longer than other races'
        ]
    },
    {
        key: 'breton',
        text: 'Breton',
        description: 'Bretons hail from the province of High Rock. You are part of a tall, fair-skinned people, highly intelligent and willful. Magic seems to infuse the very being of the Breton people. As a race, they are more resistant to the effects of hostile magic than any other group, and thus are excellent in all arcane arts.',
        advantages: ['+30% Resistance to Magic']
    },
    {
        key: 'elfDark',
        text: 'Dark Elf',
        description: 'Dark Elves hail from the province of Morrowind. You are part of a tall, dark-skinned people, known to be extremely strong, intelligent, and quick. They are extremely versatile in all manners of skills and well-known as warriors and mages.',
        advantages: ['Bonus Damage and Chance To Hit = Level / 4']
    },
    {
        key: 'elfHigh',
        text: 'High Elf',
        description: 'High Elves hail from the province of Sumurset Isle. You are part of a tall, golden-skinned people, extremely intelligent, agile, and willful. The magical nature of Sumurset Isle has made the High Elves natural spellcasters who are immune to paralysing poisons and spells.',
        advantages: ['Immunity to paralysis']
    },
    {
        key: 'khajiit',
        text: 'Khajiit',
        description: 'Khajiit hail from the province of Elsweyr. You are part of a tawny-skinned people, extremely hardy, intelligent, and agile. Many Khajiit have taken to painting their faces to more resemble their legendary feline cousins, the predatory cats that hunt the great desert. Khajiit are on the whole excellent climbers, and adept in all the arts of the thief.',
        advantages: ['+30 to Climbing checks']
    },
    {
        key: 'nord',
        text: 'Nord',
        description: 'Nords hail from the province of Skyrim. You are part of a tall and fair-skinned people, strong, willful, and hardy. Owing to the climate of Skyrim, Nords are resistant to the coldest of temperatures, and take little damage even from ice-based magical attacks. Nords are historically well-suited to all the arts of the warrior.',
        advantages: ['+30% Resistance to Frost']
    },
    {
        key: 'redguard',
        text: 'Redguard',
        description: 'Redguards hail from the province of Hammerfell. You are part of a dark-skinned people, extremely hardy and quick. Legend has it that the Redguard are innately more proficient with weaponry than any other race. In general, Redguards make excellent warriors.',
        advantages: ['Bonus Damage and Chance To Hit = Level / 3']
    },
    {
        key: 'elfWood',
        text: 'Wood Elf',
        description: 'Wood Elves hail from the province of Valenwood. You are part of a tall, fair-skinned people known to be extremely agile and quick. Wood Elves have a natural affinity for the bow and arrow, and all members of their race have some ability with that weapon. There are well-known Wood Elves in most every class, but the arts of thievery are their particular forte.',
        advantages: ['Bonus Damage and Chance To Hit for Archery = Level / 3']
    }
];

const nameRules = {
    argonian: {
        female: {
            prefix: [
                'Aph',
                'Art',
                'Ath',
                'Dem',
                'Hec',
                'Her',
                'Jud',
                'Maced',
                'Nik',
                'Per',
                'Tab',
                'Ter',
                'Tyr'
            ],
            suffix: [
                'atea',
                'emis',
                'ena',
                'etera',
                'ia',
                'iana',
                'icla',
                'ina',
                'ithea',
                'omeda',
                'onia',
                'osyna',
                'rodite'
            ]
        },
        male: {
            prefix: [
                'Alex',
                'Antigon',
                'August',
                'Calig',
                'Claud',
                'Demetr',
                'Dioclet',
                'German',
                'Her',
                'Jul',
                'Ner',
                'Pil',
                'Tib'
            ],
            suffix: [
                'acles',
                'andros',
                'ate',
                'erius',
                'ian',
                'iar',
                'icus',
                'ides',
                'ios',
                'ius',
                'os',
                'ula',
                'us'
            ]
        },
        familly: {
            prefix: [
                'Andro',
                'Augus',
                'Ca',
                'Cae',
                'Cali',
                'Gal',
                'Mag',
                'Me',
                'Ni',
                'Per',
                'Theo',
                'Tiber',
                'Xer'
            ],
            suffix: [
                'cles',
                'des',
                'dorus',
                'gulus',
                'lus',
                'mean',
                'mus',
                'nes',
                'sar',
                'seus',
                'sion',
                'ssius',
                'tus'
            ]
        }
    },
    breton: {
        female: {
            prefix: [
                'Barb',
                'Bellad',
                'Carol',
                'Chryst',
                'El',
                'Elyz',
                'Evel',
                'Gwyn',
                'Lys',
                'Morg',
                'Vann',
                'Vyct',
                'Ys'
            ],
            suffix: [
                'abyth',
                'anna',
                'ara',
                'ausa',
                'ayne',
                'olda',
                'ona',
                'orya',
                'yn',
                'yna',
                'yrrya',
                'yssa',
                'yvyra'
            ]
        },
        male: {
            prefix: [
                'Agr',
                'Alab',
                'And',
                'Bed',
                'Dun',
                'Edw',
                'Gond',
                'Mord',
                'Per',
                'Rod',
                'Theod',
                'Trist',
                'Uth'
            ],
            suffix: [
                'ane',
                'ard',
                'astyr',
                'istair',
                'istyr',
                'ore',
                'oryan',
                'yctor',
                'yn',
                'ynak',
                'yrick',
                'yval',
                'ywyr'
            ]
        },
        familly: {
            prefix: [
                'Ash',
                'Bucking',
                'Copper',
                'Gaer',
                'Green',
                'Hawk',
                'Hearth',
                'King',
                'Master',
                'Moor',
                'Wick',
                'Wood',
                'Yeom'
            ],
            suffix: [
                'croft',
                'field',
                'ford',
                'ham',
                'hart',
                'house',
                'ing',
                'sley',
                'sly',
                'smith',
                'ston',
                'ton',
                'wing'
            ]
        }
    },
    elfDark: {
        female: {
            prefix: [
                'Cru',
                'Dem',
                'Golg',
                'Hek',
                'Lil',
                'Lol',
                'Neph',
                'Shel',
                'Sher',
                'Tab',
                'Vayn',
                'Verm'
            ],
            suffix: [
                'atah',
                'elle',
                'ethys',
                'iah',
                'inah',
                'ith',
                'ithah',
                'ivah',
                'obah',
                'onah',
                'othah',
                'th'
            ]
        },
        male: {
            prefix: [
                'Azar',
                'Cas',
                'Ereb',
                'Hel',
                'Nis',
                'Shal',
                'Shur',
                'Tur',
                'Ul',
                'Vanik',
                'Zan',
                'Zir'
            ],
            suffix: [
                'ain',
                'ath',
                'far',
                'ien',
                'ik',
                'il',
                'imal',
                'imar',
                'kan',
                'on',
                'par',
                'seth'
            ]
        },
        familly: {
            prefix: [
                'Adl',
                'Aval',
                'Enak',
                'Grul',
                'Helb',
                'Moab',
                'R\'',
                'Rall',
                'R\'zam',
                'Sail',
                'S\'th',
                'T\'riz'
            ],
            suffix: [
                'ain',
                'am',
                'an',
                'aron',
                'athil',
                'bruk',
                'en',
                'enar',
                'is',
                'on',
                'one',
                'ul'
            ]
        }
    },
    elfHigh: {
        female: {
            prefix: [
                'Andra',
                'Ca',
                'Cymba',
                'Kori',
                'Lili',
                'Lora',
                'Mor',
                'Psy',
                'Saur',
                'Sha',
                'Valli',
                'Zeno'
            ],
            suffix: [
                'ginia',
                'lia',
                'lina',
                'mia',
                'na',
                'sara',
                'sephona',
                'sha',
                'tha'
            ]
        },
        male: {
            prefix: [
                'Core',
                'Corri',
                'Cyre',
                'Gan',
                'Kala',
                'Kelkemme',
                'Lilland',
                'Lovi',
                'Mith',
                'Saru',
                'Sau',
                'Soli'
            ],
            suffix: [
                'dalf',
                'las',
                'lian',
                'llon',
                'man',
                'mon',
                'nar',
                'ra',
                'riil',
                'ril',
                'ron',
                'tar'
            ]
        },
        familly: {
            prefix: [
                'Ad',
                'Caem',
                'Elsin',
                'Gae',
                'Gray',
                'High',
                'Jor',
                'Lareth',
                'Silin',
                'Spell',
                'Storm',
                'Throm'
            ],
            suffix: [
                'aire',
                'al',
                'binder',
                'ian',
                'ire',
                'ius',
                'lock',
                'or',
                'orin',
                'thar',
                'us',
                'watch'
            ]
        }
    },
    khajiit: {
        female: {
            prefix: [
                'A',
                'Azi',
                'Ela',
                'Fa',
                'Kha',
                'Ki',
                'La',
                'Mo',
                'Na',
                'Ra',
                'Ri',
                'Sa',
                'Sha',
                'So',
                'Ta',
                'Za'
            ],
            suffix: [
                'ahin',
                'ahni',
                'feliz',
                'hana',
                'heh',
                'hrazad',
                'jjan',
                'khtar',
                'nita',
                'raya',
                'riba',
                'shima',
                'srin',
                'tima',
                'zita'
            ]
        },
        male: {
            prefix: [
                'Ab\'',
                'Ak\'',
                'Akh\'',
                'Am',
                'Fa\'',
                'Hus',
                'Mo',
                'Moham',
                'Moj',
                'Na',
                'Om',
                'Sha',
                'Sin',
                'Za\'',
                'Zan\''
            ],
            suffix: [
                'ar',
                'bar',
                'bil',
                'der',
                'dul',
                'gh',
                'ir',
                'kir',
                'med',
                'nir',
                'noud',
                'sien',
                'soud',
                'taba',
                'tabe',
                'urabi'
            ]
        },
        familly: {
            prefix: [
                'A',
                'Bara',
                'Hammu',
                'Ja',
                'Kha',
                'Ki',
                'Mah',
                'Rai',
                'Ro',
                'Sa',
                'Si',
                'Sol',
                'Tavak',
                'Za'
            ],
            suffix: [
                'biri',
                'bus',
                'davi',
                'han',
                'hir',
                'kar',
                'manni',
                'mnin',
                'nai',
                'oni',
                'rabi',
                'spoor',
                'stae',
                'tani',
                'vandi'
            ]
        }
    },
    nord: {
        female: {
            prefix: [
                'An',
                'Bet',
                'Dor',
                'Ell',
                'Han',
                'Hell',
                'Ing',
                'Jyt',
                'Kirst',
                'Met',
                'Morg',
                'Sill',
                'Ull'
            ],
            suffix: [
                'a',
                'e',
                'en',
                'ia',
                'ina',
                'ne',
                'te'
            ]
        },
        male: {
            prefix: [
                'Al',
                'Asg',
                'Bj',
                'Er',
                'Fenr',
                'Har',
                'Ingm',
                'Jurg',
                'Kj',
                'Moj',
                'Sor',
                'Torb',
                'Ulr'
            ],
            suffix: [
                'ald',
                'an',
                'ar',
                'arik',
                'arke',
                'arne',
                'eld',
                'en',
                'ens',
                'er',
                'ik',
                'is',
                'orn'
            ]
        },
        familly: {
            prefix: [
                'Al',
                'Asg',
                'Bj',
                'Er',
                'Fenr',
                'Har',
                'Ingm',
                'Jurg',
                'Kj',
                'Moj',
                'Sor',
                'Torb',
                'Ulr'
            ],
            suffix: [
                'aldsen',
                'ansen',
                'arsen',
                'ariksen',
                'arkesen',
                'arnesen',
                'eldsen',
                'ensen',
                'enssen',
                'ersen',
                'iksen',
                'issen',
                'ornsen'
            ]
        }
    },
    redguard: {
        female: {
            prefix: [
                'B',
                'Ba',
                'Bl',
                'Br',
                'C',
                'Ca',
                'Ch',
                'Cr',
                'D',
                'h',
                'F',
                'Fh',
                'Fl',
                'Fr',
                'G',
                'Gh',
                'Gl',
                'Gr',
                'K',
                'Kh',
                'Kl',
                'Kr',
                'L',
                'Lh',
                'M',
                'Ma',
                'Mh',
                'N',
                'Nh',
                'R',
                'Rh',
                'Rl',
                'S',
                'Sa',
                'Sh',
                'Shr',
                'Sl',
                'St',
                'T',
                'Th',
                'Tl',
                'V',
                'Vl'
            ],
            suffix: [
                'am',
                'an',
                'ar',
                'e',
                'em',
                'en',
                'er',
                'im',
                'in',
                'ir',
                'ke',
                '\'kern',
                'om',
                'on',
                'rn',
                't',
                'ta',
                'te',
                'ten',
                'um',
                'un',
                'ur'
            ]
        },
        male: {
            prefix: [
                'B',
                'Ba',
                'Bl',
                'Br',
                'C',
                'Ca',
                'Ch',
                'Cr',
                'D',
                'h',
                'F',
                'Fh',
                'Fl',
                'Fr',
                'G',
                'Gh',
                'Gl',
                'Gr',
                'K',
                'Kh',
                'Kl',
                'Kr',
                'L',
                'Lh',
                'M',
                'Ma',
                'Mh',
                'N',
                'Nh',
                'R',
                'Rh',
                'Rl',
                'S',
                'Sa',
                'Sh',
                'Shr',
                'Sl',
                'St',
                'T',
                'Th',
                'Tl',
                'V',
                'Vl'
            ],
            suffix: [
                'am',
                'an',
                'ar',
                'e',
                'em',
                'en',
                'er',
                'im',
                'in',
                'ir',
                'ke',
                '\'kern',
                'om',
                'on',
                'rn',
                't',
                'ta',
                'te',
                'ten',
                'um',
                'un',
                'ur'
            ]
        },
        vowel: [
            'a',
            'e',
            'i',
            'o',
            'u'
        ],
        consonant: [
            'b',
            'c',
            'd',
            'h',
            'j',
            'k',
            'l',
            'm',
            'n',
            'p',
            'r',
            's',
            't',
            'v',
            'z'
        ],
        femaleFinalSuffix: [
            '-e',
            'i',
            '-i',
            'ka',
            'ki',
            '-si',
            'ti'
        ]
    },
    elfWood: {
        female: {
            prefix: [
                'Cas',
                'Cyl',
                'Des',
                'Lare',
                'Lego',
                'Lilis',
                'Min',
                'Phy',
                'Rilli',
                'Si',
                'U'
            ],
            suffix: [
                'dra',
                'fina',
                'gina',
                'landra',
                'lerva',
                'na',
                'nia',
                'sa',
                'sandra',
                'thia'
            ]
        },
        male: {
            prefix: [
                'An',
                'Ara',
                'Ar',
                'Co',
                'Elis',
                'Karo',
                'Lego',
                'Li',
                'Pali',
                'Ria',
                'Sil',
                'Ta'
            ],
            suffix: [
                'cher',
                'dell',
                'driel',
                'gan',
                'gorn',
                'las',
                'man',
                'nis',
                'nor',
                'rim',
                'tan',
                'van'
            ]
        },
        familly: {
            prefix: [
                'Blue',
                'Fern',
                'Forest',
                'Ivy',
                'Moss',
                'Night',
                'Oak',
                'Pine',
                'River',
                'Shady',
                'Spring',
                'Willow'
            ],
            suffix: [
                'brook',
                'dale',
                'hollow',
                'lake',
                'pool',
                'run',
                'shade',
                'sky',
                'thorn',
                'vale',
                'wind',
                'wood'
            ]
        }
    }
};

const attributes = {
    maxAttributes: 75,
    minAttributes: 10,
    strength: {
        abbreviation: 'STR',
        enumeration: [
            'pathetic',
            'frail',
            'weak',
            'below average',
            'about average',
            'fairly strong',
            'athletic',
            'very strong',
            'powerful',
            'superhuman'
        ],
        description: 'Strength governs encumbrance, weapon damage and the ease of increasing strength-related skills.'
    },
    intelligence: {
        abbreviation: 'INT',
        enumeration: [
            'vegetable-like',
            'idiotic',
            'half-witted',
            'dim',
            'about average',
            'cunning',
            'fairly clever',
            'very intelligent',
            'brilliant',
            'genius'
        ],
        description: 'Intelligence governs total magic potential and the ease of increasing intelligence-related skills.'
    },
    willpower: {
        abbreviation: 'WIL',
        enumeration: [
            'inane',
            'submissive',
            'passive',
            'distracted',
            'unassertive',
            'stable',
            'confident',
            'strong-willed',
            'very focused',
            'enlightened '
        ],
        description: 'Willpower governs resistance to spell effects and the ease of increasing willpower-related skills.'
    },
    agility: {
        abbreviation: 'AGI',
        enumeration: [
            'oafish',
            'bumbling',
            'clumsy',
            'awkward',
            'about average',
            'spry',
            'nimble',
            'dexterous',
            'very agile',
            'acrobatic '
        ],
        description: 'Agility governs ability to hit a target, to avoid getting hit, and the ease of increasing agility-related skills.'
    },
    endurance: {
        abbreviation: 'END',
        enumeration: [
            'sickly',
            'pitiable',
            'unsteady',
            'erratic',
            'about average',
            'above average',
            'very healthy',
            'hardy',
            'titanic',
            'immortal '
        ],
        description: 'Endurance governs hit points, healing rate, resistance to poisons and diseases, and fatigue.'
    },
    personality: {
        abbreviation: 'PER',
        enumeration: [
            'abhorrent',
            'unpopular',
            'anonymous',
            'unassuming',
            'unremarkable',
            'interesting',
            'charming',
            'arresting',
            'authoritative',
            'charismatic '
        ],
        description: 'Personality governs the ease of increasing personality-related skills.'
    },
    speed: {
        abbreviation: 'SPD',
        enumeration: [
            'inactive',
            'sluggish',
            'very slow',
            'slow',
            'about average',
            'above average',
            'fast',
            'fleet-footed',
            'lightning-fast',
            'meteoric '
        ],
        description: 'Speed governs movement rate, missile reloading time, and all speed-related skills.'
    },
    luck: {
        abbreviation: 'LUC',
        enumeration: [
            'cursed',
            'hopeless',
            'ill-favored',
            'unfortunate',
            'about average',
            'fairly lucky',
            'lucky',
            'fortunate',
            'very auspicious',
            'divinely favored '
        ],
        description: 'Luck is a powerful modifier to any action you take. There are no skills in which luck is the primary attribute, but your odds of succeeding in any skill trial is modified by your luck'
    }
};

const skills = [
    {
        name: 'Archery',
        attribute: 'Agility',
        description: 'Archery is the skill governing one\'s ability to hit targets and cause damage using a bow and arrow.',
        tags: ['weapon']
    },
    {
        name: 'Backstabbing',
        attribute: 'Agility',
        description: 'Backstabbing is a skill checked whenever a target is struck from behind. It is easier for a person proficient at this skill to hit a target from behind. It is also probable that more damage will be dealt with a well-delivered backstab.',
        tags: ['furtivity']
    },
    {
        name: 'Critical Strike',
        attribute: 'Agility',
        description: 'Critical Striking is a skill checked whenever one has successfully struck a target. A target that receives a successful Critical Strike suffers withering, often fatal, additional damage.',
        tags: ['combat']
    },
    {
        name: 'Hand-to-Hand',
        attribute: 'Agility',
        description: 'Hand-to-Hand is a skill checked whenever one attempts to strike a target with a punch or a kick.',
        tags: ['combat', 'movement']
    },
    {
        name: 'Long Blade',
        attribute: 'Agility',
        description: 'Long Blade is a skill checked whenever one attempts to strike a target with a long-bladed, slashing weapon such as a claymore or a katana.',
        tags: ['weapon']
    },
    {
        name: 'Pickpocket',
        attribute: 'Agility',
        description: 'Pickpocketing is a skill automatically checked whenever one attempts to steal an item off a person or shelf without being detected.',
        tags: ['furtivity']
    },
    {
        name: 'Short Blade',
        attribute: 'Agility',
        description: 'Short Blade is a skill checked whenever one attempts to strike a target with a short-bladed stabbing weapon such as daggers and tantos, to determine the aim and damage possible in a strike.',
        tags: ['weapon']
    },
    {
        name: 'Stealth',
        attribute: 'Agility',
        description: 'Stealth is a skill which allows one to avoid the attention of a hostile creature. It is automatically checked at every encounter.',
        tags: ['furtivity']
    },
    {
        name: 'Swimming',
        attribute: 'Endurance',
        description: 'Swimming is a skill automatically checked whenever one encounters water to see how fast one can swim, how fatigued one gets while swimming, and how long one can stay underwater.',
        tags: ['movement']
    },
    {
        name: 'Centaurian',
        attribute: 'Intelligence',
        description: 'Centaurian is a language skill checked whenever one tries to talk with a Centaur.',
        tags: ['language']
    },
    {
        name: 'Daedric',
        attribute: 'Intelligence',
        description: 'Daedric is a language skill checked whenever one attempts to speak with a daedra, such as a Fire Daedra or a Daedra Lord.',
        tags: ['language']
    },
    {
        name: 'Dragonish',
        attribute: 'Intelligence',
        description: 'Dragon is a language skill checked whenever one attempts to speak with a dragon.',
        tags: ['language']
    },
    {
        name: 'Giantish',
        attribute: 'Intelligence',
        description: 'Giantish is a language skill checked whenever one attempts to speak with a Giant.',
        tags: ['language']
    },
    {
        name: 'Harpy',
        attribute: 'Intelligence',
        description: 'Harpy is a language skill checked whenever one attempts to speak with a Harpy.',
        tags: ['language']
    },
    {
        name: 'Impish',
        attribute: 'Intelligence',
        description: 'Impish is a language skill checked whenever one attempts to speak with an Imp.',
        tags: ['language']
    },
    {
        name: 'Lockpicking',
        attribute: 'Intelligence',
        description: 'Lockpicking is a skill automatically checked whenever one attempts to pick the lock on a door or a chest.',
        tags: ['movement']
    },
    {
        name: 'Medical',
        attribute: 'Intelligence',
        description: 'Medical skill is automatically checked whenever one rests, allowing one to diagnose minor injuries and illnesses.',
        tags: ['recovery']
    },
    {
        name: 'Nymph',
        attribute: 'Intelligence',
        description: 'Nymph is a language skill checked whenever one attempts to speak with a Nymph.',
        tags: ['language']
    },
    {
        name: 'Orcish',
        attribute: 'Intelligence',
        description: 'Orcish is a language skill checked whenever one attempts to speak with an Orc.',
        tags: ['language']
    },
    {
        name: 'Spriggan',
        attribute: 'Intelligence',
        description: 'Spriggan is a language skill checked whenever one attempts to speak with a Spriggan.',
        tags: ['language']
    },
    {
        name: 'Etiquette',
        attribute: 'Personality',
        description: 'Etiquette is a skill checked whenever one attempts to be polite, deferential, and charming in conversation.',
        tags: ['charisma']
    },
    {
        name: 'Mercantile',
        attribute: 'Personality',
        description: 'Mercantile is a skill checked whenever one enters into negotiations with a merchant, attempting to buy or sell an item at the best possible price.',
        tags: ['charisma']
    },
    {
        name: 'Streetwise',
        attribute: 'Personality',
        description: 'Streetwise is a skill checked whenever one attempts to be blunt, colloquial, or otherwise informal in conversation.',
        tags: ['charisma']
    },
    {
        name: 'Dodging',
        attribute: 'Speed',
        description: 'Dodging is a skill checked before one is struck by an enemy\'s weapon or spell.',
        tags: ['combat']
    },
    {
        name: 'Running',
        attribute: 'Speed',
        description: 'Running is a skill automatically checked whenever one begins to run, to check the possible speed.',
        tags: ['movement']
    },
    {
        name: 'Axe',
        attribute: 'Strength',
        description: 'Axe is the skill automatically checked whenever one uses a battleaxe or a waraxe on a target.',
        tags: ['weapon']
    },
    {
        name: 'Blunt Weapon',
        attribute: 'Strength',
        description: 'Blunt Weapon is a skill checked whenever one strikes a target with a heavy, blunt weapon such as a mace or a staff. Proficient Blunt Weapon specialists have a greater chance of hitting and cause more damage with each blow.',
        tags: ['weapon']
    },
    {
        name: 'Climbing',
        attribute: 'Strength',
        description: 'Climbing is a skill checked whenever one attempts to scale a wall or a steep incline. It is continually checked until one is on level ground again.',
        tags: ['movement']
    },
    {
        name: 'Jumping',
        attribute: 'Strength',
        description: 'Jumping is a skill checked to determine the height and distance one is capable of leaping.',
        tags: ['movement']
    },
    {
        name: 'Alteration',
        attribute: 'Willpower',
        description: 'Alteration refers to the School of Alteration, one of the six avenues of magical study. This school is concerned with magic\'s ability to change the very structure and composition of objects. Dimunition and Shield are two classic Alteration spells.',
        tags: ['magic']
    },
    {
        name: 'Destruction',
        attribute: 'Willpower',
        description: 'Destruction refers to the School of Destruction, one of the six formal avenues of magical study. Destruction spells are those with a primary purpose of causing damage to a target, such as Fireball or Acidic Field.',
        tags: ['magic', 'combat']
    },
    {
        name: 'Illusion',
        attribute: 'Willpower',
        description: 'Illusion refers to the School of Illusion, one of the six avenues of magical study. Illusion spells are capable of camouflaging, illuminating, or obscuring objects, as the spells Invisibility and Light demonstrate.',
        tags: ['magic', 'furtivity']
    },
    {
        name: 'Mysticism',
        attribute: 'Willpower',
        description: 'Mysticism refers to the School of Mysticism, one of the six avenues of magical study. Mysticism is the most arcane school, and the spells created by its application are as varied as Far Silence and Soul Trap.',
        tags: ['magic']
    },
    {
        name: 'Restoration',
        attribute: 'Willpower',
        description: 'Restoration refers to the School of Restoration, one of the six avenues of magical study. Any healing spell such as Cure Poison and Troll\'s Blood hails from Restoration.',
        tags: ['magic', 'recovery']
    },
    {
        name: 'Thaumaturgy',
        attribute: 'Willpower',
        description: 'Thaumaturgy refers to the School of Thaumaturgy, one of the six avenues of magica study. A Thaumaturgical spell does not change the appearance or structure of a force or object, but can manipulate laws temporarily, as evident in such spells as Levitate and Detection.',
        tags: ['magic', 'movement']
    }
];

const specialClassRange = {
    playable: {
        max: 40,
        min: -12
    },
    inGame: {
        max: 74,
        min: -21
    },
    aesthetic: {
        max: 65,
        min: -36
    }
};

const specialClassAdvantages = {
    'Acute Hearing': {
        suffix: [{ '': 1 }],
        description: 'Allows you to hear sounds from farther away.'
    },
    'Adrenaline Rush': {
        suffix: [{ '': 4 }],
        description: 'When low on health (<13%), you gain bonuses to some combat-related attributes.'
    },
    Athleticism: {
        suffix: [{ '': 4 }],
        description: 'Stamina decreases slower when running, jumping, climbing, and swimming. Jumping height is significantly increased.'
    },
    'Bonus to Hit': {
        suffix: [
            { Animals: 6 },
            { Daedra: 3 },
            { Humanoids: 6 },
            { Undead: 6 }
        ],
        description: 'Increases damage (+level pts) against certain monsters. Note that if you have a bonus to hit a monster, you may not have a phobia of the same monster.'
    },
    'Expertise In': {
        suffix: [
            { Axe: 2 },
            { 'Blunt Weapon': 2 },
            { 'Hand-to-Hand': 2 },
            { 'Long Blade': 2 },
            { Archery: 2 },
            { 'Short Blade': 2 }
        ],
        description: 'Increases accuracy (+level%) and damage (+level/3 pts) with a certain weapon.'
    },
    Immunity: {
        suffix: [
            { Disease: 10 },
            { Fire: 10 },
            { Frost: 10 },
            { Magic: 10 },
            { Paralysis: 10 },
            { Poison: 10 },
            { Shock: 10 }
        ],
        description: 'Allows you to become immune to the selected element or status effect. Note that a class with this advantage will not be able to choose similar "resistance", "critical weakness", or "low tolerance" advantages/disadvantages.'
    },
    'Increased Magery': {
        suffix: [
            { 'INT in Spell Points': 2 },
            { '1.5x INT in Spell Points': 4 },
            { '1.75x INT in Spell Points': 6 },
            { '2x INT in Spell Points': 8 },
            { '3x INT in Spell Points': 10 }
        ],
        description: 'This increases the amount of magicka you have. Essential for magic users, since by default Spell Points are only at 0.5x INT.'
    },
    'Rapid Healing': {
        suffix: [
            { General: 4 },
            { 'In Darkness': 3 },
            { 'In Light': 1 }
        ],
        description: 'This allows you to increase the rate you heal while resting.'
    },
    'Regenerate Health': {
        suffix: [
            { General: 14 },
            { Darkness: 10 },
            { Light: 6 },
            { 'While Immersed in Water': 2 }
        ],
        description: 'Allows you to slowly regenerate health (15 HP/hour).'
    },
    Resistance: {
        suffix: [
            { Disease: 5 },
            { Fire: 5 },
            { Frost: 5 },
            { Magic: 5 },
            { Paralysis: 5 },
            { Poison: 5 },
            { Shock: 5 }
        ],
        description: 'Allows you to nullify any direct damage spell and add the spell point cost of the spell to your current spell point pool, as long as you have sufficient free/"empty" spell points to absorb the spell\'s full cost, with the cost calculated as the cost of the spell if you had cast the spell.'
    },
    'Spell Absorption': {
        suffix: [
            { General: 14 },
            { Darkness: 12 },
            { Light: 8 }
        ],
        description: 'Allows you to resist the selected element/status effect. Note that a class with this advantage will not be able to choose similar "immunity", "critical weakness", or "low tolerance" advantages/disadvantages.'
    }
};

const specialClassDisadvantages = {
    'Critical Weakness': {
        suffix: [
            { Disease: -14 },
            { Fire: -14 },
            { Frost: -14 },
            { Magic: -14 },
            { Paralysis: -14 },
            { Poison: -14 },
            { Shock: -14 }
        ],
        description: 'Makes you very vulnerable to the selected element/status effect. Note that a class with this disadvantage will not be able to choose similar "resistance", "immunity", or "low tolerance" advantages/disadvantages.'
    },
    Damage: {
        suffix: [
            { 'From Holy Places': -6 },
            { 'From Sunlight': -10 }
        ],
        description: 'You suffer 12 HP damage per 4 in-game minutes in certain places.'
    },
    'Darkness-powered Magery': {
        suffix: [
            { 'Lower Magic Ability in Daylight': -7 },
            { 'Unable to Use Magic in Daylight': -10 }
        ],
        description: 'This hinders your spellcasting ability during the day.'
    },
    'Forbidden Armor Types': {
        suffix: [
            { Chain: -2 },
            { Leather: -1 },
            { Plate: -5 }
        ],
        description: 'Makes it impossible to wear certain types of armor. They can still be carried in the inventory.'
    },
    'Forbidden Material': {
        suffix: [
            { Adamantium: -5 },
            { Daedric: -2 },
            { Dwarven: -7 },
            { Ebony: -5 },
            { Elven: -9 },
            { Iron: -1 },
            { Mithril: -6 },
            { Orcish: -3 },
            { Silver: -6 },
            { Steel: -10 }
        ],
        description: 'This forbids you from wearing armor and weapons of the selected material. They can still be carried in the inventory.'
    },
    'Forbidden Shield Types': {
        suffix: [
            { Buckler: -1 },
            { 'Kite Shield': -1 },
            { 'Round Shield': -1 },
            { 'Tower Shield': -1 }
        ],
        description: 'You can\'t use shields of this type. They can still be carried in your inventory.'
    },
    'Forbidden Weaponry': {
        suffix: [
            { Axe: -2 },
            { 'Blunt Weapon': -2 },
            { 'Hand-to-Hand': -2 },
            { 'Long Blade': -2 },
            { 'Missile Weapon': -2 },
            { 'Short Blade': -2 }
        ],
        description: 'You can\'t use weapons of this type. They can still be carried in your inventory.'
    },
    'Inability to Regen Spell Points': {
        suffix: [{ '': -14 }],
        description: 'The class cannot regenerate spell points while resting.'
    },
    'Light-powered Magery': {
        suffix: [
            { 'Lower Magic Ability in Darkness': -10 },
            { 'Unable to Use Magic in Darkness': -14 }
        ],
        description: 'This hinders your spellcasting ability during the night and in dungeons.'
    },
    'Low Tolerance': {
        suffix: [
            { Disease: -5 },
            { Fire: -5 },
            { Frost: -5 },
            { Magic: -5 },
            { Paralysis: -5 },
            { Poison: -5 },
            { Shock: -5 }
        ],
        description: 'Causes you to be slightly weak to selected elements/status effects. Note that a class with this disadvantage will not be able to choose similar "resistance", "critical weakness", or "immunity" advantages/disadvantages.'
    },
    Phobia: {
        suffix: [
            { Animals: -4 },
            { Daedra: -4 },
            { Humanoids: -4 },
            { Undead: -4 }
        ],
        description: 'Decreases the damage and the accuracy against the selected type of enemy, while that enemy will have an easier time attacking you. Note that if you have a phobia against a certain type of monster, you may not take the "Bonus To Hit" advantage for that same monster.'
    }
};

const missions = {
    armor: {
        prefix: 'own',
        material: [
            'a leather',
            'a chain',
            'a plate',
            'a Mithril',
            'an Adamantium',
            'an Ebony',
            'an Orcish',
            'a Daedric'
        ],
        suffix: [
            'helmet',
            'pauldron',
            'cuirass',
            'gauntlets',
            'greaves',
            'boots',
            'shield',
            'full suit of armor'
        ]
    },
    diseases: {
        prefix: 'become',
        suffix: [
            'a vampire',
            'a werewolf',
            'a wereboar'
        ]
    },
    grind: {
        prefix: '',
        suffix: [
            'Reach Level 10',
            'Reach Level 12',
            'Reach Level 8',
            'Reach Rank 5 in any guild',
            'Reach Rank 7 in any guild',
            'Reach 100 offensive skill',
            'Reach 100 stealth'
        ]
    },
    house: {
        prefix: 'own',
        suffix: [
            'Abibon-Gora',
            'Alcaire',
            'Alik\'r',
            'Anticlere',
            'Antiphyllos',
            'Ayasofya',
            'Bergama',
            'Betony',
            'Bhoriane',
            'Daenia',
            'Daggerfall',
            'Dak\'fron',
            'Dragontail Mountains',
            'Dwynnen',
            'Ephesus',
            'Gavaudon',
            'Glenpoint',
            'Glenumbra Moors',
            'Ilessan Hills',
            'Isle of Balfiera',
            'Kairou',
            'Kambria',
            'Koegria',
            'Kozanset',
            'Lainlyn',
            'Menevia',
            'Mournoth',
            'Myrkwasa',
            'Northmoor',
            'Phrygias',
            'Pothago',
            'Santaki',
            'Satakalaam',
            'Sentinel',
            'Shalgora',
            'Tigonus',
            'Totambu',
            'Tulune',
            'Urvaius',
            'Wayrest',
            'Wrothgarian Mountains',
            'Ykalon'
        ],
        house: [
            'a house of 1,000,000+ golds in',
            'a house of 800,000+ golds in',
            'a house of 600,000+ golds in',
            'a house of 400,000+ golds in'
        ]
    },
    landmark: {
        prefix: '',
        suffix: [
            'visit Daggerfall’s treasure room',
            'visit Orsinium’s vault room',
            'visit Wayrest’s painting room',
            'visit Sentinel’s greenhouse',
            'watch the sunset from a beach',
            'watch the sunrise from the summit of Mount Tigonus',
            'explore the island of Cybiades',
            'find a desert region',
            'find a mountains region',
            'find a jungle region',
            'find a swamp region',
            'find a subtropical region',
            'find a woodlans region'
        ]
    },
    money: {
        prefix: 'own',
        suffix: [
            'a ship of 200,000 golds',
            'a ship of 100,000 golds',
            '500,000 golds',
            '200,000 golds'
        ]
    },
    monster: {
        prefix: 'slay',
        suffix: [
            'a daedra',
            'a daedra lord',
            'a dragonling',
            'a lich',
            'a mummy',
            'a vampire ancient',
            'an ancient lich'
        ]
    },
    people: {
        prefix: 'meet',
        suffix: [
            'Queen Nulfaga of Wrothgarian Mountains',
            'Medora Direnni of Balfiera',
            'the Underking of Wayrest',
            'Lady Brisienna of Daggerfall',
            'Lord Gortwog of Orsinium',
            'King Gothryd of Daggerfall',
            'King Eadwyre of Wayrest',
            'Queen Akorithi of Sentinel',
            'the King of Worms of Dragontail Mountains'
        ]
    },
    quest: {
        prefix: 'get',
        suffix: [
            'the Ring of Khajiit',
            'the Ring of Namira',
            'the Skeleton’s Key',
            'the Skull of Corruption',
            'the Spell Breaker',
            'the Mace of Molag Bal',
            'the Masque of Clavicus',
            'the Mehrunes Razor',
            'the Oghma Infinium',
            'the Volendrung',
            'the Ebony Mail'
        ]
    },
    weapon: {
        prefix: 'own',
        material: [
            'a Mithril',
            'an Adamantium',
            'an Ebony',
            'an Orcish',
            'a Daedric'
        ],
        suffix: [
            'weapon of your highest skill',
            'weapon',
            'blade',
            'bow'
        ]
    }
};

const classNameRules = {
    charisma: ['agent', 'representative', 'negotiator'],
    combat: ['gladiator', 'mercenary', 'warlord'],
    furtivity: ['spy', 'shadow', 'cutpurse'],
    language: ['polyglot', 'smooth talker', 'translator'],
    magic: ['scholar', 'conjurer', 'book-worm'],
    movement: ['climber', 'passer-through-walls', 'unstoppable'],
    recovery: ['scarred', 'undying', 'bandaged'],
    weapon: ['weapon master', 'duelist', 'blade']
};
