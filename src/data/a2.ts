import { Passage } from '../types';

export const a2Passages: Passage[] = [
{
    id: 'a2-01',
    title: 'Planning a Summer Holiday',
    level: 'A2',
    content: [
      "Next month, my family is going to travel to Da Nang for our summer holiday.",
      "We decided to go there because the beaches are beautiful and the food is delicious.",
      "We are going to fly from Hanoi, and the flight will take about one hour and twenty minutes.",
      "My father already booked a hotel near the sea, so we can go swimming every morning.",
      "I want to visit Ba Na Hills to see the famous Golden Bridge and take many photos.",
      "My younger brother is excited about eating fresh seafood like grilled shrimp and fish.",
      "We will also rent a motorbike to explore the city and visit the night market.",
      "I hope the weather will be sunny and warm during our stay there.",
      "This trip will be a great time for us to relax after a busy school year."
    ],
    vocabulary: [
      { word: 'Decided', meaning: 'Đã quyết định' },
      { word: 'Booked', meaning: 'Đã đặt (phòng/vé)' },
      { word: 'Famous', meaning: 'Nổi tiếng' },
      { word: 'Explore', meaning: 'Khám phá' },
      { word: 'Relax', meaning: 'Thư giãn' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'When is the family going to travel to Da Nang?',
        options: ['Next week', 'Next month', 'Next year', 'This weekend'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn bắt đầu bằng: "Next month, my family is going to travel..." '
      },
      {
        id: 'q2',
        text: 'Why did they choose Da Nang for their holiday?',
        options: ['Because it is near their house', 'Because of the beautiful beaches and delicious food', 'Because they want to buy a new car', 'Because it is a very cold place'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...because the beaches are beautiful and the food is delicious."'
      },
      {
        id: 'q3',
        text: 'How are they going to travel from Hanoi to Da Nang?',
        options: ['By train', 'By bus', 'By plane', 'By motorbike'],
        correctAnswerIndex: 2,
        explanation: 'Từ "fly" và "flight" trong bài cho biết họ đi bằng máy bay.'
      },
      {
        id: 'q4',
        text: 'What does the person want to do at Ba Na Hills?',
        options: ['Go swimming', 'See the Golden Bridge and take photos', 'Eat seafood', 'Buy a hotel'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I want to visit Ba Na Hills to see the famous Golden Bridge..." '
      },
      {
        id: 'q5',
        text: 'How will they explore the city and the night market?',
        options: ['By walking', 'By taxi', 'By renting a motorbike', 'By bus'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "We will also rent a motorbike to explore the city..." '
      }
    ]
  },
  {
    id: 'a2-02',
    title: 'A Productive Daily Routine',
    level: 'A2',
    content: [
      "My daily routine is very organized because I want to have a productive day.",
      "I usually wake up at 6:30 AM and start my morning with some light exercise.",
      "After that, I prepare a healthy breakfast with eggs, bread, and orange juice.",
      "I go to school by bus and I always try to arrive fifteen minutes early.",
      "During my classes, I concentrate hard and take many notes in my notebook.",
      "At noon, I have lunch with my classmates and we sometimes talk about our hobbies.",
      "When I come home in the afternoon, I take a short break before doing my homework.",
      "In the evening, I enjoy reading a book or watching a short documentary on TV.",
      "Finally, I go to bed at 10:30 PM to make sure I get enough sleep for the next day."
    ],
    vocabulary: [
      { word: 'Organized', meaning: 'Ngăn nắp / Có tổ chức' },
      { word: 'Productive', meaning: 'Năng suất / Hiệu quả' },
      { word: 'Concentrate', meaning: 'Tập trung' },
      { word: 'Documentary', meaning: 'Phim tài liệu' },
      { word: 'Take a break', meaning: 'Nghỉ giải lao' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What time does the person usually wake up?',
        options: ['At 6:00 AM', 'At 6:30 AM', 'At 7:00 AM', 'At 7:30 AM'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "I usually wake up at 6:30 AM..." '
      },
      {
        id: 'q2',
        text: 'What does the person do before having breakfast?',
        options: ['Does some light exercise', 'Goes to school', 'Reads a book', 'Watches TV'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "...start my morning with some light exercise. After that, I prepare a healthy breakfast."'
      },
      {
        id: 'q3',
        text: 'How does the person go to school?',
        options: ['By bike', 'By car', 'By bus', 'On foot'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "I go to school by bus..." '
      },
      {
        id: 'q4',
        text: 'What does the person do before doing homework in the afternoon?',
        options: ['Has lunch', 'Takes a short break', 'Exercises', 'Goes to sleep'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...I take a short break before doing my homework."'
      },
      {
        id: 'q5',
        text: 'Why does the person go to bed at 10:30 PM?',
        options: ['Because they are bored', 'To make sure they get enough sleep', 'Because the TV is off', 'To wake up late'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...to make sure I get enough sleep for the next day."'
      }
    ]
  },
  {
    id: 'a2-03',
    title: 'My Dream Job',
    level: 'A2',
    content: [
      "Since I was a child, I have always been fascinated by how computers work.",
      "My dream job is to become a software engineer at a global technology company.",
      "I am passionate about creating new applications that can help people in their daily lives.",
      "To achieve this goal, I am studying computer science and practicing coding every day.",
      "I believe that being a software engineer requires good problem-solving skills and creativity.",
      "I also want to work in a team where I can learn from experienced colleagues.",
      "Sometimes, I stay up late to fix bugs in my programs, but I never feel tired.",
      "In the future, I hope to build a website that connects students with great teachers.",
      "I know it is a difficult path, but I will try my best to make my dream come true."
    ],
    vocabulary: [
      { word: 'Fascinated', meaning: 'Bị lôi cuốn / Thu hút' },
      { word: 'Software engineer', meaning: 'Kỹ sư phần mềm' },
      { word: 'Passionate', meaning: 'Đam mê' },
      { word: 'Achieve', meaning: 'Đạt được' },
      { word: 'Colleagues', meaning: 'Đồng nghiệp' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What has the person been fascinated by since childhood?',
        options: ['How cars work', 'How computers work', 'How to cook', 'How to fly'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...I have always been fascinated by how computers work."'
      },
      {
        id: 'q2',
        text: 'What is the person\'s dream job?',
        options: ['A teacher', 'A doctor', 'A software engineer', 'An artist'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "My dream job is to become a software engineer..." '
      },
      {
        id: 'q3',
        text: 'What skills does the person think a software engineer needs?',
        options: ['Cooking and cleaning', 'Singing and dancing', 'Problem-solving and creativity', 'Running and jumping'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...requires good problem-solving skills and creativity."'
      },
      {
        id: 'q4',
        text: 'What kind of project does the person hope to build in the future?',
        options: ['A big bridge', 'A new hospital', 'A website that connects students and teachers', 'A toy shop'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...I hope to build a website that connects students with great teachers."'
      },
      {
        id: 'q5',
        text: 'How does the person feel when fixing bugs late at night?',
        options: ['They feel very angry', 'They never feel tired', 'They want to quit', 'They feel bored'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...but I never feel tired."'
      }
    ]
  },
  {
    id: 'a2-04',
    title: 'City Life and Countryside Life',
    level: 'A2',
    content: [
      "People often have different opinions about where it is better to live: the city or the countryside.",
      "Living in a big city is very exciting because there are many modern shopping malls and cinemas.",
      "However, cities are often much noisier and more crowded than small villages.",
      "On the other hand, the countryside is very peaceful and the air is much fresher.",
      "In the village, people usually know each other well and they are very friendly.",
      "I like visiting my grandparents' farm because I can see many green fields and blue skies.",
      "But sometimes, the countryside can be a bit boring for young people because there are not many jobs.",
      "In contrast, the city offers more opportunities for students to study and find good careers.",
      "In my opinion, both places have their own advantages and disadvantages for everyone."
    ],
    vocabulary: [
      { word: 'Opinions', meaning: 'Ý kiến / Quan điểm' },
      { word: 'Crowded', meaning: 'Đông đúc' },
      { word: 'Peaceful', meaning: 'Yên bình' },
      { word: 'Opportunities', meaning: 'Cơ hội' },
      { word: 'Advantages', meaning: 'Ưu điểm / Lợi thế' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why is living in a big city exciting?',
        options: ['Because it is very quiet', 'Because of modern shopping malls and cinemas', 'Because there are many farms', 'Because it is cheap'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...city is very exciting because there are many modern shopping malls and cinemas."'
      },
      {
        id: 'q2',
        text: 'How are cities different from small villages?',
        options: ['They are smaller', 'They are noisier and more crowded', 'They have fresher air', 'They are more boring'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...cities are often much noisier and more crowded than small villages."'
      },
      {
        id: 'q3',
        text: 'What is a positive thing about the countryside?',
        options: ['The air is fresher', 'There are many cinemas', 'There are many jobs', 'It is very noisy'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "...the countryside is very peaceful and the air is much fresher."'
      },
      {
        id: 'q4',
        text: 'Why do some young people think the countryside is boring?',
        options: ['Because it is too loud', 'Because there are not many jobs', 'Because the food is bad', 'Because they hate green fields'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...the countryside can be a bit boring... because there are not many jobs."'
      },
      {
        id: 'q5',
        text: 'What does the city offer for students?',
        options: ['Fresh air', 'More opportunities for study and careers', 'Farms and cows', 'Quiet nights'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...the city offers more opportunities for students to study and find good careers."'
      }
    ]
  },
  {
    id: 'a2-05',
    title: 'Technology in Our Lives',
    level: 'A2',
    content: [
      "Technology is changing very fast and it is now an essential part of our daily lives.",
      "Most people use smartphones and laptops to work, study, and stay connected with friends.",
      "For example, video calls allow us to see and talk to relatives who live far away.",
      "Moreover, the internet is a huge library where we can find information about any topic.",
      "However, using technology for too many hours every day can be harmful to our health.",
      "Staring at a screen for a long time often makes our eyes feel tired and dry.",
      "Many young people also spend too much time on social media instead of exercising.",
      "It is important to find a balance between using gadgets and spending time outdoors.",
      "In conclusion, technology is a powerful tool if we know how to use it wisely."
    ],
    vocabulary: [
      { word: 'Essential', meaning: 'Thiết yếu / Quan trọng' },
      { word: 'Relatives', meaning: 'Họ hàng / Người thân' },
      { word: 'Harmful', meaning: 'Có hại' },
      { word: 'Balance', meaning: 'Sự cân bằng' },
      { word: 'Wisely', meaning: 'Một cách khôn ngoan' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is technology considered in our daily lives today?',
        options: ['A boring part', 'An essential part', 'A small part', 'An old part'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...it is now an essential part of our daily lives."'
      },
      {
        id: 'q2',
        text: 'What do video calls allow us to do?',
        options: ['Buy new clothes', 'Cook dinner', 'See and talk to relatives far away', 'Go to the moon'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...video calls allow us to see and talk to relatives who live far away."'
      },
      {
        id: 'q3',
        text: 'What happens if we stare at a screen for a long time?',
        options: ['Our eyes feel tired and dry', 'We feel very strong', 'We become faster', 'Our hair grows longer'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Staring at a screen... often makes our eyes feel tired and dry."'
      },
      {
        id: 'q4',
        text: 'What do many young people do instead of exercising?',
        options: ['Read books', 'Sleep all day', 'Spend too much time on social media', 'Go to the farm'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...spend too much time on social media instead of exercising."'
      },
      {
        id: 'q5',
        text: 'What is the main advice in the text?',
        options: ['Stop using technology', 'Use technology all day', 'Find a balance between gadgets and outdoors', 'Buy more smartphones'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "It is important to find a balance between using gadgets and spending time outdoors."'
      }
    ]
  },
  {
    id: 'a2-06',
    title: 'Protecting Our Planet',
    level: 'A2',
    content: [
      "Our planet is facing many environmental problems like pollution and global warming.",
      "To protect the Earth, we should start with small changes in our daily habits.",
      "First, we need to reduce the amount of plastic waste by using reusable bags.",
      "Instead of throwing away old bottles, we can reuse them or recycle them into new things.",
      "Saving energy is also very important, so we must turn off the lights before leaving a room.",
      "We should try to use public transport or ride bicycles to reduce air pollution from cars.",
      "Planting more trees in our garden or neighborhood helps to make the air fresher and cleaner.",
      "If everyone works together, we can keep our environment green and beautiful for the future.",
      "Remember that every small action counts when it comes to saving our home, the Earth."
    ],
    vocabulary: [
      { word: 'Global warming', meaning: 'Sự nóng lên toàn cầu' },
      { word: 'Reduce', meaning: 'Cắt giảm' },
      { word: 'Reusable', meaning: 'Có thể tái sử dụng' },
      { word: 'Recycle', meaning: 'Tái chế' },
      { word: 'Neighborhood', meaning: 'Khu vực lân cận / Hàng xóm' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What are some environmental problems mentioned in the text?',
        options: ['Hunger and poverty', 'Pollution and global warming', 'Rain and snow', 'Traffic jams'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...environmental problems like pollution and global warming."'
      },
      {
        id: 'q2',
        text: 'How can we reduce the amount of plastic waste?',
        options: ['By buying more plastic bottles', 'By using reusable bags', 'By burning plastic', 'By throwing it in the sea'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...reduce the amount of plastic waste by using reusable bags."'
      },
      {
        id: 'q3',
        text: 'What should we do before leaving a room to save energy?',
        options: ['Close the door', 'Open the window', 'Turn off the lights', 'Clean the floor'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...we must turn off the lights before leaving a room."'
      },
      {
        id: 'q4',
        text: 'Why should we use public transport or bicycles?',
        options: ['To go faster', 'To save money for food', 'To reduce air pollution from cars', 'To see more people'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...use public transport or ride bicycles to reduce air pollution..." '
      },
      {
        id: 'q5',
        text: 'What helps to make the air fresher and cleaner?',
        options: ['Building more houses', 'Planting more trees', 'Using more electricity', 'Staying indoors'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Planting more trees... helps to make the air fresher and cleaner."'
      }
    ]
  },
  {
    id: 'a2-07',
    title: 'Healthy Eating Habits',
    level: 'A2',
    content: [
      "Eating a balanced diet is the best way to keep your body healthy and full of energy.",
      "A healthy meal should include plenty of fresh vegetables, fruits, and good proteins like fish or beans.",
      "We should also eat whole grains because they provide essential nutrients for our brain.",
      "Drinking enough water every day is very important to stay hydrated and focused.",
      "However, many people today eat too much fast food, which contains a lot of salt and sugar.",
      "Fast food may be convenient and tasty, but it can lead to health problems if we eat it too often.",
      "Instead of buying snacks, we should try to prepare our own meals at home with fresh ingredients.",
      "Cooking at home is not only healthier but also a great way to save money.",
      "Making small changes in what we eat can help us feel much better and stronger every day."
    ],
    vocabulary: [
      { word: 'Balanced diet', meaning: 'Chế độ ăn cân bằng' },
      { word: 'Proteins', meaning: 'Chất đạm' },
      { word: 'Whole grains', meaning: 'Ngũ cốc nguyên hạt' },
      { word: 'Hydrated', meaning: 'Đủ nước' },
      { word: 'Ingredients', meaning: 'Nguyên liệu' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the best way to keep the body healthy according to the text?',
        options: ['Eating only meat', 'Eating a balanced diet', 'Drinking soda', 'Sleeping all day'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Eating a balanced diet is the best way to keep your body healthy..." '
      },
      {
        id: 'q2',
        text: 'What should a healthy meal include?',
        options: ['Lots of salt and sugar', 'Fast food and snacks', 'Vegetables, fruits, and good proteins', 'Only bread'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "A healthy meal should include plenty of fresh vegetables, fruits, and good proteins..." '
      },
      {
        id: 'q3',
        text: 'Why should we eat whole grains?',
        options: ['Because they are expensive', 'Because they provide essential nutrients for our brain', 'Because they taste like candy', 'Because they have a lot of salt'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...they provide essential nutrients for our brain."'
      },
      {
        id: 'q4',
        text: 'What is a problem with fast food mentioned in the text?',
        options: ['It is too cheap', 'It contains a lot of salt and sugar', 'It is very healthy', 'It has too many vegetables'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...fast food, which contains a lot of salt and sugar."'
      },
      {
        id: 'q5',
        text: 'Besides health, what is another advantage of cooking at home?',
        options: ['It is a great way to save money', 'It is very fast', 'It makes you famous', 'It is boring'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Cooking at home is not only healthier but also a great way to save money."'
      }
    ]
  },
  {
    id: 'a2-08',
    title: 'Effective Study Skills',
    level: 'A2',
    content: [
      "To be successful at school, students need to develop effective study skills.",
      "Firstly, it is very important to create a study timetable to organize your time.",
      "A good timetable helps you balance between studying and relaxing every day.",
      "Secondly, you should find a quiet place to study where there are no distractions.",
      "For example, you should turn off your phone and the television while you are working.",
      "Thirdly, taking clear notes during class is a great way to improve your memory.",
      "It is also helpful to revise your lessons at the end of each week.",
      "Setting small goals for yourself can make you feel more motivated to learn.",
      "Finally, remember that getting enough sleep is essential for your brain to work well."
    ],
    vocabulary: [
      { word: 'Effective', meaning: 'Hiệu quả' },
      { word: 'Timetable', meaning: 'Thời gian biểu' },
      { word: 'Distractions', meaning: 'Sự xao nhãng / Làm phiền' },
      { word: 'Revise', meaning: 'Ôn tập' },
      { word: 'Motivated', meaning: 'Có động lực' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the first step to being successful at school mentioned in the text?',
        options: ['Buying a new computer', 'Creating a study timetable', 'Watching TV', 'Sleeping all day'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Firstly, it is very important to create a study timetable..." '
      },
      {
        id: 'q2',
        text: 'What does a good timetable help you do?',
        options: ['Play more games', 'Balance between studying and relaxing', 'Spend all your money', 'Go to the park'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "A good timetable helps you balance between studying and relaxing every day."'
      },
      {
        id: 'q3',
        text: 'Where should students study?',
        options: ['In a noisy place', 'In a quiet place with no distractions', 'In front of the television', 'At a busy party'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...you should find a quiet place to study where there are no distractions."'
      },
      {
        id: 'q4',
        text: 'What is a great way to improve your memory?',
        options: ['Taking clear notes during class', 'Eating a lot of candy', 'Turning on the radio', 'Talking to friends'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "...taking clear notes during class is a great way to improve your memory."'
      },
      {
        id: 'q5',
        text: 'Why is getting enough sleep important?',
        options: ['Because it is boring', 'It is essential for your brain to work well', 'To dream about movies', 'To be late for school'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...getting enough sleep is essential for your brain to work well."'
      }
    ]
  },
  {
    id: 'a2-09',
    title: 'A Memorable Holiday in the Mountains',
    level: 'A2',
    content: [
      "Last summer, my family and I went to Sapa for a five-day holiday.",
      "We traveled there by train, and the journey took about eight hours.",
      "The weather was much cooler than in Hanoi, which made us feel very comfortable.",
      "On the first day, we visited the local market and saw many colorful traditional clothes.",
      "The next morning, we hiked to the top of a small mountain to see the sunrise.",
      "The view from the top was breathtaking with green rice fields and white clouds.",
      "We also tried many local dishes, and the grilled pork was my favorite.",
      "I took hundreds of beautiful photos to show my friends when I returned home.",
      "It was a wonderful trip because I spent a lot of quality time with my parents."
    ],
    vocabulary: [
      { word: 'Journey', meaning: 'Chuyến đi / Hành trình' },
      { word: 'Traditional', meaning: 'Truyền thống' },
      { word: 'Hiked', meaning: 'Đi bộ đường dài / Leo núi' },
      { word: 'Breathtaking', meaning: 'Đẹp đến ngỡ ngàng (nín thở)' },
      { word: 'Quality time', meaning: 'Thời gian ý nghĩa (bên người thân)' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How long was the family\'s holiday in Sapa?',
        options: ['Three days', 'Five days', 'One week', 'Ten days'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...went to Sapa for a five-day holiday."'
      },
      {
        id: 'q2',
        text: 'How did the weather in Sapa make them feel?',
        options: ['Hot and tired', 'Very comfortable', 'Cold and sad', 'Angry'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The weather was much cooler... made us feel very comfortable."'
      },
      {
        id: 'q3',
        text: 'What did they see at the local market?',
        options: ['New cars', 'Modern computers', 'Many colorful traditional clothes', 'A cinema'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...visited the local market and saw many colorful traditional clothes."'
      },
      {
        id: 'q4',
        text: 'What was the person\'s favorite food during the trip?',
        options: ['Boiled chicken', 'Grilled pork', 'Fried rice', 'Noodle soup'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...the grilled pork was my favorite."'
      },
      {
        id: 'q5',
        text: 'Why was the trip wonderful for the person?',
        options: ['Because it was expensive', 'Because they spent quality time with their parents', 'Because they slept a lot', 'Because they bought a new phone'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "It was a wonderful trip because I spent a lot of quality time with my parents."'
      }
    ]
  },
  {
    id: 'a2-10',
    title: 'The Importance of Friendship',
    level: 'A2',
    content: [
      "Friendship is one of the most valuable things in our lives.",
      "A good friend is someone who is honest, reliable, and always ready to listen to you.",
      "We often meet our friends at school, at work, or through shared hobbies like sports.",
      "True friends help us to overcome difficult times and celebrate our successes together.",
      "It is important to spend quality time with them, such as going for a coffee or a walk.",
      "I have a best friend named Minh, and we have known each other for over five years.",
      "We get along very well because we share the same interests in music and technology.",
      "To keep a friendship strong, we must be supportive and respect each other's opinions.",
      "Having a loyal friend makes our life much happier and less stressful."
    ],
    vocabulary: [
      { word: 'Valuable', meaning: 'Quý giá' },
      { word: 'Reliable', meaning: 'Đáng tin cậy' },
      { word: 'Overcome', meaning: 'Vượt qua' },
      { word: 'Get along with', meaning: 'Hòa hợp với' },
      { word: 'Loyal', meaning: 'Trung thành / Chân thành' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What are some qualities of a good friend mentioned in the text?',
        options: ['Rich and famous', 'Honest, reliable, and a good listener', 'Tall and strong', 'Quiet and shy'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "A good friend is someone who is honest, reliable, and always ready to listen..." '
      },
      {
        id: 'q2',
        text: 'Where can people meet new friends?',
        options: ['Only at home', 'At school, work, or through hobbies', 'Only in a library', 'Nowhere'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "We often meet our friends at school, at work, or through shared hobbies..." '
      },
      {
        id: 'q3',
        text: 'What do true friends do when we have a difficult time?',
        options: ['They leave us alone', 'They help us to overcome it', 'They laugh at us', 'They forget our names'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "True friends help us to overcome difficult times..." '
      },
      {
        id: 'q4',
        text: 'Why do the person and Minh get along very well?',
        options: ['Because they are brothers', 'Because they live in the same house', 'Because they share the same interests in music and technology', 'Because they are teachers'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "We get along very well because we share the same interests in music and technology."'
      },
      {
        id: 'q5',
        text: 'What is necessary to keep a friendship strong?',
        options: ['Buying expensive gifts', 'Being supportive and respecting each other\'s opinions', 'Never talking to each other', 'Being very competitive'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...we must be supportive and respect each other\'s opinions."'
      }
    ]
  },
  {
    id: 'a2-11',
    title: 'The Power of Teamwork',
    level: 'A2',
    content: [
      "Teamwork is the ability to work together toward a common goal in a group.",
      "In school or at work, we often have to complete difficult tasks with other people.",
      "To work effectively, a team should divide the big project into smaller parts.",
      "Each member is responsible for a specific task based on their own strengths.",
      "For example, one person may be good at searching for information, while another is good at speaking.",
      "Communication is very important because members need to share ideas and solve problems together.",
      "If someone in the team faces a problem, others should be ready to support them.",
      "When we work as a team, we can finish the work faster and achieve better results.",
      "As the saying goes, 'If you want to go far, go together' with your teammates."
    ],
    vocabulary: [
      { word: 'Common goal', meaning: 'Mục tiêu chung' },
      { word: 'Task', meaning: 'Nhiệm vụ' },
      { word: 'Responsible', meaning: 'Chịu trách nhiệm' },
      { word: 'Strengths', meaning: 'Thế mạnh / Điểm mạnh' },
      { word: 'Teammates', meaning: 'Đồng đội' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is teamwork according to the text?',
        options: ['Working alone', 'Working together toward a common goal', 'Playing games all day', 'Competing with everyone'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Teamwork is the ability to work together toward a common goal..." '
      },
      {
        id: 'q2',
        text: 'How should a team handle a big project?',
        options: ['One person does everything', 'Wait for the teacher to do it', 'Divide it into smaller parts', 'Forget about it'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...a team should divide the big project into smaller parts."'
      },
      {
        id: 'q3',
        text: 'How should members be assigned tasks?',
        options: ['Based on their strengths', 'By drawing names', 'Everyone does the same thing', 'By who is the oldest'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Each member is responsible for a specific task based on their own strengths."'
      },
      {
        id: 'q4',
        text: 'Why is communication important in a team?',
        options: ['To talk about movies', 'To share ideas and solve problems together', 'To be the loudest person', 'To make people feel sad'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Communication is very important because members need to share ideas and solve problems together."'
      },
      {
        id: 'q5',
        text: 'What is a benefit of working as a team?',
        options: ['It takes more time', 'The work is harder', 'We can finish faster and achieve better results', 'We can go home early'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "When we work as a team, we can finish the work faster and achieve better results."'
      }
    ]
  },
  {
    id: 'a2-12',
    title: 'Learning a Foreign Language',
    level: 'A2',
    content: [
      "Learning a foreign language like English is a challenging but rewarding journey.",
      "It opens up many opportunities to study abroad and find better jobs in the future.",
      "To become fluent, you need to practice four basic skills: listening, speaking, reading, and writing.",
      "Many students find speaking the most difficult because they are afraid of making mistakes.",
      "However, making mistakes is a natural part of learning and helps you improve your skills.",
      "Watching movies and listening to music in English are fun ways to learn new vocabulary.",
      "You should also try to talk to native speakers or classmates to practice your pronunciation.",
      "Using mobile applications and websites can help you study anytime and anywhere.",
      "Persistence is the key to success, so you should spend at least thirty minutes studying every day.",
      "Learning a language is not just about words; it is also about understanding a new culture."
    ],
    vocabulary: [
      { word: 'Challenging', meaning: 'Đầy thử thách' },
      { word: 'Fluent', meaning: 'Trôi chảy / Lưu loát' },
      { word: 'Native speakers', meaning: 'Người bản xứ' },
      { word: 'Persistence', meaning: 'Sự kiên trì' },
      { word: 'Culture', meaning: 'Văn hóa' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What are some opportunities that learning a foreign language provides?',
        options: ['Buying a new car', 'Studying abroad and finding better jobs', 'Sleeping more', 'Playing games'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...opens up many opportunities to study abroad and find better jobs..." '
      },
      {
        id: 'q2',
        text: 'What are the four basic skills mentioned in the text?',
        options: ['Running, jumping, swimming, and diving', 'Listening, speaking, reading, and writing', 'Cooking, cleaning, washing, and drying', 'Singing, dancing, acting, and painting'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...listening, speaking, reading, and writing."'
      },
      {
        id: 'q3',
        text: 'Why do many students find speaking difficult?',
        options: ['Because it is boring', 'Because they are afraid of making mistakes', 'Because they don\'t like talking', 'Because they are too fast'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...speaking the most difficult because they are afraid of making mistakes."'
      },
      {
        id: 'q4',
        text: 'What is a fun way to learn new vocabulary according to the text?',
        options: ['Sleeping all day', 'Watching movies and listening to music', 'Eating snacks', 'Buying a dictionary'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Watching movies and listening to music in English are fun ways to learn new vocabulary."'
      },
      {
        id: 'q5',
        text: 'How long should you spend studying every day to be successful?',
        options: ['Five minutes', 'Ten minutes', 'At least thirty minutes', 'Five hours'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...you should spend at least thirty minutes studying every day."'
      }
    ]
  },
  {
    id: 'a2-13',
    title: 'The Importance of Reading Books',
    level: 'A2',
    content: [
      "Reading books is one of the best habits a person can have for personal growth.",
      "Firstly, books are a great source of knowledge and information about the world.",
      "By reading different genres, you can learn about history, science, and many cultures.",
      "Secondly, reading regularly helps to expand your vocabulary and improve your writing skills.",
      "When you encounter new words in a story, you learn how to use them correctly.",
      "Thirdly, reading is a wonderful way to relax and reduce stress after a busy day.",
      "It allows your imagination to travel to new places without leaving your house.",
      "Instead of spending too much time on social media, you should try to read a few pages every night.",
      "A good book can change the way you think and help you become more creative.",
      "In conclusion, making time to read is an investment in your own mind and future."
    ],
    vocabulary: [
      { word: 'Growth', meaning: 'Sự phát triển' },
      { word: 'Source', meaning: 'Nguồn' },
      { word: 'Encounter', meaning: 'Bắt gặp / Chạm trán' },
      { word: 'Expand', meaning: 'Mở rộng' },
      { word: 'Investment', meaning: 'Sự đầu tư' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is reading books considered for personal growth?',
        options: ['A bad habit', 'One of the best habits', 'A waste of time', 'A boring activity'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Reading books is one of the best habits a person can have..." '
      },
      {
        id: 'q2',
        text: 'What can you learn about by reading different genres?',
        options: ['Only games', 'History, science, and many cultures', 'Cooking and cleaning', 'Singing and dancing'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...you can learn about history, science, and many cultures."'
      },
      {
        id: 'q3',
        text: 'How does reading regularly affect your vocabulary?',
        options: ['It makes it smaller', 'It helps to expand it', 'It has no effect', 'It makes you forget words'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...helps to expand your vocabulary..." '
      },
      {
        id: 'q4',
        text: 'What is a benefit of reading mentioned in the text for after a busy day?',
        options: ['It makes you feel tired', 'It helps to relax and reduce stress', 'It makes you hungry', 'It is very noisy'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...reading is a wonderful way to relax and reduce stress after a busy day."'
      },
      {
        id: 'q5',
        text: 'What should you do instead of spending too much time on social media?',
        options: ['Buy a new phone', 'Read a few pages of a book every night', 'Go to sleep early', 'Watch more TV'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...you should try to read a few pages every night."'
      }
    ]
  },
  {
    id: 'a2-14',
    title: 'The Art of Communication',
    level: 'A2',
    content: [
      "Effective communication is more than just speaking; it is also about listening.",
      "To be a good communicator, you should practice active listening every day.",
      "This means paying full attention to the person who is talking to you.",
      "Using eye contact and nodding your head shows that you are interested in their ideas.",
      "Body language, such as your posture and hand gestures, is also very important.",
      "Moreover, you should always speak clearly and use simple words to be understood.",
      "If you do not understand something, do not be afraid to ask polite questions.",
      "Communication helps to build trust and avoid many unnecessary arguments.",
      "When people communicate well, they can solve problems much more easily.",
      "Developing this skill takes time, but it will help you in both school and work."
    ],
    vocabulary: [
      { word: 'Effective', meaning: 'Hiệu quả' },
      { word: 'Active listening', meaning: 'Lắng nghe chủ động' },
      { word: 'Eye contact', meaning: 'Giao tiếp bằng mắt' },
      { word: 'Gestures', meaning: 'Điệu bộ / Cử chỉ' },
      { word: 'Arguments', meaning: 'Sự tranh cãi' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is effective communication besides just speaking?',
        options: ['Writing letters', 'Active listening', 'Shouting loudly', 'Being quiet'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...it is also about listening."'
      },
      {
        id: 'q2',
        text: 'How can you show that you are interested in someone\'s ideas?',
        options: ['By looking at your phone', 'By using eye contact and nodding', 'By talking over them', 'By walking away'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Using eye contact and nodding your head shows that you are interested..." '
      },
      {
        id: 'q3',
        text: 'What are examples of body language mentioned in the text?',
        options: ['Eating and drinking', 'Posture and hand gestures', 'Singing and dancing', 'Running and jumping'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Body language, such as your posture and hand gestures, is also very important."'
      },
      {
        id: 'q4',
        text: 'What should you do if you do not understand something?',
        options: ['Stay silent', 'Ask polite questions', 'Get angry', 'Leave the room'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...do not be afraid to ask polite questions."'
      },
      {
        id: 'q5',
        text: 'How does good communication help people solve problems?',
        options: ['By making them harder', 'By avoiding them', 'By making them much more easy to solve', 'By creating more arguments'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "When people communicate well, they can solve problems much more easily."'
      }
    ]
  },
  {
    id: 'a2-15',
    title: 'The Benefits of Playing Sports',
    level: 'A2',
    content: [
      "Playing sports is one of the most effective ways to maintain a healthy lifestyle.",
      "Firstly, regular physical activity helps to strengthen your heart and muscles.",
      "It also helps you to burn calories and keep a fit body, which reduces the risk of diseases.",
      "Secondly, sports are not only good for your body but also for your mental health.",
      "When you exercise, your brain releases chemicals that make you feel happier and less stressed.",
      "Thirdly, team sports like football or basketball teach us about cooperation and discipline.",
      "You learn how to follow rules and work with others to achieve a common goal.",
      "Moreover, sports can help you build confidence when you overcome challenges during a game.",
      "Winning or losing is not as important as the effort and the friends you make.",
      "In conclusion, everyone should choose a sport they love and practice it regularly."
    ],
    vocabulary: [
      { word: 'Maintain', meaning: 'Duy trì' },
      { word: 'Mental health', meaning: 'Sức khỏe tinh thần' },
      { word: 'Discipline', meaning: 'Kỷ luật' },
      { word: 'Overcome', meaning: 'Vượt qua' },
      { word: 'Effort', meaning: 'Sự nỗ lực' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is playing sports considered for a healthy lifestyle?',
        options: ['A waste of time', 'One of the most effective ways', 'A boring activity', 'A very expensive way'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Playing sports is one of the most effective ways to maintain a healthy lifestyle."'
      },
      {
        id: 'q2',
        text: 'How does physical activity affect the heart and muscles?',
        options: ['It makes them weaker', 'It helps to strengthen them', 'It has no effect', 'It makes them painful'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...physical activity helps to strengthen your heart and muscles."'
      },
      {
        id: 'q3',
        text: 'What happens to the brain when you exercise?',
        options: ['It becomes tired', 'It releases chemicals that make you feel happier', 'It forgets everything', 'It stops working'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...your brain releases chemicals that make you feel happier and less stressed."'
      },
      {
        id: 'q4',
        text: 'What do team sports teach us?',
        options: ['How to fight', 'Cooperation and discipline', 'How to be lazy', 'How to play alone'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...team sports like football or basketball teach us about cooperation and discipline."'
      },
      {
        id: 'q5',
        text: 'What is more important than winning or losing in sports?',
        options: ['Buying expensive shoes', 'The effort and the friends you make', 'Being the fastest', 'Having many fans'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Winning or losing is not as important as the effort and the friends you make."'
      }
    ]
  },
  {
    id: 'a2-16',
    title: 'Solving Problems Step by Step',
    level: 'A2',
    content: [
      "Problem-solving is a vital skill that helps us overcome challenges in life and work.",
      "The first step is to identify the problem clearly so you know exactly what is wrong.",
      "After that, you should analyze the situation to understand why the problem happened.",
      "Then, it is helpful to brainstorm many different solutions without judging them at first.",
      "You can talk to your friends or colleagues to get new ideas and perspectives.",
      "Next, you must evaluate each solution by looking at its advantages and disadvantages.",
      "Choose the best option and create a simple plan to put the solution into action.",
      "While you are implementing the plan, be patient and ready to make small changes if needed.",
      "Finally, check the results to see if the problem is solved and learn from the experience.",
      "Developing this skill makes you feel more confident and less worried about future difficulties."
    ],
    vocabulary: [
      { word: 'Identify', meaning: 'Xác định / Nhận diện' },
      { word: 'Analyze', meaning: 'Phân tích' },
      { word: 'Brainstorm', meaning: 'Động não / Nghĩ ra nhiều ý tưởng' },
      { word: 'Evaluate', meaning: 'Đánh giá' },
      { word: 'Implement', meaning: 'Thực hiện / Triển khai' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the first step in problem-solving?',
        options: ['Ask for money', 'Identify the problem clearly', 'Go to sleep', 'Tell everyone a lie'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The first step is to identify the problem clearly..." '
      },
      {
        id: 'q2',
        text: 'Why should you analyze the situation?',
        options: ['To forget the problem', 'To understand why the problem happened', 'To make it worse', 'To buy a new tool'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...analyze the situation to understand why the problem happened."'
      },
      {
        id: 'q3',
        text: 'What should you do during the brainstorming step?',
        options: ['Judge every idea quickly', 'Think of many different solutions', 'Only think of one idea', 'Wait for someone else to think'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...it is helpful to brainstorm many different solutions..." '
      },
      {
        id: 'q4',
        text: 'How should you evaluate each solution?',
        options: ['By its color', 'By looking at its advantages and disadvantages', 'By how much it costs only', 'By asking a child'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...evaluate each solution by looking at its advantages and disadvantages."'
      },
      {
        id: 'q5',
        text: 'What is the benefit of developing problem-solving skills?',
        options: ['It makes you feel more confident', 'It makes you very tired', 'It solves all your problems automatically', 'It makes you rich'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Developing this skill makes you feel more confident..." '
      }
    ]
  },
  {
    id: 'a2-17',
    title: 'Managing Your Personal Finance',
    level: 'A2',
    content: [
      "Learning how to manage your money is an essential skill for every young adult.",
      "The first step to financial freedom is creating a monthly budget to track your income.",
      "You should list all your necessary expenses, such as food, rent, and transport.",
      "It is important to distinguish between what you 'need' and what you 'want' to buy.",
      "Try to save at least ten percent of your monthly income for future emergencies.",
      "Many people fall into debt because they spend more money than they actually earn.",
      "To avoid this, you can use mobile apps to record every small purchase you make.",
      "Shopping during sales or using coupons is also a smart way to reduce your spending.",
      "Saving money early allows you to invest in your education or a new business later.",
      "In conclusion, being disciplined with money helps you live a more stress-free life."
    ],
    vocabulary: [
      { word: 'Finance', meaning: 'Tài chính' },
      { word: 'Budget', meaning: 'Ngân sách' },
      { word: 'Expenses', meaning: 'Chi phí / Khoản chi' },
      { word: 'Distinguish', meaning: 'Phân biệt' },
      { word: 'Debt', meaning: 'Khoản nợ' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the first step to financial freedom mentioned in the text?',
        options: ['Buying a car', 'Creating a monthly budget', 'Borrowing money', 'Giving money away'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The first step to financial freedom is creating a monthly budget..." '
      },
      {
        id: 'q2',
        text: 'What should you list in your budget?',
        options: ['Only toys', 'Only expensive gifts', 'Necessary expenses like food and rent', 'Things you want to buy later'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "You should list all your necessary expenses, such as food, rent, and transport."'
      },
      {
        id: 'q3',
        text: 'How much of your income should you try to save for emergencies?',
        options: ['At least 10%', 'At least 50%', 'Exactly 5%', 'Nothing'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Try to save at least ten percent of your monthly income..." '
      },
      {
        id: 'q4',
        text: 'Why do many people fall into debt?',
        options: ['Because they save too much', 'Because they spend more than they earn', 'Because they work too hard', 'Because they use coupons'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Many people fall into debt because they spend more money than they actually earn."'
      },
      {
        id: 'q5',
        text: 'What is a benefit of being disciplined with money?',
        options: ['You feel more stressed', 'You live a more stress-free life', 'You become lazy', 'You stop working'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...being disciplined with money helps you live a more stress-free life."'
      }
    ]
  },
  {
    id: 'a2-18',
    title: 'Giving a Great Presentation',
    level: 'A2',
    content: [
      "Public speaking is a skill that anyone can learn with enough practice and preparation.",
      "First, you must understand your audience to choose the right words and topics.",
      "A good presentation should have a clear structure: an introduction, a body, and a conclusion.",
      "Using visual aids like slides or pictures can help the audience follow your ideas easily.",
      "During the presentation, try to maintain eye contact with different people in the room.",
      "Speaking at a moderate pace is important so that everyone can hear and understand you.",
      "If you feel nervous, take a deep breath and smile to feel more relaxed and confident.",
      "At the end of your talk, always summarize the main points to help the audience remember them.",
      "You should also leave some time for a Q&A session to answer any questions from the listeners.",
      "The more you practice, the more natural and effective your presentations will become."
    ],
    vocabulary: [
      { word: 'Public speaking', meaning: 'Thuyết trình trước công chúng' },
      { word: 'Visual aids', meaning: 'Công cụ hỗ trợ trực quan (hình ảnh, slide)' },
      { word: 'Moderate pace', meaning: 'Tốc độ vừa phải' },
      { word: 'Summarize', meaning: 'Tóm tắt' },
      { word: 'Q&A session', meaning: 'Phiên hỏi và đáp' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is necessary to learn public speaking according to the text?',
        options: ['Buying a microphone', 'Practice and preparation', 'Reading a dictionary', 'Being very tall'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...skill that anyone can learn with enough practice and preparation."'
      },
      {
        id: 'q2',
        text: 'What are the three parts of a good presentation structure?',
        options: ['A song, a dance, and a story', 'A start, a middle, and an end', 'An introduction, a body, and a conclusion', 'A question, an answer, and a prize'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...an introduction, a body, and a conclusion."'
      },
      {
        id: 'q3',
        text: 'How can visual aids help the audience?',
        options: ['They make the room dark', 'They help the audience follow ideas easily', 'They play loud music', 'They take a lot of photos'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Using visual aids... can help the audience follow your ideas easily."'
      },
      {
        id: 'q4',
        text: 'What should you do if you feel nervous during a presentation?',
        options: ['Run away', 'Stop talking', 'Take a deep breath and smile', 'Shout loudly'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...take a deep breath and smile to feel more relaxed and confident."'
      },
      {
        id: 'q5',
        text: 'Why should you summarize the main points at the end?',
        options: ['To make the talk longer', 'To help the audience remember them', 'To show off your voice', 'To find more questions'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...summarize the main points to help the audience remember them."'
      }
    ]
  },
  {
    id: 'a2-19',
    title: 'The Importance of a Good Night\'s Sleep',
    level: 'A2',
    content: [
      "Sleep is a vital part of our daily life, just as important as air, water, and food.",
      "Most adults need between seven and nine hours of quality sleep every night.",
      "While you are sleeping, your body is busy repairing muscles and strengthening your immune system.",
      "Moreover, sleep is essential for your brain to process information and improve memory.",
      "If you do not get enough sleep, you may feel tired, irritable, and lose concentration.",
      "Lack of sleep can also lead to long-term health problems like stress and heart disease.",
      "To sleep better, you should set a regular schedule by going to bed at the same time every day.",
      "It is also helpful to avoid using smartphones or drinking caffeine before bedtime.",
      "A dark, quiet, and cool bedroom creates the best environment for a deep and restful sleep.",
      "Remember that a good day always starts with a good night of rest."
    ],
    vocabulary: [
      { word: 'Vital', meaning: 'Sống còn / Vô cùng quan trọng' },
      { word: 'Immune system', meaning: 'Hệ miễn dịch' },
      { word: 'Irritable', meaning: 'Dễ cáu kỉnh' },
      { word: 'Concentration', meaning: 'Sự tập trung' },
      { word: 'Caffeine', meaning: 'Chất kích thích (có trong cà phê, trà)' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How much sleep do most adults need every night?',
        options: ['Four to five hours', 'Seven to nine hours', 'Twelve hours', 'Only two hours'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Most adults need between seven and nine hours..." '
      },
      {
        id: 'q2',
        text: 'What is the body doing while you are sleeping?',
        options: ['Eating food', 'Repairing muscles and strengthening the immune system', 'Working on a computer', 'Running a marathon'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...your body is busy repairing muscles and strengthening your immune system."'
      },
      {
        id: 'q3',
        text: 'How might you feel if you do not get enough sleep?',
        options: ['Happy and energetic', 'Tired, irritable, and lose concentration', 'Very strong', 'Hungry and thirsty'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...you may feel tired, irritable, and lose concentration."'
      },
      {
        id: 'q4',
        text: 'What is a good way to improve your sleep quality?',
        options: ['Drinking a lot of coffee', 'Using a smartphone in bed', 'Setting a regular sleep schedule', 'Leaving the lights on'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...you should set a regular schedule by going to bed at the same time every day."'
      },
      {
        id: 'q5',
        text: 'What kind of environment is best for deep sleep?',
        options: ['Noisy and bright', 'A dark, quiet, and cool bedroom', 'A hot and small room', 'A living room with a TV on'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "A dark, quiet, and cool bedroom creates the best environment..." '
      }
    ]
  },
  {
    id: 'a2-20',
    title: 'The Power of Creativity',
    level: 'A2',
    content: [
      "Creativity is the ability to think about things in a new and unique way.",
      "Many people believe that only artists or musicians are creative, but that is not true.",
      "In fact, everyone has a creative side that can be developed with practice.",
      "Creativity helps us solve difficult problems by finding unexpected solutions.",
      "You can be creative in many different activities, like cooking a new dish or writing code.",
      "One way to improve your creativity is to try new things and meet different people.",
      "When you see the world from a different perspective, you get more interesting ideas.",
      "It is also important to spend time alone to let your imagination run free.",
      "Do not be afraid of making mistakes, because they are often a part of the creative process.",
      "The more you use your creativity, the more confident and innovative you will become."
    ],
    vocabulary: [
      { word: 'Creativity', meaning: 'Sự sáng tạo' },
      { word: 'Unique', meaning: 'Độc đáo / Duy nhất' },
      { word: 'Unexpected', meaning: 'Bất ngờ / Không lường trước' },
      { word: 'Perspective', meaning: 'Góc nhìn / Quan điểm' },
      { word: 'Innovative', meaning: 'Có tính đổi mới / Sáng tạo' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the definition of creativity according to the text?',
        options: ['Thinking about things in a new and unique way', 'Copying other people\'s ideas', 'Working as fast as possible', 'Buying expensive art tools'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Creativity is the ability to think about things in a new and unique way."'
      },
      {
        id: 'q2',
        text: 'Who can be creative according to the author?',
        options: ['Only artists', 'Only musicians', 'Everyone', 'Only young children'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...everyone has a creative side that can be developed with practice."'
      },
      {
        id: 'q3',
        text: 'How does creativity help us with problems?',
        options: ['By making them harder', 'By ignoring them', 'By finding unexpected solutions', 'By asking someone else to solve them'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "Creativity helps us solve difficult problems by finding unexpected solutions."'
      },
      {
        id: 'q4',
        text: 'What is one way to improve creativity mentioned in the text?',
        options: ['Doing the same thing every day', 'Trying new things and meeting different people', 'Staying in a dark room', 'Watching the same movie many times'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "One way to improve your creativity is to try new things and meet different people."'
      },
      {
        id: 'q5',
        text: 'Why should you not be afraid of making mistakes?',
        options: ['Because they are expensive', 'Because they are a part of the creative process', 'Because you can hide them', 'Because they make you famous'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Do not be afraid of making mistakes, because they are often a part of the creative process."'
      }
    ]
  },
  {
    id: 'a2-21',
    title: 'Mastering Time Management',
    level: 'A2',
    content: [
      "Time management is the process of organizing and planning how to divide your time between specific activities.",
      "Good time management allows you to work smarter – not harder – so that you get more done in less time.",
      "The first rule is to create a 'to-do list' every morning to see what needs to be finished.",
      "You should rank your tasks by priority, focusing on the most important ones first.",
      "It is helpful to set a specific time limit for each task to stay focused and avoid wasting time.",
      "One of the biggest enemies of productivity is procrastination, which means delaying your work.",
      "To avoid this, you should break big projects into smaller, manageable steps.",
      "Don't forget to take short breaks between tasks to keep your mind fresh and energetic.",
      "Learning to say 'no' to unimportant requests is also a key part of managing your schedule.",
      "In the end, managing your time well reduces stress and gives you more free time for your hobbies."
    ],
    vocabulary: [
      { word: 'Management', meaning: 'Sự quản lý' },
      { word: 'Priority', meaning: 'Sự ưu tiên' },
      { word: 'Procrastination', meaning: 'Sự trì hoãn' },
      { word: 'Manageable', meaning: 'Có thể quản lý/xử lý được' },
      { word: 'Schedule', meaning: 'Lịch trình' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does good time management allow you to do?',
        options: ['Work harder and longer', 'Work smarter and get more done in less time', 'Sleep all day', 'Spend all your money'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Good time management allows you to work smarter – not harder – so that you get more done in less time."'
      },
      {
        id: 'q2',
        text: 'What should you do every morning according to the text?',
        options: ['Watch a movie', 'Create a to-do list', 'Go shopping', 'Call a friend'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The first rule is to create a \'to-do list\' every morning..." '
      },
      {
        id: 'q3',
        text: 'How should you rank your tasks?',
        options: ['By how much you like them', 'By priority', 'By their color', 'Alphabetically'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "You should rank your tasks by priority..." '
      },
      {
        id: 'q4',
        text: 'What does "procrastination" mean?',
        options: ['Working very fast', 'Delaying your work', 'Helping others', 'Reading books'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...procrastination, which means delaying your work."'
      },
      {
        id: 'q5',
        text: 'What is a benefit of managing your time well?',
        options: ['It increases stress', 'It reduces stress and gives more free time', 'It makes you feel tired', 'It makes you lose friends'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...managing your time well reduces stress and gives you more free time for your hobbies."'
      }
    ]
  },
  {
    id: 'a2-22',
    title: 'The Importance of Adaptability',
    level: 'A2',
    content: [
      "Adaptability is the ability to change your actions or ideas to fit a new situation.",
      "In the modern world, things change very fast, so being flexible is extremely important.",
      "For example, you might have to learn a new computer program or move to a different city.",
      "People who can adapt easily are usually less stressed when facing unexpected problems.",
      "To improve this skill, you should keep an open mind and be willing to learn from others.",
      "Instead of complaining about changes, try to look for the positive opportunities they bring.",
      "Employers value workers who can adjust quickly to new teams and different ways of working.",
      "Being adaptable also means you are not afraid to step out of your comfort zone.",
      "It helps you grow as a person because you gain more experience from diverse situations.",
      "In short, the more adaptable you are, the more successful you will be in your career."
    ],
    vocabulary: [
      { word: 'Adaptability', meaning: 'Khả năng thích nghi' },
      { word: 'Flexible', meaning: 'Linh hoạt' },
      { word: 'Unexpected', meaning: 'Bất ngờ / Không lường trước' },
      { word: 'Comfort zone', meaning: 'Vùng an toàn' },
      { word: 'Diverse', meaning: 'Đa dạng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is adaptability according to the text?',
        options: ['Staying the same forever', 'The ability to change to fit a new situation', 'Running very fast', 'Talking to everyone'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Adaptability is the ability to change your actions or ideas to fit a new situation."'
      },
      {
        id: 'q2',
        text: 'How do adaptable people feel when facing unexpected problems?',
        options: ['Very angry', 'Usually less stressed', 'More bored', 'Terrified'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "People who can adapt easily are usually less stressed..." '
      },
      {
        id: 'q3',
        text: 'What should you do instead of complaining about changes?',
        options: ['Look for positive opportunities', 'Stay silent', 'Quit your job', 'Hide in your room'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Instead of complaining about changes, try to look for the positive opportunities they bring."'
      },
      {
        id: 'q4',
        text: 'Why do employers value adaptable workers?',
        options: ['Because they are cheap', 'Because they can adjust quickly to new teams', 'Because they speak many languages', 'Because they arrive early'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Employers value workers who can adjust quickly to new teams..." '
      },
      {
        id: 'q5',
        text: 'What is a benefit of stepping out of your comfort zone?',
        options: ['You gain more experience', 'You get more sleep', 'You lose money', 'It is very boring'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "It helps you grow as a person because you gain more experience from diverse situations."'
      }
    ]
  },
  {
    id: 'a2-23',
    title: 'The Qualities of a Good Leader',
    level: 'A2',
    content: [
      "Leadership is not just about giving orders; it is about inspiring others to do their best.",
      "A good leader needs to have a clear vision of what the team wants to achieve.",
      "Communication is vital, as a leader must listen to everyone's ideas and concerns.",
      "They should also be decisive and make firm choices even when situations are difficult.",
      "Empathy is another important quality, which means understanding how others feel.",
      "By showing empathy, a leader can build a strong and supportive environment for everyone.",
      "When the team faces a failure, a true leader takes responsibility instead of blaming others.",
      "They also celebrate small successes to keep the team motivated and happy at work.",
      "Anyone can develop leadership skills by practicing honesty and being a good example.",
      "Ultimately, great leaders help others grow and become leaders themselves one day."
    ],
    vocabulary: [
      { word: 'Leadership', meaning: 'Khả năng lãnh đạo' },
      { word: 'Inspiring', meaning: 'Truyền cảm hứng' },
      { word: 'Decisive', meaning: 'Quyết đoán' },
      { word: 'Empathy', meaning: 'Sự thấu cảm' },
      { word: 'Responsibility', meaning: 'Trách nhiệm' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is leadership besides giving orders?',
        options: ['Being the loudest person', 'Inspiring others to do their best', 'Buying gifts for the team', 'Talking all the time'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...it is about inspiring others to do their best."'
      },
      {
        id: 'q2',
        text: 'Why is communication vital for a leader?',
        options: ['To tell jokes', 'To listen to everyone\'s ideas and concerns', 'To keep secrets', 'To shout at people'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...a leader must listen to everyone\'s ideas and concerns."'
      },
      {
        id: 'q3',
        text: 'What does "empathy" mean in the text?',
        options: ['Being very rich', 'Understanding how others feel', 'Being very fast', 'Having many followers'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Empathy... means understanding how others feel."'
      },
      {
        id: 'q4',
        text: 'What does a true leader do when the team faces a failure?',
        options: ['Blames the team members', 'Takes responsibility', 'Quits the job', 'Ignores the problem'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...a true leader takes responsibility instead of blaming others."'
      },
      {
        id: 'q5',
        text: 'How can anyone develop leadership skills?',
        options: ['By being a good example and honest', 'By reading books only', 'By being very strong', 'By winning every game'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "...by practicing honesty and being a good example."'
      }
    ]
  },
  {
    id: 'a2-24',
    title: 'The Art of Self-Learning',
    level: 'A2',
    content: [
      "In a world where information is everywhere, self-learning is a superpower.",
      "Self-learning is the ability to identify what you need to know and find the resources to learn it.",
      "The first step is to have a strong curiosity about how things work around you.",
      "You can use various tools like online courses, books, and educational videos to study.",
      "One of the biggest challenges of self-learning is staying disciplined without a teacher.",
      "To succeed, you should set clear goals and create a study plan that fits your schedule.",
      "It is also helpful to join online communities where you can ask questions and share knowledge.",
      "Practicing what you learn by doing small projects is the best way to remember information.",
      "Do not be discouraged if you find a topic difficult at first; persistence is key.",
      "Ultimately, being a self-learner allows you to keep growing throughout your entire life."
    ],
    vocabulary: [
      { word: 'Superpower', meaning: 'Siêu năng lực' },
      { word: 'Resources', meaning: 'Nguồn tài liệu / Nguồn lực' },
      { word: 'Curiosity', meaning: 'Sự tò mò' },
      { word: 'Disciplined', meaning: 'Có tính kỷ luật' },
      { word: 'Discouraged', meaning: 'Nản lòng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is self-learning according to the text?',
        options: ['Waiting for a teacher to help', 'Finding resources to learn what you need', 'Buying many expensive books', 'Going to school every day'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Self-learning is the ability to identify what you need to know and find the resources to learn it."'
      },
      {
        id: 'q2',
        text: 'What is the first step of self-learning mentioned?',
        options: ['Buying a computer', 'Having a strong curiosity', 'Paying for a course', 'Taking an exam'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The first step is to have a strong curiosity about how things work..." '
      },
      {
        id: 'q3',
        text: 'What is a big challenge of self-learning?',
        options: ['Finding a library', 'Staying disciplined without a teacher', 'Buying a notebook', 'Watching videos'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "One of the biggest challenges... is staying disciplined without a teacher."'
      },
      {
        id: 'q4',
        text: 'What is the best way to remember new information?',
        options: ['Practicing by doing small projects', 'Reading the same page many times', 'Sleeping after studying', 'Writing on the wall'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Practicing what you learn by doing small projects is the best way to remember information."'
      },
      {
        id: 'q5',
        text: 'What should you do if a topic is difficult at first?',
        options: ['Quit immediately', 'Find a different hobby', 'Be persistent and do not be discouraged', 'Forget about it'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "Do not be discouraged if you find a topic difficult at first; persistence is key."'
      }
    ]
  },
  {
    id: 'a2-25',
    title: 'The Power of Critical Thinking',
    level: 'A2',
    content: [
      "Critical thinking is the ability to analyze information and make a logical judgment.",
      "In the digital age, we receive a lot of news, so we must learn to think critically.",
      "The first step is to ask questions: Where does this information come from?",
      "You should always check if the facts are true before you believe or share them.",
      "It is important to distinguish between a proven fact and someone's personal opinion.",
      "Critical thinkers do not just follow the crowd; they look for evidence and logic.",
      "This skill helps you solve complex problems and avoid being cheated by fake news.",
      "When you listen to an argument, try to look at it from many different points of view.",
      "Being open-minded is a key part of thinking clearly and making better decisions.",
      "Developing critical thinking takes time, but it makes you a much smarter learner."
    ],
    vocabulary: [
      { word: 'Critical thinking', meaning: 'Tư duy phản biện' },
      { word: 'Judgment', meaning: 'Sự phán đoán / Đánh giá' },
      { word: 'Distinguish', meaning: 'Phân biệt' },
      { word: 'Evidence', meaning: 'Bằng chứng' },
      { word: 'Fake news', meaning: 'Tin giả' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is critical thinking according to the text?',
        options: ['Accepting all news quickly', 'The ability to analyze information and make a logical judgment', 'Arguing with everyone', 'Being very quiet'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Critical thinking is the ability to analyze information and make a logical judgment."'
      },
      {
        id: 'q2',
        text: 'What is the first step of thinking critically?',
        options: ['Sharing the news immediately', 'Asking questions about the source of information', 'Buying a new book', 'Closing your eyes'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The first step is to ask questions: Where does this information come from?"'
      },
      {
        id: 'q3',
        text: 'What should you distinguish between?',
        options: ['Morning and night', 'A proven fact and a personal opinion', 'English and Vietnamese', 'Big and small'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "It is important to distinguish between a proven fact and someone\'s personal opinion."'
      },
      {
        id: 'q4',
        text: 'How does critical thinking help you in the digital age?',
        options: ['It makes you faster at typing', 'It helps you avoid being cheated by fake news', 'It helps you buy more things online', 'It makes you sleep better'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...avoid being cheated by fake news."'
      },
      {
        id: 'q5',
        text: 'What is a key part of thinking clearly?',
        options: ['Being open-minded', 'Being very angry', 'Staying in one place', 'Following the crowd'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Being open-minded is a key part of thinking clearly..." '
      }
    ]
  },
  {
    id: 'a2-26',
    title: 'Managing Stress Effectively',
    level: 'A2',
    content: [
      "Stress is a natural reaction of the body when we face pressure or difficult situations.",
      "A small amount of stress can be good because it keeps us motivated and alert.",
      "However, too much stress for a long time can be harmful to our physical and mental health.",
      "To manage stress, the first step is to identify what is making you feel worried.",
      "Taking deep breaths and practicing meditation can help your mind feel calm and relaxed.",
      "Regular physical exercise is also a great way to release stress and improve your mood.",
      "You should also make time for your hobbies, such as listening to music or gardening.",
      "Talking to a trusted friend or family member about your feelings can make you feel better.",
      "Remember that it is okay to take a break and rest when you feel overwhelmed by work.",
      "Learning how to stay calm under pressure will help you lead a much happier life."
    ],
    vocabulary: [
      { word: 'Pressure', meaning: 'Áp lực' },
      { word: 'Motivated', meaning: 'Có động lực' },
      { word: 'Meditation', meaning: 'Thiền định' },
      { word: 'Overwhelmed', meaning: 'Bị choáng ngợp / Quá tải' },
      { word: 'Physical health', meaning: 'Sức khỏe thể chất' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Is stress always a bad thing according to the text?',
        options: ['Yes, it is always bad', 'No, a small amount can keep us motivated', 'Stress does not exist', 'Stress only happens to adults'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "A small amount of stress can be good because it keeps us motivated and alert."'
      },
      {
        id: 'q2',
        text: 'What is the first step to managing stress?',
        options: ['Buying a new car', 'Identifying what is making you feel worried', 'Eating a lot of candy', 'Sleeping for two days'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...the first step is to identify what is making you feel worried."'
      },
      {
        id: 'q3',
        text: 'How can meditation help your mind?',
        options: ['It makes you feel calm and relaxed', 'It makes you feel tired', 'It makes you forget everything', 'It helps you run faster'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "...practicing meditation can help your mind feel calm and relaxed."'
      },
      {
        id: 'q4',
        text: 'What is another great way to release stress and improve mood?',
        options: ['Working more hours', 'Regular physical exercise', 'Drinking too much coffee', 'Staying in a dark room'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Regular physical exercise is also a great way to release stress and improve your mood."'
      },
      {
        id: 'q5',
        text: 'What should you do when you feel overwhelmed by work?',
        options: ['Quit your job immediately', 'Take a break and rest', 'Shout at your friends', 'Work even harder'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Remember that it is okay to take a break and rest when you feel overwhelmed..." '
      }
    ]
  },
  {
    id: 'a2-27',
    title: 'An Introduction to Design Thinking',
    level: 'A2',
    content: [
      "Design thinking is a creative way to solve problems by focusing on people's needs.",
      "The first stage is to empathize, which means listening to users to understand their feelings.",
      "After that, you define the problem clearly so you know exactly what needs to be fixed.",
      "The third stage is to ideate, where the team brainstorms as many ideas as possible.",
      "Next, you create a prototype, which is a simple and cheap model of your solution.",
      "A prototype helps you show your ideas to others without spending too much money.",
      "Finally, you test the model with real users to see if it actually works for them.",
      "If the users find a problem, the team goes back to improve the design again.",
      "This process repeats many times until the best solution is found for the customers.",
      "Design thinking is used by many big technology companies to create better products."
    ],
    vocabulary: [
      { word: 'Design thinking', meaning: 'Tư duy thiết kế' },
      { word: 'Empathize', meaning: 'Đồng cảm / Thấu hiểu' },
      { word: 'Ideate', meaning: 'Hình thành ý tưởng' },
      { word: 'Prototype', meaning: 'Nguyên mẫu / Bản dùng thử' },
      { word: 'Test', meaning: 'Kiểm tra / Thử nghiệm' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main focus of design thinking?',
        options: ['Spending money', 'People\'s needs', 'Only making things look pretty', 'Working alone'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...solve problems by focusing on people\'s needs."'
      },
      {
        id: 'q2',
        text: 'What does "empathize" mean in the first stage?',
        options: ['Shouting at users', 'Listening to users to understand their feelings', 'Selling products', 'Writing code immediately'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...empathize, which means listening to users to understand their feelings."'
      },
      {
        id: 'q3',
        text: 'What is a prototype?',
        options: ['A very expensive car', 'A simple and cheap model of a solution', 'A final product', 'A big book of rules'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...create a prototype, which is a simple and cheap model of your solution."'
      },
      {
        id: 'q4',
        text: 'What should the team do if users find a problem during the test?',
        options: ['Ignore the users', 'Go back to improve the design', 'Stop the project', 'Give the users money'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "If the users find a problem, the team goes back to improve the design again."'
      },
      {
        id: 'q5',
        text: 'Who uses design thinking according to the text?',
        options: ['Only small shops', 'Many big technology companies', 'Only children', 'Nobody uses it'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Design thinking is used by many big technology companies..." '
      }
    ]
  },
  {
    id: 'a2-28',
    title: 'Understanding Emotional Intelligence',
    level: 'A2',
    content: [
      "Emotional Intelligence, or EQ, is the ability to understand and manage your own emotions.",
      "It also involves recognizing how other people feel and responding to them with kindness.",
      "The first part of EQ is self-awareness, which means knowing your strengths and weaknesses.",
      "When you have high EQ, you can stay calm even when you are very angry or sad.",
      "Self-regulation helps you think before you act, so you do not make a bad decision.",
      "People with high EQ are usually good at listening and solving conflicts between friends.",
      "Empathy is a key part of EQ because it allows you to put yourself in someone else's shoes.",
      "In the workplace, EQ is often as important as technical skills for being successful.",
      "You can improve your EQ by practicing mindfulness and being patient with yourself.",
      "Developing emotional intelligence helps you build stronger and happier relationships with everyone."
    ],
    vocabulary: [
      { word: 'Emotional Intelligence', meaning: 'Trí tuệ cảm xúc' },
      { word: 'Self-awareness', meaning: 'Sự tự nhận thức' },
      { word: 'Self-regulation', meaning: 'Sự tự điều chỉnh' },
      { word: 'Conflicts', meaning: 'Xung đột / Tranh chấp' },
      { word: 'Mindfulness', meaning: 'Sự tỉnh thức / Chánh niệm' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is Emotional Intelligence (EQ)?',
        options: ['Being very good at math', 'The ability to understand and manage emotions', 'Talking as fast as possible', 'Running a business alone'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Emotional Intelligence, or EQ, is the ability to understand and manage your own emotions."'
      },
      {
        id: 'q2',
        text: 'What does "self-awareness" mean?',
        options: ['Knowing your strengths and weaknesses', 'Being very selfish', 'Sleeping all day', 'Buying new clothes'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "...self-awareness, which means knowing your strengths and weaknesses."'
      },
      {
        id: 'q3',
        text: 'How does self-regulation help you?',
        options: ['It makes you feel tired', 'It helps you think before you act', 'It makes you forget everything', 'It helps you run faster'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Self-regulation helps you think before you act..." '
      },
      {
        id: 'q4',
        text: 'What are people with high EQ usually good at?',
        options: ['Shouting at others', 'Listening and solving conflicts', 'Keeping secrets', 'Working alone'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...usually good at listening and solving conflicts between friends."'
      },
      {
        id: 'q5',
        text: 'What is the benefit of developing EQ?',
        options: ['Building stronger and happier relationships', 'Becoming very rich quickly', 'Winning every game', 'Getting more sleep'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Developing emotional intelligence helps you build stronger and happier relationships..." '
      }
    ]
  },
  {
    id: 'a2-29',
    title: 'The Rise of Remote Working',
    level: 'A2',
    content: [
      "Remote working is a flexible way of working from home instead of going to an office.",
      "With the help of the internet, many people can now do their jobs from anywhere in the world.",
      "The main advantage of remote work is that it saves time and money on daily travel.",
      "However, working from home requires a high level of self-discipline to stay focused.",
      "It is important to create a quiet workspace and follow a regular daily schedule.",
      "Digital tools like video calls and messaging apps help team members stay connected.",
      "Some people find remote work difficult because they feel lonely or miss their colleagues.",
      "To avoid this, many companies organize online coffee breaks or virtual team meetings.",
      "Effective remote workers know how to separate their professional life from their personal life.",
      "As technology improves, remote working will continue to be a popular choice for many people."
    ],
    vocabulary: [
      { word: 'Remote working', meaning: 'Làm việc từ xa' },
      { word: 'Flexible', meaning: 'Linh hoạt' },
      { word: 'Self-discipline', meaning: 'Tính tự kỷ luật' },
      { word: 'Workspace', meaning: 'Không gian làm việc' },
      { word: 'Professional', meaning: 'Chuyên nghiệp / Thuộc về công việc' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is remote working?',
        options: ['Working in a factory', 'Working from home instead of an office', 'Traveling all day', 'Buying a new house'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Remote working is a flexible way of working from home instead of going to an office."'
      },
      {
        id: 'q2',
        text: 'What is the main advantage of remote work?',
        options: ['It is very noisy', 'It saves time and money on travel', 'You can sleep all day', 'You don\'t have a boss'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...it saves time and money on daily travel."'
      },
      {
        id: 'q3',
        text: 'What is required to stay focused while working from home?',
        options: ['A lot of coffee', 'A high level of self-discipline', 'A very loud radio', 'A new television'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...working from home requires a high level of self-discipline to stay focused."'
      },
      {
        id: 'q4',
        text: 'How do team members stay connected when working remotely?',
        options: ['By writing letters', 'Using digital tools like video calls', 'By visiting each other\'s houses', 'They do not stay connected'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Digital tools like video calls and messaging apps help team members stay connected."'
      },
      {
        id: 'q5',
        text: 'What is a challenge of remote work mentioned in the text?',
        options: ['Feeling lonely or missing colleagues', 'Having too much money', 'The internet is too fast', 'Buying a new laptop'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Some people find remote work difficult because they feel lonely..." '
      }
    ]
  },
  {
    id: 'a2-30',
    title: 'The Power of Positive Thinking',
    level: 'A2',
    content: [
      "Positive thinking is a mental attitude in which you expect good and favorable results.",
      "It does not mean ignoring problems, but approaching them in a more productive way.",
      "People with a positive mindset tend to live longer and have less stress in their lives.",
      "When you think positively, you focus on your strengths instead of your weaknesses.",
      "Instead of saying 'I can't do this', try to say 'I will learn how to do this'.",
      "A positive person looks for the lesson in every failure and tries again with more energy.",
      "Surrounding yourself with optimistic people can also help you stay motivated and happy.",
      "Practicing gratitude, like writing down three good things every day, improves your mood.",
      "Remember that your thoughts have a big impact on your actions and your success.",
      "By choosing to stay positive, you can turn a difficult situation into a great opportunity."
    ],
    vocabulary: [
      { word: 'Favorable', meaning: 'Thuận lợi' },
      { word: 'Productive', meaning: 'Năng suất / Có ích' },
      { word: 'Mindset', meaning: 'Tư duy' },
      { word: 'Gratitude', meaning: 'Lòng biết ơn' },
      { word: 'Optimistic', meaning: 'Lạc quan' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is positive thinking according to the text?',
        options: ['Ignoring all problems', 'Expecting good and favorable results', 'Talking to yourself all day', 'Being very rich'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Positive thinking is a mental attitude in which you expect good and favorable results."'
      },
      {
        id: 'q2',
        text: 'What do people with a positive mindset tend to experience?',
        options: ['More stress', 'Living longer and having less stress', 'No problems at all', 'Getting sick often'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "People with a positive mindset tend to live longer and have less stress..." '
      },
      {
        id: 'q3',
        text: 'Instead of saying "I can\'t do this", what should you say?',
        options: ['I will never do this', 'This is too hard', 'I will learn how to do this', 'Someone else should do this'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "...try to say \'I will learn how to do this\'."'
      },
      {
        id: 'q4',
        text: 'What does a positive person do when they face a failure?',
        options: ['They cry and quit', 'They look for a lesson and try again', 'They blame others', 'They forget about it'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "A positive person looks for the lesson in every failure and tries again..." '
      },
      {
        id: 'q5',
        text: 'How can you practice gratitude according to the text?',
        options: ['By buying expensive gifts', 'By writing down three good things every day', 'By sleeping more', 'By shouting loudly'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Practicing gratitude, like writing down three good things every day, improves your mood."'
      }
    ]
  },
  {
    id: 'a2-31',
    title: 'Setting Smart Goals',
    level: 'A2',
    content: [
      "Setting goals is like having a map for your journey to success.",
      "To be effective, your goals should follow the SMART rule.",
      "First, a goal must be Specific; you should know exactly what you want to achieve.",
      "Second, it must be Measurable, so you can track your progress over time.",
      "Third, make sure your goal is Achievable, meaning it is realistic for you to do.",
      "Fourth, a goal should be Relevant to your life and important to your future.",
      "Finally, it must be Time-bound, with a clear deadline to finish the task.",
      "Writing down your goals on paper makes them feel more real and serious.",
      "Don't forget to celebrate small wins as you get closer to your big dream.",
      "With clear goals, you will stay motivated and use your time much better."
    ],
    vocabulary: [
      { word: 'Specific', meaning: 'Cụ thể' },
      { word: 'Measurable', meaning: 'Có thể đo lường được' },
      { word: 'Achievable', meaning: 'Có thể đạt được' },
      { word: 'Relevant', meaning: 'Liên quan / Phù hợp' },
      { word: 'Time-bound', meaning: 'Có thời hạn' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is setting goals compared to in the text?',
        options: ['Buying a car', 'Having a map for a journey', 'Eating a meal', 'Sleeping'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Setting goals is like having a map for your journey to success."'
      },
      {
        id: 'q2',
        text: 'What does "Specific" mean in the SMART rule?',
        options: ['Being very fast', 'Knowing exactly what you want to achieve', 'Being very rich', 'Talking to everyone'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "First, a goal must be Specific; you should know exactly what you want..." '
      },
      {
        id: 'q3',
        text: 'Why should a goal be Measurable?',
        options: ['To make it bigger', 'To track your progress over time', 'To show off to friends', 'To spend more money'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Second, it must be Measurable, so you can track your progress over time."'
      },
      {
        id: 'q4',
        text: 'What is the benefit of writing down your goals?',
        options: ['It makes them feel more real and serious', 'It makes you tired', 'It wastes paper', 'It makes you forget them'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Writing down your goals on paper makes them feel more real and serious."'
      },
      {
        id: 'q5',
        text: 'What does "Time-bound" mean?',
        options: ['Having no time', 'Having a clear deadline', 'Working slowly', 'Always being late'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Finally, it must be Time-bound, with a clear deadline to finish the task."'
      }
    ]
  },
  {
    id: 'a2-32',
    title: 'The Art of Active Listening',
    level: 'A2',
    content: [
      "Listening is one of the most important parts of successful communication.",
      "Active listening means paying full attention to the speaker without any distractions.",
      "To be a good listener, you should maintain eye contact and nod your head occasionally.",
      "It is important to let the other person finish speaking before you start to talk.",
      "Avoiding interruptions shows that you respect the speaker and their ideas.",
      "You can ask open-ended questions to encourage the person to share more information.",
      "Sometimes, repeating a summary of what they said helps to avoid misunderstandings.",
      "Pay attention to their body language and tone of voice, not just their words.",
      "Listening patiently helps to build trust and stronger relationships in your life.",
      "Practice listening every day to become a more empathetic and effective communicator."
    ],
    vocabulary: [
      { word: 'Active listening', meaning: 'Lắng nghe chủ động' },
      { word: 'Distractions', meaning: 'Sự xao nhãng' },
      { word: 'Occasionally', meaning: 'Thỉnh thoảng' },
      { word: 'Interruptions', meaning: 'Sự ngắt lời' },
      { word: 'Misunderstandings', meaning: 'Sự hiểu lầm' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does active listening mean?',
        options: ['Listening while watching TV', 'Paying full attention to the speaker', 'Talking more than the speaker', 'Ignoring the speaker'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Active listening means paying full attention to the speaker without any distractions."'
      },
      {
        id: 'q2',
        text: 'How can you show you are listening using body language?',
        options: ['Looking at your watch', 'Maintaining eye contact and nodding', 'Walking away', 'Closing your eyes'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...you should maintain eye contact and nod your head occasionally."'
      },
      {
        id: 'q3',
        text: 'Why should you avoid interruptions?',
        options: ['Because it is loud', 'Because it shows respect for the speaker', 'Because it saves time', 'Because it is funny'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Avoiding interruptions shows that you respect the speaker and their ideas."'
      },
      {
        id: 'q4',
        text: 'What should you do besides listening to words?',
        options: ['Listen to the music', 'Pay attention to body language and tone of voice', 'Look for a book', 'Draw a picture'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Pay attention to their body language and tone of voice, not just their words."'
      },
      {
        id: 'q5',
        text: 'What is a benefit of listening patiently?',
        options: ['It builds trust and stronger relationships', 'It makes you very tired', 'It makes people stop talking', 'It helps you sleep'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Listening patiently helps to build trust and stronger relationships..." '
      }
    ]
  },
  {
    id: 'a2-33',
    title: 'Effective Online Teamwork',
    level: 'A2',
    content: [
      "In the digital age, many teams work together from different locations using the internet.",
      "Online collaboration requires clear communication and the right technology tools.",
      "Team members should check their messages frequently to stay updated on the project.",
      "It is important to respond promptly to questions so that the work does not stop.",
      "Using shared documents allows everyone to see changes and give feedback in real time.",
      "Video meetings are helpful for discussing complex ideas and seeing your teammates' faces.",
      "Transparency is key; you should always inform the team about your progress and challenges.",
      "Setting clear deadlines helps everyone stay organized and finish their tasks on time.",
      "Even in a virtual environment, showing kindness and support builds a stronger team.",
      "Good online teamwork leads to successful projects and happy, productive members."
    ],
    vocabulary: [
      { word: 'Collaboration', meaning: 'Sự cộng tác' },
      { word: 'Promptly', meaning: 'Nhanh chóng / Ngay lập tức' },
      { word: 'Feedback', meaning: 'Phản hồi' },
      { word: 'Transparency', meaning: 'Sự minh bạch' },
      { word: 'Virtual', meaning: 'Ảo (trên môi trường máy tính)' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does online collaboration require?',
        options: ['Living in the same house', 'Clear communication and the right technology tools', 'Meeting in an office every day', 'Talking as little as possible'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Online collaboration requires clear communication and the right technology tools."'
      },
      {
        id: 'q2',
        text: 'Why should team members check messages frequently?',
        options: ['To watch videos', 'To stay updated on the project', 'To waste time', 'To play games'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...members should check their messages frequently to stay updated on the project."'
      },
      {
        id: 'q3',
        text: 'What is the benefit of using shared documents?',
        options: ['They are more expensive', 'Everyone can see changes and give feedback in real time', 'Only one person can read them', 'They are harder to use'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Using shared documents allows everyone to see changes and give feedback in real time."'
      },
      {
        id: 'q4',
        text: 'What does transparency mean in this context?',
        options: ['Hiding your mistakes', 'Informing the team about progress and challenges', 'Working only at night', 'Not talking to anyone'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Transparency is key; you should always inform the team about your progress..." '
      },
      {
        id: 'q5',
        text: 'What helps everyone stay organized in an online team?',
        options: ['Setting clear deadlines', 'Having no plan', 'Working only on weekends', 'Never asking questions'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Setting clear deadlines helps everyone stay organized..." '
      }
    ]
  },
  {
    id: 'a2-34',
    title: 'The Art of Analytical Thinking',
    level: 'A2',
    content: [
      "Analytical thinking is the ability to break down a complex problem into smaller parts.",
      "By looking at each part separately, you can understand how the whole system works.",
      "The first step is to gather all the facts and data related to the situation.",
      "Next, you should look for patterns or connections between different pieces of information.",
      "Instead of guessing, an analytical thinker uses evidence to reach a logical conclusion.",
      "This skill is very useful in subjects like mathematics, science, and computer programming.",
      "When you find a bug in a program, you must analyze the code to see where it failed.",
      "Evaluating the advantages and disadvantages of each option helps you make better choices.",
      "Analytical thinking allows you to stay calm and objective when solving difficult tasks.",
      "With practice, you will become faster at finding the best solutions to any challenge."
    ],
    vocabulary: [
      { word: 'Analytical', meaning: 'Thuộc về phân tích' },
      { word: 'Complex', meaning: 'Phức tạp' },
      { word: 'Gather', meaning: 'Thu thập' },
      { word: 'Patterns', meaning: 'Quy luật / Hình mẫu' },
      { word: 'Objective', meaning: 'Khách quan' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is analytical thinking according to the text?',
        options: ['Ignoring the problem', 'Breaking down a complex problem into smaller parts', 'Asking someone else for the answer', 'Working as fast as possible'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Analytical thinking is the ability to break down a complex problem into smaller parts."'
      },
      {
        id: 'q2',
        text: 'What is the first step in analytical thinking?',
        options: ['Making a guess', 'Gathering all the facts and data', 'Going to sleep', 'Deleting the information'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The first step is to gather all the facts and data..." '
      },
      {
        id: 'q3',
        text: 'What does an analytical thinker use instead of guessing?',
        options: ['Luck', 'Evidence to reach a logical conclusion', 'Personal opinions', 'Magic'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...an analytical thinker uses evidence to reach a logical conclusion."'
      },
      {
        id: 'q4',
        text: 'In which subjects is analytical thinking very useful?',
        options: ['Cooking and cleaning', 'Mathematics, science, and computer programming', 'Singing and dancing', 'Sleeping and resting'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "This skill is very useful in subjects like mathematics, science, and computer programming."'
      },
      {
        id: 'q5',
        text: 'How does this skill help you when solving difficult tasks?',
        options: ['It makes you feel more stressed', 'It allows you to stay calm and objective', 'It makes you forget the task', 'It makes the task harder'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Analytical thinking allows you to stay calm and objective when solving difficult tasks."'
      }
    ]
  },
  {
    id: 'a2-35',
    title: 'Solving Conflicts Peacefully',
    level: 'A2',
    content: [
      "Conflict is a normal part of life when people have different opinions or goals.",
      "The key to resolution is to stay calm and avoid getting angry during a discussion.",
      "Instead of blaming others, you should use 'I' statements to express your feelings clearly.",
      "For example, say 'I feel upset when...' instead of 'You always make me feel...'.",
      "Listen carefully to the other person's perspective without interrupting them.",
      "Try to understand their needs and why they feel that way about the situation.",
      "After both sides have spoken, look for a compromise that makes everyone feel respected.",
      "Focus on the problem itself, not on attacking the person you are talking to.",
      "Effective conflict resolution helps to build stronger and more honest relationships.",
      "By staying patient and fair, you can turn a disagreement into a positive change."
    ],
    vocabulary: [
      { word: 'Conflict', meaning: 'Xung đột / Tranh chấp' },
      { word: 'Resolution', meaning: 'Sự giải quyết' },
      { word: 'Perspective', meaning: 'Góc nhìn / Quan điểm' },
      { word: 'Compromise', meaning: 'Sự thỏa hiệp' },
      { word: 'Disagreement', meaning: 'Sự bất đồng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is a normal part of life according to the text?',
        options: ['Sleeping all day', 'Conflict when people have different opinions', 'Playing games', 'Having no money'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Conflict is a normal part of life when people have different opinions..." '
      },
      {
        id: 'q2',
        text: 'What should you avoid during a conflict resolution?',
        options: ['Staying calm', 'Getting angry', 'Listening', 'Talking'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...avoid getting angry during a discussion."'
      },
      {
        id: 'q3',
        text: 'What are "I" statements used for?',
        options: ['To blame others', 'To express your feelings clearly', 'To tell a lie', 'To shout loudly'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...use \'I\' statements to express your feelings clearly."'
      },
      {
        id: 'q4',
        text: 'What should you focus on when solving a problem?',
        options: ['Attacking the person', 'The problem itself', 'Ignoring everyone', 'Getting a prize'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Focus on the problem itself, not on attacking the person..." '
      },
      {
        id: 'q5',
        text: 'What is the benefit of effective conflict resolution?',
        options: ['Building stronger and more honest relationships', 'Making more enemies', 'Losing your job', 'Feeling more stressed'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Effective conflict resolution helps to build stronger and more honest relationships."'
      }
    ]
  },
  {
    id: 'a2-36',
    title: 'The Power of Planning',
    level: 'A2',
    content: [
      "Planning is the process of thinking about the activities required to achieve a desired goal.",
      "A good plan act as a bridge between where you are now and where you want to be.",
      "The first step is to define your final objective clearly and honestly.",
      "Then, you should break the journey into smaller milestones to measure your progress.",
      "Identifying the resources you need, such as time, money, or tools, is very important.",
      "A successful planner also thinks about potential problems and creates a backup plan.",
      "Having a backup plan helps you stay calm when things do not go as expected.",
      "You should review your plan regularly and make adjustments if the situation changes.",
      "Effective planning reduces wasted effort and helps you finish your work much faster.",
      "Remember that a dream without a plan is just a wish that may never come true."
    ],
    vocabulary: [
      { word: 'Desired', meaning: 'Mong muốn' },
      { word: 'Milestones', meaning: 'Các mốc quan trọng' },
      { word: 'Potential', meaning: 'Tiềm năng / Có thể xảy ra' },
      { word: 'Backup plan', meaning: 'Kế hoạch dự phòng' },
      { word: 'Adjustments', meaning: 'Sự điều chỉnh' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is a good plan compared to in the text?',
        options: ['A wall', 'A bridge to your goal', 'A heavy bag', 'A fast car'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "A good plan act as a bridge between where you are now and where you want to be."'
      },
      {
        id: 'q2',
        text: 'What should you do after defining your final objective?',
        options: ['Stop working', 'Break the journey into smaller milestones', 'Wait for a miracle', 'Forget the objective'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...break the journey into smaller milestones to measure your progress."'
      },
      {
        id: 'q3',
        text: 'Why should a successful planner create a backup plan?',
        options: ['To waste more time', 'To deal with potential problems', 'To make the plan longer', 'To show off to others'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "A successful planner also thinks about potential problems and creates a backup plan."'
      },
      {
        id: 'q4',
        text: 'How often should you review your plan?',
        options: ['Never', 'Only once a year', 'Regularly', 'Only when you finish'],
        correctAnswerIndex: 2,
        explanation: 'Đoạn văn viết: "You should review your plan regularly and make adjustments..." '
      },
      {
        id: 'q5',
        text: 'What is a benefit of effective planning?',
        options: ['It increases wasted effort', 'It helps you finish work much faster', 'It makes you lazy', 'It is very expensive'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Effective planning reduces wasted effort and helps you finish your work much faster."'
      }
    ]
  },
  {
    id: 'a2-37',
    title: 'The Beauty of Systems Thinking',
    level: 'A2',
    content: [
      "Systems thinking is the ability to see the world as a collection of connected parts.",
      "A system can be anything, from a small mechanical watch to the entire human body.",
      "If you change one part of a system, it will likely affect all the other parts too.",
      "To understand a problem, you must look at the whole picture instead of just one piece.",
      "This holistic approach helps you find the root cause of a problem, not just the symptoms.",
      "For example, if a computer is slow, the problem might be the software, the hardware, or both.",
      "Systems thinkers look for 'feedback loops' to see how actions lead to specific results.",
      "By understanding these connections, you can make better decisions for the long term.",
      "This skill is essential for engineers, scientists, and managers in modern companies.",
      "Learning to think in systems makes you a more effective and insightful problem solver."
    ],
    vocabulary: [
      { word: 'Collection', meaning: 'Tập hợp' },
      { word: 'Holistic', meaning: 'Toàn diện / Tổng thể' },
      { word: 'Root cause', meaning: 'Nguyên nhân gốc rễ' },
      { word: 'Symptoms', meaning: 'Triệu chứng / Hiện tượng bên ngoài' },
      { word: 'Insightful', meaning: 'Sâu sắc' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is systems thinking?',
        options: ['Looking at only one part', 'The ability to see the world as connected parts', 'Ignoring the connections', 'Building a new watch'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Systems thinking is the ability to see the world as a collection of connected parts."'
      },
      {
        id: 'q2',
        text: 'What happens if you change one part of a system?',
        options: ['Nothing changes', 'It will likely affect all the other parts', 'The system stops forever', 'The system becomes smaller'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "If you change one part of a system, it will likely affect all the other parts too."'
      },
      {
        id: 'q3',
        text: 'What does a "holistic approach" help you find?',
        options: ['The root cause of a problem', 'The fastest solution', 'A new friend', 'A piece of paper'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "This holistic approach helps you find the root cause of a problem..." '
      },
      {
        id: 'q4',
        text: 'Why do systems thinkers look for "feedback loops"?',
        options: ['To hear music', 'To see how actions lead to specific results', 'To waste time', 'To buy new tools'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Systems thinkers look for \'feedback loops\' to see how actions lead to specific results."'
      },
      {
        id: 'q5',
        text: 'Who is this skill essential for according to the text?',
        options: ['Only children', 'Engineers, scientists, and managers', 'People who work alone', 'Nobody'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "This skill is essential for engineers, scientists, and managers..." '
      }
    ]
  },
  {
    id: 'a2-38',
    title: 'Understanding Data Literacy',
    level: 'A2',
    content: [
      "Data literacy is the ability to read, understand, and communicate with data.",
      "In the modern world, we are surrounded by information and statistics every day.",
      "The first step is to collect high-quality data that is accurate and reliable.",
      "Data can be presented in many ways, such as tables, bar charts, or pie graphs.",
      "By looking at these visuals, you can easily identify important trends or patterns.",
      "Data literacy helps you ask the right questions about the information you see.",
      "Instead of just guessing, you can use data to support your ideas and arguments.",
      "It is also important to check the source of the data to avoid wrong information.",
      "This skill is useful in many fields, from business and health to technology.",
      "Becoming data literate allows you to make smarter choices in your work and life."
    ],
    vocabulary: [
      { word: 'Data literacy', meaning: 'Kiến thức về dữ liệu' },
      { word: 'Statistics', meaning: 'Số liệu thống kê' },
      { word: 'Accurate', meaning: 'Chính xác' },
      { word: 'Trends', meaning: 'Xu hướng' },
      { word: 'Visualize', meaning: 'Trực quan hóa' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is data literacy according to the text?',
        options: ['The ability to read and understand data', 'The ability to write a book', 'Buying a new computer', 'Playing video games'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Data literacy is the ability to read, understand, and communicate with data."'
      },
      {
        id: 'q2',
        text: 'What is the first step in using data?',
        options: ['Deleting all numbers', 'Collecting accurate and reliable data', 'Guessing the results', 'Drawing a picture'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The first step is to collect high-quality data that is accurate and reliable."'
      },
      {
        id: 'q3',
        text: 'What can help you identify trends easily?',
        options: ['Looking at visuals like charts and graphs', 'Closing your eyes', 'Listening to music', 'Reading a long story'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "By looking at these visuals, you can easily identify important trends..." '
      },
      {
        id: 'q4',
        text: 'Why should you check the source of the data?',
        options: ['To waste time', 'To avoid wrong information', 'To make it more expensive', 'To lose your job'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "It is also important to check the source of the data to avoid wrong information."'
      },
      {
        id: 'q5',
        text: 'Where is data literacy useful?',
        options: ['Only in schools', 'In many fields like business and technology', 'Only for doctors', 'It is not useful'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "This skill is useful in many fields, from business and health to technology."'
      }
    ]
  },
  {
    id: 'a2-39',
    title: 'The Essence of Innovation',
    level: 'A2',
    content: [
      "Innovation is the process of creating a new or better way of doing something.",
      "It is not only about making big inventions but also about small, useful changes.",
      "To be innovative, you must be curious and ask why things are done in a certain way.",
      "Thinking outside the box helps you find creative solutions to common problems.",
      "Many great innovations happen when people combine two different ideas into one.",
      "An innovative person is not afraid to take risks and try something that might fail.",
      "Failure is a part of the process because it shows you what does not work.",
      "Innovation improves our lives by making tasks easier, faster, and more efficient.",
      "Companies that focus on innovation are usually more successful in the long run.",
      "Developing an innovative mindset allows you to adapt to the changing world around you."
    ],
    vocabulary: [
      { word: 'Innovation', meaning: 'Sự đổi mới / Cải tiến' },
      { word: 'Efficiency', meaning: 'Sự hiệu quả / Năng suất' },
      { word: 'Inventions', meaning: 'Sự phát minh' },
      { word: 'Outside the box', meaning: 'Tư duy vượt giới hạn / Sáng tạo' },
      { word: 'In the long run', meaning: 'Về lâu về dài' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is innovation according to the text?',
        options: ['Staying the same forever', 'Creating a new or better way of doing something', 'Only making big machines', 'Buying new toys'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Innovation is the process of creating a new or better way of doing something."'
      },
      {
        id: 'q2',
        text: 'What should you do to be innovative?',
        options: ['Be curious and ask why things are done a certain way', 'Wait for someone else to do it', 'Follow all the old rules strictly', 'Only work on easy tasks'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "To be innovative, you must be curious and ask why things are done in a certain way."'
      },
      {
        id: 'q3',
        text: 'What does "thinking outside the box" mean in this context?',
        options: ['Thinking inside a small room', 'Finding creative solutions to common problems', 'Not thinking at all', 'Hiding your ideas'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Thinking outside the box helps you find creative solutions to common problems."'
      },
      {
        id: 'q4',
        text: 'Why is failure a part of the innovation process?',
        options: ['Because it is expensive', 'Because it shows you what does not work', 'Because it makes you quit', 'Because it is very loud'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Failure is a part of the process because it shows you what does not work."'
      },
      {
        id: 'q5',
        text: 'How does innovation improve our lives?',
        options: ['By making things harder', 'By making tasks easier, faster, and more efficient', 'By taking more time', 'By making life more boring'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Innovation improves our lives by making tasks easier, faster, and more efficient."'
      }
    ]
  },
  {
    id: 'a2-40',
    title: 'The Importance of Ethical Thinking',
    level: 'A2',
    content: [
      "Ethics is a system of principles that helps us decide what is right and what is wrong.",
      "Ethical thinking means considering how our actions affect other people and the world.",
      "Honesty is a core value, which means telling the truth and being fair in everything you do.",
      "Integrity is also vital; it is the quality of being honest and having strong moral principles.",
      "When you face a difficult choice, ask yourself if your action is fair to everyone involved.",
      "Responsibility means being accountable for your own choices and their consequences.",
      "In the professional world, ethics helps to build trust between colleagues and customers.",
      "For example, a software developer must protect user data to maintain digital ethics.",
      "Reflecting on your values regularly helps you stay on the right path in your life.",
      "Living ethically leads to a sense of peace and a respected reputation in society."
    ],
    vocabulary: [
      { word: 'Ethics', meaning: 'Đạo đức' },
      { word: 'Integrity', meaning: 'Sự chính trực / Liêm chính' },
      { word: 'Accountable', meaning: 'Chịu trách nhiệm' },
      { word: 'Consequences', meaning: 'Hệ quả / Hậu quả' },
      { word: 'Reputation', meaning: 'Danh tiếng / Uy tín' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is ethics according to the text?',
        options: ['A way to make more money', 'A system of principles to decide right and wrong', 'A type of computer program', 'A sport played in teams'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Ethics is a system of principles that helps us decide what is right and what is wrong."'
      },
      {
        id: 'q2',
        text: 'What does "honesty" mean in this context?',
        options: ['Being very strong', 'Telling the truth and being fair', 'Working very fast', 'Winning every game'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Honesty is a core value, which means telling the truth and being fair..." '
      },
      {
        id: 'q3',
        text: 'What should you ask yourself when facing a difficult choice?',
        options: ['Is this the easiest way?', 'Is this action fair to everyone involved?', 'How much will I earn?', 'Can I do this later?'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "When you face a difficult choice, ask yourself if your action is fair to everyone involved."'
      },
      {
        id: 'q4',
        text: 'Why is ethics important in the professional world?',
        options: ['It helps to build trust', 'It makes the work harder', 'It is a law for everyone', 'It helps to buy new tools'],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "In the professional world, ethics helps to build trust between colleagues and customers."'
      },
      {
        id: 'q5',
        text: 'What is a result of living ethically?',
        options: ['Feeling more stressed', 'A sense of peace and a respected reputation', 'Losing your job', 'Having no friends'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Living ethically leads to a sense of peace and a respected reputation in society."'
      }
    ]
  }

];
