import { Passage } from '../types';

export const netPassages: Passage[] = [
  {
    id: 'net-1',
    title: 'What Is a Computer Network?',
    level: 'NET',
    content: [
      'A computer network is a group of computers and other devices connected together.',
      'These devices can share information, files, and internet access through the network.',
      'At home, a network may include phones, laptops, a smart TV, and a router.',
      'In schools or companies, networks are larger and usually more carefully managed.'
    ],
    vocabulary: [
      { word: 'network', meaning: 'mạng máy tính' },
      { word: 'device', meaning: 'thiết bị' },
      { word: 'share', meaning: 'chia sẻ' },
      { word: 'managed', meaning: 'được quản lý' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is a computer network?',
        options: [
          'A single phone used for communication',
          'A group of connected computers and devices',
          'A kind of computer game',
          'A storage box for files'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage says a computer network is a group of computers and other devices connected together.'
      },
      {
        id: 'q2',
        text: 'What can devices do in a network?',
        options: [
          'Only play music',
          'Only print documents',
          'Share information and internet access',
          'Work without electricity'
        ],
        correctAnswerIndex: 2,
        explanation: 'The passage states that devices can share information, files, and internet access.'
      },
      {
        id: 'q3',
        text: 'Which device is mentioned in a home network?',
        options: ['Projector', 'Router', 'Camera', 'Scanner'],
        correctAnswerIndex: 1,
        explanation: 'The passage mentions a router as part of a home network.'
      }
    ]
  },
  {
    id: 'net-2',
    title: 'Devices in a Small Network',
    level: 'NET',
    content: [
      'A small network often has different types of devices with different jobs.',
      'A laptop may be used for studying or programming, while a phone is often used for communication.',
      'A printer can be shared by many users on the same network.',
      'The router connects the local network to the internet and helps devices communicate.'
    ],
    vocabulary: [
      { word: 'printer', meaning: 'máy in' },
      { word: 'shared', meaning: 'được dùng chung' },
      { word: 'local network', meaning: 'mạng cục bộ' },
      { word: 'communicate', meaning: 'giao tiếp, liên lạc' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does the passage say about a printer?',
        options: [
          'It is only for one user',
          'It can be shared by many users',
          'It replaces a router',
          'It is used to store websites'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage says a printer can be shared by many users on the same network.'
      },
      {
        id: 'q2',
        text: 'What is one job of a router?',
        options: [
          'Writing code',
          'Sending emails by itself',
          'Connecting the local network to the internet',
          'Printing documents'
        ],
        correctAnswerIndex: 2,
        explanation: 'The router connects the local network to the internet.'
      },
      {
        id: 'q3',
        text: 'Why are different devices used in a network?',
        options: [
          'Because each device has a different job',
          'Because networks only allow three devices',
          'Because all devices do the same thing',
          'Because phones cannot join networks'
        ],
        correctAnswerIndex: 0,
        explanation: 'The first sentence says different devices have different jobs.'
      }
    ]
  },
  {
    id: 'net-3',
    title: 'LAN and WAN',
    level: 'NET',
    content: [
      'A LAN is a Local Area Network. It usually covers a small area such as a home, school, or office.',
      'A WAN is a Wide Area Network. It covers a much larger area and can connect networks in different cities or countries.',
      'The internet is the biggest example of a WAN.',
      'People often use a LAN for fast local communication and a WAN for long-distance connection.'
    ],
    vocabulary: [
      { word: 'LAN', meaning: 'mạng cục bộ' },
      { word: 'WAN', meaning: 'mạng diện rộng' },
      { word: 'covers', meaning: 'bao phủ' },
      { word: 'long-distance', meaning: 'đường dài, khoảng cách xa' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does LAN stand for?',
        options: [
          'Large Access Network',
          'Local Area Network',
          'Long Area Network',
          'Light Access Node'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage clearly says LAN means Local Area Network.'
      },
      {
        id: 'q2',
        text: 'Which is an example of a WAN?',
        options: ['A printer', 'A home Wi-Fi network', 'The internet', 'A keyboard'],
        correctAnswerIndex: 2,
        explanation: 'The passage says the internet is the biggest example of a WAN.'
      },
      {
        id: 'q3',
        text: 'Where is a LAN usually used?',
        options: [
          'In a small area such as a home or office',
          'Only between countries',
          'Only on mobile phones',
          'Only in data centers'
        ],
        correctAnswerIndex: 0,
        explanation: 'A LAN usually covers a small area such as a home, school, or office.'
      }
    ]
  },
  {
    id: 'net-4',
    title: 'IP Address Basics',
    level: 'NET',
    content: [
      'Every device on a network needs an address so that data can reach the correct destination.',
      'This address is often called an IP address.',
      'An IP address helps identify a device in the same way a home address helps identify a house.',
      'Without IP addresses, devices would have trouble sending and receiving data correctly.'
    ],
    vocabulary: [
      { word: 'IP address', meaning: 'địa chỉ IP' },
      { word: 'destination', meaning: 'điểm đến' },
      { word: 'identify', meaning: 'xác định' },
      { word: 'receive', meaning: 'nhận' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why does every device need an IP address?',
        options: [
          'To change its screen color',
          'To store all websites',
          'So data can reach the correct destination',
          'So it can become a router'
        ],
        correctAnswerIndex: 2,
        explanation: 'The passage says every device needs an address so data can reach the correct destination.'
      },
      {
        id: 'q2',
        text: 'What does an IP address help do?',
        options: [
          'Print documents',
          'Identify a device',
          'Create a new laptop',
          'Fix cables automatically'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage says an IP address helps identify a device.'
      },
      {
        id: 'q3',
        text: 'What comparison is used in the passage?',
        options: [
          'An IP address is like a school bag',
          'An IP address is like a phone battery',
          'An IP address is like a home address',
          'An IP address is like a game level'
        ],
        correctAnswerIndex: 2,
        explanation: 'The passage compares an IP address to a home address.'
      }
    ]
  },
  {
    id: 'net-5',
    title: 'Router and Switch',
    level: 'NET',
    content: [
      'A router and a switch are both important network devices, but they do different jobs.',
      'A switch usually connects devices inside the same local network.',
      'A router connects one network to another network, such as a home network to the internet.',
      'In simple systems, people may only notice the router, but in larger systems, switches are also very important.'
    ],
    vocabulary: [
      { word: 'router', meaning: 'bộ định tuyến' },
      { word: 'switch', meaning: 'bộ chuyển mạch' },
      { word: 'local network', meaning: 'mạng cục bộ' },
      { word: 'system', meaning: 'hệ thống' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does a switch usually do?',
        options: [
          'Connect devices inside the same local network',
          'Store websites on the internet',
          'Replace all IP addresses',
          'Write network programs'
        ],
        correctAnswerIndex: 0,
        explanation: 'The passage says a switch usually connects devices inside the same local network.'
      },
      {
        id: 'q2',
        text: 'What does a router connect?',
        options: [
          'Only printers',
          'One network to another network',
          'Only laptops to phones',
          'Only one device to itself'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage says a router connects one network to another network.'
      },
      {
        id: 'q3',
        text: 'Which statement is correct?',
        options: [
          'Routers and switches always do the same job',
          'Switches are useless in large systems',
          'People may only notice the router in simple systems',
          'A switch connects a home directly to the internet in the passage'
        ],
        correctAnswerIndex: 2,
        explanation: 'The passage says that in simple systems, people may only notice the router.'
      }
    ]
  },
  {
    id: 'net-6',
    title: 'Client and Server',
    level: 'NET',
    content: [
      'In many network systems, communication happens between a client and a server.',
      'A client is the device or program that sends a request.',
      'A server is the device or program that receives the request and sends back a response.',
      'For example, when a user opens a website, the browser acts like a client and the web server sends the webpage back.'
    ],
    vocabulary: [
      { word: 'client', meaning: 'máy khách/chương trình gửi yêu cầu' },
      { word: 'server', meaning: 'máy chủ/chương trình phản hồi' },
      { word: 'request', meaning: 'yêu cầu' },
      { word: 'response', meaning: 'phản hồi' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does a client do?',
        options: [
          'Sends a request',
          'Builds a router',
          'Stores electricity',
          'Changes an IP address'
        ],
        correctAnswerIndex: 0,
        explanation: 'The passage says a client is the device or program that sends a request.'
      },
      {
        id: 'q2',
        text: 'What does a server do?',
        options: [
          'Only creates passwords',
          'Receives a request and sends back a response',
          'Disconnects all devices',
          'Prints the screen'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage says a server receives the request and sends back a response.'
      },
      {
        id: 'q3',
        text: 'In the website example, what acts like the client?',
        options: ['The router', 'The browser', 'The switch', 'The cable'],
        correctAnswerIndex: 1,
        explanation: 'The passage says the browser acts like a client.'
      }
    ]
  },
  {
    id: 'net-7',
    title: 'What Is a Packet?',
    level: 'NET',
    content: [
      'When data travels across a network, it is often broken into smaller parts called packets.',
      'Each packet carries part of the data, along with information about where it should go.',
      'At the destination, the packets are put back together in the correct order.',
      'This method helps networks send information more efficiently.'
    ],
    vocabulary: [
      { word: 'packet', meaning: 'gói dữ liệu' },
      { word: 'broken into', meaning: 'được chia thành' },
      { word: 'destination', meaning: 'điểm đến' },
      { word: 'efficiently', meaning: 'một cách hiệu quả' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is a packet?',
        options: [
          'A type of network game',
          'A small part of data sent across a network',
          'A kind of router',
          'A user account'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage says data is broken into smaller parts called packets.'
      },
      {
        id: 'q2',
        text: 'What happens at the destination?',
        options: [
          'The packets are deleted',
          'The packets are printed',
          'The packets are put back together',
          'The packets become IP addresses'
        ],
        correctAnswerIndex: 2,
        explanation: 'The passage says the packets are put back together in the correct order.'
      },
      {
        id: 'q3',
        text: 'Why are packets useful?',
        options: [
          'They help networks send information more efficiently',
          'They stop all network traffic',
          'They replace servers',
          'They make passwords stronger'
        ],
        correctAnswerIndex: 0,
        explanation: 'The final sentence says this method helps networks send information more efficiently.'
      }
    ]
  },
  {
    id: 'net-8',
    title: 'Ports in Networking',
    level: 'NET',
    content: [
      'In networking, a port is a logical point used by software to send or receive data.',
      'A device can have one IP address but use many ports for different services.',
      'For example, one port may be used by a web service while another is used by a different application.',
      'Ports help computers know which program should handle incoming data.'
    ],
    vocabulary: [
      { word: 'port', meaning: 'cổng mạng' },
      { word: 'logical point', meaning: 'điểm logic' },
      { word: 'service', meaning: 'dịch vụ' },
      { word: 'incoming data', meaning: 'dữ liệu đi vào' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is a port in networking?',
        options: [
          'A physical keyboard key',
          'A logical point used by software to send or receive data',
          'A type of hard drive',
          'A network cable'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage defines a port as a logical point used by software to send or receive data.'
      },
      {
        id: 'q2',
        text: 'Can one IP address use many ports?',
        options: ['No, never', 'Only in schools', 'Yes, for different services', 'Only with printers'],
        correctAnswerIndex: 2,
        explanation: 'The passage says a device can have one IP address but use many ports for different services.'
      },
      {
        id: 'q3',
        text: 'Why are ports useful?',
        options: [
          'They help computers know which program should handle data',
          'They change the router into a server',
          'They make LAN bigger than WAN',
          'They stop websites from loading'
        ],
        correctAnswerIndex: 0,
        explanation: 'The passage says ports help computers know which program should handle incoming data.'
      }
    ]
  },
  {
    id: 'net-9',
    title: 'TCP and UDP',
    level: 'NET',
    content: [
      'TCP and UDP are two common transport protocols in networking.',
      'TCP is connection-oriented and is used when reliable delivery is important.',
      'UDP is simpler and often faster, but it does not guarantee that every packet will arrive.',
      'Because of this, different applications choose TCP or UDP depending on their needs.'
    ],
    vocabulary: [
      { word: 'TCP', meaning: 'giao thức TCP' },
      { word: 'UDP', meaning: 'giao thức UDP' },
      { word: 'reliable delivery', meaning: 'truyền dữ liệu đáng tin cậy' },
      { word: 'guarantee', meaning: 'đảm bảo' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Which protocol is connection-oriented?',
        options: ['IP', 'UDP', 'TCP', 'DNS'],
        correctAnswerIndex: 2,
        explanation: 'The passage says TCP is connection-oriented.'
      },
      {
        id: 'q2',
        text: 'What does UDP not guarantee?',
        options: [
          'That every packet will arrive',
          'That software can run',
          'That a router has power',
          'That devices have IP addresses'
        ],
        correctAnswerIndex: 0,
        explanation: 'The passage says UDP does not guarantee that every packet will arrive.'
      },
      {
        id: 'q3',
        text: 'Why do applications choose different protocols?',
        options: [
          'Because all protocols are identical',
          'Because different applications have different needs',
          'Because TCP is always wrong',
          'Because UDP replaces all networks'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage says applications choose TCP or UDP depending on their needs.'
      }
    ]
  },
  {
    id: 'net-10',
    title: 'DNS and Domain Names',
    level: 'NET',
    content: [
      'People usually remember domain names such as example.com more easily than long IP addresses.',
      'DNS stands for Domain Name System.',
      'Its job is to translate a domain name into an IP address so a computer can find the correct server.',
      'Without DNS, users would need to remember many numbers instead of simple website names.'
    ],
    vocabulary: [
      { word: 'domain name', meaning: 'tên miền' },
      { word: 'DNS', meaning: 'hệ thống phân giải tên miền' },
      { word: 'translate', meaning: 'chuyển đổi' },
      { word: 'server', meaning: 'máy chủ' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does DNS stand for?',
        options: [
          'Data Network Service',
          'Domain Name System',
          'Direct Node Server',
          'Digital Number Source'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage clearly says DNS stands for Domain Name System.'
      },
      {
        id: 'q2',
        text: 'What is the job of DNS?',
        options: [
          'To build websites',
          'To translate a domain name into an IP address',
          'To replace routers',
          'To store files on a laptop'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage says DNS translates a domain name into an IP address.'
      },
      {
        id: 'q3',
        text: 'Why is DNS helpful for users?',
        options: [
          'It lets users remember simple website names instead of many numbers',
          'It makes every website free',
          'It removes the need for servers',
          'It changes TCP into UDP'
        ],
        correctAnswerIndex: 0,
        explanation: 'The final sentence says that without DNS, users would need to remember many numbers.'
      }
    ]
  },
{
  id: 'net-11',
  title: 'HTTP and HTTPS',
  level: 'NET',
  content: [
    'HTTP and HTTPS are protocols used when browsers communicate with web servers.',
    'HTTP sends data in a simple way, but it does not protect the data strongly.',
    'HTTPS is more secure because it uses encryption to protect information during transmission.',
    'For this reason, modern websites often use HTTPS, especially when users enter passwords or personal data.'
  ],
  vocabulary: [
    { word: 'protocol', meaning: 'giao thức' },
    { word: 'secure', meaning: 'an toàn, bảo mật' },
    { word: 'encryption', meaning: 'mã hóa' },
    { word: 'transmission', meaning: 'quá trình truyền dữ liệu' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What are HTTP and HTTPS used for?',
      options: [
        'Printing files in a local network',
        'Communication between browsers and web servers',
        'Building physical cables',
        'Replacing DNS servers'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says HTTP and HTTPS are used when browsers communicate with web servers.'
    },
    {
      id: 'q2',
      text: 'Why is HTTPS more secure than HTTP?',
      options: [
        'Because it uses more colors',
        'Because it uses encryption',
        'Because it removes IP addresses',
        'Because it is only used at home'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says HTTPS is more secure because it uses encryption.'
    },
    {
      id: 'q3',
      text: 'When is HTTPS especially important?',
      options: [
        'When users enter passwords or personal data',
        'When people watch television',
        'When a printer is offline',
        'When no server is used'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage says HTTPS is especially important when users enter passwords or personal data.'
    }
  ]
},
{
  id: 'net-12',
  title: 'What Is a Socket?',
  level: 'NET',
  content: [
    'In network programming, a socket is a software endpoint used for communication between two machines or programs.',
    'A programmer can use sockets to send and receive data through a network connection.',
    'Sockets are often used in client-server systems.',
    'For example, a client program may open a socket to connect to a server and exchange messages.'
  ],
  vocabulary: [
    { word: 'socket', meaning: 'socket mạng/điểm cuối giao tiếp' },
    { word: 'endpoint', meaning: 'điểm cuối' },
    { word: 'connection', meaning: 'kết nối' },
    { word: 'exchange', meaning: 'trao đổi' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is a socket in network programming?',
      options: [
        'A physical keyboard port',
        'A software endpoint for communication',
        'A type of router cable',
        'A file storage system'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage defines a socket as a software endpoint used for communication.'
    },
    {
      id: 'q2',
      text: 'What can programmers do with sockets?',
      options: [
        'Only change screen brightness',
        'Send and receive data',
        'Build printers',
        'Remove IP addresses'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says programmers use sockets to send and receive data.'
    },
    {
      id: 'q3',
      text: 'Where are sockets often used?',
      options: [
        'Only in games without internet',
        'In client-server systems',
        'Only in switches',
        'Only in offline documents'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says sockets are often used in client-server systems.'
    }
  ]
},
{
  id: 'net-13',
  title: 'Client-Server Communication',
  level: 'NET',
  content: [
    'In a client-server model, the client starts communication by sending a request.',
    'The server listens for requests, processes them, and sends responses back.',
    'This model is common in websites, chat applications, and many online services.',
    'Understanding this pattern is important for students who want to learn network programming.'
  ],
  vocabulary: [
    { word: 'model', meaning: 'mô hình' },
    { word: 'request', meaning: 'yêu cầu' },
    { word: 'process', meaning: 'xử lý' },
    { word: 'response', meaning: 'phản hồi' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Who starts communication in the client-server model?',
      options: ['The cable', 'The switch', 'The client', 'The printer'],
      correctAnswerIndex: 2,
      explanation: 'The passage says the client starts communication by sending a request.'
    },
    {
      id: 'q2',
      text: 'What does the server do after receiving a request?',
      options: [
        'Turns off the network',
        'Processes it and sends a response',
        'Deletes the client',
        'Changes the browser language'
      ],
      correctAnswerIndex: 1,
      explanation: 'The server processes requests and sends responses back.'
    },
    {
      id: 'q3',
      text: 'Why is this model important?',
      options: [
        'Because it is only used in printers',
        'Because it helps students understand network programming',
        'Because it replaces all protocols',
        'Because it removes the need for servers'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence says this pattern is important for students learning network programming.'
    }
  ]
},
{
  id: 'net-14',
  title: 'Sending Data over TCP',
  level: 'NET',
  content: [
    'TCP is often used when an application needs reliable communication.',
    'In network programming, a TCP client usually connects to a TCP server before sending data.',
    'Because TCP is connection-oriented, both sides keep track of the communication.',
    'This makes TCP useful for web services, login systems, and other applications where missing data would be a problem.'
  ],
  vocabulary: [
    { word: 'reliable communication', meaning: 'giao tiếp đáng tin cậy' },
    { word: 'connection-oriented', meaning: 'hướng kết nối' },
    { word: 'keep track of', meaning: 'theo dõi' },
    { word: 'missing data', meaning: 'dữ liệu bị thiếu/mất' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'When is TCP often used?',
      options: [
        'When reliability is important',
        'When no connection is needed',
        'Only for local printers',
        'Only for video files'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage says TCP is often used when reliable communication is needed.'
    },
    {
      id: 'q2',
      text: 'What usually happens before a TCP client sends data?',
      options: [
        'It connects to a TCP server',
        'It changes its MAC address',
        'It becomes a router',
        'It closes the browser'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage says a TCP client usually connects to a TCP server before sending data.'
    },
    {
      id: 'q3',
      text: 'Why is TCP useful for login systems?',
      options: [
        'Because it is connectionless',
        'Because missing data would be a problem',
        'Because it removes encryption',
        'Because it is always faster than UDP'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says TCP is useful where missing data would be a problem.'
    }
  ]
},
{
  id: 'net-15',
  title: 'UDP Messages',
  level: 'NET',
  content: [
    'UDP is a simpler protocol than TCP and does not require a full connection before sending data.',
    'Because of this, UDP can be faster in some situations.',
    'However, UDP does not guarantee delivery, order, or error recovery in the same way TCP does.',
    'Programmers often use UDP in applications where speed is more important than perfect reliability.'
  ],
  vocabulary: [
    { word: 'protocol', meaning: 'giao thức' },
    { word: 'guarantee delivery', meaning: 'đảm bảo dữ liệu đến nơi' },
    { word: 'order', meaning: 'thứ tự' },
    { word: 'reliability', meaning: 'độ tin cậy' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why can UDP be faster in some situations?',
      options: [
        'Because it does not require a full connection first',
        'Because it stores all packets forever',
        'Because it uses more cables',
        'Because it always checks every error'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage says UDP is faster in some situations because it does not require a full connection first.'
    },
    {
      id: 'q2',
      text: 'What does UDP not guarantee?',
      options: [
        'Electricity for devices',
        'Delivery, order, or error recovery like TCP',
        'The existence of servers',
        'The use of ports'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says UDP does not guarantee delivery, order, or error recovery in the same way TCP does.'
    },
    {
      id: 'q3',
      text: 'When do programmers often use UDP?',
      options: [
        'When speed is more important than perfect reliability',
        'When printing documents',
        'When they need stronger file storage',
        'When they want to replace DNS'
      ],
      correctAnswerIndex: 0,
      explanation: 'The final sentence says UDP is often used when speed is more important than perfect reliability.'
    }
  ]
},
{
  id: 'net-16',
  title: 'Why Latency Matters',
  level: 'NET',
  content: [
    'Latency is the delay between sending data and receiving a response.',
    'In some applications, a small amount of latency is not a serious problem.',
    'In others, such as online games, voice calls, or live control systems, high latency can create a poor user experience.',
    'This is why network engineers and programmers often care not only about speed, but also about delay.'
  ],
  vocabulary: [
    { word: 'latency', meaning: 'độ trễ' },
    { word: 'delay', meaning: 'sự chậm trễ' },
    { word: 'response', meaning: 'phản hồi' },
    { word: 'user experience', meaning: 'trải nghiệm người dùng' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is latency?',
      options: [
        'The size of a data packet',
        'The delay between sending data and getting a response',
        'A type of cable',
        'A web browser setting'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage defines latency as the delay between sending data and receiving a response.'
    },
    {
      id: 'q2',
      text: 'Which applications may suffer from high latency?',
      options: [
        'Online games and voice calls',
        'Offline notebooks only',
        'Printed documents',
        'Simple calculators without networks'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage mentions online games, voice calls, and live control systems.'
    },
    {
      id: 'q3',
      text: 'Why do network engineers care about latency?',
      options: [
        'Because delay can affect real applications',
        'Because latency removes the need for protocols',
        'Because it changes IP into DNS',
        'Because it replaces bandwidth completely'
      ],
      correctAnswerIndex: 0,
      explanation: 'The final sentence says engineers and programmers care about delay, not only speed.'
    }
  ]
},
{
  id: 'net-17',
  title: 'A Simple Chat Application',
  level: 'NET',
  content: [
    'A simple chat application usually has at least one server and two or more clients.',
    'Each client sends messages to the server.',
    'The server then forwards the messages to the correct clients or to all connected users.',
    'This is a common beginner project in network programming because it teaches sending, receiving, and handling multiple connections.'
  ],
  vocabulary: [
    { word: 'chat application', meaning: 'ứng dụng trò chuyện' },
    { word: 'forwards', meaning: 'chuyển tiếp' },
    { word: 'connected users', meaning: 'người dùng đang kết nối' },
    { word: 'multiple connections', meaning: 'nhiều kết nối cùng lúc' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What does a simple chat application usually need?',
      options: [
        'Only one keyboard',
        'At least one server and two or more clients',
        'No network at all',
        'Only one browser tab'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says a simple chat application usually has at least one server and two or more clients.'
    },
    {
      id: 'q2',
      text: 'What does the server do in a chat application?',
      options: [
        'Turns clients into routers',
        'Forwards messages to the correct clients or all users',
        'Deletes every message',
        'Changes the operating system'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says the server forwards the messages.'
    },
    {
      id: 'q3',
      text: 'Why is a chat app a good beginner project?',
      options: [
        'Because it has no server',
        'Because it teaches sending, receiving, and handling multiple connections',
        'Because it does not use any protocol',
        'Because it replaces all websites'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence explains why it is a common beginner project.'
    }
  ]
},
{
  id: 'net-18',
  title: 'How Browsers Load Websites',
  level: 'NET',
  content: [
    'When a user enters a website name into a browser, several network steps happen in a short time.',
    'First, DNS helps find the IP address of the server.',
    'Then the browser sends a request, often using HTTP or HTTPS, and the server returns the webpage data.',
    'After that, the browser displays the page so the user can read and interact with it.'
  ],
  vocabulary: [
    { word: 'browser', meaning: 'trình duyệt' },
    { word: 'DNS', meaning: 'hệ thống phân giải tên miền' },
    { word: 'request', meaning: 'yêu cầu' },
    { word: 'interact', meaning: 'tương tác' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What helps find the IP address of the server?',
      options: ['TCP', 'DNS', 'UDP', 'A printer'],
      correctAnswerIndex: 1,
      explanation: 'The passage says DNS helps find the IP address of the server.'
    },
    {
      id: 'q2',
      text: 'What does the browser send to the server?',
      options: ['A request', 'A battery', 'A keyboard', 'A monitor'],
      correctAnswerIndex: 0,
      explanation: 'The passage says the browser sends a request.'
    },
    {
      id: 'q3',
      text: 'What happens after the server returns webpage data?',
      options: [
        'The router shuts down',
        'The browser displays the page',
        'The DNS server is deleted',
        'The IP address stops working'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence says the browser displays the page.'
    }
  ]
},
{
  id: 'net-19',
  title: 'Timeouts and Network Errors',
  level: 'NET',
  content: [
    'In real networks, communication does not always work perfectly.',
    'Sometimes a server is too slow, a packet is lost, or a connection is broken.',
    'A timeout happens when a program waits too long for a response and then stops waiting.',
    'Good network programs should be ready to handle errors and timeouts instead of assuming everything will always work.'
  ],
  vocabulary: [
    { word: 'timeout', meaning: 'hết thời gian chờ' },
    { word: 'packet is lost', meaning: 'gói dữ liệu bị mất' },
    { word: 'connection is broken', meaning: 'kết nối bị ngắt' },
    { word: 'handle errors', meaning: 'xử lý lỗi' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'When does a timeout happen?',
      options: [
        'When a user closes a laptop',
        'When a program waits too long for a response',
        'When DNS changes a domain name',
        'When a printer has no paper'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says a timeout happens when a program waits too long for a response.'
    },
    {
      id: 'q2',
      text: 'Which problem is mentioned in the passage?',
      options: [
        'A server is too slow',
        'A battery is too large',
        'A screen is too bright',
        'A mouse is disconnected from Bluetooth'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage mentions that sometimes a server is too slow.'
    },
    {
      id: 'q3',
      text: 'What should good network programs do?',
      options: [
        'Assume everything always works',
        'Ignore all errors',
        'Be ready to handle errors and timeouts',
        'Only use local files'
      ],
      correctAnswerIndex: 2,
      explanation: 'The final sentence says good network programs should be ready to handle errors and timeouts.'
    }
  ]
},
{
  id: 'net-20',
  title: 'Basic Network Security',
  level: 'NET',
  content: [
    'Network security is important because data often travels between many devices and systems.',
    'If communication is not protected, attackers may try to read, change, or block information.',
    'Security methods such as encryption, strong passwords, and safe server design can reduce risk.',
    'For students of network programming, learning security basics is important because a working program should also be a safe program.'
  ],
  vocabulary: [
    { word: 'network security', meaning: 'bảo mật mạng' },
    { word: 'attacker', meaning: 'kẻ tấn công' },
    { word: 'reduce risk', meaning: 'giảm rủi ro' },
    { word: 'safe program', meaning: 'chương trình an toàn' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why is network security important?',
      options: [
        'Because data travels between devices and systems',
        'Because printers need more color',
        'Because local files never change',
        'Because every router is a server'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage says network security is important because data often travels between many devices and systems.'
    },
    {
      id: 'q2',
      text: 'What may attackers try to do?',
      options: [
        'Read, change, or block information',
        'Build stronger passwords for users',
        'Repair broken monitors',
        'Increase the size of a LAN physically'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage says attackers may try to read, change, or block information.'
    },
    {
      id: 'q3',
      text: 'Why should network programming students learn security basics?',
      options: [
        'Because only secure code can print data',
        'Because a working program should also be a safe program',
        'Because TCP replaces security',
        'Because security is only for large companies'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence says a working program should also be a safe program.'
    }
  ]
},
{
  id: 'net-21',
  title: 'MAC Address Basics',
  level: 'NET',
  content: [
    'Besides IP addresses, network devices also use MAC addresses.',
    'A MAC address is a hardware address used inside a local network.',
    'While an IP address can change in some situations, a MAC address is usually tied to the network card of a device.',
    'Both IP addresses and MAC addresses are important, but they are used for different purposes.'
  ],
  vocabulary: [
    { word: 'MAC address', meaning: 'địa chỉ MAC' },
    { word: 'hardware address', meaning: 'địa chỉ phần cứng' },
    { word: 'network card', meaning: 'card mạng' },
    { word: 'purpose', meaning: 'mục đích' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is a MAC address?',
      options: [
        'A website name',
        'A hardware address used inside a local network',
        'A password for Wi-Fi',
        'A kind of server software'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says a MAC address is a hardware address used inside a local network.'
    },
    {
      id: 'q2',
      text: 'What is usually tied to the network card of a device?',
      options: ['The browser', 'The MAC address', 'The domain name', 'The webpage'],
      correctAnswerIndex: 1,
      explanation: 'The passage states that a MAC address is usually tied to the network card of a device.'
    },
    {
      id: 'q3',
      text: 'What does the passage say about IP and MAC addresses?',
      options: [
        'They are exactly the same',
        'Only MAC addresses are important',
        'They are both important but used for different purposes',
        'Only IP addresses are used in networking'
      ],
      correctAnswerIndex: 2,
      explanation: 'The final sentence says both are important, but they are used for different purposes.'
    }
  ]
},
{
  id: 'net-22',
  title: 'What Is DHCP?',
  level: 'NET',
  content: [
    'DHCP stands for Dynamic Host Configuration Protocol.',
    'Its job is to give devices network settings automatically when they join a network.',
    'These settings may include an IP address, a gateway, and DNS information.',
    'Without DHCP, users would often need to enter these details manually.'
  ],
  vocabulary: [
    { word: 'DHCP', meaning: 'giao thức cấp phát cấu hình động' },
    { word: 'automatically', meaning: 'tự động' },
    { word: 'gateway', meaning: 'cổng mạng/gateway' },
    { word: 'manually', meaning: 'thủ công' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What does DHCP stand for?',
      options: [
        'Digital Host Control Program',
        'Dynamic Host Configuration Protocol',
        'Direct Hardware Connection Port',
        'Data Host Communication Path'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage clearly says DHCP stands for Dynamic Host Configuration Protocol.'
    },
    {
      id: 'q2',
      text: 'What does DHCP do?',
      options: [
        'Print documents on the network',
        'Give devices network settings automatically',
        'Replace the router completely',
        'Block all incoming traffic'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says DHCP gives devices network settings automatically when they join a network.'
    },
    {
      id: 'q3',
      text: 'What might users need to do without DHCP?',
      options: [
        'Build their own server',
        'Enter network details manually',
        'Change the MAC address daily',
        'Use only TCP'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence says that without DHCP, users would often need to enter details manually.'
    }
  ]
},
{
  id: 'net-23',
  title: 'The Role of DNS in Daily Internet Use',
  level: 'NET',
  content: [
    'DNS works in the background almost every time people use the internet.',
    'When a user types a website name, DNS helps convert that name into an IP address.',
    'This process is important because computers need IP addresses to communicate with servers.',
    'Without DNS, using the internet would be much less convenient for ordinary users.'
  ],
  vocabulary: [
    { word: 'background', meaning: 'ở phía nền, hoạt động ngầm' },
    { word: 'convert', meaning: 'chuyển đổi' },
    { word: 'communicate', meaning: 'giao tiếp' },
    { word: 'convenient', meaning: 'thuận tiện' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'When does DNS often work?',
      options: [
        'Only when a computer is turned off',
        'In the background during daily internet use',
        'Only in local games',
        'Only when printing files'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says DNS works in the background almost every time people use the internet.'
    },
    {
      id: 'q2',
      text: 'Why is DNS important?',
      options: [
        'Because computers need IP addresses to communicate with servers',
        'Because it replaces web browsers',
        'Because it stores all passwords',
        'Because it builds physical networks'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage says computers need IP addresses to communicate with servers.'
    },
    {
      id: 'q3',
      text: 'What would happen without DNS?',
      options: [
        'The internet would become more secure automatically',
        'Ordinary users would have a less convenient experience',
        'All routers would stop working forever',
        'TCP would disappear'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence says internet use would be much less convenient for ordinary users without DNS.'
    }
  ]
},
{
  id: 'net-24',
  title: 'Bandwidth and Speed',
  level: 'NET',
  content: [
    'People often use the word speed when talking about internet connections, but bandwidth is also an important idea.',
    'Bandwidth refers to how much data can be transferred in a certain amount of time.',
    'A connection with higher bandwidth can usually carry more data at once.',
    'However, a good network experience also depends on other factors such as latency and stability.'
  ],
  vocabulary: [
    { word: 'bandwidth', meaning: 'băng thông' },
    { word: 'transferred', meaning: 'được truyền đi' },
    { word: 'at once', meaning: 'cùng một lúc' },
    { word: 'stability', meaning: 'độ ổn định' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What does bandwidth refer to?',
      options: [
        'How bright a screen is',
        'How much data can be transferred in a certain time',
        'How many websites a user likes',
        'How many cables are in a room'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage defines bandwidth as how much data can be transferred in a certain amount of time.'
    },
    {
      id: 'q2',
      text: 'What can a connection with higher bandwidth usually do?',
      options: [
        'Carry more data at once',
        'Remove latency completely',
        'Replace DNS',
        'Block all traffic'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage says a connection with higher bandwidth can usually carry more data at once.'
    },
    {
      id: 'q3',
      text: 'What else affects network experience besides bandwidth?',
      options: [
        'Only printer quality',
        'Latency and stability',
        'Keyboard size',
        'Monitor color'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence mentions latency and stability as other important factors.'
    }
  ]
},
{
  id: 'net-25',
  title: 'How a Router Helps a Home Network',
  level: 'NET',
  content: [
    'In a home network, the router is usually one of the most important devices.',
    'It helps connect phones, laptops, and other devices to the local network and to the internet.',
    'The router can also manage traffic between devices and decide where data should go.',
    'Because of this, if the router has a problem, many parts of the home network may stop working correctly.'
  ],
  vocabulary: [
    { word: 'router', meaning: 'bộ định tuyến' },
    { word: 'traffic', meaning: 'luồng dữ liệu mạng' },
    { word: 'manage', meaning: 'quản lý' },
    { word: 'correctly', meaning: 'đúng cách' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why is the router important in a home network?',
      options: [
        'It is used only for printing',
        'It connects devices to the local network and the internet',
        'It replaces every laptop',
        'It stores all webpages offline'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says the router helps connect devices to the local network and to the internet.'
    },
    {
      id: 'q2',
      text: 'What else can the router do?',
      options: [
        'Write code automatically',
        'Manage traffic between devices',
        'Replace all DNS servers forever',
        'Remove all latency'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says the router can manage traffic between devices.'
    },
    {
      id: 'q3',
      text: 'What may happen if the router has a problem?',
      options: [
        'Only one webpage will change color',
        'Many parts of the home network may stop working correctly',
        'The MAC address will disappear',
        'The switch will become a browser'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence says many parts of the home network may stop working correctly.'
    }
  ]
},
{
  id: 'net-26',
  title: 'Why Programmers Need to Understand Ports',
  level: 'NET',
  content: [
    'When programmers build network applications, they often need to choose or use specific ports.',
    'Ports help operating systems know which application should receive incoming network data.',
    'For example, a web server may listen on one port, while another service listens on a different port.',
    'Without understanding ports, it can be difficult to debug connection problems or build reliable network software.'
  ],
  vocabulary: [
    { word: 'operating system', meaning: 'hệ điều hành' },
    { word: 'incoming network data', meaning: 'dữ liệu mạng đi vào' },
    { word: 'listen on a port', meaning: 'lắng nghe trên một cổng' },
    { word: 'debug', meaning: 'gỡ lỗi' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why do programmers need to understand ports?',
      options: [
        'Because ports change screen resolution',
        'Because ports help applications receive the correct incoming data',
        'Because ports replace routers',
        'Because ports are only useful for printers'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says ports help operating systems know which application should receive incoming network data.'
    },
    {
      id: 'q2',
      text: 'What does the passage say a web server may do?',
      options: [
        'Listen on one port',
        'Turn into a switch',
        'Remove all services',
        'Store MAC addresses only'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage gives the example that a web server may listen on one port.'
    },
    {
      id: 'q3',
      text: 'What can happen without understanding ports?',
      options: [
        'Programs automatically become secure',
        'It may be hard to debug connection problems',
        'Browsers will stop using HTTP',
        'DNS will not work at all'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence says it can be difficult to debug connection problems without understanding ports.'
    }
  ]
},
{
  id: 'net-27',
  title: 'A Basic Idea of Network Security',
  level: 'NET',
  content: [
    'Security in networking is not only about blocking attackers.',
    'It is also about protecting data, controlling access, and reducing the chance of mistakes.',
    'A secure system may use strong passwords, encryption, and careful design.',
    'For programmers, security should be part of the design from the beginning, not something added only at the end.'
  ],
  vocabulary: [
    { word: 'protecting data', meaning: 'bảo vệ dữ liệu' },
    { word: 'controlling access', meaning: 'kiểm soát quyền truy cập' },
    { word: 'careful design', meaning: 'thiết kế cẩn thận' },
    { word: 'from the beginning', meaning: 'ngay từ đầu' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is network security about besides blocking attackers?',
      options: [
        'Only changing passwords daily',
        'Protecting data, controlling access, and reducing mistakes',
        'Only using larger servers',
        'Removing all ports'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says security is also about protecting data, controlling access, and reducing mistakes.'
    },
    {
      id: 'q2',
      text: 'Which of these may be used in a secure system?',
      options: [
        'Weak passwords',
        'Encryption',
        'Broken connections',
        'Random IP changes'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says a secure system may use encryption.'
    },
    {
      id: 'q3',
      text: 'When should programmers think about security?',
      options: [
        'Only after release',
        'Only when errors happen',
        'From the beginning',
        'Only in very large companies'
      ],
      correctAnswerIndex: 2,
      explanation: 'The final sentence says security should be part of the design from the beginning.'
    }
  ]
},
{
  id: 'net-28',
  title: 'How Online Games Use Networks',
  level: 'NET',
  content: [
    'Online games use networks to send information between players and game servers.',
    'This information may include player position, actions, scores, and other updates.',
    'Because games often need fast communication, latency is a very important factor.',
    'If delay is too high, the game may feel slow or unfair to players.'
  ],
  vocabulary: [
    { word: 'player position', meaning: 'vị trí người chơi' },
    { word: 'actions', meaning: 'hành động' },
    { word: 'updates', meaning: 'các bản cập nhật/thông tin cập nhật' },
    { word: 'unfair', meaning: 'không công bằng' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What kind of information do online games send through networks?',
      options: [
        'Only printer settings',
        'Player position, actions, scores, and updates',
        'Only passwords',
        'Only website names'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage says games may send player position, actions, scores, and other updates.'
    },
    {
      id: 'q2',
      text: 'Why is latency important in online games?',
      options: [
        'Because games need fast communication',
        'Because games do not use servers',
        'Because latency changes passwords',
        'Because latency builds routers'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage says games often need fast communication, so latency is very important.'
    },
    {
      id: 'q3',
      text: 'What can happen if delay is too high?',
      options: [
        'The game may feel slow or unfair',
        'The router becomes a browser',
        'The IP address disappears forever',
        'The game stops using graphics'
      ],
      correctAnswerIndex: 0,
      explanation: 'The final sentence says the game may feel slow or unfair to players.'
    }
  ]
},
{
  id: 'net-29',
  title: 'Why Connections Sometimes Fail',
  level: 'NET',
  content: [
    'A network connection can fail for many reasons.',
    'A cable may be damaged, a server may be offline, the router may have a problem, or the software may use the wrong address or port.',
    'For network programmers, this means errors are a normal part of development and testing.',
    'Good software should report problems clearly and try to recover when possible.'
  ],
  vocabulary: [
    { word: 'connection fail', meaning: 'kết nối bị lỗi' },
    { word: 'offline', meaning: 'ngoại tuyến, không hoạt động trên mạng' },
    { word: 'report clearly', meaning: 'báo lỗi rõ ràng' },
    { word: 'recover', meaning: 'phục hồi' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Which is mentioned as a reason for connection failure?',
      options: [
        'A damaged cable',
        'A bright screen',
        'A large keyboard',
        'A low battery in a mouse'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage mentions that a cable may be damaged.'
    },
    {
      id: 'q2',
      text: 'What does connection failure mean for network programmers?',
      options: [
        'Errors are a normal part of development and testing',
        'They never need to test programs',
        'Servers are no longer important',
        'All problems come from hardware only'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage says errors are a normal part of development and testing.'
    },
    {
      id: 'q3',
      text: 'What should good software do?',
      options: [
        'Ignore problems',
        'Hide all errors from users',
        'Report problems clearly and try to recover',
        'Close immediately without warning'
      ],
      correctAnswerIndex: 2,
      explanation: 'The final sentence says good software should report problems clearly and try to recover when possible.'
    }
  ]
},
{
  id: 'net-30',
  title: 'Why Network Programming Is Useful',
  level: 'NET',
  content: [
    'Network programming is useful because many modern applications depend on communication between machines.',
    'Websites, chat apps, video calls, online games, and cloud services all use networks.',
    'By learning network programming, students can better understand how these systems work in real life.',
    'It also helps programmers build applications that are not only functional, but also reliable and secure.'
  ],
  vocabulary: [
    { word: 'depend on', meaning: 'phụ thuộc vào' },
    { word: 'cloud services', meaning: 'dịch vụ đám mây' },
    { word: 'functional', meaning: 'hoạt động đúng chức năng' },
    { word: 'reliable', meaning: 'đáng tin cậy' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why is network programming useful?',
      options: [
        'Because modern applications often depend on communication between machines',
        'Because it removes the need for servers',
        'Because it only works for games',
        'Because it replaces all programming languages'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage says network programming is useful because many modern applications depend on communication between machines.'
    },
    {
      id: 'q2',
      text: 'Which applications are mentioned in the passage?',
      options: [
        'Websites, chat apps, video calls, online games, and cloud services',
        'Only printers and scanners',
        'Only offline notebooks',
        'Only calculators'
      ],
      correctAnswerIndex: 0,
      explanation: 'The passage lists websites, chat apps, video calls, online games, and cloud services.'
    },
    {
      id: 'q3',
      text: 'What can learning network programming help programmers do?',
      options: [
        'Build applications that are functional, reliable, and secure',
        'Remove all bugs forever',
        'Stop using the internet',
        'Replace operating systems'
      ],
      correctAnswerIndex: 0,
      explanation: 'The final sentence says it helps programmers build applications that are functional, reliable, and secure.'
    }
  ]
}
];