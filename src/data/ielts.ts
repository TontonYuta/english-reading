import { Passage } from '../types';

export const ieltsPassages: Passage[] = [
  {
    id: 'ielts-1',
    title: 'The Growth of Urban Farming',
    level: 'IELTS',
    content: [
      'Urban farming has become increasingly common in many large cities around the world.',
      'Supporters argue that growing food in cities can improve food security, reduce transportation costs, and make use of empty land.',
      'In addition, community gardens often bring local residents together and encourage healthier eating habits.',
      'However, critics point out that urban farms usually produce food on a much smaller scale than traditional farms and may not solve wider agricultural problems.'
    ],
    vocabulary: [
      { word: 'urban farming', meaning: 'nông nghiệp đô thị' },
      { word: 'food security', meaning: 'an ninh lương thực' },
      { word: 'transportation costs', meaning: 'chi phí vận chuyển' },
      { word: 'traditional farms', meaning: 'nông trại truyền thống' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is one benefit of urban farming mentioned in the passage?',
        options: [
          'It completely replaces traditional farming',
          'It improves food security',
          'It makes cities less crowded',
          'It increases transportation costs'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu thứ hai nêu rõ rằng urban farming có thể improve food security, reduce transportation costs, và tận dụng đất trống.'
      },
      {
        id: 'q2',
        text: 'How can community gardens help local areas?',
        options: [
          'By creating more office buildings',
          'By reducing the need for public transport',
          'By bringing residents together',
          'By exporting food to other countries'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu thứ ba nói rằng community gardens thường bring local residents together và khuyến khích thói quen ăn uống lành mạnh.'
      },
      {
        id: 'q3',
        text: 'What criticism of urban farming is mentioned?',
        options: [
          'It is too expensive for city governments',
          'It cannot produce food on a large scale',
          'It is harmful to community relationships',
          'It always uses too much water'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu cuối nói rằng urban farms thường sản xuất ở quy mô nhỏ hơn nhiều so với traditional farms.'
      }
    ]
  },
  {
    id: 'ielts-2',
    title: 'Why People Choose to Work Remotely',
    level: 'IELTS',
    content: [
      'Remote work has become more popular in recent years as technology has made online communication easier.',
      'Many employees value the flexibility of working from home because it can save commuting time and allow a better balance between work and personal life.',
      'Employers may also benefit because remote work can reduce the need for large office spaces.',
      'Nevertheless, some workers find it difficult to stay motivated at home, and others miss the social interaction of a traditional workplace.'
    ],
    vocabulary: [
      { word: 'remote work', meaning: 'làm việc từ xa' },
      { word: 'flexibility', meaning: 'sự linh hoạt' },
      { word: 'commuting time', meaning: 'thời gian đi lại' },
      { word: 'social interaction', meaning: 'tương tác xã hội' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why do many employees like remote work?',
        options: [
          'It always increases their salary',
          'It offers more flexibility',
          'It requires less technology',
          'It removes all work pressure'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu thứ hai cho biết nhiều nhân viên đánh giá cao remote work vì sự linh hoạt mà nó mang lại.'
      },
      {
        id: 'q2',
        text: 'What is one advantage for employers?',
        options: [
          'Workers need less training',
          'They can close all offices permanently',
          'They may need less office space',
          'They no longer need managers'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu thứ ba nói rằng employer có thể hưởng lợi vì remote work giảm nhu cầu sử dụng văn phòng lớn.'
      },
      {
        id: 'q3',
        text: 'What problem do some remote workers experience?',
        options: [
          'They have no internet access',
          'They cannot communicate online',
          'They find it hard to stay motivated',
          'They are forced to travel more'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu cuối nêu một nhược điểm là một số người cảm thấy khó duy trì động lực khi làm việc ở nhà.'
      }
    ]
  },
  {
    id: 'ielts-3',
    title: 'The Importance of Public Libraries',
    level: 'IELTS',
    content: [
      'Public libraries have long played an important role in providing free access to knowledge.',
      'They offer books, newspapers, and digital resources to people who may not be able to afford these materials on their own.',
      'Libraries also serve as community spaces where people can study, attend events, or use computers for work and education.',
      'Although some people believe libraries are less necessary in the digital age, many communities still depend on them for equal access to information.'
    ],
    vocabulary: [
      { word: 'access to knowledge', meaning: 'quyền tiếp cận tri thức' },
      { word: 'digital resources', meaning: 'tài nguyên số' },
      { word: 'community spaces', meaning: 'không gian cộng đồng' },
      { word: 'equal access', meaning: 'sự tiếp cận bình đẳng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What do public libraries provide?',
        options: [
          'Only printed books',
          'Free access to knowledge',
          'Private office space',
          'Paid training courses only'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu đầu tiên khẳng định rằng public libraries cung cấp free access to knowledge.'
      },
      {
        id: 'q2',
        text: 'Why are libraries important for some people?',
        options: [
          'They help people buy expensive books',
          'They replace schools completely',
          'They provide materials people may not afford otherwise',
          'They only serve university students'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu thứ hai giải thích rằng thư viện cung cấp tài liệu cho những người có thể không đủ khả năng tự mua.'
      },
      {
        id: 'q3',
        text: 'What does the passage suggest about libraries today?',
        options: [
          'They are no longer useful',
          'They remain important in many communities',
          'They should only focus on digital materials',
          'They are used only for entertainment'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu cuối cho thấy dù sống trong thời đại số, nhiều cộng đồng vẫn phụ thuộc vào thư viện để có equal access to information.'
      }
    ]
  },
  {
    id: 'ielts-4',
    title: 'How Tourism Affects Local Communities',
    level: 'IELTS',
    content: [
      'Tourism can bring major economic benefits to local communities by creating jobs and attracting investment.',
      'Hotels, restaurants, and transport services often grow when more visitors arrive in an area.',
      'At the same time, however, heavy tourism can increase living costs, damage natural environments, and change traditional ways of life.',
      'For this reason, many experts believe tourism should be carefully managed so that both visitors and residents can benefit.'
    ],
    vocabulary: [
      { word: 'economic benefits', meaning: 'lợi ích kinh tế' },
      { word: 'investment', meaning: 'đầu tư' },
      { word: 'living costs', meaning: 'chi phí sinh hoạt' },
      { word: 'managed', meaning: 'được quản lý' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is one positive effect of tourism?',
        options: [
          'It always lowers living costs',
          'It creates jobs',
          'It prevents environmental damage',
          'It removes traditional culture'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu đầu nói rõ một lợi ích lớn của tourism là creating jobs và attracting investment.'
      },
      {
        id: 'q2',
        text: 'What is one negative effect of heavy tourism?',
        options: [
          'It reduces transport services',
          'It makes restaurants close',
          'It can increase living costs',
          'It eliminates all local traditions immediately'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu thứ ba cho biết heavy tourism có thể increase living costs, làm hại môi trường, và thay đổi lối sống truyền thống.'
      },
      {
        id: 'q3',
        text: 'What do many experts think should happen?',
        options: [
          'Tourism should be stopped',
          'Only foreign visitors should be allowed',
          'Tourism should be carefully managed',
          'Residents should move to other places'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu cuối kết luận rằng tourism nên được quản lý cẩn thận để cả visitors và residents đều có lợi.'
      }
    ]
  },
  {
    id: 'ielts-5',
    title: 'The Rise of Online Learning',
    level: 'IELTS',
    content: [
      'Online learning has expanded rapidly as schools, universities, and training centers make greater use of digital technology.',
      'Many learners appreciate the chance to study at their own pace and from any location with an internet connection.',
      'In addition, online courses can sometimes be cheaper than face-to-face classes because they require fewer physical resources.',
      'However, successful online learning often depends on self-discipline, strong time management, and reliable access to technology.'
    ],
    vocabulary: [
      { word: 'expanded rapidly', meaning: 'mở rộng nhanh chóng' },
      { word: 'at their own pace', meaning: 'theo tốc độ của riêng mình' },
      { word: 'face-to-face', meaning: 'trực tiếp' },
      { word: 'self-discipline', meaning: 'tính tự giác' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why do many learners like online learning?',
        options: [
          'It removes the need for teachers',
          'It allows them to study flexibly',
          'It guarantees better grades',
          'It is always free'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu thứ hai nói rằng many learners appreciate the chance to study at their own pace và từ bất kỳ đâu có internet.'
      },
      {
        id: 'q2',
        text: 'Why can online courses be cheaper?',
        options: [
          'They use fewer physical resources',
          'They are shorter than all other courses',
          'They do not need internet access',
          'They are only for beginners'
        ],
        correctAnswerIndex: 0,
        explanation: 'Câu thứ ba giải thích rằng online courses có thể rẻ hơn vì cần ít physical resources hơn.'
      },
      {
        id: 'q3',
        text: 'What is important for successful online learning?',
        options: [
          'Owning expensive equipment',
          'Traveling regularly to class',
          'Strong self-discipline',
          'Studying only in groups'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu cuối nhấn mạnh rằng online learning thành công thường phụ thuộc vào self-discipline, time management và công nghệ đáng tin cậy.'
      }
    ]
  },
  {
    id: 'ielts-6',
    title: 'Why Cities Need Green Spaces',
    level: 'IELTS',
    content: [
      'Green spaces such as parks and public gardens are important parts of modern cities.',
      'They provide places where people can relax, exercise, and take a break from traffic and noise.',
      'Trees and plants in urban areas can also improve air quality and help reduce high temperatures in summer.',
      'As cities continue to expand, many planners argue that protecting green spaces should remain a priority.'
    ],
    vocabulary: [
      { word: 'green spaces', meaning: 'không gian xanh' },
      { word: 'air quality', meaning: 'chất lượng không khí' },
      { word: 'urban areas', meaning: 'khu vực đô thị' },
      { word: 'priority', meaning: 'ưu tiên' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What can people do in green spaces?',
        options: [
          'Only grow vegetables',
          'Relax and exercise',
          'Build new roads',
          'Avoid all social contact'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu thứ hai cho biết green spaces là nơi mọi người có thể relax, exercise, và tránh bớt tiếng ồn giao thông.'
      },
      {
        id: 'q2',
        text: 'How can trees and plants help cities?',
        options: [
          'They increase summer temperatures',
          'They reduce the need for transport',
          'They improve air quality',
          'They replace public buildings'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu thứ ba nêu rõ trees and plants có thể improve air quality và giúp giảm nhiệt độ cao vào mùa hè.'
      },
      {
        id: 'q3',
        text: 'What do many planners believe?',
        options: [
          'Cities should remove parks',
          'Green spaces should remain a priority',
          'Only private gardens are useful',
          'Urban growth should stop completely'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu cuối nói rằng nhiều planners cho rằng việc bảo vệ green spaces nên tiếp tục là một priority.'
      }
    ]
  },
  {
    id: 'ielts-7',
    title: 'The Value of Learning a Second Language',
    level: 'IELTS',
    content: [
      'Learning a second language can bring personal, academic, and professional advantages.',
      'It may improve communication skills, increase cultural awareness, and open up job opportunities in international environments.',
      'Research also suggests that language learning can strengthen memory and problem-solving ability.',
      'Although becoming fluent takes time and effort, many people consider it a worthwhile long-term investment.'
    ],
    vocabulary: [
      { word: 'cultural awareness', meaning: 'nhận thức văn hóa' },
      { word: 'international environments', meaning: 'môi trường quốc tế' },
      { word: 'problem-solving ability', meaning: 'khả năng giải quyết vấn đề' },
      { word: 'worthwhile', meaning: 'đáng giá' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is one professional advantage of learning a second language?',
        options: [
          'It removes the need for education',
          'It opens job opportunities',
          'It guarantees overseas travel',
          'It replaces technical skills'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu thứ hai nói rõ rằng học ngôn ngữ thứ hai có thể open up job opportunities trong môi trường quốc tế.'
      },
      {
        id: 'q2',
        text: 'What does research suggest language learning can improve?',
        options: [
          'Physical strength',
          'Driving ability',
          'Memory and problem-solving',
          'Sleeping habits'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu thứ ba đề cập rằng research suggests language learning can strengthen memory and problem-solving ability.'
      },
      {
        id: 'q3',
        text: 'How do many people view learning another language?',
        options: [
          'As a waste of time',
          'As a short-term trend',
          'As a worthwhile long-term investment',
          'As something only children can do'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu cuối cho biết nhiều người xem việc học thêm một ngôn ngữ là a worthwhile long-term investment.'
      }
    ]
  },
  {
    id: 'ielts-8',
    title: 'The Problem of Food Waste',
    level: 'IELTS',
    content: [
      'Food waste has become a serious global issue in both wealthy and developing countries.',
      'Large amounts of food are thrown away by households, restaurants, and supermarkets every day.',
      'This is a problem not only because food is wasted, but also because producing and transporting it requires land, water, energy, and labor.',
      'Many experts argue that reducing food waste is one of the simplest ways to improve sustainability.'
    ],
    vocabulary: [
      { word: 'food waste', meaning: 'lãng phí thực phẩm' },
      { word: 'households', meaning: 'hộ gia đình' },
      { word: 'transporting', meaning: 'vận chuyển' },
      { word: 'sustainability', meaning: 'tính bền vững' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Who is mentioned as wasting food?',
        options: [
          'Only restaurants',
          'Only supermarkets',
          'Households, restaurants, and supermarkets',
          'Only farmers'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu thứ hai liệt kê rõ food bị vứt bỏ bởi households, restaurants, và supermarkets.'
      },
      {
        id: 'q2',
        text: 'Why is food waste a serious problem?',
        options: [
          'Because food is always expensive',
          'Because producing food uses many resources',
          'Because supermarkets close early',
          'Because restaurants serve large meals'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu thứ ba giải thích rằng sản xuất và vận chuyển thực phẩm đòi hỏi đất, nước, năng lượng và lao động.'
      },
      {
        id: 'q3',
        text: 'What do many experts believe?',
        options: [
          'Food waste cannot be reduced',
          'Only rich countries should act',
          'Reducing food waste can improve sustainability',
          'Food waste is a minor issue'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu cuối nói rằng many experts argue reducing food waste là một trong những cách đơn giản nhất để cải thiện sustainability.'
      }
    ]
  },
  {
    id: 'ielts-9',
    title: 'Why Some People Prefer Public Transport',
    level: 'IELTS',
    content: [
      'Public transport plays an important role in many modern cities by helping people travel without relying on private cars.',
      'Buses, trains, and underground systems can reduce traffic congestion and lower pollution when they are efficient and affordable.',
      'In addition, public transport can make cities more accessible for people who cannot drive.',
      'However, if services are unreliable or overcrowded, many passengers may still choose to use private vehicles instead.'
    ],
    vocabulary: [
      { word: 'relying on', meaning: 'phụ thuộc vào' },
      { word: 'traffic congestion', meaning: 'ùn tắc giao thông' },
      { word: 'accessible', meaning: 'dễ tiếp cận' },
      { word: 'overcrowded', meaning: 'quá đông đúc' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is one benefit of public transport?',
        options: [
          'It increases traffic congestion',
          'It reduces pollution',
          'It removes the need for roads',
          'It is always faster than cars'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu thứ hai cho biết buses, trains, và underground systems có thể lower pollution khi hoạt động hiệu quả.'
      },
      {
        id: 'q2',
        text: 'Who can especially benefit from public transport?',
        options: [
          'Only tourists',
          'Only students',
          'People who cannot drive',
          'People who own several cars'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu thứ ba nói rằng public transport giúp thành phố dễ tiếp cận hơn với people who cannot drive.'
      },
      {
        id: 'q3',
        text: 'When might people still choose private vehicles?',
        options: [
          'When services are unreliable or overcrowded',
          'When ticket prices are low',
          'When trains are efficient',
          'When roads are closed'
        ],
        correctAnswerIndex: 0,
        explanation: 'Câu cuối giải thích rằng nếu dịch vụ không đáng tin cậy hoặc quá đông, nhiều người vẫn sẽ chọn xe riêng.'
      }
    ]
  },
  {
    id: 'ielts-10',
    title: 'The Influence of Social Media on Communication',
    level: 'IELTS',
    content: [
      'Social media has changed the way people communicate by making it easier to share information instantly across long distances.',
      'It allows individuals, businesses, and organizations to reach large audiences quickly and at a relatively low cost.',
      'At the same time, concerns have grown about misinformation, online harassment, and the effects of excessive screen time.',
      'As a result, many people believe social media should be used thoughtfully rather than without limits.'
    ],
    vocabulary: [
      { word: 'instantly', meaning: 'ngay lập tức' },
      { word: 'audience', meaning: 'khán giả/người tiếp cận' },
      { word: 'misinformation', meaning: 'thông tin sai lệch' },
      { word: 'thoughtfully', meaning: 'một cách có cân nhắc' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How has social media changed communication?',
        options: [
          'By making long-distance communication harder',
          'By making information sharing faster',
          'By reducing the number of businesses',
          'By replacing all traditional media completely'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu đầu tiên nói rõ social media làm cho việc chia sẻ thông tin across long distances trở nên easier và instant hơn.'
      },
      {
        id: 'q2',
        text: 'What is one concern about social media?',
        options: [
          'It is too expensive for most users',
          'It cannot reach large audiences',
          'It may spread misinformation',
          'It prevents businesses from advertising'
        ],
        correctAnswerIndex: 2,
        explanation: 'Câu thứ ba liệt kê các mối lo như misinformation, online harassment, và excessive screen time.'
      },
      {
        id: 'q3',
        text: 'What does the passage suggest people should do?',
        options: [
          'Stop using social media completely',
          'Use social media thoughtfully',
          'Only use social media for work',
          'Spend more time online'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu cuối kết luận rằng social media nên được used thoughtfully rather than without limits.'
      }
    ]
  },
  {
  id: 'ielts-11',
  title: 'Why Recycling Alone Is Not Enough',
  level: 'IELTS',
  content: [
    'Recycling is often presented as a simple solution to environmental problems, but many experts argue that it is only one part of a larger strategy.',
    'Although recycling can reduce the amount of waste sent to landfills, it does not solve the problem of excessive consumption.',
    'For this reason, governments and individuals are increasingly encouraged to reduce unnecessary purchases and reuse products whenever possible.',
    'In the long term, a more sustainable society will depend not only on better waste management but also on changes in consumer behavior.'
  ],
  vocabulary: [
    { word: 'landfill', meaning: 'bãi chôn lấp rác' },
    { word: 'excessive consumption', meaning: 'tiêu dùng quá mức' },
    { word: 'reuse', meaning: 'tái sử dụng' },
    { word: 'consumer behavior', meaning: 'hành vi tiêu dùng' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What do many experts say about recycling?',
      options: [
        'It is the only environmental solution needed',
        'It is only one part of a larger strategy',
        'It should replace all other environmental policies',
        'It is no longer useful at all'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên nói rõ rằng many experts argue recycling is only one part of a larger strategy, chứ không phải giải pháp duy nhất.'
    },
    {
      id: 'q2',
      text: 'What problem does recycling not fully solve?',
      options: [
        'The lack of public transport',
        'Excessive consumption',
        'The shortage of clean water',
        'The rise of urban populations'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai giải thích rằng recycling không giải quyết được vấn đề excessive consumption.'
    },
    {
      id: 'q3',
      text: 'What does the passage suggest is needed in the long term?',
      options: [
        'Only larger recycling factories',
        'Changes in consumer behavior',
        'More imported products',
        'Fewer government policies'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối nói rằng về lâu dài, tính bền vững phụ thuộc không chỉ vào waste management mà còn vào changes in consumer behavior.'
    }
  ]
},
{
  id: 'ielts-12',
  title: 'The Benefits of Reading for Pleasure',
  level: 'IELTS',
  content: [
    'Reading for pleasure is widely regarded as an important habit for both children and adults.',
    'In addition to improving vocabulary and comprehension, regular reading can strengthen concentration and imagination.',
    'People who read frequently are also often exposed to a wider range of ideas, perspectives, and cultural experiences.',
    'As a result, many educators believe that encouraging recreational reading is just as important as teaching formal academic skills.'
  ],
  vocabulary: [
    { word: 'for pleasure', meaning: 'để giải trí, vì sở thích' },
    { word: 'comprehension', meaning: 'khả năng hiểu' },
    { word: 'perspective', meaning: 'góc nhìn, quan điểm' },
    { word: 'recreational reading', meaning: 'đọc sách giải trí' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is one benefit of reading for pleasure?',
      options: [
        'It eliminates the need for formal education',
        'It improves vocabulary',
        'It guarantees academic success',
        'It replaces social interaction'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nêu rõ reading can improve vocabulary and comprehension.'
    },
    {
      id: 'q2',
      text: 'What may frequent readers be exposed to?',
      options: [
        'Fewer cultural experiences',
        'A narrower range of ideas',
        'A wider range of perspectives',
        'Less imagination'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba nói rằng people who read frequently are often exposed to a wider range of ideas, perspectives, and cultural experiences.'
    },
    {
      id: 'q3',
      text: 'What do many educators believe?',
      options: [
        'Only academic textbooks are valuable',
        'Reading for pleasure is as important as formal academic skills',
        'Children should read only in school',
        'Imagination is less important than test scores'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối kết luận rằng many educators believe encouraging recreational reading is just as important as teaching formal academic skills.'
    }
  ]
},
{
  id: 'ielts-13',
  title: 'The Challenges of an Ageing Population',
  level: 'IELTS',
  content: [
    'Many countries are facing the challenge of ageing populations as people live longer and birth rates decline.',
    'This demographic change can place pressure on healthcare systems, pension programs, and the working-age population.',
    'At the same time, older people can continue to contribute to society through work, volunteering, and the sharing of knowledge and experience.',
    'For this reason, some governments are exploring policies that support active ageing rather than viewing older citizens only as dependents.'
  ],
  vocabulary: [
    { word: 'ageing population', meaning: 'dân số già hóa' },
    { word: 'birth rate', meaning: 'tỷ lệ sinh' },
    { word: 'demographic change', meaning: 'thay đổi nhân khẩu học' },
    { word: 'active ageing', meaning: 'già hóa năng động' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why are many countries experiencing ageing populations?',
      options: [
        'People are having more children',
        'People live longer and birth rates decline',
        'Healthcare systems are shrinking',
        'Young workers are retiring early'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên giải thích nguyên nhân là people live longer and birth rates decline.'
    },
    {
      id: 'q2',
      text: 'What pressure can this demographic change create?',
      options: [
        'Pressure on healthcare and pension systems',
        'Lower demand for public services',
        'Fewer challenges for workers',
        'A reduction in life expectancy'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu thứ hai nói rõ demographic change can place pressure on healthcare systems, pension programs, and the working-age population.'
    },
    {
      id: 'q3',
      text: 'What are some governments exploring?',
      options: [
        'Policies supporting active ageing',
        'Policies to reduce healthcare access',
        'Rules to prevent older people from volunteering',
        'Plans to close pension systems immediately'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu cuối nói rằng some governments are exploring policies that support active ageing.'
    }
  ]
},
{
  id: 'ielts-14',
  title: 'The Role of Zoos in Modern Society',
  level: 'IELTS',
  content: [
    'The role of zoos has changed significantly over time.',
    'While traditional zoos were mainly places of entertainment, many modern zoos now emphasize conservation, education, and scientific research.',
    'Supporters argue that zoos can protect endangered species and help the public learn about wildlife.',
    'Critics, however, believe that keeping animals in captivity raises serious ethical concerns, especially when their natural behavior is restricted.'
  ],
  vocabulary: [
    { word: 'conservation', meaning: 'bảo tồn' },
    { word: 'endangered species', meaning: 'loài có nguy cơ tuyệt chủng' },
    { word: 'captivity', meaning: 'sự nuôi nhốt' },
    { word: 'ethical concerns', meaning: 'những lo ngại về đạo đức' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What do many modern zoos emphasize?',
      options: [
        'Entertainment only',
        'Conservation, education, and research',
        'Animal sales and trade',
        'Sports and tourism'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết many modern zoos now emphasize conservation, education, and scientific research.'
    },
    {
      id: 'q2',
      text: 'What is one argument made by supporters of zoos?',
      options: [
        'Zoos eliminate all threats to wildlife',
        'Zoos help protect endangered species',
        'Zoos should keep all wild animals',
        'Zoos are better than natural habitats'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba nêu rằng supporters argue zoos can protect endangered species.'
    },
    {
      id: 'q3',
      text: 'Why do critics object to zoos?',
      options: [
        'Because zoos are too expensive to visit',
        'Because animals may face restricted natural behavior',
        'Because zoos do not teach children anything',
        'Because wildlife should live only in cities'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối giải thích rằng critics lo ngại về đạo đức, nhất là khi natural behavior của động vật bị hạn chế.'
    }
  ]
},
{
  id: 'ielts-15',
  title: 'How Advertising Influences Consumer Choices',
  level: 'IELTS',
  content: [
    'Advertising plays a major role in shaping consumer choices in modern economies.',
    'By using images, language, and emotional appeal, companies try to persuade people that certain products will improve their lives.',
    'In some cases, advertising provides useful information about price, quality, or availability.',
    'However, critics argue that it can also encourage unnecessary spending by creating artificial desires rather than real needs.'
  ],
  vocabulary: [
    { word: 'consumer choices', meaning: 'lựa chọn của người tiêu dùng' },
    { word: 'emotional appeal', meaning: 'sự tác động cảm xúc' },
    { word: 'availability', meaning: 'mức độ sẵn có' },
    { word: 'artificial desires', meaning: 'những mong muốn nhân tạo' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'How do companies try to persuade people in advertising?',
      options: [
        'By limiting product choices',
        'By using images, language, and emotional appeal',
        'By hiding all information about products',
        'By reducing the need for shopping'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nói rõ companies use images, language, and emotional appeal to persuade consumers.'
    },
    {
      id: 'q2',
      text: 'What useful information can advertising sometimes provide?',
      options: [
        'Political advice',
        'Price, quality, or availability',
        'Scientific data only',
        'Personal financial records'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba cho biết advertising đôi khi cung cấp thông tin hữu ích về price, quality, or availability.'
    },
    {
      id: 'q3',
      text: 'What is one criticism of advertising?',
      options: [
        'It always lowers product quality',
        'It creates artificial desires',
        'It makes consumers buy only local goods',
        'It prevents emotional decision-making'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối nói rằng advertising có thể encourage unnecessary spending by creating artificial desires.'
    }
  ]
},
{
  id: 'ielts-16',
  title: 'Why Biodiversity Matters',
  level: 'IELTS',
  content: [
    'Biodiversity refers to the variety of plant and animal life in a particular environment.',
    'Healthy ecosystems depend on biodiversity because different species often play different roles in maintaining natural balance.',
    'When biodiversity is reduced, ecosystems may become weaker and less able to respond to disease, pollution, or climate change.',
    'For this reason, protecting biodiversity is considered essential not only for wildlife but also for human societies that rely on natural resources.'
  ],
  vocabulary: [
    { word: 'biodiversity', meaning: 'đa dạng sinh học' },
    { word: 'ecosystem', meaning: 'hệ sinh thái' },
    { word: 'natural balance', meaning: 'cân bằng tự nhiên' },
    { word: 'natural resources', meaning: 'tài nguyên thiên nhiên' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What does biodiversity refer to?',
      options: [
        'The number of cities in a region',
        'The variety of plant and animal life',
        'The quality of drinking water',
        'The speed of climate change'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên định nghĩa biodiversity là the variety of plant and animal life in a particular environment.'
    },
    {
      id: 'q2',
      text: 'Why do healthy ecosystems depend on biodiversity?',
      options: [
        'Because all species perform the same role',
        'Because different species help maintain natural balance',
        'Because biodiversity removes pollution completely',
        'Because it guarantees stable weather'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết different species often play different roles in maintaining natural balance.'
    },
    {
      id: 'q3',
      text: 'Why is protecting biodiversity considered essential?',
      options: [
        'Only wildlife benefits from it',
        'It is useful only in forests',
        'Human societies also rely on natural resources',
        'It increases industrial production'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối nhấn mạnh rằng protecting biodiversity is essential not only for wildlife but also for human societies.'
    }
  ]
},
{
  id: 'ielts-17',
  title: 'The Educational Value of School Trips',
  level: 'IELTS',
  content: [
    'School trips are often seen as a valuable part of education because they allow students to learn outside the classroom.',
    'Visits to museums, historical sites, and science centers can help make abstract ideas more concrete and memorable.',
    'In addition, such trips may improve teamwork and communication as students interact with teachers and classmates in different settings.',
    'Although organizing school trips can be costly and time-consuming, many educators believe their educational value justifies the effort.'
  ],
  vocabulary: [
    { word: 'abstract ideas', meaning: 'ý tưởng trừu tượng' },
    { word: 'concrete', meaning: 'cụ thể, rõ ràng' },
    { word: 'teamwork', meaning: 'làm việc nhóm' },
    { word: 'justify', meaning: 'biện minh, làm cho xứng đáng' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why are school trips considered valuable?',
      options: [
        'They replace classroom teaching completely',
        'They allow students to learn outside the classroom',
        'They reduce the need for teachers',
        'They are always cheaper than regular lessons'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên cho biết school trips are valuable because they allow students to learn outside the classroom.'
    },
    {
      id: 'q2',
      text: 'What can visits to museums and science centers do?',
      options: [
        'Make abstract ideas more memorable',
        'Eliminate all academic difficulties',
        'Reduce student communication',
        'Replace textbooks in every subject'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu thứ hai nói rằng such visits can help make abstract ideas more concrete and memorable.'
    },
    {
      id: 'q3',
      text: 'What do many educators believe?',
      options: [
        'School trips are never worth the cost',
        'The educational value justifies the effort',
        'Only older students benefit from trips',
        'Trips should be replaced by online lessons'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối kết luận rằng many educators believe their educational value justifies the effort.'
    }
  ]
},
{
  id: 'ielts-18',
  title: 'The Effects of Noise Pollution',
  level: 'IELTS',
  content: [
    'Noise pollution is an increasingly common problem in large urban areas.',
    'Traffic, construction, and crowded public spaces can expose people to high levels of noise for long periods of time.',
    'Research suggests that constant exposure to noise may affect concentration, sleep quality, and even long-term health.',
    'As a result, some cities are introducing stricter regulations and urban planning measures to reduce excessive noise.'
  ],
  vocabulary: [
    { word: 'noise pollution', meaning: 'ô nhiễm tiếng ồn' },
    { word: 'exposure', meaning: 'sự tiếp xúc' },
    { word: 'concentration', meaning: 'sự tập trung' },
    { word: 'regulation', meaning: 'quy định' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is mentioned as a source of noise pollution?',
      options: [
        'Libraries',
        'Traffic and construction',
        'Online communication',
        'School textbooks'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nêu các nguồn như traffic, construction, và crowded public spaces.'
    },
    {
      id: 'q2',
      text: 'What may constant exposure to noise affect?',
      options: [
        'Only transport systems',
        'Concentration and sleep quality',
        'Food production only',
        'The number of office workers'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba cho biết noise may affect concentration, sleep quality, and long-term health.'
    },
    {
      id: 'q3',
      text: 'How are some cities responding to this problem?',
      options: [
        'By removing public transport',
        'By introducing stricter regulations',
        'By encouraging louder public events',
        'By closing business districts'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối cho biết some cities are introducing stricter regulations and urban planning measures.'
    }
  ]
},
{
  id: 'ielts-19',
  title: 'The Advantages of Renewable Energy',
  level: 'IELTS',
  content: [
    'Renewable energy sources such as solar, wind, and hydroelectric power are becoming more important in many countries.',
    'Unlike fossil fuels, renewable sources can be replenished naturally and generally produce lower levels of pollution.',
    'They can also improve energy security by reducing dependence on imported oil and gas.',
    'Although the initial cost of developing renewable energy systems can be high, many governments see them as a long-term investment.'
  ],
  vocabulary: [
    { word: 'renewable energy', meaning: 'năng lượng tái tạo' },
    { word: 'fossil fuels', meaning: 'nhiên liệu hóa thạch' },
    { word: 'replenished', meaning: 'được bổ sung lại' },
    { word: 'energy security', meaning: 'an ninh năng lượng' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is one difference between renewable energy and fossil fuels?',
      options: [
        'Renewable energy produces more pollution',
        'Renewable energy can be naturally replenished',
        'Fossil fuels are easier to store in cities',
        'Renewable energy depends entirely on imports'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai giải thích rằng unlike fossil fuels, renewable sources can be replenished naturally.'
    },
    {
      id: 'q2',
      text: 'How can renewable energy improve energy security?',
      options: [
        'By increasing dependence on imported fuels',
        'By reducing dependence on imported oil and gas',
        'By replacing all industrial systems instantly',
        'By lowering the need for electricity'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba nói rằng renewable energy can improve energy security by reducing dependence on imported oil and gas.'
    },
    {
      id: 'q3',
      text: 'Why do many governments support renewable energy systems?',
      options: [
        'They are free to build',
        'They are seen as a long-term investment',
        'They never require maintenance',
        'They are useful only in wealthy countries'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối cho biết although initial costs can be high, many governments see them as a long-term investment.'
    }
  ]
},
{
  id: 'ielts-20',
  title: 'The Influence of Role Models on Young People',
  level: 'IELTS',
  content: [
    'Role models can have a strong influence on the attitudes and ambitions of young people.',
    'Parents, teachers, athletes, artists, and public figures may all shape how teenagers think about success, responsibility, and personal goals.',
    'Positive role models can encourage confidence, persistence, and ethical behavior.',
    'However, if young people admire individuals who promote unrealistic lifestyles or harmful values, the influence may be negative instead.'
  ],
  vocabulary: [
    { word: 'role model', meaning: 'hình mẫu' },
    { word: 'ambition', meaning: 'tham vọng, hoài bão' },
    { word: 'persistence', meaning: 'sự kiên trì' },
    { word: 'unrealistic lifestyle', meaning: 'lối sống phi thực tế' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Who may act as role models for young people?',
      options: [
        'Only parents and teachers',
        'Only athletes and artists',
        'Many different kinds of people',
        'Only public figures on television'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ hai liệt kê nhiều đối tượng khác nhau như parents, teachers, athletes, artists, and public figures.'
    },
    {
      id: 'q2',
      text: 'What can positive role models encourage?',
      options: [
        'Confidence and ethical behavior',
        'Unrealistic lifestyles',
        'A lack of responsibility',
        'Negative social values'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu thứ ba nói rằng positive role models can encourage confidence, persistence, and ethical behavior.'
    },
    {
      id: 'q3',
      text: 'When can the influence of role models become negative?',
      options: [
        'When young people admire harmful values',
        'When teenagers set personal goals',
        'When parents give advice',
        'When schools discuss responsibility'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu cuối giải thích rằng influence may be negative if young people admire people who promote unrealistic lifestyles or harmful values.'
    }
  ]
},
{
  id: 'ielts-21',
  title: 'Why Exercise Is Important for Mental Health',
  level: 'IELTS',
  content: [
    'Exercise is widely known for its physical benefits, but it also plays an important role in mental health.',
    'Regular physical activity can reduce stress, improve mood, and help people sleep more effectively.',
    'Scientists believe that exercise encourages the release of chemicals in the brain that are linked to positive emotions.',
    'For this reason, many doctors recommend exercise as part of a balanced approach to mental well-being.'
  ],
  vocabulary: [
    { word: 'mental health', meaning: 'sức khỏe tinh thần' },
    { word: 'physical activity', meaning: 'hoạt động thể chất' },
    { word: 'positive emotions', meaning: 'cảm xúc tích cực' },
    { word: 'well-being', meaning: 'trạng thái khỏe mạnh, an lạc' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What does the passage say exercise can improve?',
      options: [
        'Only physical strength',
        'Mood and sleep',
        'Memory only',
        'Job performance only'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết regular physical activity can reduce stress, improve mood, and help people sleep more effectively.'
    },
    {
      id: 'q2',
      text: 'Why do scientists think exercise affects emotions?',
      options: [
        'Because it changes the weather',
        'Because it releases chemicals in the brain',
        'Because it reduces working hours',
        'Because it improves diet automatically'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba nói rằng exercise encourages the release of chemicals in the brain linked to positive emotions.'
    },
    {
      id: 'q3',
      text: 'Why do many doctors recommend exercise?',
      options: [
        'As the only treatment for all illness',
        'As part of mental well-being',
        'To replace sleep completely',
        'To reduce the need for food'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối kết luận rằng many doctors recommend exercise as part of a balanced approach to mental well-being.'
    }
  ]
},
{
  id: 'ielts-22',
  title: 'The Impact of Fast Fashion',
  level: 'IELTS',
  content: [
    'Fast fashion refers to the rapid production of inexpensive clothing that follows changing trends.',
    'This business model allows consumers to buy new styles at low prices, but it also raises concerns about waste, labor conditions, and environmental damage.',
    'Large amounts of clothing are often thrown away after a short period of use, adding to landfill problems.',
    'As awareness grows, some consumers are beginning to choose higher-quality clothes that last longer.'
  ],
  vocabulary: [
    { word: 'fast fashion', meaning: 'thời trang nhanh' },
    { word: 'inexpensive', meaning: 'rẻ tiền' },
    { word: 'labor conditions', meaning: 'điều kiện lao động' },
    { word: 'awareness', meaning: 'nhận thức' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What does fast fashion allow consumers to do?',
      options: [
        'Buy expensive clothes less often',
        'Buy new styles at low prices',
        'Avoid all fashion trends',
        'Wear the same clothes for many years'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nói rằng fast fashion allows consumers to buy new styles at low prices.'
    },
    {
      id: 'q2',
      text: 'What concern is mentioned in the passage?',
      options: [
        'A shortage of clothing stores',
        'Waste and environmental damage',
        'Too few fashion designers',
        'A lack of consumer interest'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai và thứ ba nhấn mạnh các vấn đề về waste, labor conditions, và environmental damage.'
    },
    {
      id: 'q3',
      text: 'What are some consumers beginning to do?',
      options: [
        'Buy fewer shoes only',
        'Stop wearing modern styles',
        'Choose higher-quality clothes that last longer',
        'Avoid all clothing brands'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối cho biết some consumers are beginning to choose higher-quality clothes that last longer.'
    }
  ]
},
{
  id: 'ielts-23',
  title: 'The Advantages of Learning History',
  level: 'IELTS',
  content: [
    'History is sometimes viewed as a school subject focused only on the past, but it can offer important lessons for the present and future.',
    'By studying historical events, people can better understand how societies develop and why conflicts, political systems, and social changes happen.',
    'History can also help students evaluate evidence and recognize that a single event may be interpreted in different ways.',
    'For these reasons, many educators see history as a subject that develops both knowledge and critical thinking.'
  ],
  vocabulary: [
    { word: 'historical events', meaning: 'các sự kiện lịch sử' },
    { word: 'political system', meaning: 'hệ thống chính trị' },
    { word: 'evaluate evidence', meaning: 'đánh giá bằng chứng' },
    { word: 'critical thinking', meaning: 'tư duy phản biện' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What can people better understand by studying history?',
      options: [
        'How to avoid all future mistakes',
        'How societies develop',
        'How to replace science',
        'How to become politicians'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết studying historical events helps people better understand how societies develop.'
    },
    {
      id: 'q2',
      text: 'What skill can history help students develop?',
      options: [
        'Physical coordination',
        'Critical thinking',
        'Driving ability',
        'Computer programming'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba và câu cuối nhấn mạnh rằng history helps students evaluate evidence và develop critical thinking.'
    },
    {
      id: 'q3',
      text: 'What does the passage suggest about historical events?',
      options: [
        'They always have only one meaning',
        'They are no longer relevant today',
        'They can be interpreted in different ways',
        'They matter only to historians'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba nói rõ rằng a single event may be interpreted in different ways.'
    }
  ]
},
{
  id: 'ielts-24',
  title: 'Why Clean Water Matters',
  level: 'IELTS',
  content: [
    'Access to clean water is one of the most important conditions for public health.',
    'Without safe drinking water, communities face a greater risk of disease, poor sanitation, and reduced quality of life.',
    'Clean water is also essential for agriculture, industry, and education because many daily activities depend on it.',
    'As populations grow and climate change affects water supplies, governments are under increasing pressure to manage water resources carefully.'
  ],
  vocabulary: [
    { word: 'public health', meaning: 'y tế công cộng' },
    { word: 'sanitation', meaning: 'điều kiện vệ sinh' },
    { word: 'water supplies', meaning: 'nguồn cung nước' },
    { word: 'water resources', meaning: 'tài nguyên nước' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why is clean water important for communities?',
      options: [
        'It improves road systems',
        'It reduces the risk of disease',
        'It increases fashion choices',
        'It replaces food production'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết without safe drinking water, communities face a greater risk of disease.'
    },
    {
      id: 'q2',
      text: 'What does the passage say clean water is essential for?',
      options: [
        'Only drinking',
        'Agriculture, industry, and education',
        'Only tourism',
        'Only private companies'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba nói rõ clean water is essential for agriculture, industry, and education.'
    },
    {
      id: 'q3',
      text: 'Why are governments under increasing pressure?',
      options: [
        'Because water is no longer needed',
        'Because climate change affects water supplies',
        'Because all cities have too much water',
        'Because agriculture is declining everywhere'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối giải thích rằng population growth và climate change affecting water supplies tạo áp lực cho governments.'
    }
  ]
},
{
  id: 'ielts-25',
  title: 'The Purpose of Museums',
  level: 'IELTS',
  content: [
    'Museums are often associated with preserving old objects, but their purpose is much broader than simple storage.',
    'They help protect cultural heritage, educate the public, and encourage people to think about art, science, and history in new ways.',
    'Many museums now use technology, interactive displays, and public programs to make their collections more engaging.',
    'As a result, museums are increasingly seen not just as places of preservation but also as spaces for learning and discussion.'
  ],
  vocabulary: [
    { word: 'preserving', meaning: 'bảo tồn, gìn giữ' },
    { word: 'cultural heritage', meaning: 'di sản văn hóa' },
    { word: 'interactive display', meaning: 'trưng bày tương tác' },
    { word: 'engaging', meaning: 'thu hút' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What does the passage say museums do besides storing objects?',
      options: [
        'Only sell historical items',
        'Protect heritage and educate the public',
        'Replace schools completely',
        'Focus only on entertainment'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nêu rằng museums help protect cultural heritage, educate the public, and encourage new ways of thinking.'
    },
    {
      id: 'q2',
      text: 'How are many museums trying to become more engaging?',
      options: [
        'By reducing the size of collections',
        'By using technology and interactive displays',
        'By removing public programs',
        'By limiting visitor access'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba cho biết many museums now use technology, interactive displays, and public programs.'
    },
    {
      id: 'q3',
      text: 'How are museums increasingly seen today?',
      options: [
        'Only as storage spaces',
        'As places for learning and discussion',
        'As businesses only',
        'As private clubs for experts'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối kết luận rằng museums are increasingly seen as spaces for learning and discussion.'
    }
  ]
},
{
  id: 'ielts-26',
  title: 'How Technology Changes Shopping Habits',
  level: 'IELTS',
  content: [
    'Technology has transformed shopping habits by making it easier for consumers to compare products and prices online.',
    'Many people now read reviews, watch demonstrations, and order goods through websites or mobile apps rather than visiting physical stores.',
    'This shift has created new opportunities for businesses, but it has also increased competition and changed the role of traditional shops.',
    'As digital shopping continues to grow, retailers must adapt to changing consumer expectations.'
  ],
  vocabulary: [
    { word: 'shopping habits', meaning: 'thói quen mua sắm' },
    { word: 'compare', meaning: 'so sánh' },
    { word: 'physical stores', meaning: 'cửa hàng trực tiếp' },
    { word: 'retailer', meaning: 'nhà bán lẻ' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'How has technology changed shopping habits?',
      options: [
        'By making price comparison easier',
        'By removing all shops',
        'By reducing product variety',
        'By making online shopping impossible'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu đầu tiên cho biết technology has transformed shopping habits by making it easier to compare products and prices online.'
    },
    {
      id: 'q2',
      text: 'What do many people now do before buying goods?',
      options: [
        'Only ask friends in person',
        'Read reviews and watch demonstrations',
        'Travel to factories',
        'Avoid using mobile apps'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nói rằng many people now read reviews, watch demonstrations, and order goods online.'
    },
    {
      id: 'q3',
      text: 'What must retailers do as digital shopping grows?',
      options: [
        'Close all traditional stores immediately',
        'Reduce consumer choice',
        'Adapt to changing consumer expectations',
        'Stop using websites'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối nêu rõ retailers must adapt to changing consumer expectations.'
    }
  ]
},
{
  id: 'ielts-27',
  title: 'The Role of Volunteers in Society',
  level: 'IELTS',
  content: [
    'Volunteers make important contributions to society in areas such as education, healthcare, environmental protection, and community support.',
    'Their work can provide services that might otherwise be too expensive or unavailable in some places.',
    'Volunteering can also benefit the individuals involved by helping them build confidence, social connections, and practical skills.',
    'For these reasons, many organizations depend heavily on volunteers to support their activities.'
  ],
  vocabulary: [
    { word: 'contribution', meaning: 'sự đóng góp' },
    { word: 'community support', meaning: 'hỗ trợ cộng đồng' },
    { word: 'social connection', meaning: 'mối liên kết xã hội' },
    { word: 'depend on', meaning: 'phụ thuộc vào' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'In which areas do volunteers contribute?',
      options: [
        'Only in healthcare',
        'Only in education',
        'In many areas including education and the environment',
        'Only in private business'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu đầu tiên liệt kê several areas such as education, healthcare, environmental protection, and community support.'
    },
    {
      id: 'q2',
      text: 'How can volunteering benefit volunteers themselves?',
      options: [
        'By reducing all responsibilities',
        'By building confidence and practical skills',
        'By guaranteeing full-time jobs',
        'By eliminating social interaction'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba nêu rằng volunteering can help individuals build confidence, social connections, and practical skills.'
    },
    {
      id: 'q3',
      text: 'Why do many organizations depend on volunteers?',
      options: [
        'Because volunteers replace professional workers in all cases',
        'Because volunteers support important activities',
        'Because volunteering is required by law',
        'Because volunteers are always more experienced'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối nói rằng many organizations depend heavily on volunteers to support their activities.'
    }
  ]
},
{
  id: 'ielts-28',
  title: 'The Effects of Sleep on Learning',
  level: 'IELTS',
  content: [
    'Sleep is essential for both physical health and effective learning.',
    'During sleep, the brain processes information and strengthens memories formed during the day.',
    'Students who do not get enough sleep may find it harder to concentrate, solve problems, and remember what they have studied.',
    'As a result, many researchers argue that good sleep habits are just as important as study time.'
  ],
  vocabulary: [
    { word: 'effective learning', meaning: 'học tập hiệu quả' },
    { word: 'process information', meaning: 'xử lý thông tin' },
    { word: 'strengthen memories', meaning: 'củng cố trí nhớ' },
    { word: 'concentrate', meaning: 'tập trung' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What happens during sleep according to the passage?',
      options: [
        'The brain stops working completely',
        'The brain processes information',
        'The body forgets the day’s events',
        'Learning becomes impossible'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết during sleep, the brain processes information and strengthens memories.'
    },
    {
      id: 'q2',
      text: 'What problem may students face if they lack sleep?',
      options: [
        'They become physically stronger',
        'They find it harder to concentrate',
        'They automatically study more',
        'They no longer need revision'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba nói rõ students who do not get enough sleep may find it harder to concentrate.'
    },
    {
      id: 'q3',
      text: 'What do many researchers argue?',
      options: [
        'Study time is more important than sleep in all cases',
        'Sleep should replace study',
        'Good sleep habits are very important for learning',
        'Only children need regular sleep'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối kết luận rằng good sleep habits are just as important as study time.'
    }
  ]
},
{
  id: 'ielts-29',
  title: 'Why People Move to Cities',
  level: 'IELTS',
  content: [
    'Urbanization has increased rapidly in many parts of the world as people move from rural areas to cities.',
    'One reason for this trend is that cities often offer more employment opportunities, better education, and improved access to healthcare.',
    'However, rapid urban growth can also lead to housing shortages, traffic congestion, and pressure on public services.',
    'Because of these challenges, urban planning has become increasingly important in modern societies.'
  ],
  vocabulary: [
    { word: 'urbanization', meaning: 'quá trình đô thị hóa' },
    { word: 'employment opportunities', meaning: 'cơ hội việc làm' },
    { word: 'housing shortage', meaning: 'thiếu nhà ở' },
    { word: 'public services', meaning: 'dịch vụ công' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why do many people move to cities?',
      options: [
        'Cities always have lower living costs',
        'Cities often offer more opportunities',
        'Rural areas are no longer safe',
        'Cities require less education'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nói rằng cities often offer more employment opportunities, better education, and improved access to healthcare.'
    },
    {
      id: 'q2',
      text: 'What is one challenge of rapid urban growth?',
      options: [
        'Fewer schools',
        'Housing shortages',
        'Less need for planning',
        'A reduction in population'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba liệt kê housing shortages, traffic congestion, and pressure on public services.'
    },
    {
      id: 'q3',
      text: 'What has become increasingly important?',
      options: [
        'Rural transport',
        'Urban planning',
        'Factory production',
        'Private farming'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối kết luận rằng urban planning has become increasingly important.'
    }
  ]
},
{
  id: 'ielts-30',
  title: 'The Importance of Critical Media Literacy',
  level: 'IELTS',
  content: [
    'In a world where information spreads quickly online, critical media literacy has become increasingly important.',
    'People need to be able to evaluate sources, identify bias, and distinguish between reliable reporting and misleading content.',
    'Without these skills, individuals may accept false information too easily or share it without checking accuracy.',
    'For this reason, many educators argue that media literacy should be taught alongside traditional reading and writing skills.'
  ],
  vocabulary: [
    { word: 'media literacy', meaning: 'năng lực hiểu biết truyền thông' },
    { word: 'evaluate sources', meaning: 'đánh giá nguồn tin' },
    { word: 'bias', meaning: 'thiên kiến' },
    { word: 'misleading content', meaning: 'nội dung gây hiểu lầm' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why is critical media literacy important?',
      options: [
        'Because information spreads quickly online',
        'Because newspapers are disappearing',
        'Because traditional reading is no longer needed',
        'Because all online content is false'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu đầu tiên giải thích rằng critical media literacy has become important because information spreads quickly online.'
    },
    {
      id: 'q2',
      text: 'What should people be able to do?',
      options: [
        'Memorize all news reports',
        'Identify bias and evaluate sources',
        'Avoid reading online content',
        'Write professional articles only'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nói rõ people need to evaluate sources, identify bias, and distinguish reliable reporting from misleading content.'
    },
    {
      id: 'q3',
      text: 'What do many educators argue?',
      options: [
        'Media literacy should be taught with reading and writing skills',
        'Media literacy is less important than science',
        'Only journalists need media literacy',
        'Schools should avoid online sources completely'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu cuối kết luận rằng many educators argue media literacy should be taught alongside traditional reading and writing skills.'
    }
  ]
},
{
  id: 'ielts-31',
  title: 'The Benefits of Public Art',
  level: 'IELTS',
  content: [
    'Public art includes sculptures, murals, and other creative works displayed in shared spaces such as parks, streets, and transport stations.',
    'Supporters argue that public art makes cities more attractive, encourages cultural identity, and gives residents greater access to artistic experiences.',
    'It can also start conversations about history, social issues, or local values in ways that formal classrooms may not.',
    'However, some critics question whether public money should be spent on art when cities also face practical problems such as housing and transport.'
  ],
  vocabulary: [
    { word: 'public art', meaning: 'nghệ thuật công cộng' },
    { word: 'mural', meaning: 'tranh tường' },
    { word: 'cultural identity', meaning: 'bản sắc văn hóa' },
    { word: 'practical problems', meaning: 'các vấn đề thiết thực' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is one benefit of public art mentioned in the passage?',
      options: [
        'It reduces housing costs',
        'It makes cities more attractive',
        'It replaces formal education',
        'It increases transport speed'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết supporters argue that public art makes cities more attractive, đồng thời khuyến khích cultural identity và mở rộng cơ hội tiếp cận nghệ thuật.'
    },
    {
      id: 'q2',
      text: 'What can public art encourage people to do?',
      options: [
        'Avoid social issues',
        'Spend less time outdoors',
        'Discuss history and local values',
        'Travel to other cities'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba nói rằng public art can start conversations about history, social issues, or local values.'
    },
    {
      id: 'q3',
      text: 'What concern do some critics have?',
      options: [
        'Public art is always unpopular',
        'Artists should not work outdoors',
        'Public money may be needed for other problems',
        'Cities already have too many museums'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối nêu lo ngại rằng public money có thể nên được dùng cho housing và transport thay vì art.'
    }
  ]
},
{
  id: 'ielts-32',
  title: 'Why Some Species Become Invasive',
  level: 'IELTS',
  content: [
    'An invasive species is a plant or animal that spreads into an environment where it is not naturally found.',
    'These species can become a serious problem because they may compete with native organisms for food, space, and other resources.',
    'In some cases, invasive species spread quickly because they have no natural predators in the new environment.',
    'As a result, scientists and governments often try to control their growth in order to protect local ecosystems.'
  ],
  vocabulary: [
    { word: 'invasive species', meaning: 'loài xâm lấn' },
    { word: 'native organisms', meaning: 'sinh vật bản địa' },
    { word: 'natural predators', meaning: 'thiên địch tự nhiên' },
    { word: 'ecosystem', meaning: 'hệ sinh thái' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is an invasive species?',
      options: [
        'A species found only in cities',
        'A species that spreads into a new environment',
        'A species protected by law',
        'A species used in agriculture'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên định nghĩa invasive species là một loài lan rộng vào môi trường nơi nó không xuất hiện tự nhiên.'
    },
    {
      id: 'q2',
      text: 'Why can invasive species be harmful?',
      options: [
        'They always improve biodiversity',
        'They compete with native organisms',
        'They reduce the need for conservation',
        'They cannot survive in new areas'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nói rõ rằng invasive species may compete with native organisms for food, space, and other resources.'
    },
    {
      id: 'q3',
      text: 'Why do some invasive species spread quickly?',
      options: [
        'They are always larger than native species',
        'They are protected by local people',
        'They may have no natural predators',
        'They need fewer resources'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba giải thích rằng in some cases they spread quickly because they have no natural predators in the new environment.'
    }
  ]
},
{
  id: 'ielts-33',
  title: 'The Effects of Long Commutes',
  level: 'IELTS',
  content: [
    'In many large cities, workers spend a significant amount of time traveling between home and work.',
    'Long commutes can reduce the time available for family life, exercise, and rest, which may affect overall well-being.',
    'They can also increase stress, especially when transport systems are crowded, delayed, or unreliable.',
    'For these reasons, some employers are exploring flexible working hours or remote work options to reduce the burden of commuting.'
  ],
  vocabulary: [
    { word: 'commute', meaning: 'việc đi lại giữa nhà và nơi làm việc' },
    { word: 'overall well-being', meaning: 'sức khỏe và trạng thái tốt nói chung' },
    { word: 'unreliable', meaning: 'không đáng tin cậy' },
    { word: 'flexible working hours', meaning: 'giờ làm việc linh hoạt' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What can long commutes reduce?',
      options: [
        'Transport costs',
        'Time for family life and rest',
        'The number of workers in cities',
        'The need for exercise'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết long commutes can reduce the time available for family life, exercise, and rest.'
    },
    {
      id: 'q2',
      text: 'When can commuting increase stress?',
      options: [
        'When transport is crowded or delayed',
        'When workers live near the office',
        'When exercise is regular',
        'When buses are empty'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu thứ ba giải thích rằng commuting can increase stress, especially when transport systems are crowded, delayed, or unreliable.'
    },
    {
      id: 'q3',
      text: 'How are some employers responding?',
      options: [
        'By extending working hours',
        'By reducing salaries',
        'By exploring flexible hours or remote work',
        'By moving offices to rural areas'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối nêu rằng some employers are exploring flexible working hours or remote work options.'
    }
  ]
},
{
  id: 'ielts-34',
  title: 'The Importance of Early Childhood Education',
  level: 'IELTS',
  content: [
    'Early childhood education is widely regarded as one of the most important stages of learning.',
    'During the early years, children develop language, social skills, and basic habits that can influence later academic performance.',
    'High-quality early education can also help reduce inequality by supporting children from different economic and social backgrounds.',
    'For this reason, many governments and researchers argue that investment in early childhood programs has long-term benefits for society.'
  ],
  vocabulary: [
    { word: 'early childhood education', meaning: 'giáo dục mầm non' },
    { word: 'academic performance', meaning: 'kết quả học tập' },
    { word: 'inequality', meaning: 'bất bình đẳng' },
    { word: 'long-term benefits', meaning: 'lợi ích lâu dài' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why is early childhood education considered important?',
      options: [
        'It replaces university education',
        'It shapes language and social skills',
        'It focuses only on memorization',
        'It is useful only for wealthy families'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nói rằng during the early years, children develop language, social skills, and basic habits.'
    },
    {
      id: 'q2',
      text: 'How can high-quality early education reduce inequality?',
      options: [
        'By removing all social differences immediately',
        'By supporting children from different backgrounds',
        'By making all schools private',
        'By shortening the school day'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba giải thích rằng high-quality early education can help reduce inequality by supporting children from different economic and social backgrounds.'
    },
    {
      id: 'q3',
      text: 'What do many governments and researchers argue?',
      options: [
        'Early programs have only short-term value',
        'Investment in early childhood programs benefits society',
        'Children should start work earlier',
        'Formal education should begin later for everyone'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối kết luận rằng investment in early childhood programs has long-term benefits for society.'
    }
  ]
},
{
  id: 'ielts-35',
  title: 'How Climate Change Affects Agriculture',
  level: 'IELTS',
  content: [
    'Climate change is expected to have major effects on agriculture in many parts of the world.',
    'Changes in temperature, rainfall patterns, and the frequency of extreme weather events can influence crop production and livestock health.',
    'Some regions may face water shortages, while others may experience flooding that damages farmland.',
    'Because food systems are closely connected to climate conditions, many scientists argue that agriculture must adapt in order to remain productive.'
  ],
  vocabulary: [
    { word: 'rainfall patterns', meaning: 'mô hình lượng mưa' },
    { word: 'extreme weather events', meaning: 'hiện tượng thời tiết cực đoan' },
    { word: 'livestock', meaning: 'gia súc' },
    { word: 'productive', meaning: 'có năng suất' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What can climate change affect in agriculture?',
      options: [
        'Only food prices',
        'Crop production and livestock health',
        'Only city planning',
        'The number of farmers in universities'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết changes in temperature, rainfall, and extreme weather can influence crop production and livestock health.'
    },
    {
      id: 'q2',
      text: 'What problem may some regions face?',
      options: [
        'Water shortages',
        'Lower education levels',
        'A lack of transport systems',
        'Too much urban art'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu thứ ba nói rằng some regions may face water shortages, while others may experience flooding.'
    },
    {
      id: 'q3',
      text: 'What do many scientists argue?',
      options: [
        'Agriculture should be replaced by industry',
        'Climate conditions do not matter for food systems',
        'Agriculture must adapt to remain productive',
        'Flooding always improves farmland'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối kết luận rằng agriculture must adapt in order to remain productive.'
    }
  ]
},
{
  id: 'ielts-36',
  title: 'The Purpose of Scientific Research',
  level: 'IELTS',
  content: [
    'Scientific research plays a central role in expanding human knowledge and solving practical problems.',
    'Through observation, experimentation, and analysis, researchers can test ideas and build evidence-based explanations of the world.',
    'Scientific discoveries have contributed to progress in medicine, engineering, agriculture, and communication.',
    'At the same time, research often raises new questions, showing that science is an ongoing process rather than a collection of final answers.'
  ],
  vocabulary: [
    { word: 'experimentation', meaning: 'thử nghiệm' },
    { word: 'analysis', meaning: 'phân tích' },
    { word: 'evidence-based', meaning: 'dựa trên bằng chứng' },
    { word: 'ongoing process', meaning: 'quá trình liên tục' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'How do researchers build explanations according to the passage?',
      options: [
        'By relying only on opinion',
        'Through observation, experimentation, and analysis',
        'By repeating old ideas without testing them',
        'By avoiding practical problems'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nêu rõ rằng researchers use observation, experimentation, and analysis to test ideas and build explanations.'
    },
    {
      id: 'q2',
      text: 'Which area is mentioned as benefiting from scientific discoveries?',
      options: [
        'Architecture only',
        'Medicine',
        'Fashion only',
        'Political theory only'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba liệt kê medicine, engineering, agriculture, and communication.'
    },
    {
      id: 'q3',
      text: 'What does the passage suggest about science?',
      options: [
        'It provides only final answers',
        'It is an ongoing process',
        'It is no longer needed in modern society',
        'It should avoid raising new questions'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối cho thấy science is an ongoing process rather than a collection of final answers.'
    }
  ]
},
{
  id: 'ielts-37',
  title: 'The Value of Team Sports',
  level: 'IELTS',
  content: [
    'Team sports are often praised not only for improving physical fitness but also for developing social skills.',
    'By working toward a shared goal, players learn cooperation, discipline, and the importance of communication.',
    'Team sports can also teach young people how to manage competition, success, and failure in healthy ways.',
    'Although not everyone enjoys competitive games, many schools continue to support team sports because of their broader educational value.'
  ],
  vocabulary: [
    { word: 'shared goal', meaning: 'mục tiêu chung' },
    { word: 'cooperation', meaning: 'sự hợp tác' },
    { word: 'discipline', meaning: 'tính kỷ luật' },
    { word: 'broader educational value', meaning: 'giá trị giáo dục rộng hơn' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What do players learn by working toward a shared goal?',
      options: [
        'How to avoid communication',
        'Cooperation and discipline',
        'How to study alone',
        'How to win every game'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nói rằng players learn cooperation, discipline, and the importance of communication.'
    },
    {
      id: 'q2',
      text: 'What can team sports teach young people?',
      options: [
        'How to avoid all failure',
        'How to manage competition and failure',
        'How to replace academic study',
        'How to ignore rules'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba giải thích rằng team sports can teach young people how to manage competition, success, and failure in healthy ways.'
    },
    {
      id: 'q3',
      text: 'Why do many schools support team sports?',
      options: [
        'Because all students enjoy competitive games',
        'Because team sports have broader educational value',
        'Because sports are easier than classroom learning',
        'Because schools do not offer other activities'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối cho biết many schools continue to support team sports because of their broader educational value.'
    }
  ]
},
{
  id: 'ielts-38',
  title: 'The Problem of Plastic Pollution',
  level: 'IELTS',
  content: [
    'Plastic pollution has become one of the most visible environmental problems of the modern age.',
    'Because plastic is cheap, durable, and widely used, enormous amounts of it are produced and discarded every year.',
    'Much of this waste ends up in rivers, oceans, and natural landscapes, where it can harm wildlife and enter food chains.',
    'As concern grows, many governments and companies are looking for ways to reduce single-use plastics and improve waste systems.'
  ],
  vocabulary: [
    { word: 'durable', meaning: 'bền' },
    { word: 'discarded', meaning: 'bị vứt bỏ' },
    { word: 'food chain', meaning: 'chuỗi thức ăn' },
    { word: 'single-use plastics', meaning: 'nhựa dùng một lần' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why is so much plastic produced?',
      options: [
        'Because it is expensive and rare',
        'Because it is cheap, durable, and widely used',
        'Because it disappears quickly in nature',
        'Because it replaces all natural materials'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai giải thích rằng enormous amounts of plastic are produced because plastic is cheap, durable, and widely used.'
    },
    {
      id: 'q2',
      text: 'Where does much plastic waste end up?',
      options: [
        'Only in factories',
        'In rivers, oceans, and natural landscapes',
        'Only in museums',
        'In underground train systems'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba nói rõ that much of this waste ends up in rivers, oceans, and natural landscapes.'
    },
    {
      id: 'q3',
      text: 'What are many governments and companies trying to do?',
      options: [
        'Increase plastic production',
        'Reduce single-use plastics',
        'Ban all packaging immediately',
        'Replace all waste systems with imports'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối cho biết many governments and companies are looking for ways to reduce single-use plastics and improve waste systems.'
    }
  ]
},
{
  id: 'ielts-39',
  title: 'Why Cultural Festivals Matter',
  level: 'IELTS',
  content: [
    'Cultural festivals are important events that celebrate music, food, art, language, and traditions.',
    'They can help communities preserve their heritage while also introducing visitors to different ways of life.',
    'In addition, festivals often support local economies by attracting tourists and creating opportunities for small businesses.',
    'Although some festivals become more commercial over time, many people still see them as valuable expressions of identity and community spirit.'
  ],
  vocabulary: [
    { word: 'heritage', meaning: 'di sản' },
    { word: 'tradition', meaning: 'truyền thống' },
    { word: 'commercial', meaning: 'mang tính thương mại' },
    { word: 'community spirit', meaning: 'tinh thần cộng đồng' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What can cultural festivals help communities do?',
      options: [
        'Preserve their heritage',
        'Avoid tourism completely',
        'Replace local traditions',
        'Reduce business activity'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu thứ hai nói rằng festivals can help communities preserve their heritage.'
    },
    {
      id: 'q2',
      text: 'How can festivals support local economies?',
      options: [
        'By discouraging visitors',
        'By attracting tourists and helping small businesses',
        'By closing public spaces',
        'By reducing cultural activities'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba giải thích rằng festivals often support local economies by attracting tourists and creating opportunities for small businesses.'
    },
    {
      id: 'q3',
      text: 'How do many people still view festivals?',
      options: [
        'As purely commercial events',
        'As unimportant in modern society',
        'As valuable expressions of identity and community spirit',
        'As events only for tourists'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối kết luận rằng many people still see them as valuable expressions of identity and community spirit.'
    }
  ]
},
{
  id: 'ielts-40',
  title: 'The Need for Lifelong Learning',
  level: 'IELTS',
  content: [
    'In a rapidly changing world, learning does not end when people leave school or university.',
    'New technologies, economic shifts, and changing job markets mean that adults often need to update their knowledge and skills throughout life.',
    'Lifelong learning can take many forms, including formal courses, workplace training, and independent study.',
    'For individuals and societies alike, the ability to continue learning is increasingly seen as essential for adaptation and progress.'
  ],
  vocabulary: [
    { word: 'lifelong learning', meaning: 'học tập suốt đời' },
    { word: 'economic shifts', meaning: 'biến động kinh tế' },
    { word: 'independent study', meaning: 'tự học' },
    { word: 'adaptation', meaning: 'sự thích nghi' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why do adults often need to continue learning?',
      options: [
        'Because schools are becoming shorter',
        'Because technology and job markets are changing',
        'Because formal education is no longer useful',
        'Because learning is only for workers'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết new technologies, economic shifts, and changing job markets mean that adults often need to update their knowledge and skills.'
    },
    {
      id: 'q2',
      text: 'Which is mentioned as a form of lifelong learning?',
      options: [
        'Independent study',
        'Only university education',
        'Only childhood training',
        'Retirement planning'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu thứ ba liệt kê formal courses, workplace training, and independent study.'
    },
    {
      id: 'q3',
      text: 'What is lifelong learning increasingly seen as essential for?',
      options: [
        'Entertainment only',
        'Adaptation and progress',
        'Reducing all competition',
        'Avoiding technology'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối kết luận rằng the ability to continue learning is increasingly seen as essential for adaptation and progress.'
    }
  ]
},
{
  id: 'ielts-41',
  title: 'The Benefits and Risks of Artificial Intelligence',
  level: 'IELTS',
  content: [
    'Artificial intelligence is increasingly used in areas such as healthcare, education, transport, and customer service.',
    'Its supporters argue that AI can improve efficiency, reduce human error, and process large amounts of information more quickly than people can.',
    'However, concerns have also been raised about job displacement, privacy, and the ethical use of automated decision-making systems.',
    'For this reason, many experts believe that AI should be developed carefully and supported by clear regulations.'
  ],
  vocabulary: [
    { word: 'artificial intelligence', meaning: 'trí tuệ nhân tạo' },
    { word: 'efficiency', meaning: 'hiệu quả' },
    { word: 'job displacement', meaning: 'sự thay thế lao động' },
    { word: 'regulation', meaning: 'quy định' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is one advantage of AI mentioned in the passage?',
      options: [
        'It removes the need for rules',
        'It can reduce human error',
        'It always creates more jobs',
        'It is only useful in transport'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết supporters argue that AI can improve efficiency, reduce human error, and process large amounts of information quickly.'
    },
    {
      id: 'q2',
      text: 'What concern is mentioned about AI?',
      options: [
        'It makes education impossible',
        'It cannot process information well',
        'It may cause job displacement',
        'It is too slow for healthcare'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba liệt kê các mối lo như job displacement, privacy, và ethical use of automated decision-making systems.'
    },
    {
      id: 'q3',
      text: 'What do many experts believe?',
      options: [
        'AI should be banned completely',
        'AI should be developed carefully',
        'AI should replace all human decisions',
        'AI is only useful for businesses'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối kết luận rằng many experts believe AI should be developed carefully and supported by clear regulations.'
    }
  ]
},
{
  id: 'ielts-42',
  title: 'Why Forests Are Important',
  level: 'IELTS',
  content: [
    'Forests play a vital role in maintaining the health of the planet.',
    'They absorb carbon dioxide, support biodiversity, protect soil, and help regulate water cycles.',
    'Forests also provide resources such as timber, food, and medicine for millions of people around the world.',
    'Because of these environmental and economic benefits, many scientists warn that deforestation could have serious long-term consequences.'
  ],
  vocabulary: [
    { word: 'carbon dioxide', meaning: 'khí carbon dioxide' },
    { word: 'biodiversity', meaning: 'đa dạng sinh học' },
    { word: 'water cycles', meaning: 'chu trình nước' },
    { word: 'deforestation', meaning: 'nạn phá rừng' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What do forests help regulate?',
      options: [
        'Telephone networks',
        'Water cycles',
        'Factory production',
        'Urban transport'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nói rằng forests help regulate water cycles, ngoài việc hấp thụ carbon dioxide và hỗ trợ biodiversity.'
    },
    {
      id: 'q2',
      text: 'What do forests provide for many people?',
      options: [
        'Only tourism opportunities',
        'Timber, food, and medicine',
        'Only clean drinking water',
        'Luxury goods'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba cho biết forests provide resources such as timber, food, and medicine.'
    },
    {
      id: 'q3',
      text: 'What do many scientists warn about?',
      options: [
        'The cost of planting trees',
        'The long-term effects of deforestation',
        'The decline of all medicine',
        'The growth of city transport'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối cảnh báo rằng deforestation could have serious long-term consequences.'
    }
  ]
},
{
  id: 'ielts-43',
  title: 'The Educational Potential of Documentaries',
  level: 'IELTS',
  content: [
    'Documentaries are often used as educational tools because they can present real-world issues in an engaging and accessible way.',
    'Through images, interviews, and expert commentary, they can help viewers understand topics such as history, science, and social change.',
    'Documentaries may also encourage critical thinking by inviting audiences to question evidence and consider different perspectives.',
    'However, viewers should remember that documentaries are created by individuals or organizations that may have particular viewpoints.'
  ],
  vocabulary: [
    { word: 'documentary', meaning: 'phim tài liệu' },
    { word: 'accessible', meaning: 'dễ tiếp cận' },
    { word: 'expert commentary', meaning: 'phần bình luận của chuyên gia' },
    { word: 'viewpoint', meaning: 'quan điểm' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why are documentaries often used in education?',
      options: [
        'They replace textbooks completely',
        'They present real-world issues in an engaging way',
        'They always provide completely neutral information',
        'They are easier to produce than books'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên giải thích rằng documentaries are often used as educational tools because they present real-world issues in an engaging and accessible way.'
    },
    {
      id: 'q2',
      text: 'What can documentaries help viewers understand?',
      options: [
        'Only social change',
        'Only science',
        'History, science, and social change',
        'Only personal opinions'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ hai liệt kê history, science, and social change là những chủ đề documentaries có thể giúp người xem hiểu hơn.'
    },
    {
      id: 'q3',
      text: 'What should viewers remember about documentaries?',
      options: [
        'They are always created without any viewpoint',
        'They may reflect particular viewpoints',
        'They should not be used in education',
        'They are less reliable than all other media'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối nhắc rằng documentaries are created by individuals or organizations that may have particular viewpoints.'
    }
  ]
},
{
  id: 'ielts-44',
  title: 'Why Local Businesses Matter',
  level: 'IELTS',
  content: [
    'Local businesses are often seen as an important part of healthy communities.',
    'They can create jobs, keep money circulating within the local economy, and provide goods or services that reflect local needs and preferences.',
    'Small businesses may also contribute to a sense of identity by giving neighborhoods a unique character.',
    'Although they often face strong competition from large companies, many consumers choose to support them because of their social and economic value.'
  ],
  vocabulary: [
    { word: 'circulating', meaning: 'luân chuyển' },
    { word: 'local economy', meaning: 'nền kinh tế địa phương' },
    { word: 'unique character', meaning: 'bản sắc riêng' },
    { word: 'competition', meaning: 'cạnh tranh' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'How can local businesses help communities?',
      options: [
        'By moving money out of the area',
        'By creating jobs',
        'By reducing neighborhood identity',
        'By replacing all large companies'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nói rằng local businesses can create jobs, keep money circulating locally, and provide suitable goods and services.'
    },
    {
      id: 'q2',
      text: 'What can small businesses add to neighborhoods?',
      options: [
        'A unique character',
        'More traffic problems',
        'Less cultural identity',
        'Fewer services'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu thứ ba giải thích rằng small businesses may contribute to a sense of identity by giving neighborhoods a unique character.'
    },
    {
      id: 'q3',
      text: 'Why do many consumers support local businesses?',
      options: [
        'Because they are always cheaper',
        'Because of their social and economic value',
        'Because large companies are illegal',
        'Because they offer only imported goods'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối cho biết many consumers choose to support them because of their social and economic value.'
    }
  ]
},
{
  id: 'ielts-45',
  title: 'The Effects of Screen Time on Children',
  level: 'IELTS',
  content: [
    'The amount of time children spend looking at screens has become an important topic of discussion among parents, teachers, and health experts.',
    'Screens can provide educational content and entertainment, but excessive screen time may affect sleep, concentration, and physical activity.',
    'Some researchers also worry that too much time spent on devices could reduce opportunities for face-to-face interaction and outdoor play.',
    'As a result, many experts recommend balanced use of technology rather than complete avoidance.'
  ],
  vocabulary: [
    { word: 'screen time', meaning: 'thời gian sử dụng màn hình' },
    { word: 'excessive', meaning: 'quá mức' },
    { word: 'face-to-face interaction', meaning: 'tương tác trực tiếp' },
    { word: 'balanced use', meaning: 'sử dụng cân bằng' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What can screens provide for children?',
      options: [
        'Only physical exercise',
        'Educational content and entertainment',
        'More outdoor play automatically',
        'Less need for sleep'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết screens can provide educational content and entertainment.'
    },
    {
      id: 'q2',
      text: 'What may excessive screen time affect?',
      options: [
        'Sleep and concentration',
        'Only vocabulary',
        'The number of teachers',
        'Transport systems'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu thứ hai nêu rõ excessive screen time may affect sleep, concentration, and physical activity.'
    },
    {
      id: 'q3',
      text: 'What do many experts recommend?',
      options: [
        'Complete avoidance of technology',
        'Balanced use of technology',
        'Unlimited screen time on weekends',
        'Only outdoor learning'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối kết luận rằng many experts recommend balanced use of technology rather than complete avoidance.'
    }
  ]
},
{
  id: 'ielts-46',
  title: 'How Recycling Programs Depend on Public Participation',
  level: 'IELTS',
  content: [
    'Recycling programs can only be effective if the public understands how to use them correctly.',
    'When people separate waste properly, more materials can be reused and less contamination occurs in the recycling process.',
    'However, confusion about recycling rules often leads to mistakes, which can increase costs and reduce efficiency.',
    'For this reason, clear information campaigns are considered essential for the success of recycling systems.'
  ],
  vocabulary: [
    { word: 'separate waste', meaning: 'phân loại rác' },
    { word: 'contamination', meaning: 'sự nhiễm bẩn lẫn vào' },
    { word: 'efficiency', meaning: 'hiệu quả' },
    { word: 'information campaign', meaning: 'chiến dịch thông tin' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'When are recycling programs more effective?',
      options: [
        'When people ignore the rules',
        'When waste is properly separated',
        'When all rubbish is burned',
        'When only businesses recycle'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nói rằng when people separate waste properly, more materials can be reused and less contamination occurs.'
    },
    {
      id: 'q2',
      text: 'What can confusion about recycling rules cause?',
      options: [
        'Fewer information campaigns',
        'Mistakes that increase costs',
        'Better public understanding',
        'Lower contamination'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba giải thích rằng confusion about rules often leads to mistakes, which can increase costs and reduce efficiency.'
    },
    {
      id: 'q3',
      text: 'What is considered essential for successful recycling systems?',
      options: [
        'Cheaper plastic products',
        'Clear information campaigns',
        'Fewer collection centers',
        'Less public involvement'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối cho biết clear information campaigns are considered essential for the success of recycling systems.'
    }
  ]
},
{
  id: 'ielts-47',
  title: 'Why Handwriting Is Still Relevant',
  level: 'IELTS',
  content: [
    'Although digital devices are used for much of modern communication, handwriting continues to play an important role in learning and daily life.',
    'Some researchers suggest that writing by hand can improve memory and help learners process information more deeply.',
    'Handwriting may also support the development of fine motor skills, especially in young children.',
    'For this reason, many educators believe that digital literacy should not completely replace traditional writing skills.'
  ],
  vocabulary: [
    { word: 'handwriting', meaning: 'chữ viết tay' },
    { word: 'process information', meaning: 'xử lý thông tin' },
    { word: 'fine motor skills', meaning: 'kỹ năng vận động tinh' },
    { word: 'digital literacy', meaning: 'năng lực sử dụng công nghệ số' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What do some researchers say handwriting can improve?',
      options: [
        'Internet speed',
        'Memory',
        'Transport systems',
        'Public speaking'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nói rằng writing by hand can improve memory and help learners process information more deeply.'
    },
    {
      id: 'q2',
      text: 'What may handwriting support in young children?',
      options: [
        'Fine motor skills',
        'Driving skills',
        'Programming ability',
        'Sports performance'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu thứ ba giải thích rằng handwriting may support the development of fine motor skills.'
    },
    {
      id: 'q3',
      text: 'What do many educators believe?',
      options: [
        'Traditional writing skills should disappear',
        'Digital literacy should replace handwriting completely',
        'Traditional writing skills should still be kept',
        'Children should use only digital devices'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối kết luận rằng digital literacy should not completely replace traditional writing skills.'
    }
  ]
},
{
  id: 'ielts-48',
  title: 'The Social Value of Community Gardens',
  level: 'IELTS',
  content: [
    'Community gardens are shared spaces where local residents grow flowers, fruits, or vegetables together.',
    'Besides producing food, these gardens can strengthen social ties by encouraging cooperation and regular contact among neighbors.',
    'They may also provide educational opportunities for children to learn about plants, nutrition, and environmental responsibility.',
    'As urban populations grow, community gardens are increasingly seen as small but valuable tools for improving city life.'
  ],
  vocabulary: [
    { word: 'social ties', meaning: 'mối liên kết xã hội' },
    { word: 'cooperation', meaning: 'sự hợp tác' },
    { word: 'nutrition', meaning: 'dinh dưỡng' },
    { word: 'environmental responsibility', meaning: 'trách nhiệm với môi trường' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'How can community gardens help neighborhoods?',
      options: [
        'By reducing all food prices',
        'By strengthening social ties',
        'By replacing public schools',
        'By limiting outdoor activity'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết these gardens can strengthen social ties by encouraging cooperation and regular contact among neighbors.'
    },
    {
      id: 'q2',
      text: 'What can children learn from community gardens?',
      options: [
        'Only cooking skills',
        'Plants, nutrition, and environmental responsibility',
        'How to avoid teamwork',
        'How to design office buildings'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba nêu rằng community gardens may provide educational opportunities for children to learn about plants, nutrition, and environmental responsibility.'
    },
    {
      id: 'q3',
      text: 'How are community gardens increasingly viewed?',
      options: [
        'As a complete solution to urban problems',
        'As valuable tools for improving city life',
        'As spaces useful only for tourism',
        'As expensive projects with little value'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối kết luận rằng community gardens are increasingly seen as small but valuable tools for improving city life.'
    }
  ]
},
{
  id: 'ielts-49',
  title: 'The Importance of Time Management',
  level: 'IELTS',
  content: [
    'Time management is an essential skill in study, work, and everyday life.',
    'People who organize their tasks effectively are often better able to meet deadlines, reduce stress, and maintain a balance between responsibilities.',
    'Good time management does not mean working constantly, but rather choosing priorities and using time with greater purpose.',
    'For this reason, many schools and workplaces encourage planning, goal setting, and regular review of progress.'
  ],
  vocabulary: [
    { word: 'deadline', meaning: 'hạn chót' },
    { word: 'responsibility', meaning: 'trách nhiệm' },
    { word: 'priority', meaning: 'ưu tiên' },
    { word: 'goal setting', meaning: 'đặt mục tiêu' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What can effective time management help people do?',
      options: [
        'Avoid all responsibilities',
        'Meet deadlines and reduce stress',
        'Work constantly without rest',
        'Finish every task immediately'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết people who organize their tasks effectively are better able to meet deadlines, reduce stress, and maintain balance.'
    },
    {
      id: 'q2',
      text: 'What does good time management mean according to the passage?',
      options: [
        'Working constantly',
        'Using time with greater purpose',
        'Avoiding priorities',
        'Ignoring long-term goals'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba giải thích rằng good time management does not mean working constantly, but choosing priorities and using time with greater purpose.'
    },
    {
      id: 'q3',
      text: 'What do many schools and workplaces encourage?',
      options: [
        'Less planning',
        'Goal setting and regular review of progress',
        'Longer working hours only',
        'More competition and fewer breaks'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối nêu rằng many schools and workplaces encourage planning, goal setting, and regular review of progress.'
    }
  ]
},
{
  id: 'ielts-50',
  title: 'The Role of Curiosity in Learning',
  level: 'IELTS',
  content: [
    'Curiosity is often described as one of the most powerful drivers of learning.',
    'When people are genuinely curious, they are more likely to ask questions, explore ideas, and remember what they discover.',
    'Curiosity can also make learning more enjoyable because it turns information into something personally meaningful.',
    'For this reason, many educators believe that successful teaching should not only provide answers but also inspire students to keep asking why.'
  ],
  vocabulary: [
    { word: 'curiosity', meaning: 'sự tò mò' },
    { word: 'driver of learning', meaning: 'động lực thúc đẩy học tập' },
    { word: 'meaningful', meaning: 'có ý nghĩa' },
    { word: 'inspire', meaning: 'truyền cảm hứng' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why are curious people more likely to learn well?',
      options: [
        'They avoid asking questions',
        'They explore ideas and remember discoveries',
        'They only study easy topics',
        'They depend completely on teachers'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết when people are genuinely curious, they are more likely to ask questions, explore ideas, and remember what they discover.'
    },
    {
      id: 'q2',
      text: 'How can curiosity affect learning?',
      options: [
        'It makes learning less enjoyable',
        'It makes information personally meaningful',
        'It removes the need for teachers',
        'It reduces memory'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba giải thích rằng curiosity can make learning more enjoyable because it turns information into something personally meaningful.'
    },
    {
      id: 'q3',
      text: 'What do many educators believe successful teaching should do?',
      options: [
        'Provide answers only',
        'Avoid difficult questions',
        'Inspire students to keep asking why',
        'Focus only on memorization'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối kết luận rằng successful teaching should not only provide answers but also inspire students to keep asking why.'
    }
  ]
}
];