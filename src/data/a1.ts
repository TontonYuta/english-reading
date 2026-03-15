import { Passage } from '../types';

export const a1Passages: Passage[] = [
  {
    id: 'a1-1',
    title: 'My Family',
    level: 'A1',
    content: [
      "Hello, my name is Anna. I am from London. I have a small family.",
      "My mother's name is Sarah. She is a teacher. My father's name is John. He is a doctor.",
      "I have one brother. His name is Tom. He is ten years old. We have a dog named Max.",
      "I love my family very much."
    ],
    vocabulary: [
      { word: 'Family', meaning: 'Gia đình' },
      { word: 'Teacher', meaning: 'Giáo viên' },
      { word: 'Doctor', meaning: 'Bác sĩ' },
      { word: 'Brother', meaning: 'Anh/em trai' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is Anna from?',
        options: ['Paris', 'London', 'New York', 'Berlin'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "I am from London."'
      },
      {
        id: 'q2',
        text: 'What does Anna\'s father do?',
        options: ['He is a teacher', 'He is a student', 'He is a doctor', 'He is a driver'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "My father\'s name is John. He is a doctor."'
      },
      {
        id: 'q3',
        text: 'How old is Tom?',
        options: ['Eight', 'Nine', 'Ten', 'Eleven'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "He is ten years old."'
      }
    ]
  },
  {
    id: 'a1-2',
    title: 'My Daily Routine',
    level: 'A1',
    content: [
      "I wake up at 7 o'clock every morning. I brush my teeth and wash my face.",
      "Then, I eat breakfast with my family. I usually have bread and milk.",
      "I go to school at 8 o'clock. My school is near my house, so I walk.",
      "I finish school at 3 o'clock in the afternoon. I play with my friends, and then I go home."
    ],
    vocabulary: [
      { word: 'Wake up', meaning: 'Thức dậy' },
      { word: 'Breakfast', meaning: 'Bữa sáng' },
      { word: 'Walk', meaning: 'Đi bộ' },
      { word: 'Afternoon', meaning: 'Buổi chiều' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What time does the person wake up?',
        options: ['6 o\'clock', '7 o\'clock', '8 o\'clock', '9 o\'clock'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "I wake up at 7 o\'clock every morning."'
      },
      {
        id: 'q2',
        text: 'How does the person go to school?',
        options: ['By bus', 'By car', 'By bike', 'They walk'],
        correctAnswerIndex: 3,
        explanation: 'The text says: "My school is near my house, so I walk."'
      }
    ]
  },
  {
    id: 'a1-3',
    title: 'My Favorite Food',
    level: 'A1',
    content: [
      "My favorite food is pizza. I love cheese and tomato on my pizza.",
      "I usually eat pizza on the weekend with my friends. We go to a restaurant near my house.",
      "I also like fruits. My favorite fruit is the apple. Apples are sweet and healthy.",
      "I drink water or orange juice with my meals. I do not like soda."
    ],
    vocabulary: [
      { word: 'Favorite', meaning: 'Yêu thích' },
      { word: 'Weekend', meaning: 'Cuối tuần' },
      { word: 'Healthy', meaning: 'Khỏe mạnh, tốt cho sức khỏe' },
      { word: 'Meals', meaning: 'Bữa ăn' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the person\'s favorite food?',
        options: ['Apples', 'Pizza', 'Orange juice', 'Cheese'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "My favorite food is pizza."'
      },
      {
        id: 'q2',
        text: 'When do they usually eat pizza?',
        options: ['Every day', 'On Monday', 'On the weekend', 'In the morning'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "I usually eat pizza on the weekend with my friends."'
      },
      {
        id: 'q3',
        text: 'What do they drink with their meals?',
        options: ['Soda', 'Milk', 'Water or orange juice', 'Coffee'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "I drink water or orange juice with my meals."'
      }
    ]
  }
];
