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
  },

  {
    id: 'a1-4',
    title: 'My Favorite Hobby',
    level: 'A1',
    content: [
      "I love playing football. It is my favorite hobby.",
      "I play football in the park every Sunday with my friends.",
      "Football is fun and it helps me stay active and strong.",
      "After the game, we usually go to a small cafe to drink water."
    ],
    vocabulary: [
      { word: 'Hobby', meaning: 'Sở thích' },
      { word: 'Park', meaning: 'Công viên' },
      { word: 'Active', meaning: 'Năng động' },
      { word: 'Strong', meaning: 'Khỏe mạnh' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the person\'s favorite hobby?',
        options: ['Swimming', 'Football', 'Reading', 'Cooking'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "I love playing football. It is my favorite hobby."'
      },
      {
        id: 'q2',
        text: 'Where do they play football?',
        options: ['At school', 'In the garden', 'In the park', 'At the beach'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "I play football in the park..." '
      }
    ]
  },
  {
    id: 'a1-5',
    title: 'My Computer',
    level: 'A1',
    content: [
      "I have a new computer on my desk. It is black and very fast.",
      "I use it to do my homework and read books.",
      "In the evening, I like to watch funny videos or play simple games.",
      "My computer is very important for my studies."
    ],
    vocabulary: [
      { word: 'Computer', meaning: 'Máy tính' },
      { word: 'Fast', meaning: 'Nhanh' },
      { word: 'Homework', meaning: 'Bài tập về nhà' },
      { word: 'Important', meaning: 'Quan trọng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What color is the computer?',
        options: ['White', 'Black', 'Blue', 'Red'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "It is black and very fast."'
      },
      {
        id: 'q2',
        text: 'What does the person do in the evening?',
        options: ['Sleep', 'Do homework', 'Watch funny videos', 'Read books'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "In the evening, I like to watch funny videos..."'
      }
    ]
  },
  {
    id: 'a1-6',
    title: 'A Trip to the Beach',
    level: 'A1',
    content: [
      "My family goes to the beach on Sunday. The weather is sunny and hot.",
      "We swim in the sea and eat fresh seafood.",
      "I like taking photos of the boats and the blue sky.",
      "We go home in the afternoon. We are tired but very happy."
    ],
    vocabulary: [
      { word: 'Beach', meaning: 'Bãi biển' },
      { word: 'Weather', meaning: 'Thời tiết' },
      { word: 'Seafood', meaning: 'Hải sản' },
      { word: 'Tired', meaning: 'Mệt mỏi' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When does the family go to the beach?',
        options: ['On Saturday', 'On Sunday', 'On Monday', 'On Friday'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "My family goes to the beach on Sunday."'
      },
      {
        id: 'q2',
        text: 'What do they eat at the beach?',
        options: ['Pizza', 'Fresh seafood', 'Apples', 'Bread'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "We swim in the sea and eat fresh seafood."'
      }
    ]
  },
  {
    id: 'a1-7',
    title: 'I Love Numbers',
    level: 'A1',
    content: [
      "Math is my favorite subject at school. I like playing with numbers.",
      "My teacher is very nice. She explains everything clearly.",
      "I help my friends with their math homework after class.",
      "Math is fun and it helps me think better."
    ],
    vocabulary: [
      { word: 'Subject', meaning: 'Môn học' },
      { word: 'Numbers', meaning: 'Con số' },
      { word: 'Explain', meaning: 'Giải thích' },
      { word: 'Clearly', meaning: 'Rõ ràng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the person\'s favorite subject?',
        options: ['English', 'Science', 'Math', 'History'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "Math is my favorite subject at school."'
      },
      {
        id: 'q2',
        text: 'What does the person do after class?',
        options: ['Play football', 'Go home', 'Help friends with math', 'Sleep'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "I help my friends with their math homework after class."'
      }
    ]
  },
  {
    id: 'a1-8',
    title: 'The Math Tutor',
    level: 'A1',
    content: [
      "I teach math to young students. I usually teach online in the evening.",
      "I have a small website for my classes. My students log in to read lessons.",
      "We learn about numbers and solve easy problems together.",
      "I feel very happy when my students understand the lesson."
    ],
    vocabulary: [
      { word: 'Tutor', meaning: 'Gia sư / Người dạy kèm' },
      { word: 'Online', meaning: 'Trực tuyến' },
      { word: 'Solve', meaning: 'Giải quyết (bài tập)' },
      { word: 'Understand', meaning: 'Hiểu' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What subject does the person teach?',
        options: ['English', 'Music', 'Math', 'Art'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "I teach math to young students."'
      },
      {
        id: 'q2',
        text: 'Where do the students read lessons?',
        options: ['In a book', 'On a small website', 'At school', 'In the library'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "I have a small website for my classes. My students log in to read lessons."'
      }
    ]
  },
  {
    id: 'a1-9',
    title: 'A University Student',
    level: 'A1',
    content: [
      "I live in Hanoi. I am a third-year university student.",
      "I study computers and math. I go to the library every morning.",
      "I read books and write code on my laptop.",
      "I want to make good software to help people learn."
    ],
    vocabulary: [
      { word: 'University', meaning: 'Đại học' },
      { word: 'Library', meaning: 'Thư viện' },
      { word: 'Software', meaning: 'Phần mềm' },
      { word: 'Learn', meaning: 'Học tập' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where does the student live?',
        options: ['Hai Phong', 'Da Nang', 'Hanoi', 'Ho Chi Minh City'],
        correctAnswerIndex: 2,
        explanation: 'The text says: "I live in Hanoi."'
      },
      {
        id: 'q2',
        text: 'What does the student do in the library?',
        options: ['Sleep', 'Eat breakfast', 'Play games', 'Read books and write code'],
        correctAnswerIndex: 3,
        explanation: 'The text says: "I read books and write code on my laptop."'
      }
    ]
  },
  {
    id: 'a1-10',
    title: 'Making a Video',
    level: 'A1',
    content: [
      "I like making videos about my daily life. On weekends, I go out with my camera.",
      "I walk on the street and film beautiful places in Hai Phong.",
      "I talk about the local food and the friendly people.",
      "Then, I go home and use my computer to edit the video."
    ],
    vocabulary: [
      { word: 'Daily life', meaning: 'Cuộc sống hàng ngày' },
      { word: 'Street', meaning: 'Đường phố' },
      { word: 'Local food', meaning: 'Món ăn địa phương' },
      { word: 'Edit', meaning: 'Chỉnh sửa' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does the person make videos about?',
        options: ['Animals', 'Their daily life', 'Video games', 'Sports'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "I like making videos about my daily life."'
      },
      {
        id: 'q2',
        text: 'What do they use to edit the video?',
        options: ['A camera', 'A computer', 'A phone', 'A book'],
        correctAnswerIndex: 1,
        explanation: 'The text says: "Then, I go home and use my computer to edit the video."'
      }
    ]
  },
  {
    id: 'a1-11',
    title: 'My Busy Day',
    level: 'A1',
    content: [
      "I get up at six o'clock every morning.",
      "First, I drink a glass of water and take a shower.",
      "Then, I have breakfast with my family at seven o'clock.",
      "I go to school by bus. My classes start at eight o'clock and finish at four o'clock.",
      "In the evening, I do my homework and watch TV for one hour.",
      "I go to bed early at ten o'clock."
    ],
    vocabulary: [
      { word: 'Every', meaning: 'Mỗi' },
      { word: 'Shower', meaning: 'Vòi hoa sen (tắm)' },
      { word: 'Early', meaning: 'Sớm' },
      { word: 'Finish', meaning: 'Kết thúc' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What time does the person get up?',
        options: ["Five o'clock", "Six o'clock", "Seven o'clock", "Eight o'clock"],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I get up at six o\'clock every morning."'
      },
      {
        id: 'q2',
        text: 'How does the person go to school?',
        options: ['By car', 'By bike', 'By bus', 'On foot'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I go to school by bus."'
      },
      {
        id: 'q3',
        text: 'How long does the person watch TV?',
        options: ['Thirty minutes', 'One hour', 'Two hours', 'All evening'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...watch TV for one hour."'
      }
    ]
  },
  {
    id: 'a1-12',
    title: 'My Happy Family',
    level: 'A1',
    content: [
      "Hello, my name is Lan. I live in a big house with my family.",
      "My father is forty years old. He is a doctor and he works in a hospital.",
      "My mother is thirty-eight years old. She is a teacher at a small school.",
      "I have one brother and one sister. My brother is tall and plays football.",
      "My sister is six years old. She likes to draw pictures.",
      "We often eat dinner together and talk about our day. I love my family very much."
    ],
    vocabulary: [
      { word: 'Doctor', meaning: 'Bác sĩ' },
      { word: 'Hospital', meaning: 'Bệnh viện' },
      { word: 'Tall', meaning: 'Cao' },
      { word: 'Draw', meaning: 'Vẽ' },
      { word: 'Together', meaning: 'Cùng nhau' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where does Lan live?',
        options: ['In a small apartment', 'In a big house', 'In a hospital', 'In a school'],
        correctAnswerIndex: 1,
        explanation: 'Câu đầu tiên: "I live in a big house with my family."'
      },
      {
        id: 'q2',
        text: 'What is Lan\'s father\'s job?',
        options: ['Teacher', 'Student', 'Doctor', 'Football player'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "My father... is a doctor."'
      },
      {
        id: 'q3',
        text: 'How old is Lan\'s mother?',
        options: ['Thirty', 'Thirty-eight', 'Forty', 'Forty-two'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "My mother is thirty-eight years old."'
      },
      {
        id: 'q4',
        text: 'Who likes to draw pictures?',
        options: ['Lan', 'Her brother', 'Her father', 'Her sister'],
        correctAnswerIndex: 3,
        explanation: 'Đoạn văn viết: "My sister... likes to draw pictures."'
      },
      {
        id: 'q5',
        text: 'What does Lan\'s family do in the evening?',
        options: ['Play football', 'Go to the hospital', 'Eat dinner together', 'Go to school'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "We often eat dinner together..."'
      }
    ]
  },
  {
    id: 'a1-13',
    title: 'Fun with Hobbies',
    level: 'A1',
    content: [
      "Everyone has a hobby. My friend Minh and I have different hobbies.",
      "Minh loves playing the guitar. He practices in his room every afternoon.",
      "I do not like music. My favorite hobby is swimming.",
      "I go to the swimming pool with my brother on Saturdays and Sundays.",
      "We also like to read books in the evening. Reading helps us learn new things.",
      "Hobbies make our lives happy and interesting."
    ],
    vocabulary: [
      { word: 'Different', meaning: 'Khác nhau' },
      { word: 'Practice', meaning: 'Luyện tập' },
      { word: 'Swimming pool', meaning: 'Bể bơi' },
      { word: 'Interesting', meaning: 'Thú vị' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does Minh love doing?',
        options: ['Swimming', 'Playing the guitar', 'Reading books', 'Cooking'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Minh loves playing the guitar."'
      },
      {
        id: 'q2',
        text: 'Where does Minh practice the guitar?',
        options: ['At the swimming pool', 'In his room', 'At school', 'In the garden'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "He practices in his room every afternoon."'
      },
      {
        id: 'q3',
        text: 'What is the narrator\'s (người kể chuyện) favorite hobby?',
        options: ['Playing the guitar', 'Singing', 'Swimming', 'Running'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "My favorite hobby is swimming."'
      },
      {
        id: 'q4',
        text: 'When do they go to the swimming pool?',
        options: ['Every day', 'On Mondays', 'On Saturdays and Sundays', 'In the evening'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I go to the swimming pool... on Saturdays and Sundays."'
      },
      {
        id: 'q5',
        text: 'Why is reading good according to the text?',
        options: ['It is fast', 'It helps them learn new things', 'It is loud', 'It makes them tired'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Reading helps us learn new things."'
      }
    ]
  },
  {
    id: 'a1-14',
    title: 'My Little Pets',
    level: 'A1',
    content: [
      "I have two pets at home: a dog and a cat.",
      "My dog's name is Lucky. He is big and has brown fur.",
      "Lucky is very friendly and he likes to bark at the postman.",
      "My cat's name is Mimi. She is small and white.",
      "Mimi is very quiet and she sleeps on the sofa all day.",
      "I give them food and fresh water every morning. I love playing with my pets."
    ],
    vocabulary: [
      { word: 'Fur', meaning: 'Lông (động vật)' },
      { word: 'Bark', meaning: 'Sủa' },
      { word: 'Postman', meaning: 'Người đưa thư' },
      { word: 'Quiet', meaning: 'Yên tĩnh, ngoan ngoãn' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How many pets does the person have?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I have two pets at home."'
      },
      {
        id: 'q2',
        text: 'What color is Lucky?',
        options: ['Black', 'White', 'Brown', 'Yellow'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "My dog\'s name is Lucky... and has brown fur."'
      },
      {
        id: 'q3',
        text: 'Who does Lucky like to bark at?',
        options: ['The cat', 'The children', 'The postman', 'The birds'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...he likes to bark at the postman."'
      },
      {
        id: 'q4',
        text: 'Where does Mimi sleep?',
        options: ['In the garden', 'On the bed', 'Under the table', 'On the sofa'],
        correctAnswerIndex: 3,
        explanation: 'Đoạn văn viết: "Mimi... sleeps on the sofa all day."'
      },
      {
        id: 'q5',
        text: 'When does the person give them food and water?',
        options: ['Every morning', 'In the afternoon', 'In the evening', 'At night'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "I give them food and fresh water every morning."'
      }
    ]
  },
  {
    id: 'a1-15',
    title: 'My School Day',
    level: 'A1',
    content: [
      "I go to a primary school near my house. It is a big and modern building.",
      "In my school, there are twenty classrooms, a large library, and a computer room.",
      "My favorite place is the playground. I play football there with my friends at break time.",
      "My favorite subject is English. I like to speak and sing songs in class.",
      "Our teachers are very kind and they help us learn many interesting things.",
      "I feel very happy when I am at school."
    ],
    vocabulary: [
      { word: 'Modern', meaning: 'Hiện đại' },
      { word: 'Classroom', meaning: 'Lớp học' },
      { word: 'Playground', meaning: 'Sân chơi' },
      { word: 'Break time', meaning: 'Giờ giải lao' },
      { word: 'Kind', meaning: 'Tốt bụng, tử tế' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the school located?',
        options: ['Far from the house', 'In the city center', 'Near the house', 'Next to a park'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I go to a primary school near my house."'
      },
      {
        id: 'q2',
        text: 'How many classrooms are there in the school?',
        options: ['Ten', 'Fifteen', 'Twenty', 'Twenty-five'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...there are twenty classrooms..."'
      },
      {
        id: 'q3',
        text: 'What does the student do at the playground?',
        options: ['Read books', 'Play football', 'Use the computer', 'Sing songs'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I play football there with my friends at break time."'
      },
      {
        id: 'q4',
        text: 'What is the student\'s favorite subject?',
        options: ['Math', 'English', 'Music', 'Science'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "My favorite subject is English."'
      },
      {
        id: 'q5',
        text: 'How are the teachers described?',
        options: ['Quiet', 'Strict', 'Kind', 'Tall'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "Our teachers are very kind..."'
      }
    ]
  },
  {
    id: 'a1-16',
    title: 'The Weather and Me',
    level: 'A1',
    content: [
      "The weather changes every day. I like sunny days the most.",
      "When it is sunny and hot, I wear a T-shirt and shorts. I go to the park with my friends.",
      "When it is rainy, I stay at home. I take my umbrella if I need to go out.",
      "In the winter, the weather is very cold and windy.",
      "I wear a warm coat, a hat, and gloves to stay warm.",
      "Every morning, I look out the window to check the weather."
    ],
    vocabulary: [
      { word: 'Weather', meaning: 'Thời tiết' },
      { word: 'Umbrella', meaning: 'Cái ô (dù)' },
      { word: 'Windy', meaning: 'Có gió' },
      { word: 'Gloves', meaning: 'Găng tay' },
      { word: 'Check', meaning: 'Kiểm tra' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What kind of weather does the person like the most?',
        options: ['Rainy days', 'Sunny days', 'Cold days', 'Windy days'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I like sunny days the most."'
      },
      {
        id: 'q2',
        text: 'What does the person wear when it is hot?',
        options: ['A warm coat', 'A hat and gloves', 'A T-shirt and shorts', 'A sweater'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "When it is sunny and hot, I wear a T-shirt and shorts."'
      },
      {
        id: 'q3',
        text: 'What does the person do when it rains?',
        options: ['Goes to the park', 'Stays at home', 'Plays football', 'Goes swimming'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "When it is rainy, I stay at home."'
      },
      {
        id: 'q4',
        text: 'How is the weather in the winter?',
        options: ['Sunny and hot', 'Rainy and warm', 'Very cold and windy', 'Dry and cloudy'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "In the winter, the weather is very cold and windy."'
      },
      {
        id: 'q5',
        text: 'What does the person do every morning?',
        options: ['Wears a coat', 'Goes to the park', 'Looks out the window', 'Buys an umbrella'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "Every morning, I look out the window to check the weather."'
      }
    ]
  },
  {
    id: 'a1-17',
    title: 'Food and Drink',
    level: 'A1',
    content: [
      "I eat three meals every day: breakfast, lunch, and dinner.",
      "For breakfast, I usually have bread and eggs. I drink a glass of milk.",
      "At lunch, I eat rice with fish or chicken at the school canteen.",
      "My favorite drink is orange juice. It is very healthy.",
      "For dinner, my mother cooks soup and vegetables for the whole family.",
      "After dinner, we sometimes eat apples or bananas for dessert."
    ],
    vocabulary: [
      { word: 'Meals', meaning: 'Các bữa ăn' },
      { word: 'Canteen', meaning: 'Nhà ăn (trường học/công ty)' },
      { word: 'Healthy', meaning: 'Tốt cho sức khỏe' },
      { word: 'Vegetables', meaning: 'Rau củ' },
      { word: 'Dessert', meaning: 'Món tráng miệng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How many meals does the person eat every day?',
        options: ['Two', 'Three', 'Four', 'Five'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I eat three meals every day..." '
      },
      {
        id: 'q2',
        text: 'What does the person have for breakfast?',
        options: ['Rice and fish', 'Bread and eggs', 'Soup and vegetables', 'Apples and bananas'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "For breakfast, I usually have bread and eggs."'
      },
      {
        id: 'q3',
        text: 'Where does the person eat lunch?',
        options: ['At home', 'In a restaurant', 'At the school canteen', 'In the park'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "At lunch, I eat rice... at the school canteen."'
      },
      {
        id: 'q4',
        text: 'What is the person\'s favorite drink?',
        options: ['Milk', 'Water', 'Orange juice', 'Soda'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "My favorite drink is orange juice."'
      },
      {
        id: 'q5',
        text: 'What do they sometimes eat for dessert?',
        options: ['Chicken', 'Soup', 'Bread', 'Apples or bananas'],
        correctAnswerIndex: 3,
        explanation: 'Đoạn văn viết: "After dinner, we sometimes eat apples or bananas for dessert."'
      }
    ]
  },
  {
    id: 'a1-18',
    title: 'My Body and Health',
    level: 'A1',
    content: [
      "I look in the mirror every morning. I have a round face and short black hair.",
      "I have two big brown eyes and a small nose. My ears are small, too.",
      "I use my hands to write and play. I use my feet to run and jump.",
      "To stay healthy, I brush my teeth twice a day: in the morning and at night.",
      "I also wash my hands with soap before I eat my meals.",
      "Keeping my body clean makes me feel great and strong."
    ],
    vocabulary: [
      { word: 'Mirror', meaning: 'Cái gương' },
      { word: 'Round', meaning: 'Tròn' },
      { word: 'Healthy', meaning: 'Khỏe mạnh' },
      { word: 'Twice', meaning: 'Hai lần' },
      { word: 'Soap', meaning: 'Xà phòng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What color is the person\'s hair?',
        options: ['Brown', 'Black', 'Blonde', 'White'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...short black hair."'
      },
      {
        id: 'q2',
        text: 'How are the eyes described?',
        options: ['Small and blue', 'Big and brown', 'Big and green', 'Small and black'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I have two big brown eyes..." '
      },
      {
        id: 'q3',
        text: 'What does the person use to run and jump?',
        options: ['Hands', 'Arms', 'Feet', 'Nose'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I use my feet to run and jump."'
      },
      {
        id: 'q4',
        text: 'How often does the person brush their teeth?',
        options: ['Once a day', 'Twice a day', 'Three times a day', 'Every hour'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...brush my teeth twice a day."'
      },
      {
        id: 'q5',
        text: 'When does the person wash their hands with soap?',
        options: ['After sleeping', 'Before eating', 'After school', 'Before sleeping'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I also wash my hands with soap before I eat my meals."'
      }
    ]
  },
  {
    id: 'a1-19',
    title: 'My City and Transport',
    level: 'A1',
    content: [
      "I live in a busy city. There are many interesting places to visit here.",
      "My mother goes to the supermarket by car to buy food every weekend.",
      "My father goes to work by motorbike because the streets are crowded.",
      "On Sundays, I go to the cinema with my friends by bus to watch movies.",
      "There is a large park in the center of the city. We often walk there.",
      "I like living in the city because it is very convenient."
    ],
    vocabulary: [
      { word: 'Busy', meaning: 'Bận rộn, nhộn nhịp' },
      { word: 'Crowded', meaning: 'Đông đúc' },
      { word: 'Cinema', meaning: 'Rạp chiếu phim' },
      { word: 'Center', meaning: 'Trung tâm' },
      { word: 'Convenient', meaning: 'Tiện lợi' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How does the mother go to the supermarket?',
        options: ['By bus', 'By car', 'By motorbike', 'On foot'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "My mother goes to the supermarket by car..." '
      },
      {
        id: 'q2',
        text: 'Why does the father go to work by motorbike?',
        options: ['Because it is fast', 'Because he likes it', 'Because the streets are crowded', 'Because he has no car'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "My father goes to work by motorbike because the streets are crowded."'
      },
      {
        id: 'q3',
        text: 'Where does the person go on Sundays?',
        options: ['To the supermarket', 'To the park', 'To the cinema', 'To work'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "On Sundays, I go to the cinema..." '
      },
      {
        id: 'q4',
        text: 'Where is the large park located?',
        options: ['Near the supermarket', 'In the center of the city', 'Next to the cinema', 'Far from the city'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "There is a large park in the center of the city."'
      },
      {
        id: 'q5',
        text: 'How does the person feel about living in the city?',
        options: ['It is boring', 'It is quiet', 'It is convenient', 'It is difficult'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I like living in the city because it is very convenient."'
      }
    ]
  },
  {
    id: 'a1-20',
    title: 'Four Seasons in a Year',
    level: 'A1',
    content: [
      "There are four seasons in a year: spring, summer, autumn, and winter.",
      "In the spring, the weather is warm. Flowers grow and the trees are green.",
      "Summer is very hot and sunny. I often go to the beach with my family.",
      "In the autumn, the weather is cool and windy. The leaves turn yellow and fall.",
      "Winter is the coldest season. It is very cold and sometimes it rains.",
      "I love all the seasons because each one is special and beautiful."
    ],
    vocabulary: [
      { word: 'Season', meaning: 'Mùa' },
      { word: 'Autumn', meaning: 'Mùa thu' },
      { word: 'Fall', meaning: 'Rơi, rụng' },
      { word: 'Special', meaning: 'Đặc biệt' },
      { word: 'Grow', meaning: 'Phát triển, mọc' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How many seasons are there in a year?',
        options: ['Two', 'Three', 'Four', 'Five'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "There are four seasons in a year..." '
      },
      {
        id: 'q2',
        text: 'How is the weather in the spring?',
        options: ['Hot', 'Warm', 'Cold', 'Windy'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "In the spring, the weather is warm."'
      },
      {
        id: 'q3',
        text: 'Where does the person go in the summer?',
        options: ['To the library', 'To the beach', 'To the cinema', 'To the park'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Summer is very hot... I often go to the beach..." '
      },
      {
        id: 'q4',
        text: 'What happens to the leaves in the autumn?',
        options: ['They turn green', 'They grow', 'They turn yellow and fall', 'They disappear'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "The leaves turn yellow and fall."'
      },
      {
        id: 'q5',
        text: 'Which is the coldest season?',
        options: ['Spring', 'Summer', 'Autumn', 'Winter'],
        correctAnswerIndex: 3,
        explanation: 'Đoạn văn viết: "Winter is the coldest season."'
      }
    ]
  },
  {
    id: 'a1-21',
    title: 'A Day with Time',
    level: 'A1',
    content: [
      "Time is very important in our lives. I always look at my watch to check the time.",
      "I wake up at seven o'clock in the morning. I eat my breakfast at seven-thirty.",
      "My school starts at eight o'clock. We have a short break at ten-fifteen.",
      "I eat lunch at twelve o'clock at noon. My classes finish at four o'clock.",
      "In the afternoon, I play football at five-thirty. I go home at six-forty-five.",
      "I go to sleep at ten o'clock at night. A good sleep helps me stay healthy."
    ],
    vocabulary: [
      { word: 'Watch', meaning: 'Đồng hồ đeo tay' },
      { word: 'Noon', meaning: 'Buổi trưa (12 giờ trưa)' },
      { word: 'Break', meaning: 'Giờ nghỉ giải lao' },
      { word: 'Important', meaning: 'Quan trọng' },
      { word: 'Healthy', meaning: 'Khỏe mạnh' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What time does the person wake up?',
        options: ["Six o'clock", "Seven o'clock", "Eight o'clock", "Nine o'clock"],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I wake up at seven o\'clock in the morning."'
      },
      {
        id: 'q2',
        text: 'When is the short break at school?',
        options: ['At eight o\'clock', 'At ten-fifteen', 'At twelve o\'clock', 'At four o\'clock'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "We have a short break at ten-fifteen."'
      },
      {
        id: 'q3',
        text: 'What does the person do at twelve o\'clock?',
        options: ['Starts school', 'Goes home', 'Eats lunch', 'Plays football'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I eat lunch at twelve o\'clock at noon."'
      },
      {
        id: 'q4',
        text: 'What time does the person play football?',
        options: ['At four o\'clock', 'At five-thirty', 'At six-forty-five', 'At ten o\'clock'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "In the afternoon, I play football at five-thirty."'
      },
      {
        id: 'q5',
        text: 'Why is sleep important according to the text?',
        options: ['It is fun', 'It helps them stay healthy', 'It is long', 'It is quiet'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "A good sleep helps me stay healthy."'
      }
    ]
  },
  {
    id: 'a1-22',
    title: 'Different Jobs',
    level: 'A1',
    content: [
      "People have many different jobs. My family members do different things every day.",
      "My uncle is a pilot. He flies big planes to many countries.",
      "My aunt is a chef. She works in a famous restaurant and cooks delicious food.",
      "My cousin is a farmer. He works outside and grows vegetables and rice.",
      "I am a student. I study hard because I want to be an engineer in the future.",
      "All jobs are important because they help our society."
    ],
    vocabulary: [
      { word: 'Pilot', meaning: 'Phi công' },
      { word: 'Chef', meaning: 'Đầu bếp' },
      { word: 'Farmer', meaning: 'Nông dân' },
      { word: 'Engineer', meaning: 'Kỹ sư' },
      { word: 'Society', meaning: 'Xã hội' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does the uncle do?',
        options: ['He is a chef', 'He is a pilot', 'He is a farmer', 'He is a student'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "My uncle is a pilot."'
      },
      {
        id: 'q2',
        text: 'Where does the aunt work?',
        options: ['In a hospital', 'In a school', 'In a famous restaurant', 'On a farm'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "She works in a famous restaurant..."'
      },
      {
        id: 'q3',
        text: 'What does the cousin grow?',
        options: ['Flowers', 'Trees', 'Vegetables and rice', 'Fruits'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...grows vegetables and rice."'
      },
      {
        id: 'q4',
        text: 'What does the narrator want to be in the future?',
        options: ['A pilot', 'A chef', 'A farmer', 'An engineer'],
        correctAnswerIndex: 3,
        explanation: 'Đoạn văn viết: "I want to be an engineer in the future."'
      },
      {
        id: 'q5',
        text: 'Why are all jobs important?',
        options: ['Because they are fun', 'Because they help our society', 'Because they pay money', 'Because they are easy'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "All jobs are important because they help our society."'
      }
    ]
  },
  {
    id: 'a1-23',
    title: 'My Sweet Home',
    level: 'A1',
    content: [
      "I live in a small but very comfortable house with my family.",
      "The living room is my favorite place. It has a big sofa and a television.",
      "Next to the living room is the kitchen. My mother cooks lunch there every day.",
      "Our house has three bedrooms. My bedroom is blue and it has a small desk.",
      "I sleep on my bed and do my homework at my desk every evening.",
      "I like my house because it is very clean and warm."
    ],
    vocabulary: [
      { word: 'Comfortable', meaning: 'Thoải mái' },
      { word: 'Kitchen', meaning: 'Nhà bếp' },
      { word: 'Furniture', meaning: 'Đồ nội thất' },
      { word: 'Next to', meaning: 'Kế bên' },
      { word: 'Warm', meaning: 'Ấm áp' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the person\'s favorite place in the house?',
        options: ['The kitchen', 'The living room', 'The bedroom', 'The garden'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The living room is my favorite place."'
      },
      {
        id: 'q2',
        text: 'What is in the living room?',
        options: ['A bed and a desk', 'A fridge and a cooker', 'A big sofa and a television', 'A bathtub'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "It has a big sofa and a television."'
      },
      {
        id: 'q3',
        text: 'Where does the mother cook lunch?',
        options: ['In the bedroom', 'In the living room', 'In the kitchen', 'Outside the house'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "My mother cooks lunch there (the kitchen) every day."'
      },
      {
        id: 'q4',
        text: 'What color is the person\'s bedroom?',
        options: ['Red', 'Green', 'Yellow', 'Blue'],
        correctAnswerIndex: 3,
        explanation: 'Đoạn văn viết: "My bedroom is blue..." '
      },
      {
        id: 'q5',
        text: 'What does the person do at their desk?',
        options: ['Sleeps', 'Cooks', 'Does homework', 'Watches TV'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I... do my homework at my desk every evening."'
      }
    ]
  },
  {
    id: 'a1-24',
    title: 'At the Supermarket',
    level: 'A1',
    content: [
      "Today is Saturday. I go to the supermarket with my mother.",
      "The supermarket is very big and has many people. We need a shopping cart.",
      "First, we go to the fruit area. We buy some red apples and yellow bananas.",
      "Then, we go to the milk and cheese area. I like drinking fresh milk every day.",
      "My mother also buys some meat and fish for our dinner.",
      "Finally, we go to the cashier to pay for everything. We are happy with our food."
    ],
    vocabulary: [
      { word: 'Shopping cart', meaning: 'Xe đẩy mua hàng' },
      { word: 'Area', meaning: 'Khu vực' },
      { word: 'Fresh', meaning: 'Tươi' },
      { word: 'Cashier', meaning: 'Thu ngân' },
      { word: 'Pay', meaning: 'Thanh toán' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When does the person go to the supermarket?',
        options: ['On Friday', 'On Saturday', 'On Sunday', 'Every day'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Today is Saturday. I go to the supermarket..."'
      },
      {
        id: 'q2',
        text: 'What do they use to carry the food?',
        options: ['A bag', 'A basket', 'A shopping cart', 'A box'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "We need a shopping cart."'
      },
      {
        id: 'q3',
        text: 'What fruit do they buy?',
        options: ['Grapes and oranges', 'Apples and bananas', 'Mangoes and lemons', 'Watermelons'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "We buy some red apples and yellow bananas."'
      },
      {
        id: 'q4',
        text: 'What does the mother buy for dinner?',
        options: ['Meat and fish', 'Milk and cheese', 'Fruit and bread', 'Cakes and sweets'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "My mother also buys some meat and fish for our dinner."'
      },
      {
        id: 'q5',
        text: 'Where do they go to pay for the food?',
        options: ['To the fruit area', 'To the door', 'To the cashier', 'To the car'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "Finally, we go to the cashier to pay for everything."'
      }
    ]
  },
  {
    id: 'a1-25',
    title: 'My Summer Holiday',
    level: 'A1',
    content: [
      "Every summer, my family goes on a holiday. This year, we go to a beautiful beach.",
      "We travel there by plane. The flight is short and the view is great.",
      "The weather is very hot and sunny. I swim in the blue sea every morning.",
      "My father likes fishing and my mother likes reading books under the sun.",
      "In the evening, we eat delicious seafood at a small restaurant near the sea.",
      "I love my summer holiday because it is very fun and relaxing."
    ],
    vocabulary: [
      { word: 'Holiday', meaning: 'Kỳ nghỉ' },
      { word: 'View', meaning: 'Tầm nhìn, phong cảnh' },
      { word: 'Fishing', meaning: 'Câu cá' },
      { word: 'Seafood', meaning: 'Hải sản' },
      { word: 'Relaxing', meaning: 'Thư giãn' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where does the family go this year?',
        options: ['To the mountains', 'To a beautiful beach', 'To a big city', 'To a farm'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "This year, we go to a beautiful beach."'
      },
      {
        id: 'q2',
        text: 'How do they travel to the beach?',
        options: ['By train', 'By bus', 'By plane', 'By car'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "We travel there by plane."'
      },
      {
        id: 'q3',
        text: 'What does the person do every morning?',
        options: ['Reads books', 'Goes fishing', 'Swims in the sea', 'Eats seafood'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I swim in the blue sea every morning."'
      },
      {
        id: 'q4',
        text: 'What does the father like doing?',
        options: ['Reading books', 'Fishing', 'Swimming', 'Cooking'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "My father likes fishing..." '
      },
      {
        id: 'q5',
        text: 'Where do they eat seafood in the evening?',
        options: ['On the plane', 'At home', 'At a small restaurant near the sea', 'Under the sun'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "In the evening, we eat delicious seafood at a small restaurant near the sea."'
      }
    ]
  },
  {
    id: 'a1-26',
    title: 'In My Grandparents\' Garden',
    level: 'A1',
    content: [
      "My grandparents have a small and beautiful garden behind their house.",
      "There are many colorful flowers like red roses and yellow sunflowers.",
      "My grandfather grows vegetables such as carrots, tomatoes, and potatoes.",
      "In the morning, I help him water the plants and pull out the weeds.",
      "I like watching the colorful butterflies and bees fly around the flowers.",
      "The garden is a peaceful place and I love spending time there."
    ],
    vocabulary: [
      { word: 'Behind', meaning: 'Phía sau' },
      { word: 'Sunflowers', meaning: 'Hoa hướng dương' },
      { word: 'Water the plants', meaning: 'Tưới cây' },
      { word: 'Weeds', meaning: 'Cỏ dại' },
      { word: 'Peaceful', meaning: 'Yên bình' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the garden located?',
        options: ['In front of the house', 'Behind the house', 'On the roof', 'Near the school'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...garden behind their house."'
      },
      {
        id: 'q2',
        text: 'What kind of flowers are mentioned in the text?',
        options: ['Blue roses', 'Red roses and yellow sunflowers', 'White lilies', 'Pink tulips'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...colorful flowers like red roses and yellow sunflowers."'
      },
      {
        id: 'q3',
        text: 'What does the grandfather grow in the garden?',
        options: ['Fruits', 'Rice', 'Vegetables', 'Trees'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "My grandfather grows vegetables..." '
      },
      {
        id: 'q4',
        text: 'What does the person do to help the grandfather?',
        options: ['Cooks lunch', 'Waters the plants', 'Plays football', 'Sleeps'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I help him water the plants..." '
      },
      {
        id: 'q5',
        text: 'What insects (côn trùng) does the person like watching?',
        options: ['Spiders and ants', 'Butterflies and bees', 'Flies and mosquitoes', 'Beetles'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I like watching the colorful butterflies and bees..." '
      }
    ]
  },
  {
    id: 'a1-27',
    title: 'A Happy Birthday Party',
    level: 'A1',
    content: [
      "Today is my friend's birthday. His name is Nam and he is ten years old.",
      "His parents organize a big party at his house. There are many colorful balloons.",
      "We eat a large chocolate cake with ten red candles on it.",
      "We also have many sweets, fruit, and orange juice. We sing 'Happy Birthday' together.",
      "I give Nam a new storybook. He gets many beautiful presents from his friends.",
      "We play games and dance. We are all very happy at the party."
    ],
    vocabulary: [
      { word: 'Organize', meaning: 'Tổ chức' },
      { word: 'Candles', meaning: 'Nến' },
      { word: 'Sweets', meaning: 'Kẹo, đồ ngọt' },
      { word: 'Presents', meaning: 'Quà tặng' },
      { word: 'Storybook', meaning: 'Sách truyện' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How old is Nam today?',
        options: ['Eight years old', 'Nine years old', 'Ten years old', 'Eleven years old'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...he is ten years old."'
      },
      {
        id: 'q2',
        text: 'Where is the party?',
        options: ['At school', 'At a restaurant', 'At Nam\'s house', 'In the park'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...organize a big party at his house."'
      },
      {
        id: 'q3',
        text: 'What kind of cake do they eat?',
        options: ['Banana cake', 'Strawberry cake', 'Lemon cake', 'Chocolate cake'],
        correctAnswerIndex: 3,
        explanation: 'Đoạn văn viết: "We eat a large chocolate cake..." '
      },
      {
        id: 'q4',
        text: 'What gift does the narrator give to Nam?',
        options: ['A football', 'A new storybook', 'A toy car', 'A pen'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I give Nam a new storybook."'
      },
      {
        id: 'q5',
        text: 'What do they do together at the party?',
        options: ['Do homework', 'Go to sleep', 'Sing "Happy Birthday" and play games', 'Go to the supermarket'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "We sing \'Happy Birthday\' together... We play games and dance."'
      }
    ]
  },
  {
    id: 'a1-28',
    title: 'A Day at the Zoo',
    level: 'A1',
    content: [
      "On Sunday, my family goes to the city zoo. It is very large and has many animals.",
      "First, we see the monkeys. They are very funny and they like to climb trees.",
      "Then, we look at the giraffes. They are very tall and have very long necks.",
      "My brother likes the tigers because they are big and strong.",
      "We also see the elephants drinking water. They have very big ears and long trunks.",
      "I take many photos of the animals. We have a great time at the zoo."
    ],
    vocabulary: [
      { word: 'Climb', meaning: 'Leo trèo' },
      { word: 'Neck', meaning: 'Cái cổ' },
      { word: 'Strong', meaning: 'Khỏe mạnh' },
      { word: 'Trunk', meaning: 'Cái vòi (của con voi)' },
      { word: 'Large', meaning: 'Rộng lớn' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When does the family go to the zoo?',
        options: ['On Saturday', 'On Sunday', 'On Monday', 'On Friday'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "On Sunday, my family goes to the city zoo."'
      },
      {
        id: 'q2',
        text: 'What do the monkeys like to do?',
        options: ['Swim in the water', 'Sleep on the grass', 'Climb trees', 'Eat meat'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "They are very funny and they like to climb trees."'
      },
      {
        id: 'q3',
        text: 'Which animal has a very long neck?',
        options: ['The tiger', 'The elephant', 'The monkey', 'The giraffe'],
        correctAnswerIndex: 3,
        explanation: 'Đoạn văn viết: "Then, we look at the giraffes. They are very tall and have very long necks."'
      },
      {
        id: 'q4',
        text: 'Why does the brother like the tigers?',
        options: ['Because they are small', 'Because they are funny', 'Because they are big and strong', 'Because they have long necks'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "My brother likes the tigers because they are big and strong."'
      },
      {
        id: 'q5',
        text: 'What do the elephants do when the family sees them?',
        options: ['Eating grass', 'Drinking water', 'Running fast', 'Sleeping'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "We also see the elephants drinking water."'
      }
    ]
  },
  {
    id: 'a1-29',
    title: 'A Night at the Cinema',
    level: 'A1',
    content: [
      "On Friday evening, my brother and I go to the cinema.",
      "First, we wait in line to buy two tickets for a new cartoon.",
      "Then, we buy a large bag of popcorn and two bottles of water.",
      "The cinema room is very dark and the screen is very big.",
      "We sit on our seats and turn off our mobile phones. We must be quiet.",
      "The movie is very funny and we laugh a lot. We love going to the cinema."
    ],
    vocabulary: [
      { word: 'Tickets', meaning: 'Vé' },
      { word: 'Cartoon', meaning: 'Phim hoạt hình' },
      { word: 'Popcorn', meaning: 'Ngô nổ (bỏng ngô)' },
      { word: 'Screen', meaning: 'Màn hình' },
      { word: 'Quiet', meaning: 'Yên lặng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When do they go to the cinema?',
        options: ['On Saturday morning', 'On Friday evening', 'On Sunday afternoon', 'On Monday night'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "On Friday evening, my brother and I go to the cinema."'
      },
      {
        id: 'q2',
        text: 'What kind of movie do they watch?',
        options: ['An action movie', 'A horror movie', 'A cartoon', 'A documentary'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...buy two tickets for a new cartoon."'
      },
      {
        id: 'q3',
        text: 'What do they buy to eat?',
        options: ['Apples', 'Bread', 'A large bag of popcorn', 'Chocolate'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "Then, we buy a large bag of popcorn..." '
      },
      {
        id: 'q4',
        text: 'What must they do with their mobile phones?',
        options: ['Use them to take photos', 'Turn them off', 'Call their friends', 'Play games'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...turn off our mobile phones."'
      },
      {
        id: 'q5',
        text: 'How is the movie described?',
        options: ['Boring', 'Sad', 'Very funny', 'Scary'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "The movie is very funny and we laugh a lot."'
      }
    ]
  },
  {
    id: 'a1-30',
    title: 'A Visit to the Library',
    level: 'A1',
    content: [
      "I go to the library once a week to read and borrow books.",
      "The library is a very quiet place with many tall bookshelves.",
      "I like to read adventure stories and books about animals.",
      "The librarian is very kind. She helps me find the books I need.",
      "I use my library card to borrow two books for two weeks.",
      "I must be careful with the books and return them on time."
    ],
    vocabulary: [
      { word: 'Borrow', meaning: 'Mượn' },
      { word: 'Bookshelves', meaning: 'Giá sách / Kệ sách' },
      { word: 'Librarian', meaning: 'Thủ thư (người quản lý thư viện)' },
      { word: 'Library card', meaning: 'Thẻ thư viện' },
      { word: 'Return', meaning: 'Trả lại' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How often does the person go to the library?',
        options: ['Every day', 'Once a week', 'Twice a month', 'Every month'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I go to the library once a week..."'
      },
      {
        id: 'q2',
        text: 'What kind of place is the library?',
        options: ['A loud place', 'A small place', 'A very quiet place', 'A crowded place'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "The library is a very quiet place..." '
      },
      {
        id: 'q3',
        text: 'What does the person like to read?',
        options: ['Funny comics', 'Math books', 'Adventure stories and books about animals', 'Newspapers'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I like to read adventure stories and books about animals."'
      },
      {
        id: 'q4',
        text: 'What does the librarian do?',
        options: ['Reads books to the person', 'Cleans the library', 'Helps the person find books', 'Sells books'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "The librarian is very kind. She helps me find the books I need."'
      },
      {
        id: 'q5',
        text: 'How long can the person borrow the books?',
        options: ['One week', 'Two weeks', 'One month', 'Three days'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I use my library card to borrow two books for two weeks."'
      }
    ]
  },
  {
    id: 'a1-31',
    title: 'Helping in the Kitchen',
    level: 'A1',
    content: [
      "The kitchen is the heart of our home. It is always clean and bright.",
      "In the kitchen, there is a big white fridge and a modern oven.",
      "Every evening, I help my mother cook dinner. First, I wash the vegetables in the sink.",
      "Then, my mother cuts the meat and puts it in a pan to cook.",
      "We also have a small table where we eat our breakfast every morning.",
      "I like the kitchen because it smells like delicious food."
    ],
    vocabulary: [
      { word: 'Fridge', meaning: 'Tủ lạnh' },
      { word: 'Oven', meaning: 'Lò nướng' },
      { word: 'Sink', meaning: 'Bồn rửa bát' },
      { word: 'Pan', meaning: 'Cái chảo' },
      { word: 'Smell', meaning: 'Có mùi / Ngửi thấy mùi' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What color is the fridge?',
        options: ['Blue', 'White', 'Black', 'Silver'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...there is a big white fridge..." '
      },
      {
        id: 'q2',
        text: 'What does the person do to help their mother?',
        options: ['Cuts the meat', 'Washes the vegetables', 'Cleans the floor', 'Buys the food'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "First, I wash the vegetables in the sink."'
      },
      {
        id: 'q3',
        text: 'Where does the mother put the meat to cook?',
        options: ['In the fridge', 'In the sink', 'In a pan', 'On the table'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...puts it in a pan to cook."'
      },
      {
        id: 'q4',
        text: 'What do they do at the small table?',
        options: ['Do homework', 'Wash dishes', 'Eat breakfast', 'Sleep'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...where we eat our breakfast every morning."'
      },
      {
        id: 'q5',
        text: 'Why does the person like the kitchen?',
        options: ['Because it is big', 'Because it is quiet', 'Because it smells like delicious food', 'Because it has a TV'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I like the kitchen because it smells like delicious food."'
      }
    ]
  },
  {
    id: 'a1-32',
    title: 'Playing Sports',
    level: 'A1',
    content: [
      "I love playing sports because it makes me feel strong and fast.",
      "In the afternoon, I often play football with my friends at the park.",
      "We use a round ball and we kick it into the net. It is very fun!",
      "My sister does not like football. She likes basketball and swimming.",
      "She can jump very high to throw the ball. On weekends, she goes to the pool.",
      "We always wear sneakers and comfortable clothes to play sports safely."
    ],
    vocabulary: [
      { word: 'Strong', meaning: 'Khỏe mạnh' },
      { word: 'Kick', meaning: 'Đá (bóng)' },
      { word: 'Net', meaning: 'Lưới / Khung thành' },
      { word: 'Sneakers', meaning: 'Giày thể thao' },
      { word: 'Safely', meaning: 'Một cách an toàn' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why does the person love playing sports?',
        options: ['Because it is loud', 'Because it makes them feel strong and fast', 'Because they can sleep', 'Because they like the park'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I love playing sports because it makes me feel strong and fast."'
      },
      {
        id: 'q2',
        text: 'Where does the person play football?',
        options: ['At school', 'In the garden', 'At the park', 'At the beach'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...play football with my friends at the park."'
      },
      {
        id: 'q3',
        text: 'What does the sister like doing?',
        options: ['Football and tennis', 'Basketball and swimming', 'Running and jumping', 'Cycling'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "She likes basketball and swimming."'
      },
      {
        id: 'q4',
        text: 'What does the sister do at the pool?',
        options: ['Plays football', 'Throws a ball', 'Swims', 'Runs'],
        correctAnswerIndex: 2,
        explanation: 'Từ "pool" (bể bơi) liên kết với hoạt động "swimming" đã nhắc ở câu trước.'
      },
      {
        id: 'q5',
        text: 'What must they wear to play sports safely?',
        options: ['Hats', 'Sneakers and comfortable clothes', 'Coats', 'Glasses'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "We always wear sneakers and comfortable clothes..." '
      }
    ]
  },
  {
    id: 'a1-33',
    title: 'A Visit to the Farm',
    level: 'A1',
    content: [
      "On my summer holiday, I visit my uncle's farm in the countryside.",
      "The farm is very big and has many useful animals.",
      "The cows live in the field and they give us fresh milk every day.",
      "There are many chickens, too. They lay eggs in the morning.",
      "I like the small pond because there are many white ducks swimming there.",
      "The air is fresh and the farm is very peaceful. I love being a farmer for a day."
    ],
    vocabulary: [
      { word: 'Countryside', meaning: 'Nông thôn' },
      { word: 'Field', meaning: 'Cánh đồng' },
      { word: 'Lay eggs', meaning: 'Đẻ trứng' },
      { word: 'Pond', meaning: 'Cái ao' },
      { word: 'Fresh', meaning: 'Trong lành / Tươi' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the uncle\'s farm located?',
        options: ['In the city', 'In the countryside', 'Near the beach', 'In the forest'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...visit my uncle\'s farm in the countryside."'
      },
      {
        id: 'q2',
        text: 'What do the cows give us?',
        options: ['Eggs', 'Meat', 'Fresh milk', 'Fruit'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...they give us fresh milk every day."'
      },
      {
        id: 'q3',
        text: 'When do the chickens lay eggs?',
        options: ['In the morning', 'In the afternoon', 'In the evening', 'At night'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "They lay eggs in the morning."'
      },
      {
        id: 'q4',
        text: 'What is in the small pond?',
        options: ['Fish', 'Frogs', 'White ducks', 'Boats'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...there are many white ducks swimming there."'
      },
      {
        id: 'q5',
        text: 'How is the air at the farm described?',
        options: ['Hot', 'Smoky', 'Fresh', 'Cold'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "The air is fresh and the farm is very peaceful."'
      }
    ]
  },
  {
    id: 'a1-34',
    title: 'Shopping for New Clothes',
    level: 'A1',
    content: [
      "Today, I go to a large clothes shop in the city center.",
      "I am looking for a new outfit for my school party next week.",
      "First, I see a beautiful blue shirt and a pair of black jeans.",
      "I go to the fitting room to try them on. They fit me perfectly!",
      "My mother also finds a warm brown jacket for me because it is cold outside.",
      "We go to the counter to pay. The clothes are not very expensive."
    ],
    vocabulary: [
      { word: 'Outfit', meaning: 'Bộ đồ / Trang phục' },
      { word: 'Fitting room', meaning: 'Phòng thay đồ' },
      { word: 'Perfectly', meaning: 'Một cách hoàn hảo' },
      { word: 'Counter', meaning: 'Quầy thanh toán' },
      { word: 'Expensive', meaning: 'Đắt tiền' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why does the person need a new outfit?',
        options: ['For a birthday party', 'For a school party', 'For a wedding', 'For a holiday'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...for my school party next week."'
      },
      {
        id: 'q2',
        text: 'What color is the shirt the person sees?',
        options: ['Red', 'White', 'Blue', 'Black'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...a beautiful blue shirt..." '
      },
      {
        id: 'q3',
        text: 'Where does the person go to try on the clothes?',
        options: ['To the garden', 'To the fitting room', 'To the school', 'To the kitchen'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I go to the fitting room to try them on."'
      },
      {
        id: 'q4',
        text: 'Why does the mother find a jacket?',
        options: ['Because it is cheap', 'Because it is hot', 'Because it is cold outside', 'Because it is blue'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...because it is cold outside."'
      },
      {
        id: 'q5',
        text: 'Are the clothes expensive?',
        options: ['Yes, very expensive', 'No, they are free', 'No, they are not very expensive', 'They are very old'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "The clothes are not very expensive."'
      }
    ]
  },
  {
    id: 'a1-35',
    title: 'At the Hospital',
    level: 'A1',
    content: [
      "Sometimes we feel sick or tired. When that happens, we go to the hospital.",
      "The hospital is a very clean and quiet place. There are many doctors and nurses.",
      "The doctor checks my heart and my temperature. He is very kind and patient.",
      "The nurse helps the doctor and gives me some medicine to feel better.",
      "The doctor says I need to drink a lot of water and rest for two days.",
      "I feel safe because the people at the hospital want to help me get well."
    ],
    vocabulary: [
      { word: 'Sick', meaning: 'Ốm, bệnh' },
      { word: 'Temperature', meaning: 'Nhiệt độ' },
      { word: 'Patient', meaning: 'Kiên nhẫn (tính từ) / Bệnh nhân (danh từ)' },
      { word: 'Medicine', meaning: 'Thuốc' },
      { word: 'Rest', meaning: 'Nghỉ ngơi' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When do people go to the hospital?',
        options: ['When they feel happy', 'When they feel sick or tired', 'When they want to play', 'When they go to school'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "When that happens (sick or tired), we go to the hospital."'
      },
      {
        id: 'q2',
        text: 'What does the doctor check?',
        options: ['The person\'s clothes', 'The person\'s bag', 'The person\'s heart and temperature', 'The person\'s phone'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "The doctor checks my heart and my temperature."'
      },
      {
        id: 'q3',
        text: 'Who gives the person some medicine?',
        options: ['The nurse', 'The teacher', 'The father', 'The brother'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "The nurse... gives me some medicine to feel better."'
      },
      {
        id: 'q4',
        text: 'What does the doctor say the person needs to do?',
        options: ['Go to school', 'Drink a lot of water and rest', 'Play football', 'Go shopping'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The doctor says I need to drink a lot of water and rest..." '
      },
      {
        id: 'q5',
        text: 'Why does the person feel safe at the hospital?',
        options: ['Because it is big', 'Because the people want to help them get well', 'Because it has a TV', 'Because it is near the house'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I feel safe because the people... want to help me get well."'
      }
    ]
  },
  {
    id: 'a1-36',
    title: 'A Letter to My Friend',
    level: 'A1',
    content: [
      "Today, I go to the post office to send a letter to my friend in England.",
      "The post office is near the bank. It has many blue and red signs.",
      "First, I write the address on a white envelope.",
      "Then, I buy a small stamp and stick it on the corner of the envelope.",
      "I also buy a beautiful postcard of my city to send to my grandmother.",
      "The man at the counter is very helpful. He takes my letter and smiles."
    ],
    vocabulary: [
      { word: 'Post office', meaning: 'Bưu điện' },
      { word: 'Envelope', meaning: 'Phong bì' },
      { word: 'Stamp', meaning: 'Con tem' },
      { word: 'Address', meaning: 'Địa chỉ' },
      { word: 'Postcard', meaning: 'Bưu thiếp' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the person\'s friend living?',
        options: ['In America', 'In England', 'In France', 'In Vietnam'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...send a letter to my friend in England."'
      },
      {
        id: 'q2',
        text: 'Where is the post office located?',
        options: ['Near the school', 'Near the bank', 'Near the park', 'In the supermarket'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The post office is near the bank."'
      },
      {
        id: 'q3',
        text: 'What does the person write on the white envelope?',
        options: ['Their name', 'A story', 'The address', 'A song'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "First, I write the address on a white envelope."'
      },
      {
        id: 'q4',
        text: 'What does the person do with the stamp?',
        options: ['Puts it inside the envelope', 'Sticks it on the corner of the envelope', 'Throws it away', 'Writes on it'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...stick it on the corner of the envelope."'
      },
      {
        id: 'q5',
        text: 'Who does the person send a postcard to?',
        options: ['Their teacher', 'Their brother', 'Their grandmother', 'Their father'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...send to my grandmother."'
      }
    ]
  },
  {
    id: 'a1-37',
    title: 'A Sunny Day in the Park',
    level: 'A1',
    content: [
      "The sun is shining and it is a beautiful day to go to the park.",
      "Many children are running on the green grass and flying colorful kites.",
      "Some people are sitting on the wooden benches and reading newspapers.",
      "My family has a small picnic under a big tree. We eat sandwiches and fruit.",
      "We must keep the park clean, so we put our trash in the trash bin.",
      "The park is a great place to relax and enjoy the fresh air."
    ],
    vocabulary: [
      { word: 'Shining', meaning: 'Tỏa sáng / Nắng' },
      { word: 'Wooden benches', meaning: 'Ghế băng bằng gỗ' },
      { word: 'Picnic', meaning: 'Dã ngoại' },
      { word: 'Trash bin', meaning: 'Thùng rác' },
      { word: 'Fresh air', meaning: 'Không khí trong lành' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How is the weather in the park?',
        options: ['Rainy and cold', 'Sunny and beautiful', 'Windy and dark', 'Snowy'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The sun is shining and it is a beautiful day..." '
      },
      {
        id: 'q2',
        text: 'What are the children doing on the grass?',
        options: ['Sleeping', 'Running and flying kites', 'Cooking dinner', 'Reading books'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Many children are running... and flying colorful kites."'
      },
      {
        id: 'q3',
        text: 'Where are some people sitting?',
        options: ['On the trees', 'In the trash bin', 'On the wooden benches', 'On the cars'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "Some people are sitting on the wooden benches..." '
      },
      {
        id: 'q4',
        text: 'What does the family eat for their picnic?',
        options: ['Rice and fish', 'Pizza and soda', 'Sandwiches and fruit', 'Cake and candy'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "We eat sandwiches and fruit."'
      },
      {
        id: 'q5',
        text: 'Where should people put their trash?',
        options: ['On the grass', 'Under the tree', 'In the trash bin', 'On the bench'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...we put our trash in the trash bin."'
      }
    ]
  },
  {
    id: 'a1-38',
    title: 'A Visit to the Toy Shop',
    level: 'A1',
    content: [
      "My little brother's birthday is coming, so we go to a big toy shop.",
      "The shop is full of colorful toys on many high shelves.",
      "First, I see a beautiful doll with long hair and a pink dress.",
      "Then, I look at a shiny silver robot that can walk and talk.",
      "We choose a large puzzle because my brother loves to build things.",
      "The shop is very noisy with music and children laughing. It is a happy place."
    ],
    vocabulary: [
      { word: 'Shelves', meaning: 'Giá sách / Kệ để đồ' },
      { word: 'Shiny', meaning: 'Sáng bóng' },
      { word: 'Robot', meaning: 'Người máy' },
      { word: 'Puzzle', meaning: 'Trò chơi xếp hình' },
      { word: 'Noisy', meaning: 'Ồn ào' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why do they go to the toy shop?',
        options: ['To buy a book', 'For the little brother\'s birthday', 'To play games', 'To see friends'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "My little brother\'s birthday is coming, so we go to a big toy shop."'
      },
      {
        id: 'q2',
        text: 'What is the doll wearing?',
        options: ['A blue shirt', 'A red hat', 'A pink dress', 'A yellow coat'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...a beautiful doll with long hair and a pink dress."'
      },
      {
        id: 'q3',
        text: 'What can the shiny silver robot do?',
        options: ['Fly and sing', 'Walk and talk', 'Swim and jump', 'Run and hide'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...a shiny silver robot that can walk and talk."'
      },
      {
        id: 'q4',
        text: 'What toy do they choose for the brother?',
        options: ['A doll', 'A car', 'A large puzzle', 'A robot'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "We choose a large puzzle..." '
      },
      {
        id: 'q5',
        text: 'How is the toy shop described?',
        options: ['Quiet and dark', 'Small and boring', 'Noisy and happy', 'Cold and empty'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "The shop is very noisy... It is a happy place."'
      }
    ]
  },
  {
    id: 'a1-39',
    title: 'My First Flight',
    level: 'A1',
    content: [
      "I am on a big plane to go to a new city. I have a window seat.",
      "The pilot says 'Hello' and the flight attendants help the people.",
      "I must wear my seatbelt when the plane flies high in the sky.",
      "I look out the window and see many white clouds. They look like cotton candy.",
      "A flight attendant gives me a small bag of peanuts and some water.",
      "The flight is very fast and I feel very excited to arrive."
    ],
    vocabulary: [
      { word: 'Pilot', meaning: 'Phi công' },
      { word: 'Flight attendant', meaning: 'Tiếp viên hàng không' },
      { word: 'Seatbelt', meaning: 'Dây an toàn' },
      { word: 'Window seat', meaning: 'Ghế cạnh cửa sổ' },
      { word: 'Excited', meaning: 'Hào hứng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the person sitting on the plane?',
        options: ['Near the door', 'In a window seat', 'Next to the pilot', 'In the kitchen'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I have a window seat."'
      },
      {
        id: 'q2',
        text: 'Who helps the people on the plane?',
        options: ['The driver', 'The flight attendants', 'The doctor', 'The teacher'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...the flight attendants help the people."'
      },
      {
        id: 'q3',
        text: 'What must the person wear when the plane flies?',
        options: ['A hat', 'A coat', 'A seatbelt', 'Glasses'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I must wear my seatbelt..." '
      },
      {
        id: 'q4',
        text: 'What do the clouds look like to the person?',
        options: ['Cotton candy', 'Big mountains', 'Rain', 'Birds'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "They look like cotton candy."'
      },
      {
        id: 'q5',
        text: 'What does the flight attendant give to the person?',
        options: ['A book', 'A toy car', 'Peanuts and water', 'A sandwich'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "A flight attendant gives me a small bag of peanuts and some water."'
      }
    ]
  },
  {
    id: 'a1-40',
    title: 'A Visit to the Museum',
    level: 'A1',
    content: [
      "On Saturday morning, my class goes to the city museum.",
      "The museum is a very large building with many old and interesting things.",
      "First, we see the big skeletons of dinosaurs. They are very tall and scary.",
      "Then, we look at beautiful paintings and white stone statues.",
      "A guide tells us many stories about history. We must not touch the objects.",
      "I take some notes in my notebook. Learning about the past is very fun."
    ],
    vocabulary: [
      { word: 'Museum', meaning: 'Bảo tàng' },
      { word: 'Skeletons', meaning: 'Bộ xương' },
      { word: 'Statues', meaning: 'Bức tượng' },
      { word: 'Guide', meaning: 'Hướng dẫn viên' },
      { word: 'Touch', meaning: 'Chạm vào' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When does the class go to the museum?',
        options: ['On Friday evening', 'On Saturday morning', 'On Sunday afternoon', 'Every day'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "On Saturday morning, my class goes to the city museum."'
      },
      {
        id: 'q2',
        text: 'What is the first thing they see in the museum?',
        options: ['Small birds', 'New cars', 'Big skeletons of dinosaurs', 'Old books'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "First, we see the big skeletons of dinosaurs."'
      },
      {
        id: 'q3',
        text: 'What are the statues made of?',
        options: ['Wood', 'Gold', 'White stone', 'Plastic'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...look at beautiful paintings and white stone statues."'
      },
      {
        id: 'q4',
        text: 'What is the important rule in the museum?',
        options: ['You must run', 'You must not touch the objects', 'You must eat food', 'You must shout'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "We must not touch the objects."'
      },
      {
        id: 'q5',
        text: 'Where does the person take notes?',
        options: ['On the wall', 'In a notebook', 'On the floor', 'On a phone'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I take some notes in my notebook."'
      }
    ]
  },
  {
    id: 'a1-41',
    title: 'The Colorful Sweet Shop',
    level: 'A1',
    content: [
      "There is a new sweet shop near my house. It is small but very colorful.",
      "The windows are full of glass jars with many types of candy.",
      "I see green mints, red strawberries, and yellow lemon drops.",
      "My favorite is the chocolate area. There are big boxes of dark and milk chocolate.",
      "I buy a small bag of mixed sweets for my little sister.",
      "The shop smells like sugar and vanilla. It is a dream for every child."
    ],
    vocabulary: [
      { word: 'Sweet shop', meaning: 'Cửa hàng bánh kẹo' },
      { word: 'Glass jars', meaning: 'Lọ thủy tinh' },
      { word: 'Mixed', meaning: 'Hỗn hợp / Nhiều loại' },
      { word: 'Sugar', meaning: 'Đường' },
      { word: 'Vanilla', meaning: 'Vani' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the new sweet shop?',
        options: ['Near the school', 'Near the person\'s house', 'In the park', 'At the airport'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "There is a new sweet shop near my house."'
      },
      {
        id: 'q2',
        text: 'What are the candy jars made of?',
        options: ['Plastic', 'Wood', 'Glass', 'Paper'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...glass jars with many types of candy."'
      },
      {
        id: 'q3',
        text: 'What color are the lemon drops?',
        options: ['Green', 'Red', 'Yellow', 'Blue'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...yellow lemon drops."'
      },
      {
        id: 'q4',
        text: 'Who does the person buy a bag of sweets for?',
        options: ['Their mother', 'Their teacher', 'Their little sister', 'Their friend'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I buy a small bag of mixed sweets for my little sister."'
      },
      {
        id: 'q5',
        text: 'How does the shop smell?',
        options: ['Like flowers', 'Like sugar and vanilla', 'Like coffee', 'Like fresh bread'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The shop smells like sugar and vanilla."'
      }
    ]
  },
  {
    id: 'a1-42',
    title: 'Waiting for the Bus',
    level: 'A1',
    content: [
      "Every morning, I walk to the bus stop near my house at eight o'clock.",
      "I wait for the number 12 bus to go to my school.",
      "There are many people at the bus stop. Some are reading and some are talking.",
      "When the big yellow bus arrives, the driver opens the door for the passengers.",
      "I show my bus ticket and find a seat near the window.",
      "The bus is a cheap and easy way to travel around the city."
    ],
    vocabulary: [
      { word: 'Bus stop', meaning: 'Điểm dừng xe buýt' },
      { word: 'Arrive', meaning: 'Đến nơi' },
      { word: 'Driver', meaning: 'Tài xế' },
      { word: 'Passenger', meaning: 'Hành khách' },
      { word: 'Ticket', meaning: 'Vé' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What time does the person go to the bus stop?',
        options: ["Seven o'clock", "Eight o'clock", "Nine o'clock", "Six o'clock"],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...go to the bus stop... at eight o\'clock."'
      },
      {
        id: 'q2',
        text: 'Which bus number does the person wait for?',
        options: ['Bus number 10', 'Bus number 12', 'Bus number 20', 'Bus number 5'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I wait for the number 12 bus..." '
      },
      {
        id: 'q3',
        text: 'What color is the bus?',
        options: ['Red', 'Blue', 'Yellow', 'Green'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "When the big yellow bus arrives..." '
      },
      {
        id: 'q4',
        text: 'What does the person show to the driver?',
        options: ['A book', 'A bus ticket', 'A phone', 'A bag'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I show my bus ticket..." '
      },
      {
        id: 'q5',
        text: 'Where does the person sit on the bus?',
        options: ['Behind the driver', 'Near the door', 'Near the window', 'At the back'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...find a seat near the window."'
      }
    ]
  },
  {
    id: 'a1-43',
    title: 'A Visit to the Bookshop',
    level: 'A1',
    content: [
      "I love reading, so I go to the big bookshop in the city center today.",
      "The bookshop is very quiet and organized. There are many bookshelves.",
      "In the children's section, I find many funny comics and colorful picture books.",
      "I also need some things for school, so I go to the stationery area.",
      "I buy two blue notebooks, three black pens, and a long ruler.",
      "I pay at the counter and put my new books in my backpack. I am very happy."
    ],
    vocabulary: [
      { word: 'Bookshop', meaning: 'Hiệu sách' },
      { word: 'Organized', meaning: 'Ngăn nắp, có tổ chức' },
      { word: 'Comics', meaning: 'Truyện tranh' },
      { word: 'Stationery', meaning: 'Văn phòng phẩm' },
      { word: 'Backpack', meaning: 'Ba lô' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the bookshop located?',
        options: ['Near the park', 'In the city center', 'At the school', 'Near the hospital'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...go to the big bookshop in the city center today."'
      },
      {
        id: 'q2',
        text: 'What does the person find in the children\'s section?',
        options: ['Old newspapers', 'Cooking books', 'Funny comics and picture books', 'Maps'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "In the children\'s section, I find many funny comics and colorful picture books."'
      },
      {
        id: 'q3',
        text: 'What does the person buy in the stationery area?',
        options: ['A bag', 'Notebooks, pens, and a ruler', 'A chair', 'A lamp'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I buy two blue notebooks, three black pens, and a long ruler."'
      },
      {
        id: 'q4',
        text: 'Where does the person pay for the things?',
        options: ['At the door', 'In the garden', 'At the counter', 'On the street'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I pay at the counter..." '
      },
      {
        id: 'q5',
        text: 'Where does the person put the new books?',
        options: ['In their pocket', 'In their backpack', 'In the car', 'On the table'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...put my new books in my backpack."'
      }
    ]
  },
  {
    id: 'a1-44',
    title: 'Exercising at the Gym',
    level: 'A1',
    content: [
      "I go to the gym three times a week to stay healthy and strong.",
      "The gym is very big and it has many modern machines.",
      "First, I run on the treadmill for fifteen minutes to warm up.",
      "Then, I lift small weights to make my muscles stronger.",
      "I always bring a water bottle and a small towel with me.",
      "After the exercise, I feel a bit tired but very happy and fresh."
    ],
    vocabulary: [
      { word: 'Gym', meaning: 'Phòng tập thể hình' },
      { word: 'Treadmill', meaning: 'Máy chạy bộ' },
      { word: 'Weights', meaning: 'Tạ' },
      { word: 'Muscles', meaning: 'Cơ bắp' },
      { word: 'Warm up', meaning: 'Khởi động' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How often does the person go to the gym?',
        options: ['Every day', 'Three times a week', 'Once a month', 'Only on Sundays'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I go to the gym three times a week..." '
      },
      {
        id: 'q2',
        text: 'What does the person do first at the gym?',
        options: ['Lifts weights', 'Drinks water', 'Runs on the treadmill', 'Goes to sleep'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "First, I run on the treadmill..." '
      },
      {
        id: 'q3',
        text: 'How long does the person warm up?',
        options: ['Five minutes', 'Ten minutes', 'Fifteen minutes', 'One hour'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...for fifteen minutes to warm up."'
      },
      {
        id: 'q4',
        text: 'What two things does the person always bring?',
        options: ['A book and a pen', 'A water bottle and a small towel', 'A ball and a bat', 'Food and a chair'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I always bring a water bottle and a small towel with me."'
      },
      {
        id: 'q5',
        text: 'How does the person feel after the exercise?',
        options: ['Sad and cold', 'Tired but happy and fresh', 'Angry', 'Very hungry'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "After the exercise, I feel a bit tired but very happy and fresh."'
      }
    ]
  },
  {
    id: 'a1-45',
    title: 'A Trip to the Pharmacy',
    level: 'A1',
    content: [
      "My father has a small headache, so we go to the pharmacy.",
      "The pharmacy is next to the post office and it is very clean.",
      "A pharmacist in a white coat helps us find some medicine.",
      "We also buy a box of bandages and some vitamins for the family.",
      "The pharmacist tells my father to drink water and take the medicine after a meal.",
      "We pay for the items and go home. I hope my father feels better soon."
    ],
    vocabulary: [
      { word: 'Pharmacy', meaning: 'Hiệu thuốc' },
      { word: 'Headache', meaning: 'Đau đầu' },
      { word: 'Pharmacist', meaning: 'Dược sĩ' },
      { word: 'Bandages', meaning: 'Băng cá nhân / Băng gạc' },
      { word: 'Vitamins', meaning: 'Vitamin / Thuốc bổ' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why does the family go to the pharmacy?',
        options: ['To buy a book', 'Because the father has a headache', 'To see a movie', 'To buy food'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "My father has a small headache, so we go to the pharmacy."'
      },
      {
        id: 'q2',
        text: 'Where is the pharmacy located?',
        options: ['Near the school', 'Next to the post office', 'Behind the park', 'In the hospital'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The pharmacy is next to the post office..." '
      },
      {
        id: 'q3',
        text: 'What is the pharmacist wearing?',
        options: ['A black suit', 'A green hat', 'A white coat', 'A blue dress'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "A pharmacist in a white coat helps us..." '
      },
      {
        id: 'q4',
        text: 'When should the father take the medicine?',
        options: ['Before running', 'Before sleeping', 'After a meal', 'In the car'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...take the medicine after a meal."'
      },
      {
        id: 'q5',
        text: 'What else do they buy besides medicine?',
        options: ['Toys', 'Bandages and vitamins', 'A bag', 'Apples'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "We also buy a box of bandages and some vitamins..." '
      }
    ]
  },
  {
    id: 'a1-46',
    title: 'In the Parking Lot',
    level: 'A1',
    content: [
      "The parking lot at the shopping mall is very large and busy.",
      "My father drives our blue car slowly to find a parking space.",
      "There are many rows of cars and some areas for motorbikes.",
      "We park our car between a red van and a small white electric car.",
      "We must remember the number of our parking spot to find the car later.",
      "The exit is near the big supermarket door. We walk there together."
    ],
    vocabulary: [
      { word: 'Parking lot', meaning: 'Bãi đậu xe' },
      { word: 'Shopping mall', meaning: 'Trung tâm thương mại' },
      { word: 'Parking space', meaning: 'Chỗ đậu xe' },
      { word: 'Electric car', meaning: 'Xe điện' },
      { word: 'Exit', meaning: 'Lối ra' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the parking lot located?',
        options: ['At the school', 'At the shopping mall', 'Near the farm', 'In the park'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The parking lot at the shopping mall..." '
      },
      {
        id: 'q2',
        text: 'What color is the family\'s car?',
        options: ['Red', 'White', 'Blue', 'Black'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...drives our blue car slowly..." '
      },
      {
        id: 'q3',
        text: 'Where does the father park the car?',
        options: ['Near the entrance', 'Between a red van and a white electric car', 'On the street', 'In the garden'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "We park our car between a red van and a small white electric car."'
      },
      {
        id: 'q4',
        text: 'What must they remember to find the car later?',
        options: ['The color of the sky', 'The name of the driver', 'The number of the parking spot', 'The price of the car'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "We must remember the number of our parking spot..." '
      },
      {
        id: 'q5',
        text: 'Where is the exit?',
        options: ['Near the big supermarket door', 'Near the park', 'In the basement', 'On the roof'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "The exit is near the big supermarket door."'
      }
    ]
  },
  {
    id: 'a1-47',
    title: 'The Local Bakery',
    level: 'A1',
    content: [
      "Every morning, the local bakery opens at six o'clock.",
      "The smell of fresh bread is wonderful and it fills the street.",
      "My mother buys a long French bread and some chocolate croissants.",
      "The baker wears a white hat and he is always very busy with the oven.",
      "There are also small cookies and large birthday cakes in the glass case.",
      "We love eating the warm bread for our breakfast every day."
    ],
    vocabulary: [
      { word: 'Bakery', meaning: 'Tiệm bánh' },
      { word: 'Fresh bread', meaning: 'Bánh mì tươi' },
      { word: 'Croissants', meaning: 'Bánh sừng bò' },
      { word: 'Baker', meaning: 'Thợ làm bánh' },
      { word: 'Wonderful', meaning: 'Tuyệt vời' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What time does the bakery open?',
        options: ["Five o'clock", "Six o'clock", "Seven o'clock", "Eight o'clock"],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...the local bakery opens at six o\'clock."'
      },
      {
        id: 'q2',
        text: 'What does the mother buy at the bakery?',
        options: ['Milk and eggs', 'French bread and chocolate croissants', 'Apples and bananas', 'Meat and fish'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "My mother buys a long French bread and some chocolate croissants."'
      },
      {
        id: 'q3',
        text: 'What is the baker wearing?',
        options: ['A black suit', 'A white hat', 'A blue coat', 'A red shirt'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The baker wears a white hat..." '
      },
      {
        id: 'q4',
        text: 'Where are the cookies and birthday cakes?',
        options: ['On the floor', 'In a bag', 'In the glass case', 'In the car'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...large birthday cakes in the glass case."'
      },
      {
        id: 'q5',
        text: 'When does the family eat the warm bread?',
        options: ['For lunch', 'For dinner', 'For breakfast', 'At night'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "We love eating the warm bread for our breakfast..." '
      }
    ]
  },
  {
    id: 'a1-48',
    title: 'In the Computer Room',
    level: 'A1',
    content: [
      "Our school has a modern computer room with twenty desktop computers.",
      "Each computer has a large monitor, a keyboard, and a small mouse.",
      "In the IT class, I learn how to type quickly and use the internet safely.",
      "I often search for information for my history and science projects.",
      "We must sit straight and look at the screen carefully.",
      "The computer is a very useful tool for my studies and research."
    ],
    vocabulary: [
      { word: 'Desktop computer', meaning: 'Máy tính để bàn' },
      { word: 'Monitor', meaning: 'Màn hình' },
      { word: 'Keyboard', meaning: 'Bàn phím' },
      { word: 'Type', meaning: 'Gõ phím / Đánh máy' },
      { word: 'Search', meaning: 'Tìm kiếm' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How many computers are there in the school computer room?',
        options: ['Ten', 'Fifteen', 'Twenty', 'Fifty'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...computer room with twenty desktop computers."'
      },
      {
        id: 'q2',
        text: 'What are the three parts of the computer mentioned?',
        options: ['Monitor, keyboard, and mouse', 'Printer, speaker, and camera', 'Phone, tablet, and laptop', 'Screen, bag, and desk'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "...a large monitor, a keyboard, and a small mouse."'
      },
      {
        id: 'q3',
        text: 'What does the person learn in the IT class?',
        options: ['How to cook', 'How to type and use the internet', 'How to play football', 'How to draw'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I learn how to type quickly and use the internet safely."'
      },
      {
        id: 'q4',
        text: 'What does the person search for on the computer?',
        options: ['Games', 'Music videos', 'Information for school projects', 'Toys'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I often search for information for my history and science projects."'
      },
      {
        id: 'q5',
        text: 'How should students sit in the computer room?',
        options: ['Sit on the floor', 'Sit straight', 'Lie down', 'Run around'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "We must sit straight and look at the screen carefully."'
      }
    ]
  },
  {
    id: 'a1-49',
    title: 'A Day at the Harbor',
    level: 'A1',
    content: [
      "The city harbor is a very busy place next to the blue sea.",
      "I see many huge ships that carry heavy boxes from other countries.",
      "There are also small fishing boats with many colorful nets.",
      "The sailors are working hard to move the goods to the land.",
      "I like to watch the white birds flying over the water to find fish.",
      "The harbor is noisy but it is very interesting to see the big ships sail away."
    ],
    vocabulary: [
      { word: 'Harbor', meaning: 'Bến cảng' },
      { word: 'Huge', meaning: 'Khổng lồ' },
      { word: 'Sailors', meaning: 'Thủy thủ' },
      { word: 'Goods', meaning: 'Hàng hóa' },
      { word: 'Sail away', meaning: 'Nhổ neo / Khởi hành' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the harbor located?',
        options: ['In the mountains', 'Next to the blue sea', 'Near the forest', 'In the city center'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The city harbor is a very busy place next to the blue sea."'
      },
      {
        id: 'q2',
        text: 'What do the huge ships carry?',
        options: ['People', 'Animals', 'Heavy boxes', 'Cars'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...huge ships that carry heavy boxes..." '
      },
      {
        id: 'q3',
        text: 'What are the small fishing boats carrying?',
        options: ['Colorful nets', 'Books', 'Toys', 'Computers'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "There are also small fishing boats with many colorful nets."'
      },
      {
        id: 'q4',
        text: 'What are the sailors doing?',
        options: ['Sleeping', 'Fishing', 'Moving the goods', 'Swimming'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "The sailors are working hard to move the goods to the land."'
      },
      {
        id: 'q5',
        text: 'What are the white birds doing?',
        options: ['Sitting on the ships', 'Flying to find fish', 'Singing songs', 'Running on the beach'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I like to watch the white birds flying over the water to find fish."'
      }
    ]
  },
  {
    id: 'a1-50',
    title: 'A Fun Night at the Circus',
    level: 'A1',
    content: [
      "Tonight, my family and I go to the big circus tent in the park.",
      "The circus is full of bright lights and happy music.",
      "First, we see the funny clowns with red noses. They juggle balls and make everyone laugh.",
      "Then, the brave acrobats jump high in the air. They are very strong and fast.",
      "I eat some sweet popcorn while I watch the amazing show.",
      "The circus is a wonderful place for children and adults to have fun together."
    ],
    vocabulary: [
      { word: 'Circus tent', meaning: 'Lều rạp xiếc' },
      { word: 'Clowns', meaning: 'Chú hề' },
      { word: 'Juggle', meaning: 'Tung hứng' },
      { word: 'Acrobats', meaning: 'Nghệ sĩ xiếc nhào lộn' },
      { word: 'Popcorn', meaning: 'Bắp rang bơ' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is the circus tent located?',
        options: ['At the school', 'In the park', 'Near the hospital', 'In the city center'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...go to the big circus tent in the park."'
      },
      {
        id: 'q2',
        text: 'What do the funny clowns have?',
        options: ['Blue hats', 'Green shoes', 'Red noses', 'Black bags'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...funny clowns with red noses."'
      },
      {
        id: 'q3',
        text: 'What do the clowns do to make people laugh?',
        options: ['They sleep', 'They juggle balls', 'They read books', 'They cook food'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "They juggle balls and make everyone laugh."'
      },
      {
        id: 'q4',
        text: 'What do the brave acrobats do?',
        options: ['They swim in the pool', 'They jump high in the air', 'They drive cars', 'They sing songs'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...the brave acrobats jump high in the air."'
      },
      {
        id: 'q5',
        text: 'What does the person eat during the show?',
        options: ['Pizza', 'Sandwiches', 'Sweet popcorn', 'Apples'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I eat some sweet popcorn while I watch the amazing show."'
      }
    ]
  }
];
