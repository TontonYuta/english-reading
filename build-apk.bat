@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
cd /d "%~dp0"

echo ==========================================
echo    TONTONYUTA - ONE CLICK APK (v15.0 ULTIMATE)
echo ==========================================

REM --------------------------------------------
REM 1. KIEM TRA DIEU KIEN
REM --------------------------------------------
where node >nul 2>nul || (echo [Loi] NodeJS chua duoc cai dat! && pause && exit /b)
where javac >nul 2>nul || (echo [Loi] Java JDK chua duoc cai dat! && pause && exit /b)

REM --------------------------------------------
REM 2. CAU HINH THONG TIN & AUTO VERSION
REM --------------------------------------------
echo.
echo [!] THIET LAP THONG TIN NHAN BAN
set /p APP_NAME="1. Nhap ten App (De trong de giu cu): "

REM Doc phien ban hien tai tu package.json (Kiem tra dung ten app truoc khi build)
for /f "delims=" %%a in ('node -p "require('./package.json').version"') do set CURRENT_VER=%%a
echo    - Phien ban hien tai la: !CURRENT_VER!
set /p APP_VERSION="2. Nhap phien ban moi (An ENTER de tu dong tang len ban tiep theo): "

set /p TARGET_ID="3. Nhap ID moi (De trong de giu cu): "

REM Tu dong tang Version neu de trong
if "!APP_VERSION!"=="" (
    echo [OK] Dang tu dong tang Version...
    call npm version patch --no-git-tag-version >nul
    for /f "delims=" %%a in ('node -p "require('./package.json').version"') do set APP_VERSION=%%a
    echo =^> Phien ban OTA moi la: !APP_VERSION!
) else (
    call npm pkg set version="!APP_VERSION!"
)

REM Cap nhat version vao config.ts (DA FIX BOM)
echo [OK] Dang ghi version !APP_VERSION! vao ma nguon...
if exist "src\config.ts" (
    powershell -Command "$p=\"$PWD\src\config.ts\"; $c=@(Get-Content $p) -replace 'export const APP_VERSION = ''.*?''', 'export const APP_VERSION = ''!APP_VERSION!'''; [System.IO.File]::WriteAllLines($p, $c, (New-Object System.Text.UTF8Encoding($false)))"
)

REM --------------------------------------------
REM 3. CHONG DONG BO NHAM & DOI TEN
REM --------------------------------------------
echo.
if not "!TARGET_ID!"=="" (
    REM Cap nhat ID va Ten vao capacitor.config.json (DA FIX BOM)
    if exist "capacitor.config.json" (
        powershell -Command "$p=\"$PWD\capacitor.config.json\"; $c=@(Get-Content $p) -replace '\"appId\":\s*\".*?\"', '\"appId\": \"!TARGET_ID!\"' -replace '\"appName\":\s*\".*?\"', '\"appName\": \"!APP_NAME!\"'; [System.IO.File]::WriteAllLines($p, $c, (New-Object System.Text.UTF8Encoding($false)))"
    )

    REM Neu ID moi khac ID trong Android cu -> xoa android folder de rebuild
    if exist "android\app\build.gradle" (
        powershell -Command "$c = Get-Content 'android\app\build.gradle'; if ($c -match 'applicationId\s+\"!TARGET_ID!\"') { exit 0 } else { exit 1 }"
        if !errorlevel! neq 0 (
            echo [!] Phat hien ID moi. Dang xoa thu muc android cu de tranh nham du lieu...
            rmdir /s /q android
            echo [OK] Da don dep xong.
        )
    )
)

REM XOA CACHE WEB DE TRANH LAN DU LIEU LOP CU
if exist "dist" rmdir /s /q dist
if exist "android\app\src\main\assets\public" rmdir /s /q android\app\src\main\assets\public

REM --------------------------------------------
REM 4. BUILD GIAO DIEN WEB
REM --------------------------------------------
echo [2/9] Dang build Web (dist)...
call npm install
call npm run build || (echo [Loi] Build Web that bai! && pause && exit /b)

REM --------------------------------------------
REM 5. KHOI TAO ANDROID MOI
REM --------------------------------------------
if not exist android (
    echo [3/9] Dang tao khung Android moi...
    call npx cap add android

    REM Cap quyen Internet (DA FIX BOM)
    powershell -Command "$p=\"$PWD\android\app\src\main\AndroidManifest.xml\"; if (Test-Path $p) { $c=@(Get-Content $p); if($c -notmatch 'android.permission.INTERNET'){ $c=$c -replace '<application', '<uses-permission android:name=\"android.permission.INTERNET\" />`n    <application'; [System.IO.File]::WriteAllLines($p, $c, (New-Object System.Text.UTF8Encoding($false))) } }"
)

REM --------------------------------------------
REM 6. DONG BO & BOM PHIEN BAN
REM --------------------------------------------
echo [4/9] Dang dong bo du lieu vao Android...
call npx cap sync android

if exist "android\app\build.gradle" (
    powershell -Command "$p=\"$PWD\android\app\build.gradle\"; $vCode = [int](Get-Date -UFormat '%%m%%d%%H%%M'); $c=@(Get-Content $p) -replace 'versionCode\s+\d+', \"versionCode $vCode\" -replace 'versionName\s+\".*?\"', \"versionName '!APP_VERSION!'\"; [System.IO.File]::WriteAllLines($p, $c, (New-Object System.Text.UTF8Encoding($false)))"
)

REM --------------------------------------------
REM 7. XU LY ICON & SPLASH (DUY TRI BAN 13.0)
REM --------------------------------------------
echo [5/9] Dang xu ly Icon tu thu muc goc...

if not exist "assets" mkdir assets

if exist "icon.png" copy /y "icon.png" "assets\icon.png" >nul
if exist "splash.png" copy /y "splash.png" "assets\splash.png" >nul
if not exist "assets\splash.png" if exist "assets\icon.png" copy /y "assets\icon.png" "assets\splash.png" >nul

if exist "assets\icon.png" (
    echo [OK] Dang bom Icon vao Android...
    call npx capacitor-assets generate --android --assetPath assets
) else (
    echo [Loi] Khong tim thay file icon.png ngay ngoai thu muc goc!
)

REM --------------------------------------------
REM 8. BUILD APK
REM --------------------------------------------
echo [6/9] Dang build APK...
cd android
call gradlew.bat assembleDebug --daemon
if !errorlevel! neq 0 (
    echo [Loi] Build APK that bai!
    cd ..
    pause
    exit /b
)
cd ..

REM Copy file APK ra ngoai de de tim thay
if exist "android\app\build\outputs\apk\debug\app-debug.apk" (
    copy /y "android\app\build\outputs\apk\debug\app-debug.apk" "app-v!APP_VERSION!.apk" >nul
    echo [OK] Da xuat file APK: app-v!APP_VERSION!.apk
)

REM --------------------------------------------
REM 9. TAO OTA & UPLOAD
REM --------------------------------------------
echo [7/9] Dang tao update.zip...
if exist "update.zip" del /f /q "update.zip"
if exist "dist" (
    cd dist && tar.exe -a -c -f ../update.zip * && cd ..
)

echo [8/9] Dang upload Github...
where gh >nul 2>nul
if !errorlevel! equ 0 (
    if exist "update.zip" (
        gh release create v!APP_VERSION! "update.zip" --title "v!APP_VERSION!" --notes "Update phien ban !APP_VERSION!"
        echo [OK] Da upload len Github Release.
    )
) else (
    echo [Canh bao] Chua cai GitHub CLI gh. Bo qua buoc upload.
)

REM --------------------------------------------
REM 10. BAO CAO GOOGLE SHEETS
REM --------------------------------------------
echo [9/9] Dang bao cao Sheets...
echo {"action":"update_version", "secret":"TontonYuta_Dep_Trai_2026", "newVersion":"!APP_VERSION!"} > temp_payload.json

REM -> DAN LINK GOOGLE SCRIPT CUA BAN VAO DONG DUOI DAY <-
curl -s -L -H "Content-Type: application/json" -d @temp_payload.json "https://script.google.com/macros/s/AKfycbxpOLn6oM-0KqStoD6J3ZznuRFJUhasP0L9OebujnbZUrTRltQ0221E1TSmdZhwPQBejw/exec" >nul

del temp_payload.json

powershell -c "[console]::beep(800, 300); [console]::beep(1200, 500)"
echo ==========================================
echo HOAN TAT TAT CA!
echo - Phien ban: v!APP_VERSION!
if exist "app-v!APP_VERSION!.apk" echo - File APK: app-v!APP_VERSION!.apk
if exist "update.zip" echo - File OTA: update.zip
echo ==========================================

REM Tu dong mo thu muc hien tai len
explorer .

pause