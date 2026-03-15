# 📚 English Reader App

Ứng dụng luyện đọc tiếng Anh thông minh với hệ thống phân cấp độ từ **A1 đến C2**, hỗ trợ theo dõi tiến độ học tập, quản lý thành tích, đồng bộ kết quả lên Google Sheets, và cập nhật nội dung/giao diện từ xa thông qua cơ chế **OTA (Over-The-Air)**.

---

## Mục lục

- [1. Giới thiệu](#1-giới-thiệu)
- [2. Tính năng chính](#2-tính-năng-chính)
- [3. Công nghệ sử dụng](#3-công-nghệ-sử-dụng)
- [4. Cấu trúc thư mục dữ liệu](#4-cấu-trúc-thư-mục-dữ-liệu)
- [5. Hướng dẫn cài đặt và chạy local](#5-hướng-dẫn-cài-đặt-và-chạy-local)
- [6. Hướng dẫn cập nhật dữ liệu bài đọc](#6-hướng-dẫn-cập-nhật-dữ-liệu-bài-đọc)
- [7. Hướng dẫn thêm thành tích mới](#7-hướng-dẫn-thêm-thành-tích-mới)
- [8. Hướng dẫn thêm cấp độ hoặc chủ đề mới](#8-hướng-dẫn-thêm-cấp-độ-hoặc-chủ-đề-mới)
- [9. Hệ thống OTA hoạt động như thế nào](#9-hệ-thống-ota-hoạt-động-như-thế-nào)
- [10. Cách phát hành bản cập nhật mới](#10-cách-phát-hành-bản-cập-nhật-mới)
- [11. Cấu hình Google Apps Script](#11-cấu-hình-google-apps-script)
- [12. Lưu ý về icon](#12-lưu-ý-về-icon)
- [13. Lưu ý môi trường thử nghiệm](#13-lưu-ý-môi-trường-thử-nghiệm)

---

## 1. Giới thiệu

**English Reader App** là ứng dụng hỗ trợ học sinh luyện đọc hiểu tiếng Anh theo cấp độ CEFR. Ngoài việc cung cấp bài đọc và câu hỏi trắc nghiệm, ứng dụng còn giúp:

- Theo dõi tiến độ học tập
- Lưu điểm số và lịch sử làm bài
- Mở khóa thành tích khi đạt mốc nhất định
- Đồng bộ kết quả học tập lên Google Sheets
- Cập nhật bài học/giao diện từ xa mà không cần phát hành lại APK

Ứng dụng phù hợp để triển khai dưới dạng web app hoặc mobile app thông qua **Capacitor**.

---

## 2. Tính năng chính

### 📖 Đọc hiểu theo cấp độ
- Phân loại bài đọc từ **A1 đến C2**
- Có thể mở rộng thêm level hoặc chủ đề riêng như `IT`, `Business`, `Science`, v.v.

### ✅ Bài tập trắc nghiệm
- Mỗi bài đọc đi kèm câu hỏi kiểm tra hiểu bài và từ vựng
- Hỗ trợ đáp án đúng, giải thích và chấm điểm tự động

### 📈 Tiến độ học tập
- Tự động lưu trữ:
  - Điểm số
  - Số câu trả lời đúng
  - Tiến độ hoàn thành bài đọc
- Dữ liệu được lưu trong `localStorage`, không mất khi tải lại trang

### 🏆 Thành tích (Achievements)
- Hệ thống huy hiệu giúp tạo động lực học tập
- Ví dụ:
  - Hoàn thành bài đầu tiên
  - Đạt điểm tuyệt đối
  - Hoàn thành toàn bộ một cấp độ

### 👤 Cá nhân hóa
- Lưu tên học sinh để gắn với kết quả làm bài
- Thuận tiện cho việc gửi dữ liệu định danh lên Google Sheets

### ☁️ Đồng bộ Google Sheets
- Tự động gửi kết quả làm bài của học sinh lên bảng tính Google Sheets
- Dễ quản lý và tổng hợp dữ liệu từ nhiều thiết bị

### 🔄 Cập nhật OTA (Over-The-Air)
- Cập nhật nội dung/giao diện trực tiếp trên điện thoại
- Không cần build lại APK chỉ để sửa dữ liệu hoặc giao diện web
- Quản lý version thông qua GitHub Releases + Google Apps Script

---

## 3. Công nghệ sử dụng

### Frontend
- **React 19**
- **Vite**
- **Tailwind CSS**
- **Lucide React**

### Mobile
- **Capacitor** (đóng gói web thành app Android/iOS)

### Cập nhật OTA
- **@capgo/capacitor-updater**

### Backend / Lưu trữ
- **Google Apps Script**
- **Google Sheets**
- **GitHub Releases**

---

## 4. Cấu trúc thư mục dữ liệu

Toàn bộ dữ liệu cốt lõi nằm trong thư mục:

```bash
src/data/
````

### Các file chính

* `src/data/a1.ts` đến `src/data/c2.ts`
  Chứa danh sách bài đọc theo từng cấp độ tương ứng

* `src/data/achievements.ts`
  Chứa danh sách các thành tích có thể mở khóa

* `src/data/index.ts`
  File tổng hợp tất cả bài đọc từ các level khác nhau
  **Thông thường bạn không cần sửa file này**, trừ khi thêm một level/chủ đề mới

---

## 5. Hướng dẫn cài đặt và chạy local

### 1. Cài đặt thư viện

```bash
npm install
```

### 2. Chạy môi trường phát triển

```bash
npm run dev
```

### 3. Build bản web

```bash
npm run build
```

---

## 6. Hướng dẫn cập nhật dữ liệu bài đọc

Mỗi bài đọc là một object nằm trong mảng của file cấp độ tương ứng.

### Các bước thêm một bài đọc mới

1. Mở file tương ứng với cấp độ muốn thêm
   Ví dụ: `src/data/b1.ts`

2. Cuộn xuống cuối mảng dữ liệu
   Ví dụ: `b1Passages`

3. Thêm dấu phẩy `,` sau bài đọc cuối cùng nếu cần

4. Copy template dưới đây và dán vào

5. Sửa các trường:

   * `id`
   * `title`
   * `content`
   * `vocabulary`
   * `questions`

6. Lưu file, ứng dụng sẽ tự cập nhật dữ liệu

### Template mẫu cho bài đọc

```typescript
{
  id: 'new-id-here', // ID duy nhất, ví dụ: 'b1-3'
  title: 'Your Title Here',
  level: 'B1', // A1, A2, B1, B2, C1, C2
  content: [
    "Paragraph 1 goes here.",
    "Paragraph 2 goes here."
  ],
  vocabulary: [
    { word: 'Word1', meaning: 'Meaning 1' },
    { word: 'Word2', meaning: 'Meaning 2' }
  ],
  questions: [
    {
      id: 'q1',
      text: 'Question 1 text?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correctAnswerIndex: 0, // đáp án đúng, bắt đầu từ 0
      explanation: 'Explanation for the correct answer.'
    }
  ]
}
```

### Khuyến nghị khi đặt ID

Nên đặt ID theo quy tắc:

```text
[level]-[số-thứ-tự]
```

Ví dụ:

* `a1-1`
* `b2-5`
* `c1-3`

Điều này giúp dễ quản lý và tránh trùng lặp.

---

## 7. Hướng dẫn thêm thành tích mới

Hệ thống thành tích được định nghĩa tại:

```bash
src/data/achievements.ts
```

### Cấu trúc của một thành tích

```typescript
{
  id: 'bookworm',
  title: 'Bookworm',
  description: 'Complete 5 reading passages.',
  iconName: 'BookOpen'
}
```

### Ý nghĩa các trường

* `id`: ID duy nhất của thành tích
* `title`: Tên hiển thị trên giao diện
* `description`: Mô tả điều kiện đạt được
* `iconName`: Tên icon từ thư viện `lucide-react`

### Các bước thêm thành tích mới

1. Mở file `src/data/achievements.ts`
2. Thêm object thành tích mới vào mảng `ACHIEVEMENTS`
3. Mở file `src/App.tsx`
4. Tìm hàm `handlePassageComplete`
5. Tại phần `// Check Achievements`, thêm logic mở khóa thành tích

### Ví dụ

Muốn thêm thành tích đọc đủ 10 bài:

```typescript
if (totalCompleted >= 10) newUnlocked.add('super_reader');
```

### Nếu dùng icon mới

Nếu icon chưa từng được dùng trước đó:

1. Mở file `src/components/AchievementsView.tsx`
2. Import icon từ `lucide-react`
3. Thêm icon đó vào `iconMap`

---

## 8. Hướng dẫn thêm cấp độ hoặc chủ đề mới

Ví dụ muốn thêm một chủ đề mới như `IT`.

### Bước 1: Cập nhật type

Mở file `src/types.ts` và sửa type `Level`:

```typescript
// Trước
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

// Sau
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'IT';
```

### Bước 2: Tạo file dữ liệu mới

Tạo file:

```bash
src/data/it.ts
```

Ví dụ:

```typescript
import { Passage } from '../types';

export const itPassages: Passage[] = [
  {
    id: 'it-1',
    title: 'Introduction to Cloud Computing',
    level: 'IT',
    content: [
      'Cloud computing allows users to access computing resources over the internet.'
    ],
    vocabulary: [
      { word: 'cloud', meaning: 'điện toán đám mây' }
    ],
    questions: [
      {
        id: 'q1',
        text: 'What does cloud computing provide?',
        options: [
          'Books',
          'Internet-based computing resources',
          'Only hardware',
          'Only games'
        ],
        correctAnswerIndex: 1,
        explanation: 'Cloud computing provides access to computing resources over the internet.'
      }
    ]
  }
];
```

### Bước 3: Đăng ký dữ liệu mới

Mở file `src/data/index.ts`:

```typescript
import { itPassages } from './it';

export const passages: Passage[] = [
  // ... các level cũ
  ...itPassages
];
```

### Bước 4: Hiển thị trên giao diện

#### 4.1 Cập nhật danh sách level

Mở `src/App.tsx`:

```typescript
const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'IT'];
```

#### 4.2 Thêm mô tả hiển thị

Mở `src/components/LevelGrid.tsx`:

```typescript
const levelDescriptions: Record<Level, string> = {
  A1: 'Beginner',
  A2: 'Elementary',
  B1: 'Intermediate',
  B2: 'Upper Intermediate',
  C1: 'Advanced',
  C2: 'Proficient',
  IT: 'Information Technology'
};
```

### Bước 5: Thêm thành tích cho level mới (tùy chọn)

Nếu muốn thêm huy hiệu `"IT Master"`:

Thêm vào `src/data/achievements.ts`:

```typescript
{
  id: 'it_master',
  title: 'IT Master',
  description: 'Complete all IT level passages.',
  iconName: 'Award'
}
```

Nếu logic trong `App.tsx` đã tự động quét qua mảng `LEVELS`, bạn không cần thêm code mở khóa riêng.

---

## 9. Hệ thống OTA hoạt động như thế nào?

Ứng dụng sử dụng mô hình kết hợp giữa:

* **GitHub Releases**: lưu file cập nhật
* **Google Apps Script**: đóng vai trò API kiểm tra phiên bản mới

### Luồng hoạt động khi người dùng bấm "Cập nhật"

1. App gọi `GET` đến `GOOGLE_SCRIPT_URL` được cấu hình trong `src/config.ts`
2. Google Script trả về JSON chứa thông tin bản mới nhất
3. App so sánh `version` nhận được với `APP_VERSION` hiện tại
4. Nếu có bản mới, hiển thị thông báo cập nhật
5. Người dùng bấm **"Tải xuống ngay"**
6. `CapacitorUpdater` tải file `update.zip` từ `updateUrl`
7. App tự giải nén, thay thế giao diện cũ và khởi động lại

### Ví dụ JSON phản hồi từ Google Script

```json
{
  "version": "1.0.1",
  "message": "Cập nhật bài đọc mới cấp độ B1!",
  "updateUrl": "https://github.com/TontonYuta/english-reading/releases/download/v1.0.1/update.zip"
}
```

---

## 10. Cách phát hành bản cập nhật mới

Bạn **không cần build lại APK** chỉ để cập nhật bài đọc hoặc giao diện web.

Chỉ cần chạy script tự động:

```cmd
build-apk.bat
```

### Quy trình

1. Mở Terminal / Command Prompt
2. Chạy:

   ```cmd
   build-apk.bat
   ```
3. Nhập phiên bản mới, ví dụ:

   ```text
   1.0.1
   ```

### Script sẽ tự động:

* Build web từ source code (`dist`)
* Nén thành file `update.zip`
* Upload file lên GitHub Release
* Báo version mới về Google Script

### Yêu cầu

Máy tính cần cài sẵn:

* **GitHub CLI (`gh`)**
* Đã đăng nhập tài khoản GitHub bằng `gh auth login`

---

## 11. Cấu hình Google Apps Script

Để app có thể:

* gửi điểm học sinh lên Google Sheets
* kiểm tra phiên bản OTA mới

Google Apps Script cần có ít nhất 2 hàm:

* `doGet`
* `doPost`

### Mẫu Google Apps Script

```javascript
var CURRENT_VERSION = "1.0.0";
var UPDATE_MESSAGE = "Đã có bài tập mới, cập nhật ngay!";
var GITHUB_REPO = "TontonYuta/english-reading";

// App kiểm tra cập nhật
function doGet(e) {
  var updateUrl = "https://github.com/" + GITHUB_REPO + "/releases/download/v" + CURRENT_VERSION + "/update.zip";
  
  var response = {
    version: CURRENT_VERSION,
    message: UPDATE_MESSAGE,
    updateUrl: updateUrl
  };
  
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

// App gửi điểm hoặc script báo version mới
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // 1. Cập nhật version từ build-apk.bat
    if (data.action === "update_version" && data.secret === "TontonYuta_Dep_Trai_2026") {
      PropertiesService.getScriptProperties().setProperty('APP_VERSION', data.newVersion);
      return ContentService.createTextOutput("Version updated to " + data.newVersion);
    }
    
    // 2. Nhận điểm số từ học sinh
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Scores");
    sheet.appendRow([
      new Date(),
      data.studentName,
      data.topicTitle,
      data.score + "/" + data.totalQuestions,
      data.appVersion
    ]);
    
    return ContentService.createTextOutput("Success");
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.toString());
  }
}
```

### Lưu ý rất quan trọng

Sau mỗi lần chỉnh sửa Google Apps Script, bạn phải:

```text
Deploy -> Manage deployments -> Edit -> New version -> Deploy
```

Nếu không deploy lại, app sẽ không nhận được thay đổi mới.

---

## 12. Lưu ý về icon

Ứng dụng sử dụng thư viện **Lucide React**.

Bạn có thể tra cứu tên icon tại:

```text
https://lucide.dev/icons
```

### Thay đổi icon cho level

* Sửa trong component `LevelGrid`

### Thay đổi icon cho thành tích

* Sửa trường `iconName` trong `src/data/achievements.ts`

### Nếu icon chưa được import

* Mở `src/components/AchievementsView.tsx`
* Import icon mới từ `lucide-react`
* Thêm vào `iconMap`

---

## 13. Lưu ý môi trường thử nghiệm

Tính năng **OTA Update** can thiệp trực tiếp vào hệ thống file của thiết bị, vì vậy:

* **Không hoạt động trên trình duyệt web (`localhost`)**
* Cần test trên:

  * điện thoại Android thật
  * máy ảo Android
  * hoặc thiết bị mobile đã cài app qua Capacitor

### Kết luận

* Web local dùng để phát triển giao diện và dữ liệu
* OTA chỉ kiểm tra chính xác khi chạy trên mobile app

---

## Gợi ý quy trình quản trị nội dung

### Khi chỉ muốn thêm bài đọc mới

* Mở file level tương ứng trong `src/data/`
* Thêm passage mới
* Build lại web
* Phát hành OTA

### Khi muốn thêm thành tích mới

* Sửa `src/data/achievements.ts`
* Thêm logic unlock trong `src/App.tsx`
* Nếu cần, cập nhật icon
* Build lại web
* Phát hành OTA

### Khi muốn thêm level/chủ đề mới

* Sửa `src/types.ts`
* Tạo file dữ liệu mới trong `src/data/`
* Đăng ký vào `src/data/index.ts`
* Cập nhật `LEVELS` trong `src/App.tsx`
* Cập nhật mô tả trong `LevelGrid.tsx`
* Thêm achievement nếu cần
* Build lại web
* Phát hành OTA

---

## License

Dự án dùng cho mục đích giáo dục và triển khai nội bộ.
Bạn có thể bổ sung thông tin license cụ thể tại đây nếu cần.

---

## Tác giả / Ghi chú

Có thể thêm thông tin:

* Người phát triển
* Link repository
* Link Google Sheet
* Link Google Apps Script
* Quy trình quản trị nội bộ

Ví dụ:

```markdown
**Repository:** `https://github.com/your-username/english-reader-app`  
**Google Script URL:** cấu hình tại `src/config.ts`
```

```
