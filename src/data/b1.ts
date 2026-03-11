import { Passage } from '../types';

export const b1Passages: Passage[] = [
{
    id: 'b1-01',
    title: 'The Evolution of Artificial Intelligence',
    level: 'B1',
    content: [
      "Artificial Intelligence, commonly known as AI, refers to the simulation of human intelligence by machines.",
      "These systems are programmed to think like humans and mimic their actions, such as learning and problem-solving.",
      "The ideal characteristic of AI is its ability to take actions that have the best chance of achieving a specific goal.",
      "Machine learning is a subfield of AI that allows software to become more accurate in predicting outcomes without being explicitly programmed.",
      "Nowadays, AI is integrated into many aspects of our lives, from voice assistants like Siri to recommendation algorithms on YouTube.",
      "In healthcare, AI helps doctors diagnose diseases more quickly and accurately by analyzing thousands of medical images.",
      "However, the rapid development of AI also raises important ethical questions about privacy and job displacement.",
      "Many experts believe that AI will not replace humans but will instead enhance our creative and analytical abilities.",
      "To work effectively with AI, future professionals need to understand both its potential and its limitations.",
      "The goal of AI research is to create systems that can perform tasks that normally require human intelligence.",
      "As technology continues to advance, the boundary between human and machine capabilities becomes increasingly blurred.",
      "Embracing AI with a critical and informed mindset is essential for success in the modern digital era."
    ],
    vocabulary: [
      { word: 'Simulation', meaning: 'Sự mô phỏng' },
      { word: 'Mimic', meaning: 'Bắt chước / Mô phỏng lại' },
      { word: 'Outcomes', meaning: 'Kết quả / Đầu ra' },
      { word: 'Displacement', meaning: 'Sự thay thế / Dịch chuyển' },
      { word: 'Integrated', meaning: 'Được tích hợp' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the primary definition of AI mentioned in the text?',
        options: [
          'A machine that can move like a human',
          'The simulation of human intelligence by machines',
          'A computer that never makes mistakes',
          'A system used only for playing games'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn đầu tiên nêu: "Artificial Intelligence... refers to the simulation of human intelligence by machines."'
      },
      {
        id: 'q2',
        text: 'What is "machine learning" as described in the passage?',
        options: [
          'A way for machines to build other machines',
          'A subfield of AI that improves prediction accuracy without explicit programming',
          'A method to replace all human workers',
          'A program that only processes voice commands'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Machine learning is a subfield of AI that allows software to become more accurate... without being explicitly programmed."'
      },
      {
        id: 'q3',
        text: 'How does AI assist in the healthcare sector?',
        options: [
          'By performing surgeries alone',
          'By diagnosing diseases through the analysis of medical images',
          'By replacing all doctors and nurses',
          'By reducing the cost of all medicines'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "In healthcare, AI helps doctors diagnose diseases... by analyzing thousands of medical images."'
      },
      {
        id: 'q4',
        text: 'What concern is raised regarding the rapid development of AI?',
        options: [
          'The high cost of computers',
          'Ethical questions about privacy and job displacement',
          'The lack of interest from students',
          'The slow speed of the internet'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản đề cập: "...raises important ethical questions about privacy and job displacement."'
      },
      {
        id: 'q5',
        text: 'What is the recommended mindset for dealing with AI?',
        options: [
          'A fearful and avoidant mindset',
          'A critical and informed mindset',
          'Accepting everything AI says as truth',
          'Ignoring the existence of technology'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu cuối cùng nhấn mạnh: "Embracing AI with a critical and informed mindset is essential..." '
      }
    ]
  },
  {
    id: 'b1-02',
    title: 'The Fundamentals of Blockchain',
    level: 'B1',
    content: [
      "Blockchain is a decentralized digital ledger that records transactions across many computers.",
      "This technology ensures that the record cannot be altered retroactively without the alteration of all subsequent blocks.",
      "The primary benefit of blockchain is that it operates on a peer-to-peer network, removing the need for a central authority.",
      "Each block in the chain contains a number of transactions and a cryptographic hash of the previous block.",
      "This connection creates a secure link, making the data resistant to hacking or unauthorized changes.",
      "While many people associate blockchain only with Bitcoin, its applications go far beyond digital currencies.",
      "For instance, it can be used in supply chain management to track the origin of products from the factory to the store.",
      "In the legal field, 'smart contracts' can automatically execute agreements when specific conditions are met.",
      "Transparency is another key feature, as all participants in the network can view the entire transaction history.",
      "Despite its advantages, blockchain faces challenges like high energy consumption and scalability issues.",
      "Developers are currently working on new versions of the technology to make it faster and more eco-friendly.",
      "Understanding blockchain is essential for anyone interested in the future of finance, security, and data management."
    ],
    vocabulary: [
      { word: 'Decentralized', meaning: 'Phi tập trung' },
      { word: 'Ledger', meaning: 'Sổ cái (kế toán)' },
      { word: 'Altered', meaning: 'Bị thay đổi / Sửa đổi' },
      { word: 'Cryptography', meaning: 'Mật mã học' },
      { word: 'Scalability', meaning: 'Khả năng mở rộng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main characteristic of a blockchain ledger?',
        options: [
          'It is managed by a single bank',
          'It is a decentralized digital record that is hard to alter',
          'It only records Bitcoin prices',
          'It is deleted every 24 hours'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Blockchain is a decentralized digital ledger... the record cannot be altered retroactively."'
      },
      {
        id: 'q2',
        text: 'How are blocks connected in a blockchain?',
        options: [
          'By physical wires',
          'Through a cryptographic hash of the previous block',
          'By a central server in New York',
          'By a password that users share'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn giải thích: "Each block... contains... a cryptographic hash of the previous block."'
      },
      {
        id: 'q3',
        text: 'What are "smart contracts"?',
        options: [
          'Paper documents signed by a lawyer',
          'Programs that execute agreements automatically when conditions are met',
          'Expensive legal services',
          'Apps for sending emails'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản định nghĩa: "...smart contracts can automatically execute agreements when specific conditions are met."'
      },
      {
        id: 'q4',
        text: 'What is a major challenge currently facing blockchain technology?',
        options: [
          'Lack of internet connection',
          'High energy consumption and scalability issues',
          'Too many people using it for free',
          'The technology is too old'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn đề cập: "...blockchain faces challenges like high energy consumption and scalability issues."'
      },
      {
        id: 'q5',
        text: 'Besides finance, where else can blockchain be applied?',
        options: [
          'Only in video games',
          'In supply chain management and legal fields',
          'Nowhere else',
          'Only for personal storage'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn lấy ví dụ về "supply chain management" và "legal field".'
      }
    ]
  },
  {
    id: 'b1-03',
    title: 'Connecting the World with IoT',
    level: 'B1',
    content: [
      "The Internet of Things, or IoT, describes the network of physical objects that are embedded with sensors and software.",
      "These 'things' connect and exchange data with other devices and systems over the internet.",
      "IoT technology spans from simple household items like smart light bulbs to complex industrial tools.",
      "By collecting real-time data, IoT systems can automate tasks and improve overall efficiency in various industries.",
      "For instance, a smart thermostat can learn your schedule and adjust the temperature to save energy automatically.",
      "In smart cities, IoT sensors help manage traffic flow and monitor air quality to create a better living environment.",
      "The massive amount of data generated by these devices requires advanced cloud computing for storage and analysis.",
      "However, the widespread use of connected devices also introduces significant security and privacy risks.",
      "Hackers could potentially access personal information if the devices do not have strong encryption and protection.",
      "Standardization is another challenge, as devices from different manufacturers often struggle to communicate with each other.",
      "Despite these concerns, IoT continues to expand rapidly, transforming how we interact with the physical world.",
      "Developing secure and compatible IoT solutions is a major goal for engineers in the current decade."
    ],
    vocabulary: [
      { word: 'Embedded', meaning: 'Được nhúng / Gắn vào' },
      { word: 'Sensors', meaning: 'Cảm biến' },
      { word: 'Automation', meaning: 'Sự tự động hóa' },
      { word: 'Encryption', meaning: 'Sự mã hóa' },
      { word: 'Compatible', meaning: 'Tương thích' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the basic definition of IoT?',
        options: [
          'A new type of faster internet cable',
          'A network of physical objects embedded with sensors and software',
          'A website for buying household items',
          'A robot that cleans the house'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu đầu tiên nêu: "The Internet of Things... describes the network of physical objects that are embedded with sensors and software."'
      },
      {
        id: 'q2',
        text: 'How can a smart thermostat help a user?',
        options: [
          'By making the house look modern',
          'By learning their schedule and adjusting temperature to save energy',
          'By playing music in every room',
          'By calling the police automatically'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản lấy ví dụ: "...a smart thermostat can learn your schedule and adjust the temperature to save energy automatically."'
      },
      {
        id: 'q3',
        text: 'What is required to handle the data generated by IoT devices?',
        options: [
          'Larger batteries for all devices',
          'Advanced cloud computing for storage and analysis',
          'More physical wires in every building',
          'Printing the data on paper'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản đề cập: "...requires advanced cloud computing for storage and analysis."'
      },
      {
        id: 'q4',
        text: 'What is a significant risk of using connected IoT devices?',
        options: [
          'The devices might become too heavy',
          'Security and privacy risks due to potential hacking',
          'The devices will use too much water',
          'The internet will become slower for everyone'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn cảnh báo: "...introduces significant security and privacy risks."'
      },
      {
        id: 'q5',
        text: 'What does "standardization" refer to in the context of IoT?',
        options: [
          'Making all devices look exactly the same',
          'Ensuring devices from different manufacturers can communicate with each other',
          'Increasing the price of all smart devices',
          'Selling devices only in specific stores'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích đây là thách thức khi các thiết bị "often struggle to communicate with each other."'
      }
    ]
  },
  {
    id: 'b1-04',
    title: 'The Power of Cloud Computing',
    level: 'B1',
    content: [
      "Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing.",
      "Instead of buying and maintaining physical data centers, you can access technology services from providers like AWS or Google Cloud.",
      "This model offers great flexibility, allowing businesses to scale their resources up or down based on demand.",
      "Cloud services are typically categorized into three main models: SaaS, PaaS, and IaaS.",
      "Software as a Service (SaaS) allows users to connect to and use cloud-based apps over the internet, such as Gmail.",
      "Platform as a Service (PaaS) provides a framework for developers to build and deploy custom applications quickly.",
      "Infrastructure as a Service (IaaS) offers the highest level of flexibility by providing virtualized computing resources.",
      "One major advantage of the cloud is cost efficiency, as companies only pay for the resources they actually use.",
      "Security remains a top priority, and cloud providers invest heavily in protecting data from cyber threats.",
      "However, relying on the cloud means that an internet connection is essential for accessing your work and tools.",
      "Data sovereignty is also a concern, as different countries have different laws regarding where data can be stored.",
      "As digital transformation continues, cloud computing has become the backbone of the modern global economy."
    ],
    vocabulary: [
      { word: 'On-demand', meaning: 'Theo yêu cầu' },
      { word: 'Scalability', meaning: 'Khả năng mở rộng' },
      { word: 'Infrastructure', meaning: 'Hạ tầng' },
      { word: 'Sovereignty', meaning: 'Chủ quyền' },
      { word: 'Backbone', meaning: 'Xương sống / Trụ cột' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the "pay-as-you-go" pricing model in cloud computing?',
        options: [
          'Paying for everything at the beginning',
          'Only paying for the resources you actually use',
          'Paying a fixed price every year',
          'Accessing services for free forever'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...pay-as-you-go pricing... companies only pay for the resources they actually use."'
      },
      {
        id: 'q2',
        text: 'What is the main difference between buying physical servers and using the cloud?',
        options: [
          'Physical servers are always faster',
          'Cloud allows access to services over the internet without maintaining hardware',
          'Cloud services are only for small companies',
          'Physical servers do not require electricity'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Instead of buying and maintaining physical data centers, you can access technology services..." '
      },
      {
        id: 'q3',
        text: 'Which model provides a framework for developers to build apps?',
        options: [
          'SaaS',
          'PaaS',
          'IaaS',
          'Hardware as a Service'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản định nghĩa: "Platform as a Service (PaaS) provides a framework for developers to build and deploy custom applications."'
      },
      {
        id: 'q4',
        text: 'What is a potential disadvantage of relying on cloud computing?',
        options: [
          'It is too cheap for large businesses',
          'It requires an internet connection to access work',
          'It only works during the daytime',
          'It makes computers much heavier'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn cảnh báo: "...relying on the cloud means that an internet connection is essential."'
      },
      {
        id: 'q5',
        text: 'What does "data sovereignty" refer to in the text?',
        options: [
          'The speed of data transfer',
          'Laws regarding where data can be stored in different countries',
          'The price of storing data',
          'The color of the data icons'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...different countries have different laws regarding where data can be stored."'
      }
    ]
  },
  {
    id: 'b1-05',
    title: 'The Essentials of Cybersecurity',
    level: 'B1',
    content: [
      "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.",
      "These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information.",
      "One common method used by hackers is 'phishing', which involves sending fraudulent emails to steal user data.",
      "Another serious threat is 'ransomware', a type of malware designed to lock files until a sum of money is paid.",
      "To defend against these threats, organizations implement multi-layer security systems and strong firewalls.",
      "Multi-factor authentication (MFA) adds an extra layer of security by requiring more than just a password.",
      "Encryption is also essential, as it converts data into a secret code that cannot be read without a key.",
      "While technology plays a huge role, human error remains one of the weakest links in cybersecurity.",
      "Employees must be trained to recognize suspicious links and follow strict security protocols at all times.",
      "Regular software updates are necessary to patch vulnerabilities that hackers might exploit to enter a system.",
      "As our world becomes more connected, the demand for skilled cybersecurity professionals continues to grow rapidly.",
      "Developing a 'security-first' mindset is crucial for protecting both personal privacy and national infrastructure."
    ],
    vocabulary: [
      { word: 'Phishing', meaning: 'Tấn công giả mạo (để lấy thông tin)' },
      { word: 'Ransomware', meaning: 'Mã độc tống tiền' },
      { word: 'Authentication', meaning: 'Sự xác thực' },
      { word: 'Vulnerabilities', meaning: 'Lỗ hổng bảo mật' },
      { word: 'Protocols', meaning: 'Giao thức / Quy tắc' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main goal of most cyberattacks?',
        options: [
          'To help users fix their computers',
          'To access, change, or destroy sensitive information',
          'To make the internet faster',
          'To sell new software products'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information."'
      },
      {
        id: 'q2',
        text: 'How does "phishing" typically work?',
        options: [
          'By locking the user\'s computer screen',
          'By sending fraudulent emails to steal user data',
          'By physically stealing a laptop',
          'By guessing a user\'s birthday'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản định nghĩa: "...phishing, which involves sending fraudulent emails to steal user data."'
      },
      {
        id: 'q3',
        text: 'What does Multi-factor authentication (MFA) provide?',
        options: [
          'A faster way to log in',
          'An extra layer of security beyond just a password',
          'A way to recover forgotten passwords',
          'A free subscription to security apps'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "MFA adds an extra layer of security by requiring more than just a password."'
      },
      {
        id: 'q4',
        text: 'According to the text, what is often the "weakest link" in cybersecurity?',
        options: [
          'Slow internet connections',
          'Old computer hardware',
          'Human error',
          'Strong encryption'
        ],
        correctAnswerIndex: 2,
        explanation: 'Văn bản nhấn mạnh: "...human error remains one of the weakest links in cybersecurity."'
      },
      {
        id: 'q5',
        text: 'Why are regular software updates important?',
        options: [
          'To make the computer look newer',
          'To patch vulnerabilities that hackers might exploit',
          'To delete old files automatically',
          'To increase the price of the software'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...necessary to patch vulnerabilities that hackers might exploit..." '
      }
    ]
  },
  {
    id: 'b1-06',
    title: 'Navigating the World of Big Data',
    level: 'B1',
    content: [
      "Big Data refers to extremely large data sets that may be analyzed computationally to reveal patterns and trends.",
      "The concept is often described using five 'Vs': volume, velocity, variety, veracity, and value.",
      "Volume refers to the incredible amount of data generated every second from social media and sensors.",
      "Velocity represents the speed at which new data is created and moves through the network.",
      "Variety means that data comes in many formats, such as structured text, images, and videos.",
      "Veracity is the quality or accuracy of the data, which is crucial for making correct decisions.",
      "Value is the most important 'V', as it represents the useful insights gained from data analysis.",
      "Analyzing Big Data allows companies to understand customer behavior and predict future market trends.",
      "In the field of science, Big Data helps researchers track climate change and develop new medicines.",
      "However, managing such huge amounts of information requires specialized software and powerful hardware.",
      "Data privacy is a major concern, as personal information must be protected from misuse or theft.",
      "As we move further into the digital age, Big Data will play an even larger role in shaping our society."
    ],
    vocabulary: [
      { word: 'Computationally', meaning: 'Bằng phương pháp tính toán máy tính' },
      { word: 'Volume', meaning: 'Khối lượng / Thể tích' },
      { word: 'Velocity', meaning: 'Tốc độ' },
      { word: 'Veracity', meaning: 'Tính xác thực / Độ tin cậy' },
      { word: 'Insights', meaning: 'Thông tin chi tiết / Sự thấu hiểu' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does Big Data primarily help to reveal after analysis?',
        options: [
          'The price of new computers',
          'Patterns, trends, and associations',
          'The name of a hacker',
          'The speed of the internet'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...analyzed computationally to reveal patterns and trends."'
      },
      {
        id: 'q2',
        text: 'Which "V" refers to the speed at which data is generated?',
        options: [
          'Volume',
          'Variety',
          'Velocity',
          'Value'
        ],
        correctAnswerIndex: 2,
        explanation: 'Văn bản định nghĩa: "Velocity represents the speed at which new data is created..." '
      },
      {
        id: 'q3',
        text: 'Why is "Veracity" important in Big Data?',
        options: [
          'Because it makes the data look beautiful',
          'Because the quality and accuracy are crucial for making correct decisions',
          'Because it increases the volume of data',
          'Because it helps to store data faster'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Veracity is the quality or accuracy... crucial for making correct decisions."'
      },
      {
        id: 'q4',
        text: 'What is a major concern mentioned regarding Big Data?',
        options: [
          'The lack of data in the world',
          'Data privacy and the protection of personal information',
          'Computers being too small',
          'Social media being too fast'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn cảnh báo: "Data privacy is a major concern, as personal information must be protected..." '
      },
      {
        id: 'q5',
        text: 'How does Big Data benefit the field of science?',
        options: [
          'By making computers cheaper',
          'By helping researchers track climate change and develop medicines',
          'By replacing all scientists with robots',
          'By creating more social media accounts'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản đề cập: "...helps researchers track climate change and develop new medicines."'
      }
    ]
  },
  {
    id: 'b1-07',
    title: 'Exploring VR and AR Technologies',
    level: 'B1',
    content: [
      "Virtual Reality (VR) and Augmented Reality (AR) are two technologies that are changing how we perceive the world.",
      "While they sound similar, they offer very different experiences for the user.",
      "Virtual Reality creates a completely immersive digital environment that replaces the real world.",
      "Users typically wear a headset that covers their eyes to enter this 360-degree simulation.",
      "In contrast, Augmented Reality overlays digital information onto the physical environment around us.",
      "A famous example of AR is the game Pokémon GO, where digital creatures appear on your phone screen in real locations.",
      "VR is widely used in the gaming industry to provide deep immersion, but it also has practical uses in training.",
      "For instance, pilots use VR flight simulators to practice flying without any real-world risks.",
      "AR is increasingly popular in retail, allowing customers to see how furniture looks in their home before buying.",
      "In the medical field, AR can help surgeons by displaying vital information directly onto the patient during an operation.",
      "However, both technologies still face hardware limitations, such as bulky headsets and short battery life.",
      "As these tools become lighter and more affordable, they will likely become a part of our daily lives."
    ],
    vocabulary: [
      { word: 'Immersive', meaning: 'Đắm chìm / Mang tính trải nghiệm sâu' },
      { word: 'Simulation', meaning: 'Sự mô phỏng' },
      { word: 'Overlay', meaning: 'Phủ lên / Chèn lên' },
      { word: 'Retail', meaning: 'Ngành bán lẻ' },
      { word: 'Bulky', meaning: 'Cồng kềnh' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main difference between VR and AR?',
        options: [
          'VR is cheaper than AR',
          'VR replaces the real world, while AR adds digital info to the real world',
          'AR requires a heavy headset, but VR only needs a phone',
          'There is no difference between them'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "VR... replaces the real world... AR overlays digital information onto the physical environment."'
      },
      {
        id: 'q2',
        text: 'How do users typically enter a Virtual Reality environment?',
        options: [
          'By using a special keyboard',
          'By wearing a headset that covers their eyes',
          'By standing in a dark room',
          'By shouting at the computer'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Users typically wear a headset that covers their eyes to enter this 360-degree simulation."'
      },
      {
        id: 'q3',
        text: 'What is a practical use of VR mentioned in the text?',
        options: [
          'Shopping for groceries',
          'Flight simulators for pilot training',
          'Walking the dog',
          'Cooking a meal'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản lấy ví dụ: "pilots use VR flight simulators to practice flying without any real-world risks."'
      },
      {
        id: 'q4',
        text: 'How is Augmented Reality used in the retail industry?',
        options: [
          'To make the stores look bigger',
          'To help customers see furniture in their home before buying',
          'To replace all human staff with robots',
          'To play loud music for customers'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn đề cập: "AR is... allowing customers to see how furniture looks in their home before buying."'
      },
      {
        id: 'q5',
        text: 'What are some current hardware limitations of these technologies?',
        options: [
          'They are too small to see',
          'Bulky headsets and short battery life',
          'They don\'t require any electricity',
          'They only work in one color'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...face hardware limitations, such as bulky headsets and short battery life."'
      }
    ]
  },
  {
    id: 'b1-08',
    title: 'The Path to Sustainable Development',
    level: 'B1',
    content: [
      "Sustainable development is a strategy to meet human needs while preserving the environment for future generations.",
      "It is built on three main pillars: economic growth, social inclusion, and environmental protection.",
      "One of the most effective ways to achieve sustainability is by transitioning to renewable energy sources like solar and wind.",
      "Unlike fossil fuels, these sources do not produce harmful greenhouse gases that contribute to global warming.",
      "The concept of a 'circular economy' encourages people to reuse and recycle materials rather than throwing them away.",
      "Reducing our carbon footprint is essential to protect the delicate ecosystems of our planet.",
      "Many international organizations have set ambitious goals to reach 'net-zero' emissions by the year 2050.",
      "Businesses are also adopting 'green technology' to minimize waste and improve energy efficiency in their factories.",
      "Individual actions, such as saving water and reducing plastic use, play a significant role in this global effort.",
      "Education is a powerful tool to raise awareness about the importance of biodiversity and climate action.",
      "However, achieving total sustainability requires strong cooperation between governments, companies, and citizens.",
      "Investing in a sustainable future today will ensure a healthier and more prosperous world for everyone tomorrow."
    ],
    vocabulary: [
      { word: 'Preserving', meaning: 'Bảo tồn / Giữ gìn' },
      { word: 'Pillars', meaning: 'Trụ cột' },
      { word: 'Renewable', meaning: 'Có thể tái tạo' },
      { word: 'Carbon footprint', meaning: 'Dấu chân carbon (lượng khí thải)' },
      { word: 'Net-zero', meaning: 'Phát thải ròng bằng không' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the core definition of sustainable development?',
        options: [
          'Using all natural resources as fast as possible',
          'Meeting human needs while preserving the environment for the future',
          'Only focusing on making money for big companies',
          'Stopping all industrial production immediately'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu đầu tiên nêu: "meeting human needs while preserving the environment for future generations."'
      },
      {
        id: 'q2',
        text: 'What are the three main pillars of sustainability?',
        options: [
          'Time, money, and power',
          'Economic growth, social inclusion, and environmental protection',
          'Solar, wind, and water',
          'Education, health, and transport'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản liệt kê: "economic growth, social inclusion, and environmental protection."'
      },
      {
        id: 'q3',
        text: 'How does a "circular economy" differ from a traditional one?',
        options: [
          'It focuses on buying more new things',
          'It encourages reusing and recycling materials rather than throwing them away',
          'It only uses paper money',
          'It does not allow any international trade'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...encourages people to reuse and recycle materials rather than throwing them away."'
      },
      {
        id: 'q4',
        text: 'What is the target year for many organizations to reach "net-zero" emissions?',
        options: [
          '2025',
          '2050',
          '2100',
          '3000'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn đề cập: "...set ambitious goals to reach \'net-zero\' emissions by the year 2050."'
      },
      {
        id: 'q5',
        text: 'What is required to achieve total sustainability according to the text?',
        options: [
          'Strong cooperation between governments, companies, and citizens',
          'Only the work of scientists',
          'A very large amount of money',
          'Waiting for technology to fix itself'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản nhấn mạnh: "...requires strong cooperation between governments, companies, and citizens."'
      }
    ]
  },
  {
    id: 'b1-09',
    title: 'The Boom of E-commerce',
    level: 'B1',
    content: [
      "E-commerce, or electronic commerce, refers to the buying and selling of goods or services using the internet.",
      "Over the last decade, online shopping has grown dramatically, changing how businesses interact with customers.",
      "The most common model is Business-to-Consumer (B2C), where companies sell products directly to individuals.",
      "Another popular model is Consumer-to-Consumer (C2C), which allows individuals to sell items to each other via platforms like eBay.",
      "One major advantage of e-commerce is convenience, as customers can shop from anywhere at any time.",
      "Personalization is also key, as websites use algorithms to recommend products based on a user's browsing history.",
      "Secure digital payment methods, such as credit cards and e-wallets, have made online transactions much safer.",
      "However, e-commerce faces significant challenges in logistics, especially regarding fast and reliable delivery.",
      "The environmental impact of excessive packaging and shipping emissions is also a growing concern for many people.",
      "To stay competitive, many traditional physical stores are now adopting an 'omnichannel' strategy to sell both online and offline.",
      "Artificial intelligence is being used in e-commerce to power chatbots that provide instant customer service.",
      "As mobile technology continues to improve, 'm-commerce' or mobile shopping is expected to dominate the future of retail."
    ],
    vocabulary: [
      { word: 'Transactions', meaning: 'Giao dịch' },
      { word: 'Personalization', meaning: 'Sự cá nhân hóa' },
      { word: 'Logistics', meaning: 'Hậu cần / Vận chuyển' },
      { word: 'Omnichannel', meaning: 'Đa kênh' },
      { word: 'Dominate', meaning: 'Thống trị / Chiếm ưu thế' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does the term "B2C" stand for in e-commerce?',
        options: [
          'Buying to Consuming',
          'Business-to-Consumer',
          'Better-to-Cheaper',
          'Basic-to-Complex'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "The most common model is Business-to-Consumer (B2C)..."'
      },
      {
        id: 'q2',
        text: 'How do websites use algorithms in e-commerce?',
        options: [
          'To make the website look more colorful',
          'To recommend products based on a user\'s browsing history',
          'To increase the price of all items',
          'To block users from buying too much'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...websites use algorithms to recommend products based on a user\'s browsing history."'
      },
      {
        id: 'q3',
        text: 'What is a major challenge for e-commerce companies today?',
        options: [
          'Too many people using the internet',
          'Logistics and fast delivery issues',
          'Not enough products to sell',
          'The lack of mobile phones'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản đề cập: "...e-commerce faces significant challenges in logistics..." '
      },
      {
        id: 'q4',
        text: 'What is an "omnichannel" strategy?',
        options: [
          'Selling products only through television',
          'Selling both online and offline to stay competitive',
          'Only selling to people in the same city',
          'Giving away products for free'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...adopting an \'omnichannel\' strategy to sell both online and offline."'
      },
      {
        id: 'q5',
        text: 'What is expected to dominate the future of retail?',
        options: [
          'M-commerce (mobile shopping)',
          'Newspaper advertisements',
          'Radio shopping',
          'Door-to-door selling'
        ],
        correctAnswerIndex: 0,
        explanation: 'Câu cuối nêu: "...\'m-commerce\' or mobile shopping is expected to dominate the future..." '
      }
    ]
  },
  {
    id: 'b1-10',
    title: 'The Rise of the Sharing Economy',
    level: 'B1',
    content: [
      "The sharing economy is a socio-economic system built around the sharing of resources.",
      "It allows individuals to rent out underutilized assets, such as a spare room or a car, to others.",
      "Digital platforms act as intermediaries, connecting people who have a resource with those who need it.",
      "Famous examples include Airbnb for accommodation and Grab or Uber for transportation services.",
      "One major benefit is cost-effectiveness, as users can access services at a lower price than traditional businesses.",
      "For the providers, it offers a flexible way to earn extra income by using what they already own.",
      "Trust is maintained through reputation systems, where both parties can rate each other after a transaction.",
      "This model has contributed to the growth of the 'gig economy', where short-term tasks are common.",
      "However, the sharing economy faces legal challenges regarding taxes, insurance, and labor rights.",
      "Traditional industries often argue that these platforms have an unfair advantage due to fewer regulations.",
      "Environmentalists praise the model because it encourages the efficient use of existing goods and reduces waste.",
      "As trust in digital platforms grows, the sharing economy is likely to expand into new sectors like education and tools."
    ],
    vocabulary: [
      { word: 'Underutilized', meaning: 'Chưa được sử dụng hết công suất' },
      { word: 'Intermediaries', meaning: 'Người trung gian' },
      { word: 'Accommodation', meaning: 'Chỗ ở' },
      { word: 'Gig economy', meaning: 'Nền kinh tế việc làm tự do / thời vụ' },
      { word: 'Regulations', meaning: 'Quy định / Điều tiết' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the core concept of the sharing economy?',
        options: [
          'Buying as many new things as possible',
          'Sharing resources and renting out underutilized assets',
          'Giving away all personal belongings for free',
          'Building large factories in every city'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...built around the sharing of resources... rent out underutilized assets."'
      },
      {
        id: 'q2',
        text: 'How do digital platforms function in this economy?',
        options: [
          'They manufacture the products being sold',
          'They act as intermediaries connecting providers and users',
          'They provide free insurance to everyone',
          'They delete all transaction history'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Digital platforms act as intermediaries, connecting people..." '
      },
      {
        id: 'q3',
        text: 'How is trust usually maintained in these digital platforms?',
        options: [
          'Through expensive legal contracts',
          'Through reputation systems where parties rate each other',
          'By meeting in person before every transaction',
          'By paying a large deposit to the government'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản đề cập: "Trust is maintained through reputation systems, where both parties can rate each other."'
      },
      {
        id: 'q4',
        text: 'What is a common criticism from traditional industries?',
        options: [
          'The platforms are too slow',
          'The platforms have an unfair advantage due to fewer regulations',
          'Nobody wants to use mobile apps',
          'The services are too expensive for customers'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Traditional industries often argue... an unfair advantage due to fewer regulations."'
      },
      {
        id: 'q5',
        text: 'Why do environmentalists support the sharing economy?',
        options: [
          'Because it uses more plastic packaging',
          'Because it encourages efficient use of goods and reduces waste',
          'Because it makes cars go faster',
          'Because it helps to cut down more trees'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu gần cuối nêu: "...it encourages the efficient use of existing goods and reduces waste."'
      }
    ]
  },
  {
    id: 'b1-11',
    title: 'The Power of Critical Thinking',
    level: 'B1',
    content: [
      "Critical thinking is the intellectually disciplined process of actively and skillfully analyzing information.",
      "It involves evaluating data from observations, experience, or communication as a guide to belief and action.",
      "A core component of this skill is the ability to recognize personal biases that may cloud our judgment.",
      "Critical thinkers do not accept information at face value; they ask 'why' and 'how' instead of just 'what'.",
      "They look for strong evidence and logical reasoning before reaching a final conclusion on any matter.",
      "In the digital age, this skill is vital for distinguishing between real news and misleading information online.",
      "By identifying logical fallacies, you can protect yourself from being manipulated by biased advertisements.",
      "Critical thinking also encourages open-mindedness, allowing you to consider multiple perspectives on a single issue.",
      "This approach leads to more creative problem-solving because it challenges traditional or outdated assumptions.",
      "In the workplace, employees who think critically are highly valued for their ability to make objective decisions.",
      "Developing this skill requires constant practice and a willingness to question your own long-held beliefs.",
      "Ultimately, critical thinking empowers individuals to navigate a complex world with clarity and confidence."
    ],
    vocabulary: [
      { word: 'Disciplined', meaning: 'Có kỷ luật / Có phương pháp' },
      { word: 'Biases', meaning: 'Định kiến / Thiên kiến' },
      { word: 'Face value', meaning: 'Giá trị bề nổi / Chấp nhận ngay mà không nghi ngờ' },
      { word: 'Logical fallacies', meaning: 'Ngụy biện (lỗi logic)' },
      { word: 'Assumptions', meaning: 'Giả định' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is critical thinking according to the passage?',
        options: [
          'The process of memorizing as much data as possible',
          'A disciplined process of actively analyzing and evaluating information',
          'Accepting everything you read on the internet',
          'Always disagreeing with other people\'s opinions'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu đầu tiên nêu: "Critical thinking is the intellectually disciplined process of... analyzing information."'
      },
      {
        id: 'q2',
        text: 'What does it mean to not accept information at "face value"?',
        options: [
          'To pay for information with cash',
          'To question and analyze information instead of accepting it immediately',
          'To ignore the information completely',
          'To only look at the pictures in a report'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Critical thinkers do not accept information at face value; they ask \'why\' and \'how\'..." '
      },
      {
        id: 'q3',
        text: 'Why is critical thinking vital in the digital age?',
        options: [
          'Because it helps computers run faster',
          'To distinguish between real news and misleading information online',
          'To help people buy more things on social media',
          'To make the internet look more colorful'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...vital for distinguishing between real news and misleading information online."'
      },
      {
        id: 'q4',
        text: 'How can identifying logical fallacies benefit you?',
        options: [
          'By helping you win every argument by shouting',
          'By protecting you from being manipulated by biased ads',
          'By making you forget the information',
          'By helping you write faster'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "By identifying logical fallacies, you can protect yourself from being manipulated..." '
      },
      {
        id: 'q5',
        text: 'What does the development of critical thinking require?',
        options: [
          'Constant practice and willingness to question your own beliefs',
          'Only reading books that you already agree with',
          'Listening only to one source of information',
          'Doing nothing and waiting for a solution'
        ],
        correctAnswerIndex: 0,
        explanation: 'Câu gần cuối nêu: "...requires constant practice and a willingness to question your own... beliefs."'
      }
    ]
  },
  {
    id: 'b1-12',
    title: 'The Art of Time Mastery',
    level: 'B1',
    content: [
      "Time mastery is more than just managing a schedule; it is about managing your focus and energy.",
      "Effective time mastery requires a clear understanding of the difference between 'urgent' and 'important' tasks.",
      "Urgent tasks demand immediate attention, while important tasks contribute to your long-term goals and success.",
      "One common obstacle to productivity is procrastination, which is the act of delaying tasks despite knowing the negative consequences.",
      "To overcome this, experts suggest breaking large projects into smaller, manageable steps to reduce anxiety.",
      "Using tools like digital calendars or task management apps can help you visualize your daily progress.",
      "Setting strict boundaries, such as turning off notifications, is essential for maintaining deep concentration during work.",
      "The Pomodoro Technique, which involves working for 25 minutes followed by a short break, is a popular method for staying productive.",
      "Resting is also a crucial part of time mastery, as a tired mind cannot produce high-quality work or creative ideas.",
      "You should review your achievements at the end of each day to adjust your plan for the following morning.",
      "Learning to say 'no' to unimportant requests allows you to protect your most valuable resource: time.",
      "Consistently practicing these habits will lead to a more balanced life and a significant reduction in stress."
    ],
    vocabulary: [
      { word: 'Procrastination', meaning: 'Sự trì hoãn' },
      { word: 'Prioritization', meaning: 'Sự ưu tiên' },
      { word: 'Obstacle', meaning: 'Trở ngại' },
      { word: 'Manageable', meaning: 'Có thể quản lý / xử lý được' },
      { word: 'Consistently', meaning: 'Một cách nhất quán' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main difference between "urgent" and "important" tasks?',
        options: [
          'There is no difference between them',
          'Urgent tasks need immediate attention, but important ones help long-term goals',
          'Important tasks are always easier to do than urgent ones',
          'Urgent tasks are only for students, while important tasks are for workers'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Urgent tasks demand immediate attention, while important tasks contribute to your long-term goals."'
      },
      {
        id: 'q2',
        text: 'What is "procrastination" as defined in the passage?',
        options: [
          'Working too fast without thinking',
          'Delaying tasks despite knowing the negative consequences',
          'A new tool for managing digital calendars',
          'A method for taking long breaks'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản định nghĩa: "...procrastination, which is the act of delaying tasks despite knowing the negative consequences."'
      },
      {
        id: 'q3',
        text: 'How can you reduce anxiety when facing large projects?',
        options: [
          'By ignoring the project until the deadline',
          'By breaking them into smaller, manageable steps',
          'By asking someone else to do all the work',
          'By drinking more coffee'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản gợi ý: "...breaking large projects into smaller, manageable steps to reduce anxiety."'
      },
      {
        id: 'q4',
        text: 'What is the "Pomodoro Technique" mentioned in the text?',
        options: [
          'A way to cook Italian food faster',
          'A method of working for 25 minutes followed by a short break',
          'A software for editing medical images',
          'A type of physical exercise'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "The Pomodoro Technique... involves working for 25 minutes followed by a short break."'
      },
      {
        id: 'q5',
        text: 'Why is resting considered a part of time mastery?',
        options: [
          'Because it wastes time',
          'Because a tired mind cannot produce high-quality work',
          'Because everyone is lazy',
          'Because it makes the calendar look better'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nhấn mạnh: "...a tired mind cannot produce high-quality work or creative ideas."'
      }
    ]
  },
  {
    id: 'b1-13',
    title: 'The Power of Adaptability',
    level: 'B1',
    content: [
      "Adaptability is the ability to change your actions or ideas to fit new situations effectively.",
      "In a rapidly evolving world, being adaptable is often more important than having a fixed set of skills.",
      "A person with high adaptability views change as an opportunity for growth rather than a threat to their comfort.",
      "This skill involves having a 'growth mindset', the belief that abilities can be developed through dedication and hard work.",
      "Instead of complaining about a new problem, an adaptable individual focuses on finding creative solutions.",
      "Resilience is a closely related concept, which refers to the capacity to recover quickly from difficulties.",
      "In the workplace, technology can change overnight, requiring employees to learn new software or tools immediately.",
      "Companies value adaptable workers because they can handle uncertainty and stay productive under pressure.",
      "To improve your adaptability, you should practice stepping out of your comfort zone regularly.",
      "Actively seeking feedback from others is another great way to identify areas where you need to change.",
      "Even though change can be uncomfortable at first, it is necessary for personal and professional progress.",
      "Developing a flexible mind allows you to navigate the unknown with curiosity instead of fear."
    ],
    vocabulary: [
      { word: 'Adaptability', meaning: 'Khả năng thích ứng' },
      { word: 'Evolving', meaning: 'Đang tiến hóa / Phát triển' },
      { word: 'Growth mindset', meaning: 'Tư duy phát triển' },
      { word: 'Resilience', meaning: 'Sự kiên cường / Khả năng phục hồi' },
      { word: 'Uncertainty', meaning: 'Sự không chắc chắn' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the definition of adaptability in the text?',
        options: [
          'The ability to ignore all changes',
          'The ability to change actions or ideas to fit new situations',
          'The skill of moving to a new city every month',
          'Having a fixed set of skills forever'
        ],
        correctAnswerIndex: 1,
        explanation: 'Câu đầu tiên nêu: "Adaptability is the ability to change your actions or ideas to fit new situations effectively."'
      },
      {
        id: 'q2',
        text: 'How does an adaptable person view change?',
        options: [
          'As a threat to their comfort',
          'As an opportunity for growth',
          'As a waste of time',
          'As something that never happens'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...views change as an opportunity for growth rather than a threat to their comfort."'
      },
      {
        id: 'q3',
        text: 'What is a "growth mindset" as described in the passage?',
        options: [
          'The belief that you are born with all your intelligence',
          'The belief that abilities can be developed through hard work',
          'Thinking only about making money',
          'The idea that you should never listen to others'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản định nghĩa: "...growth mindset, the belief that abilities can be developed through dedication and hard work."'
      },
      {
        id: 'q4',
        text: 'Why do companies value adaptable workers?',
        options: [
          'Because they never ask for a salary',
          'Because they can handle uncertainty and stay productive',
          'Because they work only on the weekends',
          'Because they are good at playing games'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Companies value adaptable workers because they can handle uncertainty and stay productive..." '
      },
      {
        id: 'q5',
        text: 'What is a recommended way to improve your adaptability?',
        options: [
          'Staying inside your comfort zone forever',
          'Practice stepping out of your comfort zone regularly',
          'Always doing the same things every day',
          'Never asking for feedback'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản gợi ý: "...you should practice stepping out of your comfort zone regularly."'
      }
    ]
  },
  {
    id: 'b1-14',
    title: 'Working in Multicultural Teams',
    level: 'B1',
    content: [
      "In our globalized world, multicultural teamwork has become a standard in many international organizations.",
      "A multicultural team consists of people from different countries, backgrounds, and cultural perspectives.",
      "The greatest advantage of such diversity is the wide range of creative ideas and problem-solving methods.",
      "However, working with people from different cultures can also lead to misunderstandings in communication.",
      "To succeed, team members need to develop 'cultural intelligence,' which is the ability to interpret unfamiliar signals.",
      "Active listening and empathy are essential for understanding the underlying values of your colleagues.",
      "It is important to avoid making assumptions or relying on stereotypes about a particular nationality.",
      "Clear communication protocols, such as using simple language and confirming tasks, can reduce confusion.",
      "Respecting different working styles and holidays shows that you value the diversity of the group.",
      "In many cultures, direct feedback is appreciated, while in others, a more subtle approach is required.",
      "Frequent virtual meetings and social interactions help build trust and strengthen the bonds between members.",
      "Embracing a multicultural mindset not only improves project outcomes but also enriches your personal life."
    ],
    vocabulary: [
      { word: 'Diversity', meaning: 'Sự đa dạng' },
      { word: 'Cultural intelligence', meaning: 'Trí tuệ văn hóa' },
      { word: 'Empathy', meaning: 'Sự thấu cảm' },
      { word: 'Stereotypes', meaning: 'Định kiến / Khuôn mẫu' },
      { word: 'Protocols', meaning: 'Giao thức / Quy tắc' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is a major advantage of multicultural teams?',
        options: [
          'Everyone speaks the same language',
          'A wide range of creative ideas and problem-solving methods',
          'They always work faster than other teams',
          'There are no disagreements'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "The greatest advantage... is the wide range of creative ideas and problem-solving methods."'
      },
      {
        id: 'q2',
        text: 'What does "cultural intelligence" mean in this context?',
        options: [
          'Knowing how to speak every language perfectly',
          'The ability to interpret unfamiliar signals from different cultures',
          'The skill of using a computer in different countries',
          'Buying expensive gifts for colleagues'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản định nghĩa: "...cultural intelligence, which is the ability to interpret unfamiliar signals."'
      },
      {
        id: 'q3',
        text: 'How can teams reduce confusion in communication?',
        options: [
          'By using complex and formal language',
          'By establishing clear communication protocols',
          'By not talking to each other',
          'By only using email'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản gợi ý: "Clear communication protocols... can reduce confusion."'
      },
      {
        id: 'q4',
        text: 'Why should you avoid using stereotypes?',
        options: [
          'Because they are always correct',
          'Because they lead to false assumptions about people',
          'Because they make the work easier',
          'Because they help to build trust'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nhắc nhở: "It is important to avoid making assumptions or relying on stereotypes."'
      },
      {
        id: 'q5',
        text: 'What is a benefit of embracing a multicultural mindset?',
        options: [
          'Better project outcomes and a richer personal life',
          'Having fewer meetings',
          'Working for more hours',
          'Always getting what you want'
        ],
        correctAnswerIndex: 0,
        explanation: 'Câu cuối nêu: "...not only improves project outcomes but also enriches your personal life."'
      }
    ]
  },
  {
    id: 'b1-15',
    title: 'Mastering the Art of Presentation',
    level: 'B1',
    content: [
      "A successful presentation is not just about sharing information; it is about connecting with your audience.",
      "The first step is to define a clear objective so that your message remains focused and organized.",
      "A strong opening is essential to grab the listeners' attention and make them curious about your topic.",
      "Organizing your content into a logical structure, such as a beginning, middle, and end, helps the audience follow your points.",
      "Visual aids, like slides or charts, should be simple and used to support your words, not replace them.",
      "Body language, including eye contact and gestures, plays a vital role in conveying confidence and sincerity.",
      "Varying your tone of voice and pace can prevent the presentation from becoming monotonous and boring.",
      "Engaging the audience with questions or brief stories makes the information more memorable and relatable.",
      "Practicing your speech multiple times is the best way to reduce nervousness and improve your delivery.",
      "It is important to prepare for a Q&A session by anticipating potential questions from the audience.",
      "Time management is crucial; you must ensure that you cover all key points without rushing at the end.",
      "Developing strong presentation skills will significantly boost your professional reputation and influence."
    ],
    vocabulary: [
      { word: 'Objective', meaning: 'Mục tiêu' },
      { word: 'Visual aids', meaning: 'Công cụ hỗ trợ trực quan (slide, biểu đồ...)' },
      { word: 'Monotonous', meaning: 'Đơn điệu / Đều đều' },
      { word: 'Anticipating', meaning: 'Dự đoán trước' },
      { word: 'Delivery', meaning: 'Cách trình bày / Diễn thuyết' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the primary goal of a successful presentation?',
        options: [
          'To read every word on the slides',
          'To connect with the audience and share a focused message',
          'To talk as fast as possible to save time',
          'To show off your expensive computer'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "A successful presentation is not just about sharing information; it is about connecting with your audience."'
      },
      {
        id: 'q2',
        text: 'How should visual aids be used in a presentation?',
        options: [
          'They should contain all the text of the speech',
          'They should be simple and support the speaker’s words',
          'They should be very colorful and move all the time',
          'They should replace the speaker completely'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khuyên: "Visual aids... should be simple and used to support your words, not replace them."'
      },
      {
        id: 'q3',
        text: 'Why is body language important for a speaker?',
        options: [
          'It helps to hide nervousness',
          'It plays a vital role in conveying confidence and sincerity',
          'It makes the speaker look taller',
          'It is not important at all'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Body language... plays a vital role in conveying confidence and sincerity."'
      },
      {
        id: 'q4',
        text: 'What can prevent a presentation from becoming "monotonous"?',
        options: [
          'Varying the tone of voice and the pace of speaking',
          'Turning off the lights in the room',
          'Reading from a piece of paper',
          'Using a very small font on the slides'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản nêu: "Varying your tone of voice and pace can prevent the presentation from becoming monotonous..." '
      },
      {
        id: 'q5',
        text: 'How should a speaker prepare for the Q&A session?',
        options: [
          'By refusing to answer any questions',
          'By anticipating potential questions from the audience',
          'By finishing the presentation early and leaving',
          'By asking the audience to send emails instead'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nhắc nhở: "prepare for a Q&A session by anticipating potential questions..." '
      }
    ]
  },
  {
    id: 'b1-16',
    title: 'Nurturing Creative Thinking',
    level: 'B1',
    content: [
      "Creative thinking is the ability to look at things from a fresh perspective and find unconventional solutions.",
      "Many people mistakenly believe that creativity is a natural talent rather than a skill that can be developed.",
      "To think creatively, you must be willing to challenge existing assumptions and ask 'what if' questions.",
      "Brainstorming is a popular technique where individuals generate a large number of ideas without immediate judgment.",
      "Another effective method is mind mapping, which helps visualize connections between different concepts and information.",
      "Curiosity is the fuel for creativity; the more you explore various fields, the more ideas you can combine.",
      "Taking breaks and allowing your mind to wander can often lead to 'Eureka' moments and sudden insights.",
      "A creative environment should encourage risk-taking and treat failure as a necessary step toward innovation.",
      "Diversity within a team also boosts creativity, as different backgrounds provide a wider range of viewpoints.",
      "Creative thinking is essential in technology for designing user-friendly interfaces and efficient algorithms.",
      "Practicing creative exercises daily, such as writing or drawing, can keep your mind flexible and sharp.",
      "Ultimately, creativity is about solving problems in ways that add unique value to the world."
    ],
    vocabulary: [
      { word: 'Unconventional', meaning: 'Khác thường / Không theo quy ước' },
      { word: 'Assumptions', meaning: 'Giả định' },
      { word: 'Brainstorming', meaning: 'Động não (phương pháp tạo ý tưởng)' },
      { word: 'Insights', meaning: 'Sự thấu hiểu / Cái nhìn sâu sắc' },
      { word: 'Interfaces', meaning: 'Giao diện' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is a common misconception about creativity?',
        options: [
          'That it is a skill that can be developed',
          'That it is only a natural talent you are born with',
          'That it is only useful for artists',
          'That it requires a lot of money'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Many people mistakenly believe that creativity is a natural talent rather than a skill that can be developed."'
      },
      {
        id: 'q2',
        text: 'How does brainstorming help in generating ideas?',
        options: [
          'By judging every idea immediately',
          'By generating a large number of ideas without immediate judgment',
          'By making everyone work in silence',
          'By choosing only the most expensive ideas'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Brainstorming is a technique where individuals generate ideas without immediate judgment."'
      },
      {
        id: 'q3',
        text: 'Why is curiosity considered important for creativity?',
        options: [
          'Because it makes you ask too many questions',
          'Because the more you explore, the more ideas you can combine',
          'Because it helps you finish work faster',
          'Because it is a rule in most companies'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Curiosity is the fuel for creativity; the more you explore... the more ideas you can combine."'
      },
      {
        id: 'q4',
        text: 'What can happen when you allow your mind to wander during a break?',
        options: [
          'You will forget everything you learned',
          'It can lead to sudden insights or "Eureka" moments',
          'You will become lazier over time',
          'It makes the problem harder to solve'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "allowing your mind to wander can often lead to \'Eureka\' moments and sudden insights."'
      },
      {
        id: 'q5',
        text: 'What is the role of creative thinking in technology?',
        options: [
          'Designing user-friendly interfaces and efficient algorithms',
          'Making computers more expensive to buy',
          'Replacing all human workers with machines',
          'Deleting old data automatically'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản khẳng định: "Creative thinking is essential in technology for designing user-friendly interfaces and efficient algorithms."'
      }
    ]
  },
  {
    id: 'b1-17',
    title: 'Strategies for Successful Negotiation',
    level: 'B1',
    content: [
      "Negotiation is a dialogue between two or more parties intended to reach a beneficial outcome.",
      "The foundation of any successful negotiation is thorough preparation and clear communication.",
      "Before starting, you must define your goals and understand your 'bottom line' to avoid bad deals.",
      "A skilled negotiator spends more time listening to the other party's needs than speaking.",
      "Building rapport and finding common ground can help create a positive atmosphere for discussion.",
      "Empathy allows you to understand the motivations behind the other person's requests or objections.",
      "Instead of a 'win-lose' mindset, professional negotiators strive for a 'win-win' solution where everyone benefits.",
      "Compromise is often necessary, meaning both sides may have to give up something to reach an agreement.",
      "Emotional intelligence is vital; staying calm and objective prevents personal feelings from ruining the deal.",
      "It is always better to walk away from a negotiation if the terms do not align with your core values.",
      "After reaching an agreement, it is crucial to document the final terms clearly to avoid future disputes.",
      "Mastering negotiation skills increases your ability to influence others and achieve your long-term objectives."
    ],
    vocabulary: [
      { word: 'Beneficial', meaning: 'Có lợi' },
      { word: 'Bottom line', meaning: 'Mức tối thiểu có thể chấp nhận' },
      { word: 'Rapport', meaning: 'Mối quan hệ tốt / Sự hòa hợp' },
      { word: 'Objections', meaning: 'Sự phản đối' },
      { word: 'Disputes', meaning: 'Tranh chấp' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the primary goal of negotiation according to the text?',
        options: [
          'To win an argument at any cost',
          'To reach a beneficial outcome for the parties involved',
          'To make the other person feel bad',
          'To avoid talking to other people'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Negotiation is a dialogue... intended to reach a beneficial outcome."'
      },
      {
        id: 'q2',
        text: 'Why should you define your "bottom line" before a negotiation?',
        options: [
          'To know how much money to spend',
          'To avoid accepting a deal that is bad for you',
          'To finish the meeting as fast as possible',
          'To impress the other party'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...define your goals and understand your \'bottom line\' to avoid bad deals."'
      },
      {
        id: 'q3',
        text: 'What is a "win-win" solution?',
        options: [
          'A solution where one person gets everything',
          'A solution where everyone involved benefits from the agreement',
          'A situation where no one agrees on anything',
          'A deal that is only good for the company'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản mô tả: "...strive for a \'win-win\' solution where everyone benefits."'
      },
      {
        id: 'q4',
        text: 'Why is emotional intelligence important in negotiation?',
        options: [
          'It helps you stay calm and objective during the discussion',
          'It makes you more emotional than the other person',
          'It helps you remember all the numbers',
          'It allows you to talk louder'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đoạn văn viết: "Emotional intelligence is vital; staying calm and objective prevents personal feelings from ruining the deal."'
      },
      {
        id: 'q5',
        text: 'What should you do after reaching a final agreement?',
        options: [
          'Forget about it immediately',
          'Document the terms clearly to avoid future disputes',
          'Ask for more things the next day',
          'Keep the information secret from everyone'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nhắc nhở: "...crucial to document the final terms clearly to avoid future disputes."'
      }
    ]
  },
  {
    id: 'b1-18',
    title: 'The Essence of Modern Leadership',
    level: 'B1',
    content: [
      "Leadership is the art of motivating a group of people to act toward achieving a common goal.",
      "A great leader is someone who has a clear vision and can communicate it effectively to others.",
      "Integrity is the most critical quality, as people will only follow a leader they can trust.",
      "Unlike traditional management, leadership is more about inspiring people than just giving orders.",
      "Empowerment is a key strategy; a good leader gives team members the tools and authority to succeed.",
      "Active listening allows a leader to understand the concerns and ideas of their team members.",
      "Leading by example is the most effective way to establish a positive and productive culture.",
      "Emotional intelligence helps a leader stay calm during a crisis and support the team emotionally.",
      "Accountability means that a leader takes responsibility for the team's failures as well as their successes.",
      "A successful leader encourages continuous learning and professional growth for everyone in the group.",
      "In a diverse world, a leader must be inclusive and value different perspectives and backgrounds.",
      "Developing leadership skills is a lifelong journey of self-reflection and learning from experience."
    ],
    vocabulary: [
      { word: 'Vision', meaning: 'Tầm nhìn' },
      { word: 'Integrity', meaning: 'Sự chính trực' },
      { word: 'Empowerment', meaning: 'Sự trao quyền' },
      { word: 'Accountability', meaning: 'Trách nhiệm giải trình' },
      { word: 'Inclusive', meaning: 'Mang tính hòa nhập / Không phân biệt' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the primary definition of leadership in the text?',
        options: [
          'Giving orders to people as fast as possible',
          'Motivating a group to act toward a common goal',
          'Doing all the work alone to ensure quality',
          'Being the person who makes the most money'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Leadership is the art of motivating a group of people to act toward achieving a common goal."'
      },
      {
        id: 'q2',
        text: 'Why is "Integrity" considered critical for a leader?',
        options: [
          'Because people only follow leaders they can trust',
          'Because it helps to make more money',
          'Because it is a requirement of the law',
          'Because it makes a leader look more powerful'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản giải thích: "Integrity is the most critical quality, as people will only follow a leader they can trust."'
      },
      {
        id: 'q3',
        text: 'What is the difference between leadership and traditional management?',
        options: [
          'Leadership is about making more rules',
          'Leadership is more about inspiring than just giving orders',
          'Management is only for small companies',
          'There is no difference between them'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...leadership is more about inspiring people than just giving orders."'
      },
      {
        id: 'q4',
        text: 'What does "Empowerment" mean in the context of leadership?',
        options: [
          'Giving team members more work to do',
          'Giving team members tools and authority to succeed',
          'Taking all the power for yourself',
          'Choosing only the best students for a project'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản mô tả: "...a good leader gives team members the tools and authority to succeed."'
      },
      {
        id: 'q5',
        text: 'How does a leader show "Accountability"?',
        options: [
          'By blaming others for failures',
          'By taking responsibility for both failures and successes',
          'By ignoring the team\'s mistakes',
          'By working only when things are going well'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nhắc nhở: "Accountability means that a leader takes responsibility for the team\'s failures as well as their successes."'
      }
    ]
  },
  {
    id: 'b1-19',
    title: 'Fundamentals of Financial Literacy',
    level: 'B1',
    content: [
      "Financial literacy is the ability to understand and effectively use various financial skills.",
      "The first step toward financial freedom is creating a realistic monthly budget to track income and expenses.",
      "A crucial concept in finance is distinguishing between assets, which put money in your pocket, and liabilities, which take it out.",
      "Many people struggle financially because they spend their income on liabilities that lose value over time.",
      "Saving a portion of your income every month is essential for building an emergency fund for unexpected events.",
      "Investing early allows you to take advantage of compound interest, where your money grows exponentially over time.",
      "Diversification is a key strategy in investment, meaning you should not put all your money into a single asset.",
      "Understanding credit and debt is vital; high-interest debt can become a significant barrier to wealth creation.",
      "Financial literacy also involves protecting your wealth through insurance and legal planning.",
      "Technological tools, such as mobile banking apps and expense trackers, make managing money much easier today.",
      "Continuous learning about the economy helps you make informed decisions during times of inflation or market changes.",
      "Developing healthy financial habits while you are young will ensure long-term security and peace of mind."
    ],
    vocabulary: [
      { word: 'Financial literacy', meaning: 'Kiến thức/Sự am hiểu về tài chính' },
      { word: 'Assets', meaning: 'Tài sản (tạo ra tiền)' },
      { word: 'Liabilities', meaning: 'Tiêu sản (làm hao hụt tiền)' },
      { word: 'Compound interest', meaning: 'Lãi suất kép' },
      { word: 'Diversification', meaning: 'Sự đa dạng hóa (danh mục đầu tư)' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the first step toward financial freedom according to the text?',
        options: [
          'Buying the most expensive car',
          'Creating a realistic monthly budget',
          'Quitting your job immediately',
          'Spending all your money on clothes'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "The first step toward financial freedom is creating a realistic monthly budget."'
      },
      {
        id: 'q2',
        text: 'What is the difference between an asset and a liability?',
        options: [
          'Assets take money out, while liabilities put money in',
          'Assets put money in your pocket, while liabilities take it out',
          'There is no real difference',
          'Assets are only for rich people'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...assets, which put money in your pocket, and liabilities, which take it out."'
      },
      {
        id: 'q3',
        text: 'Why is an "emergency fund" important?',
        options: [
          'To buy a new video game',
          'To prepare for unexpected events and expenses',
          'To give money to strangers',
          'To pay for a luxury vacation'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...saving a portion... is essential for building an emergency fund for unexpected events."'
      },
      {
        id: 'q4',
        text: 'What is "compound interest" as described in the passage?',
        options: [
          'A way to lose money quickly',
          'A process where your money grows exponentially over time',
          'A type of tax you pay to the bank',
          'A strategy to buy many things at once'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...compound interest, where your money grows exponentially over time."'
      },
      {
        id: 'q5',
        text: 'What does "diversification" mean in investing?',
        options: [
          'Putting all your money into one single company',
          'Not putting all your money into a single asset',
          'Keeping all your money under your bed',
          'Spending all your money on entertainment'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nhắc nhở: "Diversification... meaning you should not put all your money into a single asset."'
      }
    ]
  },
  {
    id: 'b1-20',
    title: 'The Systematic Approach to Problem Solving',
    level: 'B1',
    content: [
      "Problem-solving is a mental process that involves discovering, analyzing, and solving various challenges.",
      "The first and most important step is to clearly define the problem to understand its root cause.",
      "Often, people try to fix the symptoms of a problem rather than addressing the actual source of the issue.",
      "Once the problem is identified, the next phase is to brainstorm multiple potential solutions.",
      "Evaluating each alternative based on its feasibility and cost is essential before making a final decision.",
      "After selecting the best strategy, you must develop an action plan to implement the solution effectively.",
      "During the implementation phase, it is vital to stay flexible and adapt to any unexpected obstacles.",
      "Communication plays a huge role, especially when solving problems that involve a team or multiple departments.",
      "The final step is to evaluate the outcome to see if the problem has been completely resolved.",
      "Creating a 'feedback loop' allows you to learn from the process and prevent similar issues in the future.",
      "Developing strong problem-solving skills increases your confidence and reduces stress in difficult situations.",
      "In the tech industry, being a great problem solver is often more valuable than knowing a specific coding language."
    ],
    vocabulary: [
      { word: 'Systematic', meaning: 'Có hệ thống / Theo quy trình' },
      { word: 'Root cause', meaning: 'Nguyên nhân gốc rễ' },
      { word: 'Symptoms', meaning: 'Triệu chứng / Biểu hiện bên ngoài' },
      { word: 'Feasibility', meaning: 'Tính khả thi' },
      { word: 'Feedback loop', meaning: 'Vòng lặp phản hồi' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the most important first step in problem solving?',
        options: [
          'To start working immediately',
          'To clearly define the problem and its root cause',
          'To ask someone else to fix it',
          'To ignore the problem until it goes away'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "The first and most important step is to clearly define the problem to understand its root cause."'
      },
      {
        id: 'q2',
        text: 'Why should you avoid only fixing the "symptoms" of a problem?',
        options: [
          'Because it is too expensive',
          'Because it doesn\'t address the actual source of the issue',
          'Because symptoms are not real',
          'Because it takes too much time'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...people try to fix the symptoms... rather than addressing the actual source of the issue."'
      },
      {
        id: 'q3',
        text: 'What should you do after brainstorming multiple solutions?',
        options: [
          'Try all of them at the same time',
          'Evaluate each alternative based on feasibility and cost',
          'Choose the cheapest one without thinking',
          'Wait for someone to tell you what to do'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khuyên: "Evaluating each alternative based on its feasibility and cost is essential..." '
      },
      {
        id: 'q4',
        text: 'What is the purpose of a "feedback loop"?',
        options: [
          'To make the process more complicated',
          'To learn from the process and prevent future issues',
          'To increase the cost of the project',
          'To repeat the same mistake again'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...allows you to learn from the process and prevent similar issues in the future."'
      },
      {
        id: 'q5',
        text: 'In the tech industry, what is often more valuable than a specific coding language?',
        options: [
          'Having a very fast computer',
          'Being a great problem solver',
          'Knowing how to type very quickly',
          'Having many social media followers'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "...being a great problem solver is often more valuable than knowing a specific coding language."'
      }
    ]
  },
  {
    id: 'b1-21',
    title: 'The Future of Quantum Computing',
    level: 'B1',
    content: [
      "Quantum computing is a revolutionary field of computer science that uses the principles of quantum mechanics.",
      "Traditional computers process information using bits, which represent either a 0 or a 1.",
      "In contrast, quantum computers use quantum bits, or 'qubits', which can represent both 0 and 1 simultaneously.",
      "This unique state is known as 'superposition', allowing the computer to perform multiple calculations at once.",
      "Another key concept is 'entanglement', where qubits become linked and share information instantaneously across distances.",
      "Due to these properties, quantum computers have the potential to solve problems at an exponential speed.",
      "This technology could transform fields like drug discovery by simulating complex molecular structures accurately.",
      "In cybersecurity, quantum computing might break current encryption methods but also create new, unhackable codes.",
      "However, building a stable quantum computer is extremely difficult because qubits are very sensitive to their environment.",
      "Researchers must keep these systems at temperatures colder than outer space to maintain their stability.",
      "While large-scale quantum computers are not yet common, many tech giants are investing billions in their development.",
      "Understanding the basics of quantum logic will be essential for the next generation of software engineers."
    ],
    vocabulary: [
      { word: 'Quantum mechanics', meaning: 'Cơ học lượng tử' },
      { word: 'Simultaneously', meaning: 'Đồng thời' },
      { word: 'Superposition', meaning: 'Chồng chập (lượng tử)' },
      { word: 'Entanglement', meaning: 'Rối lượng tử / Vướng víu lượng tử' },
      { word: 'Exponential', meaning: 'Theo cấp số nhân' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How do traditional computers represent information?',
        options: [
          'By using qubits that are both 0 and 1',
          'By using bits that are either 0 or 1',
          'By using complex molecular structures',
          'By using light instead of electricity'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Traditional computers process information using bits, which represent either a 0 or a 1."'
      },
      {
        id: 'q2',
        text: 'What is "superposition" in quantum computing?',
        options: [
          'The ability of a qubit to represent both 0 and 1 at the same time',
          'A way to make computers run at room temperature',
          'A method for deleting data permanently',
          'The process of connecting two computers together'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản giải thích: "qubits... can represent both 0 and 1 simultaneously. This unique state is known as \'superposition\'."'
      },
      {
        id: 'q3',
        text: 'In which field could quantum computing help discover new medicines?',
        options: [
          'Social media marketing',
          'Drug discovery and molecular simulation',
          'Mechanical engineering',
          'Classical history research'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản đề cập: "This technology could transform fields like drug discovery by simulating complex molecular structures."'
      },
      {
        id: 'q4',
        text: 'Why is it difficult to build a stable quantum computer?',
        options: [
          'Because they are too expensive to buy',
          'Because qubits are very sensitive to their environment',
          'Because the internet is too slow',
          'Because there is no software for them'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu rõ: "...building a stable quantum computer is extremely difficult because qubits are very sensitive to their environment."'
      },
      {
        id: 'q5',
        text: 'What temperature is required for current quantum systems?',
        options: [
          'Extremely hot temperatures like the sun',
          'Temperatures colder than outer space',
          'Exactly 0 degrees Celsius',
          'Normal room temperature'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nhắc nhở: "Researchers must keep these systems at temperatures colder than outer space."'
      }
    ]
  },
  {
    id: 'b1-22',
    title: 'Understanding Company Culture',
    level: 'B1',
    content: [
      "Company culture refers to the shared values, goals, and practices that characterize an organization.",
      "It is often described as the 'personality' of a company and defines how employees interact with each other.",
      "A positive culture fosters a supportive workplace environment where everyone feels valued and respected.",
      "When employees align with the company's mission, they are generally more motivated and productive.",
      "Transparency and open communication are key elements that build trust between management and staff.",
      "Many modern tech companies prioritize flexibility, allowing employees to work remotely or have flexible hours.",
      "Team-building activities and social events are common ways to strengthen the bonds within a group.",
      "In contrast, a toxic culture can lead to high stress, low morale, and a high rate of employee turnover.",
      "Diversity and inclusion are also vital parts of a healthy culture, bringing in various perspectives.",
      "Leaders play a significant role in shaping the culture by setting an example through their own behavior.",
      "During a job interview, it is important for candidates to ask questions to see if they fit the culture.",
      "Ultimately, a strong company culture is a competitive advantage that attracts and retains top talent."
    ],
    vocabulary: [
      { word: 'Characterize', meaning: 'Đặc trưng hóa / Mô tả đặc điểm' },
      { word: 'Fosters', meaning: 'Nuôi dưỡng / Thúc đẩy' },
      { word: 'Transparency', meaning: 'Sự minh bạch' },
      { word: 'Morale', meaning: 'Tinh thần / Nhuệ khí' },
      { word: 'Turnover', meaning: 'Sự luân chuyển nhân sự (nghỉ việc)' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is company culture often compared to?',
        options: [
          'The salary of the employees',
          'The personality of a company',
          'The height of the office building',
          'The speed of the internet'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "It is often described as the \'personality\' of a company..." '
      },
      {
        id: 'q2',
        text: 'What happens when employees align with the company\'s mission?',
        options: [
          'They become more motivated and productive',
          'They stop talking to each other',
          'They get a free car',
          'They work fewer hours'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản giải thích: "When employees align with the company\'s mission, they are generally more motivated and productive."'
      },
      {
        id: 'q3',
        text: 'Which element helps build trust between management and staff?',
        options: [
          'Keeping all information secret',
          'Transparency and open communication',
          'Giving everyone a new laptop',
          'Changing the company name every year'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "Transparency and open communication are key elements that build trust..." '
      },
      {
        id: 'q4',
        text: 'What is a result of a "toxic" company culture?',
        options: [
          'High stress and high employee turnover',
          'Everyone getting more sleep',
          'Faster computers for everyone',
          'Higher profits for all workers'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản cảnh báo: "...a toxic culture can lead to high stress, low morale, and a high rate of employee turnover."'
      },
      {
        id: 'q5',
        text: 'Who plays a significant role in shaping the company culture?',
        options: [
          'The customers',
          'The leaders of the company',
          'The building security',
          'The delivery people'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Leaders play a significant role in shaping the culture by setting an example..." '
      }
    ]
  },
  {
    id: 'b1-23',
    title: 'Mental Health and Well-being at Work',
    level: 'B1',
    content: [
      "Mental health refers to our emotional, psychological, and social well-being.",
      "In the modern workplace, maintaining good mental health is as important as physical fitness.",
      "High levels of stress over a long period can lead to 'burnout', a state of total emotional exhaustion.",
      "Burnout often results in decreased productivity and a lack of interest in daily tasks.",
      "To prevent this, employees should establish clear boundaries between their professional and personal lives.",
      "Practicing 'mindfulness' or meditation can help individuals stay calm and focused during a busy day.",
      "Companies that prioritize mental health often provide support systems, such as counseling services for their staff.",
      "Taking regular short breaks throughout the day is essential for refreshing the mind and reducing tension.",
      "Physical activities, such as walking or exercising, are also proven to boost mood and mental clarity.",
      "Employers should encourage a culture where people feel safe to talk about their struggles without judgment.",
      "Recognizing the early signs of stress allows individuals to seek help before the problem becomes more serious.",
      "A healthy mind is the foundation for a creative, productive, and fulfilling career in any industry."
    ],
    vocabulary: [
      { word: 'Well-being', meaning: 'Trạng thái hạnh phúc / Khỏe mạnh' },
      { word: 'Burnout', meaning: 'Sự kiệt sức (do áp lực công việc)' },
      { word: 'Exhaustion', meaning: 'Sự cạn kiệt / Mệt lử' },
      { word: 'Mindfulness', meaning: 'Sự chánh niệm / Tỉnh thức' },
      { word: 'Fulfilling', meaning: 'Đáng mãn nguyện / Ý nghĩa' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does mental health include according to the text?',
        options: [
          'Only physical strength',
          'Emotional, psychological, and social well-being',
          'The ability to code in multiple languages',
          'Having a lot of money in the bank'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Mental health refers to our emotional, psychological, and social well-being."'
      },
      {
        id: 'q2',
        text: 'What is "burnout"?',
        options: [
          'A fire in the office building',
          'A state of total emotional exhaustion due to long-term stress',
          'A faster way to complete tasks',
          'A new type of software for managers'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...lead to \'burnout\', a state of total emotional exhaustion."'
      },
      {
        id: 'q3',
        text: 'How can employees prevent burnout?',
        options: [
          'By working 20 hours a day',
          'By establishing clear boundaries between work and personal life',
          'By drinking more energy drinks',
          'By ignoring all their friends'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khuyên: "...employees should establish clear boundaries between their professional and personal lives."'
      },
      {
        id: 'q4',
        text: 'What is a benefit of taking regular short breaks?',
        options: [
          'It makes you forget everything',
          'It is essential for refreshing the mind and reducing tension',
          'It helps you finish work slower',
          'It is a waste of company time'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Taking regular short breaks... is essential for refreshing the mind and reducing tension."'
      },
      {
        id: 'q5',
        text: 'What should employers encourage in a healthy culture?',
        options: [
          'People keeping all their problems to themselves',
          'A safe environment to talk about struggles without judgment',
          'Judging people who take breaks',
          'Hiring only people who never get stressed'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nhắc nhở: "Employers should encourage a culture where people feel safe to talk about their struggles without judgment."'
      }
    ]
  },
  {
    id: 'b1-24',
    title: 'The Future of Remote Work',
    level: 'B1',
    content: [
      "Remote work refers to a working style that allows professionals to work outside of a traditional office environment.",
      "The rapid advancement of technology has made it possible to collaborate with teams from anywhere in the world.",
      "One of the primary benefits is flexibility, as employees can often choose their own hours and save time on commuting.",
      "Many companies are now adopting a 'hybrid' model, where staff work some days in the office and some days at home.",
      "This model offers a balance between the social interaction of an office and the comfort of a personal workspace.",
      "However, remote work also presents challenges, such as maintaining effective communication and team cohesion.",
      "Without face-to-face interaction, it can be difficult to build trust and feel connected to the company's culture.",
      "Self-discipline is crucial for remote workers to stay productive and avoid distractions in a home environment.",
      "Digital tools like Zoom, Slack, and Trello have become essential for managing projects and staying in touch.",
      "Isolation is another concern, as some employees might feel lonely without the daily presence of their colleagues.",
      "To succeed, organizations must invest in cybersecurity to protect sensitive data accessed from various locations.",
      "As the world adapts, remote work is expected to remain a significant part of the modern professional landscape."
    ],
    vocabulary: [
      { word: 'Commuting', meaning: 'Việc di chuyển từ nhà đến nơi làm việc' },
      { word: 'Hybrid', meaning: 'Mô hình kết hợp (trực tiếp và từ xa)' },
      { word: 'Cohesion', meaning: 'Sự gắn kết' },
      { word: 'Self-discipline', meaning: 'Tính kỷ luật tự giác' },
      { word: 'Isolation', meaning: 'Sự cô lập' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main definition of remote work?',
        options: [
          'Working only in a large city office',
          'A style that allows working outside of a traditional office',
          'A job that doesn\'t require any computer skills',
          'Working for free for a global company'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Remote work refers to a working style that allows professionals to work outside of a traditional office environment."'
      },
      {
        id: 'q2',
        text: 'What does a "hybrid" model mean in a workplace?',
        options: [
          'Working only during the night',
          'A mix of working in the office and working from home',
          'Using two different computers at the same time',
          'Having two different jobs'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...staff work some days in the office and some days at home."'
      },
      {
        id: 'q3',
        text: 'What is a benefit of remote work for employees?',
        options: [
          'They never have to talk to their boss',
          'Flexibility and saving time on commuting',
          'Getting a free house from the company',
          'Having no deadlines for any projects'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "One of the primary benefits is flexibility... and save time on commuting."'
      },
      {
        id: 'q4',
        text: 'Which quality is crucial for staying productive at home?',
        options: [
          'Self-discipline',
          'Being very loud on video calls',
          'Having a very expensive chair',
          'Waking up very late every day'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản nhấn mạnh: "Self-discipline is crucial for remote workers to stay productive..." '
      },
      {
        id: 'q5',
        text: 'Why do organizations need to invest in cybersecurity for remote work?',
        options: [
          'To make the internet faster for employees',
          'To protect sensitive data accessed from various locations',
          'To monitor what employees are eating',
          'To prevent employees from taking breaks'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nhắc nhở: "...must invest in cybersecurity to protect sensitive data accessed from various locations."'
      }
    ]
  },
  {
    id: 'b1-25',
    title: 'The Ethics of Artificial Intelligence',
    level: 'B1',
    content: [
      "As artificial intelligence becomes more integrated into society, ethical considerations are increasingly important.",
      "AI ethics is a set of principles that ensure AI systems are developed and used responsibly.",
      "One major concern is 'algorithmic bias,' where an AI makes unfair decisions based on flawed training data.",
      "For example, if a hiring AI is biased, it might unfairly reject qualified candidates from certain backgrounds.",
      "Transparency is essential so that developers and users can understand how an AI reaches its conclusions.",
      "Accountability is another key pillar, meaning someone must be responsible for the actions and errors of an AI.",
      "Data privacy is a significant issue, as AI systems often require massive amounts of personal information to function.",
      "Developers must ensure that this data is collected legally and protected from unauthorized access.",
      "There are also fears that AI could be used to create deepfakes or spread misinformation on a large scale.",
      "To address these risks, many governments are creating new regulations to govern the development of AI.",
      "The goal is to create 'Human-Centric AI' that benefits humanity while respecting fundamental human rights.",
      "Building trust in AI requires a commitment to fairness, safety, and reliability from all tech companies."
    ],
    vocabulary: [
      { word: 'Ethical', meaning: 'Thuộc về đạo đức' },
      { word: 'Algorithmic bias', meaning: 'Định kiến thuật toán' },
      { word: 'Transparency', meaning: 'Tính minh bạch' },
      { word: 'Accountability', meaning: 'Trách nhiệm giải trình' },
      { word: 'Human-Centric', meaning: 'Lấy con người làm trung tâm' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is "algorithmic bias" according to the passage?',
        options: [
          'A faster way for AI to process data',
          'Unfair decisions made by AI due to flawed training data',
          'A type of software used for designing robots',
          'The ability of AI to learn without any data'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...algorithmic bias, where an AI makes unfair decisions based on flawed training data."'
      },
      {
        id: 'q2',
        text: 'Why is "transparency" important in AI development?',
        options: [
          'So that the AI can run faster on old computers',
          'To help users understand how an AI reaches its conclusions',
          'To make the AI icons look clear on the screen',
          'To hide the source code from other developers'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Transparency is essential so that developers and users can understand how an AI reaches its conclusions."'
      },
      {
        id: 'q3',
        text: 'What does "accountability" mean in the context of AI?',
        options: [
          'Counting how many AI models are in use',
          'Being responsible for the actions and errors of an AI system',
          'Making sure the AI earns enough money',
          'Deleting the AI if it becomes too smart'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản định nghĩa: "Accountability... meaning someone must be responsible for the actions and errors of an AI."'
      },
      {
        id: 'q4',
        text: 'What is a significant risk related to AI and information?',
        options: [
          'AI making the internet too expensive',
          'The creation of deepfakes and the spread of misinformation',
          'AI causing all computers to turn off at once',
          'The lack of interesting videos on YouTube'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản cảnh báo: "...fears that AI could be used to create deepfakes or spread misinformation."'
      },
      {
        id: 'q5',
        text: 'What is the ultimate goal of "Human-Centric AI"?',
        options: [
          'To replace all human workers with machines',
          'To benefit humanity while respecting human rights',
          'To make humans think more like computers',
          'To build the most powerful computer in the world'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "The goal is to create \'Human-Centric AI\' that benefits humanity while respecting fundamental human rights."'
      }
    ]
  },
  {
    id: 'b1-26',
    title: 'The Fundamentals of Systems Thinking',
    level: 'B1',
    content: [
      "Systems thinking is a holistic approach to analysis that focuses on how a system's constituent parts interrelate.",
      "Instead of looking at isolated events, it examines how things work within the context of larger structures.",
      "Everything in a system is interconnected, meaning a change in one part can affect the entire network.",
      "This perspective is essential in ecology, where every species plays a vital role in maintaining the balance of nature.",
      "In business, systems thinking helps managers understand how a decision in marketing might impact the production line.",
      "One core concept is the 'feedback loop,' which describes how an output of a system circles back as an input.",
      "Reinforcing loops lead to growth or decline, while balancing loops help maintain stability within the system.",
      "A common mistake is focusing only on short-term fixes without considering the long-term unintended consequences.",
      "Systems thinking encourages us to identify patterns of behavior rather than reacting to single problems.",
      "In software development, this approach is crucial for designing scalable architectures that function smoothly under heavy loads.",
      "By understanding the whole system, professionals can find high-leverage points where small changes lead to big improvements.",
      "Developing a systems-thinking mindset allows individuals to solve complex problems with more accuracy and foresight."
    ],
    vocabulary: [
      { word: 'Holistic', meaning: 'Toàn diện / Tổng thể' },
      { word: 'Constituent', meaning: 'Cấu thành / Thành phần' },
      { word: 'Interconnected', meaning: 'Kết nối lẫn nhau' },
      { word: 'Unintended', meaning: 'Ngoài ý muốn / Không lường trước' },
      { word: 'Foresight', meaning: 'Tầm nhìn xa / Sự dự phòng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main focus of systems thinking?',
        options: [
          'Looking at isolated parts of a machine',
          'How a system\'s constituent parts interrelate within a larger structure',
          'Solving problems as fast as possible without thinking',
          'Ignoring the connection between different departments'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Systems thinking... focuses on how a system\'s constituent parts interrelate."'
      },
      {
        id: 'q2',
        text: 'What does "interconnected" mean in this context?',
        options: [
          'That everything is broken and needs to be fixed',
          'That a change in one part can affect the entire network',
          'That the internet connection is very strong',
          'That parts of a system are completely separate'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Everything in a system is interconnected, meaning a change in one part can affect the entire network."'
      },
      {
        id: 'q3',
        text: 'What is a "feedback loop"?',
        options: [
          'A loud noise from a microphone',
          'A process where a system\'s output circles back as an input',
          'A meeting where people complain about their work',
          'A type of computer cable'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản định nghĩa: "One core concept is the \'feedback loop,\' which describes how an output... circles back as an input."'
      },
      {
        id: 'q4',
        text: 'Why is systems thinking important in software development?',
        options: [
          'To make the computer screen look more colorful',
          'To design scalable architectures that function smoothly',
          'To help programmers type faster',
          'To delete old files automatically'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "In software development, this approach is crucial for designing scalable architectures..." '
      },
      {
        id: 'q5',
        text: 'What are "high-leverage points"?',
        options: [
          'Expensive tools that are hard to use',
          'Specific points where small changes lead to big improvements',
          'The highest points of a mountain',
          'People who have a lot of money'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...find high-leverage points where small changes lead to big improvements."'
      }
    ]
  },
  {
    id: 'b1-27',
    title: 'The Impact of Non-verbal Communication',
    level: 'B1',
    content: [
      "Non-verbal communication is the process of sending and receiving messages without using words.",
      "It includes facial expressions, body movements, gestures, and the tone of our voice.",
      "Studies suggest that a large percentage of our daily communication is actually non-verbal.",
      "For instance, a smile can convey friendliness and openness before a single word is spoken.",
      "Maintaining appropriate eye contact is crucial for building trust and showing that you are engaged.",
      "Your posture, or the way you sit and stand, can signal confidence or a lack of interest.",
      "In a professional interview, crossing your arms might be interpreted as being defensive or closed-off.",
      "The tone of voice is also vital, as it adds emotional meaning to the literal words being used.",
      "Cultural differences play a big role, as a gesture that is polite in one country might be offensive in another.",
      "Being aware of your own non-verbal signals helps you become a more effective and persuasive speaker.",
      "Observing others' body language can provide deep insights into their true feelings and intentions.",
      "Mastering non-verbal cues is essential for successful leadership and building strong personal relationships."
    ],
    vocabulary: [
      { word: 'Gestures', meaning: 'Cử chỉ / Điệu bộ' },
      { word: 'Posture', meaning: 'Tư thế / Dáng vẻ' },
      { word: 'Interpreted', meaning: 'Được giải thích / Được hiểu là' },
      { word: 'Defensive', meaning: 'Có tính phòng thủ / Khép kín' },
      { word: 'Cues', meaning: 'Tín hiệu / Gợi ý' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does non-verbal communication include?',
        options: [
          'Writing long emails and letters',
          'Facial expressions, gestures, and tone of voice',
          'Only the specific words we choose to speak',
          'Using a microphone in a large room'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "It includes facial expressions, body movements, gestures, and the tone of our voice."'
      },
      {
        id: 'q2',
        text: 'Why is eye contact important in a conversation?',
        options: [
          'To see what color eyes the other person has',
          'For building trust and showing that you are engaged',
          'To make the other person feel uncomfortable',
          'To help you remember their name faster'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Maintaining appropriate eye contact is crucial for building trust..." '
      },
      {
        id: 'q3',
        text: 'How might crossing your arms be interpreted in an interview?',
        options: [
          'As being very friendly and happy',
          'As being defensive or closed-off',
          'As being the smartest person in the room',
          'As having a lot of money'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...crossing your arms might be interpreted as being defensive or closed-off."'
      },
      {
        id: 'q4',
        text: 'Why should you be careful with gestures in different countries?',
        options: [
          'Because gestures are hard to learn',
          'Because a polite gesture in one country might be offensive in another',
          'Because you might hurt your hand',
          'Because nobody uses gestures anymore'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản cảnh báo: "...a gesture that is polite in one country might be offensive in another."'
      },
      {
        id: 'q5',
        text: 'What is a benefit of observing others\' body language?',
        options: [
          'It provides insights into their true feelings and intentions',
          'It helps you win every sports game',
          'It makes you a faster reader',
          'It helps you save money on clothes'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản khẳng định: "Observing others\' body language can provide deep insights into their true feelings..." '
      }
    ]
  },
  {
    id: 'b1-28',
    title: 'The Process of Design Thinking',
    level: 'B1',
    content: [
      "Design thinking is a human-centered approach to innovation that integrates the needs of people.",
      "It is widely used by tech companies to create products that solve real-world problems effectively.",
      "The first stage is 'Empathize', where you observe and engage with users to understand their experiences.",
      "In the 'Define' stage, you synthesize your findings to state the core problem you want to address.",
      "Next is the 'Ideate' phase, where the team generates a wide range of creative and wild ideas.",
      "The fourth stage is 'Prototype', which involves building simple, low-cost versions of the product.",
      "Finally, you 'Test' the prototype with real users to gather feedback and make improvements.",
      "Design thinking is an iterative process, meaning you often go back to previous stages based on what you learn.",
      "This method encourages a 'fail fast' mindset, where mistakes are seen as opportunities to learn early.",
      "Collaboration is essential, as diverse teams bring different perspectives to the brainstorming sessions.",
      "In software development, design thinking helps ensure that the final application is truly user-friendly.",
      "By focusing on empathy and experimentation, organizations can develop innovative solutions that people actually love."
    ],
    vocabulary: [
      { word: 'Human-centered', meaning: 'Lấy con người làm trung tâm' },
      { word: 'Synthesize', meaning: 'Tổng hợp' },
      { word: 'Prototype', meaning: 'Bản mẫu / Sản phẩm thử nghiệm' },
      { word: 'Iterative', meaning: 'Lặp đi lặp lại (để hoàn thiện)' },
      { word: 'Experimentation', meaning: 'Sự thử nghiệm' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the primary focus of design thinking?',
        options: [
          'Making products look as expensive as possible',
          'Integrating the needs of people to solve real-world problems',
          'Hiring only the fastest programmers',
          'Reducing the cost of marketing'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Design thinking is a human-centered approach... that integrates the needs of people."'
      },
      {
        id: 'q2',
        text: 'What happens during the "Empathize" stage?',
        options: [
          'You build the final version of the software',
          'You observe and engage with users to understand their experiences',
          'You write a long list of rules for the team',
          'You decide how much to charge for the product'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...where you observe and engage with users to understand their experiences."'
      },
      {
        id: 'q3',
        text: 'What is a "prototype"?',
        options: [
          'A very expensive computer system',
          'A simple, low-cost version of a product used for testing',
          'A person who leads a design team',
          'A list of all the users\' names'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản định nghĩa: "...building simple, low-cost versions of the product."'
      },
      {
        id: 'q4',
        text: 'Why is design thinking described as an "iterative" process?',
        options: [
          'Because you only do it once and then stop',
          'Because you often go back to previous stages based on what you learn',
          'Because it is very boring for the developers',
          'Because it requires a lot of math'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...meaning you often go back to previous stages based on what you learn."'
      },
      {
        id: 'q5',
        text: 'What does a "fail fast" mindset encourage?',
        options: [
          'Stopping the project as soon as something goes wrong',
          'Seeing mistakes as opportunities to learn early',
          'Never trying anything new',
          'Trying to finish every task in one minute'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "...where mistakes are seen as opportunities to learn early."'
      }
    ]
  },
  {
    id: 'b1-29',
    title: 'The Role of Emotional Intelligence',
    level: 'B1',
    content: [
      "Emotional Intelligence, often called EQ, is the ability to perceive, understand, and manage emotions.",
      "Experts believe that EQ is just as important as IQ for achieving long-term professional success.",
      "The first component of EQ is self-awareness, which means recognizing your own emotions as they happen.",
      "Self-regulation follows, allowing individuals to control impulsive feelings and adapt to changing circumstances.",
      "People with high EQ are usually highly motivated and driven to achieve goals beyond just money or status.",
      "Empathy is a crucial element, enabling you to understand the perspectives and feelings of other people.",
      "Social skills involve managing relationships effectively to move people in desired directions.",
      "In a team environment, high EQ reduces conflict and improves cooperation between members with different personalities.",
      "A leader with high EQ can stay calm under pressure and inspire the team during difficult times.",
      "Fortunately, unlike IQ, emotional intelligence is a skill that can be developed and strengthened over time.",
      "Practicing active listening and reflecting on your daily interactions are great ways to improve your EQ.",
      "Developing your emotional intelligence leads to better decision-making and more fulfilling personal relationships."
    ],
    vocabulary: [
      { word: 'Perceive', meaning: 'Nhận thức / Cảm nhận' },
      { word: 'Self-awareness', meaning: 'Sự tự nhận thức' },
      { word: 'Self-regulation', meaning: 'Sự tự điều chỉnh' },
      { word: 'Impulsive', meaning: 'Hấp tấp / Bốc đồng' },
      { word: 'Empathy', meaning: 'Sự thấu cảm' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is Emotional Intelligence (EQ) according to the text?',
        options: [
          'The ability to solve complex math problems quickly',
          'The ability to perceive, understand, and manage emotions',
          'A type of software used for psychological testing',
          'The capacity to remember a lot of data'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Emotional Intelligence... is the ability to perceive, understand, and manage emotions."'
      },
      {
        id: 'q2',
        text: 'What does "self-awareness" involve?',
        options: [
          'Recognizing your own emotions as they happen',
          'Ignoring how you feel to work harder',
          'Telling everyone else what to do',
          'Waking up very early every morning'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản giải thích: "The first component of EQ is self-awareness, which means recognizing your own emotions as they happen."'
      },
      {
        id: 'q3',
        text: 'Why is "empathy" considered crucial in EQ?',
        options: [
          'Because it helps you earn a higher salary',
          'Because it enables you to understand the perspectives and feelings of others',
          'Because it makes you a faster typist',
          'Because it is a requirement for all computer scientists'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Empathy is a crucial element, enabling you to understand the perspectives and feelings of other people."'
      },
      {
        id: 'q4',
        text: 'What is a major difference between IQ and EQ mentioned in the text?',
        options: [
          'IQ is more important than EQ for leaders',
          'EQ can be developed and strengthened over time, unlike IQ',
          'IQ only applies to students, while EQ is for workers',
          'There is no difference between them'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...unlike IQ, emotional intelligence is a skill that can be developed and strengthened over time."'
      },
      {
        id: 'q5',
        text: 'How can a leader with high EQ benefit a team?',
        options: [
          'By finishing all the work alone',
          'By staying calm under pressure and inspiring the team',
          'By giving the team more difficult tasks',
          'By working in a separate office'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "A leader with high EQ can stay calm under pressure and inspire the team during difficult times."'
      }
    ]
  },
  {
    id: 'b1-30',
    title: 'The Importance of Lifelong Learning',
    level: 'B1',
    content: [
      "Lifelong learning is the 'ongoing, voluntary, and self-motivated' pursuit of knowledge for either personal or professional reasons.",
      "In the past, people often believed that education ended after graduating from high school or university.",
      "However, in the modern era, the rapid pace of change means that skills can become outdated in just a few years.",
      "Lifelong learning is essential for staying competitive in the job market and adapting to new technologies.",
      "It is not limited to formal classrooms; it includes reading books, taking online courses, or learning a new hobby.",
      "Developing a habit of daily learning keeps the brain active and can improve memory as we age.",
      "Curiosity is the main engine of lifelong learning, driving individuals to ask questions and explore new fields.",
      "The internet has made knowledge acquisition more accessible than ever through platforms like Coursera or YouTube.",
      "Self-directed learners are highly valued by employers because they show initiative and a desire for growth.",
      "Lifelong learning also enriches our personal lives by helping us understand the world from different perspectives.",
      "Setting small, achievable learning goals each week can help maintain your motivation over the long term.",
      "Embracing a lifestyle of continuous learning ensures that you remain flexible and ready for any future challenges."
    ],
    vocabulary: [
      { word: 'Voluntary', meaning: 'Tự nguyện' },
      { word: 'Pursuit', meaning: 'Sự theo đuổi' },
      { word: 'Outdated', meaning: 'Lỗi thời' },
      { word: 'Acquisition', meaning: 'Sự tiếp nhận / Đạt được' },
      { word: 'Initiative', meaning: 'Sự chủ động / Sáng kiến' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the modern definition of lifelong learning?',
        options: [
          'Studying only until you finish university',
          'The ongoing, voluntary pursuit of knowledge for any reason',
          'Being forced by your boss to learn a new skill',
          'Only learning things related to your current job'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Lifelong learning is the \'ongoing, voluntary, and self-motivated\' pursuit of knowledge..." '
      },
      {
        id: 'q2',
        text: 'Why is lifelong learning essential in the modern era?',
        options: [
          'Because skills can become outdated very quickly',
          'Because it is a rule in every country',
          'Because textbooks are becoming more expensive',
          'Because schools are closing down'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản giải thích: "...the rapid pace of change means that skills can become outdated in just a few years."'
      },
      {
        id: 'q3',
        text: 'Does lifelong learning only happen in a classroom?',
        options: [
          'Yes, it must be formal education',
          'No, it includes online courses, reading, and even hobbies',
          'Yes, you need a teacher to learn anything',
          'No, you can only learn while you are at work'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "It is not limited to formal classrooms; it includes reading books, taking online courses..." '
      },
      {
        id: 'q4',
        text: 'Why do employers value self-directed learners?',
        options: [
          'Because they don\'t need a high salary',
          'Because they show initiative and a desire for growth',
          'Because they work more hours than anyone else',
          'Because they never ask any questions'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Self-directed learners are highly valued... because they show initiative and a desire for growth."'
      },
      {
        id: 'q5',
        text: 'What is the "engine" that drives lifelong learning?',
        options: [
          'Money and status',
          'Curiosity and asking questions',
          'Expensive software tools',
          'Doing exactly what the teacher says'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "Curiosity is the main engine of lifelong learning, driving individuals to ask questions..." '
      }
    ]
  },
  {
    id: 'b1-31',
    title: 'Exploring Virtual and Augmented Reality',
    level: 'B1',
    content: [
      "Virtual Reality (VR) and Augmented Reality (AR) are transforming how we interact with technology.",
      "While VR creates a completely artificial environment, AR overlays digital information onto the real world.",
      "To experience VR, users typically wear a headset that blocks out their physical surroundings.",
      "This immersive experience allows people to feel as if they are physically present in a simulated world.",
      "In contrast, AR users can still see their actual environment through a smartphone screen or smart glasses.",
      "A famous example of AR is mobile games that place digital characters into your living room or park.",
      "In education, VR enables students to take virtual field trips to historical sites or distant planets.",
      "Medical professionals use VR simulations to practice complex surgeries in a risk-free environment.",
      "Retailers are adopting AR to let customers 'try on' clothes or see how furniture looks in their home.",
      "One major challenge for VR is 'motion sickness', which some users feel during long sessions.",
      "For AR, maintaining privacy and security while recording the real world is a significant concern.",
      "As hardware becomes smaller and more powerful, VR and AR will become everyday tools for many industries."
    ],
    vocabulary: [
      { word: 'Immersive', meaning: 'Đắm chìm / Mang tính nhập vai' },
      { word: 'Simulated', meaning: 'Giả lập / Mô phỏng' },
      { word: 'Overlay', meaning: 'Phủ lên / Chèn lên' },
      { word: 'Surroundings', meaning: 'Môi trường xung quanh' },
      { word: 'Motion sickness', meaning: 'Say xe / Say do chuyển động' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main difference between VR and AR?',
        options: [
          'VR is cheaper to build than AR',
          'VR creates a new world, while AR overlays digital info on the real world',
          'AR requires a heavy headset that blocks everything',
          'There is no actual difference between them'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "While VR creates a completely artificial environment, AR overlays digital information onto the real world."'
      },
      {
        id: 'q2',
        text: 'How do users typically experience Virtual Reality (VR)?',
        options: [
          'By looking at a traditional paper map',
          'By wearing a headset that blocks out physical surroundings',
          'By listening to the radio',
          'By using a 1990s desktop computer'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "To experience VR, users typically wear a headset that blocks out their physical surroundings."'
      },
      {
        id: 'q3',
        text: 'Which field uses VR to practice surgeries in a risk-free way?',
        options: [
          'Fashion and retail',
          'Medical and healthcare',
          'History and archaeology',
          'Social media marketing'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Medical professionals use VR simulations to practice complex surgeries in a risk-free environment."'
      },
      {
        id: 'q4',
        text: 'What is a common physical issue some people face when using VR?',
        options: [
          'Extreme hunger',
          'Motion sickness',
          'Losing their memory',
          'Hearing loud noises'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "One major challenge for VR is \'motion sickness\', which some users feel during long sessions."'
      },
      {
        id: 'q5',
        text: 'How do retailers use AR to help customers?',
        options: [
          'By giving away free products',
          'By letting them "try on" clothes or see furniture in their homes',
          'By making the store lights brighter',
          'By replacing all human workers with robots'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "Retailers are adopting AR to let customers \'try on\' clothes or see how furniture looks in their home."'
      }
    ]
  },
  {
    id: 'b1-32',
    title: 'The Power of Blockchain Technology',
    level: 'B1',
    content: [
      "Blockchain is a decentralized digital ledger that records transactions across many computers.",
      "The most unique feature of blockchain is that the data is 'immutable,' meaning it cannot be changed or deleted once recorded.",
      "Each 'block' in the chain contains a list of transactions and a unique mathematical code called a 'hash'.",
      "Because every block is linked to the previous one, changing a single block would require changing the entire chain.",
      "This structure provides a high level of security and transparency without the need for a central authority like a bank.",
      "While many people associate blockchain with Bitcoin, its applications go far beyond cryptocurrency.",
      "In supply chain management, blockchain can track the journey of a product from the factory to the customer.",
      "Governments are exploring blockchain for secure voting systems to prevent fraud and ensure accuracy.",
      "Smart contracts are self-executing programs on a blockchain that automatically fulfill an agreement when conditions are met.",
      "However, blockchain technology faces challenges regarding high energy consumption and slow transaction speeds.",
      "Many developers are working on 'Layer 2' solutions to make these networks more efficient and scalable.",
      "As understanding of blockchain grows, it is likely to revolutionize how we handle digital identity and ownership."
    ],
    vocabulary: [
      { word: 'Decentralized', meaning: 'Phi tập trung' },
      { word: 'Ledger', meaning: 'Sổ cái' },
      { word: 'Immutable', meaning: 'Không thể thay đổi / Bất biến' },
      { word: 'Cryptography', meaning: 'Mật mã học' },
      { word: 'Scalable', meaning: 'Có khả năng mở rộng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does "immutable" mean in the context of blockchain?',
        options: [
          'The data can be changed easily by anyone',
          'The data cannot be changed or deleted once recorded',
          'The data is stored on a single central server',
          'The data is deleted automatically every month'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...data is \'immutable,\' meaning it cannot be changed or deleted once recorded."'
      },
      {
        id: 'q2',
        text: 'Why is it difficult to change a single block in a blockchain?',
        options: [
          'Because the blocks are very large',
          'Because every block is linked to the previous one in a chain',
          'Because the computers are too slow',
          'Because the users don\'t have the password'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Because every block is linked to the previous one, changing a single block would require changing the entire chain."'
      },
      {
        id: 'q3',
        text: 'What are "smart contracts"?',
        options: [
          'Paper contracts signed by lawyers',
          'Self-executing programs that automatically fulfill an agreement',
          'A type of cryptocurrency used for shopping',
          'A system for sending emails secretly'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản định nghĩa: "Smart contracts are self-executing programs... that automatically fulfill an agreement..." '
      },
      {
        id: 'q4',
        text: 'What is a common challenge for blockchain technology?',
        options: [
          'It is too easy to hack',
          'High energy consumption and slow transaction speeds',
          'Nobody wants to use digital tools',
          'It only works on mobile phones'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...blockchain technology faces challenges regarding high energy consumption and slow transaction speeds."'
      },
      {
        id: 'q5',
        text: 'How can blockchain be used in supply chain management?',
        options: [
          'By making products move faster',
          'By tracking the journey of a product from factory to customer',
          'By replacing all human workers with robots',
          'By lowering the price of all goods'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "In supply chain management, blockchain can track the journey of a product..." '
      }
    ]
  },
  {
    id: 'b1-33',
    title: 'The Evolution of Smart Cities',
    level: 'B1',
    content: [
      "A smart city uses digital technology and data to enhance the quality and performance of urban services.",
      "The backbone of this concept is the Internet of Things (IoT), which connects millions of sensors across the city.",
      "These sensors collect real-time data on traffic flow, air quality, and energy consumption.",
      "Smart traffic lights can adjust their timing based on actual vehicle density to reduce congestion.",
      "In terms of energy, smart grids automatically distribute electricity more efficiently to reduce waste.",
      "Waste management is also improved by bins that notify authorities when they are nearly full.",
      "Citizens can interact with the city through mobile apps to report problems or access public services.",
      "One major goal of smart cities is sustainability, aiming to lower carbon emissions through green technology.",
      "However, the massive collection of data raises serious concerns regarding citizen privacy and surveillance.",
      "Cybersecurity is another critical challenge, as a single hack could disrupt essential services like water or power.",
      "Despite these risks, many global capitals are investing heavily to become more 'intelligent' and livable.",
      "As urban populations grow, smart technology will be vital for managing resources in a crowded world."
    ],
    vocabulary: [
      { word: 'Infrastructure', meaning: 'Cơ sở hạ tầng' },
      { word: 'Congestion', meaning: 'Sự tắc nghẽn (giao thông)' },
      { word: 'Sustainability', meaning: 'Sự bền vững' },
      { word: 'Surveillance', meaning: 'Sự giám sát' },
      { word: 'Urban', meaning: 'Thuộc về đô thị' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the primary tool used by smart cities to collect data?',
        options: [
          'Traditional paper surveys',
          'Internet of Things (IoT) sensors',
          'Human workers counting cars',
          'Large telescopes in space'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "The backbone... is the Internet of Things (IoT), which connects millions of sensors..." '
      },
      {
        id: 'q2',
        text: 'How can smart traffic lights help reduce congestion?',
        options: [
          'By turning off during the night',
          'By adjusting their timing based on actual vehicle density',
          'By making the lights look brighter',
          'By limiting the number of cars on the road'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Smart traffic lights can adjust their timing based on actual vehicle density to reduce congestion."'
      },
      {
        id: 'q3',
        text: 'What is a major environmental goal of smart cities?',
        options: [
          'To build more factories',
          'To achieve sustainability and lower carbon emissions',
          'To replace all parks with buildings',
          'To increase the use of plastic'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "One major goal... is sustainability, aiming to lower carbon emissions..." '
      },
      {
        id: 'q4',
        text: 'What is a significant concern regarding the data collected in smart cities?',
        options: [
          'The data is too difficult to read',
          'Citizen privacy and constant surveillance',
          'The data takes up too much physical space',
          'Nobody knows how to use the apps'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...the massive collection of data raises serious concerns regarding citizen privacy and surveillance."'
      },
      {
        id: 'q5',
        text: 'Why is cybersecurity critical in a smart city environment?',
        options: [
          'To make the internet free for everyone',
          'Because a hack could disrupt essential services like water or power',
          'To help the city earn more money',
          'To make the sensors look more modern'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "Cybersecurity is another critical challenge, as a single hack could disrupt essential services..." '
      }
    ]
  },
  {
    id: 'b1-34',
    title: 'The World of Genetic Engineering',
    level: 'B1',
    content: [
      "Genetic engineering is a branch of biotechnology that involves modifying the DNA of a living organism.",
      "Scientists can take a specific gene from one species and insert it into another to introduce new traits.",
      "In agriculture, this technology is used to create crops that are resistant to pests and extreme weather.",
      "These genetically modified organisms, or GMOs, can help increase food production for a growing global population.",
      "In medicine, gene editing tools like CRISPR allow researchers to target and repair damaged DNA sequences.",
      "This could potentially lead to cures for hereditary diseases that were once considered untreatable.",
      "The production of insulin for diabetic patients is one of the earliest successes of genetic engineering.",
      "However, the ability to 'design' life raises significant ethical questions and social concerns.",
      "Critics worry about the long-term impact of GMOs on the environment and natural biodiversity.",
      "There are also fears that gene editing could be misused to create 'designer babies' with specific physical traits.",
      "Strict regulations are necessary to ensure that genetic research is conducted safely and responsibly.",
      "As our understanding of the genetic code deepens, this field will continue to revolutionize science and society."
    ],
    vocabulary: [
      { word: 'Organism', meaning: 'Sinh vật' },
      { word: 'Hereditary', meaning: 'Di truyền (bệnh tật, đặc điểm)' },
      { word: 'Pests', meaning: 'Sâu bệnh / Côn trùng gây hại' },
      { word: 'Hiring', meaning: 'Hợp đồng / Tuyển dụng' }, // Chỉnh sửa lại từ phù hợp ngữ cảnh: Traits: Đặc điểm
      { word: 'Traits', meaning: 'Đặc điểm / Đặc tính' },
      { word: 'Biodiversity', meaning: 'Đa dạng sinh học' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the core process of genetic engineering?',
        options: [
          'Studying the history of ancient animals',
          'Modifying the DNA of a living organism',
          'Building new hospitals for doctors',
          'Planting more trees in the forest'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Genetic engineering... involves modifying the DNA of a living organism."'
      },
      {
        id: 'q2',
        text: 'How is genetic engineering used in agriculture?',
        options: [
          'To make the soil look more colorful',
          'To create crops resistant to pests and extreme weather',
          'To help farmers work fewer hours',
          'To replace all tractors with robots'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...used to create crops that are resistant to pests and extreme weather."'
      },
      {
        id: 'q3',
        text: 'What does "CRISPR" allow researchers to do in medicine?',
        options: [
          'To take better photos of cells',
          'To target and repair damaged DNA sequences',
          'To speed up the internet in hospitals',
          'To create new types of exercise'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...allow researchers to target and repair damaged DNA sequences."'
      },
      {
        id: 'q4',
        text: 'What is a common concern among critics of GMOs?',
        options: [
          'The crops will grow too fast',
          'The long-term impact on the environment and biodiversity',
          'The food will become too cheap to buy',
          'The seeds will disappear completely'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Critics worry about the long-term impact of GMOs on the environment..." '
      },
      {
        id: 'q5',
        text: 'Why are strict regulations necessary in this field?',
        options: [
          'To make the research more expensive',
          'To ensure research is conducted safely and responsibly',
          'To stop all scientific experiments',
          'To help people understand the genetic code'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "Strict regulations are necessary to ensure that genetic research is conducted safely..." '
      }
    ]
  },
  {
    id: 'b1-35',
    title: 'The Shift to Renewable Energy',
    level: 'B1',
    content: [
      "Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed.",
      "Sunlight and wind, for example, are sources that are constantly available and will never run out.",
      "The transition from fossil fuels to clean energy is vital for reducing global carbon emissions.",
      "Solar power uses photovoltaic cells to convert sunlight directly into electricity for homes and businesses.",
      "Wind energy is generated by large turbines that capture the kinetic energy of moving air.",
      "Hydropower, which uses the energy of flowing water, remains one of the largest sources of renewable electricity.",
      "Geothermal energy taps into the heat from within the Earth to provide a constant supply of power.",
      "One major benefit of these sources is that they produce little to no greenhouse gases during operation.",
      "However, the main challenge is that some renewable sources, like solar and wind, are intermittent.",
      "To solve this, engineers are developing advanced battery systems to store energy for use when the sun is not shining.",
      "Many countries are now investing heavily in green infrastructure to achieve their sustainability goals.",
      "As technology improves and costs decrease, renewable energy will eventually become the primary power source for the world."
    ],
    vocabulary: [
      { word: 'Replenished', meaning: 'Được làm đầy lại / Tái tạo' },
      { word: 'Fossil fuels', meaning: 'Nhiên liệu hóa thạch' },
      { word: 'Kinetic energy', meaning: 'Động năng' },
      { word: 'Intermittent', meaning: 'Gián đoạn / Không liên tục' },
      { word: 'Greenhouse gases', meaning: 'Khí nhà kính' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main characteristic of renewable energy?',
        options: [
          'It is very expensive to use every day',
          'It comes from sources that are replenished naturally',
          'It is only available in very hot countries',
          'It produces a lot of carbon emissions'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Renewable energy is energy derived from natural sources that are replenished at a higher rate..." '
      },
      {
        id: 'q2',
        text: 'How does solar power generate electricity?',
        options: [
          'By burning coal and gas',
          'By using photovoltaic cells to convert sunlight',
          'By capturing the movement of the wind',
          'By digging deep into the Earth'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Solar power uses photovoltaic cells to convert sunlight directly into electricity."'
      },
      {
        id: 'q3',
        text: 'What does "intermittent" mean in the context of wind and solar energy?',
        options: [
          'They are always available 24/7',
          'They are not constant and depend on weather or time',
          'They are too powerful for normal batteries',
          'They are very easy to store'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...some renewable sources, like solar and wind, are intermittent."'
      },
      {
        id: 'q4',
        text: 'Why are advanced battery systems being developed?',
        options: [
          'To make computers work faster',
          'To store renewable energy for use when the source is not available',
          'To replace the sun and wind completely',
          'To help cars go faster on the highway'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...developing advanced battery systems to store energy for use when the sun is not shining."'
      },
      {
        id: 'q5',
        text: 'What is a major benefit of using renewable energy sources?',
        options: [
          'They produce little to no greenhouse gases',
          'They are more expensive than oil',
          'They make the air look more colorful',
          'They only work for large companies'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản khẳng định: "One major benefit... is that they produce little to no greenhouse gases during operation."'
      }
    ]
  },
  {
    id: 'b1-36',
    title: 'The Core of Analytical Thinking',
    level: 'B1',
    content: [
      "Analytical thinking is the ability to deconstruct complex information into smaller, more manageable parts.",
      "It involves a step-by-step approach to problem-solving, relying on logic and evidence rather than emotion.",
      "The first step in this process is gathering all relevant data and verifying its accuracy.",
      "An analytical thinker looks for patterns and trends that might not be obvious at first glance.",
      "By identifying the strengths and weaknesses of different arguments, one can make more objective decisions.",
      "This skill is essential in data science, where professionals must interpret large datasets to find meaningful insights.",
      "Unlike intuitive thinking, which is fast and automatic, analytical thinking requires conscious effort and focus.",
      "Visual tools like flowcharts or tables are often used to organize thoughts and simplify complex systems.",
      "In the workplace, being analytical helps employees identify the root cause of an issue before it escalates.",
      "Critical to this process is the ability to remain unbiased and consider all available information fairly.",
      "As artificial intelligence handles more routine tasks, human analytical thinking becomes even more valuable.",
      "Mastering this mindset allows individuals to navigate through misinformation and reach logical conclusions."
    ],
    vocabulary: [
      { word: 'Deconstruct', meaning: 'Phân tích / Tháo dỡ (cấu trúc)' },
      { word: 'Manageable', meaning: 'Dễ quản lý / Dễ xử lý' },
      { word: 'Objective', meaning: 'Khách quan' },
      { word: 'Datasets', meaning: 'Tập dữ liệu' },
      { word: 'Unbiased', meaning: 'Không thiên vị / Công tâm' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the primary goal of analytical thinking?',
        options: [
          'To make decisions based on strong emotions',
          'To deconstruct complex information into smaller parts',
          'To finish all tasks as quickly as possible',
          'To ignore all the evidence provided'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Analytical thinking is the ability to deconstruct complex information into smaller, more manageable parts."'
      },
      {
        id: 'q2',
        text: 'What does an analytical thinker look for in data?',
        options: [
          'The most colorful images',
          'Patterns and trends that might not be obvious',
          'The opinion of the most famous person',
          'Only the data that supports their own ideas'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "An analytical thinker looks for patterns and trends that might not be obvious at first glance."'
      },
      {
        id: 'q3',
        text: 'How does analytical thinking differ from intuitive thinking?',
        options: [
          'It is faster and happens automatically',
          'It requires conscious effort and focus',
          'It is only used by artists and musicians',
          'It does not require any logic or evidence'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Unlike intuitive thinking... analytical thinking requires conscious effort and focus."'
      },
      {
        id: 'q4',
        text: 'Which tools are mentioned as helpful for organizing thoughts?',
        options: [
          'Social media platforms',
          'Flowcharts and tables',
          'Traditional paper newspapers',
          'Television and radio'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Visual tools like flowcharts or tables are often used to organize thoughts..." '
      },
      {
        id: 'q5',
        text: 'Why is human analytical thinking becoming more valuable in the age of AI?',
        options: [
          'Because AI cannot do any work at all',
          'Because AI handles routine tasks, leaving complex analysis to humans',
          'Because computers are becoming slower over time',
          'Because humans can type faster than machines'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "As artificial intelligence handles more routine tasks, human analytical thinking becomes even more valuable."'
      }
    ]
  },
  {
    id: 'b1-37',
    title: 'The Connected World of IoT',
    level: 'B1',
    content: [
      "The Internet of Things, or IoT, refers to the billions of physical devices around the world that are now connected to the internet.",
      "These devices range from ordinary household objects like smart light bulbs to sophisticated industrial tools.",
      "By adding sensors and connectivity, these objects can collect and share data without human intervention.",
      "The primary goal of IoT is to create a more efficient and automated world for both individuals and businesses.",
      "In a smart home, for example, a thermostat can learn your preferences and adjust the temperature automatically.",
      "In agriculture, IoT sensors can monitor soil moisture and trigger irrigation systems only when necessary.",
      "This technology significantly reduces waste and improves the management of natural resources.",
      "However, the massive number of connected devices creates new vulnerabilities for cyberattacks.",
      "Data privacy is a major concern, as IoT devices often collect sensitive information about our daily habits.",
      "To ensure security, developers must implement strong encryption and regular software updates for all devices.",
      "As 5G technology expands, the speed and reliability of IoT networks will improve dramatically.",
      "In the future, IoT will be integrated into almost every aspect of our lives, from healthcare to transportation."
    ],
    vocabulary: [
      { word: 'Sophisticated', meaning: 'Tinh vi / Phức tạp' },
      { word: 'Intervention', meaning: 'Sự can thiệp' },
      { word: 'Irrigation', meaning: 'Sự tưới tiêu' },
      { word: 'Vulnerabilities', meaning: 'Điểm yếu / Lỗ hổng' },
      { word: 'Reliability', meaning: 'Sự tin cậy' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does "IoT" stand for in technology?',
        options: [
          'Internal Office Tasks',
          'Internet of Things',
          'International Online Training',
          'Input Output Timing'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "The Internet of Things, or IoT..." '
      },
      {
        id: 'q2',
        text: 'How do IoT devices collect and share data?',
        options: [
          'By asking humans to type in the information',
          'Through sensors and connectivity without human intervention',
          'By using paper reports sent by mail',
          'By only connecting to a computer with a cable'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "By adding sensors and connectivity, these objects can collect and share data without human intervention."'
      },
      {
        id: 'q3',
        text: 'How can IoT benefit agriculture?',
        options: [
          'By making the tractors look more modern',
          'By monitoring soil moisture and triggering irrigation systems',
          'By replacing all the farmers with robots',
          'By increasing the price of vegetables'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...sensors can monitor soil moisture and trigger irrigation systems only when necessary."'
      },
      {
        id: 'q4',
        text: 'What is a major concern regarding the growth of IoT?',
        options: [
          'The devices are too small to see',
          'Cyberattacks and data privacy vulnerabilities',
          'The devices don\'t use any electricity',
          'Nobody wants to buy smart devices'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...the massive number of connected devices creates new vulnerabilities for cyberattacks."'
      },
      {
        id: 'q5',
        text: 'What will improve the speed and reliability of IoT networks?',
        options: [
          'The expansion of 5G technology',
          'Using longer cables for every device',
          'Turning off the devices at night',
          'Using older software versions'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản khẳng định: "As 5G technology expands, the speed and reliability of IoT networks will improve..." '
      }
    ]
  },
  {
    id: 'b1-38',
    title: 'Effective Workplace Communication',
    level: 'B1',
    content: [
      "Workplace communication is the exchange of information and ideas within an organization.",
      "Effective communication is vital for building strong teams and achieving business goals.",
      "It involves not only speaking and writing clearly but also practicing active listening.",
      "Active listening means giving full attention to the speaker and confirming that you understand their message.",
      "In a professional setting, clarity and conciseness help prevent misunderstandings and save time.",
      "Written communication, such as emails and reports, should be professional and easy to follow.",
      "Non-verbal cues, like body language and tone of voice, also play a huge role in how messages are received.",
      "Constructive feedback is essential for personal growth and improving the quality of work.",
      "Open communication channels encourage employees to share creative ideas and report potential issues.",
      "Digital tools like Slack or Microsoft Teams have revolutionized how modern offices stay connected.",
      "However, over-reliance on digital tools can sometimes lead to a lack of personal connection between colleagues.",
      "Mastering these communication skills is key to career advancement and leadership success."
    ],
    vocabulary: [
      { word: 'Exchange', meaning: 'Sự trao đổi' },
      { word: 'Conciseness', meaning: 'Sự ngắn gọn / Súc tích' },
      { word: 'Constructive', meaning: 'Mang tính xây dựng' },
      { word: 'Channels', meaning: 'Kênh (giao tiếp)' },
      { word: 'Advancement', meaning: 'Sự tiến bộ / Thăng tiến' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is "active listening" according to the text?',
        options: [
          'Thinking about what to say next while the other person is talking',
          'Giving full attention to the speaker and confirming understanding',
          'Listening to music while working on a project',
          'Only listening to the boss and ignoring colleagues'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Active listening means giving full attention to the speaker and confirming that you understand..." '
      },
      {
        id: 'q2',
        text: 'Why are clarity and conciseness important in a professional setting?',
        options: [
          'To make the emails look longer and more impressive',
          'To prevent misunderstandings and save time',
          'To show that you know many difficult words',
          'To avoid talking to people in person'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...clarity and conciseness help prevent misunderstandings and save time."'
      },
      {
        id: 'q3',
        text: 'What is "constructive feedback" used for?',
        options: [
          'To criticize someone so they feel bad',
          'For personal growth and improving the quality of work',
          'To finish the work faster without thinking',
          'To replace all meetings with written reports'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Constructive feedback is essential for personal growth and improving the quality of work."'
      },
      {
        id: 'q4',
        text: 'What is a potential downside of over-relying on digital tools?',
        options: [
          'The tools are too expensive to buy',
          'A lack of personal connection between colleagues',
          'The tools make the internet run slower',
          'Nobody knows how to use a keyboard anymore'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...over-reliance on digital tools can sometimes lead to a lack of personal connection..." '
      },
      {
        id: 'q5',
        text: 'Which elements are part of non-verbal cues?',
        options: [
          'Only the specific words written in an email',
          'Body language and tone of voice',
          'The speed of the computer processor',
          'The length of a formal report'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "Non-verbal cues, like body language and tone of voice, also play a huge role..." '
      }
    ]
  },
  {
    id: 'b1-39',
    title: 'Strategies for Conflict Resolution',
    level: 'B1',
    content: [
      "Conflict is a natural part of any workplace where people with different backgrounds interact.",
      "Conflict resolution is the process of finding a peaceful and professional solution to a disagreement.",
      "The first step is to address the issue early before it escalates into a larger problem.",
      "It is important to remain objective and focus on the specific behavior or issue rather than the person.",
      "Active listening is crucial, as each party needs to feel that their perspective is being heard and understood.",
      "Finding common ground is an effective way to start the conversation toward a mutual agreement.",
      "In many cases, a compromise is necessary, where both sides give up something to reach a solution.",
      "Staying calm and using a neutral tone of voice helps prevent the situation from becoming too emotional.",
      "Sometimes, a neutral third party or mediator is needed to facilitate the discussion fairly.",
      "The ultimate goal is a 'win-win' outcome where the relationship between colleagues remains strong.",
      "Documenting the agreed-upon solution ensures that everyone is clear about the next steps.",
      "Mastering conflict resolution creates a more harmonious and productive environment for everyone."
    ],
    vocabulary: [
      { word: 'Escalates', meaning: 'Leo thang / Trở nên nghiêm trọng' },
      { word: 'Neutral', meaning: 'Trung lập' },
      { word: 'Mediator', meaning: 'Người hòa giải' },
      { word: 'Facilitate', meaning: 'Tạo điều kiện / Thúc đẩy' },
      { word: 'Harmonious', meaning: 'Hòa hợp' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the best time to address a conflict according to the text?',
        options: [
          'After everyone has become very angry',
          'Early, before the situation escalates',
          'Only if the boss notices the problem',
          'Never, it is better to ignore it'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "The first step is to address the issue early before it escalates into a larger problem."'
      },
      {
        id: 'q2',
        text: 'What should you focus on when resolving a disagreement?',
        options: [
          'The personality of the other person',
          'The specific behavior or issue',
          'Who earned more money last month',
          'Winning the argument at any cost'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...focus on the specific behavior or issue rather than the person."'
      },
      {
        id: 'q3',
        text: 'How can "common ground" help in a conflict?',
        options: [
          'It helps to start the conversation toward a mutual agreement',
          'It makes the conflict last longer',
          'It is a place where people go to fight',
          'It helps to prove that the other person is wrong'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản nêu: "Finding common ground is an effective way to start the conversation toward a mutual agreement."'
      },
      {
        id: 'q4',
        text: 'What is the role of a "mediator"?',
        options: [
          'To choose a winner and a loser',
          'To facilitate the discussion fairly as a neutral third party',
          'To ignore the problem until it goes away',
          'To give more work to both people'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...a neutral third party or mediator is needed to facilitate the discussion fairly."'
      },
      {
        id: 'q5',
        text: 'What is the "win-win" outcome mentioned in the text?',
        options: [
          'When both people lose their jobs',
          'When the relationship stays strong and both parties benefit',
          'When one person gets everything they want',
          'When nobody talks to each other anymore'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "The ultimate goal is a \'win-win\' outcome where the relationship... remains strong."'
      }
    ]
  },
  {
    id: 'b1-40',
    title: 'Fundamentals of Project Management',
    level: 'B1',
    content: [
      "Project management is the application of processes, methods, and skills to achieve specific objectives.",
      "A project is temporary, meaning it has a defined beginning and end, unlike routine business operations.",
      "The first phase is 'Initiation', where the goal and feasibility of the project are clearly defined.",
      "During the 'Planning' stage, managers create a detailed roadmap and identify the necessary resources.",
      "Setting 'milestones' is essential for tracking progress and ensuring the project stays on schedule.",
      "The 'Execution' phase involves the actual work, where the team performs tasks to build the final product.",
      "Effective communication is crucial during execution to keep all stakeholders informed of any changes.",
      "Managers must also monitor 'constraints', such as time, budget, and scope, to prevent project failure.",
      "Risk management involves identifying potential problems early and developing plans to minimize their impact.",
      "In software development, 'Agile' is a popular method that focuses on continuous improvement and flexibility.",
      "The final stage is 'Closure', where the project is officially finished and the results are evaluated.",
      "A successful project manager balances technical skills with leadership to deliver high-quality results."
    ],
    vocabulary: [
      { word: 'Feasibility', meaning: 'Tính khả thi' },
      { word: 'Milestones', meaning: 'Cột mốc quan trọng' },
      { word: 'Stakeholders', meaning: 'Các bên liên quan' },
      { word: 'Constraints', meaning: 'Ràng buộc / Hạn chế' },
      { word: 'Closure', meaning: 'Sự kết thúc / Đóng dự án' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What makes a project different from routine business operations?',
        options: [
          'It is much more expensive',
          'It is temporary with a defined beginning and end',
          'It doesn\'t require any planning',
          'It is done only by one person'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "A project is temporary, meaning it has a defined beginning and end, unlike routine business operations."'
      },
      {
        id: 'q2',
        text: 'What happens during the "Planning" stage?',
        options: [
          'The project is officially finished',
          'Managers create a detailed roadmap and identify resources',
          'The team starts the actual work immediately',
          'The goal of the project is deleted'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "During the \'Planning\' stage, managers create a detailed roadmap and identify the necessary resources."'
      },
      {
        id: 'q3',
        text: 'Why are "milestones" important in project management?',
        options: [
          'To make the project more expensive',
          'For tracking progress and ensuring the project stays on schedule',
          'To hire more employees',
          'To change the name of the project'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Setting \'milestones\' is essential for tracking progress and ensuring the project stays on schedule."'
      },
      {
        id: 'q4',
        text: 'What are the three common "constraints" managers must monitor?',
        options: [
          'Computers, desks, and chairs',
          'Time, budget, and scope',
          'Emails, phone calls, and meetings',
          'Colors, fonts, and images'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Managers must also monitor \'constraints\', such as time, budget, and scope..." '
      },
      {
        id: 'q5',
        text: 'What is "Agile" in the context of software development?',
        options: [
          'A type of fast computer processor',
          'A method focusing on continuous improvement and flexibility',
          'A specific coding language for projects',
          'A way to finish a project in one day'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "In software development, \'Agile\' is a popular method that focuses on continuous improvement and flexibility."'
      }
    ]
  },
  {
    id: 'b1-41',
    title: 'The Rise of Automation and Robotics',
    level: 'B1',
    content: [
      "Automation is the use of technology to perform tasks with minimal human assistance.",
      "In the industrial sector, robots are used to handle repetitive and dangerous jobs on assembly lines.",
      "These machines can work 24 hours a day without getting tired, significantly increasing production efficiency.",
      "However, automation is not just about physical robots; it also includes 'software bots' that handle data.",
      "Robotic Process Automation (RPA) allows companies to automate routine office tasks like data entry.",
      "By delegating boring tasks to machines, human workers can focus on more creative and strategic work.",
      "One major concern is that automation might replace many traditional jobs in manufacturing and services.",
      "Despite this fear, history shows that technology often creates new types of jobs that did not exist before.",
      "The field of robotics requires experts in mechanical engineering, electronics, and computer programming.",
      "Collaborative robots, or 'cobots,' are designed to work safely alongside humans in a shared workspace.",
      "As sensors and AI improve, robots are becoming smarter and more capable of handling complex environments.",
      "Embracing automation is essential for countries and companies that want to remain competitive in the future."
    ],
    vocabulary: [
      { word: 'Minimal', meaning: 'Tối thiểu' },
      { word: 'Repetitive', meaning: 'Lặp đi lặp lại' },
      { word: 'Delegating', meaning: 'Giao phó / Ủy thác' },
      { word: 'Strategic', meaning: 'Mang tính chiến lược' },
      { word: 'Collaborative', meaning: 'Mang tính hợp tác' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the basic definition of automation?',
        options: [
          'Hiring more people to do the work manually',
          'The use of technology to perform tasks with minimal human help',
          'Making robots that look exactly like humans',
          'Selling old machines to buy new ones'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Automation is the use of technology to perform tasks with minimal human assistance."'
      },
      {
        id: 'q2',
        text: 'What is a major advantage of industrial robots?',
        options: [
          'They can work 24 hours a day without getting tired',
          'They are much cheaper than any software',
          'They don\'t require any electricity',
          'They can think and feel like people'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản giải thích: "These machines can work 24 hours a day... increasing production efficiency."'
      },
      {
        id: 'q3',
        text: 'What does "Robotic Process Automation (RPA)" do?',
        options: [
          'It builds cars in a factory',
          'It automates routine office tasks like data entry',
          'It helps people cook food at home',
          'It fixes broken computers automatically'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "RPA allows companies to automate routine office tasks like data entry."'
      },
      {
        id: 'q4',
        text: 'What are "cobots"?',
        options: [
          'Robots that work only in space',
          'Collaborative robots designed to work safely alongside humans',
          'Software that replaces all managers',
          'Robots that can talk to animals'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Collaborative robots, or \'cobots,\' are designed to work safely alongside humans."'
      },
      {
        id: 'q5',
        text: 'What is a common fear regarding automation?',
        options: [
          'That machines will become too colorful',
          'That automation might replace many traditional jobs',
          'That robots will learn how to sleep',
          'That technology will become slower over time'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "One major concern is that automation might replace many traditional jobs..." '
      }
    ]
  },
  {
    id: 'b1-42',
    title: 'The Evolution of E-commerce',
    level: 'B1',
    content: [
      "E-commerce, or electronic commerce, is the buying and selling of goods and services over the internet.",
      "Since the late 1990s, e-commerce has grown from a niche market into a global phenomenon.",
      "The most common model is B2C (Business-to-Consumer), where companies sell directly to individual shoppers.",
      "Another important model is B2B (Business-to-Business), involving transactions between different companies.",
      "One of the biggest advantages for consumers is the convenience of shopping from home at any time.",
      "Online marketplaces allow users to compare prices and read reviews before making a purchase decision.",
      "Secure payment gateways ensure that credit card information and personal data are protected during transactions.",
      "Logistics and supply chain management are critical for delivering products quickly and efficiently to customers.",
      "Many e-commerce platforms use AI algorithms to suggest products based on a user's browsing history.",
      "Mobile commerce, or m-commerce, is rising fast as more people use smartphones to shop through apps.",
      "Despite its success, e-commerce faces challenges like cybersecurity threats and the environmental impact of packaging.",
      "As digital technology advances, e-commerce will continue to reshape the traditional retail industry worldwide."
    ],
    vocabulary: [
      { word: 'Phenomenon', meaning: 'Hiện tượng' },
      { word: 'Transactions', meaning: 'Giao dịch' },
      { word: 'Gateways', meaning: 'Cổng (thanh toán)' },
      { word: 'Logistics', meaning: 'Hậu cần / Vận chuyển' },
      { word: 'Retail', meaning: 'Bán lẻ' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does "B2C" stand for in e-commerce?',
        options: [
          'Back to Center',
          'Business-to-Consumer',
          'Buying to Conserve',
          'Banking to Company'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "The most common model is B2C (Business-to-Consumer)..."'
      },
      {
        id: 'q2',
        text: 'What is a major advantage of e-commerce for consumers?',
        options: [
          'They have to travel long distances to shop',
          'The convenience of shopping from home at any time',
          'They cannot compare prices online',
          'Products are always more expensive than in stores'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "One of the biggest advantages for consumers is the convenience of shopping from home..." '
      },
      {
        id: 'q3',
        text: 'Why are "payment gateways" important?',
        options: [
          'To make the website look more colorful',
          'To ensure that personal data and credit card info are protected',
          'To slow down the buying process',
          'To help people find the nearest physical store'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Secure payment gateways ensure that credit card information... are protected."'
      },
      {
        id: 'q4',
        text: 'What is "m-commerce"?',
        options: [
          'Shopping only for music online',
          'Shopping through mobile devices like smartphones',
          'A system for sending paper mail to customers',
          'Selling products only to male customers'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Mobile commerce, or m-commerce, is rising fast as more people use smartphones to shop..." '
      },
      {
        id: 'q5',
        text: 'What is a challenge that e-commerce still faces?',
        options: [
          'Nobody likes shopping online anymore',
          'Cybersecurity threats and environmental impact of packaging',
          'Computers are becoming too small to use',
          'The internet is only available in the morning'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "...e-commerce faces challenges like cybersecurity threats and the environmental impact of packaging."'
      }
    ]
  },
  {
    id: 'b1-43',
    title: 'The Rise of the Sharing Economy',
    level: 'B1',
    content: [
      "The sharing economy is an economic model based on sharing underutilized assets or services.",
      "Instead of buying and owning everything, individuals can rent or borrow items from others through digital platforms.",
      "This model is often called peer-to-peer (P2P) because it connects people directly without a traditional middleman.",
      "Companies like Uber and Airbnb have become global leaders by transforming transportation and hospitality.",
      "One of the biggest benefits is cost-effectiveness, allowing consumers to access services at a lower price.",
      "For providers, the sharing economy offers an opportunity to earn extra income from their existing property.",
      "Trust is the foundation of this system, maintained through online reviews and rating systems for both parties.",
      "Digital tools enable real-time tracking and secure payments, making the process smooth and reliable.",
      "The sharing economy also promotes sustainability by encouraging people to use existing resources more efficiently.",
      "However, it faces legal challenges regarding labor rights and traditional business regulations.",
      "Some critics worry that this model creates unfair competition for established companies like taxi services.",
      "Despite the debate, the sharing economy continues to grow as more sectors adopt collaborative consumption."
    ],
    vocabulary: [
      { word: 'Underutilized', meaning: 'Chưa được sử dụng hết công suất' },
      { word: 'Peer-to-peer', meaning: 'Ngang hàng (trực tiếp giữa cá nhân)' },
      { word: 'Middleman', meaning: 'Người trung gian' },
      { word: 'Hospitality', meaning: 'Ngành dịch vụ khách hàng (nhà hàng, khách sạn)' },
      { word: 'Collaborative', meaning: 'Mang tính hợp tác' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the sharing economy based on?',
        options: [
          'Buying as many new products as possible',
          'Sharing underutilized assets or services',
          'Only selling products to large governments',
          'Ignoring all digital technology'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "The sharing economy is an economic model based on sharing underutilized assets or services."'
      },
      {
        id: 'q2',
        text: 'Why is this model often called "peer-to-peer"?',
        options: [
          'Because it connects people directly without a traditional middleman',
          'Because only students (peers) can use it',
          'Because it is only for buying expensive cars',
          'Because it requires a lot of computers'
        ],
        correctAnswerIndex: 0,
        explanation: 'Văn bản giải thích: "...peer-to-peer (P2P) because it connects people directly without a traditional middleman."'
      },
      {
        id: 'q3',
        text: 'What is considered the foundation of the sharing economy?',
        options: [
          'The price of gasoline',
          'Trust maintained through reviews and ratings',
          'The location of the office',
          'The number of employees in a company'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Trust is the foundation of this system, maintained through online reviews and rating systems..." '
      },
      {
        id: 'q4',
        text: 'How does the sharing economy promote sustainability?',
        options: [
          'By making products more expensive',
          'By encouraging more efficient use of existing resources',
          'By building more factories in cities',
          'By preventing people from traveling'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...promotes sustainability by encouraging people to use existing resources more efficiently."'
      },
      {
        id: 'q5',
        text: 'What is a major challenge for the sharing economy?',
        options: [
          'Nobody wants to save money anymore',
          'Legal challenges regarding labor rights and regulations',
          'The internet is becoming too fast to handle',
          'There are no more cars or houses to share'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "...it faces legal challenges regarding labor rights and traditional business regulations."'
      }
    ]
  },
  {
    id: 'b1-44',
    title: 'The Era of Cloud Computing',
    level: 'B1',
    content: [
      "Cloud computing is the delivery of computing services over the internet, including storage and servers.",
      "Instead of storing data on a local hard drive, users can access their files from any device with an internet connection.",
      "One of the primary benefits is scalability, allowing companies to increase or decrease their resources as needed.",
      "This 'on-demand' model helps businesses save money because they only pay for the resources they actually use.",
      "Cloud services are generally divided into three categories: Infrastructure, Platform, and Software as a Service.",
      "SaaS, or Software as a Service, allows users to run applications directly through a web browser without installing them.",
      "Cloud computing also facilitates collaboration, as multiple people can edit the same document simultaneously from different locations.",
      "Data backup and disaster recovery are much easier and more reliable when using cloud-based solutions.",
      "However, security remains a top priority, as sensitive data is stored on remote servers managed by third parties.",
      "Companies must use strong encryption and multi-factor authentication to protect their information in the cloud.",
      "High-speed internet is essential, as slow connections can hinder the performance of cloud-based applications.",
      "As more industries undergo digital transformation, cloud computing will remain the foundation of modern IT infrastructure."
    ],
    vocabulary: [
      { word: 'Scalability', meaning: 'Khả năng mở rộng' },
      { word: 'On-demand', meaning: 'Theo yêu cầu' },
      { word: 'Simultaneously', meaning: 'Đồng thời' },
      { word: 'Encryption', meaning: 'Mã hóa' },
      { word: 'Infrastructure', meaning: 'Cơ sở hạ tầng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Where is data typically stored in cloud computing?',
        options: [
          'On a local hard drive in your computer',
          'On remote servers accessed over the internet',
          'On a physical USB flash drive',
          'In a paper notebook kept in the office'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Cloud computing is the delivery of computing services over the internet..." và "Instead of storing data on a local hard drive..." '
      },
      {
        id: 'q2',
        text: 'What does "scalability" mean for a company?',
        options: [
          'The ability to buy more office chairs',
          'The ability to increase or decrease computing resources as needed',
          'The process of making the company logo larger',
          'Learning how to use a traditional scale'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "One of the primary benefits is scalability, allowing companies to increase or decrease their resources as needed."'
      },
      {
        id: 'q3',
        text: 'What is a benefit of the "Software as a Service" (SaaS) model?',
        options: [
          'Users must install every program on their computer',
          'Users can run applications directly through a web browser',
          'Applications only work when there is no internet',
          'It makes the computer hardware much heavier'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "SaaS... allows users to run applications directly through a web browser without installing them."'
      },
      {
        id: 'q4',
        text: 'How does the cloud improve collaboration?',
        options: [
          'By preventing people from talking to each other',
          'By allowing multiple people to edit the same document simultaneously',
          'By making everyone work in the same physical room',
          'By deleting old files automatically'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...multiple people can edit the same document simultaneously from different locations."'
      },
      {
        id: 'q5',
        text: 'What is a common security measure used in cloud computing?',
        options: [
          'Writing passwords on a sticky note',
          'Strong encryption and multi-factor authentication',
          'Turning off the computer every hour',
          'Sharing account details with everyone in the company'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "Companies must use strong encryption and multi-factor authentication to protect their information..." '
      }
    ]
  },
  {
    id: 'b1-45',
    title: 'The Impact of Big Data',
    level: 'B1',
    content: [
      "Big Data refers to extremely large datasets that may be analyzed computationally to reveal patterns and trends.",
      "The concept is often described by the three 'Vs': Volume, Velocity, and Variety.",
      "Volume represents the massive amount of data generated every second by social media and sensors.",
      "Velocity refers to the incredible speed at which new data is created and moved around the world.",
      "Variety means that data comes in many forms, such as text, images, videos, and GPS signals.",
      "Traditional database software is often unable to manage or process such complex information efficiently.",
      "By using advanced analytics, companies can find hidden insights that help them improve their services.",
      "For example, retailers use Big Data to predict what customers will want to buy during the next season.",
      "In healthcare, analyzing large datasets can lead to earlier diagnosis of diseases and better patient care.",
      "However, the collection of so much information raises serious concerns about individual privacy and data misuse.",
      "Data scientists are professionals who specialize in extracting valuable knowledge from these huge datasets.",
      "As the world becomes more digital, Big Data will continue to play a central role in every modern industry."
    ],
    vocabulary: [
      { word: 'Datasets', meaning: 'Tập dữ liệu' },
      { word: 'Velocity', meaning: 'Tốc độ' },
      { word: 'Unstructured', meaning: 'Phi cấu trúc' },
      { word: 'Insights', meaning: 'Thông tin chi tiết / Sự hiểu biết sâu sắc' },
      { word: 'Diagnosis', meaning: 'Sự chẩn đoán' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What are the three "Vs" used to describe Big Data?',
        options: [
          'Value, Vision, and Voice',
          'Volume, Velocity, and Variety',
          'Video, Virtual, and View',
          'Version, Vector, and Voltage'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "The concept is often described by the three \'Vs\': Volume, Velocity, and Variety."'
      },
      {
        id: 'q2',
        text: 'What does "Variety" mean in the context of Big Data?',
        options: [
          'The data is always the same type',
          'The data comes in many forms like text, images, and videos',
          'The data is very expensive to buy',
          'The data is only available in one country'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Variety means that data comes in many forms, such as text, images, videos..." '
      },
      {
        id: 'q3',
        text: 'Why is traditional software often not enough for Big Data?',
        options: [
          'It is too colorful for professional work',
          'It is unable to manage or process such complex and massive information',
          'It only works on mobile phones',
          'It was made before the internet existed'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Traditional database software is often unable to manage or process such complex information efficiently."'
      },
      {
        id: 'q4',
        text: 'How can Big Data help in the healthcare industry?',
        options: [
          'By making the medicine taste better',
          'By leading to earlier diagnosis of diseases and better patient care',
          'By replacing all the doctors with computers',
          'By making the hospitals larger'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...analyzing large datasets can lead to earlier diagnosis of diseases and better patient care."'
      },
      {
        id: 'q5',
        text: 'What is a major concern regarding Big Data collection?',
        options: [
          'The data is too small to see',
          'Individual privacy and data misuse',
          'The data is only collected in the morning',
          'Nobody knows how to store data anymore'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "...the collection of so much information raises serious concerns about individual privacy and data misuse."'
      }
    ]
  },
  {
    id: 'b1-46',
    title: 'The Landscape of Extended Reality (XR)',
    level: 'B1',
    content: [
      "Extended Reality, or XR, is an umbrella term that includes Virtual Reality, Augmented Reality, and Mixed Reality.",
      "XR technology aims to merge the physical and digital worlds to create fully immersive experiences.",
      "While AR adds digital elements to a live view, Mixed Reality (MR) allows these elements to interact with the real world.",
      "For instance, in MR, a digital ball could bounce off a real table in your living room.",
      "The potential of XR extends far beyond gaming and entertainment into fields like engineering and education.",
      "Architects use XR to walk through digital versions of buildings before the actual construction begins.",
      "In the automotive industry, engineers use XR to design and test new car models in a virtual space.",
      "Remote collaboration is greatly enhanced by XR, as team members can meet in a shared virtual office.",
      "One of the biggest hurdles for XR is the high cost and bulkiness of the current hardware.",
      "Researchers are working on making XR glasses lighter and more comfortable for long-term use.",
      "As 5G and AI continue to evolve, the latency of XR systems will decrease, making them more realistic.",
      "The future of XR promises a world where digital information is seamlessly integrated into our daily vision."
    ],
    vocabulary: [
      { word: 'Umbrella term', meaning: 'Thuật ngữ bao quát' },
      { word: 'Merge', meaning: 'Hợp nhất / Kết hợp' },
      { word: 'Hurdles', meaning: 'Rào cản / Trở ngại' },
      { word: 'Bulkiness', meaning: 'Sự cồng kềnh' },
      { word: 'Seamlessly', meaning: 'Một cách mượt mà / Không tì vết' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does the term "XR" represent?',
        options: [
          'Only Virtual Reality for gaming',
          'An umbrella term for VR, AR, and MR',
          'A new type of extra-fast internet',
          'A special computer for movie editing'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Extended Reality, or XR, is an umbrella term that includes Virtual Reality, Augmented Reality, and Mixed Reality."'
      },
      {
        id: 'q2',
        text: 'How is Mixed Reality (MR) different from basic AR?',
        options: [
          'MR is much cheaper than AR',
          'MR allows digital elements to interact with the real world',
          'MR only works in complete darkness',
          'MR does not use any digital information'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Mixed Reality (MR) allows these elements to interact with the real world."'
      },
      {
        id: 'q3',
        text: 'How do architects use XR technology?',
        options: [
          'To sell old furniture online',
          'To walk through digital versions of buildings before construction',
          'To paint the walls of a real house faster',
          'To calculate the price of land automatically'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Architects use XR to walk through digital versions of buildings..." '
      },
      {
        id: 'q4',
        text: 'What is a major "hurdle" for XR mentioned in the text?',
        options: [
          'The lack of interesting games',
          'The high cost and bulkiness of hardware',
          'The internet being too fast to handle',
          'People not wanting to use technology'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "One of the biggest hurdles for XR is the high cost and bulkiness of the current hardware."'
      },
      {
        id: 'q5',
        text: 'Which technology will help make XR systems more realistic by decreasing latency?',
        options: [
          'Traditional radio waves',
          '5G and AI evolution',
          'Better quality paper for printing',
          'Using larger computer screens'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "As 5G and AI continue to evolve, the latency of XR systems will decrease..." '
      }
    ]
  },
  {
    id: 'b1-47',
    title: 'Challenges in Modern Cybersecurity',
    level: 'B1',
    content: [
      "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.",
      "As more people work remotely, the number of cyber threats has increased significantly worldwide.",
      "One common attack is 'phishing,' where hackers send fake emails to steal sensitive information.",
      "Another dangerous threat is 'ransomware,' which locks a user's files until a sum of money is paid.",
      "To prevent these attacks, organizations use firewalls to monitor and control incoming network traffic.",
      "Encryption is a vital tool that turns data into a secret code, making it unreadable to unauthorized users.",
      "Multi-factor authentication (MFA) adds an extra layer of security by requiring two or more forms of identity.",
      "Regular software updates are essential for fixing 'vulnerabilities' that hackers might exploit.",
      "A strong password policy is the first line of defense for both individuals and large corporations.",
      "Cybersecurity is not just a technical issue; it also involves educating people to recognize suspicious activity.",
      "Security professionals often perform 'penetration testing' to find and fix weaknesses in their own systems.",
      "As AI becomes more advanced, it is being used to detect and respond to cyber threats in real time."
    ],
    vocabulary: [
      { word: 'Phishing', meaning: 'Tấn công giả mạo (để lấy thông tin)' },
      { word: 'Ransomware', meaning: 'Mã độc tống tiền' },
      { word: 'Unreadable', meaning: 'Không thể đọc được' },
      { word: 'Vulnerabilities', meaning: 'Lỗ hổng bảo mật' },
      { word: 'Penetration testing', meaning: 'Kiểm thử xâm nhập' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is "phishing" according to the text?',
        options: [
          'A type of sport using computers',
          'Fake emails sent by hackers to steal information',
          'A way to make the internet faster',
          'A special tool for fixing broken hardware'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "One common attack is \'phishing,\' where hackers send fake emails to steal sensitive information."'
      },
      {
        id: 'q2',
        text: 'How does "encryption" protect data?',
        options: [
          'By deleting the data permanently',
          'By turning data into a secret code that is unreadable to unauthorized users',
          'By making the data available to everyone',
          'By storing the data on a paper notebook'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Encryption is a vital tool that turns data into a secret code, making it unreadable..." '
      },
      {
        id: 'q3',
        text: 'What is the purpose of "multi-factor authentication" (MFA)?',
        options: [
          'To make the login process much slower for no reason',
          'To add an extra layer of security by requiring multiple forms of identity',
          'To help users remember their passwords better',
          'To allow anyone to access the account easily'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Multi-factor authentication (MFA) adds an extra layer of security by requiring two or more forms of identity."'
      },
      {
        id: 'q4',
        text: 'Why are regular software updates important?',
        options: [
          'To make the icons look more colorful',
          'For fixing vulnerabilities that hackers might exploit',
          'To use more memory on the computer',
          'To make the computer run slower'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Regular software updates are essential for fixing \'vulnerabilities\' that hackers might exploit."'
      },
      {
        id: 'q5',
        text: 'What is "penetration testing"?',
        options: [
          'A way to steal data from other companies',
          'A process to find and fix weaknesses in one\'s own system',
          'A test to see how fast a person can type',
          'A method for building new office buildings'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "Security professionals often perform \'penetration testing\' to find and fix weaknesses..." '
      }
    ]
  },
  {
    id: 'b1-48',
    title: 'The Growth of the Digital Economy',
    level: 'B1',
    content: [
      "The digital economy refers to an economy that is based on digital computing technologies.",
      "It encompasses all economic activities that occur on the internet and through digital platforms.",
      "A major driver of this growth is digital transformation, where traditional businesses adopt new technologies.",
      "E-commerce, online banking, and digital advertising are core components of the digital economy.",
      "One significant advantage is that digital businesses can reach a global audience with very low costs.",
      "Small entrepreneurs can now sell their products or services to customers in different countries easily.",
      "The digital economy also creates many new job opportunities in fields like software development and data analysis.",
      "Digital payments have become the standard, reducing the need for physical cash in many urban areas.",
      "However, the 'digital divide' remains a challenge, as some people still lack access to high-speed internet.",
      "Governments are working on new policies to regulate digital markets and ensure fair competition.",
      "Data has become the most valuable resource in this economy, often called the 'new oil'.",
      "As artificial intelligence evolves, it will further accelerate the expansion of the digital economy worldwide."
    ],
    vocabulary: [
      { word: 'Encompasses', meaning: 'Bao gồm / Bao trùm' },
      { word: 'Transformation', meaning: 'Sự chuyển đổi' },
      { word: 'Entrepreneurs', meaning: 'Nhà khởi nghiệp' },
      { word: 'Digital divide', meaning: 'Khoảng cách kỹ thuật số' },
      { word: 'Accelerate', meaning: 'Thúc đẩy / Làm nhanh thêm' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the "digital economy" based on?',
        options: [
          'Traditional farming and agriculture',
          'Digital computing technologies and the internet',
          'Building physical roads and bridges',
          'Printing paper newspapers only'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "The digital economy refers to an economy that is based on digital computing technologies."'
      },
      {
        id: 'q2',
        text: 'What is "digital transformation"?',
        options: [
          'Closing down all physical stores',
          'The process of traditional businesses adopting new technologies',
          'Changing the color of a company logo',
          'Only using computers during the night'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "...digital transformation, where traditional businesses adopt new technologies."'
      },
      {
        id: 'q3',
        text: 'What is a benefit of the digital economy for small entrepreneurs?',
        options: [
          'They have to pay more for electricity',
          'They can reach a global audience with very low costs',
          'They no longer need to have any customers',
          'They must travel to every country to sell products'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "One significant advantage is that digital businesses can reach a global audience with very low costs."'
      },
      {
        id: 'q4',
        text: 'What does the "digital divide" refer to?',
        options: [
          'The math needed to build a computer',
          'The gap between people with and without access to high-speed internet',
          'A special type of software for dividing large numbers',
          'The time it takes to download a movie'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "...the \'digital divide\' remains a challenge, as some people still lack access to high-speed internet."'
      },
      {
        id: 'q5',
        text: 'What is often called the "new oil" in the digital economy?',
        options: [
          'Physical gold',
          'Electricity',
          'Data',
          'Solar energy'
        ],
        correctAnswerIndex: 2,
        explanation: 'Văn bản khẳng định: "Data has become the most valuable resource in this economy, often called the \'new oil\'."'
      }
    ]
  },
  {
    id: 'b1-49',
    title: 'Understanding the Creator Economy',
    level: 'B1',
    content: [
      "The creator economy is a software-enabled ecosystem that allows content creators to earn money from their skills.",
      "It consists of millions of independent individuals, such as vloggers, writers, and online teachers.",
      "In the past, creators relied heavily on traditional media companies to reach a large audience.",
      "Today, social media platforms allow creators to build a direct connection with their followers.",
      "Monetization is no longer limited to advertisements; it now includes subscriptions and digital products.",
      "Many creators focus on a 'niche audience,' providing specialized content that larger companies often ignore.",
      "High engagement is more valuable than just having a high number of followers without interaction.",
      "Data analytics help creators understand their audience's preferences and improve their content strategy.",
      "One major challenge is the 'algorithm,' which determines how many people see a creator's work.",
      "Burnout is a common risk because creators often feel pressured to produce new content constantly.",
      "However, the creator economy offers unparalleled freedom and the potential for financial independence.",
      "As digital tools become more accessible, the number of professional creators is expected to grow globally."
    ],
    vocabulary: [
      { word: 'Ecosystem', meaning: 'Hệ sinh thái' },
      { word: 'Monetization', meaning: 'Sự kiếm tiền (từ nội dung)' },
      { word: 'Niche audience', meaning: 'Khán giả ngách (nhóm nhỏ chuyên biệt)' },
      { word: 'Engagement', meaning: 'Sự tương tác' },
      { word: 'Unparalleled', meaning: 'Vô song / Không gì sánh kịp' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Who are the primary participants in the creator economy?',
        options: [
          'Only large television companies',
          'Independent individuals like vloggers and online teachers',
          'Factory workers building computers',
          'Government officials in charge of taxes'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "It consists of millions of independent individuals, such as vloggers, writers, and online teachers."'
      },
      {
        id: 'q2',
        text: 'How do modern creators reach their audience compared to the past?',
        options: [
          'By buying expensive radio stations',
          'By building a direct connection through social media platforms',
          'By sending letters to every person individually',
          'By waiting for a newspaper to interview them'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "Today, social media platforms allow creators to build a direct connection with their followers."'
      },
      {
        id: 'q3',
        text: 'What does "monetization" in this context include?',
        options: [
          'Only watching videos for free',
          'Subscriptions, digital products, and advertisements',
          'Printing paper books for libraries',
          'Trading physical products in a street market'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Monetization is no longer limited to advertisements; it now includes subscriptions and digital products."'
      },
      {
        id: 'q4',
        text: 'Why is "engagement" considered more valuable than just follower count?',
        options: [
          'Because it makes the computer run faster',
          'Because it represents real interaction with the audience',
          'Because it is easier to calculate than followers',
          'Because followers are usually fake'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn nhấn mạnh: "High engagement is more valuable than just having a high number of followers without interaction."'
      },
      {
        id: 'q5',
        text: 'What is a common risk for people working in the creator economy?',
        options: [
          'Having too much free time every day',
          'Burnout from the pressure to produce content constantly',
          'Losing their physical office building',
          'Not being allowed to use the internet'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "Burnout is a common risk because creators often feel pressured to produce new content constantly."'
      }
    ]
  },
  {
    id: 'b1-50',
    title: 'The Future of Technological Convergence',
    level: 'B1',
    content: [
      "Technological convergence occurs when different technologies evolve to perform similar tasks or work together.",
      "The smartphone is a classic example, combining a phone, a camera, a computer, and a GPS into one device.",
      "Today, the intersection of AI, IoT, and Big Data is creating 'smart' systems that can think and act independently.",
      "In healthcare, convergence allows wearable sensors to send data to the cloud for AI to analyze in real time.",
      "This synergy leads to faster innovations and the development of entirely new industries and services.",
      "Modern cars are no longer just mechanical vehicles; they are high-tech computers on wheels.",
      "The boundaries between the physical, biological, and digital worlds are becoming increasingly blurred.",
      "Cross-disciplinary skills are now more valuable than ever in the global job market.",
      "Professionals who understand both technology and human behavior are in high demand by top companies.",
      "One challenge of convergence is the complexity of managing such integrated and massive systems.",
      "Ensuring that these hybrid systems are secure and ethical is a major responsibility for future developers.",
      "As we move forward, technological convergence will continue to redefine the limits of human possibility."
    ],
    vocabulary: [
      { word: 'Convergence', meaning: 'Sự hội tụ' },
      { word: 'Intersection', meaning: 'Sự giao thoa / Ngã tư' },
      { word: 'Synergy', meaning: 'Sự hiệp lực / Cộng hưởng' },
      { word: 'Blurred', meaning: 'Bị làm mờ / Không rõ ràng' },
      { word: 'Hybrid', meaning: 'Hỗn hợp / Lai' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is "technological convergence"?',
        options: [
          'When technologies stop working together',
          'When different technologies evolve to perform similar tasks or work together',
          'The process of making computers much larger',
          'Using only one type of technology for everything'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "Technological convergence occurs when different technologies evolve to perform similar tasks or work together."'
      },
      {
        id: 'q2',
        text: 'Why is the smartphone a "classic example" of convergence?',
        options: [
          'Because it is very expensive to buy',
          'Because it combines many different devices like a camera and GPS into one',
          'Because it only works in one country',
          'Because it was invented a long time ago'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản giải thích: "The smartphone is a classic example, combining a phone, a camera, a computer, and a GPS into one device."'
      },
      {
        id: 'q3',
        text: 'How does convergence help in the healthcare field?',
        options: [
          'By making doctors work longer hours',
          'By allowing sensors to send data to the cloud for AI analysis',
          'By replacing all the medicine with digital files',
          'By preventing patients from using the internet'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản nêu: "...convergence allows wearable sensors to send data to the cloud for AI to analyze in real time."'
      },
      {
        id: 'q4',
        text: 'What kind of skills are becoming more valuable due to convergence?',
        options: [
          'Skills that only focus on one tiny detail',
          'Cross-disciplinary skills that combine different fields',
          'Skills that do not use any technology',
          'Traditional farming skills only'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đoạn văn viết: "Cross-disciplinary skills are now more valuable than ever in the global job market."'
      },
      {
        id: 'q5',
        text: 'What is a major challenge of managing converged systems?',
        options: [
          'The systems are becoming too simple to use',
          'The high complexity of managing integrated and massive systems',
          'Nobody wants to use smart cars anymore',
          'Computers are losing their memory over time'
        ],
        correctAnswerIndex: 1,
        explanation: 'Văn bản khẳng định: "One challenge of convergence is the complexity of managing such integrated and massive systems."'
      }
    ]
  }
];
