import { Passage } from '../types';

export const c2Passages: Passage[] = [
  {
    id: 'c2-1',
    title: 'Quantum Mechanics and the Nature of Reality',
    level: 'C2',
    content: [
      "Quantum mechanics, the branch of physics dealing with the behavior of matter and light on the atomic and subatomic scale, fundamentally challenges our classical intuition about the nature of reality.",
      "At the heart of this paradigm shift is the principle of superposition, which posits that a quantum system can exist in multiple states simultaneously until it is observed or measured. This is famously illustrated by Schrödinger's cat thought experiment, wherein a macroscopic entity is entangled with a quantum event, rendering its state indeterminate prior to observation.",
      "Equally confounding is the phenomenon of quantum entanglement, described by Einstein as 'spooky action at a distance.' Entangled particles exhibit correlated properties such that the measurement of one instantaneously determines the state of the other, regardless of the spatial separation between them. This seemingly violates the principle of locality, a cornerstone of classical physics.",
      "These counterintuitive principles have profound philosophical implications. They suggest that the universe at its most fundamental level is not deterministic but probabilistic, and that the act of observation plays an active, perhaps constitutive, role in defining physical reality. The ongoing quest to reconcile quantum mechanics with general relativity remains one of the most formidable challenges in theoretical physics."
    ],
    vocabulary: [
      { word: 'Paradigm shift', meaning: 'Sự thay đổi mô hình/nhận thức cơ bản' },
      { word: 'Superposition', meaning: 'Sự chồng chập (trạng thái)' },
      { word: 'Indeterminate', meaning: 'Không xác định' },
      { word: 'Entanglement', meaning: 'Sự vướng víu (lượng tử)' },
      { word: 'Constitutive', meaning: 'Cấu thành, có tính quyết định' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does the principle of superposition suggest about a quantum system?',
        options: ['It can only exist in one state at any given time.', 'It exists in multiple states simultaneously until observed.', 'Its state is entirely determined by its environment.', 'It cannot be measured by any known instruments.'],
        correctAnswerIndex: 1,
        explanation: 'The text states that superposition "posits that a quantum system can exist in multiple states simultaneously until it is observed or measured."'
      },
      {
        id: 'q2',
        text: 'Why did Einstein refer to quantum entanglement as "spooky action at a distance"?',
        options: ['Because it involves ghosts and supernatural phenomena.', 'Because the particles disappear and reappear randomly.', 'Because the measurement of one particle instantaneously affects the other, regardless of distance.', 'Because it only occurs in the dark.'],
        correctAnswerIndex: 2,
        explanation: 'The text explains that entangled particles are correlated so that "the measurement of one instantaneously determines the state of the other, regardless of the spatial separation," which seems to violate locality.'
      },
      {
        id: 'q3',
        text: 'What philosophical implication of quantum mechanics is highlighted in the text?',
        options: ['The universe is entirely deterministic and predictable.', 'Observation has no effect on physical reality.', 'The universe is fundamentally probabilistic rather than deterministic.', 'Classical physics is completely wrong in all contexts.'],
        correctAnswerIndex: 2,
        explanation: 'The text notes: "They suggest that the universe at its most fundamental level is not deterministic but probabilistic..."'
      }
    ]
  },
  {
    id: 'c2-2',
    title: 'The Philosophy of Language and Meaning',
    level: 'C2',
    content: [
      "The philosophy of language delves into the intricate relationship between language, thought, and reality, probing the fundamental mechanisms by which linguistic expressions acquire meaning. A central debate in this field revolves around the distinction between semantics, which deals with the inherent meaning of words and sentences, and pragmatics, which examines how context influences interpretation.",
      "Early 20th-century analytic philosophy, heavily influenced by figures like Gottlob Frege and the early Ludwig Wittgenstein, posited a referential theory of meaning. In this view, the meaning of a proposition is inextricably linked to its truth conditions—the state of affairs in the world that would render the statement true. Language was conceived as a logical picture of reality.",
      "However, the later Wittgenstein orchestrated a radical paradigm shift with his concept of 'language-games.' He argued that meaning is not derived from a static relationship between words and objects, but rather from the use of language within specific social practices and contexts. To understand a word is to understand its function within a particular 'form of life.'",
      "This pragmatic turn highlighted the performative aspect of language, as articulated by J.L. Austin's speech act theory. Austin demonstrated that utterances are not merely descriptive but can also constitute actions—such as promising, warning, or marrying. Consequently, the study of meaning must transcend abstract logical analysis and grapple with the dynamic, socially embedded nature of human communication."
    ],
    vocabulary: [
      { word: 'Semantics', meaning: 'Ngữ nghĩa học' },
      { word: 'Pragmatics', meaning: 'Ngữ dụng học' },
      { word: 'Inextricably', meaning: 'Không thể tách rời' },
      { word: 'Performative', meaning: 'Có tính thực thi, hành động' },
      { word: 'Utterances', meaning: 'Lời nói, phát ngôn' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How did the early analytic philosophers view the meaning of a proposition?',
        options: ['As entirely dependent on the social context of the speaker.', 'As a performative action rather than a description.', 'As linked to its truth conditions and its ability to picture reality logically.', 'As a fluid concept that changes based on the "language-game" being played.'],
        correctAnswerIndex: 2,
        explanation: 'The text states that early analytic philosophy posited that "the meaning of a proposition is inextricably linked to its truth conditions... Language was conceived as a logical picture of reality."'
      },
      {
        id: 'q2',
        text: 'What is the core idea of the later Wittgenstein\'s concept of "language-games"?',
        options: ['Language is a rigid system of logical rules.', 'Meaning is derived from the use of language within specific social practices.', 'Words have inherent meanings that are independent of human interaction.', 'Language is primarily used to deceive rather than communicate.'],
        correctAnswerIndex: 1,
        explanation: 'The text explains that the later Wittgenstein argued "meaning is not derived from a static relationship between words and objects, but rather from the use of language within specific social practices and contexts."'
      },
      {
        id: 'q3',
        text: 'According to J.L. Austin\'s speech act theory, what is a key characteristic of utterances?',
        options: ['They are always true or false.', 'They are strictly descriptive statements about the world.', 'They are meaningless without a physical referent.', 'They can constitute actions in themselves, such as making a promise.'],
        correctAnswerIndex: 3,
        explanation: 'The text notes: "Austin demonstrated that utterances are not merely descriptive but can also constitute actions—such as promising, warning, or marrying."'
      }
    ]
  }
];
