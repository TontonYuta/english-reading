import { Passage } from '../types';

export const toeicPassages: Passage[] = [
  {
    id: 'toeic-1',
    title: 'Schedule Change for Staff Meeting',
    level: 'TOEIC',
    content: [
      'The monthly staff meeting at Brightwell Electronics has been moved from Tuesday to Wednesday this week.',
      'It will begin at 9:30 a.m. in Conference Room B on the third floor.',
      'The change was made because several department managers will attend a training session on Tuesday morning.',
      'During the meeting, employees will review sales results, discuss customer feedback, and welcome two new team members.'
    ],
    vocabulary: [
      { word: 'staff meeting', meaning: 'cuộc họp nhân viên' },
      { word: 'department manager', meaning: 'trưởng bộ phận' },
      { word: 'training session', meaning: 'buổi đào tạo' },
      { word: 'customer feedback', meaning: 'phản hồi của khách hàng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why was the meeting moved?',
        options: [
          'The conference room is under repair',
          'Several managers will attend training',
          'The sales report is unfinished',
          'Two new employees are absent'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage states that the meeting was changed because several department managers will attend a training session on Tuesday morning.'
      },
      {
        id: 'q2',
        text: 'Where will the meeting take place?',
        options: [
          'In the training center',
          'On the second floor',
          'In Conference Room B',
          'In the marketing office'
        ],
        correctAnswerIndex: 2,
        explanation: 'The second sentence clearly says the meeting will begin in Conference Room B on the third floor.'
      },
      {
        id: 'q3',
        text: 'What will employees do during the meeting?',
        options: [
          'Interview new managers',
          'Review sales results and discuss feedback',
          'Move to a new office',
          'Attend an outside seminar'
        ],
        correctAnswerIndex: 1,
        explanation: 'The final sentence says employees will review sales results, discuss customer feedback, and welcome two new team members.'
      }
    ]
  },
  {
    id: 'toeic-2',
    title: 'Notice about Office Maintenance',
    level: 'TOEIC',
    content: [
      'Please be aware that the air-conditioning system on the fifth floor will be serviced this Saturday.',
      'As a result, employees are asked not to enter the area between 8:00 a.m. and 2:00 p.m.',
      'The maintenance team will inspect all vents and replace old filters during that time.',
      'If you need any materials from the fifth floor, please collect them by Friday evening.'
    ],
    vocabulary: [
      { word: 'serviced', meaning: 'được bảo trì' },
      { word: 'maintenance team', meaning: 'đội bảo trì' },
      { word: 'inspect', meaning: 'kiểm tra' },
      { word: 'replace', meaning: 'thay thế' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What will happen on Saturday?',
        options: [
          'A new office will open',
          'The air-conditioning system will be serviced',
          'Employees will attend a workshop',
          'The company will host visitors'
        ],
        correctAnswerIndex: 1,
        explanation: 'The first sentence says the air-conditioning system on the fifth floor will be serviced this Saturday.'
      },
      {
        id: 'q2',
        text: 'When should employees avoid the area?',
        options: [
          'From Friday evening to Saturday morning',
          'Between 8:00 a.m. and 2:00 p.m.',
          'All weekend',
          'After 2:00 p.m.'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage says employees are asked not to enter the area between 8:00 a.m. and 2:00 p.m.'
      },
      {
        id: 'q3',
        text: 'What should employees do if they need materials from the fifth floor?',
        options: [
          'Ask the maintenance team',
          'Wait until Monday',
          'Collect them by Friday evening',
          'Send an email to the manager'
        ],
        correctAnswerIndex: 2,
        explanation: 'The last sentence instructs employees to collect needed materials by Friday evening.'
      }
    ]
  },
  {
    id: 'toeic-3',
    title: 'Email about a Delivery Delay',
    level: 'TOEIC',
    content: [
      'Thank you for your recent order from Greenleaf Office Supply.',
      'We regret to inform you that your shipment of printer paper and file folders will arrive one day later than expected.',
      'The delay was caused by heavy rain that affected transportation routes in the region.',
      'Your order is now scheduled to be delivered on Thursday afternoon, and no additional shipping fee will be charged.'
    ],
    vocabulary: [
      { word: 'shipment', meaning: 'lô hàng' },
      { word: 'delay', meaning: 'sự chậm trễ' },
      { word: 'transportation route', meaning: 'tuyến vận chuyển' },
      { word: 'shipping fee', meaning: 'phí vận chuyển' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What problem is mentioned in the email?',
        options: [
          'Some items are missing',
          'The order was canceled',
          'The delivery will be late',
          'The payment was rejected'
        ],
        correctAnswerIndex: 2,
        explanation: 'The second sentence says the shipment will arrive one day later than expected.'
      },
      {
        id: 'q2',
        text: 'What caused the delay?',
        options: [
          'A worker strike',
          'Heavy rain',
          'A computer error',
          'A customer complaint'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage clearly states that the delay was caused by heavy rain affecting transportation routes.'
      },
      {
        id: 'q3',
        text: 'What will the company do for the customer?',
        options: [
          'Send a replacement order',
          'Refund the full payment',
          'Charge a lower product price',
          'Waive the additional shipping fee'
        ],
        correctAnswerIndex: 3,
        explanation: 'The final sentence says no additional shipping fee will be charged.'
      }
    ]
  },
  {
    id: 'toeic-4',
    title: 'Job Advertisement for a Receptionist',
    level: 'TOEIC',
    content: [
      'Harbor View Hotel is looking for a full-time receptionist to join its front desk team.',
      'The successful applicant will greet guests, answer phone calls, and assist with check-in and check-out procedures.',
      'Applicants should have at least one year of customer service experience and basic computer skills.',
      'Interested candidates should send a résumé and cover letter by June 12.'
    ],
    vocabulary: [
      { word: 'receptionist', meaning: 'lễ tân' },
      { word: 'applicant', meaning: 'ứng viên' },
      { word: 'customer service', meaning: 'dịch vụ khách hàng' },
      { word: 'résumé', meaning: 'hồ sơ xin việc' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What position is being advertised?',
        options: [
          'Hotel manager',
          'Front desk receptionist',
          'Computer technician',
          'Housekeeping supervisor'
        ],
        correctAnswerIndex: 1,
        explanation: 'The first sentence says Harbor View Hotel is looking for a full-time receptionist.'
      },
      {
        id: 'q2',
        text: 'What is one requirement for applicants?',
        options: [
          'Five years of hotel management experience',
          'Advanced accounting skills',
          'At least one year of customer service experience',
          'A driver’s license'
        ],
        correctAnswerIndex: 2,
        explanation: 'The third sentence says applicants should have at least one year of customer service experience.'
      },
      {
        id: 'q3',
        text: 'What should interested candidates send?',
        options: [
          'A résumé and cover letter',
          'A training certificate',
          'A passport copy',
          'A list of references only'
        ],
        correctAnswerIndex: 0,
        explanation: 'The last sentence instructs interested candidates to send a résumé and cover letter.'
      }
    ]
  },
  {
    id: 'toeic-5',
    title: 'Cafeteria Renovation Announcement',
    level: 'TOEIC',
    content: [
      'The employee cafeteria at Westline Publishing will be closed for renovation from July 3 to July 7.',
      'During this period, lunch will be served in the training room on the first floor.',
      'A temporary menu with sandwiches, salads, and drinks will be available each day from 11:30 a.m. to 1:30 p.m.',
      'The company appreciates your patience while the dining area is improved.'
    ],
    vocabulary: [
      { word: 'renovation', meaning: 'việc cải tạo' },
      { word: 'temporary', meaning: 'tạm thời' },
      { word: 'menu', meaning: 'thực đơn' },
      { word: 'appreciate', meaning: 'đánh giá cao, cảm kích' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Why will the cafeteria be closed?',
        options: [
          'It will be cleaned',
          'It is being renovated',
          'The staff is on vacation',
          'A new manager is arriving'
        ],
        correctAnswerIndex: 1,
        explanation: 'The first sentence says the cafeteria will be closed for renovation.'
      },
      {
        id: 'q2',
        text: 'Where will lunch be served during the closure?',
        options: [
          'In the dining area',
          'On the second floor',
          'In the training room',
          'At a nearby restaurant'
        ],
        correctAnswerIndex: 2,
        explanation: 'The second sentence states that lunch will be served in the training room on the first floor.'
      },
      {
        id: 'q3',
        text: 'What can employees expect during this period?',
        options: [
          'No lunch service at all',
          'A limited temporary menu',
          'Free meals all week',
          'Longer lunch hours'
        ],
        correctAnswerIndex: 1,
        explanation: 'The third sentence says a temporary menu with sandwiches, salads, and drinks will be available.'
      }
    ]
  },
  {
    id: 'toeic-6',
    title: 'Memo about Travel Expense Reports',
    level: 'TOEIC',
    content: [
      'All employees who traveled for business last month must submit their expense reports by Friday, September 8.',
      'Receipts for transportation, meals, and hotel stays should be attached to the report form.',
      'The finance department will not process incomplete submissions.',
      'If you have questions about reimbursement, please contact Ms. Patel in Accounting.'
    ],
    vocabulary: [
      { word: 'expense report', meaning: 'báo cáo chi phí' },
      { word: 'receipt', meaning: 'hóa đơn, biên lai' },
      { word: 'submission', meaning: 'hồ sơ nộp lên' },
      { word: 'reimbursement', meaning: 'hoàn tiền, hoàn phí' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Who must submit an expense report?',
        options: [
          'Only department managers',
          'Employees who traveled for business last month',
          'All new employees',
          'Visitors to the company'
        ],
        correctAnswerIndex: 1,
        explanation: 'The first sentence says all employees who traveled for business last month must submit their expense reports.'
      },
      {
        id: 'q2',
        text: 'What must be attached to the form?',
        options: [
          'Business cards',
          'Travel schedules',
          'Receipts for transportation, meals, and hotel stays',
          'A manager’s personal note'
        ],
        correctAnswerIndex: 2,
        explanation: 'The second sentence lists the receipts that should be attached.'
      },
      {
        id: 'q3',
        text: 'Whom should employees contact with questions?',
        options: [
          'Ms. Patel in Accounting',
          'The travel agency',
          'The hotel manager',
          'The company president'
        ],
        correctAnswerIndex: 0,
        explanation: 'The final sentence tells employees to contact Ms. Patel in Accounting.'
      }
    ]
  },
  {
    id: 'toeic-7',
    title: 'Library Membership Reminder',
    level: 'TOEIC',
    content: [
      'City Central Library would like to remind members that annual membership fees are due by March 31.',
      'Members can renew online, by mail, or in person at the customer service desk.',
      'Those who renew before March 20 will receive a free canvas tote bag.',
      'Please note that borrowing privileges will be suspended for accounts with unpaid fees after the deadline.'
    ],
    vocabulary: [
      { word: 'membership fee', meaning: 'phí thành viên' },
      { word: 'renew', meaning: 'gia hạn' },
      { word: 'borrowing privileges', meaning: 'quyền mượn sách' },
      { word: 'deadline', meaning: 'hạn chót' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the purpose of the notice?',
        options: [
          'To announce new library hours',
          'To remind members to pay annual fees',
          'To invite members to a special event',
          'To explain how to return books'
        ],
        correctAnswerIndex: 1,
        explanation: 'The first sentence says the library would like to remind members that annual membership fees are due by March 31.'
      },
      {
        id: 'q2',
        text: 'What will members receive if they renew early?',
        options: [
          'A discount card',
          'A free book',
          'A canvas tote bag',
          'An extra library card'
        ],
        correctAnswerIndex: 2,
        explanation: 'The third sentence says those who renew before March 20 will receive a free canvas tote bag.'
      },
      {
        id: 'q3',
        text: 'What happens after the deadline if fees are unpaid?',
        options: [
          'Membership is permanently canceled',
          'Borrowing privileges are suspended',
          'The renewal fee doubles',
          'The member must visit in person'
        ],
        correctAnswerIndex: 1,
        explanation: 'The last sentence states that borrowing privileges will be suspended for accounts with unpaid fees after the deadline.'
      }
    ]
  },
  {
    id: 'toeic-8',
    title: 'Training Workshop Registration',
    level: 'TOEIC',
    content: [
      'Employees interested in the Advanced Spreadsheet Skills workshop should register by completing the online form before April 18.',
      'The workshop will be held on April 25 from 1:00 p.m. to 4:00 p.m. in Lab Room 2.',
      'Participants will learn how to use formulas, create charts, and organize large sets of data more efficiently.',
      'Because space is limited, registration will be accepted on a first-come, first-served basis.'
    ],
    vocabulary: [
      { word: 'register', meaning: 'đăng ký' },
      { word: 'formula', meaning: 'công thức' },
      { word: 'efficiently', meaning: 'một cách hiệu quả' },
      { word: 'first-come, first-served', meaning: 'ai đến trước được phục vụ trước' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How can employees join the workshop?',
        options: [
          'By calling the instructor',
          'By completing an online form',
          'By visiting Lab Room 2',
          'By asking their manager directly'
        ],
        correctAnswerIndex: 1,
        explanation: 'The first sentence says employees should register by completing the online form.'
      },
      {
        id: 'q2',
        text: 'What is one topic covered in the workshop?',
        options: [
          'Designing websites',
          'Writing sales letters',
          'Creating charts',
          'Repairing computers'
        ],
        correctAnswerIndex: 2,
        explanation: 'The third sentence says participants will learn how to use formulas, create charts, and organize data.'
      },
      {
        id: 'q3',
        text: 'Why should employees register early?',
        options: [
          'The workshop is free only for early applicants',
          'The room is small and space is limited',
          'The instructor may cancel the event',
          'The online form closes after one day'
        ],
        correctAnswerIndex: 1,
        explanation: 'The final sentence explains that because space is limited, registration is first-come, first-served.'
      }
    ]
  },
  {
    id: 'toeic-9',
    title: 'Invoice Payment Reminder',
    level: 'TOEIC',
    content: [
      'This is a reminder that Invoice #4837 for office furniture, dated October 5, remains unpaid.',
      'The total amount due is $1,260, and payment was originally requested by October 20.',
      'Please send payment by bank transfer within five business days to avoid a late fee.',
      'If you have already sent payment, please disregard this notice and accept our thanks.'
    ],
    vocabulary: [
      { word: 'invoice', meaning: 'hóa đơn' },
      { word: 'amount due', meaning: 'số tiền phải thanh toán' },
      { word: 'bank transfer', meaning: 'chuyển khoản ngân hàng' },
      { word: 'late fee', meaning: 'phí trả chậm' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the purpose of the notice?',
        options: [
          'To confirm product delivery',
          'To remind the customer about unpaid payment',
          'To announce a discount',
          'To request a furniture return'
        ],
        correctAnswerIndex: 1,
        explanation: 'The notice says Invoice #4837 remains unpaid, so its purpose is to remind the customer about payment.'
      },
      {
        id: 'q2',
        text: 'How much money is due?',
        options: [
          '$1,205',
          '$1,620',
          '$1,260',
          '$1,025'
        ],
        correctAnswerIndex: 2,
        explanation: 'The second sentence clearly says the total amount due is $1,260.'
      },
      {
        id: 'q3',
        text: 'What should the customer do if payment has already been sent?',
        options: [
          'Call customer service immediately',
          'Ignore the notice',
          'Send payment again',
          'Pay an additional fee'
        ],
        correctAnswerIndex: 1,
        explanation: 'The final sentence says that if payment has already been sent, the customer should disregard the notice.'
      }
    ]
  },
  {
    id: 'toeic-10',
    title: 'Store Hours for Holiday Weekend',
    level: 'TOEIC',
    content: [
      'Please note the following store hours for the upcoming holiday weekend at Maple Street Market.',
      'On Friday and Saturday, the store will operate as usual from 8:00 a.m. to 9:00 p.m.',
      'On Sunday, the store will close early at 6:00 p.m., and on Monday it will be closed all day.',
      'Regular business hours will resume on Tuesday morning.'
    ],
    vocabulary: [
      { word: 'operate as usual', meaning: 'hoạt động như thường lệ' },
      { word: 'close early', meaning: 'đóng cửa sớm' },
      { word: 'resume', meaning: 'tiếp tục lại' },
      { word: 'business hours', meaning: 'giờ làm việc/giờ mở cửa' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the notice about?',
        options: [
          'A new store opening',
          'Holiday store hours',
          'A weekend sale',
          'A staff meeting'
        ],
        correctAnswerIndex: 1,
        explanation: 'The first sentence says the notice is about store hours for the upcoming holiday weekend.'
      },
      {
        id: 'q2',
        text: 'What will happen on Sunday?',
        options: [
          'The store will be closed all day',
          'The store will open late',
          'The store will close at 6:00 p.m.',
          'The store will stay open until 9:00 p.m.'
        ],
        correctAnswerIndex: 2,
        explanation: 'The third sentence says that on Sunday, the store will close early at 6:00 p.m.'
      },
      {
        id: 'q3',
        text: 'When will regular hours return?',
        options: [
          'Saturday morning',
          'Sunday evening',
          'Monday afternoon',
          'Tuesday morning'
        ],
        correctAnswerIndex: 3,
        explanation: 'The last sentence says regular business hours will resume on Tuesday morning.'
      }
    ]
  },
  {
  id: 'toeic-11',
  title: 'Conference Registration Confirmation',
  level: 'TOEIC',
  content: [
    'Thank you for registering for the East Asia Business Conference on November 14.',
    'This email confirms that your payment has been received and your seat has been reserved.',
    'The conference will begin at 8:30 a.m. at the Grand Hall of Riverside Center.',
    'Please bring a photo ID to the registration desk in order to receive your name badge and event materials.'
  ],
  vocabulary: [
    { word: 'register', meaning: 'đăng ký' },
    { word: 'payment', meaning: 'thanh toán' },
    { word: 'reserved', meaning: 'được giữ chỗ' },
    { word: 'name badge', meaning: 'thẻ tên' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is the purpose of the email?',
      options: [
        'To cancel a conference',
        'To confirm conference registration',
        'To ask for more payment',
        'To change the event location'
      ],
      correctAnswerIndex: 1,
      explanation: 'The email says that payment has been received and the seat has been reserved, so it is a registration confirmation.'
    },
    {
      id: 'q2',
      text: 'Where will the conference take place?',
      options: [
        'At the registration desk',
        'At East Asia Office',
        'At Riverside Center',
        'At Grand Riverside Hotel'
      ],
      correctAnswerIndex: 2,
      explanation: 'The third sentence states that the conference will begin at the Grand Hall of Riverside Center.'
    },
    {
      id: 'q3',
      text: 'What should participants bring?',
      options: [
        'A business card',
        'A photo ID',
        'A printed ticket',
        'A laptop'
      ],
      correctAnswerIndex: 1,
      explanation: 'The last sentence instructs participants to bring a photo ID.'
    }
  ]
},
{
  id: 'toeic-12',
  title: 'Memo about Parking Lot Changes',
  level: 'TOEIC',
  content: [
    'Beginning next Monday, the employee parking lot behind the main office will be partially closed for repainting.',
    'Employees are encouraged to use the east parking area near Building C during the construction period.',
    'The repainting project is expected to last three days, depending on weather conditions.',
    'We apologize for the inconvenience and thank you for your cooperation.'
  ],
  vocabulary: [
    { word: 'partially closed', meaning: 'đóng cửa một phần' },
    { word: 'repainting', meaning: 'sơn lại' },
    { word: 'construction period', meaning: 'thời gian thi công' },
    { word: 'cooperation', meaning: 'sự hợp tác' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why will the parking lot be partially closed?',
      options: [
        'Because a new building is being opened',
        'Because it will be repainted',
        'Because of a company event',
        'Because visitors will use it'
      ],
      correctAnswerIndex: 1,
      explanation: 'The first sentence says the parking lot will be partially closed for repainting.'
    },
    {
      id: 'q2',
      text: 'Where should employees park during this time?',
      options: [
        'Behind the main office',
        'Near the front entrance',
        'In the east parking area near Building C',
        'On the street outside the office'
      ],
      correctAnswerIndex: 2,
      explanation: 'The second sentence directs employees to use the east parking area near Building C.'
    },
    {
      id: 'q3',
      text: 'How long is the project expected to last?',
      options: [
        'One day',
        'Two days',
        'Three days',
        'One week'
      ],
      correctAnswerIndex: 2,
      explanation: 'The third sentence states that the repainting project is expected to last three days.'
    }
  ]
},
{
  id: 'toeic-13',
  title: 'Product Recall Notice',
  level: 'TOEIC',
  content: [
    'FreshFarm Foods is recalling all 500-gram packages of its roasted almonds with expiration dates between June 1 and June 15.',
    'The recall was issued after the company discovered that some packages may contain undeclared milk ingredients.',
    'Customers who purchased the affected product should return it to the store for a full refund.',
    'For more information, please call our customer service line at 555-0198.'
  ],
  vocabulary: [
    { word: 'recall', meaning: 'thu hồi sản phẩm' },
    { word: 'expiration date', meaning: 'ngày hết hạn' },
    { word: 'undeclared', meaning: 'không được ghi rõ' },
    { word: 'refund', meaning: 'hoàn tiền' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why is FreshFarm Foods recalling the product?',
      options: [
        'The packages were too small',
        'The product was shipped late',
        'Some packages may contain undeclared milk ingredients',
        'The price was printed incorrectly'
      ],
      correctAnswerIndex: 2,
      explanation: 'The second sentence explains that the recall was issued because some packages may contain undeclared milk ingredients.'
    },
    {
      id: 'q2',
      text: 'What should customers do with the affected product?',
      options: [
        'Throw it away immediately',
        'Return it to the store for a refund',
        'Exchange it for another snack online',
        'Send it to the company office'
      ],
      correctAnswerIndex: 1,
      explanation: 'The third sentence says customers should return the affected product to the store for a full refund.'
    },
    {
      id: 'q3',
      text: 'What is provided in the notice?',
      options: [
        'A website for online orders',
        'A customer service phone number',
        'A coupon code',
        'A replacement delivery date'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence provides a customer service line number for more information.'
    }
  ]
},
{
  id: 'toeic-14',
  title: 'Flight Schedule Update',
  level: 'TOEIC',
  content: [
    'Passengers traveling on Flight 762 to Singapore are advised that departure has been delayed by 45 minutes.',
    'The aircraft is currently undergoing a routine safety inspection requested by airport staff.',
    'Boarding will now begin at 6:10 p.m. at Gate 14.',
    'We appreciate your patience and will provide additional updates if needed.'
  ],
  vocabulary: [
    { word: 'departure', meaning: 'khởi hành' },
    { word: 'delay', meaning: 'trì hoãn' },
    { word: 'routine safety inspection', meaning: 'kiểm tra an toàn định kỳ' },
    { word: 'boarding', meaning: 'lên máy bay' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is the announcement about?',
      options: [
        'A canceled flight',
        'A delayed flight',
        'A gate change only',
        'A lost suitcase'
      ],
      correctAnswerIndex: 1,
      explanation: 'The first sentence states that the departure has been delayed by 45 minutes.'
    },
    {
      id: 'q2',
      text: 'Why has the flight been delayed?',
      options: [
        'Bad weather in Singapore',
        'A missing crew member',
        'A routine safety inspection',
        'A ticketing problem'
      ],
      correctAnswerIndex: 2,
      explanation: 'The second sentence explains that the aircraft is undergoing a routine safety inspection.'
    },
    {
      id: 'q3',
      text: 'Where will boarding begin?',
      options: [
        'Gate 6',
        'Gate 10',
        'Gate 14',
        'Gate 45'
      ],
      correctAnswerIndex: 2,
      explanation: 'The third sentence clearly says boarding will begin at Gate 14.'
    }
  ]
},
{
  id: 'toeic-15',
  title: 'Invitation to a Store Opening',
  level: 'TOEIC',
  content: [
    'You are warmly invited to the grand opening of Willow Home Décor’s newest branch on Saturday, August 19.',
    'The event will begin at 10:00 a.m. and will include product demonstrations, light refreshments, and special discounts.',
    'The first 100 customers will receive a free shopping bag with the store logo.',
    'We hope you will join us to celebrate this exciting occasion.'
  ],
  vocabulary: [
    { word: 'grand opening', meaning: 'lễ khai trương' },
    { word: 'branch', meaning: 'chi nhánh' },
    { word: 'refreshments', meaning: 'đồ ăn nhẹ, thức uống nhẹ' },
    { word: 'occasion', meaning: 'dịp, sự kiện' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is being announced?',
      options: [
        'A staff meeting',
        'A product recall',
        'A new store opening',
        'A renovation project'
      ],
      correctAnswerIndex: 2,
      explanation: 'The first sentence invites readers to the grand opening of the newest branch.'
    },
    {
      id: 'q2',
      text: 'What will happen at the event?',
      options: [
        'Only a speech by the manager',
        'Product demonstrations and special discounts',
        'Free furniture delivery',
        'A hiring interview session'
      ],
      correctAnswerIndex: 1,
      explanation: 'The second sentence lists product demonstrations, refreshments, and special discounts.'
    },
    {
      id: 'q3',
      text: 'What will the first 100 customers receive?',
      options: [
        'A gift card',
        'A logo shopping bag',
        'A free lamp',
        'A discount coupon booklet'
      ],
      correctAnswerIndex: 1,
      explanation: 'The third sentence says the first 100 customers will receive a free shopping bag with the store logo.'
    }
  ]
},
{
  id: 'toeic-16',
  title: 'Internet Service Interruption',
  level: 'TOEIC',
  content: [
    'Our records show that internet service in your area may be interrupted on Thursday between 1:00 a.m. and 3:00 a.m.',
    'This temporary outage is necessary so our technicians can upgrade network equipment.',
    'We recommend saving your work and shutting down connected devices before the maintenance begins.',
    'We apologize for any inconvenience and thank you for choosing MetroLink Internet.'
  ],
  vocabulary: [
    { word: 'interrupted', meaning: 'bị gián đoạn' },
    { word: 'temporary outage', meaning: 'sự mất kết nối tạm thời' },
    { word: 'technician', meaning: 'kỹ thuật viên' },
    { word: 'upgrade', meaning: 'nâng cấp' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why might internet service be interrupted?',
      options: [
        'Because customers did not pay their bills',
        'Because technicians will upgrade equipment',
        'Because of a severe storm',
        'Because the company is moving offices'
      ],
      correctAnswerIndex: 1,
      explanation: 'The second sentence says the outage is necessary so technicians can upgrade network equipment.'
    },
    {
      id: 'q2',
      text: 'When may the interruption occur?',
      options: [
        'Thursday from 1:00 a.m. to 3:00 a.m.',
        'Thursday from 1:00 p.m. to 3:00 p.m.',
        'Friday morning',
        'All day Thursday'
      ],
      correctAnswerIndex: 0,
      explanation: 'The first sentence provides the exact time: Thursday between 1:00 a.m. and 3:00 a.m.'
    },
    {
      id: 'q3',
      text: 'What are customers advised to do?',
      options: [
        'Call customer service immediately',
        'Replace their devices',
        'Save their work and shut down connected devices',
        'Visit the company office'
      ],
      correctAnswerIndex: 2,
      explanation: 'The third sentence recommends saving work and shutting down connected devices before maintenance begins.'
    }
  ]
},
{
  id: 'toeic-17',
  title: 'Museum Membership Benefits',
  level: 'TOEIC',
  content: [
    'Members of the Hamilton Art Museum enjoy free admission to all regular exhibitions throughout the year.',
    'They also receive invitations to preview events, discounts at the gift shop, and reduced prices for educational workshops.',
    'Annual memberships begin at $45 for individuals and $70 for families.',
    'To become a member, complete the online application form on our website.'
  ],
  vocabulary: [
    { word: 'admission', meaning: 'vé vào cửa' },
    { word: 'preview event', meaning: 'sự kiện xem trước' },
    { word: 'reduced price', meaning: 'giá ưu đãi' },
    { word: 'application form', meaning: 'mẫu đơn đăng ký' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is one benefit of museum membership?',
      options: [
        'Free parking all year',
        'Free admission to regular exhibitions',
        'Unlimited workshop access',
        'A free gift every month'
      ],
      correctAnswerIndex: 1,
      explanation: 'The first sentence says members enjoy free admission to all regular exhibitions.'
    },
    {
      id: 'q2',
      text: 'How much does an individual annual membership cost?',
      options: [
        '$25',
        '$45',
        '$70',
        '$115'
      ],
      correctAnswerIndex: 1,
      explanation: 'The third sentence states that annual memberships begin at $45 for individuals.'
    },
    {
      id: 'q3',
      text: 'How can someone become a member?',
      options: [
        'By visiting the gift shop',
        'By calling the museum director',
        'By completing an online application form',
        'By attending a preview event'
      ],
      correctAnswerIndex: 2,
      explanation: 'The final sentence instructs readers to complete the online application form on the website.'
    }
  ]
},
{
  id: 'toeic-18',
  title: 'Reminder about Rent Payment',
  level: 'TOEIC',
  content: [
    'This is a friendly reminder that monthly rent for Apartment 4B is due on the first day of each month.',
    'Payments received after the fifth day of the month are subject to a late charge of $25.',
    'Rent may be paid by bank transfer, check, or through the resident payment portal.',
    'If you have already submitted your payment, please disregard this message.'
  ],
  vocabulary: [
    { word: 'rent', meaning: 'tiền thuê nhà' },
    { word: 'subject to', meaning: 'chịu, bị áp dụng' },
    { word: 'late charge', meaning: 'phụ phí trả chậm' },
    { word: 'resident payment portal', meaning: 'cổng thanh toán cho cư dân' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'When is the rent due?',
      options: [
        'On the first day of each month',
        'On the fifth day of each month',
        'On the last day of each month',
        'Every Friday'
      ],
      correctAnswerIndex: 0,
      explanation: 'The first sentence states that monthly rent is due on the first day of each month.'
    },
    {
      id: 'q2',
      text: 'What happens if payment is received after the fifth day?',
      options: [
        'The lease is canceled',
        'A late charge is added',
        'The tenant must pay in cash',
        'The payment will be refused'
      ],
      correctAnswerIndex: 1,
      explanation: 'The second sentence says payments received after the fifth day are subject to a late charge of $25.'
    },
    {
      id: 'q3',
      text: 'Which payment method is mentioned?',
      options: [
        'Cash only',
        'Credit card by phone',
        'Resident payment portal',
        'Money order only'
      ],
      correctAnswerIndex: 2,
      explanation: 'The third sentence mentions bank transfer, check, and the resident payment portal.'
    }
  ]
},
{
  id: 'toeic-19',
  title: 'Office Supply Order Form',
  level: 'TOEIC',
  content: [
    'Employees who need additional office supplies should complete the monthly supply request form by the 25th.',
    'Common items such as pens, notebooks, folders, and printer toner may be requested through the form.',
    'Orders will be processed by the purchasing department on the first business day of the following month.',
    'Please ask your department supervisor to approve the request before submission.'
  ],
  vocabulary: [
    { word: 'office supplies', meaning: 'văn phòng phẩm' },
    { word: 'request form', meaning: 'mẫu yêu cầu' },
    { word: 'processed', meaning: 'được xử lý' },
    { word: 'submission', meaning: 'việc nộp' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What should employees do if they need more office supplies?',
      options: [
        'Buy them personally',
        'Complete the monthly supply request form',
        'Call the purchasing department directly',
        'Wait for the next delivery'
      ],
      correctAnswerIndex: 1,
      explanation: 'The first sentence says employees should complete the monthly supply request form.'
    },
    {
      id: 'q2',
      text: 'When will orders be processed?',
      options: [
        'On the 25th of the month',
        'At the end of each week',
        'On the first business day of the following month',
        'Immediately after the form is submitted'
      ],
      correctAnswerIndex: 2,
      explanation: 'The third sentence states that orders will be processed on the first business day of the following month.'
    },
    {
      id: 'q3',
      text: 'What must happen before the request is submitted?',
      options: [
        'The employee must pay in advance',
        'The supervisor must approve it',
        'The items must be listed twice',
        'The purchasing department must call back'
      ],
      correctAnswerIndex: 1,
      explanation: 'The last sentence says employees should ask their department supervisor to approve the request before submission.'
    }
  ]
},
{
  id: 'toeic-20',
  title: 'Customer Satisfaction Survey Invitation',
  level: 'TOEIC',
  content: [
    'Thank you for visiting Oakridge Dental Clinic last week.',
    'We are committed to improving our services and would appreciate your feedback about your recent appointment.',
    'Please complete our online customer satisfaction survey by Friday to receive a coupon for 10% off your next cleaning service.',
    'Your responses will remain confidential and will help us better serve our patients.'
  ],
  vocabulary: [
    { word: 'committed to', meaning: 'cam kết với' },
    { word: 'feedback', meaning: 'phản hồi' },
    { word: 'satisfaction survey', meaning: 'khảo sát mức độ hài lòng' },
    { word: 'confidential', meaning: 'bảo mật' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why was this message sent?',
      options: [
        'To cancel an appointment',
        'To request patient feedback',
        'To announce a price increase',
        'To confirm a new doctor'
      ],
      correctAnswerIndex: 1,
      explanation: 'The second sentence says the clinic would appreciate feedback about the recent appointment.'
    },
    {
      id: 'q2',
      text: 'What will patients receive for completing the survey?',
      options: [
        'A free appointment',
        'A gift card',
        'A 10% discount coupon',
        'A dental care kit'
      ],
      correctAnswerIndex: 2,
      explanation: 'The third sentence says patients will receive a coupon for 10% off their next cleaning service.'
    },
    {
      id: 'q3',
      text: 'What does the clinic say about survey responses?',
      options: [
        'They will be shared publicly',
        'They will remain confidential',
        'They must be mailed in',
        'They will be reviewed only once a year'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence says responses will remain confidential.'
    }
  ]
},
{
  id: 'toeic-21',
  title: 'Restaurant Reservation Confirmation',
  level: 'TOEIC',
  content: [
    'Thank you for making a reservation at Seaside Bistro for Friday, September 12.',
    'Your table for four guests has been booked for 7:00 p.m. under the name Daniel Lee.',
    'If you need to change or cancel your reservation, please call us at least two hours in advance.',
    'We look forward to serving you and hope you enjoy your evening with us.'
  ],
  vocabulary: [
    { word: 'reservation', meaning: 'đặt chỗ' },
    { word: 'guest', meaning: 'khách' },
    { word: 'in advance', meaning: 'trước, заранее' },
    { word: 'serve', meaning: 'phục vụ' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is this message mainly about?',
      options: [
        'A restaurant complaint',
        'A reservation confirmation',
        'A menu update',
        'A hiring announcement'
      ],
      correctAnswerIndex: 1,
      explanation: 'The passage confirms that a table has been booked, so it is a reservation confirmation.'
    },
    {
      id: 'q2',
      text: 'How many people is the reservation for?',
      options: ['Two', 'Three', 'Four', 'Five'],
      correctAnswerIndex: 2,
      explanation: 'The second sentence says the table is for four guests.'
    },
    {
      id: 'q3',
      text: 'What should the customer do to change the reservation?',
      options: [
        'Send an email the next day',
        'Call at least two hours before',
        'Visit the restaurant in person only',
        'Pay an additional fee online'
      ],
      correctAnswerIndex: 1,
      explanation: 'The third sentence says changes or cancellations should be made by calling at least two hours in advance.'
    }
  ]
},
{
  id: 'toeic-22',
  title: 'Notice about Elevator Inspection',
  level: 'TOEIC',
  content: [
    'Please be advised that the elevators in Tower A will be unavailable on Wednesday morning from 8:00 a.m. to 11:00 a.m.',
    'A certified inspection team will perform required safety checks during that time.',
    'Employees working on floors two through five are encouraged to use the west stairwell.',
    'We apologize for the inconvenience and appreciate your understanding.'
  ],
  vocabulary: [
    { word: 'unavailable', meaning: 'không thể sử dụng' },
    { word: 'certified', meaning: 'được chứng nhận' },
    { word: 'inspection', meaning: 'kiểm tra' },
    { word: 'stairwell', meaning: 'cầu thang bộ' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why will the elevators be unavailable?',
      options: [
        'They are being cleaned',
        'They are being inspected for safety',
        'A new elevator is being installed',
        'The building is closed'
      ],
      correctAnswerIndex: 1,
      explanation: 'The second sentence says a certified inspection team will perform required safety checks.'
    },
    {
      id: 'q2',
      text: 'When will the elevators be unavailable?',
      options: [
        'Wednesday afternoon',
        'Wednesday morning from 8:00 a.m. to 11:00 a.m.',
        'All day Wednesday',
        'Tuesday morning'
      ],
      correctAnswerIndex: 1,
      explanation: 'The first sentence gives the exact time period.'
    },
    {
      id: 'q3',
      text: 'What are some employees encouraged to use instead?',
      options: [
        'The east parking area',
        'The front entrance',
        'The west stairwell',
        'Tower B elevators'
      ],
      correctAnswerIndex: 2,
      explanation: 'The third sentence tells employees on floors two through five to use the west stairwell.'
    }
  ]
},
{
  id: 'toeic-23',
  title: 'Company Newsletter Submission Request',
  level: 'TOEIC',
  content: [
    'The communications team is now collecting articles for the October company newsletter.',
    'Employees are invited to submit short pieces about recent projects, volunteer activities, or team achievements.',
    'Submissions should be no longer than 300 words and must be sent by September 18.',
    'Selected articles may be edited for length and clarity before publication.'
  ],
  vocabulary: [
    { word: 'collecting', meaning: 'đang thu thập' },
    { word: 'submit', meaning: 'nộp, gửi' },
    { word: 'achievement', meaning: 'thành tựu' },
    { word: 'publication', meaning: 'xuất bản' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is the communications team collecting?',
      options: [
        'Job applications',
        'Articles for the company newsletter',
        'Office supply requests',
        'Travel expense reports'
      ],
      correctAnswerIndex: 1,
      explanation: 'The first sentence says the team is collecting articles for the October company newsletter.'
    },
    {
      id: 'q2',
      text: 'What is one suggested topic for submissions?',
      options: [
        'Restaurant reviews',
        'Volunteer activities',
        'Personal travel plans',
        'Product prices'
      ],
      correctAnswerIndex: 1,
      explanation: 'The second sentence lists recent projects, volunteer activities, and team achievements.'
    },
    {
      id: 'q3',
      text: 'What may happen to selected articles?',
      options: [
        'They will be returned unread',
        'They may be edited before publication',
        'They must be rewritten by managers',
        'They will be printed immediately'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence says selected articles may be edited for length and clarity.'
    }
  ]
},
{
  id: 'toeic-24',
  title: 'Appointment Reminder from a Clinic',
  level: 'TOEIC',
  content: [
    'This is a reminder that you have an appointment with Dr. Nakamura on Tuesday, April 9, at 2:15 p.m.',
    'Please arrive 10 minutes early to complete any necessary paperwork before your visit.',
    'If you need to reschedule, contact our office no later than 24 hours before the appointment time.',
    'We look forward to seeing you at Hillcrest Medical Clinic.'
  ],
  vocabulary: [
    { word: 'appointment', meaning: 'cuộc hẹn' },
    { word: 'paperwork', meaning: 'giấy tờ thủ tục' },
    { word: 'reschedule', meaning: 'dời lịch' },
    { word: 'no later than', meaning: 'muộn nhất là' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is the purpose of this message?',
      options: [
        'To cancel a medical service',
        'To remind someone of an appointment',
        'To announce a clinic relocation',
        'To request insurance documents by mail'
      ],
      correctAnswerIndex: 1,
      explanation: 'The first sentence clearly states that this is an appointment reminder.'
    },
    {
      id: 'q2',
      text: 'Why should the patient arrive early?',
      options: [
        'To meet another doctor',
        'To make a payment in cash',
        'To complete necessary paperwork',
        'To attend a seminar'
      ],
      correctAnswerIndex: 2,
      explanation: 'The second sentence says the patient should arrive 10 minutes early to complete paperwork.'
    },
    {
      id: 'q3',
      text: 'When should the patient contact the office to reschedule?',
      options: [
        'At least 24 hours before the appointment',
        'Any time after the appointment',
        'Only on the same day',
        'One week in advance'
      ],
      correctAnswerIndex: 0,
      explanation: 'The third sentence says the office should be contacted no later than 24 hours before the appointment time.'
    }
  ]
},
{
  id: 'toeic-25',
  title: 'Library Event Announcement',
  level: 'TOEIC',
  content: [
    'The Riverdale Public Library will host a talk by local historian Maria Estevez on Thursday evening at 6:30 p.m.',
    'Her presentation will focus on the early development of the city’s downtown area.',
    'Admission to the event is free, but seating is limited and advance registration is recommended.',
    'To reserve a seat, visit the library’s website or call the front desk.'
  ],
  vocabulary: [
    { word: 'host', meaning: 'tổ chức' },
    { word: 'historian', meaning: 'nhà sử học' },
    { word: 'admission', meaning: 'vé vào cửa' },
    { word: 'reserve', meaning: 'đặt chỗ' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Who will speak at the event?',
      options: [
        'A city mayor',
        'A local historian',
        'A school principal',
        'A museum guide'
      ],
      correctAnswerIndex: 1,
      explanation: 'The first sentence says the talk will be given by local historian Maria Estevez.'
    },
    {
      id: 'q2',
      text: 'What is the talk about?',
      options: [
        'Modern library design',
        'The city’s transportation system',
        'The early development of downtown',
        'How to write history books'
      ],
      correctAnswerIndex: 2,
      explanation: 'The second sentence explains the presentation topic.'
    },
    {
      id: 'q3',
      text: 'How can people reserve a seat?',
      options: [
        'By sending a letter',
        'By paying at the door',
        'By visiting the website or calling the front desk',
        'By speaking to the historian directly'
      ],
      correctAnswerIndex: 2,
      explanation: 'The last sentence gives two methods: visit the website or call the front desk.'
    }
  ]
},
{
  id: 'toeic-26',
  title: 'Warehouse Safety Reminder',
  level: 'TOEIC',
  content: [
    'All warehouse employees are reminded to wear safety vests and protective gloves while working in loading areas.',
    'These items help reduce the risk of injury when handling heavy boxes and operating equipment nearby.',
    'Supervisors will begin weekly safety checks starting next month to ensure company rules are followed.',
    'Please report any damaged equipment to your supervisor immediately.'
  ],
  vocabulary: [
    { word: 'safety vest', meaning: 'áo phản quang bảo hộ' },
    { word: 'protective gloves', meaning: 'găng tay bảo hộ' },
    { word: 'risk of injury', meaning: 'nguy cơ chấn thương' },
    { word: 'equipment', meaning: 'thiết bị' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What are warehouse employees reminded to wear?',
      options: [
        'Business uniforms',
        'Safety vests and protective gloves',
        'Raincoats and boots',
        'Company badges only'
      ],
      correctAnswerIndex: 1,
      explanation: 'The first sentence states that employees should wear safety vests and protective gloves.'
    },
    {
      id: 'q2',
      text: 'Why are these items important?',
      options: [
        'They improve customer service',
        'They reduce the risk of injury',
        'They make the warehouse quieter',
        'They help identify visitors'
      ],
      correctAnswerIndex: 1,
      explanation: 'The second sentence says they help reduce the risk of injury.'
    },
    {
      id: 'q3',
      text: 'What should employees do with damaged equipment?',
      options: [
        'Store it in the loading area',
        'Continue using it carefully',
        'Report it to a supervisor immediately',
        'Send it to the main office'
      ],
      correctAnswerIndex: 2,
      explanation: 'The last sentence instructs employees to report damaged equipment to their supervisor immediately.'
    }
  ]
},
{
  id: 'toeic-27',
  title: 'Hotel Check-out Policy',
  level: 'TOEIC',
  content: [
    'Guests of the Harbor Point Hotel are reminded that standard check-out time is 11:00 a.m.',
    'Late check-out may be available upon request, depending on room availability.',
    'Guests who check out after 1:00 p.m. without prior approval may be charged an additional half-day fee.',
    'Please contact the front desk on the evening before departure if you would like to request extra time.'
  ],
  vocabulary: [
    { word: 'standard', meaning: 'tiêu chuẩn, thông thường' },
    { word: 'upon request', meaning: 'nếu có yêu cầu' },
    { word: 'availability', meaning: 'tình trạng còn chỗ' },
    { word: 'prior approval', meaning: 'sự chấp thuận trước' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What time is standard check-out?',
      options: [
        '10:00 a.m.',
        '11:00 a.m.',
        '12:00 p.m.',
        '1:00 p.m.'
      ],
      correctAnswerIndex: 1,
      explanation: 'The first sentence says standard check-out time is 11:00 a.m.'
    },
    {
      id: 'q2',
      text: 'When may a guest be charged an additional fee?',
      options: [
        'When checking out before 11:00 a.m.',
        'When requesting extra towels',
        'When checking out after 1:00 p.m. without approval',
        'When reserving online'
      ],
      correctAnswerIndex: 2,
      explanation: 'The third sentence explains that a half-day fee may be charged after 1:00 p.m. without prior approval.'
    },
    {
      id: 'q3',
      text: 'When should guests contact the front desk to request extra time?',
      options: [
        'On the evening before departure',
        'After leaving the hotel',
        'At the time of booking only',
        'Three days in advance'
      ],
      correctAnswerIndex: 0,
      explanation: 'The final sentence says guests should contact the front desk on the evening before departure.'
    }
  ]
},
{
  id: 'toeic-28',
  title: 'Employee Volunteer Day Invitation',
  level: 'TOEIC',
  content: [
    'All staff members are invited to participate in the company’s Volunteer Day on Saturday, May 18.',
    'This year, employees will work together to plant trees and clean walking paths at Lakeside Park.',
    'Transportation and lunch will be provided for all registered participants.',
    'Please sign up through the employee portal by May 10 if you would like to join.'
  ],
  vocabulary: [
    { word: 'participate', meaning: 'tham gia' },
    { word: 'plant trees', meaning: 'trồng cây' },
    { word: 'registered participant', meaning: 'người tham gia đã đăng ký' },
    { word: 'employee portal', meaning: 'cổng thông tin nhân viên' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What will employees do on Volunteer Day?',
      options: [
        'Visit a museum',
        'Plant trees and clean paths',
        'Attend a sales meeting',
        'Move office furniture'
      ],
      correctAnswerIndex: 1,
      explanation: 'The second sentence says employees will plant trees and clean walking paths at Lakeside Park.'
    },
    {
      id: 'q2',
      text: 'What will be provided?',
      options: [
        'Hotel rooms and breakfast',
        'Work uniforms',
        'Transportation and lunch',
        'Cash rewards'
      ],
      correctAnswerIndex: 2,
      explanation: 'The third sentence states that transportation and lunch will be provided.'
    },
    {
      id: 'q3',
      text: 'How can employees join?',
      options: [
        'By calling the park office',
        'By signing up through the employee portal',
        'By sending a letter to HR',
        'By arriving without registration'
      ],
      correctAnswerIndex: 1,
      explanation: 'The final sentence tells staff to sign up through the employee portal.'
    }
  ]
},
{
  id: 'toeic-29',
  title: 'Reminder to Update Account Information',
  level: 'TOEIC',
  content: [
    'To ensure uninterrupted service, customers are asked to review and update their account information by the end of the month.',
    'Please make sure your billing address, contact number, and email address are current.',
    'Customers who fail to update expired payment details may experience a delay in automatic renewal.',
    'You can review your account information at any time by logging in to our website.'
  ],
  vocabulary: [
    { word: 'uninterrupted service', meaning: 'dịch vụ không bị gián đoạn' },
    { word: 'billing address', meaning: 'địa chỉ thanh toán' },
    { word: 'automatic renewal', meaning: 'gia hạn tự động' },
    { word: 'log in', meaning: 'đăng nhập' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why are customers asked to update their account information?',
      options: [
        'To receive free gifts',
        'To ensure uninterrupted service',
        'To change their membership level',
        'To register for a conference'
      ],
      correctAnswerIndex: 1,
      explanation: 'The first sentence states the reason directly: to ensure uninterrupted service.'
    },
    {
      id: 'q2',
      text: 'What might happen if payment details are expired?',
      options: [
        'The website will close permanently',
        'There may be a delay in automatic renewal',
        'Customers will get a discount',
        'Their contact number will be removed'
      ],
      correctAnswerIndex: 1,
      explanation: 'The third sentence says customers may experience a delay in automatic renewal.'
    },
    {
      id: 'q3',
      text: 'How can customers review their information?',
      options: [
        'By mailing a request form',
        'By visiting a local office',
        'By logging in to the website',
        'By calling technical support only'
      ],
      correctAnswerIndex: 2,
      explanation: 'The last sentence says they can review account information by logging in to the website.'
    }
  ]
},
{
  id: 'toeic-30',
  title: 'Shipment Ready for Pickup',
  level: 'TOEIC',
  content: [
    'We are pleased to inform you that your order from Northside Tools has arrived and is ready for pickup.',
    'The package can be collected at our service counter between 9:00 a.m. and 6:00 p.m., Monday through Friday.',
    'Please bring your order number and a valid photo ID when you come to collect the item.',
    'Orders not picked up within seven business days will be returned to the warehouse.'
  ],
  vocabulary: [
    { word: 'pickup', meaning: 'nhận hàng' },
    { word: 'service counter', meaning: 'quầy dịch vụ' },
    { word: 'valid', meaning: 'hợp lệ' },
    { word: 'warehouse', meaning: 'kho hàng' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is the purpose of this notice?',
      options: [
        'To announce a shipping delay',
        'To say an order is ready for pickup',
        'To request product feedback',
        'To explain a return policy'
      ],
      correctAnswerIndex: 1,
      explanation: 'The first sentence says the order has arrived and is ready for pickup.'
    },
    {
      id: 'q2',
      text: 'What must the customer bring?',
      options: [
        'A credit card and receipt',
        'An order number and photo ID',
        'A shipping label',
        'A membership card'
      ],
      correctAnswerIndex: 1,
      explanation: 'The third sentence clearly says to bring the order number and a valid photo ID.'
    },
    {
      id: 'q3',
      text: 'What will happen if the order is not picked up in time?',
      options: [
        'It will be delivered automatically',
        'It will be discounted',
        'It will be returned to the warehouse',
        'It will be canceled and refunded immediately'
      ],
      correctAnswerIndex: 2,
      explanation: 'The final sentence says orders not picked up within seven business days will be returned to the warehouse.'
    }
  ]
},
{
  id: 'toeic-31',
  title: 'Schedule for New Employee Orientation',
  level: 'TOEIC',
  content: [
    'All newly hired employees are required to attend the orientation session on Monday, June 3.',
    'The program will begin at 9:00 a.m. in Training Room A and is expected to finish by 12:30 p.m.',
    'Topics will include company policies, payroll procedures, and an introduction to workplace safety guidelines.',
    'Please bring a photo ID and arrive 15 minutes early for check-in.'
  ],
  vocabulary: [
    { word: 'orientation session', meaning: 'buổi định hướng cho nhân viên mới' },
    { word: 'payroll procedure', meaning: 'quy trình trả lương' },
    { word: 'workplace safety guideline', meaning: 'hướng dẫn an toàn nơi làm việc' },
    { word: 'check-in', meaning: 'làm thủ tục điểm danh/đăng ký' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Who must attend the orientation session?',
      options: [
        'All department managers',
        'All newly hired employees',
        'Only office assistants',
        'Customers visiting the company'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên nói rõ rằng tất cả nhân viên mới được tuyển đều phải tham dự buổi orientation.'
    },
    {
      id: 'q2',
      text: 'What will be discussed during the program?',
      options: [
        'Sales targets for the next quarter',
        'Company policies and payroll procedures',
        'Vacation plans for employees',
        'A new product launch'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba liệt kê các chủ đề gồm company policies, payroll procedures và safety guidelines.'
    },
    {
      id: 'q3',
      text: 'What are participants asked to bring?',
      options: [
        'A résumé',
        'A laptop computer',
        'A photo ID',
        'A printed training manual'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối yêu cầu người tham dự mang theo photo ID và đến sớm 15 phút.'
    }
  ]
},
{
  id: 'toeic-32',
  title: 'Water Service Interruption Notice',
  level: 'TOEIC',
  content: [
    'Residents of Parkside Apartments are advised that water service will be temporarily shut off on Thursday from 10:00 a.m. to 1:00 p.m.',
    'The interruption is necessary so maintenance workers can replace an old pipe in the basement.',
    'Residents are encouraged to store water in advance for cooking and other essential uses.',
    'We appreciate your patience while this repair work is completed.'
  ],
  vocabulary: [
    { word: 'temporarily shut off', meaning: 'tạm thời ngừng cung cấp' },
    { word: 'interruption', meaning: 'sự gián đoạn' },
    { word: 'replace', meaning: 'thay thế' },
    { word: 'essential use', meaning: 'mục đích thiết yếu' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why will water service be interrupted?',
      options: [
        'A new building is being opened',
        'An old pipe needs to be replaced',
        'The apartment office is moving',
        'Residents requested a system upgrade'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết việc gián đoạn là cần thiết để thay một đường ống cũ ở tầng hầm.'
    },
    {
      id: 'q2',
      text: 'When will the interruption occur?',
      options: [
        'Thursday from 10:00 a.m. to 1:00 p.m.',
        'Thursday from 1:00 p.m. to 4:00 p.m.',
        'Friday morning',
        'All day Thursday'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu đầu tiên nêu rõ thời gian là Thursday từ 10:00 a.m. đến 1:00 p.m.'
    },
    {
      id: 'q3',
      text: 'What are residents encouraged to do?',
      options: [
        'Leave the building',
        'Call the maintenance office',
        'Store water in advance',
        'Use water only at night'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba khuyên cư dân nên trữ nước trước để dùng cho nấu ăn và nhu cầu thiết yếu khác.'
    }
  ]
},
{
  id: 'toeic-33',
  title: 'Bookstore Discount Announcement',
  level: 'TOEIC',
  content: [
    'For one week only, Maple Books is offering a 20 percent discount on all business and language-learning titles.',
    'The promotion will run from Monday, July 8, through Sunday, July 14.',
    'Customers who spend more than $50 during the sale will also receive a free notebook.',
    'Visit our downtown location or order online to take advantage of this offer.'
  ],
  vocabulary: [
    { word: 'discount', meaning: 'giảm giá' },
    { word: 'promotion', meaning: 'chương trình khuyến mãi' },
    { word: 'title', meaning: 'đầu sách' },
    { word: 'take advantage of', meaning: 'tận dụng' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What items are included in the sale?',
      options: [
        'All children’s books',
        'Business and language-learning books',
        'Office supplies only',
        'Magazine subscriptions'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu nói rõ giảm giá áp dụng cho all business and language-learning titles.'
    },
    {
      id: 'q2',
      text: 'How long will the promotion last?',
      options: [
        'Three days',
        'Five days',
        'One week',
        'Two weeks'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu đầu nói “For one week only”, và câu thứ hai cũng xác nhận thời gian từ July 8 đến July 14.'
    },
    {
      id: 'q3',
      text: 'What will customers get if they spend more than $50?',
      options: [
        'A free notebook',
        'A second discount coupon',
        'A free dictionary',
        'An online membership'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu thứ ba nói khách hàng chi hơn $50 sẽ nhận được một quyển sổ miễn phí.'
    }
  ]
},
{
  id: 'toeic-34',
  title: 'Notice of Office Relocation',
  level: 'TOEIC',
  content: [
    'Beginning August 1, the customer service department of Newbridge Insurance will move to the company’s new office at 58 Harbor Road.',
    'The new location is larger and will allow the team to serve clients more efficiently.',
    'Telephone numbers and email addresses will remain the same after the move.',
    'Visitors are asked to update their records and use the Harbor Road address for all future correspondence.'
  ],
  vocabulary: [
    { word: 'relocation', meaning: 'việc di dời' },
    { word: 'location', meaning: 'địa điểm' },
    { word: 'efficiently', meaning: 'hiệu quả' },
    { word: 'correspondence', meaning: 'thư từ/liên lạc chính thức' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is happening on August 1?',
      options: [
        'A new insurance product will be introduced',
        'The customer service department will move offices',
        'The company will close permanently',
        'A new phone system will be installed'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên nêu rõ từ August 1, bộ phận customer service sẽ chuyển đến văn phòng mới.'
    },
    {
      id: 'q2',
      text: 'What will remain unchanged after the move?',
      options: [
        'The office address',
        'The building size',
        'Telephone numbers and email addresses',
        'Parking rules'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba nói telephone numbers và email addresses sẽ giữ nguyên.'
    },
    {
      id: 'q3',
      text: 'What are visitors asked to do?',
      options: [
        'Call before visiting',
        'Update their records',
        'Use a different email address',
        'Visit before August 1 only'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối yêu cầu khách cập nhật hồ sơ và dùng địa chỉ Harbor Road cho các liên lạc sau này.'
    }
  ]
},
{
  id: 'toeic-35',
  title: 'Reminder about Gym Membership Renewal',
  level: 'TOEIC',
  content: [
    'Your annual membership at FlexFit Gym will expire on October 31.',
    'To continue using the gym without interruption, please renew your membership by that date.',
    'Members who renew before October 20 will receive one free session with a personal trainer.',
    'Renewals can be completed at the front desk or through the FlexFit mobile app.'
  ],
  vocabulary: [
    { word: 'expire', meaning: 'hết hạn' },
    { word: 'renew', meaning: 'gia hạn' },
    { word: 'without interruption', meaning: 'không bị gián đoạn' },
    { word: 'personal trainer', meaning: 'huấn luyện viên cá nhân' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'When will the membership expire?',
      options: [
        'October 20',
        'October 31',
        'November 1',
        'December 31'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên cho biết membership sẽ hết hạn vào October 31.'
    },
    {
      id: 'q2',
      text: 'What is offered to members who renew early?',
      options: [
        'A free sports bag',
        'A discount on gym equipment',
        'One free session with a personal trainer',
        'A two-month extension'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba nói người gia hạn trước October 20 sẽ được tặng một buổi với personal trainer.'
    },
    {
      id: 'q3',
      text: 'How can members renew?',
      options: [
        'Only by phone',
        'At the front desk or through the mobile app',
        'Only by mail',
        'By visiting the company website'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối nêu 2 cách: tại quầy lễ tân hoặc qua ứng dụng FlexFit.'
    }
  ]
},
{
  id: 'toeic-36',
  title: 'Package Delivery Attempt Notice',
  level: 'TOEIC',
  content: [
    'We attempted to deliver your package today at 2:40 p.m., but no one was available to receive it.',
    'A second delivery attempt will be made tomorrow between 9:00 a.m. and 12:00 p.m.',
    'If you prefer, you may collect the package in person at our distribution center after 3:00 p.m. tomorrow.',
    'Please bring this notice and a valid ID if you choose to pick up the package yourself.'
  ],
  vocabulary: [
    { word: 'attempt', meaning: 'nỗ lực/lần thử' },
    { word: 'receive', meaning: 'nhận' },
    { word: 'distribution center', meaning: 'trung tâm phân phối' },
    { word: 'pick up', meaning: 'đến nhận' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why was the package not delivered today?',
      options: [
        'The address was incorrect',
        'The package was damaged',
        'No one was available to receive it',
        'The driver arrived late'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu đầu tiên giải thích rằng không có ai ở đó để nhận hàng.'
    },
    {
      id: 'q2',
      text: 'When will the second delivery attempt be made?',
      options: [
        'Today after 3:00 p.m.',
        'Tomorrow between 9:00 a.m. and 12:00 p.m.',
        'Next week',
        'Tomorrow evening'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai nêu rõ thời gian giao lại là ngày mai từ 9:00 a.m. đến 12:00 p.m.'
    },
    {
      id: 'q3',
      text: 'What must the customer bring to pick up the package?',
      options: [
        'A payment receipt only',
        'A phone charger',
        'This notice and a valid ID',
        'A credit card'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối yêu cầu mang theo notice này và một giấy tờ tùy thân hợp lệ.'
    }
  ]
},
{
  id: 'toeic-37',
  title: 'Training Course Completion Certificate',
  level: 'TOEIC',
  content: [
    'Congratulations on completing the Workplace Communication Skills course at Central Training Institute.',
    'According to our records, you attended all four sessions and successfully passed the final assessment.',
    'Your certificate of completion is now available for download through your student account.',
    'If you need a printed copy, please contact the administration office.'
  ],
  vocabulary: [
    { word: 'complete', meaning: 'hoàn thành' },
    { word: 'assessment', meaning: 'bài đánh giá' },
    { word: 'certificate of completion', meaning: 'chứng nhận hoàn thành' },
    { word: 'administration office', meaning: 'văn phòng hành chính' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why is this message being sent?',
      options: [
        'To invite someone to a new course',
        'To confirm course completion',
        'To request additional tuition payment',
        'To change the training schedule'
      ],
      correctAnswerIndex: 1,
      explanation: 'Thông báo chúc mừng người học đã hoàn thành khóa học và vượt qua bài đánh giá cuối.'
    },
    {
      id: 'q2',
      text: 'Where can the certificate be found?',
      options: [
        'At the front desk',
        'In the administration office',
        'Through the student account',
        'By mail only'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba nói certificate hiện có sẵn để tải xuống qua student account.'
    },
    {
      id: 'q3',
      text: 'What should the person do to get a printed copy?',
      options: [
        'Retake the final assessment',
        'Visit the classroom',
        'Contact the administration office',
        'Wait for automatic delivery'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối hướng dẫn liên hệ administration office nếu cần bản in.'
    }
  ]
},
{
  id: 'toeic-38',
  title: 'Farmers Market Schedule Update',
  level: 'TOEIC',
  content: [
    'Due to the forecast of heavy rain this weekend, the Midtown Farmers Market will open two hours later than usual on Saturday.',
    'Vendors will begin serving customers at 10:00 a.m. instead of 8:00 a.m.',
    'The market will still close at its regular time of 3:00 p.m.',
    'Updates about weather-related changes will be posted on our social media accounts.'
  ],
  vocabulary: [
    { word: 'forecast', meaning: 'dự báo' },
    { word: 'vendor', meaning: 'người bán hàng/gian hàng' },
    { word: 'instead of', meaning: 'thay vì' },
    { word: 'weather-related', meaning: 'liên quan đến thời tiết' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why is the market schedule changing?',
      options: [
        'A festival is being held nearby',
        'There is a forecast of heavy rain',
        'Too few vendors registered',
        'The market is moving locations'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên cho biết lịch thay đổi vì dự báo có mưa lớn.'
    },
    {
      id: 'q2',
      text: 'What time will the market open on Saturday?',
      options: [
        '8:00 a.m.',
        '9:00 a.m.',
        '10:00 a.m.',
        '11:00 a.m.'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ hai nói các gian hàng sẽ bắt đầu phục vụ lúc 10:00 a.m. thay vì 8:00 a.m.'
    },
    {
      id: 'q3',
      text: 'Where can customers find more updates?',
      options: [
        'On a printed flyer',
        'At city hall',
        'On social media accounts',
        'By calling each vendor'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối cho biết các cập nhật liên quan thời tiết sẽ được đăng trên mạng xã hội.'
    }
  ]
},
{
  id: 'toeic-39',
  title: 'Reminder to Return Borrowed Equipment',
  level: 'TOEIC',
  content: [
    'This is a reminder that the projector you borrowed from the media center is due for return on Friday, November 22.',
    'Please return it by 5:00 p.m. so it can be prepared for the next reservation.',
    'Late returns may result in a temporary suspension of borrowing privileges.',
    'If you need the equipment for a longer period, contact the media center before the due date to request an extension.'
  ],
  vocabulary: [
    { word: 'borrowed', meaning: 'đã mượn' },
    { word: 'due date', meaning: 'hạn trả' },
    { word: 'borrowing privilege', meaning: 'quyền được mượn' },
    { word: 'extension', meaning: 'gia hạn' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What item must be returned?',
      options: [
        'A laptop',
        'A printer',
        'A projector',
        'A camera'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu đầu tiên nói rõ thiết bị đã mượn là projector.'
    },
    {
      id: 'q2',
      text: 'What may happen if the item is returned late?',
      options: [
        'The reservation will be canceled permanently',
        'Borrowing privileges may be temporarily suspended',
        'The user must buy new equipment',
        'A staff meeting will be scheduled'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba cho biết trả muộn có thể dẫn đến việc bị tạm đình chỉ quyền mượn.'
    },
    {
      id: 'q3',
      text: 'What should the borrower do to keep the equipment longer?',
      options: [
        'Ignore the reminder',
        'Pay a fee immediately',
        'Contact the media center before the due date',
        'Return it and borrow it again later'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối hướng dẫn liên hệ media center trước hạn trả để xin gia hạn.'
    }
  ]
},
{
  id: 'toeic-40',
  title: 'Community Center Class Registration',
  level: 'TOEIC',
  content: [
    'Registration is now open for evening classes at the Brookdale Community Center.',
    'This season’s courses include beginner photography, conversational Spanish, and basic computer skills.',
    'Classes begin on September 9, and the registration deadline is September 2.',
    'To enroll, complete the form on our website or visit the center office during business hours.'
  ],
  vocabulary: [
    { word: 'registration', meaning: 'việc đăng ký' },
    { word: 'course', meaning: 'khóa học/lớp học' },
    { word: 'deadline', meaning: 'hạn chót' },
    { word: 'enroll', meaning: 'ghi danh' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is being announced?',
      options: [
        'A volunteer event',
        'A new office opening',
        'Registration for evening classes',
        'A building repair schedule'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu đầu tiên nói registration hiện đã mở cho các lớp học buổi tối tại community center.'
    },
    {
      id: 'q2',
      text: 'Which course is mentioned?',
      options: [
        'Advanced accounting',
        'Conversational Spanish',
        'Business law',
        'Graphic design'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai liệt kê các khóa học, trong đó có conversational Spanish.'
    },
    {
      id: 'q3',
      text: 'How can someone enroll?',
      options: [
        'By calling the instructor only',
        'By mailing cash to the office',
        'By completing the website form or visiting the office',
        'By attending the first class without registering'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối nêu 2 cách đăng ký: điền form trên website hoặc đến văn phòng trung tâm.'
    }
  ]
},
{
  id: 'toeic-41',
  title: 'Reminder about Building Access Cards',
  level: 'TOEIC',
  content: [
    'All employees are reminded to carry their building access cards at all times while on company property.',
    'Beginning next week, security staff will check access cards more frequently at the main entrance and parking garage doors.',
    'Employees who forget their cards must sign in at the reception desk and may be asked to show additional identification.',
    'If your access card has been lost or damaged, please contact the facilities office immediately.'
  ],
  vocabulary: [
    { word: 'access card', meaning: 'thẻ ra vào' },
    { word: 'security staff', meaning: 'nhân viên an ninh' },
    { word: 'additional identification', meaning: 'giấy tờ nhận dạng bổ sung' },
    { word: 'facilities office', meaning: 'bộ phận cơ sở vật chất' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What are employees reminded to do?',
      options: [
        'Park only in the main garage',
        'Carry their access cards at all times',
        'Arrive earlier than usual',
        'Report to the security office every morning'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên nêu rõ rằng tất cả nhân viên được nhắc phải mang theo thẻ ra vào mọi lúc khi ở trong khuôn viên công ty.'
    },
    {
      id: 'q2',
      text: 'What will happen beginning next week?',
      options: [
        'The main entrance will be closed',
        'New access cards will be issued',
        'Security checks will become more frequent',
        'Employees will need parking permits'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ hai nói rằng начиная từ tuần tới, nhân viên an ninh sẽ kiểm tra thẻ ra vào thường xuyên hơn.'
    },
    {
      id: 'q3',
      text: 'What should employees do if their access card is lost?',
      options: [
        'Wait for a replacement by mail',
        'Call the parking office',
        'Contact the facilities office immediately',
        'Use a visitor card without permission'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối cùng hướng dẫn rằng nếu thẻ bị mất hoặc hỏng thì phải liên hệ ngay với facilities office.'
    }
  ]
},
{
  id: 'toeic-42',
  title: 'Subscription Renewal Confirmation',
  level: 'TOEIC',
  content: [
    'Thank you for renewing your annual subscription to Business Trends Weekly.',
    'Your renewed subscription will begin on January 1 and continue through December 31 of next year.',
    'As part of your membership, you will receive both digital access and printed copies delivered to your office address.',
    'If you would like to change your delivery information, please update your account settings online.'
  ],
  vocabulary: [
    { word: 'subscription', meaning: 'đăng ký thuê bao' },
    { word: 'renew', meaning: 'gia hạn' },
    { word: 'digital access', meaning: 'quyền truy cập bản điện tử' },
    { word: 'delivery information', meaning: 'thông tin giao nhận' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is the purpose of the message?',
      options: [
        'To request a new payment',
        'To confirm a subscription renewal',
        'To announce a magazine closure',
        'To promote a free trial'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên cảm ơn người nhận đã gia hạn subscription, nên đây là thư xác nhận gia hạn.'
    },
    {
      id: 'q2',
      text: 'What does the subscription include?',
      options: [
        'Only printed copies',
        'Only digital access',
        'Digital access and printed copies',
        'Free training sessions'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba nói rõ rằng membership bao gồm cả digital access và printed copies.'
    },
    {
      id: 'q3',
      text: 'How can the customer change delivery information?',
      options: [
        'By writing to the editor',
        'By updating account settings online',
        'By calling the printing office only',
        'By waiting until the next renewal period'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối nói rằng nếu muốn thay đổi thông tin giao nhận, hãy cập nhật account settings online.'
    }
  ]
},
{
  id: 'toeic-43',
  title: 'Airport Shuttle Service Notice',
  level: 'TOEIC',
  content: [
    'Guests staying at the Lakeview Conference Hotel may use the free airport shuttle service between 6:00 a.m. and 10:00 p.m. daily.',
    'Shuttles depart from the hotel entrance every hour on the hour and travel directly to Terminal 2.',
    'Guests should reserve a seat at the front desk at least 30 minutes before departure.',
    'Please note that oversized luggage may require special arrangements.'
  ],
  vocabulary: [
    { word: 'shuttle service', meaning: 'dịch vụ xe đưa đón' },
    { word: 'depart', meaning: 'khởi hành' },
    { word: 'reserve a seat', meaning: 'đặt chỗ' },
    { word: 'oversized luggage', meaning: 'hành lý cồng kềnh' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Who may use the shuttle service?',
      options: [
        'Any airport passenger',
        'Only hotel staff',
        'Guests staying at the hotel',
        'Conference speakers only'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu đầu tiên nói rõ rằng khách lưu trú tại Lakeview Conference Hotel có thể dùng shuttle service miễn phí.'
    },
    {
      id: 'q2',
      text: 'Where do the shuttles go?',
      options: [
        'To the city train station',
        'To Terminal 2',
        'To the downtown office district',
        'To all airport terminals'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai cho biết shuttle đi thẳng đến Terminal 2.'
    },
    {
      id: 'q3',
      text: 'What should guests do before departure?',
      options: [
        'Pay for the ride online',
        'Check out of the hotel',
        'Reserve a seat at the front desk',
        'Weigh their luggage at reception'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba hướng dẫn khách nên đặt chỗ ở quầy lễ tân ít nhất 30 phút trước giờ khởi hành.'
    }
  ]
},
{
  id: 'toeic-44',
  title: 'Staff Cafeteria Payment Update',
  level: 'TOEIC',
  content: [
    'Starting next month, the employee cafeteria will no longer accept cash payments during lunch hours.',
    'Employees may use company ID cards, credit cards, or the mobile payment app to purchase meals and drinks.',
    'This change is intended to speed up service and reduce waiting times at the register.',
    'Please contact the cafeteria manager if you need assistance setting up the payment app.'
  ],
  vocabulary: [
    { word: 'accept cash payments', meaning: 'nhận thanh toán bằng tiền mặt' },
    { word: 'mobile payment app', meaning: 'ứng dụng thanh toán di động' },
    { word: 'speed up service', meaning: 'tăng tốc độ phục vụ' },
    { word: 'register', meaning: 'quầy thanh toán' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What change will happen next month?',
      options: [
        'The cafeteria will close at lunch time',
        'Cash will no longer be accepted during lunch hours',
        'Employees must bring their own meals',
        'Only drinks will be sold'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên nêu rõ rằng từ tháng tới cafeteria sẽ không còn nhận tiền mặt trong giờ ăn trưa.'
    },
    {
      id: 'q2',
      text: 'Why is this change being made?',
      options: [
        'To reduce food prices',
        'To improve food quality',
        'To speed up service and reduce waiting time',
        'To limit the number of customers'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba cho biết thay đổi này nhằm tăng tốc độ phục vụ và giảm thời gian chờ tại quầy.'
    },
    {
      id: 'q3',
      text: 'Whom should employees contact for help with the app?',
      options: [
        'The finance department',
        'The cafeteria manager',
        'The reception desk',
        'The company president'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối hướng dẫn liên hệ cafeteria manager nếu cần hỗ trợ cài đặt ứng dụng thanh toán.'
    }
  ]
},
{
  id: 'toeic-45',
  title: 'Community Pool Closure Announcement',
  level: 'TOEIC',
  content: [
    'The Westbrook Community Pool will be closed from February 5 to February 9 for annual cleaning and equipment inspection.',
    'Swimming lessons and water aerobics classes scheduled during that period will be rescheduled for the following week.',
    'Members may use the fitness room and indoor track as usual while the pool is unavailable.',
    'Please check the recreation center website for revised class times.'
  ],
  vocabulary: [
    { word: 'annual cleaning', meaning: 'vệ sinh thường niên' },
    { word: 'equipment inspection', meaning: 'kiểm tra thiết bị' },
    { word: 'rescheduled', meaning: 'được dời lịch' },
    { word: 'revised', meaning: 'được điều chỉnh' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Why will the pool be closed?',
      options: [
        'Because of a staff shortage',
        'For annual cleaning and equipment inspection',
        'To host a private event',
        'Because the weather is too cold'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên nêu rõ hồ bơi sẽ đóng cửa để vệ sinh thường niên và kiểm tra thiết bị.'
    },
    {
      id: 'q2',
      text: 'What will happen to classes during the closure?',
      options: [
        'They will be canceled permanently',
        'They will move to a different pool',
        'They will be rescheduled for the following week',
        'They will take place outdoors'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ hai cho biết swimming lessons và water aerobics classes sẽ được dời sang tuần sau.'
    },
    {
      id: 'q3',
      text: 'What can members still use?',
      options: [
        'Only the parking area',
        'The fitness room and indoor track',
        'The outdoor pool',
        'The café only'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba nói rằng members vẫn có thể dùng fitness room và indoor track như thường lệ.'
    }
  ]
},
{
  id: 'toeic-46',
  title: 'Invitation to Client Appreciation Event',
  level: 'TOEIC',
  content: [
    'We are pleased to invite you to our annual Client Appreciation Evening on Thursday, September 26, at the Regency Ballroom.',
    'The event will begin at 6:00 p.m. and will feature light refreshments, live music, and a presentation on our newest consulting services.',
    'Please reply by September 15 so we can confirm seating and catering arrangements.',
    'We hope you will join us for this special opportunity to celebrate our partnership.'
  ],
  vocabulary: [
    { word: 'appreciation', meaning: 'sự trân trọng/tri ân' },
    { word: 'feature', meaning: 'bao gồm, có' },
    { word: 'catering arrangement', meaning: 'sắp xếp tiệc/đồ ăn thức uống' },
    { word: 'partnership', meaning: 'quan hệ hợp tác' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What kind of event is being announced?',
      options: [
        'A training workshop',
        'A product launch',
        'A client appreciation event',
        'A job fair'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu đầu tiên ghi rõ đây là annual Client Appreciation Evening.'
    },
    {
      id: 'q2',
      text: 'What will be included at the event?',
      options: [
        'A sports competition',
        'Live music and a presentation',
        'Job interviews',
        'A factory tour'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai liệt kê light refreshments, live music, và presentation về consulting services mới.'
    },
    {
      id: 'q3',
      text: 'By when should guests reply?',
      options: [
        'September 26',
        'September 20',
        'September 15',
        'September 1'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ ba yêu cầu người nhận phản hồi trước ngày September 15.'
    }
  ]
},
{
  id: 'toeic-47',
  title: 'Notice about Software Update',
  level: 'TOEIC',
  content: [
    'All employees using the Horizon Accounting System will receive a software update this Friday after 7:00 p.m.',
    'The update includes improved reporting tools, faster search functions, and several security enhancements.',
    'Users may experience temporary service interruptions during the installation period.',
    'Please save your work and log out of the system before leaving the office on Friday.'
  ],
  vocabulary: [
    { word: 'software update', meaning: 'bản cập nhật phần mềm' },
    { word: 'reporting tool', meaning: 'công cụ báo cáo' },
    { word: 'enhancement', meaning: 'cải tiến' },
    { word: 'installation period', meaning: 'thời gian cài đặt' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What will happen on Friday after 7:00 p.m.?',
      options: [
        'A training session will begin',
        'A software update will be installed',
        'The accounting office will close permanently',
        'Employees must attend a meeting'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên cho biết người dùng Horizon Accounting System sẽ nhận software update vào tối thứ Sáu sau 7:00 p.m.'
    },
    {
      id: 'q2',
      text: 'What is one improvement included in the update?',
      options: [
        'Printed manuals',
        'Faster search functions',
        'Lower subscription fees',
        'New office furniture'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai liệt kê improved reporting tools, faster search functions, và security enhancements.'
    },
    {
      id: 'q3',
      text: 'What should users do before leaving on Friday?',
      options: [
        'Back up the company website',
        'Send a report to accounting',
        'Save their work and log out',
        'Turn off all office lights'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối yêu cầu người dùng lưu công việc và đăng xuất khỏi hệ thống trước khi rời văn phòng.'
    }
  ]
},
{
  id: 'toeic-48',
  title: 'Parking Permit Renewal Reminder',
  level: 'TOEIC',
  content: [
    'This is a reminder that employee parking permits for the downtown garage will expire on March 31.',
    'To avoid losing access to the garage, please renew your permit by completing the online form and paying the renewal fee.',
    'Renewed permits will be activated automatically on April 1.',
    'If you no longer need a parking space, please notify the transportation office as soon as possible.'
  ],
  vocabulary: [
    { word: 'permit', meaning: 'giấy phép/thẻ phép' },
    { word: 'expire', meaning: 'hết hạn' },
    { word: 'renewal fee', meaning: 'phí gia hạn' },
    { word: 'activated', meaning: 'được kích hoạt' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is this reminder about?',
      options: [
        'A public transportation discount',
        'The expiration of parking permits',
        'A garage maintenance schedule',
        'A change in office hours'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu đầu tiên nói rõ đây là lời nhắc rằng parking permits sẽ hết hạn vào March 31.'
    },
    {
      id: 'q2',
      text: 'How can employees renew their permit?',
      options: [
        'By visiting the garage manager in person',
        'By completing an online form and paying a fee',
        'By calling the transportation office only',
        'By signing a paper form at reception'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai giải thích rằng để gia hạn, nhân viên phải hoàn thành online form và trả renewal fee.'
    },
    {
      id: 'q3',
      text: 'When will renewed permits become active?',
      options: [
        'March 31',
        'April 1',
        'April 15',
        'Immediately after payment'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba nói rõ renewed permits sẽ được kích hoạt tự động vào April 1.'
    }
  ]
},
{
  id: 'toeic-49',
  title: 'Exhibition Ticket Information',
  level: 'TOEIC',
  content: [
    'Tickets are now on sale for the Modern Design Exhibition opening at City Arts Hall on May 12.',
    'General admission tickets cost $18, while students and seniors may purchase discounted tickets for $12.',
    'Visitors who buy tickets online before May 1 will receive free access to the audio guide.',
    'For group reservations of ten or more people, please contact the box office directly.'
  ],
  vocabulary: [
    { word: 'general admission', meaning: 'vé vào cửa thông thường' },
    { word: 'discounted', meaning: 'được giảm giá' },
    { word: 'audio guide', meaning: 'thiết bị/hướng dẫn âm thanh' },
    { word: 'box office', meaning: 'quầy vé' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'How much is a general admission ticket?',
      options: [
        '$10',
        '$12',
        '$18',
        '$20'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu thứ hai nêu rõ general admission tickets có giá $18.'
    },
    {
      id: 'q2',
      text: 'What will visitors get if they buy tickets online before May 1?',
      options: [
        'A free printed catalog',
        'Access to the audio guide',
        'A discount on transportation',
        'A reserved parking space'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ ba nói khách mua vé online trước May 1 sẽ được free access to the audio guide.'
    },
    {
      id: 'q3',
      text: 'Who should contact the box office directly?',
      options: [
        'Students only',
        'Visitors needing wheelchair access',
        'Groups of ten or more people',
        'Anyone buying online tickets'
      ],
      correctAnswerIndex: 2,
      explanation: 'Câu cuối chỉ rõ rằng group reservations từ mười người trở lên nên liên hệ box office trực tiếp.'
    }
  ]
},
{
  id: 'toeic-50',
  title: 'Final Reminder for Survey Participation',
  level: 'TOEIC',
  content: [
    'This is the final reminder to complete the employee workplace satisfaction survey by Friday at 5:00 p.m.',
    'The survey takes less than ten minutes and covers topics such as communication, office facilities, and training opportunities.',
    'Responses are anonymous and will be used to help management improve the work environment.',
    'Employees who have not yet participated can access the survey through the link in the company intranet announcement.'
  ],
  vocabulary: [
    { word: 'final reminder', meaning: 'lời nhắc cuối cùng' },
    { word: 'anonymous', meaning: 'ẩn danh' },
    { word: 'work environment', meaning: 'môi trường làm việc' },
    { word: 'intranet announcement', meaning: 'thông báo trên mạng nội bộ' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'What is employees’ deadline to complete the survey?',
      options: [
        'Friday at 5:00 p.m.',
        'Friday at noon',
        'Thursday evening',
        'Next Monday morning'
      ],
      correctAnswerIndex: 0,
      explanation: 'Câu đầu tiên nêu rõ đây là lời nhắc cuối cùng để hoàn thành survey trước Friday at 5:00 p.m.'
    },
    {
      id: 'q2',
      text: 'What is one topic included in the survey?',
      options: [
        'Customer prices',
        'Office facilities',
        'Marketing campaigns',
        'Shipping methods'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu thứ hai liệt kê các chủ đề như communication, office facilities và training opportunities.'
    },
    {
      id: 'q3',
      text: 'How can employees access the survey?',
      options: [
        'By asking their manager for a paper copy',
        'Through a link in the company intranet announcement',
        'By calling the HR office',
        'By visiting the reception desk'
      ],
      correctAnswerIndex: 1,
      explanation: 'Câu cuối nói rằng những nhân viên chưa tham gia có thể truy cập survey qua liên kết trong company intranet announcement.'
    }
  ]
}
];