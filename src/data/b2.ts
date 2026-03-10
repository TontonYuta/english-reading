import { Passage } from '../types';

export const b2Passages: Passage[] = [
  {
    id: 'b2-1',
    title: 'The Rise of Remote Work',
    level: 'B2',
    content: [
      "In recent years, remote work has become increasingly common. Advances in technology have made it easier for people to collaborate from different locations.",
      "There are several advantages to working from home. Employees often experience a better work-life balance and save time and money on commuting.",
      "However, there are also challenges. Some workers feel isolated and miss the social interaction of an office environment. Additionally, it can be difficult to separate work from personal life when your home is also your office.",
      "Despite these challenges, many companies are adopting hybrid models, allowing employees to split their time between the office and home."
    ],
    vocabulary: [
      { word: 'Increasingly', meaning: 'Ngày càng tăng' },
      { word: 'Collaborate', meaning: 'Hợp tác' },
      { word: 'Commuting', meaning: 'Đi lại (đi làm)' },
      { word: 'Isolated', meaning: 'Bị cô lập' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What has facilitated the rise of remote work?',
        options: ['A desire for longer working hours', 'Advances in technology', 'A decrease in office spaces', 'Government regulations'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "Advances in technology have made it easier for people to collaborate from different locations."'
      },
      {
        id: 'q2',
        text: 'What is mentioned as a challenge of remote work?',
        options: ['Saving money on commuting', 'Better work-life balance', 'Feeling isolated', 'Having too many meetings'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "Some workers feel isolated and miss the social interaction of an office environment."'
      },
      {
        id: 'q3',
        text: 'What is a hybrid model in this context?',
        options: ['Working entirely from home', 'Working entirely in the office', 'Splitting time between the office and home', 'Working for two different companies'],
        correctAnswerIndex: 2,
        explanation: 'The text describes hybrid models as "allowing employees to split their time between the office and home."'
      }
    ]
  },
  {
    id: 'b2-2',
    title: 'The Impact of Social Media on Society',
    level: 'B2',
    content: [
      "Social media platforms have fundamentally transformed how we communicate, consume information, and perceive the world around us. On one hand, they offer unprecedented opportunities for global connectivity, allowing people to maintain relationships across vast distances and mobilize around shared causes.",
      "However, the pervasive nature of these platforms has raised significant concerns. The algorithms that drive social media are designed to maximize user engagement, often prioritizing sensationalist or emotionally charged content over nuanced discussion. This can contribute to the polarization of public discourse and the rapid spread of misinformation.",
      "Furthermore, the constant exposure to carefully curated representations of others' lives can negatively impact mental health, particularly among younger demographics. Studies have linked heavy social media use to increased rates of anxiety, depression, and feelings of inadequacy.",
      "As we navigate this digital landscape, it is crucial to develop digital literacy skills. Users must learn to critically evaluate the information they encounter and establish healthy boundaries to protect their well-being."
    ],
    vocabulary: [
      { word: 'Unprecedented', meaning: 'Chưa từng có' },
      { word: 'Pervasive', meaning: 'Lan tỏa khắp nơi, phổ biến' },
      { word: 'Polarization', meaning: 'Sự phân cực (ý kiến, quan điểm)' },
      { word: 'Curated', meaning: 'Được chọn lọc, sắp xếp kỹ lưỡng' },
      { word: 'Digital literacy', meaning: 'Kiến thức/kỹ năng kỹ thuật số' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'According to the text, what is a positive aspect of social media?',
        options: ['It prioritizes nuanced discussion.', 'It allows for global connectivity and maintaining relationships.', 'It reduces anxiety and depression.', 'It curates realistic representations of life.'],
        correctAnswerIndex: 1,
        explanation: 'The text states social media offers "unprecedented opportunities for global connectivity, allowing people to maintain relationships across vast distances..."'
      },
      {
        id: 'q2',
        text: 'Why do social media algorithms often prioritize sensationalist content?',
        options: ['To educate the public', 'To promote digital literacy', 'To maximize user engagement', 'To protect user well-being'],
        correctAnswerIndex: 2,
        explanation: 'The text explains: "The algorithms... are designed to maximize user engagement, often prioritizing sensationalist or emotionally charged content..."'
      },
      {
        id: 'q3',
        text: 'What is recommended for users to navigate the digital landscape safely?',
        options: ['Deleting all social media accounts', 'Developing digital literacy skills and setting boundaries', 'Only consuming emotionally charged content', 'Spending more time on platforms to understand algorithms'],
        correctAnswerIndex: 1,
        explanation: 'The text advises: "it is crucial to develop digital literacy skills... and establish healthy boundaries to protect their well-being."'
      }
    ]
  }
];
