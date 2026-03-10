import { Passage } from '../types';

export const c1Passages: Passage[] = [
  {
    id: 'c1-1',
    title: 'The Ethics of Artificial Intelligence',
    level: 'C1',
    content: [
      "As Artificial Intelligence (AI) becomes more sophisticated and integrated into daily life, ethical considerations have moved to the forefront of technological discourse.",
      "One major concern is algorithmic bias. AI systems learn from vast datasets, and if these datasets contain historical biases, the AI may inadvertently perpetuate or even exacerbate discrimination in areas such as hiring, lending, and law enforcement.",
      "Another critical issue is transparency and accountability. Many advanced AI models operate as 'black boxes,' meaning their decision-making processes are opaque even to their creators. When an AI system makes a harmful error, determining liability becomes a complex legal and moral puzzle.",
      "Furthermore, the potential for widespread job displacement due to automation raises profound socioeconomic questions. While AI will undoubtedly create new industries, the transition period could be highly disruptive for workers whose skills become obsolete. Addressing these ethical challenges requires a multidisciplinary approach involving technologists, ethicists, policymakers, and the public."
    ],
    vocabulary: [
      { word: 'Sophisticated', meaning: 'Tinh vi, phức tạp' },
      { word: 'Inadvertently', meaning: 'Vô tình' },
      { word: 'Exacerbate', meaning: 'Làm trầm trọng thêm' },
      { word: 'Opaque', meaning: 'Không minh bạch, khó hiểu' },
      { word: 'Obsolete', meaning: 'Lỗi thời' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'How does algorithmic bias typically originate according to the text?',
        options: ['From malicious programmers intentionally coding bias', 'From the historical biases present in the training datasets', 'From the hardware used to run the AI systems', 'From the users interacting with the AI'],
        correctAnswerIndex: 1,
        explanation: 'The text states: "AI systems learn from vast datasets, and if these datasets contain historical biases, the AI may inadvertently perpetuate... discrimination."'
      },
      {
        id: 'q2',
        text: 'What does the term "black box" refer to in the context of AI?',
        options: ['The physical casing of the computer servers', 'The fact that AI can only process negative information', 'The opacity of the AI\'s decision-making process', 'A specific type of algorithm used for facial recognition'],
        correctAnswerIndex: 2,
        explanation: 'The text explains: "Many advanced AI models operate as \'black boxes,\' meaning their decision-making processes are opaque even to their creators."'
      },
      {
        id: 'q3',
        text: 'What is suggested as a necessary approach to address AI ethical challenges?',
        options: ['Halting all AI development immediately', 'Leaving the regulation entirely to tech companies', 'A multidisciplinary approach involving various stakeholders', 'Focusing solely on the economic benefits of AI'],
        correctAnswerIndex: 2,
        explanation: 'The text concludes: "Addressing these ethical challenges requires a multidisciplinary approach involving technologists, ethicists, policymakers, and the public."'
      }
    ]
  },
  {
    id: 'c1-2',
    title: 'Climate Change and Global Policy',
    level: 'C1',
    content: [
      "The mitigation of anthropogenic climate change stands as the most pressing global challenge of the 21st century. The scientific consensus is unequivocal: the accumulation of greenhouse gases, primarily carbon dioxide from the combustion of fossil fuels, is driving a rapid increase in global mean temperatures.",
      "Addressing this crisis requires coordinated international action, a paradigm exemplified by the Paris Agreement. This landmark accord aims to limit global warming to well below 2 degrees Celsius, preferably to 1.5 degrees, compared to pre-industrial levels. Achieving this necessitates a profound transformation of the global energy infrastructure, shifting from carbon-intensive sources to renewable alternatives such as solar, wind, and geothermal power.",
      "However, the implementation of these policies is fraught with economic and political complexities. Developing nations often argue that they should not be penalized for a crisis predominantly caused by the historical emissions of industrialized countries. They advocate for the principle of 'common but differentiated responsibilities,' demanding financial and technological assistance to facilitate their transition to green economies.",
      "Furthermore, the transition poses significant challenges for industries reliant on fossil fuels, leading to political resistance and lobbying efforts that can stall legislative progress. Ultimately, overcoming these hurdles requires not only technological innovation but also unprecedented political will and international solidarity."
    ],
    vocabulary: [
      { word: 'Anthropogenic', meaning: 'Gây ra bởi con người' },
      { word: 'Unequivocal', meaning: 'Rõ ràng, không thể chối cãi' },
      { word: 'Mitigation', meaning: 'Sự giảm nhẹ, làm dịu' },
      { word: 'Differentiated', meaning: 'Được phân biệt, khác biệt' },
      { word: 'Solidarity', meaning: 'Sự đoàn kết' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the primary goal of the Paris Agreement as mentioned in the text?',
        options: ['To completely eliminate the use of fossil fuels by 2050.', 'To limit global warming to well below 2 degrees Celsius compared to pre-industrial levels.', 'To provide financial assistance to all developing nations.', 'To penalize industrialized countries for historical emissions.'],
        correctAnswerIndex: 1,
        explanation: 'The text states: "This landmark accord aims to limit global warming to well below 2 degrees Celsius, preferably to 1.5 degrees, compared to pre-industrial levels."'
      },
      {
        id: 'q2',
        text: 'What does the principle of "common but differentiated responsibilities" imply in this context?',
        options: ['All countries must reduce emissions by the exact same percentage.', 'Developing nations should bear the primary cost of the transition.', 'Industrialized nations have a greater responsibility due to historical emissions and should assist developing nations.', 'Climate change affects all countries equally, regardless of their economic status.'],
        correctAnswerIndex: 2,
        explanation: 'The text explains that developing nations argue they shouldn\'t be penalized for a crisis caused by industrialized countries\' historical emissions, and demand assistance based on this principle.'
      },
      {
        id: 'q3',
        text: 'According to the passage, what is a major obstacle to implementing climate policies?',
        options: ['A lack of scientific consensus on the causes of climate change.', 'The high cost of renewable energy sources like solar and wind.', 'Political resistance and lobbying from industries reliant on fossil fuels.', 'The refusal of developing nations to participate in the Paris Agreement.'],
        correctAnswerIndex: 2,
        explanation: 'The text notes: "...the transition poses significant challenges for industries reliant on fossil fuels, leading to political resistance and lobbying efforts that can stall legislative progress."'
      }
    ]
  }
];
