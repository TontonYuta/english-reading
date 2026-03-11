import { Passage } from '../types';

export const itPassages: Passage[] = [
{
    id: 'it-1',
    title: 'Algorithms & Logic - Thuật toán và Logic',
    level: 'IT',
    content: [
      "An algorithm is a step-by-step set of instructions designed to perform a specific task. (Thuật toán là một tập hợp các hướng dẫn từng bước được thiết kế để thực hiện một nhiệm vụ cụ thể.)",
      "In the world of computers, an algorithm acts like a recipe for a cake. (Trong thế giới máy tính, một thuật toán đóng vai trò giống như một công thức nấu bánh.)",
      "The first step in creating an algorithm is clearly defining the input. (Bước đầu tiên trong việc tạo ra một thuật toán là xác định rõ ràng đầu vào - dữ liệu bạn cung cấp.)",
      "The next phase is the processing, where the instructions are executed in a logical sequence. (Giai đoạn tiếp theo là xử lý, nơi các hướng dẫn được thực hiện theo một trình tự logic.)",
      "Finally, the algorithm produces an output, which is the result or solution. (Cuối cùng, thuật toán tạo ra một đầu ra, chính là kết quả hoặc giải pháp cho vấn đề.)",
      "A good algorithm must be efficient, meaning it uses the least amount of time and memory. (Một thuật toán tốt phải hiệu quả, nghĩa là nó sử dụng ít thời gian và bộ nhớ nhất có thể.)",
      "Programmers often use flowcharts to visualize the logic of an algorithm. (Các lập trình viên thường sử dụng lưu đồ để trực quan hóa logic của một thuật toán.)",
      "Sorting algorithms are commonly used to organize data in alphabetical or numerical order. (Các thuật toán sắp xếp thường được sử dụng để tổ chức dữ liệu theo thứ tự bảng chữ cái hoặc chữ số.)",
      "Search engines like Google use complex algorithms to find the most relevant information. (Các công cụ tìm kiếm như Google sử dụng các thuật toán phức tạp để tìm kiếm thông tin phù hợp nhất.)",
      "Even in daily life, we use simple algorithms like following a morning routine. (Ngay cả trong cuộc sống hàng ngày, chúng ta cũng sử dụng các thuật toán đơn giản như việc thực hiện các thói quen buổi sáng.)",
      "The logic of an algorithm must be precise to avoid errors or bugs in the software. (Logic của một thuật toán phải chính xác để tránh các lỗi hoặc 'bug' trong phần mềm.)",
      "Understanding algorithms is the foundation of all computer science and programming. (Hiểu rõ về thuật toán chính là nền tảng của mọi ngành khoa học máy tính và lập trình.)"
    ],
    vocabulary: [
      { word: 'Algorithm', meaning: 'Thuật toán' },
      { word: 'Input / Output', meaning: 'Đầu vào / Đầu ra' },
      { word: 'Sequence', meaning: 'Trình tự / Chuỗi' },
      { word: 'Efficient', meaning: 'Hiệu quả / Tối ưu' },
      { word: 'Flowchart', meaning: 'Lưu đồ / Sơ đồ luồng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the best comparison for an algorithm according to the text? (Phép so sánh nào tốt nhất cho thuật toán theo bài đọc?)',
        options: [
          'A physical keyboard (Một chiếc bàn phím vật lý)',
          'A recipe for a cake (Một công thức nấu bánh)',
          'A large computer monitor (Một màn hình máy tính lớn)',
          'A digital camera (Một chiếc máy ảnh kỹ thuật số)'
        ],
        correctAnswerIndex: 1,
        explanation: 'The text states that an algorithm acts like a recipe, telling the machine exactly what to do step-by-step. (Bài viết nêu rằng thuật toán hoạt động giống như một công thức, hướng dẫn máy tính chính xác những gì cần làm theo từng bước.)'
      },
      {
        id: 'q2',
        text: 'What are the three core stages of an algorithm process? (Ba giai đoạn cốt lõi của một quy trình thuật toán là gì?)',
        options: [
          'Design, Paint, and Sell (Thiết kế, Vẽ và Bán)',
          'Input, Processing, and Output (Đầu vào, Xử lý và Đầu ra)',
          'Keyboard, Mouse, and Screen (Bàn phím, Chuột và Màn hình)',
          'Hardware, Software, and People (Phần cứng, Phần mềm và Con người)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Algorithms require input (data), processing (logic), and then they produce an output (result). (Thuật toán yêu cầu đầu vào (dữ liệu), xử lý (logic) và sau đó tạo ra đầu ra (kết quả).)'
      },
      {
        id: 'q3',
        text: 'What does it mean if an algorithm is "efficient"? (Một thuật toán "hiệu quả" nghĩa là gì?)',
        options: [
          'It is very expensive to buy (Nó rất đắt để mua)',
          'It uses the least amount of time and memory (Nó sử dụng ít thời gian và bộ nhớ nhất)',
          'It has many colorful images (Nó có nhiều hình ảnh màu sắc)',
          'It only works on mobile phones (Nó chỉ hoạt động trên điện thoại)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Efficiency in computer science refers to optimizing performance by saving time and system resources. (Hiệu quả trong khoa học máy tính đề cập đến việc tối ưu hóa hiệu suất bằng cách tiết kiệm thời gian và tài nguyên hệ thống.)'
      },
      {
        id: 'q4',
        text: 'Why do programmers use flowcharts? (Tại sao các lập trình viên sử dụng lưu đồ?)',
        options: [
          'To make the computer run faster (Để máy tính chạy nhanh hơn)',
          'To visualize the logic before writing code (Để trực quan hóa logic trước khi viết mã)',
          'To replace the need for a mouse (Để thay thế nhu cầu sử dụng chuột)',
          'To print the code on paper (Để in mã ra giấy)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Flowcharts help developers see and plan the step-by-step logic of their program visually. (Lưu đồ giúp các nhà phát triển nhìn thấy và lập kế hoạch logic từng bước của chương trình một cách trực quan.)'
      },
      {
        id: 'q5',
        text: 'What is a common use for "sorting algorithms"? (Công dụng phổ biến của "thuật toán sắp xếp" là gì?)',
        options: [
          'Deleting all files (Xóa tất cả các tệp)',
          'Organizing data in order (Tổ chức dữ liệu theo thứ tự)',
          'Turning off the power (Tắt nguồn điện)',
          'Creating social media accounts (Tạo tài khoản mạng xã hội)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Sorting algorithms are specifically designed to put data into a specific, organized order. (Thuật toán sắp xếp được thiết kế đặc biệt để đưa dữ liệu vào một thứ tự cụ thể, có tổ chức.)'
      }
    ]
  },
  {
    id: 'it-2',
    title: 'Computer Architecture - Kiến trúc máy tính',
    level: 'IT',
    content: [
      "Computer architecture is the design and organization of a computer system. (Kiến trúc máy tính là thiết kế và cách tổ chức của một hệ thống máy tính.)",
      "The CPU (Central Processing Unit) acts as the brain, processing all instructions. (CPU - Đơn vị xử lý trung tâm - đóng vai trò là bộ não, xử lý mọi chỉ dẫn.)",
      "RAM (Random Access Memory) is short-term memory that stores data while the computer is running. (RAM là bộ nhớ ngắn hạn, lưu trữ dữ liệu trong khi máy tính đang hoạt động.)",
      "When you turn off the power, all data in RAM is lost. (Khi bạn tắt nguồn, tất cả dữ liệu trong RAM sẽ bị mất.)",
      "The Hard Drive or SSD is used for long-term storage of files and software. (Ổ cứng hoặc SSD được sử dụng để lưu trữ lâu dài các tệp tin và phần mềm.)",
      "Input devices like keyboards and mice send information into the computer. (Các thiết bị đầu vào như bàn phím và chuột gửi thông tin vào máy tính.)",
      "Output devices like monitors and printers show the results of the processing. (Các thiết bị đầu ra như màn hình và máy in hiển thị kết quả của quá trình xử lý.)",
      "The Motherboard connects all these components so they can talk to each other. (Bo mạch chủ kết nối tất cả các thành phần này để chúng có thể 'nói chuyện' với nhau.)",
      "A GPU (Graphics Processing Unit) is a specialized chip for rendering images and videos. (GPU là một con chip chuyên dụng để kết xuất hình ảnh và video.)",
      "Modern computers use electricity and binary code (0 and 1) to represent data. (Máy tính hiện đại sử dụng điện và mã nhị phân - 0 và 1 - để đại diện cho dữ liệu.)",
      "Buses are the internal pathways that transport data between hardware parts. (Bus là các đường dẫn nội bộ giúp vận chuyển dữ liệu giữa các bộ phận phần cứng.)",
      "Understanding these components helps you choose the right hardware for your needs. (Hiểu rõ các thành phần này giúp bạn chọn đúng phần cứng phù hợp với nhu cầu của mình.)"
    ],
    vocabulary: [
      { word: 'Architecture', meaning: 'Kiến trúc / Cấu trúc' },
      { word: 'Processor (CPU)', meaning: 'Bộ vi xử lý' },
      { word: 'Short-term', meaning: 'Ngắn hạn' },
      { word: 'Long-term', meaning: 'Dài hạn' },
      { word: 'Component', meaning: 'Thành phần / Linh kiện' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Which part of the computer is compared to a human brain? (Bộ phận nào của máy tính được so sánh với bộ não con người?)',
        options: [
          'The Monitor (Màn hình)',
          'The Keyboard (Bàn phím)',
          'The CPU (Bộ vi xử lý)',
          'The Hard Drive (Ổ cứng)'
        ],
        correctAnswerIndex: 2,
        explanation: 'The CPU processes all instructions and calculations, just like a brain. (CPU xử lý tất cả các chỉ dẫn và tính toán, giống hệt như một bộ não.)'
      },
      {
        id: 'q2',
        text: 'What happens to data in RAM when the power is turned off? (Điều gì xảy ra với dữ liệu trong RAM khi tắt nguồn điện?)',
        options: [
          'It is saved forever (Nó được lưu vĩnh viễn)',
          'It is deleted or lost (Nó bị xóa sạch hoặc bị mất)',
          'It becomes a printed document (Nó trở thành một tài liệu in)',
          'It moves to the keyboard (Nó di chuyển sang bàn phím)'
        ],
        correctAnswerIndex: 1,
        explanation: 'RAM is volatile memory, meaning it only holds data while it has power. (RAM là bộ nhớ khả biến, nghĩa là nó chỉ giữ dữ liệu khi có điện.)'
      },
      {
        id: 'q3',
        text: 'Which component is used for long-term storage? (Linh kiện nào được dùng để lưu trữ lâu dài?)',
        options: [
          'RAM (Bộ nhớ tạm)',
          'Hard Drive or SSD (Ổ cứng hoặc SSD)',
          'Mouse (Chuột)',
          'CPU (Bộ vi xử lý)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Hard Drives and SSDs keep data even when there is no electricity. (Ổ cứng và SSD giữ dữ liệu ngay cả khi không có điện.)'
      },
      {
        id: 'q4',
        text: 'What is the main role of the Motherboard? (Vai trò chính của Bo mạch chủ là gì?)',
        options: [
          'To clean the screen (Để làm sạch màn hình)',
          'To connect all hardware components (Để kết nối tất cả linh kiện phần cứng)',
          'To play music (Để chơi nhạc)',
          'To replace the CPU (Để thay thế CPU)'
        ],
        correctAnswerIndex: 1,
        explanation: 'The Motherboard is the main circuit board that allows all parts to communicate. (Bo mạch chủ là bảng mạch chính cho phép tất cả các bộ phận liên lạc với nhau.)'
      },
      {
        id: 'q5',
        text: 'Which of these is an example of an "Input" device? (Thiết bị nào sau đây là ví dụ về thiết bị "Đầu vào"?)',
        options: [
          'Printer (Máy in)',
          'Speaker (Loa)',
          'Monitor (Màn hình)',
          'Keyboard (Bàn phím)'
        ],
        correctAnswerIndex: 3,
        explanation: 'A keyboard is used to put data into the system, making it an input device. (Bàn phím được dùng để đưa dữ liệu vào hệ thống, vì vậy nó là thiết bị đầu vào.)'
      }
    ]
  },
  {
    id: 'it-3',
    title: 'Variables & Data Types - Biến và Kiểu dữ liệu',
    level: 'IT',
    content: [
      "In programming, a variable is a named container used to store data values. (Trong lập trình, một biến là một vật chứa có tên được sử dụng để lưu trữ các giá trị dữ liệu.)",
      "Think of a variable as a labeled box where you can put different items inside. (Hãy tưởng tượng biến như một chiếc hộp được dán nhãn, nơi bạn có thể đặt các vật dụng khác nhau vào bên trong.)",
      "Each variable has a specific data type that defines what kind of value it can hold. (Mỗi biến có một kiểu dữ liệu cụ thể để xác định loại giá trị mà nó có thể chứa.)",
      "An 'Integer' (int) represents whole numbers, such as 10, -5, or 0. (Kiểu 'Số nguyên' đại diện cho các số nguyên, chẳng hạn như 10, -5 hoặc 0.)",
      "A 'String' is a sequence of characters, usually enclosed in quotation marks, like 'Hello World'. (Một 'Chuỗi' là một dãy các ký tự, thường được đặt trong dấu ngoặc kép, như 'Hello World'.)",
      "The 'Boolean' data type can only have two possible values: true or false. (Kiểu dữ liệu 'Boolean' chỉ có thể có hai giá trị: đúng hoặc sai.)",
      "Floating-point numbers, or 'Floats', are used for numbers with decimal points like 3.14. (Số thực dấu phẩy động, hay 'Floats', được sử dụng cho các số có dấu thập phân như 3.14.)",
      "Before using a variable, programmers must often 'declare' it by giving it a name and a type. (Trước khi sử dụng một biến, lập trình viên thường phải 'khai báo' nó bằng cách đặt tên và xác định kiểu.)",
      "The value of a variable can change during the execution of a program. (Giá trị của một biến có thể thay đổi trong quá trình thực thi chương trình.)",
      "Choosing the correct data type is important for memory efficiency and preventing errors. (Chọn đúng kiểu dữ liệu rất quan trọng để tối ưu bộ nhớ và ngăn ngừa lỗi.)",
      "Modern languages like Python can automatically detect the data type, while others like C++ require explicit definition. (Các ngôn ngữ hiện đại như Python có thể tự động nhận diện kiểu dữ liệu, trong khi các ngôn ngữ khác như C++ yêu cầu định nghĩa rõ ràng.)",
      "Mastering variables is the first step in writing dynamic and interactive software. (Làm chủ các biến là bước đầu tiên để viết phần mềm linh hoạt và tương tác.)"
    ],
    vocabulary: [
      { word: 'Variable', meaning: 'Biến số' },
      { word: 'Data Type', meaning: 'Kiểu dữ liệu' },
      { word: 'Declare', meaning: 'Khai báo' },
      { word: 'Integer', meaning: 'Số nguyên' },
      { word: 'Boolean', meaning: 'Kiểu đúng/sai' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is a variable compared to in the text? (Biến được so sánh với cái gì trong bài đọc?)',
        options: [
          'A fast car (Một chiếc xe nhanh)',
          'A labeled box (Một chiếc hộp có dán nhãn)',
          'A digital clock (Một chiếc đồng hồ kỹ thuật số)',
          'A heavy hammer (Một chiếc búa nặng)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Variables store values inside a named container, much like a box with a label. (Biến lưu trữ các giá trị bên trong một vật chứa có tên, giống như một chiếc hộp có dán nhãn.)'
      },
      {
        id: 'q2',
        text: 'Which data type would you use for the number 3.14? (Bạn sẽ sử dụng kiểu dữ liệu nào cho số 3.14?)',
        options: [
          'Integer (Số nguyên)',
          'String (Chuỗi)',
          'Boolean (Đúng/Sai)',
          'Float (Số thập phân)'
        ],
        correctAnswerIndex: 3,
        explanation: 'Floats are used specifically for numbers with decimal points. (Kiểu Float được sử dụng cụ thể cho các số có dấu phẩy thập phân.)'
      },
      {
        id: 'q3',
        text: 'What are the two possible values of a Boolean? (Hai giá trị có thể có của kiểu Boolean là gì?)',
        options: [
          'Yes or No (Có hoặc Không)',
          '0 or 100 (0 hoặc 100)',
          'True or False (Đúng hoặc Sai)',
          'High or Low (Cao hoặc Thấp)'
        ],
        correctAnswerIndex: 2,
        explanation: 'In computer logic, a Boolean represents a binary state: true or false. (Trong logic máy tính, Boolean đại diện cho một trạng thái nhị phân: đúng hoặc sai.)'
      },
      {
        id: 'q4',
        text: 'What is a "String" in programming? ("String" trong lập trình là gì?)',
        options: [
          'A piece of physical wire (Một đoạn dây điện vật lý)',
          'A sequence of characters like text (Một chuỗi các ký tự như văn bản)',
          'A type of computer battery (Một loại pin máy tính)',
          'A mathematical formula (Một công thức toán học)'
        ],
        correctAnswerIndex: 1,
        explanation: 'A string is a data type used for representing text. (String là kiểu dữ liệu được sử dụng để đại diện cho văn bản.)'
      },
      {
        id: 'q5',
        text: 'Why is it important to choose the correct data type? (Tại sao việc chọn đúng kiểu dữ liệu lại quan trọng?)',
        options: [
          'To make the computer look better (Để làm máy tính trông đẹp hơn)',
          'To use more power (Để sử dụng nhiều năng lượng hơn)',
          'For memory efficiency and error prevention (Để tối ưu bộ nhớ và ngăn ngừa lỗi)',
          'To speed up the internet (Để tăng tốc internet)'
        ],
        correctAnswerIndex: 2,
        explanation: 'Correct data types ensure the system uses memory wisely and processes data without crashing. (Kiểu dữ liệu chính xác đảm bảo hệ thống sử dụng bộ nhớ khôn ngoan và xử lý dữ liệu mà không bị lỗi.)'
      }
    ]
  },
  {
    id: 'it-4',
    title: 'Control Flow - Cấu trúc điều khiển',
    level: 'IT',
    content: [
      "Control flow is the order in which individual statements or instructions are executed. (Cấu trúc điều khiển là thứ tự mà các câu lệnh hoặc hướng dẫn được thực thi.)",
      "By default, a program runs from the top to the bottom, line by line. (Theo mặc định, một chương trình chạy từ trên xuống dưới, từng dòng một.)",
      "An 'If-Else' statement allows the program to make decisions based on a condition. (Câu lệnh 'If-Else' cho phép chương trình đưa ra quyết định dựa trên một điều kiện.)",
      "If the condition is true, the program executes one block of code; otherwise, it skips it. (Nếu điều kiện là đúng, chương trình thực thi một khối mã; nếu không, nó sẽ bỏ qua.)",
      "Think of 'If-Else' like a traffic light: If it is green, you go; else, you stop. (Hãy tưởng tượng 'If-Else' như đèn giao thông: Nếu đèn xanh, bạn đi; nếu không, bạn dừng lại.)",
      "Loops are used to repeat a specific block of code multiple times. (Vòng lặp được sử dụng để lặp lại một khối mã cụ thể nhiều lần.)",
      "A 'For' loop is often used when you know exactly how many times you want to repeat a task. (Vòng lặp 'For' thường được dùng khi bạn biết chính xác mình muốn lặp lại một tác vụ bao nhiêu lần.)",
      "A 'While' loop continues to run as long as a certain condition remains true. (Vòng lặp 'While' tiếp tục chạy miễn là một điều kiện nhất định vẫn còn đúng.)",
      "Using loops prevents programmers from writing the same code over and over again. (Sử dụng vòng lặp giúp lập trình viên không phải viết đi viết lại cùng một đoạn mã.)",
      "The 'Break' statement can be used to stop a loop immediately. (Câu lệnh 'Break' có thể được sử dụng để dừng vòng lặp ngay lập tức.)",
      "Control flow makes software dynamic and capable of handling complex logic. (Cấu trúc điều khiển giúp phần mềm trở nên linh hoạt và có khả năng xử lý các logic phức tạp.)",
      "Mastering these structures is essential for solving real-world problems with code. (Làm chủ các cấu trúc này là điều thiết yếu để giải quyết các vấn đề thực tế bằng mã nguồn.)"
    ],
    vocabulary: [
      { word: 'Statement', meaning: 'Câu lệnh' },
      { word: 'Condition', meaning: 'Điều kiện' },
      { word: 'Execute', meaning: 'Thực thi / Chạy' },
      { word: 'Loop', meaning: 'Vòng lặp' },
      { word: 'Dynamic', meaning: 'Linh hoạt / Động' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does an "If-Else" statement allow a program to do? (Câu lệnh "If-Else" cho phép chương trình làm gì?)',
        options: [
          'Change the color of the computer (Thay đổi màu sắc máy tính)',
          'Make decisions based on conditions (Đưa ra quyết định dựa trên các điều kiện)',
          'Turn off the internet (Tắt kết nối internet)',
          'Increase the storage space (Tăng dung lượng lưu trữ)'
        ],
        correctAnswerIndex: 1,
        explanation: 'If-Else statements allow the program to branch out and perform different actions based on a condition. (Câu lệnh If-Else cho phép chương trình rẽ nhánh và thực hiện các hành động khác nhau dựa trên một điều kiện.)'
      },
      {
        id: 'q2',
        text: 'When is a "For" loop typically used? (Khi nào vòng lặp "For" thường được sử dụng?)',
        options: [
          'When the computer is broken (Khi máy tính bị hỏng)',
          'When you want to delete a file (Khi bạn muốn xóa một tệp)',
          'When the number of repetitions is known (Khi đã biết số lần lặp lại)',
          'When you want to change a variable name (Khi bạn muốn đổi tên biến)'
        ],
        correctAnswerIndex: 2,
        explanation: 'A For loop is used when the programmer knows in advance how many times the code should repeat. (Vòng lặp For được dùng khi lập trình viên biết trước mã cần lặp lại bao nhiêu lần.)'
      },
      {
        id: 'q3',
        text: 'What happens in a "While" loop? (Điều gì xảy ra trong một vòng lặp "While"?)',
        options: [
          'It runs only once (Nó chỉ chạy một lần)',
          'It runs as long as a condition is true (Nó chạy miễn là điều kiện còn đúng)',
          'It never runs (Nó không bao giờ chạy)',
          'It only runs at night (Nó chỉ chạy vào ban đêm)'
        ],
        correctAnswerIndex: 1,
        explanation: 'A While loop repeats its code as long as the specified condition remains true. (Vòng lặp While lặp lại mã của nó miễn là điều kiện đã xác định vẫn còn đúng.)'
      },
      {
        id: 'q4',
        text: 'What is the purpose of the "Break" statement? (Mục đích của câu lệnh "Break" là gì?)',
        options: [
          'To break the hardware (Làm hỏng phần cứng)',
          'To stop a loop immediately (Để dừng vòng lặp ngay lập tức)',
          'To start a new program (Để bắt đầu một chương trình mới)',
          'To slow down the processor (Để làm chậm bộ vi xử lý)'
        ],
        correctAnswerIndex: 1,
        explanation: 'The Break command is used to exit a loop early, even if the condition is still true. (Lệnh Break được dùng để thoát khỏi vòng lặp sớm, ngay cả khi điều kiện vẫn đúng.)'
      },
      {
        id: 'q5',
        text: 'How does a program usually run without control flow? (Một chương trình thường chạy như thế nào nếu không có cấu trúc điều khiển?)',
        options: [
          'From bottom to top (Từ dưới lên trên)',
          'Randomly (Ngẫu nhiên)',
          'From top to bottom, line by line (Từ trên xuống dưới, từng dòng một)',
          'It does not run at all (Nó không chạy chút nào)'
        ],
        correctAnswerIndex: 2,
        explanation: 'By default, code execution follows a sequential order from the first line to the last. (Theo mặc định, việc thực thi mã tuân theo trình tự tuần tự từ dòng đầu tiên đến dòng cuối cùng.)'
      }
    ]
  },
  {
    id: 'it-5',
    title: 'Functions & Methods - Hàm và Phương thức',
    level: 'IT',
    content: [
      "A function is a reusable block of code designed to perform a specific task. (Hàm là một khối mã có thể tái sử dụng được thiết kế để thực hiện một nhiệm vụ cụ thể.)",
      "Functions help to organize code and avoid repetition. (Hàm giúp tổ chức mã nguồn và tránh việc lặp lại.)",
      "To use a function, you must 'call' it by its name. (Để sử dụng một hàm, bạn phải 'gọi' nó bằng tên của nó.)",
      "Parameters are inputs passed into a function so it can process data. (Tham số là các đầu vào được truyền vào hàm để nó có thể xử lý dữ liệu.)",
      "A function can 'return' a value as a result of its operation. (Một hàm có thể 'trả về' một giá trị như là kết quả của hoạt động của nó.)",
      "Think of a function like a juice blender: you put in fruit (input), it blends (process), and gives you juice (output). (Hãy tưởng tượng hàm như một máy xay sinh tố: bạn cho trái cây vào (đầu vào), nó xay (xử lý), và đưa cho bạn nước trái cây (đầu ra).)",
      "Methods are similar to functions but are associated with specific objects. (Phương thức tương tự như hàm nhưng được gắn liền với các đối tượng cụ thể.)",
      "Defining functions makes the code much easier to read and maintain. (Việc định nghĩa các hàm giúp mã nguồn dễ đọc và bảo trì hơn nhiều.)",
      "A well-written function should only do one thing and do it well. (Một hàm được viết tốt chỉ nên làm một việc duy nhất và làm tốt việc đó.)",
      "Libraries and frameworks are collections of pre-written functions. (Thư viện và framework là tập hợp các hàm đã được viết sẵn.)",
      "The main function is usually the starting point of a computer program. (Hàm 'main' thường là điểm bắt đầu của một chương trình máy tính.)",
      "Understanding functions is key to mastering modular programming. (Hiểu về hàm là chìa khóa để làm chủ lập trình theo mô-đun.)"
    ],
    vocabulary: [
      { word: 'Function', meaning: 'Hàm' },
      { word: 'Call / Invoke', meaning: 'Gọi hàm' },
      { word: 'Parameter', meaning: 'Tham số' },
      { word: 'Return', meaning: 'Trả về' },
      { word: 'Reusable', meaning: 'Có thể tái sử dụng' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main advantage of using functions? (Lợi ích chính của việc sử dụng hàm là gì?)',
        options: [
          'To make the code longer (Để làm mã nguồn dài hơn)',
          'To reuse code and avoid repetition (Để tái sử dụng mã và tránh lặp lại)',
          'To increase computer temperature (Để làm tăng nhiệt độ máy tính)',
          'To delete variables (Để xóa các biến)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Functions allow you to write logic once and reuse it everywhere. (Hàm cho phép bạn viết logic một lần và tái sử dụng ở mọi nơi.)'
      },
      {
        id: 'q2',
        text: 'What are "parameters" in a function? ("Tham số" trong một hàm là gì?)',
        options: [
          'The name of the function (Tên của hàm)',
          'The inputs passed into the function (Các đầu vào được truyền vào hàm)',
          'The physical parts of the CPU (Các bộ phận vật lý của CPU)',
          'The errors in the code (Các lỗi trong mã nguồn)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Parameters act as placeholders for the data you want the function to process. (Tham số đóng vai trò là vật chứa cho dữ liệu mà bạn muốn hàm xử lý.)'
      },
      {
        id: 'q3',
        text: 'What does it mean to "call" a function? ("Gọi" một hàm nghĩa là gì?)',
        options: [
          'To delete the function (Xóa hàm đó đi)',
          'To shout the function name (Hét to tên hàm)',
          'To execute the code inside the function (Thực thi mã bên trong hàm đó)',
          'To change the function type (Thay đổi kiểu của hàm)'
        ],
        correctAnswerIndex: 2,
        explanation: 'When you call a function, the program jumps to that function and runs its instructions. (Khi bạn gọi một hàm, chương trình sẽ nhảy đến hàm đó và chạy các hướng dẫn bên trong.)'
      },
      {
        id: 'q4',
        text: 'What is the "return" value of a function? (Giá trị "trả về" của một hàm là gì?)',
        options: [
          'The final result produced by the function (Kết quả cuối cùng do hàm tạo ra)',
          'The error message (Thông báo lỗi)',
          'The input data (Dữ liệu đầu vào)',
          'The time it takes to run (Thời gian để chạy hàm)'
        ],
        correctAnswerIndex: 0,
        explanation: 'The return value is the "output" or the answer that the function sends back. (Giá trị trả về là "đầu ra" hoặc câu trả lời mà hàm gửi ngược trở lại.)'
      },
      {
        id: 'q5',
        text: 'Where is a "Method" typically found? (Một "Phương thức" thường được tìm thấy ở đâu?)',
        options: [
          'Floating alone in the code (Nằm lơ lửng một mình trong mã)',
          'Attached to a specific object (Gắn liền với một đối tượng cụ thể)',
          'Inside the computer monitor (Bên trong màn hình máy tính)',
          'Only in the operating system (Chỉ có trong hệ điều hành)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Methods are special types of functions that belong to a particular object or class. (Phương thức là loại hàm đặc biệt thuộc về một đối tượng hoặc lớp cụ thể.)'
      }
    ]
  },
  {
    id: 'it-6',
    title: 'HTML & Web Structure - Cấu trúc Web',
    level: 'IT',
    content: [
      "HTML stands for HyperText Markup Language, the standard language for creating web pages. (HTML viết tắt của Ngôn ngữ Đánh dấu Siêu văn bản, ngôn ngữ tiêu chuẩn để tạo các trang web.)",
      "HTML provides the structure of a website, acting like the skeleton of a building. (HTML cung cấp cấu trúc của một trang web, đóng vai trò như khung xương của một tòa nhà.)",
      "Websites are made of HTML 'elements', which are defined by 'tags'. (Các trang web được tạo thành từ các 'phần tử' HTML, được xác định bởi các 'thẻ'.)",
      "Most tags have an opening tag like <p> and a closing tag like </p>. (Hầu hết các thẻ đều có thẻ mở như <p> và thẻ đóng như </p>.)",
      "The <h1> tag is used for the main heading, while <p> is used for paragraphs. (Thẻ <h1> được dùng cho tiêu đề chính, trong khi thẻ <p> được dùng cho các đoạn văn.)",
      "Images are added using the <img> tag, and links are created with the <a> tag. (Hình ảnh được thêm bằng thẻ <img>, và các liên kết được tạo bằng thẻ <a>.)",
      "Attributes provide additional information about elements, such as the 'src' for images. (Thuộc tính cung cấp thông tin bổ sung về các phần tử, chẳng hạn như 'src' cho hình ảnh.)",
      "An HTML document starts with a <!DOCTYPE html> declaration to tell the browser the version. (Một tài liệu HTML bắt đầu bằng khai báo <!DOCTYPE html> để cho trình duyệt biết phiên bản.)",
      "The <body> tag contains all the visible content of the web page. (Thẻ <body> chứa tất cả các nội dung hiển thị của trang web.)",
      "The <head> tag contains metadata and information not shown directly to users. (Thẻ <head> chứa siêu dữ liệu và thông tin không được hiển thị trực tiếp cho người dùng.)",
      "HTML is not a programming language; it is a markup language. (HTML không phải là một ngôn ngữ lập trình; nó là một ngôn ngữ đánh dấu.)",
      "Mastering HTML is the essential first step for any Frontend Developer. (Làm chủ HTML là bước đầu tiên thiết yếu đối với bất kỳ Nhà phát triển Frontend nào.)"
    ],
    vocabulary: [
      { word: 'Markup Language', meaning: 'Ngôn ngữ đánh dấu' },
      { word: 'Element', meaning: 'Phần tử' },
      { word: 'Tag', meaning: 'Thẻ' },
      { word: 'Attribute', meaning: 'Thuộc tính' },
      { word: 'Skeleton', meaning: 'Khung xương' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does HTML stand for? (HTML viết tắt của từ gì?)',
        options: [
          'High Tech Modern Language (Ngôn ngữ công nghệ cao hiện đại)',
          'HyperText Markup Language (Ngôn ngữ đánh dấu siêu văn bản)',
          'Hyper Transfer Main Logic (Logic chính truyền tải siêu văn bản)',
          'Home Tool Markup Language (Ngôn ngữ đánh dấu công cụ gia đình)'
        ],
        correctAnswerIndex: 1,
        explanation: 'HTML is the standard language used to describe the structure of web pages. (HTML là ngôn ngữ tiêu chuẩn được dùng để mô tả cấu trúc của các trang web.)'
      },
      {
        id: 'q2',
        text: 'Which tag is used for the most important heading? (Thẻ nào được dùng cho tiêu đề quan trọng nhất?)',
        options: [
          '<h6>',
          '<p>',
          '<h1>',
          '<a>'
        ],
        correctAnswerIndex: 2,
        explanation: 'Heading tags range from <h1> to <h6>, where <h1> is the largest and most important. (Các thẻ tiêu đề chạy từ <h1> đến <h6>, trong đó <h1> là lớn nhất và quan trọng nhất.)'
      },
      {
        id: 'q3',
        text: 'What is the purpose of the <body> tag? (Mục đích của thẻ <body> là gì?)',
        options: [
          'To store invisible settings (Để lưu trữ các cài đặt ẩn)',
          'To contain all visible content (Để chứa tất cả nội dung hiển thị)',
          'To connect to the database (Để kết nối với cơ sở dữ liệu)',
          'To delete the website (Để xóa trang web)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Everything inside the <body> tag is what users see on their screens. (Mọi thứ bên trong thẻ <body> là những gì người dùng nhìn thấy trên màn hình của họ.)'
      },
      {
        id: 'q4',
        text: 'How do you create a link in HTML? (Làm thế nào để tạo một liên kết trong HTML?)',
        options: [
          'Using the <link> tag (Sử dụng thẻ <link>)',
          'Using the <a> tag (Sử dụng thẻ <a>)',
          'Using the <url> tag (Sử dụng thẻ <url>)',
          'Using the <button> tag (Sử dụng thẻ <button>)'
        ],
        correctAnswerIndex: 1,
        explanation: 'The <a> (anchor) tag is used to define hyperlinks to other pages or websites. (Thẻ <a> dùng để xác định các siêu liên kết tới các trang hoặc trang web khác.)'
      },
      {
        id: 'q5',
        text: 'Is HTML a programming language? (HTML có phải là ngôn ngữ lập trình không?)',
        options: [
          'Yes, it is (Đúng, nó là ngôn ngữ lập trình)',
          'No, it is a markup language (Không, nó là ngôn ngữ đánh dấu)',
          'It is a hardware component (Nó là một linh kiện phần cứng)',
          'Only when used with a mouse (Chỉ khi được dùng với chuột)'
        ],
        correctAnswerIndex: 1,
        explanation: 'HTML defines structure and content; it does not have logic like loops or conditions by itself. (HTML định nghĩa cấu trúc và nội dung; bản thân nó không có logic như vòng lặp hay điều kiện.)'
      }
    ]
  },
  {
    id: 'it-7',
    title: 'CSS - Styling the Web - Trang trí Web',
    level: 'IT',
    content: [
      "CSS stands for Cascading Style Sheets, used to style and lay out web pages. (CSS viết tắt của Danh sách Kiểu xếp chồng, được dùng để trang trí và bố cục trang web.)",
      "While HTML defines the content, CSS defines the appearance. (Trong khi HTML định nghĩa nội dung, CSS định nghĩa vẻ ngoài.)",
      "CSS works by using 'selectors' to target HTML elements and apply styles. (CSS hoạt động bằng cách dùng các 'bộ chọn' để nhắm vào các phần tử HTML và áp dụng kiểu dáng.)",
      "A CSS 'property' is a feature you want to change, such as 'color' or 'font-size'. (Một 'thuộc tính' CSS là một đặc điểm bạn muốn thay đổi, như 'màu sắc' hay 'cỡ chữ'.)",
      "The 'value' is the specific setting for a property, like 'red' for color. ( 'Giá trị' là cài đặt cụ thể cho một thuộc tính, như 'màu đỏ' cho thuộc tính màu sắc.)",
      "You can add CSS directly inside an HTML tag, or in a separate '.css' file. (Bạn có thể thêm CSS trực tiếp vào thẻ HTML, hoặc trong một tệp '.css' riêng biệt.)",
      "External CSS files are preferred because they keep the code organized and reusable. (Các tệp CSS bên ngoài được ưu tiên hơn vì chúng giúp mã nguồn gọn gàng và có thể tái sử dụng.)",
      "The 'Box Model' is a key concept describing how margins, borders, and padding work. ( 'Box Model' là một khái niệm then chốt mô tả cách lề, viền và khoảng đệm hoạt động.)",
      "Responsive design with CSS allows websites to look good on both phones and PCs. (Thiết kế đáp ứng với CSS cho phép trang web hiển thị tốt trên cả điện thoại và máy tính.)",
      "You can change the layout of a page using 'Flexbox' or 'Grid' systems. (Bạn có thể thay đổi bố cục của một trang bằng hệ thống 'Flexbox' hoặc 'Grid'.)",
      "Colors in CSS can be defined by names, RGB values, or Hex codes like #FFFFFF. (Màu sắc trong CSS có thể được xác định bằng tên, giá trị RGB, hoặc mã Hex như #FFFFFF.)",
      "Learning CSS transforms a plain document into a beautiful user interface. (Học CSS giúp biến một tài liệu đơn thuần thành một giao diện người dùng đẹp mắt.)"
    ],
    vocabulary: [
      { word: 'Selector', meaning: 'Bộ chọn' },
      { word: 'Property', meaning: 'Thuộc tính' },
      { word: 'Layout', meaning: 'Bố cục' },
      { word: 'Responsive', meaning: 'Đáp ứng (tương thích nhiều màn hình)' },
      { word: 'Margin / Padding', meaning: 'Lề ngoài / Khoảng đệm trong' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the primary role of CSS in web development? (Vai trò chính của CSS trong phát triển web là gì?)',
        options: [
          'To store data in a database (Để lưu trữ dữ liệu vào cơ sở dữ liệu)',
          'To define the appearance and layout (Để định nghĩa vẻ ngoài và bố cục)',
          'To create internet connections (Để tạo các kết nối internet)',
          'To replace the CPU (Để thay thế CPU)'
        ],
        correctAnswerIndex: 1,
        explanation: 'CSS is used to control how HTML elements look, including colors, fonts, and spacing. (CSS được dùng để kiểm soát cách các phần tử HTML hiển thị, bao gồm màu sắc, phông chữ và khoảng cách.)'
      },
      {
        id: 'q2',
        text: 'What is a CSS "selector"? ("Bộ chọn" trong CSS là gì?)',
        options: [
          'A tool to delete code (Một công cụ để xóa mã)',
          'A pattern to find the HTML element to style (Một mẫu để tìm phần tử HTML cần trang trí)',
          'A type of computer mouse (Một loại chuột máy tính)',
          'The name of the website (Tên của trang web)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Selectors are used to "select" the HTML elements you want to apply styles to. (Bộ chọn được dùng để "chọn" các phần tử HTML mà bạn muốn áp dụng kiểu dáng.)'
      },
      {
        id: 'q3',
        text: 'Which CSS concept describes the space around an element? (Khái niệm CSS nào mô tả khoảng không gian xung quanh một phần tử?)',
        // In Box Model, padding is inside, margin is outside. The question refers to the general concept.
        options: [
          'The Box Model (Mô hình hộp)',
          'The Circle Model (Mô hình tròn)',
          'The Data Flow (Luồng dữ liệu)',
          'The Link Tag (Thẻ liên kết)'
        ],
        correctAnswerIndex: 0,
        explanation: 'The Box Model explains how padding, borders, and margins create space around content. (Box Model giải thích cách khoảng đệm, viền và lề tạo ra không gian xung quanh nội dung.)'
      },
      {
        id: 'q4',
        text: 'What does "Responsive Design" mean? ("Thiết kế đáp ứng" nghĩa là gì?)',
        options: [
          'The website responds to voice commands (Trang web phản hồi lệnh bằng giọng nói)',
          'The website is very fast (Trang web chạy rất nhanh)',
          'The website adapts to different screen sizes (Trang web tự thích nghi với các kích cỡ màn hình khác nhau)',
          'The website works without electricity (Trang web hoạt động không cần điện)'
        ],
        correctAnswerIndex: 2,
        explanation: 'Responsive design ensures a good user experience on devices ranging from smartphones to large monitors. (Thiết kế đáp ứng đảm bảo trải nghiệm người dùng tốt trên các thiết bị từ điện thoại đến màn hình lớn.)'
      },
      {
        id: 'q5',
        text: 'Where is the best place to keep your CSS code? (Nơi tốt nhất để đặt mã CSS của bạn là ở đâu?)',
        options: [
          'Inside the <img> tag (Bên trong thẻ <img>)',
          'In a separate .css file (Trong một tệp .css riêng biệt)',
          'In the computer BIOS (Trong BIOS máy tính)',
          'On a piece of paper (Trên một tờ giấy)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Using an external CSS file makes your project cleaner and easier to manage. (Sử dụng tệp CSS bên ngoài giúp dự án của bạn sạch sẽ và dễ quản lý hơn.)'
      }
    ]
  },
  {
    id: 'it-8',
    title: 'JavaScript - The Logic of Web - Logic của Web',
    level: 'IT',
    content: [
      "JavaScript is a programming language that adds interactivity to web pages. (JavaScript là một ngôn ngữ lập trình giúp thêm tính tương tác vào các trang web.)",
      "While HTML and CSS are for structure and style, JavaScript is for behavior. (Trong khi HTML và CSS dành cho cấu trúc và kiểu dáng, JavaScript dành cho hành vi.)",
      "JavaScript can change HTML content and CSS styles dynamically. (JavaScript có thể thay đổi nội dung HTML và kiểu dáng CSS một cách linh hoạt.)",
      "It allows websites to respond to user events like clicks, typing, or scrolling. (Nó cho phép các trang web phản hồi các sự kiện của người dùng như nhấp chuột, nhập liệu hoặc cuộn trang.)",
      "JavaScript runs directly in the web browser of the user. (JavaScript chạy trực tiếp trong trình duyệt web của người dùng.)",
      "Variables in JavaScript can store data like numbers, strings, or even complex objects. (Các biến trong JavaScript có thể lưu trữ dữ liệu như số, chuỗi hoặc thậm chí là các đối tượng phức tạp.)",
      "Functions in JavaScript are used to group code that performs a specific task. (Các hàm trong JavaScript được dùng để nhóm mã thực hiện một nhiệm vụ cụ thể.)",
      "The DOM (Document Object Model) is how JavaScript interacts with HTML elements. (DOM là cách JavaScript tương tác với các phần tử HTML.)",
      "Using 'if' statements, JavaScript can make decisions based on user input. (Sử dụng các câu lệnh 'if', JavaScript có thể đưa ra quyết định dựa trên dữ liệu nhập của người dùng.)",
      "Modern JavaScript can fetch data from servers without reloading the page. (JavaScript hiện đại có thể lấy dữ liệu từ máy chủ mà không cần tải lại trang.)",
      "It is one of the most popular programming languages in the world today. (Nó là một trong những ngôn ngữ lập trình phổ biến nhất thế giới hiện nay.)",
      "Mastering JavaScript is essential for becoming a Full-stack Developer. (Làm chủ JavaScript là điều thiết yếu để trở thành một Nhà phát triển Full-stack.)"
    ],
    vocabulary: [
      { word: 'Interactivity', meaning: 'Tính tương tác' },
      { word: 'Behavior', meaning: 'Hành vi' },
      { word: 'Event', meaning: 'Sự kiện (click, hover...)' },
      { word: 'DOM', meaning: 'Mô hình đối tượng tài liệu' },
      { word: 'Script', meaning: 'Kịch bản / Mã lệnh' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main purpose of JavaScript on a website? (Mục đích chính của JavaScript trên một trang web là gì?)',
        options: [
          'To define the page layout (Để định nghĩa bố cục trang)',
          'To add interactivity and behavior (Để thêm tính tương tác và hành vi)',
          'To print paper documents (Để in tài liệu ra giấy)',
          'To store physical hardware (Để lưu trữ phần cứng vật lý)'
        ],
        correctAnswerIndex: 1,
        explanation: 'JavaScript makes pages "alive" by allowing them to react to user actions. (JavaScript làm cho các trang web "sống động" bằng cách cho phép chúng phản ứng với các hành động của người dùng.)'
      },
      {
        id: 'q2',
        text: 'Where does JavaScript usually run? (JavaScript thường chạy ở đâu?)',
        options: [
          'Inside the computer monitor (Bên trong màn hình máy tính)',
          'Directly in the web browser (Trực tiếp trong trình duyệt web)',
          'Inside the power supply (Bên trong nguồn điện)',
          'Only on a printer (Chỉ trên máy in)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Browsers like Chrome, Firefox, and Safari have built-in engines to execute JavaScript code. (Các trình duyệt như Chrome, Firefox và Safari có các bộ máy tích hợp để thực thi mã JavaScript.)'
      },
      {
        id: 'q3',
        text: 'What is the DOM used for in JavaScript? (DOM được dùng để làm gì trong JavaScript?)',
        options: [
          'To connect to the internet (Để kết nối internet)',
          'To interact with and change HTML elements (Để tương tác và thay đổi các phần tử HTML)',
          'To clean the computer (Để vệ sinh máy tính)',
          'To replace the CSS file (Để thay thế tệp CSS)'
        ],
        correctAnswerIndex: 1,
        explanation: 'The DOM acts as an interface that allows JavaScript to read and edit the content and structure of a page. (DOM đóng vai trò như một giao diện cho phép JavaScript đọc và chỉnh sửa nội dung cũng như cấu trúc của trang.)'
      },
      {
        id: 'q4',
        text: 'Which of these is a JavaScript "event"? (Điều nào sau đây là một "sự kiện" JavaScript?)',
        options: [
          'A user clicking a button (Người dùng nhấp vào một nút)',
          'The color of the text (Màu sắc của văn bản)',
          'The size of the hard drive (Dung lượng ổ cứng)',
          'The weight of the mouse (Trọng lượng của con chuột)'
        ],
        correctAnswerIndex: 0,
        explanation: 'Events are actions that happen in the browser, such as clicking, hovering, or pressing a key. (Sự kiện là những hành động xảy ra trong trình duyệt, chẳng hạn như nhấp chuột, di chuột hoặc nhấn một phím.)'
      },
      {
        id: 'q5',
        text: 'Can JavaScript change CSS styles? (JavaScript có thể thay đổi kiểu dáng CSS không?)',
        options: [
          'No, never (Không bao giờ)',
          'Yes, it can change styles dynamically (Có, nó có thể thay đổi kiểu dáng một cách linh hoạt)',
          'Only if the monitor is red (Chỉ khi màn hình màu đỏ)',
          'Only on Sundays (Chỉ vào Chủ nhật)'
        ],
        correctAnswerIndex: 1,
        explanation: 'JavaScript can access the style properties of elements and modify them in real-time. (JavaScript có thể truy cập các thuộc tính kiểu dáng của phần tử và sửa đổi chúng trong thời gian thực.)'
      }
    ]
  },
  {
    id: 'it-9',
    title: 'Databases & SQL - Cơ sở dữ liệu và SQL',
    level: 'IT',
    content: [
      "A database is an organized collection of structured information or data. (Cơ sở dữ liệu là một tập hợp có tổ chức của các thông tin hoặc dữ liệu có cấu trúc.)",
      "Databases allow applications to store and retrieve data efficiently over a long period. (Cơ sở dữ liệu cho phép các ứng dụng lưu trữ và lấy dữ liệu một cách hiệu quả trong một thời gian dài.)",
      "SQL stands for Structured Query Language, the standard language for managing databases. (SQL viết tắt của Ngôn ngữ Truy vấn có Cấu trúc, ngôn ngữ tiêu chuẩn để quản lý cơ sở dữ liệu.)",
      "In a relational database, data is organized into tables with rows and columns. (Trong cơ sở dữ liệu quan hệ, dữ liệu được tổ chức thành các bảng với các hàng và cột.)",
      "A 'row' represents a single record, while a 'column' represents a specific field of data. (Một 'hàng' đại diện cho một bản ghi duy nhất, trong khi một 'cột' đại diện cho một trường dữ liệu cụ thể.)",
      "The 'SELECT' command is used to fetch data from a database table. (Lệnh 'SELECT' được dùng để lấy dữ liệu từ một bảng trong cơ sở dữ liệu.)",
      "To add new information, programmers use the 'INSERT' command. (Để thêm thông tin mới, các lập trình viên sử dụng lệnh 'INSERT'.)",
      "The 'UPDATE' command allows you to modify existing data in the table. (Lệnh 'UPDATE' cho phép bạn sửa đổi dữ liệu hiện có trong bảng.)",
      "Databases use a 'Primary Key' to uniquely identify each record in a table. (Cơ sở dữ liệu sử dụng 'Khóa chính' để xác định duy nhất từng bản ghi trong một bảng.)",
      "DBMS (Database Management System) is the software used to interact with the database. (DBMS - Hệ quản trị cơ sở dữ liệu - là phần mềm được dùng để tương tác với cơ sở dữ liệu.)",
      "Popular DBMS include MySQL, PostgreSQL, and Microsoft SQL Server. (Các hệ quản trị cơ sở dữ liệu phổ biến bao gồm MySQL, PostgreSQL và Microsoft SQL Server.)",
      "Understanding databases is crucial for building dynamic, data-driven applications. (Hiểu về cơ sở dữ liệu là điều cốt yếu để xây dựng các ứng dụng động dựa trên dữ liệu.)"
    ],
    vocabulary: [
      { word: 'Database', meaning: 'Cơ sở dữ liệu' },
      { word: 'Query', meaning: 'Truy vấn (Câu lệnh hỏi dữ liệu)' },
      { word: 'Record / Row', meaning: 'Bản ghi / Hàng' },
      { word: 'Field / Column', meaning: 'Trường / Cột' },
      { word: 'Primary Key', meaning: 'Khóa chính' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main purpose of a database? (Mục đích chính của cơ sở dữ liệu là gì?)',
        options: [
          'To clean the hardware (Để vệ sinh phần cứng)',
          'To organize and store structured data (Để tổ chức và lưu trữ dữ liệu có cấu trúc)',
          'To make the internet faster (Để làm internet nhanh hơn)',
          'To replace the operating system (Để thay thế hệ điều hành)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Databases are designed to store large amounts of data in a way that is easy to search and manage. (Cơ sở dữ liệu được thiết kế để lưu trữ lượng lớn dữ liệu theo cách dễ dàng tìm kiếm và quản lý.)'
      },
      {
        id: 'q2',
        text: 'What does SQL stand for? (SQL viết tắt của từ gì?)',
        options: [
          'Simple Question Language (Ngôn ngữ câu hỏi đơn giản)',
          'System Quick Logic (Logic hệ thống nhanh)',
          'Structured Query Language (Ngôn ngữ truy vấn có cấu trúc)',
          'Storage Quality Level (Mức độ chất lượng lưu trữ)'
        ],
        correctAnswerIndex: 2,
        explanation: 'SQL is the specific language used to communicate with relational databases. (SQL là ngôn ngữ cụ thể được dùng để giao tiếp với các cơ sở dữ liệu quan hệ.)'
      },
      {
        id: 'q3',
        text: 'Which SQL command is used to retrieve data? (Lệnh SQL nào được dùng để lấy dữ liệu?)',
        options: [
          'DELETE',
          'SELECT',
          'STOP',
          'CREATE'
        ],
        correctAnswerIndex: 1,
        explanation: 'The SELECT statement is the most common command used to "ask" the database for specific information. (Lệnh SELECT là lệnh phổ biến nhất được dùng để "hỏi" cơ sở dữ liệu về các thông tin cụ thể.)'
      },
      {
        id: 'q4',
        text: 'In a database table, what does a "row" represent? (Trong một bảng cơ sở dữ liệu, một "hàng" đại diện cho cái gì?)',
        options: [
          'A single specific record (Một bản ghi cụ thể duy nhất)',
          'The name of the database (Tên của cơ sở dữ liệu)',
          'A type of software (Một loại phần mềm)',
          'The speed of the processor (Tốc độ của bộ vi xử lý)'
        ],
        correctAnswerIndex: 0,
        explanation: 'Each row contains all the information for one item, such as one user or one product. (Mỗi hàng chứa toàn bộ thông tin cho một mục, chẳng hạn như một người dùng hoặc một sản phẩm.)'
      },
      {
        id: 'q5',
        text: 'What is a "Primary Key"? ("Khóa chính" là gì?)',
        options: [
          'The password to open the computer (Mật khẩu mở máy tính)',
          'A unique identifier for each record (Một định danh duy nhất cho mỗi bản ghi)',
          'The most important button on a keyboard (Nút quan trọng nhất trên bàn phím)',
          'A way to turn off the database (Một cách để tắt cơ sở dữ liệu)'
        ],
        correctAnswerIndex: 1,
        explanation: 'A primary key ensures that every record in a table can be found and distinguished from others. (Khóa chính đảm bảo rằng mọi bản ghi trong một bảng đều có thể được tìm thấy và phân biệt với những bản ghi khác.)'
      }
    ]
  },
  {
    id: 'it-10',
    title: 'Backend & Servers - Hậu phương và Máy chủ',
    level: 'IT',
    content: [
      "Backend development focuses on the server-side logic that powers a website. (Phát triển Backend tập trung vào logic phía máy chủ giúp vận hành một trang web.)",
      "A server is a high-performance computer that provides data and services to other computers. (Máy chủ là một máy tính hiệu suất cao cung cấp dữ liệu và dịch vụ cho các máy tính khác.)",
      "When you log in, the backend checks your credentials against the database. (Khi bạn đăng nhập, backend sẽ kiểm tra thông tin xác thực của bạn với cơ sở dữ liệu.)",
      "The communication between frontend and backend is often done through an API. (Sự giao tiếp giữa frontend và backend thường được thực hiện thông qua API.)",
      "An API (Application Programming Interface) acts as a bridge for data exchange. (API - Giao diện lập trình ứng dụng - đóng vai trò như một cây cầu để trao đổi dữ liệu.)",
      "Backend languages include Python, Java, Node.js, and PHP. (Các ngôn ngữ Backend bao gồm Python, Java, Node.js và PHP.)",
      "The server processes requests and sends back responses, usually in JSON format. (Máy chủ xử lý các yêu cầu và gửi lại phản hồi, thường ở định dạng JSON.)",
      "Security is a major part of backend work, protecting user data from hackers. (Bảo mật là một phần quan trọng của công việc backend, bảo vệ dữ liệu người dùng khỏi tin tặc.)",
      "Cloud computing services like AWS or Google Cloud provide virtual servers for developers. (Các dịch vụ điện toán đám mây như AWS hay Google Cloud cung cấp các máy chủ ảo cho lập trình viên.)",
      "A 'Request' is what the user asks for, and a 'Response' is what the server gives back. ( 'Request' là những gì người dùng yêu cầu, và 'Response' là những gì máy chủ trả về.)",
      "Backend developers manage the logic, database, and server configurations. (Các nhà phát triển Backend quản lý logic, cơ sở dữ liệu và cấu hình máy chủ.)",
      "A complete application needs both a frontend and a backend to function properly. (Một ứng dụng hoàn chỉnh cần cả frontend và backend để hoạt động bình thường.)"
    ],
    vocabulary: [
      { word: 'Server', meaning: 'Máy chủ' },
      { word: 'API', meaning: 'Giao diện lập trình ứng dụng' },
      { word: 'Request / Response', meaning: 'Yêu cầu / Phản hồi' },
      { word: 'Cloud Computing', meaning: 'Điện toán đám mây' },
      { word: 'Security', meaning: 'Bảo mật' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the main focus of Backend development? (Trọng tâm chính của phát triển Backend là gì?)',
        options: [
          'Designing the colors of buttons (Thiết kế màu sắc của các nút)',
          'Managing server-side logic and data (Quản lý logic phía máy chủ và dữ liệu)',
          'Buying physical keyboards (Mua bàn phím vật lý)',
          'Printing paper documents (In tài liệu giấy)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Backend is about how the application works behind the scenes, including data and logic. (Backend nói về cách ứng dụng hoạt động đằng sau hậu trường, bao gồm dữ liệu và logic.)'
      },
      {
        id: 'q2',
        text: 'What acts as a "bridge" between the frontend and the backend? (Cái gì đóng vai trò là "cây cầu" giữa frontend và backend?)',
        options: [
          'A monitor (Màn hình)',
          'An API (Giao diện lập trình ứng dụng)',
          'A mouse (Con chuột)',
          'A printer (Máy in)'
        ],
        correctAnswerIndex: 1,
        explanation: 'APIs allow different parts of software to talk to each other and share data. (API cho phép các phần khác nhau của phần mềm nói chuyện với nhau và chia sẻ dữ liệu.)'
      },
      {
        id: 'q3',
        text: 'Which of the following is a backend programming language? (Ngôn ngữ nào sau đây là ngôn ngữ lập trình backend?)',
        options: [
          'HTML',
          'CSS',
          'Python',
          'Photoshop'
        ],
        correctAnswerIndex: 2,
        explanation: 'While HTML and CSS are for frontend, Python is a powerful language used for server-side logic. (Trong khi HTML và CSS dành cho frontend, Python là một ngôn ngữ mạnh mẽ được dùng cho logic phía máy chủ.)'
      },
      {
        id: 'q4',
        text: 'What is a "Server"? ("Máy chủ" là gì?)',
        options: [
          'A high-performance computer that provides services (Một máy tính hiệu suất cao cung cấp dịch vụ)',
          'A person who works at a restaurant (Một người làm việc tại nhà hàng)',
          'A type of software to draw pictures (Một loại phần mềm để vẽ tranh)',
          'The cable used to connect a mouse (Dây cáp dùng để kết nối chuột)'
        ],
        correctAnswerIndex: 0,
        explanation: 'Servers are dedicated computers that stay on to serve data to users over the internet. (Máy chủ là các máy tính chuyên dụng luôn bật để phục vụ dữ liệu cho người dùng qua internet.)'
      },
      {
        id: 'q5',
        text: 'What happens in a "Request-Response" cycle? (Điều gì xảy ra trong một chu kỳ "Yêu cầu - Phản hồi"?)',
        options: [
          'The computer turns off (Máy tính tắt)',
          'The user asks for data and the server gives it back (Người dùng yêu cầu dữ liệu và máy chủ trả lại nó)',
          'The user buys a new server (Người dùng mua máy chủ mới)',
          'The printer runs out of ink (Máy in hết mực)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Everything on the web works by the browser sending a request and the server sending back a response. (Mọi thứ trên web hoạt động bằng cách trình duyệt gửi một yêu cầu và máy chủ gửi lại một phản hồi.)'
      }
    ]
  },
  {
    id: 'it-11',
    title: 'Cybersecurity Fundamentals - Cơ bản về Bảo mật mạng',
    level: 'IT',
    content: [
      "Cybersecurity is the practice of protecting systems, networks, and data from digital attacks. (Bảo mật mạng là việc thực hành bảo vệ các hệ thống, mạng lưới và dữ liệu khỏi các cuộc tấn công kỹ thuật số.)",
      "The main goal of security is to ensure the confidentiality, integrity, and availability of data. (Mục tiêu chính của bảo mật là đảm bảo tính bảo mật, toàn vẹn và sẵn sàng của dữ liệu.)",
      "Encryption is the process of converting information into a secret code to prevent unauthorized access. (Mã hóa là quá trình chuyển đổi thông tin thành một mã bí mật để ngăn chặn truy cập trái phép.)",
      "A 'Hacker' is someone who uses technical skills to gain unauthorized access to data. ( 'Hacker' là người sử dụng các kỹ năng kỹ thuật để có được quyền truy cập trái phép vào dữ liệu.)",
      "Phishing is a common attack where hackers send fake emails to steal passwords. (Phishing là một cuộc tấn công phổ biến nơi hacker gửi email giả mạo để đánh cắp mật khẩu.)",
      "Firewalls act as a barrier between a trusted network and untrusted networks like the internet. (Tường lửa đóng vai trò như một rào cản giữa một mạng tin cậy và các mạng không tin cậy như internet.)",
      "Malware is malicious software designed to damage or disable computers. (Malware là phần mềm độc hại được thiết kế để làm hỏng hoặc vô hiệu hóa máy tính.)",
      "Using strong, unique passwords and Multi-Factor Authentication (MFA) is essential. (Sử dụng mật khẩu mạnh, duy nhất và xác thực đa yếu tố - MFA là điều thiết yếu.)",
      "Vulnerabilities are weaknesses in software that hackers can exploit. (Lỗ hổng là những điểm yếu trong phần mềm mà hacker có thể khai thác.)",
      "White-hat hackers are security experts who use their skills for protection and testing. (Hacker mũ trắng là các chuyên gia bảo mật sử dụng kỹ năng của mình để bảo vệ và kiểm thử.)",
      "Regularly updating software helps fix security bugs and keep systems safe. (Cập nhật phần mềm thường xuyên giúp sửa các lỗi bảo mật và giữ cho hệ thống an toàn.)",
      "As technology grows, cybersecurity becomes more important for every business. (Khi công nghệ phát triển, bảo mật mạng ngày càng trở nên quan trọng đối với mọi doanh nghiệp.)"
    ],
    vocabulary: [
      { word: 'Encryption', meaning: 'Mã hóa' },
      { word: 'Vulnerability', meaning: 'Lỗ hổng bảo mật' },
      { word: 'Malicious', meaning: 'Độc hại' },
      { word: 'Authentication', meaning: 'Xác thực' },
      { word: 'Integrity', meaning: 'Tính toàn vẹn' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What is the purpose of "Encryption"? (Mục đích của "Mã hóa" là gì?)',
        options: [
          'To make the computer faster (Để làm máy tính nhanh hơn)',
          'To convert data into a secret code (Để chuyển dữ liệu thành mã bí mật)',
          'To delete old files (Để xóa các tệp cũ)',
          'To print secure documents (Để in tài liệu bảo mật)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Encryption ensures that even if data is stolen, it cannot be read without the correct key. (Mã hóa đảm bảo rằng ngay cả khi dữ liệu bị đánh cắp, nó cũng không thể đọc được nếu không có khóa chính xác.)'
      },
      {
        id: 'q2',
        text: 'What does a "Firewall" do? (Tường lửa làm nhiệm vụ gì?)',
        options: [
          'It puts out fires in the office (Nó dập tắt hỏa hoạn trong văn phòng)',
          'It blocks unauthorized network traffic (Nó chặn các lưu lượng mạng không được phép)',
          'It cools down the CPU (Nó làm mát CPU)',
          'It connects the mouse to the PC (Nó kết nối chuột với máy tính)'
        ],
        correctAnswerIndex: 1,
        explanation: 'A firewall monitors and controls incoming and outgoing network traffic based on security rules. (Tường lửa giám sát và kiểm soát lưu lượng mạng ra vào dựa trên các quy tắc bảo mật.)'
      },
      {
        id: 'q3',
        text: 'What is "Phishing"? (Phishing là gì?)',
        options: [
          'Catching fish in the ocean (Bắt cá dưới đại dương)',
          'Stealing passwords via fake emails (Đánh cắp mật khẩu qua email giả mạo)',
          'Buying a new computer (Mua một chiếc máy tính mới)',
          'Creating a new social media post (Tạo một bài đăng mạng xã hội mới)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Phishing is a social engineering attack where hackers trick users into giving up sensitive info. (Phishing là một cuộc tấn công lừa đảo xã hội nơi hacker lừa người dùng cung cấp thông tin nhạy cảm.)'
      },
      {
        id: 'q4',
        text: 'Why is Multi-Factor Authentication (MFA) important? (Tại sao xác thực đa yếu tố - MFA lại quan trọng?)',
        options: [
          'It makes login much slower (Nó làm việc đăng nhập chậm hơn nhiều)',
          'It adds an extra layer of security (Nó thêm một lớp bảo mật bổ sung)',
          'It costs a lot of money (Nó tốn rất nhiều tiền)',
          'It fixes the computer screen (Nó sửa màn hình máy tính)'
        ],
        correctAnswerIndex: 1,
        explanation: 'MFA requires more than just a password, making it harder for hackers to get in. (MFA yêu cầu nhiều hơn là chỉ một mật khẩu, khiến hacker khó xâm nhập hơn.)'
      },
      {
        id: 'q5',
        text: 'Who is a "White-hat hacker"? (Hacker mũ trắng là ai?)',
        options: [
          'A criminal who steals money (Một tội phạm ăn trộm tiền)',
          'A person who wears a white hat (Một người đội chiếc mũ màu trắng)',
          'A security expert who protects systems (Một chuyên gia bảo mật giúp bảo vệ hệ thống)',
          'Someone who fixes printers (Người sửa máy in)'
        ],
        correctAnswerIndex: 2,
        explanation: 'White-hat hackers use their skills for good, helping organizations find and fix security flaws. (Hacker mũ trắng sử dụng kỹ năng của họ cho mục đích tốt, giúp các tổ chức tìm và sửa các lỗi bảo mật.)'
      }
    ]
  },
  {
    id: 'it-12',
    title: 'Mobile App Development - Phát triển ứng dụng di động',
    level: 'IT',
    content: [
      "Mobile app development is the process of creating software for smartphones and tablets. (Phát triển ứng dụng di động là quy trình tạo ra phần mềm cho điện thoại thông minh và máy tính bảng.)",
      "The two most popular mobile operating systems are Android and iOS. (Hai hệ điều hành di động phổ biến nhất là Android và iOS.)",
      "Native apps are built specifically for one platform using languages like Swift for iOS or Kotlin for Android. (Ứng dụng gốc - Native - được xây dựng riêng cho một nền tảng bằng ngôn ngữ như Swift cho iOS hoặc Kotlin cho Android.)",
      "Cross-platform tools allow developers to write one codebase for both iOS and Android. (Các công cụ đa nền tảng cho phép lập trình viên viết một bộ mã nguồn cho cả iOS và Android.)",
      "Popular cross-platform frameworks include Flutter and React Native. (Các khung phần mềm đa nền tảng phổ biến bao gồm Flutter và React Native.)",
      "Mobile apps must be designed for touch screens and smaller displays. (Các ứng dụng di động phải được thiết kế cho màn hình cảm ứng và kích thước hiển thị nhỏ hơn.)",
      "The user interface (UI) and user experience (UX) are critical for a successful mobile app. (Giao diện người dùng - UI - và trải nghiệm người dùng - UX - là những yếu tố then chốt cho một ứng dụng di động thành công.)",
      "Apps can access device features like the camera, GPS, and sensors. (Các ứng dụng có thể truy cập các tính năng của thiết bị như camera, GPS và các cảm biến.)",
      "Mobile apps are usually distributed through app stores like Google Play or the Apple App Store. (Các ứng dụng di động thường được phân phối qua các cửa hàng ứng dụng như Google Play hoặc Apple App Store.)",
      "Performance optimization is important because mobile devices have limited battery and memory. (Tối ưu hóa hiệu suất là rất quan trọng vì các thiết bị di động có pin và bộ nhớ hạn chế.)",
      "Testing on different screen sizes and devices is a key part of the development process. (Kiểm thử trên các kích cỡ màn hình và thiết bị khác nhau là một phần quan trọng của quy trình phát triển.)",
      "Mobile development is a fast-growing field with constant updates and new features. (Phát triển di động là một lĩnh vực phát triển nhanh chóng với các cập nhật và tính năng mới liên tục.)"
    ],
    vocabulary: [
      { word: 'Native App', meaning: 'Ứng dụng gốc (riêng cho 1 hệ điều hành)' },
      { word: 'Cross-platform', meaning: 'Đa nền tảng' },
      { word: 'Framework', meaning: 'Khung phần mềm / Bộ khung' },
      { word: 'User Interface (UI)', meaning: 'Giao diện người dùng' },
      { word: 'Codebase', meaning: 'Mã nguồn / Bộ mã' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What are the two dominant mobile operating systems today? (Hai hệ điều hành di động thống trị hiện nay là gì?)',
        options: [
          'Windows and Linux (Windows và Linux)',
          'Android and iOS',
          'MacOS and ChromeOS',
          'DOS and Unix'
        ],
        correctAnswerIndex: 1,
        explanation: 'Android (owned by Google) and iOS (owned by Apple) power almost all smartphones today. (Android - của Google - và iOS - của Apple - vận hành hầu hết điện thoại thông minh ngày nay.)'
      },
      {
        id: 'q2',
        text: 'What is a "Native App"? (Ứng dụng "Native" là gì?)',
        options: [
          'An app that works only on computers (Ứng dụng chỉ chạy trên máy tính)',
          'An app built for a specific platform like iOS or Android (Ứng dụng được xây dựng riêng cho một nền tảng như iOS hoặc Android)',
          'An app that does not need internet (Ứng dụng không cần internet)',
          'An app that is free for everyone (Ứng dụng miễn phí cho mọi người)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Native apps are written in languages specific to the OS for better performance and integration. (Ứng dụng Native được viết bằng các ngôn ngữ dành riêng cho hệ điều hành để có hiệu suất và sự tích hợp tốt hơn.)'
      },
      {
        id: 'q3',
        text: 'What is the advantage of "Cross-platform" development? (Lợi thế của phát triển "Đa nền tảng" là gì?)',
        options: [
          'It makes the phone battery last longer (Nó làm pin điện thoại dùng lâu hơn)',
          'You can write one codebase for both iOS and Android (Bạn có thể viết một bộ mã cho cả iOS và Android)',
          'It is only used for playing games (Nó chỉ được dùng để chơi game)',
          'It replaces the need for a screen (Nó thay thế nhu cầu về màn hình)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Cross-platform tools like Flutter save time and money by allowing one code to run on multiple systems. (Các công cụ đa nền tảng như Flutter giúp tiết kiệm thời gian và tiền bạc bằng cách cho phép một mã nguồn chạy trên nhiều hệ thống.)'
      },
      {
        id: 'q4',
        text: 'Why is UI/UX design especially important for mobile apps? (Tại sao thiết kế UI/UX lại đặc biệt quan trọng đối với ứng dụng di động?)',
        options: [
          'Because mobile screens are large (Vì màn hình di động rất lớn)',
          'Because mobile screens are small and use touch input (Vì màn hình di động nhỏ và sử dụng đầu vào bằng cảm ứng)',
          'Because apps only show black and white colors (Vì các ứng dụng chỉ hiển thị màu đen trắng)',
          'Because phones do not have processors (Vì điện thoại không có bộ vi xử lý)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Good design ensures users can easily interact with the app on a limited screen space using their fingers. (Thiết kế tốt đảm bảo người dùng có thể dễ dàng tương tác với ứng dụng trên không gian màn hình hạn chế bằng ngón tay của họ.)'
      },
      {
        id: 'q5',
        text: 'How are mobile apps usually delivered to users? (Các ứng dụng di động thường được đưa đến tay người dùng bằng cách nào?)',
        options: [
          'Through a CD-ROM (Thông qua đĩa CD)',
          'Through app stores like Google Play or App Store (Thông qua các cửa hàng ứng dụng như Google Play hoặc App Store)',
          'By mail in an envelope (Gửi qua bưu điện trong phong bì)',
          'Through the computer printer (Thông qua máy in máy tính)'
        ],
        correctAnswerIndex: 1,
        explanation: 'App stores are the central platforms where users can search, download, and update mobile apps safely. (Cửa hàng ứng dụng là các nền tảng trung tâm nơi người dùng có thể tìm kiếm, tải xuống và cập nhật ứng dụng di động một cách an toàn.)'
      }
    ]
  }
];