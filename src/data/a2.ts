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
  },
  {
    id: 'a2-3',
    title: 'The New Vocabulary App',
    level: 'A2',
    content: [
      "Tom is a university student who loves writing code. Last month, he started building a new mobile app.",
      "His app helps people learn English vocabulary easily. Users can look at the screen, listen to the audio, and practice speaking.",
      "He spent many hours fixing bugs, but finally, the app was ready. He called it 'Vocab Unlock'.",
      "Now, many of his friends are downloading it. Tom is very happy that his coding skills can help others learn."
    ],
    vocabulary: [
      { word: 'Vocabulary', meaning: 'Từ vựng' },
      { word: 'Screen', meaning: 'Màn hình' },
      { word: 'Fixing bugs', meaning: 'Sửa lỗi code' },
      { word: 'Download', meaning: 'Tải xuống' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What kind of app did Tom build?',
        options: ['A game app', 'A cooking app', 'An English vocabulary app', 'A music app'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "His app helps people learn English vocabulary easily."'
      },
      {
        id: 'q2',
        text: 'What did Tom do before the app was ready?',
        options: ['He played games', 'He spent many hours fixing bugs', 'He went to sleep', 'He bought a new phone'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "He spent many hours fixing bugs, but finally, the app was ready."'
      },
      {
        id: 'q3',
        text: 'Who is downloading Tom\'s new app?',
        options: ['His teachers', 'His family', 'His friends', 'Strangers'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "Now, many of his friends are downloading it."'
      }
    ]
  },
  {
    id: 'a2-4',
    title: 'My City Vlog',
    level: 'A2',
    content: [
      "I work in an office from Monday to Friday. But on weekends, I become a video creator.",
      "I live in a beautiful coastal city. On Saturday mornings, I take my camera and walk around the streets to make a vlog.",
      "I record videos of the busy markets, the old bridges, and the famous local food.",
      "When I go back home, I use my laptop to edit the video and put music on it. I love sharing my city with the world."
    ],
    vocabulary: [
      { word: 'Office', meaning: 'Văn phòng' },
      { word: 'Creator', meaning: 'Người sáng tạo' },
      { word: 'Coastal city', meaning: 'Thành phố ven biển' },
      { word: 'Record', meaning: 'Ghi hình, quay video' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When does the person make their vlogs?',
        options: ['Every day', 'On Monday', 'On weekends', 'At night'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "...on weekends, I become a video creator."'
      },
      {
        id: 'q2',
        text: 'What do they film for their vlog?',
        options: ['Their office', 'Markets, bridges, and local food', 'Their house', 'Their friends'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "I record videos of the busy markets, the old bridges, and the famous local food."'
      },
      {
        id: 'q3',
        text: 'What do they do after filming?',
        options: ['Go to sleep', 'Cook dinner', 'Edit the video on their laptop', 'Go to the office'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "When I go back home, I use my laptop to edit the video..."'
      }
    ]
  },
  {
    id: 'a2-5',
    title: 'The Online Math Class',
    level: 'A2',
    content: [
      "David is a great math tutor. He teaches students who want to get better at mathematics.",
      "Because his students live in different cities, he teaches them online using his computer.",
      "He uses a digital pen to draw shapes and write formulas on the screen so everyone can understand clearly.",
      "He always gives them interesting exercises. When his students get high scores, he feels very proud."
    ],
    vocabulary: [
      { word: 'Tutor', meaning: 'Gia sư' },
      { word: 'Formulas', meaning: 'Công thức' },
      { word: 'Digital pen', meaning: 'Bút cảm ứng' },
      { word: 'Proud', meaning: 'Tự hào' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How does David teach his students?',
        options: ['At a school', 'Online using his computer', 'In a library', 'At their houses'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "...he teaches them online using his computer."'
      },
      {
        id: 'q2',
        text: 'What does he use the digital pen for?',
        options: ['To play games', 'To write emails', 'To draw shapes and write formulas', 'To grade papers'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "He uses a digital pen to draw shapes and write formulas on the screen..."'
      },
      {
        id: 'q3',
        text: 'When does David feel proud?',
        options: ['When he finishes work', 'When he buys a new computer', 'When his students get high scores', 'When he solves a problem'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "When his students get high scores, he feels very proud."'
      }
    ]
  },
  {
    id: 'a2-6',
    title: 'A Strong Password',
    level: 'A2',
    content: [
      "Mary uses the internet every day for her work and studies. She learned that she needs a strong password to protect her information.",
      "A good password has letters, numbers, and special symbols. She never uses her real name or her birth year.",
      "She also uses different passwords for different websites. She writes them in a secret notebook so she doesn't forget.",
      "Now, she feels safe when she buys books or software online."
    ],
    vocabulary: [
      { word: 'Password', meaning: 'Mật khẩu' },
      { word: 'Protect', meaning: 'Bảo vệ' },
      { word: 'Symbols', meaning: 'Ký hiệu, ký tự đặc biệt' },
      { word: 'Safe', meaning: 'An toàn' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why does Mary need a strong password?',
        options: ['To play games', 'To protect her information', 'To buy a computer', 'To send emails'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "...she needs a strong password to protect her information."'
      },
      {
        id: 'q2',
        text: 'What does a good password have?',
        options: ['Only numbers', 'Only letters', 'Her birth year', 'Letters, numbers, and symbols'],
        correctAnswerIndex: 3,
        explanation: 'The text says: "A good password has letters, numbers, and special symbols."'
      },
      {
        id: 'q3',
        text: 'Where does she keep her passwords?',
        options: ['On her computer screen', 'In a secret notebook', 'In her phone', 'She tells her friends'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "She writes them in a secret notebook so she doesn\'t forget."'
      }
    ]
  },
  {
    id: 'a2-7',
    title: 'A Logic Puzzle',
    level: 'A2',
    content: [
      "John loves math and logic games. His favorite game is about arranging colored blocks in a box.",
      "He has to find the best way to put all the blocks together without leaving any empty space.",
      "Sometimes, it takes a lot of time to solve a hard level. He has to think carefully before moving a block.",
      "He often plays this game with his friends to see who can finish faster. It is a great way to train his brain."
    ],
    vocabulary: [
      { word: 'Logic', meaning: 'Hợp lý, tư duy logic' },
      { word: 'Arrange', meaning: 'Sắp xếp' },
      { word: 'Empty space', meaning: 'Khoảng trống' },
      { word: 'Solve', meaning: 'Giải quyết' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is John\'s favorite game about?',
        options: ['Driving cars', 'Cooking food', 'Arranging colored blocks', 'Playing cards'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "His favorite game is about arranging colored blocks in a box."'
      },
      {
        id: 'q2',
        text: 'How does John play with his friends?',
        options: ['They see who can finish faster', 'They paint the blocks', 'They buy new games', 'They hide the blocks'],
        correctAnswerIndex: 0,
        explanation: 'The text says: "He often plays this game with his friends to see who can finish faster."'
      },
      {
        id: 'q3',
        text: 'Why is the game good for John?',
        options: ['It makes him tired', 'It trains his brain', 'It gives him money', 'It helps him sleep'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "It is a great way to train his brain."'
      }
    ]
  },
  {
    id: 'a2-8',
    title: 'Learning English',
    level: 'A2',
    content: [
      "Anna wants to travel the world, so she is learning English. She studies every day to get better.",
      "Every morning, she listens to an English podcast while she drinks her coffee. She also uses a mobile app to learn new vocabulary.",
      "In the evening, she stands in front of the mirror and practices speaking loudly.",
      "Sometimes she makes mistakes, but her teacher says that is normal. She is very confident now."
    ],
    vocabulary: [
      { word: 'Travel', meaning: 'Du lịch' },
      { word: 'Podcast', meaning: 'Chương trình phát thanh kỹ thuật số' },
      { word: 'Mirror', meaning: 'Cái gương' },
      { word: 'Mistakes', meaning: 'Lỗi sai' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why is Anna learning English?',
        options: ['To read books', 'To get a job', 'To travel the world', 'To watch movies'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "Anna wants to travel the world, so she is learning English."'
      },
      {
        id: 'q2',
        text: 'What does she do in the morning?',
        options: ['She practices speaking', 'She listens to a podcast', 'She writes a letter', 'She meets her teacher'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "Every morning, she listens to an English podcast..."'
      },
      {
        id: 'q3',
        text: 'How does she practice speaking?',
        options: ['She calls her friends', 'She speaks to her dog', 'She talks in front of a mirror', 'She sings a song'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "...she stands in front of the mirror and practices speaking loudly."'
      }
    ]
  },
  {
    id: 'a2-9',
    title: 'The University Library',
    level: 'A2',
    content: [
      "My university has a very big library. It has thousands of books and many quiet rooms for studying.",
      "I usually go there after my morning classes. I bring my laptop to do my homework and read math books.",
      "The library is always cool and quiet. Nobody talks loudly, so I can focus well on my work.",
      "When I am tired, I go to the small cafe inside the library to buy a cup of tea."
    ],
    vocabulary: [
      { word: 'University', meaning: 'Đại học' },
      { word: 'Quiet', meaning: 'Yên tĩnh' },
      { word: 'Focus', meaning: 'Tập trung' },
      { word: 'Tired', meaning: 'Mệt mỏi' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does the library have?',
        options: ['Many restaurants', 'Thousands of books and quiet rooms', 'A swimming pool', 'A big garden'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "It has thousands of books and many quiet rooms for studying."'
      },
      {
        id: 'q2',
        text: 'Why does the person like the library?',
        options: ['Because it is loud', 'Because nobody talks loudly and they can focus', 'Because there are no teachers', 'Because they can play games'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "Nobody talks loudly, so I can focus well on my work."'
      },
      {
        id: 'q3',
        text: 'What do they do when they are tired?',
        options: ['Go home', 'Go to sleep on the desk', 'Buy a cup of tea at the cafe', 'Read a comic book'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "When I am tired, I go to the small cafe inside the library to buy a cup of tea."'
      }
    ]
  },
  {
    id: 'a2-10',
    title: 'Building a Website',
    level: 'A2',
    content: [
      "Peter is learning how to build a website. He wants to make a site for his small online store.",
      "First, he draws the design on a piece of paper. He decides where to put the pictures and the text.",
      "Then, he writes the code on his computer. It takes a few days, but he enjoys the process.",
      "Finally, he adds photos of his products. He is very excited to share the new website with his customers."
    ],
    vocabulary: [
      { word: 'Build', meaning: 'Xây dựng, tạo ra' },
      { word: 'Design', meaning: 'Bản thiết kế' },
      { word: 'Products', meaning: 'Sản phẩm' },
      { word: 'Customers', meaning: 'Khách hàng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does Peter want to make?',
        options: ['A mobile game', 'A video', 'A website for his online store', 'A new computer'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "He wants to make a site for his small online store."'
      },
      {
        id: 'q2',
        text: 'What is the first thing he does?',
        options: ['He writes the code', 'He takes photos', 'He draws the design on paper', 'He calls his customers'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "First, he draws the design on a piece of paper."'
      },
      {
        id: 'q3',
        text: 'How does Peter feel about sharing the website?',
        options: ['He is angry', 'He is excited', 'He is sad', 'He is bored'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "He is very excited to share the new website with his customers."'
      }
    ]
  }
];
