# 🇬🇷 מילון יווני לטיול — Greek Travel Dictionary

מילון כיס יווני לנוסע הישראלי (במיוחד למשפחות). אפליקציית **PWA** קלה שעובדת גם **ללא אינטרנט**, עם **הגייה קולית** ביוונית, חיפוש מהיר בעברית/יוונית/תעתיק, מועדפים, היסטוריה ומצב חירום.

## ✨ תכונות
- **115 ביטויים** ב-10 קטגוריות (ברכות, מסעדה, מלון, תחבורה, קניות, חוף, משפחה, חירום, מספרים, ביטויים שימושיים).
- **חיפוש חי** בעברית, יוונית ותעתיק — מתעלם מניקוד וטונוסים.
- **הגייה קולית** דרך `speechSynthesis` בקול `el-GR`, כולל השמעה איטית.
- **מצב תצוגה גדולה** — לחיצה ארוכה על ביטוי פותחת כרטיס מסך-מלא להצגה לנהג מונית או מלצר.
- **מועדפים** ו**נצפו לאחרונה** (עד 20) נשמרים ב-LocalStorage.
- **מצב חירום** — כפתור ייעודי עם ביטויים חיוניים בכפתורים גדולים.
- **ביטוי אקראי** לתרגול.
- **מצב כהה/בהיר** עם שמירת העדפה.
- **PWA מלא** — Manifest, Service Worker, מטמון אופליין, התקנה למסך הבית.
- עיצוב **Mobile-first**, RTL, בכחול-לבן יווני.

## 📁 מבנה
```
greek-travel-dictionary/
├── index.html        # שלד האפליקציה
├── style.css         # עיצוב + מצב כהה
├── data.js           # מאגר הביטויים והקטגוריות
├── script.js         # לוגיקה: ניתוב, חיפוש, הגייה, מועדפים, PWA
├── manifest.json     # מניפסט PWA
├── sw.js             # Service Worker (מטמון אופליין)
├── icon-192.png      # אייקוני PWA
├── icon-512.png
├── icon-maskable.png
└── README.md
```

## ▶️ הרצה מקומית
Service Worker דורש שרת (לא פתיחת קובץ ישירה). הרצה מהירה:
```bash
# Python
python3 -m http.server 8000
# או Node
npx serve .
```
ואז לגלוש ל-`http://localhost:8000`.

## 🚀 פריסה ל-GitHub Pages
1. צרו ריפו חדש ב-GitHub (למשל `greek-travel-dictionary`).
2. העלו את כל הקבצים לענף `main`:
   ```bash
   git init
   git add .
   git commit -m "Greek Travel Dictionary PWA"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/greek-travel-dictionary.git
   git push -u origin main
   ```
3. ב-GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, בחרו `main` ו-`/ (root)`, שמרו.
4. האתר יעלה תוך דקה בכתובת:
   `https://<USERNAME>.github.io/greek-travel-dictionary/`

> כל הנתיבים באפליקציה יחסיים, לכן היא עובדת ישירות מתת-נתיב של GitHub Pages ללא שינויים.

## ➕ הרחבה עתידית (הארכיטקטורה מוכנה)
הקוד מחולק למודולים (`Store`, `Speak`, `search`, `router`) כדי לאפשר הוספה קלה של: חיפוש קולי, מצב חידון (Quiz), כרטיסיות (Flashcards), ביטוי יומי, ביטויים לפי מיקום (GPS), שפות נוספות, קובצי אודיו להורדה, ואוספי ביטויים.

להוספת ביטוי — פשוט מוסיפים אובייקט ל-`PHRASES` ב-`data.js`:
```js
{ id: 116, category: "restaurant", hebrew: "...", greek: "...", transliteration: "..." }
```
