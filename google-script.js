// ==========================================
// CẤU HÌNH THÔNG TIN NHẬN TIN NHẮN
// ==========================================
const MY_GMAIL = "huyhoang6altt@gmail.com"; // <--- HÂN THAY GMAIL CỦA HÂN VÀO ĐÂY
const ADMIN_NAME = "TontonYuta";

// ==========================================
// HÀM 1: NHẬN DỮ LIỆU TỪ APP (POST)
// ==========================================
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse("error", "Không có dữ liệu");
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);

    // ------------------------------------------
    // TÍNH NĂNG OTA UPDATE (TỪ FILE .BAT)
    // ------------------------------------------
    if (data.action === "update_version") {
      if (data.secret !== "TontonYuta_Dep_Trai_2026") {
        return createJsonResponse("error", "Sai mật khẩu");
      }

      var configSheet = getOrCreateSheet(ss, "Config");
      configSheet.getRange("B1").setValue(data.newVersion);
      configSheet.getRange("B2").setValue("Đã có bản " + data.newVersion + ". Cập nhật ngay!");

      // GỬI GMAIL THÔNG BÁO BUILD THÀNH CÔNG
      sendBuildEmail(data.newVersion);

      return createJsonResponse("success", "Đã cập nhật version " + data.newVersion);
    }

    // ------------------------------------------
    // LƯU ĐIỂM HỌC SINH
    // ------------------------------------------
    var sheet = getOrCreateSheet(ss, "Sheet1", ["Thời gian", "Tên học sinh", "Bài học", "Điểm số", "Version"]);

    var studentName = data.studentName || "Không tên";
    var topicTitle = data.topicTitle || "Chưa rõ chủ đề";
    var scoreText = (data.score || 0) + "/" + (data.totalQuestions || 0);
    var version = data.appVersion || "Bản cũ";
    var timeStamp = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");

    // CHỐNG GHI TRÙNG
    if (isDuplicate(sheet, studentName, topicTitle, scoreText)) {
      return createJsonResponse("duplicate_ignored", "Dữ liệu đã tồn tại");
    }

    // GHI DỮ LIỆU
    sheet.appendRow([timeStamp, studentName, topicTitle, scoreText, version]);

    // CẬP NHẬT THỐNG KÊ
    updateStats();

    // GỬI GMAIL THÔNG BÁO CÓ ĐIỂM MỚI
    sendScoreEmail(studentName, topicTitle, scoreText);

    return createJsonResponse("success", "Đã ghi điểm");

  } catch(error){
    return createJsonResponse("error", error.toString());
  }
}

// ==========================================
// HÀM GỬI EMAIL THÔNG BÁO BUILD (OTA)
// ==========================================
function sendBuildEmail(version) {
  var subject = "🚀 [HỆ THỐNG] Đã cập nhật phiên bản mới: v" + version;
  var htmlBody = `
    <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="color: #4f46e5;">Chào ${ADMIN_NAME},</h2>
      <p>Hệ thống vừa ghi nhận một bản cập nhật mới được đẩy lên từ máy tính của bạn.</p>
      <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #4f46e5;">
        <b>Phiên bản:</b> v${version}<br>
        <b>Thời gian:</b> ${Utilities.formatDate(new Date(), "GMT+7", "HH:mm:ss dd/MM/yyyy")}
      </div>
      <p>Học sinh bây giờ đã có thể nhận thông báo và tải bài tập mới!</p>
    </div>
  `;
  MailApp.sendEmail({ to: MY_GMAIL, subject: subject, htmlBody: htmlBody });
}

// ==========================================
// HÀM GỬI EMAIL THÔNG BÁO ĐIỂM HỌC SINH
// ==========================================
function sendScoreEmail(name, topic, score) {
  var subject = "📝 [ĐIỂM MỚI] " + name + " vừa hoàn thành bài tập";
  var htmlBody = `
    <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="color: #10b981;">Báo cáo kết quả học tập</h2>
      <p>Có một học sinh vừa nộp bài qua ứng dụng:</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><b>Học sinh:</b></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><b>Bài học:</b></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${topic}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><b>Kết quả:</b></td><td style="padding: 8px; border-bottom: 1px solid #eee; color: #ef4444; font-weight: bold;">${score}</td></tr>
      </table>
      <p style="font-size: 12px; color: #94a3b8; margin-top: 20px;">Dữ liệu đã được tự động lưu vào Google Sheets.</p>
    </div>
  `;
  MailApp.sendEmail({ to: MY_GMAIL, subject: subject, htmlBody: htmlBody });
}

// ==========================================
// CÁC HÀM PHỤ TRỢ (HELPER)
// ==========================================
function createJsonResponse(status, message) {
  var res = { status: status };
  if (message) res.message = message;
  return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    if (headers) sheet.appendRow(headers);
  }
  return sheet;
}

function isDuplicate(sheet, name, topic, score) {
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return false;
  var lastData = sheet.getRange(lastRow, 1, 1, 4).getValues()[0];
  return (lastData[1] == name && lastData[2] == topic && lastData[3] == score);
}

// ==========================================
// HÀM 2: APP KIỂM TRA UPDATE
// ==========================================
function doGet(e) {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var configSheet = ss.getSheetByName("Config");

  var version = "1.0.0";
  var message = "Đã có bài tập mới, cập nhật ngay!";
  var updateUrl = "https://github.com/TontonYuta/english-reading/releases/download/v1.0.0/update.zip";

  if (configSheet) {

    var cellVersion = configSheet.getRange("B1").getValue();
    var cellMessage = configSheet.getRange("B2").getValue();

    if (cellVersion) version = cellVersion.toString();
    if (cellMessage) message = cellMessage.toString();

    // Thay đổi link github bên dưới nếu repo của bạn khác
    updateUrl = "https://github.com/TontonYuta/english-reading/releases/download/v" + version + "/update.zip";
  }

  var response = {
    version: version,
    message: message,
    updateUrl: updateUrl
  };

  return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
}


// ==========================================
// HÀM 3: TÍNH THỐNG KÊ HỌC SINH (BẢN FIX LỖI SPLIT)
// ==========================================
function updateStats() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var logSheet = ss.getSheetByName("Sheet1");
  var statsSheet = getOrCreateSheet(ss, "Stats");

  if (!logSheet) return;
  var data = logSheet.getDataRange().getValues();
  var students = {};

  for (var i = 1; i < data.length; i++) {
    var name = data[i][1];
    var scoreValue = data[i][3];

    // CHỐNG LỖI: Nếu ô điểm trống hoặc không phải chuỗi, bỏ qua dòng này
    if (!scoreValue || scoreValue.toString().indexOf("/") === -1) continue;

    var scoreText = scoreValue.toString();
    var parts = scoreText.split("/");
    
    var correct = parseInt(parts[0]);
    var total = parseInt(parts[1]);

    if (isNaN(correct) || isNaN(total)) continue;

    if (!students[name]) {
      students[name] = { count: 0, correct: 0, total: 0 };
    }

    students[name].count++;
    students[name].correct += correct;
    students[name].total += total;
  }

  statsSheet.clear();
  statsSheet.appendRow(["Học sinh", "Số bài đã làm", "Tổng câu đúng", "Tổng câu", "Điểm trung bình"]);

  var rows = [];
  for (var name in students) {
    var s = students[name];
    var avg = s.total > 0 ? ((s.correct / s.total) * 10).toFixed(2) : 0;
    rows.push([name, s.count, s.correct, s.total, avg]);
  }

  if (rows.length > 0) {
    statsSheet.getRange(2, 1, rows.length, 5).setValues(rows);
  }
}
