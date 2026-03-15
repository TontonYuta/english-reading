import { Passage } from '../types';

export const a2Passages: Passage[] = [
  {
    id: 'a2-1',
    title: 'A Weekend Trip',
    level: 'A2',
    content: [
      "Last weekend, my friends and I went to the mountains. We left early on Saturday morning.",
      "The drive took about three hours. When we arrived, the weather was beautiful and sunny.",
      "We set up our tents near a small lake. In the afternoon, we went hiking and saw some wild animals.",
      "In the evening, we cooked dinner over a campfire and told stories. It was a wonderful trip."
    ],
    vocabulary: [
      { word: 'Mountains', meaning: 'Núi' },
      { word: 'Arrive', meaning: 'Đến nơi' },
      { word: 'Hiking', meaning: 'Đi bộ đường dài' },
      { word: 'Campfire', meaning: 'Lửa trại' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When did they leave for the trip?',
        options: ['Friday evening', 'Saturday morning', 'Saturday afternoon', 'Sunday morning'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "We left early on Saturday morning."'
      },
      {
        id: 'q2',
        text: 'Where did they set up their tents?',
        options: ['In the forest', 'On top of the mountain', 'Near a small lake', 'Next to a river'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "We set up our tents near a small lake."'
      },
      {
        id: 'q3',
        text: 'What did they do in the evening?',
        options: ['Went hiking', 'Swam in the lake', 'Cooked dinner over a campfire', 'Drove back home'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "In the evening, we cooked dinner over a campfire and told stories."'
      }
    ]
  },
  {
    id: 'a2-2',
    title: 'A Visit to the Zoo',
    level: 'A2',
    content: [
      "Yesterday, my class went on a trip to the city zoo. The weather was warm and sunny.",
      "First, we saw the monkeys. They were very funny and jumped from tree to tree. Then, we visited the lions, but they were sleeping in the sun.",
      "At noon, we had a picnic lunch near the elephant enclosure. The elephants were eating large branches of leaves.",
      "Before we left, we bought some souvenirs at the gift shop. It was a great day, and we learned a lot about animals."
    ],
    vocabulary: [
      { word: 'Zoo', meaning: 'Sở thú' },
      { word: 'Enclosure', meaning: 'Khu vực rào kín, chuồng' },
      { word: 'Souvenirs', meaning: 'Quà lưu niệm' },
      { word: 'Branches', meaning: 'Cành cây' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What were the lions doing when the class visited them?',
        options: ['Eating meat', 'Jumping from trees', 'Sleeping in the sun', 'Playing with monkeys'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "...we visited the lions, but they were sleeping in the sun."'
      },
      {
        id: 'q2',
        text: 'Where did the class have their picnic lunch?',
        options: ['Near the monkeys', 'Near the elephant enclosure', 'In the gift shop', 'On the bus'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "At noon, we had a picnic lunch near the elephant enclosure."'
      },
      {
        id: 'q3',
        text: 'What did they do before leaving the zoo?',
        options: ['Fed the animals', 'Took a photo', 'Bought souvenirs', 'Ate ice cream'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "Before we left, we bought some souvenirs at the gift shop."'
      }
    ]
  }
];
