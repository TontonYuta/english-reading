import { Passage } from '../types';

export const b1Passages: Passage[] = [
  {
    id: 'b1-1',
    title: 'The Importance of Sleep',
    level: 'B1',
    content: [
      "Sleep is essential for our physical and mental health. However, many people do not get enough sleep.",
      "Adults usually need between seven and nine hours of sleep per night. Teenagers need even more, about eight to ten hours.",
      "Lack of sleep can lead to various problems. It can affect your memory, your mood, and your ability to concentrate.",
      "To improve your sleep, you should try to go to bed and wake up at the same time every day. You should also avoid looking at screens before bedtime."
    ],
    vocabulary: [
      { word: 'Essential', meaning: 'Thiết yếu, quan trọng' },
      { word: 'Adults', meaning: 'Người lớn' },
      { word: 'Concentrate', meaning: 'Tập trung' },
      { word: 'Avoid', meaning: 'Tránh' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How much sleep do teenagers usually need?',
        options: ['Seven to nine hours', 'Eight to ten hours', 'Six to eight hours', 'More than ten hours'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "Teenagers need even more, about eight to ten hours."'
      },
      {
        id: 'q2',
        text: 'Which of the following is NOT mentioned as a problem caused by lack of sleep?',
        options: ['Memory issues', 'Mood changes', 'Weight gain', 'Difficulty concentrating'],
        correctAnswerIndex: 2,
        explanation: 'The text mentions memory, mood, and ability to concentrate. It does not mention weight gain.'
      },
      {
        id: 'q3',
        text: 'What is one tip given to improve sleep?',
        options: ['Drink coffee before bed', 'Look at screens to relax', 'Go to bed at the same time every day', 'Sleep less during the week'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "you should try to go to bed and wake up at the same time every day."'
      }
    ]
  },
  {
    id: 'b1-2',
    title: 'The Benefits of Regular Exercise',
    level: 'B1',
    content: [
      "Regular physical activity is one of the most important things you can do for your health. It can help control your weight, reduce your risk of cardiovascular disease, and strengthen your bones and muscles.",
      "But exercise is not just about physical health. It also has a profound impact on mental well-being. When you exercise, your body releases chemicals called endorphins. These endorphins interact with the receptors in your brain that reduce your perception of pain and trigger a positive feeling in the body.",
      "You don't need to spend hours in the gym to see these benefits. Even moderate activities, such as brisk walking, swimming, or cycling for 30 minutes a day, can make a significant difference.",
      "The key is consistency. Finding an activity you enjoy makes it much easier to stick to a routine and make exercise a lifelong habit."
    ],
    vocabulary: [
      { word: 'Cardiovascular', meaning: 'Thuộc tim mạch' },
      { word: 'Profound', meaning: 'Sâu sắc, to lớn' },
      { word: 'Endorphins', meaning: 'Hóc-môn giảm đau, tạo cảm giác vui vẻ' },
      { word: 'Consistency', meaning: 'Sự kiên trì, nhất quán' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is one physical benefit of exercise mentioned in the text?',
        options: ['Improving eyesight', 'Strengthening bones and muscles', 'Growing taller', 'Curing colds'],
        correctAnswerIndex: 1,
        explanation: 'The text states exercise can "strengthen your bones and muscles."'
      },
      {
        id: 'q2',
        text: 'How do endorphins affect the body?',
        options: ['They make you feel tired', 'They increase your perception of pain', 'They trigger a positive feeling', 'They make you hungry'],
        correctAnswerIndex: 2,
        explanation: 'The text explains that endorphins "trigger a positive feeling in the body."'
      },
      {
        id: 'q3',
        text: 'How much exercise does the text suggest is enough to see benefits?',
        options: ['Two hours in the gym every day', '30 minutes of moderate activity a day', 'Only exercising on weekends', 'Running a marathon once a month'],
        correctAnswerIndex: 1,
        explanation: 'The text suggests: "Even moderate activities... for 30 minutes a day, can make a significant difference."'
      }
    ]
  }
];
