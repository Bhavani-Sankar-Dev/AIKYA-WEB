import eventImageOne from "../assets/1.png";
import eventImageTwo from "../assets/2.png";
import eventImageThree from "../assets/3.png";
import eventImageFour from "../assets/4.png";
import eventImageFive from "../assets/canva.png";
import eventImageSix from "../assets/binary.png";
import eventImageSeven from "../assets/chess.png";
import eventImageEight from "../assets/escape-room.png";
import eventImageNine from "../assets/kybercode.png";
import eventImageTen from "../assets/puzzle.png";
import eventImageEleven from "../assets/sith-signal.png";
import eventImageTwelve from "../assets/rebels.png";



const events = [
  // DAY 1 - MAJOR EVENTS
  {
    id: "krennic-encryption",
    studentCoordinator: "P.Harsha Vardhan",
    facultyCoordinator: "Mr.G.Amar Teja",
    number: 1,
    name: "Krnneic Encryption",
    type: "major",
    day: 1,
    date: "October 5, 2026",
    time: "09:00 AM - 04:00 PM",
    venue: "ECE block,(N-305,N-306)",
    category: "Digital Communications & Cryptography",
    description: "Decode hidden optical transmissions, unscramble encrypted coordinate beacons, and complete the imperial transmission grid.",
    objective: "Operatives must decrypt visual and spectral clues dispersed across optical nodes, using frequency decoders, laser alignment stations, and cryptographic ciphers to unmask the master AIKYA mainframe sequence.",
    rules: [
      "The Game Idea is a 4-player team relay race in which a secret message travels from the first player to the last. Each player must solve a puzzle before passing it on.",
      "Transmitter (P1): Solves word riddles to find a Secret Word, then converts it to binary using a cheat sheet.",
      "Encoder (P2): Solves a puzzle to get a special rule, then uses it to 'lock' the binary. Organizers then secretly flip one bit before passing it on.",
      "Decoder (P3): Solves a puzzle (Scramble, Zip Game, or Word Search) whose answer is a number. That number reveals which bit was corrupted, so they can fix it.",
      "Receiver (P4): Translates the corrected binary back into letters. If it matches the Secret Word, they hit the buzzer and win!"
    ],
    teamSize: "4 Members",
    prizePool: "Cash Awards + Galactic Trophy + Merit Certificates",
    registrationLink: "https://forms.gle/hzXspM9kcejfjda58",
    image: eventImageThree,
  },

  {
    id: "codeforce-awaken",
    studentCoordinator: "K.Srinitya",
    facultyCoordinator: "Dr.M.Venkatesh",
    number: 2,
    name: "Code Force Awaken",
    type: "major",
    day: 1,
    date: "October 5, 2026",
    time: "09:00 AM - 04:00 PM",
    venue: "HITECH-LAB(N-303)",
    category: "Coding",
    description: "Build logic and coordinate leads to victory",
    objective: "Crack the code, debug and coordinate",
    rules: [
      "It is an individual, Python-based coding contest set in the Star Wars universe.Participants start as Padawans and move through four elimination levels (40 → 25 → 15 → 5 → 1), each testing a different skill: writing code, understanding code, debugging code, and finally cracking a multi-stage Final Code Lock. It's open to all branches (CSE, ECE, EEE, IT, AIML, AIDS, ME, CE), with one participant per computer on a common platform."
    ],
    teamSize: "Individual",
    prizePool: "Cash Awards + Galactic Trophy + Merit Certificates",
    registrationLink: "https://forms.gle/9neeULaDNsHyxGR96",
    image: eventImageOne,
  },

  // DAY 1 - MINOR EVENTS
  {
    id: "Canavas Clash",
    studentCoordinator: "K.Bhavani Sankar",
    facultyCoordinator: "Dr.Sk.Riyazuddin",
    number: 5,
    name: "Canvas Clash",
    type: "minor",
    day: 1,
    date: "October 5, 2026",
    time: "1:00PM - 03:00PM",
    venue: "ECE-block(N-315)",
    category: "Non-Technical",
    description: "Create a poster based on the given theme",
    objective: "You have to design and create a poster as per the theme",
    rules: [
      "Participants need to understand the canva and design a poster in the given time.",
    ],
    teamSize: "Individual",
    registrationLink: "https://forms.gle/oz3KsXYdAo9MmAgs5",
    image: eventImageFive,
  },

  {
    id: "puzzle-paradox",
    studentCoordinator: "K.Sirisha",
    facultyCoordinator: "Dr.G.V.SatyaKumar",
    number: 6,
    name: "Puzzle Paradox",
    type: "minor",
    day: 1,
    date: "October 5, 2026",
    time: "10:00AM - 1:00PM",
    venue: "ECE-block(N-304)",
    category: "testing observation, problem-solving, teamwork, and communication",
    description: "Engage in rapid algorithmic combat: solve firmware logic puzzles, memory optimization riddles, and embedded C challenges.",
    objective: "Demonstrate speed and architectural finesse by resolving microcontroller firmware routines, bitwise logic operations, and deterministic timing problems.",
    rules: [
      "In Round 1 (3 minutes), teams identify hidden objects and symbols in a detailed picture, with the highest-scoring teams advancing",
      "In Round 2 (4 minutes), the selected teams reconstruct a jigsaw puzzle containing a few unnecessary pieces, and teams that complete it correctly within the time limit qualify for the final. ",
      "In Round 3 (5 minutes), one member describes a secret picture using only words while the other member draws it without seeing the original. ",
      "The final winner is decided based on the accuracy of the drawing and overall performance."
    ],
    teamSize: "1 - 2 Members",
    registrationLink: "https://forms.gle/uKgpPa1JhKM64x5CA",
    image: eventImageTen,
  },

  {
    id: "rise-of-rebels",
    studentCoordinator: "M.Mamatha",
    facultyCoordinator: "Dr.N.Durga Rao",
    number: 7,
    name: "Rise of Rebels",
    type: "minor",
    day: 1,
    date: "October 5, 2026",
    time: "10:00 AM - 1:00Pm",
    venue: "ECE-block(N-302)",
    category: "technical",
    description: "Trapped in an automated airlock with declining reserves: crack electronic keypads, rewire breadboard relays, and escape in 45 minutes.",
    objective: "Improve knowledge of electronic components and their applications.Develop visual identification and observation skil",
    rules: [
      "Level 1, Rebel Intelligence: Teams identify ECE components from pictures that are gradually revealed. 20 questions, top teams qualify.",
      "Level 2, Hidden Rebel Signal: Teams find 15-20 hidden ECE component names in a word-search grid, in any direction. Fewer teams move on.",
      "Level 3, Rebel Blueprint: Teams study a circuit for 30-40 seconds, then recreate it from memory and answer questions on how it works. Accuracy and speed decide the winner.",
    ],
    teamSize: "2 - 3 Members",
    registrationLink: "https://forms.gle/Rmc6XAYcdQ6syYfAA",
    image: eventImageTwelve,
  },

  {
    id: "binary-breakers",
    studentCoordinator: "K.V.S.P.M.Nishanth",
    facultyCoordinator: "Mr.K.Appala Raju",
    number: 8,
    name: "Binary Breaker",
    type: "minor",
    day: 1,
    date: "October 5, 2026",
    time: "1:00PM - 3:30PM",
    venue: "VLSI-LAB(N-209)",
    category: "Technical",
    description: "Attempt the quizz and answer every question",
    objective: "Strengthen understanding of binary, decimal, octal, and hexadecimal number systems.",
    rules: [
      "Round-1: Number System Conversions: Participants solve conversion problems involving binary, decimal, octal, and hexadecimal number systems.",
      "Round-2: Bitwise Battle: Participants solve problems involving AND, OR, XOR, NOT, left shift, and right shift operations.",
      "Round-3: Decode the Message: Participants decode binary sequences into ASCII characters to reveal hidden messages."
    ],
    teamSize: "Individual",
    registrationLink: "https://forms.gle/MgZXUJeGMddGiVFaA",
    image: eventImageSix,
  },



  // DAY 2 - MAJOR EVENTS
  {
    id: "holocron-hunt",
    studentCoordinator: "T.Jahnavi",
    facultyCoordinator: "Mr.P.Bose Babu",
    number: 3,
    name: "Holocron Hunt",
    type: "major",
    day: 2,
    date: "October 6, 2026",
    time: "09:00 AM - 1:00 PM",
    venue: "Honesty block,Seminar Hall",
    category: "Non-Technical",
    description: "Holocron Hunt is a team-based treasure hunt inspired by the Star Wars universe. Teams receive a starting clue that leads them to a specific location and volunteer. By solving a series of five hidden clues, teams collect letters that must be arranged to form a final word revealing the treasure's location. The first team to locate the treasure wins.",
    objective: "Develop logical thinking and problem-solving skills.",
    rules: [
      "Each team receives one starting clue.",
      "Teams must locate the correct volunteer to receive the next clue.",
      "Five clues must be solved in sequence, with each providing one letter.",
      "Teams must arrange all five letters to form the final word.",
      "Teams cannot skip clues or collect clues from other teams.",
      "The first team to reach the correct treasure location wins.",
      "Any hints or tie-breaking decisions will be handled by the organizers."
    ],
    teamSize: "3-4 memebers",
    prizePool: "Cash Awards + Galactic Trophy + Merit Certificates",
    registrationLink: "https://forms.gle/YcbJHh1o3qyEJXUm7",
    image: eventImageTwo,
  },

  {
    id: "galactic-circuit-forge",
    studentCoordinator: "B.Sasidhar Reddy",
    facultyCoordinator: "Dr.G.Naveen Kumar",
    number: 4,
    name: "Galactic Circuit Forge",
    type: "major",
    day: 2,
    date: "October 6, 2026",
    time: "09:00AM - 01:00PM",
    venue: "ADC-Lab(N-315)",
    category: "Technical",
    description: "Galactic Circuit Forge is a Star Wars-themed electronics challenge in which teams progress through three rounds: an electronics and logical reasoning quiz, a component-hunting challenge, and a timed circuit-building task. Participants must demonstrate their technical knowledge, component identification skills, and practical circuit-building abilities to complete their mission.",
    objective: "Test fundamental electronics knowledge and logical reasoning.",
    rules: [
      "Round-1: Quiz: Teams answer questions on basic electronics and logical puzzles. The top 60% of teams qualify.",
      "Round-2: Hunt the Components: Teams receive a circuit diagram and operation or symbol cards as hints to identify the required components.Incorrect component selections result in negative marks.",
      "Incorrect component selections result in negative marks.",
      "The top 50% of teams from Round 2 qualify for the final round. A mini-game or quiz may be used to break ties.",
      "Round-3: Build the Circuit: Qualified teams must construct the given circuit using the collected components within the specified time."
    ],
    teamSize: "3 - 4 Members",
    prizePool: "Grand Cash Awards + Galactic Trophy + Incubation Mentorship",
    registrationLink: "https://forms.gle/5eGWpMVnpT5pAZZN9",
    image: eventImageFour,
  },

  // DAY 2 - MINOR EVENTS
  {
    id: "dice-mate",
    studentCoordinator: "K.Sai Krishna",
    facultyCoordinator: "Mr.Mande Srinivasa Rao",
    number: 9,
    name: "Dice Mate",
    type: "minor",
    day: 2,
    date: "October 6, 2026",
    time: "09:00AM - 12:00AM",
    venue: "EDC-Lab(N-313)",
    category: "Non-Technical",
    description: "Dicemate is a modified version of traditional chess in which dice determine the type of piece a player can move on each turn. Players must follow standard chess rules while adapting their strategies to the randomness introduced by the dice.",
    objective: "Improve strategic thinking and decision-making.",
    rules: [
      "The game is played on a standard chessboard using regular chess pieces.",
      "Before each move, the player must roll a six-sided die."
    ],
    teamSize: "Individual",
    registrationLink: "https://forms.gle/uzsZaRSscGEj1aKH9",
    image: eventImageSeven,
  },

  {
    id: "escape-mission",
    studentCoordinator: "G.Akshara",
    facultyCoordinator: "Dr.A.Srinag",
    number: 10,
    name: "StarWars: The Escape Room",
    type: "minor",
    day: 2,
    date: "October 6, 2026",
    time: "09:00AM - 12:00AM",
    venue: "Hitech-Lab(N-303)",
    category: "Non-Technical",
    description: "The Escape Mission is a solo, time-based challenge in which Luke Skywalker has been captured by Darth Vader. Participants must complete three consecutive rounds involving observation, memory, and reflexes to escape. The entire mission takes place under one continuous timer of 8–10 minutes, with each round increasing in difficulty.",
    objective: "Improve visual observation and attention to detail.",
    rules: [
      "Round-1: Path of the Force: Participants memorize a Star Wars-themed image and reconstruct it using scrambled puzzle pieces to reveal a hidden key.",
      "Round-2: Battle of the Empire: Participants memorize a sequence of colors or symbols and reproduce it correctly. Some sequences may require reverse order or attention to similar-looking symbols.",
      "Round-3: Duel of the Force: Participants respond to directional attacks (left, up, right, and down), identify patterns, and adapt when the pattern changes.",
    ],
    teamSize: "Individual",
    registrationLink: "https://forms.gle/LKVGDVgts1FUwk5XA",
    image: eventImageEight,
  },

  {
    id: "sith-signal",
    studentCoordinator: "K.Vibhas",
    facultyCoordinator: "Dr.Gopi Tilak",
    number: 11,
    name: "Sith Signal",
    type: "minor",
    day: 2,
    date: "October 6, 2026",
    time: "10:00 AM - 12:00 PM",
    venue: "ECE-Block(N-304)",
    category: "Technical",
    description: "Sith Signal is a team-based signal-processing event inspired by the Star Wars universe. Participants analyze waveforms, calculate signal parameters, interpret operation-based block diagrams, and generate the resulting waveforms. The event progresses from fundamental signal analysis to applied waveform transformation.",
    objective: "Strengthen understanding of basic signal-processing concepts.",
    rules: [
      "Round-1: Signal Analysis: Teams visit five stations: Peak, Time, RMS, DSO, and Compare. Participants must extract or calculate the required signal parameters.Scores from all five stations are combined to determine qualification for the next round.",
      "Round-2: Waveform Generation: Qualified teams receive an input waveform, its parameters, and a block diagram containing different operations or conversions.Teams must apply the operations in the correct order and draw or identify the resulting output waveform."
    ],
    teamSize: "2-3 Members",
    registrationLink: "https://forms.gle/brvDSPGK4nMtxg4q7",
    image: eventImageEleven,
  },

  {
    id: "kybercode-duel",
    studentCoordinator: "G.Vyshali",
    facultyCoordinator: "Dr.S.Thirumala Devi",
    number: 12,
    name: "KyberCode: Duel Numbers",
    type: "minor",
    day: 2,
    date: "October 6, 2026",
    time: "10:00AM - 12:00PM",
    venue: "ECE block(N-302)",
    category: "Technical",
    description: "Duel of Numbers is a one-versus-one mathematical challenge in which participants decode hidden numbers represented by colors and use mathematical operations to reach a specified target. The event consists of two levels of increasing difficulty, testing numerical reasoning, arithmetic accuracy, and speed.",
    objective: "Improve mathematical and numerical reasoning skills.",
    rules: [
      "Level-1: The Jedi Trial (90 seconds): Players receive a target number and four colored values. They must decode the values and use all four exactly once, with addition, subtraction, multiplication, division, and brackets, to reach the target.",
      "Level-2: The Dark Side Challenge (2 minutes): Players receive a new target and five or six colored values. They may select only the numbers required, using each selected number at most once.",
    ],
    teamSize: "Individual",
    registrationLink: "https://forms.gle/w9fmecXhktAjXL1S9",
    image: eventImageNine,
  }
];

export default events;