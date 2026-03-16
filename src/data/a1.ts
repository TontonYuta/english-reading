import { Passage } from '../types';

export const a1Passages: Passage[] = [
  {
    id: 'a1-1',
    title: 'My Family',
    level: 'A1',
    content: [
      'Hello, my name is Anna. I live in London with my family.',
      'My mother is a teacher and my father is a doctor.',
      'I have one brother. His name is Tom. We also have a dog named Max.',
      'I love my family very much.'
    ],
    vocabulary: [
      { word: 'family', meaning: 'gia đình' },
      { word: 'teacher', meaning: 'giáo viên' },
      { word: 'doctor', meaning: 'bác sĩ' },
      { word: 'brother', meaning: 'anh/em trai' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where does Anna live?',
        options: ['Paris', 'London', 'Rome', 'Madrid'],
        correctAnswerIndex: 1,
        explanation: 'The passage says Anna lives in London.'
      },
      {
        id: 'q2',
        text: 'What is Anna’s father’s job?',
        options: ['Teacher', 'Doctor', 'Driver', 'Farmer'],
        correctAnswerIndex: 1,
        explanation: 'Her father is a doctor.'
      },
      {
        id: 'q3',
        text: 'What is the dog’s name?',
        options: ['Tom', 'Max', 'John', 'Ben'],
        correctAnswerIndex: 1,
        explanation: 'The dog is named Max.'
      }
    ]
  },
  {
    id: 'a1-2',
    title: 'My School Day',
    level: 'A1',
    content: [
      'I get up at six thirty every morning.',
      'I have breakfast and go to school at seven o’clock.',
      'At school, I study English, math, and science.',
      'I go home at four o’clock in the afternoon.'
    ],
    vocabulary: [
      { word: 'breakfast', meaning: 'bữa sáng' },
      { word: 'school', meaning: 'trường học' },
      { word: 'study', meaning: 'học' },
      { word: 'afternoon', meaning: 'buổi chiều' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What time does the writer get up?',
        options: ['6:00', '6:30', '7:00', '7:30'],
        correctAnswerIndex: 1,
        explanation: 'The writer gets up at six thirty.'
      },
      {
        id: 'q2',
        text: 'When does the writer go to school?',
        options: ['At six', 'At seven', 'At eight', 'At nine'],
        correctAnswerIndex: 1,
        explanation: 'The writer goes to school at seven o’clock.'
      },
      {
        id: 'q3',
        text: 'What subject is NOT mentioned?',
        options: ['English', 'Math', 'Science', 'History'],
        correctAnswerIndex: 3,
        explanation: 'History is not mentioned in the passage.'
      }
    ]
  },
  {
    id: 'a1-3',
    title: 'At the Park',
    level: 'A1',
    content: [
      'On Sunday, I go to the park with my friends.',
      'We play football and run on the grass.',
      'There are many trees and flowers in the park.',
      'We are happy because the weather is nice.'
    ],
    vocabulary: [
      { word: 'park', meaning: 'công viên' },
      { word: 'grass', meaning: 'cỏ' },
      { word: 'flowers', meaning: 'hoa' },
      { word: 'weather', meaning: 'thời tiết' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When does the writer go to the park?',
        options: ['On Monday', 'On Friday', 'On Sunday', 'On Saturday'],
        correctAnswerIndex: 2,
        explanation: 'The writer goes to the park on Sunday.'
      },
      {
        id: 'q2',
        text: 'What do they play?',
        options: ['Basketball', 'Football', 'Tennis', 'Badminton'],
        correctAnswerIndex: 1,
        explanation: 'They play football.'
      },
      {
        id: 'q3',
        text: 'Why are they happy?',
        options: ['Because it is raining', 'Because the park is small', 'Because the weather is nice', 'Because they go home'],
        correctAnswerIndex: 2,
        explanation: 'They are happy because the weather is nice.'
      }
    ]
  },
  {
    id: 'a1-4',
    title: 'My Best Friend',
    level: 'A1',
    content: [
      'My best friend is Lucy. She is twelve years old.',
      'She has long black hair and big brown eyes.',
      'Lucy is kind and funny. She likes reading books.',
      'We often do homework together after school.'
    ],
    vocabulary: [
      { word: 'friend', meaning: 'bạn' },
      { word: 'hair', meaning: 'tóc' },
      { word: 'kind', meaning: 'tốt bụng' },
      { word: 'homework', meaning: 'bài tập về nhà' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How old is Lucy?',
        options: ['10', '11', '12', '13'],
        correctAnswerIndex: 2,
        explanation: 'Lucy is twelve years old.'
      },
      {
        id: 'q2',
        text: 'What does Lucy like doing?',
        options: ['Swimming', 'Reading books', 'Cooking', 'Singing'],
        correctAnswerIndex: 1,
        explanation: 'Lucy likes reading books.'
      },
      {
        id: 'q3',
        text: 'When do they do homework together?',
        options: ['Before school', 'At night', 'After school', 'On Sunday'],
        correctAnswerIndex: 2,
        explanation: 'They do homework together after school.'
      }
    ]
  },
  {
    id: 'a1-5',
    title: 'My Classroom',
    level: 'A1',
    content: [
      'My classroom is big and bright.',
      'There are twenty desks, one teacher’s table, and a board.',
      'There are some pictures on the wall.',
      'I like my classroom because it is clean and quiet.'
    ],
    vocabulary: [
      { word: 'classroom', meaning: 'lớp học' },
      { word: 'bright', meaning: 'sáng' },
      { word: 'board', meaning: 'bảng' },
      { word: 'quiet', meaning: 'yên tĩnh' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How is the classroom?',
        options: ['Small and dark', 'Big and bright', 'Old and dirty', 'Noisy and hot'],
        correctAnswerIndex: 1,
        explanation: 'The classroom is big and bright.'
      },
      {
        id: 'q2',
        text: 'How many desks are there?',
        options: ['10', '15', '20', '25'],
        correctAnswerIndex: 2,
        explanation: 'There are twenty desks.'
      },
      {
        id: 'q3',
        text: 'Why does the writer like the classroom?',
        options: ['Because it is big only', 'Because it is quiet and clean', 'Because it has no board', 'Because it is small'],
        correctAnswerIndex: 1,
        explanation: 'The writer likes it because it is clean and quiet.'
      }
    ]
  },
  {
    id: 'a1-6',
    title: 'Breakfast Time',
    level: 'A1',
    content: [
      'I usually have breakfast at home.',
      'I eat bread, eggs, and drink a glass of milk.',
      'Sometimes my mother makes noodles for breakfast.',
      'Breakfast gives me energy for the day.'
    ],
    vocabulary: [
      { word: 'breakfast', meaning: 'bữa sáng' },
      { word: 'eggs', meaning: 'trứng' },
      { word: 'milk', meaning: 'sữa' },
      { word: 'energy', meaning: 'năng lượng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where does the writer have breakfast?',
        options: ['At school', 'At home', 'At a restaurant', 'At the park'],
        correctAnswerIndex: 1,
        explanation: 'The writer usually has breakfast at home.'
      },
      {
        id: 'q2',
        text: 'What does the writer drink?',
        options: ['Tea', 'Coffee', 'Juice', 'Milk'],
        correctAnswerIndex: 3,
        explanation: 'The writer drinks a glass of milk.'
      },
      {
        id: 'q3',
        text: 'What sometimes does the mother make?',
        options: ['Rice', 'Pizza', 'Noodles', 'Soup'],
        correctAnswerIndex: 2,
        explanation: 'Sometimes the mother makes noodles.'
      }
    ]
  },
  {
    id: 'a1-7',
    title: 'A Rainy Day',
    level: 'A1',
    content: [
      'Today it is raining outside.',
      'The sky is gray and the streets are wet.',
      'I stay at home and read a storybook.',
      'I also drink hot tea and listen to music.'
    ],
    vocabulary: [
      { word: 'raining', meaning: 'đang mưa' },
      { word: 'sky', meaning: 'bầu trời' },
      { word: 'wet', meaning: 'ướt' },
      { word: 'music', meaning: 'âm nhạc' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the weather like?',
        options: ['Sunny', 'Windy', 'Rainy', 'Snowy'],
        correctAnswerIndex: 2,
        explanation: 'It is raining outside.'
      },
      {
        id: 'q2',
        text: 'What color is the sky?',
        options: ['Blue', 'Gray', 'Green', 'Pink'],
        correctAnswerIndex: 1,
        explanation: 'The sky is gray.'
      },
      {
        id: 'q3',
        text: 'What does the writer do at home?',
        options: ['Play football', 'Read a storybook', 'Ride a bike', 'Cook dinner'],
        correctAnswerIndex: 1,
        explanation: 'The writer stays at home and reads a storybook.'
      }
    ]
  },
  {
    id: 'a1-8',
    title: 'My Pet Cat',
    level: 'A1',
    content: [
      'I have a small cat named Mimi.',
      'She is white and has soft fur.',
      'Mimi likes fish and milk.',
      'She sleeps on my bed every night.'
    ],
    vocabulary: [
      { word: 'cat', meaning: 'mèo' },
      { word: 'soft', meaning: 'mềm' },
      { word: 'fish', meaning: 'cá' },
      { word: 'sleep', meaning: 'ngủ' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the cat’s name?',
        options: ['Lily', 'Mimi', 'Lucy', 'Kitty'],
        correctAnswerIndex: 1,
        explanation: 'The cat is named Mimi.'
      },
      {
        id: 'q2',
        text: 'What color is Mimi?',
        options: ['Black', 'Brown', 'White', 'Yellow'],
        correctAnswerIndex: 2,
        explanation: 'Mimi is white.'
      },
      {
        id: 'q3',
        text: 'Where does Mimi sleep?',
        options: ['Under the table', 'In the garden', 'On the bed', 'In a box'],
        correctAnswerIndex: 2,
        explanation: 'She sleeps on the writer’s bed.'
      }
    ]
  },
  {
    id: 'a1-9',
    title: 'Going to the Market',
    level: 'A1',
    content: [
      'Every Saturday, my mother and I go to the market.',
      'We buy vegetables, fruit, meat, and rice.',
      'The market is busy, but it is very interesting.',
      'I like helping my mother carry the bags.'
    ],
    vocabulary: [
      { word: 'market', meaning: 'chợ' },
      { word: 'vegetables', meaning: 'rau' },
      { word: 'busy', meaning: 'đông đúc' },
      { word: 'bags', meaning: 'túi' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When do they go to the market?',
        options: ['Every Sunday', 'Every Saturday', 'Every Monday', 'Every Friday'],
        correctAnswerIndex: 1,
        explanation: 'They go to the market every Saturday.'
      },
      {
        id: 'q2',
        text: 'What do they buy?',
        options: ['Books and pens', 'Fruit and vegetables', 'Shoes and hats', 'Milk and cakes only'],
        correctAnswerIndex: 1,
        explanation: 'They buy vegetables, fruit, meat, and rice.'
      },
      {
        id: 'q3',
        text: 'What does the writer like doing?',
        options: ['Running in the market', 'Helping carry the bags', 'Selling food', 'Eating at the market'],
        correctAnswerIndex: 1,
        explanation: 'The writer likes helping mother carry the bags.'
      }
    ]
  },
  {
    id: 'a1-10',
    title: 'My Bicycle',
    level: 'A1',
    content: [
      'I have a blue bicycle.',
      'I ride it to school every day because my school is not far.',
      'My father bought it for me last year.',
      'I clean my bicycle every weekend.'
    ],
    vocabulary: [
      { word: 'bicycle', meaning: 'xe đạp' },
      { word: 'ride', meaning: 'đi, lái' },
      { word: 'bought', meaning: 'đã mua' },
      { word: 'clean', meaning: 'lau, làm sạch' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What color is the bicycle?',
        options: ['Red', 'Blue', 'Black', 'Green'],
        correctAnswerIndex: 1,
        explanation: 'The bicycle is blue.'
      },
      {
        id: 'q2',
        text: 'Who bought the bicycle?',
        options: ['Mother', 'Brother', 'Father', 'Friend'],
        correctAnswerIndex: 2,
        explanation: 'The father bought it.'
      },
      {
        id: 'q3',
        text: 'When does the writer clean the bicycle?',
        options: ['Every day', 'Every weekend', 'Every month', 'Every morning'],
        correctAnswerIndex: 1,
        explanation: 'The writer cleans it every weekend.'
      }
    ]
  },
  {
    id: 'a1-11',
    title: 'Our School Library',
    level: 'A1',
    content: [
      'Our school library is on the second floor.',
      'There are many books, newspapers, and magazines there.',
      'Students can read quietly or borrow books to take home.',
      'I often go to the library after lunch.'
    ],
    vocabulary: [
      { word: 'library', meaning: 'thư viện' },
      { word: 'floor', meaning: 'tầng' },
      { word: 'borrow', meaning: 'mượn' },
      { word: 'magazine', meaning: 'tạp chí' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the library?',
        options: ['On the first floor', 'On the second floor', 'Next to the gate', 'Behind the school'],
        correctAnswerIndex: 1,
        explanation: 'The library is on the second floor.'
      },
      {
        id: 'q2',
        text: 'What can students do there?',
        options: ['Play football', 'Cook food', 'Read or borrow books', 'Sleep all day'],
        correctAnswerIndex: 2,
        explanation: 'Students can read or borrow books.'
      },
      {
        id: 'q3',
        text: 'When does the writer go to the library?',
        options: ['Before school', 'After lunch', 'At night', 'On Sunday'],
        correctAnswerIndex: 1,
        explanation: 'The writer often goes there after lunch.'
      }
    ]
  },
  {
    id: 'a1-12',
    title: 'My Teacher',
    level: 'A1',
    content: [
      'My English teacher is Mrs. Green.',
      'She is friendly and teaches us very well.',
      'She always smiles and helps us with difficult words.',
      'I like her lessons very much.'
    ],
    vocabulary: [
      { word: 'teacher', meaning: 'giáo viên' },
      { word: 'friendly', meaning: 'thân thiện' },
      { word: 'difficult', meaning: 'khó' },
      { word: 'lesson', meaning: 'bài học' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What subject does Mrs. Green teach?',
        options: ['Math', 'Science', 'English', 'Music'],
        correctAnswerIndex: 2,
        explanation: 'She is the English teacher.'
      },
      {
        id: 'q2',
        text: 'How is Mrs. Green?',
        options: ['Angry', 'Friendly', 'Lazy', 'Quiet'],
        correctAnswerIndex: 1,
        explanation: 'The passage says she is friendly.'
      },
      {
        id: 'q3',
        text: 'What does she help students with?',
        options: ['Sports', 'Songs', 'Difficult words', 'Painting'],
        correctAnswerIndex: 2,
        explanation: 'She helps students with difficult words.'
      }
    ]
  },
  {
    id: 'a1-13',
    title: 'Lunch at School',
    level: 'A1',
    content: [
      'I have lunch at school at twelve o’clock.',
      'My lunch box usually has rice, chicken, and vegetables.',
      'Sometimes I share fruit with my best friend.',
      'After lunch, we rest for a short time.'
    ],
    vocabulary: [
      { word: 'lunch', meaning: 'bữa trưa' },
      { word: 'vegetables', meaning: 'rau' },
      { word: 'share', meaning: 'chia sẻ' },
      { word: 'rest', meaning: 'nghỉ ngơi' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What time does the writer have lunch?',
        options: ['11 o’clock', '12 o’clock', '1 o’clock', '2 o’clock'],
        correctAnswerIndex: 1,
        explanation: 'The writer has lunch at twelve o’clock.'
      },
      {
        id: 'q2',
        text: 'What is in the lunch box?',
        options: ['Bread and milk', 'Rice, chicken, and vegetables', 'Noodles and eggs', 'Cake and juice'],
        correctAnswerIndex: 1,
        explanation: 'The lunch box has rice, chicken, and vegetables.'
      },
      {
        id: 'q3',
        text: 'What do they do after lunch?',
        options: ['Play football', 'Go home', 'Rest for a short time', 'Do homework'],
        correctAnswerIndex: 2,
        explanation: 'They rest for a short time.'
      }
    ]
  },
  {
    id: 'a1-14',
    title: 'A Visit to the Zoo',
    level: 'A1',
    content: [
      'Last Sunday, my class visited the zoo.',
      'We saw lions, monkeys, elephants, and birds.',
      'My favorite animal was the elephant because it was very big.',
      'We had a great time there.'
    ],
    vocabulary: [
      { word: 'zoo', meaning: 'sở thú' },
      { word: 'lion', meaning: 'sư tử' },
      { word: 'elephant', meaning: 'voi' },
      { word: 'great', meaning: 'tuyệt vời' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When did the class visit the zoo?',
        options: ['Last Saturday', 'Last Sunday', 'Yesterday morning', 'Last Friday'],
        correctAnswerIndex: 1,
        explanation: 'They visited the zoo last Sunday.'
      },
      {
        id: 'q2',
        text: 'What was the writer’s favorite animal?',
        options: ['Lion', 'Monkey', 'Bird', 'Elephant'],
        correctAnswerIndex: 3,
        explanation: 'The favorite animal was the elephant.'
      },
      {
        id: 'q3',
        text: 'Why did the writer like it?',
        options: ['Because it was small', 'Because it was big', 'Because it could sing', 'Because it was blue'],
        correctAnswerIndex: 1,
        explanation: 'The writer liked it because it was very big.'
      }
    ]
  },
  {
    id: 'a1-15',
    title: 'My House',
    level: 'A1',
    content: [
      'I live in a small house with my parents.',
      'Our house has a living room, two bedrooms, a kitchen, and a bathroom.',
      'There is a small garden in front of the house.',
      'I like my room best because it is warm and comfortable.'
    ],
    vocabulary: [
      { word: 'house', meaning: 'ngôi nhà' },
      { word: 'bedroom', meaning: 'phòng ngủ' },
      { word: 'garden', meaning: 'vườn' },
      { word: 'comfortable', meaning: 'thoải mái' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Who does the writer live with?',
        options: ['Grandparents', 'Friends', 'Parents', 'Brother only'],
        correctAnswerIndex: 2,
        explanation: 'The writer lives with parents.'
      },
      {
        id: 'q2',
        text: 'What is in front of the house?',
        options: ['A garage', 'A shop', 'A small garden', 'A park'],
        correctAnswerIndex: 2,
        explanation: 'There is a small garden in front of the house.'
      },
      {
        id: 'q3',
        text: 'Why does the writer like the room best?',
        options: ['It is large', 'It is warm and comfortable', 'It is blue', 'It has many doors'],
        correctAnswerIndex: 1,
        explanation: 'The room is warm and comfortable.'
      }
    ]
  },
  {
    id: 'a1-16',
    title: 'My Favorite Subject',
    level: 'A1',
    content: [
      'My favorite subject is English.',
      'I like learning new words and speaking with my classmates.',
      'Our teacher often uses songs and games in class.',
      'English lessons are fun and useful.'
    ],
    vocabulary: [
      { word: 'subject', meaning: 'môn học' },
      { word: 'learning', meaning: 'học' },
      { word: 'classmate', meaning: 'bạn cùng lớp' },
      { word: 'useful', meaning: 'hữu ích' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the writer’s favorite subject?',
        options: ['Math', 'Music', 'English', 'Science'],
        correctAnswerIndex: 2,
        explanation: 'The favorite subject is English.'
      },
      {
        id: 'q2',
        text: 'What does the writer like learning?',
        options: ['New songs', 'New words', 'New games', 'New numbers'],
        correctAnswerIndex: 1,
        explanation: 'The writer likes learning new words.'
      },
      {
        id: 'q3',
        text: 'How are English lessons?',
        options: ['Long and boring', 'Fun and useful', 'Difficult and sad', 'Short and noisy'],
        correctAnswerIndex: 1,
        explanation: 'The lessons are fun and useful.'
      }
    ]
  },
  {
    id: 'a1-17',
    title: 'A Birthday Party',
    level: 'A1',
    content: [
      'Yesterday was my birthday.',
      'My parents gave me a new school bag.',
      'In the evening, my friends came to my house.',
      'We ate cake, sang songs, and played games.'
    ],
    vocabulary: [
      { word: 'birthday', meaning: 'sinh nhật' },
      { word: 'parents', meaning: 'bố mẹ' },
      { word: 'cake', meaning: 'bánh kem' },
      { word: 'games', meaning: 'trò chơi' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What did the parents give the writer?',
        options: ['A bike', 'A school bag', 'A book', 'A watch'],
        correctAnswerIndex: 1,
        explanation: 'The parents gave a new school bag.'
      },
      {
        id: 'q2',
        text: 'When did the friends come?',
        options: ['In the morning', 'At noon', 'In the evening', 'At midnight'],
        correctAnswerIndex: 2,
        explanation: 'The friends came in the evening.'
      },
      {
        id: 'q3',
        text: 'What did they eat?',
        options: ['Rice', 'Noodles', 'Cake', 'Bread'],
        correctAnswerIndex: 2,
        explanation: 'They ate cake.'
      }
    ]
  },
  {
    id: 'a1-18',
    title: 'My Mother',
    level: 'A1',
    content: [
      'My mother is very kind and hard-working.',
      'She gets up early every day and cooks breakfast for the family.',
      'She works in a hospital.',
      'In the evening, she helps me with my homework.'
    ],
    vocabulary: [
      { word: 'kind', meaning: 'tốt bụng' },
      { word: 'hard-working', meaning: 'chăm chỉ' },
      { word: 'hospital', meaning: 'bệnh viện' },
      { word: 'homework', meaning: 'bài tập về nhà' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How is the mother?',
        options: ['Lazy and quiet', 'Kind and hard-working', 'Funny and short', 'Old and angry'],
        correctAnswerIndex: 1,
        explanation: 'She is kind and hard-working.'
      },
      {
        id: 'q2',
        text: 'Where does she work?',
        options: ['At school', 'In a shop', 'In a hospital', 'At home'],
        correctAnswerIndex: 2,
        explanation: 'She works in a hospital.'
      },
      {
        id: 'q3',
        text: 'What does she do in the evening?',
        options: ['Watches TV only', 'Goes out', 'Helps with homework', 'Plays football'],
        correctAnswerIndex: 2,
        explanation: 'She helps the writer with homework.'
      }
    ]
  },
  {
    id: 'a1-19',
    title: 'My Father',
    level: 'A1',
    content: [
      'My father is tall and strong.',
      'He works in an office from Monday to Friday.',
      'After work, he often waters the plants in our garden.',
      'On weekends, he plays badminton with me.'
    ],
    vocabulary: [
      { word: 'strong', meaning: 'khỏe' },
      { word: 'office', meaning: 'văn phòng' },
      { word: 'plants', meaning: 'cây cối' },
      { word: 'weekends', meaning: 'cuối tuần' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where does the father work?',
        options: ['At home', 'In an office', 'At school', 'In a farm'],
        correctAnswerIndex: 1,
        explanation: 'He works in an office.'
      },
      {
        id: 'q2',
        text: 'What does he do after work?',
        options: ['Reads books', 'Waters the plants', 'Goes shopping', 'Cooks dinner'],
        correctAnswerIndex: 1,
        explanation: 'He waters the plants after work.'
      },
      {
        id: 'q3',
        text: 'What sport does he play on weekends?',
        options: ['Football', 'Basketball', 'Badminton', 'Tennis'],
        correctAnswerIndex: 2,
        explanation: 'He plays badminton on weekends.'
      }
    ]
  },
  {
    id: 'a1-20',
    title: 'My Little Sister',
    level: 'A1',
    content: [
      'I have a little sister named Emma.',
      'She is five years old and goes to kindergarten.',
      'She likes drawing pictures and singing songs.',
      'She is cute and makes everyone smile.'
    ],
    vocabulary: [
      { word: 'sister', meaning: 'chị/em gái' },
      { word: 'kindergarten', meaning: 'mẫu giáo' },
      { word: 'drawing', meaning: 'vẽ' },
      { word: 'smile', meaning: 'mỉm cười' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How old is Emma?',
        options: ['4', '5', '6', '7'],
        correctAnswerIndex: 1,
        explanation: 'Emma is five years old.'
      },
      {
        id: 'q2',
        text: 'Where does she go?',
        options: ['Primary school', 'Middle school', 'Kindergarten', 'Library'],
        correctAnswerIndex: 2,
        explanation: 'She goes to kindergarten.'
      },
      {
        id: 'q3',
        text: 'What does she like doing?',
        options: ['Cooking and cleaning', 'Drawing and singing', 'Reading newspapers', 'Playing chess'],
        correctAnswerIndex: 1,
        explanation: 'She likes drawing pictures and singing songs.'
      }
    ]
  },
  {
    id: 'a1-21',
    title: 'At the Bus Stop',
    level: 'A1',
    content: [
      'Every morning, I wait for the bus at the bus stop near my house.',
      'Many students stand there with me.',
      'The bus comes at seven fifteen.',
      'We talk together while we wait.'
    ],
    vocabulary: [
      { word: 'bus stop', meaning: 'trạm xe buýt' },
      { word: 'wait', meaning: 'đợi' },
      { word: 'students', meaning: 'học sinh' },
      { word: 'talk', meaning: 'nói chuyện' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the bus stop?',
        options: ['Near the school', 'Near the house', 'In the park', 'Behind the store'],
        correctAnswerIndex: 1,
        explanation: 'The bus stop is near the house.'
      },
      {
        id: 'q2',
        text: 'What time does the bus come?',
        options: ['7:00', '7:10', '7:15', '7:30'],
        correctAnswerIndex: 2,
        explanation: 'The bus comes at seven fifteen.'
      },
      {
        id: 'q3',
        text: 'What do they do while waiting?',
        options: ['Sleep', 'Run', 'Talk together', 'Eat lunch'],
        correctAnswerIndex: 2,
        explanation: 'They talk together while waiting.'
      }
    ]
  },
  {
    id: 'a1-22',
    title: 'A New Student',
    level: 'A1',
    content: [
      'Today, there is a new student in our class.',
      'His name is David, and he comes from Australia.',
      'He is friendly and can play the guitar well.',
      'We are happy to have him in our class.'
    ],
    vocabulary: [
      { word: 'student', meaning: 'học sinh' },
      { word: 'Australia', meaning: 'Úc' },
      { word: 'friendly', meaning: 'thân thiện' },
      { word: 'guitar', meaning: 'đàn guitar' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the new student’s name?',
        options: ['Tom', 'David', 'Peter', 'Ben'],
        correctAnswerIndex: 1,
        explanation: 'The new student’s name is David.'
      },
      {
        id: 'q2',
        text: 'Where does he come from?',
        options: ['England', 'Canada', 'Australia', 'America'],
        correctAnswerIndex: 2,
        explanation: 'He comes from Australia.'
      },
      {
        id: 'q3',
        text: 'What can he do well?',
        options: ['Play football', 'Play the guitar', 'Draw pictures', 'Speak French'],
        correctAnswerIndex: 1,
        explanation: 'He can play the guitar well.'
      }
    ]
  },
  {
    id: 'a1-23',
    title: 'My Favorite Animal',
    level: 'A1',
    content: [
      'My favorite animal is the rabbit.',
      'It has long ears, red eyes, and soft white fur.',
      'Rabbits like eating carrots and vegetables.',
      'I think rabbits are very lovely.'
    ],
    vocabulary: [
      { word: 'rabbit', meaning: 'thỏ' },
      { word: 'ears', meaning: 'tai' },
      { word: 'carrots', meaning: 'cà rốt' },
      { word: 'lovely', meaning: 'đáng yêu' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the writer’s favorite animal?',
        options: ['Dog', 'Cat', 'Rabbit', 'Bird'],
        correctAnswerIndex: 2,
        explanation: 'The favorite animal is the rabbit.'
      },
      {
        id: 'q2',
        text: 'What color are its eyes?',
        options: ['Blue', 'Black', 'Green', 'Red'],
        correctAnswerIndex: 3,
        explanation: 'The rabbit has red eyes.'
      },
      {
        id: 'q3',
        text: 'What do rabbits like eating?',
        options: ['Fish', 'Rice', 'Carrots and vegetables', 'Meat'],
        correctAnswerIndex: 2,
        explanation: 'Rabbits like eating carrots and vegetables.'
      }
    ]
  },
  {
    id: 'a1-24',
    title: 'After-School Activities',
    level: 'A1',
    content: [
      'After school, I do many activities.',
      'On Monday, I play basketball.',
      'On Wednesday, I go to the music club.',
      'On Friday, I help my mother at home.'
    ],
    vocabulary: [
      { word: 'activities', meaning: 'hoạt động' },
      { word: 'basketball', meaning: 'bóng rổ' },
      { word: 'music club', meaning: 'câu lạc bộ âm nhạc' },
      { word: 'help', meaning: 'giúp đỡ' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does the writer do on Monday?',
        options: ['Play football', 'Play basketball', 'Read books', 'Go shopping'],
        correctAnswerIndex: 1,
        explanation: 'The writer plays basketball on Monday.'
      },
      {
        id: 'q2',
        text: 'When does the writer go to the music club?',
        options: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
        correctAnswerIndex: 2,
        explanation: 'The writer goes to the music club on Wednesday.'
      },
      {
        id: 'q3',
        text: 'What does the writer do on Friday?',
        options: ['Visits friends', 'Helps mother at home', 'Goes to the zoo', 'Plays games'],
        correctAnswerIndex: 1,
        explanation: 'The writer helps mother at home on Friday.'
      }
    ]
  },
  {
    id: 'a1-25',
    title: 'My Favorite Season',
    level: 'A1',
    content: [
      'My favorite season is spring.',
      'The weather is warm, and the flowers bloom everywhere.',
      'I can go outside and play with my friends.',
      'Spring makes me feel happy.'
    ],
    vocabulary: [
      { word: 'season', meaning: 'mùa' },
      { word: 'spring', meaning: 'mùa xuân' },
      { word: 'bloom', meaning: 'nở hoa' },
      { word: 'outside', meaning: 'bên ngoài' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the writer’s favorite season?',
        options: ['Summer', 'Autumn', 'Winter', 'Spring'],
        correctAnswerIndex: 3,
        explanation: 'The favorite season is spring.'
      },
      {
        id: 'q2',
        text: 'What is the weather like in spring?',
        options: ['Hot', 'Warm', 'Cold', 'Stormy'],
        correctAnswerIndex: 1,
        explanation: 'The weather is warm.'
      },
      {
        id: 'q3',
        text: 'How does spring make the writer feel?',
        options: ['Sad', 'Angry', 'Happy', 'Tired'],
        correctAnswerIndex: 2,
        explanation: 'Spring makes the writer feel happy.'
      }
    ]
  },
  {
    id: 'a1-26',
    title: 'At the Beach',
    level: 'A1',
    content: [
      'Last summer, my family went to the beach.',
      'The sea was blue and the sand was soft.',
      'My brother and I swam in the water.',
      'My parents sat under a big umbrella.'
    ],
    vocabulary: [
      { word: 'beach', meaning: 'bãi biển' },
      { word: 'sea', meaning: 'biển' },
      { word: 'sand', meaning: 'cát' },
      { word: 'umbrella', meaning: 'ô' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When did the family go to the beach?',
        options: ['Last winter', 'Last summer', 'Last spring', 'Last week'],
        correctAnswerIndex: 1,
        explanation: 'They went to the beach last summer.'
      },
      {
        id: 'q2',
        text: 'What was soft?',
        options: ['The sea', 'The chair', 'The sand', 'The bag'],
        correctAnswerIndex: 2,
        explanation: 'The sand was soft.'
      },
      {
        id: 'q3',
        text: 'Where did the parents sit?',
        options: ['In the car', 'Under a big umbrella', 'In the sea', 'At home'],
        correctAnswerIndex: 1,
        explanation: 'The parents sat under a big umbrella.'
      }
    ]
  },
  {
    id: 'a1-27',
    title: 'My Favorite Drink',
    level: 'A1',
    content: [
      'My favorite drink is orange juice.',
      'It is sweet, fresh, and good for my health.',
      'I often drink it in the morning.',
      'My mother makes orange juice at home.'
    ],
    vocabulary: [
      { word: 'drink', meaning: 'đồ uống' },
      { word: 'fresh', meaning: 'tươi' },
      { word: 'health', meaning: 'sức khỏe' },
      { word: 'morning', meaning: 'buổi sáng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the writer’s favorite drink?',
        options: ['Milk', 'Tea', 'Orange juice', 'Water'],
        correctAnswerIndex: 2,
        explanation: 'The favorite drink is orange juice.'
      },
      {
        id: 'q2',
        text: 'When does the writer often drink it?',
        options: ['At night', 'In the afternoon', 'In the morning', 'At noon'],
        correctAnswerIndex: 2,
        explanation: 'The writer often drinks it in the morning.'
      },
      {
        id: 'q3',
        text: 'Who makes it at home?',
        options: ['Father', 'Mother', 'Brother', 'Friend'],
        correctAnswerIndex: 1,
        explanation: 'The mother makes orange juice at home.'
      }
    ]
  },
  {
    id: 'a1-28',
    title: 'A Trip to the Bookstore',
    level: 'A1',
    content: [
      'On Saturday afternoon, I went to the bookstore with my cousin.',
      'There were many books, pens, and school things there.',
      'I bought an English storybook and a blue notebook.',
      'I was very happy with my new books.'
    ],
    vocabulary: [
      { word: 'bookstore', meaning: 'hiệu sách' },
      { word: 'cousin', meaning: 'anh/chị/em họ' },
      { word: 'notebook', meaning: 'quyển vở' },
      { word: 'storybook', meaning: 'sách truyện' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Who did the writer go with?',
        options: ['Mother', 'Cousin', 'Teacher', 'Friend'],
        correctAnswerIndex: 1,
        explanation: 'The writer went with the cousin.'
      },
      {
        id: 'q2',
        text: 'What did the writer buy?',
        options: ['A toy and a ruler', 'A bag and a pencil', 'A storybook and a notebook', 'A shirt and a book'],
        correctAnswerIndex: 2,
        explanation: 'The writer bought an English storybook and a blue notebook.'
      },
      {
        id: 'q3',
        text: 'How did the writer feel?',
        options: ['Sad', 'Happy', 'Tired', 'Hungry'],
        correctAnswerIndex: 1,
        explanation: 'The writer was very happy.'
      }
    ]
  },
  {
    id: 'a1-29',
    title: 'My Grandparents',
    level: 'A1',
    content: [
      'My grandparents live in the countryside.',
      'Their house is near a river and many green fields.',
      'They grow vegetables and keep some chickens.',
      'I visit them every summer.'
    ],
    vocabulary: [
      { word: 'grandparents', meaning: 'ông bà' },
      { word: 'countryside', meaning: 'nông thôn' },
      { word: 'fields', meaning: 'cánh đồng' },
      { word: 'chickens', meaning: 'gà' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where do the grandparents live?',
        options: ['In the city', 'In the countryside', 'Near the school', 'On an island'],
        correctAnswerIndex: 1,
        explanation: 'They live in the countryside.'
      },
      {
        id: 'q2',
        text: 'What do they grow?',
        options: ['Flowers only', 'Vegetables', 'Rice only', 'Trees only'],
        correctAnswerIndex: 1,
        explanation: 'They grow vegetables.'
      },
      {
        id: 'q3',
        text: 'When does the writer visit them?',
        options: ['Every winter', 'Every spring', 'Every summer', 'Every autumn'],
        correctAnswerIndex: 2,
        explanation: 'The writer visits them every summer.'
      }
    ]
  },
  {
    id: 'a1-30',
    title: 'Cleaning Day',
    level: 'A1',
    content: [
      'Every Saturday morning, my family cleans the house.',
      'My father cleans the windows, and my mother cleans the kitchen.',
      'I sweep the floor and tidy my room.',
      'After that, our house looks very nice.'
    ],
    vocabulary: [
      { word: 'clean', meaning: 'lau dọn' },
      { word: 'windows', meaning: 'cửa sổ' },
      { word: 'sweep', meaning: 'quét' },
      { word: 'tidy', meaning: 'dọn gọn gàng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When does the family clean the house?',
        options: ['Saturday morning', 'Sunday morning', 'Friday evening', 'Monday afternoon'],
        correctAnswerIndex: 0,
        explanation: 'They clean the house every Saturday morning.'
      },
      {
        id: 'q2',
        text: 'Who cleans the kitchen?',
        options: ['Father', 'Mother', 'Brother', 'The writer'],
        correctAnswerIndex: 1,
        explanation: 'The mother cleans the kitchen.'
      },
      {
        id: 'q3',
        text: 'What does the writer do?',
        options: ['Clean windows', 'Cook food', 'Sweep the floor and tidy the room', 'Water plants'],
        correctAnswerIndex: 2,
        explanation: 'The writer sweeps the floor and tidies the room.'
      }
    ]
  },
  {
    id: 'a1-31',
    title: 'My School Bag',
    level: 'A1',
    content: [
      'My school bag is new and strong.',
      'It is red and has two big pockets.',
      'I put my books, pens, ruler, and lunch box in it.',
      'I always keep my bag clean.'
    ],
    vocabulary: [
      { word: 'school bag', meaning: 'cặp sách' },
      { word: 'strong', meaning: 'chắc chắn' },
      { word: 'pocket', meaning: 'ngăn túi' },
      { word: 'ruler', meaning: 'thước kẻ' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What color is the school bag?',
        options: ['Blue', 'Green', 'Red', 'Black'],
        correctAnswerIndex: 2,
        explanation: 'The bag is red.'
      },
      {
        id: 'q2',
        text: 'How many big pockets does it have?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswerIndex: 1,
        explanation: 'It has two big pockets.'
      },
      {
        id: 'q3',
        text: 'What does the writer keep in the bag?',
        options: ['Toys only', 'Books and school things', 'Food only', 'Clothes'],
        correctAnswerIndex: 1,
        explanation: 'The writer puts books, pens, a ruler, and a lunch box in it.'
      }
    ]
  },
  {
    id: 'a1-32',
    title: 'Playing in the Yard',
    level: 'A1',
    content: [
      'During break time, we play in the school yard.',
      'Some students skip rope and some play tag.',
      'I usually play badminton with my friend Nam.',
      'We have a lot of fun together.'
    ],
    vocabulary: [
      { word: 'break time', meaning: 'giờ ra chơi' },
      { word: 'yard', meaning: 'sân' },
      { word: 'skip rope', meaning: 'nhảy dây' },
      { word: 'tag', meaning: 'đuổi bắt' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When do the students play in the yard?',
        options: ['After school', 'During break time', 'At lunch time', 'At night'],
        correctAnswerIndex: 1,
        explanation: 'They play in the yard during break time.'
      },
      {
        id: 'q2',
        text: 'What does the writer usually play?',
        options: ['Football', 'Chess', 'Badminton', 'Volleyball'],
        correctAnswerIndex: 2,
        explanation: 'The writer usually plays badminton.'
      },
      {
        id: 'q3',
        text: 'Who does the writer play with?',
        options: ['Lucy', 'Tom', 'Nam', 'David'],
        correctAnswerIndex: 2,
        explanation: 'The writer plays with Nam.'
      }
    ]
  },
  {
    id: 'a1-33',
    title: 'A Good Pupil',
    level: 'A1',
    content: [
      'Lan is a good pupil in my class.',
      'She always comes to school on time.',
      'She listens carefully to the teacher and does her homework every day.',
      'Her teachers like her very much.'
    ],
    vocabulary: [
      { word: 'pupil', meaning: 'học sinh' },
      { word: 'on time', meaning: 'đúng giờ' },
      { word: 'carefully', meaning: 'cẩn thận' },
      { word: 'homework', meaning: 'bài tập về nhà' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Who is Lan?',
        options: ['A teacher', 'A doctor', 'A good pupil', 'A singer'],
        correctAnswerIndex: 2,
        explanation: 'Lan is a good pupil.'
      },
      {
        id: 'q2',
        text: 'What does she do every day?',
        options: ['Plays games', 'Does homework', 'Skips school', 'Sleeps in class'],
        correctAnswerIndex: 1,
        explanation: 'She does her homework every day.'
      },
      {
        id: 'q3',
        text: 'How do her teachers feel about her?',
        options: ['They do not know her', 'They like her very much', 'They are angry with her', 'They are afraid of her'],
        correctAnswerIndex: 1,
        explanation: 'Her teachers like her very much.'
      }
    ]
  },
  {
    id: 'a1-34',
    title: 'My Favorite Toy',
    level: 'A1',
    content: [
      'My favorite toy is a teddy bear.',
      'It is brown and very soft.',
      'My aunt gave it to me on my seventh birthday.',
      'I sleep with it every night.'
    ],
    vocabulary: [
      { word: 'toy', meaning: 'đồ chơi' },
      { word: 'teddy bear', meaning: 'gấu bông' },
      { word: 'soft', meaning: 'mềm' },
      { word: 'birthday', meaning: 'sinh nhật' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the favorite toy?',
        options: ['A robot', 'A ball', 'A teddy bear', 'A kite'],
        correctAnswerIndex: 2,
        explanation: 'The favorite toy is a teddy bear.'
      },
      {
        id: 'q2',
        text: 'Who gave it to the writer?',
        options: ['Mother', 'Father', 'Aunt', 'Friend'],
        correctAnswerIndex: 2,
        explanation: 'The aunt gave it to the writer.'
      },
      {
        id: 'q3',
        text: 'When did the writer get it?',
        options: ['On the sixth birthday', 'On the seventh birthday', 'At New Year', 'Last summer'],
        correctAnswerIndex: 1,
        explanation: 'The writer got it on the seventh birthday.'
      }
    ]
  },
  {
    id: 'a1-35',
    title: 'In the Garden',
    level: 'A1',
    content: [
      'There is a small garden behind our house.',
      'We grow roses, sunflowers, and some vegetables there.',
      'Every afternoon, I water the plants with my mother.',
      'The garden is beautiful and fresh.'
    ],
    vocabulary: [
      { word: 'garden', meaning: 'khu vườn' },
      { word: 'behind', meaning: 'phía sau' },
      { word: 'sunflowers', meaning: 'hoa hướng dương' },
      { word: 'water', meaning: 'tưới nước' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the garden?',
        options: ['In front of the house', 'Behind the house', 'Next to the school', 'In the park'],
        correctAnswerIndex: 1,
        explanation: 'The garden is behind the house.'
      },
      {
        id: 'q2',
        text: 'What do they grow there?',
        options: ['Only trees', 'Flowers and vegetables', 'Only grass', 'Only fruit'],
        correctAnswerIndex: 1,
        explanation: 'They grow roses, sunflowers, and vegetables.'
      },
      {
        id: 'q3',
        text: 'When does the writer water the plants?',
        options: ['Every morning', 'Every afternoon', 'Every evening', 'Every Sunday'],
        correctAnswerIndex: 1,
        explanation: 'The writer waters the plants every afternoon.'
      }
    ]
  },
  {
    id: 'a1-36',
    title: 'A Football Match',
    level: 'A1',
    content: [
      'Yesterday, our class had a football match with Class 5B.',
      'We played on the school field in the afternoon.',
      'My friend Minh scored two goals.',
      'Our class won the match and everyone was excited.'
    ],
    vocabulary: [
      { word: 'match', meaning: 'trận đấu' },
      { word: 'field', meaning: 'sân' },
      { word: 'goal', meaning: 'bàn thắng' },
      { word: 'excited', meaning: 'hào hứng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Who did the class play with?',
        options: ['Class 4A', 'Class 5A', 'Class 5B', 'Class 6A'],
        correctAnswerIndex: 2,
        explanation: 'They played with Class 5B.'
      },
      {
        id: 'q2',
        text: 'How many goals did Minh score?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswerIndex: 1,
        explanation: 'Minh scored two goals.'
      },
      {
        id: 'q3',
        text: 'What happened at the end?',
        options: ['They lost', 'It rained', 'Their class won', 'The match stopped'],
        correctAnswerIndex: 2,
        explanation: 'Their class won the match.'
      }
    ]
  },
  {
    id: 'a1-37',
    title: 'My Favorite Fruit',
    level: 'A1',
    content: [
      'My favorite fruit is the banana.',
      'It is yellow, soft, and sweet.',
      'I often eat bananas at breakfast.',
      'My mother says bananas are good for health.'
    ],
    vocabulary: [
      { word: 'fruit', meaning: 'trái cây' },
      { word: 'banana', meaning: 'chuối' },
      { word: 'sweet', meaning: 'ngọt' },
      { word: 'health', meaning: 'sức khỏe' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the writer’s favorite fruit?',
        options: ['Apple', 'Orange', 'Banana', 'Mango'],
        correctAnswerIndex: 2,
        explanation: 'The favorite fruit is the banana.'
      },
      {
        id: 'q2',
        text: 'What color is it?',
        options: ['Red', 'Yellow', 'Green', 'Purple'],
        correctAnswerIndex: 1,
        explanation: 'The banana is yellow.'
      },
      {
        id: 'q3',
        text: 'When does the writer often eat it?',
        options: ['At lunch', 'At dinner', 'At breakfast', 'At night'],
        correctAnswerIndex: 2,
        explanation: 'The writer often eats bananas at breakfast.'
      }
    ]
  },
  {
    id: 'a1-38',
    title: 'My Neighbor',
    level: 'A1',
    content: [
      'My neighbor is Mr. Brown.',
      'He is old but very friendly.',
      'He has a small dog and many flowers in front of his house.',
      'He always says hello when he sees me.'
    ],
    vocabulary: [
      { word: 'neighbor', meaning: 'hàng xóm' },
      { word: 'friendly', meaning: 'thân thiện' },
      { word: 'flowers', meaning: 'hoa' },
      { word: 'hello', meaning: 'xin chào' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Who is the writer’s neighbor?',
        options: ['Mr. Brown', 'Mrs. Green', 'Tom', 'David'],
        correctAnswerIndex: 0,
        explanation: 'The neighbor is Mr. Brown.'
      },
      {
        id: 'q2',
        text: 'How is he?',
        options: ['Unfriendly', 'Old and friendly', 'Young and funny', 'Busy and quiet'],
        correctAnswerIndex: 1,
        explanation: 'He is old but very friendly.'
      },
      {
        id: 'q3',
        text: 'What does he always say?',
        options: ['Goodbye', 'Thank you', 'Hello', 'Sorry'],
        correctAnswerIndex: 2,
        explanation: 'He always says hello.'
      }
    ]
  },
  {
    id: 'a1-39',
    title: 'A Day in Winter',
    level: 'A1',
    content: [
      'Winter is very cold in my town.',
      'I wear a warm coat, a scarf, and gloves.',
      'Sometimes I drink hot soup after school.',
      'I like winter because I can stay with my family at home.'
    ],
    vocabulary: [
      { word: 'winter', meaning: 'mùa đông' },
      { word: 'scarf', meaning: 'khăn quàng' },
      { word: 'gloves', meaning: 'găng tay' },
      { word: 'soup', meaning: 'súp' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How is winter in the writer’s town?',
        options: ['Hot', 'Warm', 'Cold', 'Dry'],
        correctAnswerIndex: 2,
        explanation: 'Winter is very cold.'
      },
      {
        id: 'q2',
        text: 'What does the writer wear?',
        options: ['A hat only', 'A warm coat, a scarf, and gloves', 'A T-shirt', 'Shorts and shoes'],
        correctAnswerIndex: 1,
        explanation: 'The writer wears a warm coat, a scarf, and gloves.'
      },
      {
        id: 'q3',
        text: 'What does the writer sometimes drink?',
        options: ['Cold milk', 'Orange juice', 'Hot soup', 'Tea only'],
        correctAnswerIndex: 2,
        explanation: 'The writer sometimes drinks hot soup.'
      }
    ]
  },
  {
    id: 'a1-40',
    title: 'My Favorite Song',
    level: 'A1',
    content: [
      'My favorite song is a happy children’s song.',
      'I first heard it at school music class.',
      'The song is easy to sing and remember.',
      'I often sing it with my little sister.'
    ],
    vocabulary: [
      { word: 'song', meaning: 'bài hát' },
      { word: 'music class', meaning: 'giờ học nhạc' },
      { word: 'remember', meaning: 'ghi nhớ' },
      { word: 'sing', meaning: 'hát' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where did the writer first hear the song?',
        options: ['At home', 'At school music class', 'On TV', 'At the park'],
        correctAnswerIndex: 1,
        explanation: 'The writer first heard it at school music class.'
      },
      {
        id: 'q2',
        text: 'How is the song?',
        options: ['Long and difficult', 'Easy to sing and remember', 'Sad and slow', 'Very noisy'],
        correctAnswerIndex: 1,
        explanation: 'The song is easy to sing and remember.'
      },
      {
        id: 'q3',
        text: 'Who does the writer sing it with?',
        options: ['Father', 'Friend', 'Teacher', 'Little sister'],
        correctAnswerIndex: 3,
        explanation: 'The writer sings it with the little sister.'
      }
    ]
  },
  {
    id: 'a1-41',
    title: 'Going to School by Bike',
    level: 'A1',
    content: [
      'I go to school by bike every day.',
      'The road is safe and not very busy in the morning.',
      'It takes me fifteen minutes to get to school.',
      'Riding a bike is good exercise.'
    ],
    vocabulary: [
      { word: 'bike', meaning: 'xe đạp' },
      { word: 'road', meaning: 'con đường' },
      { word: 'safe', meaning: 'an toàn' },
      { word: 'exercise', meaning: 'tập thể dục' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How does the writer go to school?',
        options: ['By bus', 'By bike', 'By car', 'On foot'],
        correctAnswerIndex: 1,
        explanation: 'The writer goes to school by bike.'
      },
      {
        id: 'q2',
        text: 'How long does it take?',
        options: ['10 minutes', '15 minutes', '20 minutes', '25 minutes'],
        correctAnswerIndex: 1,
        explanation: 'It takes fifteen minutes.'
      },
      {
        id: 'q3',
        text: 'Why is riding a bike good?',
        options: ['It is cheap only', 'It is fast only', 'It is good exercise', 'It is quiet only'],
        correctAnswerIndex: 2,
        explanation: 'Riding a bike is good exercise.'
      }
    ]
  },
  {
    id: 'a1-42',
    title: 'The School Canteen',
    level: 'A1',
    content: [
      'Our school canteen is behind the main building.',
      'Students can buy rice, noodles, milk, and fruit there.',
      'The food is clean and delicious.',
      'I usually buy a carton of milk at break time.'
    ],
    vocabulary: [
      { word: 'canteen', meaning: 'căng tin' },
      { word: 'main building', meaning: 'tòa nhà chính' },
      { word: 'delicious', meaning: 'ngon' },
      { word: 'carton', meaning: 'hộp' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the canteen?',
        options: ['In front of the gate', 'Beside the field', 'Behind the main building', 'On the second floor'],
        correctAnswerIndex: 2,
        explanation: 'The canteen is behind the main building.'
      },
      {
        id: 'q2',
        text: 'What can students buy there?',
        options: ['Books and rulers', 'Rice, noodles, milk, and fruit', 'Clothes and shoes', 'Toys and games'],
        correctAnswerIndex: 1,
        explanation: 'Students can buy food and drinks there.'
      },
      {
        id: 'q3',
        text: 'What does the writer usually buy?',
        options: ['A sandwich', 'A carton of milk', 'A bowl of noodles', 'An apple'],
        correctAnswerIndex: 1,
        explanation: 'The writer usually buys a carton of milk.'
      }
    ]
  },
  {
    id: 'a1-43',
    title: 'My Morning Exercise',
    level: 'A1',
    content: [
      'Every morning, I do exercise in the park.',
      'I walk around the lake and stretch my arms and legs.',
      'My father sometimes goes with me.',
      'Exercise helps me stay healthy.'
    ],
    vocabulary: [
      { word: 'exercise', meaning: 'tập thể dục' },
      { word: 'lake', meaning: 'hồ' },
      { word: 'stretch', meaning: 'duỗi' },
      { word: 'healthy', meaning: 'khỏe mạnh' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where does the writer do exercise?',
        options: ['At school', 'In the park', 'At home', 'In the gym'],
        correctAnswerIndex: 1,
        explanation: 'The writer does exercise in the park.'
      },
      {
        id: 'q2',
        text: 'What does the writer do around the lake?',
        options: ['Runs fast', 'Walks around it', 'Swims in it', 'Sits near it'],
        correctAnswerIndex: 1,
        explanation: 'The writer walks around the lake.'
      },
      {
        id: 'q3',
        text: 'Who sometimes goes with the writer?',
        options: ['Mother', 'Friend', 'Father', 'Teacher'],
        correctAnswerIndex: 2,
        explanation: 'The father sometimes goes with the writer.'
      }
    ]
  },
  {
    id: 'a1-44',
    title: 'A Small Shop',
    level: 'A1',
    content: [
      'There is a small shop near my house.',
      'The shop sells bread, milk, candy, and school things.',
      'The shopkeeper is very kind to children.',
      'I often buy pens there.'
    ],
    vocabulary: [
      { word: 'shop', meaning: 'cửa hàng' },
      { word: 'sells', meaning: 'bán' },
      { word: 'shopkeeper', meaning: 'người bán hàng' },
      { word: 'pens', meaning: 'bút' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the shop?',
        options: ['Near the school', 'Near the house', 'In the market', 'Behind the park'],
        correctAnswerIndex: 1,
        explanation: 'The shop is near the house.'
      },
      {
        id: 'q2',
        text: 'What does the shop sell?',
        options: ['Only food', 'Only clothes', 'Food and school things', 'Only toys'],
        correctAnswerIndex: 2,
        explanation: 'The shop sells bread, milk, candy, and school things.'
      },
      {
        id: 'q3',
        text: 'What does the writer often buy?',
        options: ['Books', 'Pens', 'Shoes', 'Flowers'],
        correctAnswerIndex: 1,
        explanation: 'The writer often buys pens there.'
      }
    ]
  },
  {
    id: 'a1-45',
    title: 'At the Hospital',
    level: 'A1',
    content: [
      'Yesterday, I had a bad cough, so my mother took me to the hospital.',
      'The doctor was kind and checked my throat.',
      'He gave me some medicine and told me to rest.',
      'Today I feel much better.'
    ],
    vocabulary: [
      { word: 'cough', meaning: 'ho' },
      { word: 'hospital', meaning: 'bệnh viện' },
      { word: 'doctor', meaning: 'bác sĩ' },
      { word: 'medicine', meaning: 'thuốc' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why did the writer go to the hospital?',
        options: ['Because of a headache', 'Because of a bad cough', 'Because of a toothache', 'Because of a fever'],
        correctAnswerIndex: 1,
        explanation: 'The writer had a bad cough.'
      },
      {
        id: 'q2',
        text: 'What did the doctor do?',
        options: ['Gave homework', 'Checked the throat', 'Played games', 'Called the teacher'],
        correctAnswerIndex: 1,
        explanation: 'The doctor checked the throat.'
      },
      {
        id: 'q3',
        text: 'How does the writer feel today?',
        options: ['Worse', 'Sleepy', 'Much better', 'Hungry'],
        correctAnswerIndex: 2,
        explanation: 'Today the writer feels much better.'
      }
    ]
  },
  {
    id: 'a1-46',
    title: 'A Picnic Day',
    level: 'A1',
    content: [
      'Last weekend, my family had a picnic in the countryside.',
      'We took sandwiches, fruit, and juice with us.',
      'My brother flew a kite, and I played with my ball.',
      'It was a wonderful day.'
    ],
    vocabulary: [
      { word: 'picnic', meaning: 'buổi dã ngoại' },
      { word: 'countryside', meaning: 'nông thôn' },
      { word: 'sandwiches', meaning: 'bánh mì kẹp' },
      { word: 'kite', meaning: 'diều' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where did the family have a picnic?',
        options: ['At the beach', 'In the countryside', 'At school', 'In the city'],
        correctAnswerIndex: 1,
        explanation: 'They had a picnic in the countryside.'
      },
      {
        id: 'q2',
        text: 'What did they take with them?',
        options: ['Rice and tea', 'Sandwiches, fruit, and juice', 'Soup and milk', 'Pizza and cola'],
        correctAnswerIndex: 1,
        explanation: 'They took sandwiches, fruit, and juice.'
      },
      {
        id: 'q3',
        text: 'What did the brother do?',
        options: ['Played football', 'Flew a kite', 'Read a book', 'Cooked food'],
        correctAnswerIndex: 1,
        explanation: 'The brother flew a kite.'
      }
    ]
  },
  {
    id: 'a1-47',
    title: 'My Computer Class',
    level: 'A1',
    content: [
      'I have computer class on Thursday.',
      'In class, we learn how to use a computer and type simple words.',
      'The teacher shows us pictures on the screen.',
      'I like computer class very much.'
    ],
    vocabulary: [
      { word: 'computer', meaning: 'máy tính' },
      { word: 'type', meaning: 'gõ chữ' },
      { word: 'screen', meaning: 'màn hình' },
      { word: 'class', meaning: 'lớp học' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When does the writer have computer class?',
        options: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
        correctAnswerIndex: 2,
        explanation: 'The writer has computer class on Thursday.'
      },
      {
        id: 'q2',
        text: 'What do they learn to do?',
        options: ['Cook food', 'Type simple words', 'Draw maps', 'Ride bikes'],
        correctAnswerIndex: 1,
        explanation: 'They learn to type simple words.'
      },
      {
        id: 'q3',
        text: 'What does the teacher show?',
        options: ['Games on paper', 'Pictures on the screen', 'Books in the bag', 'Pens on the table'],
        correctAnswerIndex: 1,
        explanation: 'The teacher shows pictures on the screen.'
      }
    ]
  },
  {
    id: 'a1-48',
    title: 'The Weather Today',
    level: 'A1',
    content: [
      'Today the weather is sunny and cool.',
      'The sky is blue, and there are no clouds.',
      'Many children are playing outside.',
      'It is a good day for a walk.'
    ],
    vocabulary: [
      { word: 'weather', meaning: 'thời tiết' },
      { word: 'sunny', meaning: 'nắng' },
      { word: 'clouds', meaning: 'mây' },
      { word: 'outside', meaning: 'ngoài trời' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the weather like today?',
        options: ['Rainy and cold', 'Sunny and cool', 'Windy and hot', 'Cloudy and wet'],
        correctAnswerIndex: 1,
        explanation: 'Today is sunny and cool.'
      },
      {
        id: 'q2',
        text: 'What color is the sky?',
        options: ['Gray', 'Black', 'Blue', 'Yellow'],
        correctAnswerIndex: 2,
        explanation: 'The sky is blue.'
      },
      {
        id: 'q3',
        text: 'What are many children doing?',
        options: ['Sleeping', 'Studying', 'Playing outside', 'Eating lunch'],
        correctAnswerIndex: 2,
        explanation: 'Many children are playing outside.'
      }
    ]
  },
  {
    id: 'a1-49',
    title: 'Our Art Class',
    level: 'A1',
    content: [
      'We have art class every Wednesday afternoon.',
      'In art class, we draw animals, flowers, and houses.',
      'My best picture is a big yellow sun over the sea.',
      'Art class helps me feel relaxed.'
    ],
    vocabulary: [
      { word: 'art class', meaning: 'giờ mỹ thuật' },
      { word: 'draw', meaning: 'vẽ' },
      { word: 'picture', meaning: 'bức tranh' },
      { word: 'relaxed', meaning: 'thư giãn' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When do they have art class?',
        options: ['Monday afternoon', 'Wednesday afternoon', 'Friday morning', 'Saturday morning'],
        correctAnswerIndex: 1,
        explanation: 'They have art class every Wednesday afternoon.'
      },
      {
        id: 'q2',
        text: 'What do they draw in art class?',
        options: ['Only people', 'Animals, flowers, and houses', 'Cars only', 'Maps only'],
        correctAnswerIndex: 1,
        explanation: 'They draw animals, flowers, and houses.'
      },
      {
        id: 'q3',
        text: 'How does art class make the writer feel?',
        options: ['Relaxed', 'Tired', 'Hungry', 'Nervous'],
        correctAnswerIndex: 0,
        explanation: 'Art class helps the writer feel relaxed.'
      }
    ]
  },
  {
    id: 'a1-50',
    title: 'My Dream Job',
    level: 'A1',
    content: [
      'When I grow up, I want to be a teacher.',
      'I like helping children learn new things.',
      'A teacher can read stories, write on the board, and teach songs.',
      'I think this job is important and meaningful.'
    ],
    vocabulary: [
      { word: 'dream job', meaning: 'nghề nghiệp mơ ước' },
      { word: 'grow up', meaning: 'lớn lên' },
      { word: 'important', meaning: 'quan trọng' },
      { word: 'meaningful', meaning: 'ý nghĩa' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does the writer want to be?',
        options: ['A doctor', 'A singer', 'A teacher', 'A driver'],
        correctAnswerIndex: 2,
        explanation: 'The writer wants to be a teacher.'
      },
      {
        id: 'q2',
        text: 'Why does the writer like this job?',
        options: ['Because it is easy', 'Because it helps children learn new things', 'Because it has long holidays only', 'Because it is quiet'],
        correctAnswerIndex: 1,
        explanation: 'The writer likes helping children learn new things.'
      },
      {
        id: 'q3',
        text: 'How does the writer think about this job?',
        options: ['Boring', 'Difficult only', 'Important and meaningful', 'Too hard'],
        correctAnswerIndex: 2,
        explanation: 'The writer thinks the job is important and meaningful.'
      }
    ]
  }
];