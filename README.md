# English Reader App - Hướng dẫn cập nhật dữ liệu

Dự án này được thiết kế để bạn có thể dễ dàng thêm, sửa hoặc xóa các bài đọc tiếng Anh theo từng cấp độ (A1 đến C2), cũng như quản lý hệ thống Thành tích (Achievements) của người dùng.

## 1. Tính năng chính
- **Đọc hiểu theo cấp độ:** Phân loại bài đọc từ A1 đến C2.
- **Bài tập trắc nghiệm:** Kiểm tra mức độ hiểu bài và từ vựng sau khi đọc.
- **Tiến độ học tập:** Tự động lưu trữ điểm số và tiến độ hoàn thành bài đọc vào bộ nhớ trình duyệt (`localStorage`). Người dùng không bị mất dữ liệu khi tải lại trang.
- **Thành tích (Achievements):** Hệ thống danh hiệu (huy hiệu) khích lệ người học khi đạt được các cột mốc nhất định (ví dụ: đạt điểm tuyệt đối, hoàn thành toàn bộ cấp độ A1...).

## 2. Cấu trúc thư mục dữ liệu

Tất cả dữ liệu cốt lõi được lưu trữ trong thư mục `src/data/`:
- `src/data/a1.ts` đến `src/data/c2.ts`: Chứa dữ liệu bài đọc của từng cấp độ tương ứng.
- `src/data/achievements.ts`: Chứa danh sách các thành tích có thể đạt được.
- `src/data/index.ts`: File tự động gom tất cả dữ liệu (bạn không cần phải sửa file này).

---

## 3. Cách thêm một bài đọc mới (Passage)

Mỗi bài đọc là một Object (đối tượng) nằm trong mảng (array) của file cấp độ tương ứng.

**Các bước thực hiện:**
1. Mở file tương ứng với cấp độ bạn muốn thêm (ví dụ: `src/data/b1.ts`).
2. Cuộn xuống cuối mảng dữ liệu (ví dụ: `b1Passages`).
3. Thêm dấu phẩy `,` sau bài đọc cuối cùng (nếu chưa có).
4. Copy và Paste đoạn Template bên dưới vào.
5. Thay đổi nội dung (`id`, `title`, `content`, `vocabulary`, `questions`) theo ý muốn.
6. Lưu file lại. Ứng dụng sẽ tự động cập nhật!

### Template Mẫu cho Bài đọc

```typescript
  {
    id: 'new-id-here', // ID duy nhất cho bài đọc (nên đặt theo cấp độ và số thứ tự, VD: 'b1-3')
    title: 'Your Title Here',
    level: 'B1', // Cấp độ (A1, A2, B1, B2, C1, C2)
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
        correctAnswerIndex: 0, // Vị trí đáp án đúng (bắt đầu từ 0. VD: 0 là Option 1)
        explanation: 'Explanation for the correct answer.'
      }
    ]
  }
```

---

## 4. Cách thêm Thành tích mới (Achievement)

Hệ thống thành tích được định nghĩa trong file `src/data/achievements.ts`.

### Cấu trúc của một Thành tích:
```typescript
{
  id: 'bookworm', // ID duy nhất của thành tích
  title: 'Bookworm', // Tên thành tích hiển thị trên giao diện
  description: 'Complete 5 reading passages.', // Mô tả điều kiện đạt được
  iconName: 'BookOpen' // Tên Icon (lấy từ thư viện lucide-react)
}
```

**Các bước thêm thành tích mới:**
1. Mở file `src/data/achievements.ts`.
2. Thêm một Object thành tích mới vào mảng `ACHIEVEMENTS`.
3. Mở file `src/App.tsx`, tìm đến hàm `handlePassageComplete`.
4. Thêm logic để mở khóa thành tích mới của bạn vào phần `// Check Achievements`. 
   *Ví dụ: Nếu muốn thêm thành tích đọc 10 bài, bạn thêm dòng code sau:*
   ```typescript
   if (totalCompleted >= 10) newUnlocked.add('super_reader');
   ```
5. *(Tùy chọn)* Nếu bạn sử dụng một Icon mới chưa từng dùng trước đây, hãy mở file `src/components/AchievementsView.tsx`, import Icon đó từ `lucide-react` và thêm nó vào biến `iconMap`.

---

## 5. Cách thêm Cấp độ hoặc Chủ đề mới (Ví dụ: Level "IT")

Nếu bạn muốn thêm một cấp độ mới (như `D1`) hoặc một chủ đề chuyên biệt (như `IT`), hãy làm theo các bước sau:

### Bước 1: Cập nhật Type
Mở file `src/types.ts` và thêm giá trị mới vào type `Level`:
```typescript
// Trước: export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'IT'; // Thêm 'IT'
```

### Bước 2: Tạo file dữ liệu mới
Tạo file `src/data/it.ts` (copy từ `a1.ts`) và định nghĩa các bài đọc cho chủ đề IT:
```typescript
import { Passage } from '../types';

export const itPassages: Passage[] = [
  {
    id: 'it-1',
    title: 'Introduction to Cloud Computing',
    level: 'IT',
    // ... nội dung bài đọc
  }
];
```

### Bước 3: Đăng ký dữ liệu mới
Mở file `src/data/index.ts` để gộp dữ liệu mới vào hệ thống:
```typescript
import { itPassages } from './it'; // Import file vừa tạo

export const passages: Passage[] = [
  // ... các level cũ
  ...itPassages // Thêm vào mảng tổng
];
```

### Bước 4: Hiển thị lên giao diện
1. **Cập nhật danh sách Level:** Mở `src/App.tsx` và thêm `'IT'` vào mảng `LEVELS`:
   ```typescript
   const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'IT'];
   ```
2. **Thêm mô tả hiển thị:** Mở `src/components/LevelGrid.tsx` và thêm mô tả cho level mới trong `levelDescriptions`:
   ```typescript
   const levelDescriptions: Record<Level, string> = {
     // ... các level cũ
     IT: 'Information Technology' // Tên hiển thị bên dưới icon
   };
   ```

### Bước 5: Thêm Thành tích cho Level mới (Tùy chọn)
Nếu bạn muốn có huy hiệu "IT Master" khi hoàn thành toàn bộ bài đọc IT:
1. Thêm thành tích vào `src/data/achievements.ts`:
   ```typescript
   {
     id: 'it_master',
     title: 'IT Master',
     description: 'Complete all IT level passages.',
     iconName: 'Award'
   }
   ```
2. Logic tự động mở khóa đã có sẵn trong `App.tsx` (nó tự động quét qua mảng `LEVELS`), nên bạn không cần viết thêm code logic nếu đã làm đúng Bước 4.1.

---

## 6. Lưu ý về Icon
Ứng dụng sử dụng thư viện **Lucide React**. Bạn có thể tìm các tên icon khác tại [lucide.dev](https://lucide.dev/icons) để thay đổi cho sinh động.
- Để đổi icon trong `LevelGrid`, hãy chỉnh sửa component đó.
- Để đổi icon cho Thành tích, hãy đổi `iconName` trong `src/data/achievements.ts`.
