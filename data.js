/* =========================================================
   Greek Travel Dictionary – מאגר הביטויים
   כל פריט: id, category, hebrew, greek, transliteration
   התעתיק בעברית כדי שיהיה קריא ושימושי לנוסע הישראלי.
   ========================================================= */

const CATEGORIES = [
  { id: "greetings",  he: "ברכות ונימוסים",   icon: "waving_hand",     color: "#005BBB" },
  { id: "restaurant", he: "מסעדה ובית קפה",   icon: "restaurant",      color: "#C1272D" },
  { id: "hotel",      he: "מלון",             icon: "hotel",           color: "#0E7C7B" },
  { id: "transport",  he: "תחבורה",           icon: "directions_bus",  color: "#F2A900" },
  { id: "shopping",   he: "קניות",            icon: "shopping_bag",    color: "#7B4BC4" },
  { id: "beach",      he: "חוף הים",          icon: "beach_access",    color: "#00A9E0" },
  { id: "family",     he: "משפחה וילדים",     icon: "family_restroom", color: "#E86AA6" },
  { id: "emergency",  he: "חירום",            icon: "emergency",       color: "#D7263D" },
  { id: "numbers",    he: "מספרים וזמן",      icon: "schedule",        color: "#3A7D44" },
  { id: "common",     he: "ביטויים שימושיים", icon: "chat",            color: "#5C6BC0" }
];

const PHRASES = [
  // ---------- ברכות ונימוסים ----------
  { id: 1,  category: "greetings", hebrew: "שלום (שלומכם)",        greek: "Γεια σας",            transliteration: "יָאסָאס" },
  { id: 2,  category: "greetings", hebrew: "שלום (לחבר)",          greek: "Γεια σου",            transliteration: "יָאסוּ" },
  { id: 3,  category: "greetings", hebrew: "בוקר טוב",             greek: "Καλημέρα",            transliteration: "קָאלִימֶרָה" },
  { id: 4,  category: "greetings", hebrew: "ערב טוב",              greek: "Καλησπέρα",           transliteration: "קָאלִיסְפֶּרָה" },
  { id: 5,  category: "greetings", hebrew: "לילה טוב",             greek: "Καληνύχτα",           transliteration: "קָאלִינִיכְטָה" },
  { id: 6,  category: "greetings", hebrew: "להתראות",              greek: "Αντίο",               transliteration: "אַדִיוֹ" },
  { id: 7,  category: "greetings", hebrew: "בבקשה / אנא",          greek: "Παρακαλώ",            transliteration: "פָּארָאקָאלוֹ" },
  { id: 8,  category: "greetings", hebrew: "תודה",                 greek: "Ευχαριστώ",           transliteration: "אֶפְכָ׳ארִיסְטוֹ" },
  { id: 9,  category: "greetings", hebrew: "תודה רבה",             greek: "Ευχαριστώ πολύ",      transliteration: "אֶפְכָ׳ארִיסְטוֹ פּוֹלִי" },
  { id: 10, category: "greetings", hebrew: "סליחה (לפנות)",        greek: "Συγγνώμη",            transliteration: "סִיגְנוֹמִי" },
  { id: 11, category: "greetings", hebrew: "סליחה / עמך הסליחה",   greek: "Με συγχωρείτε",       transliteration: "מֶה סִינְכ׳וֹרִיטֶה" },
  { id: 12, category: "greetings", hebrew: "כן",                   greek: "Ναι",                 transliteration: "נֶה" },
  { id: 13, category: "greetings", hebrew: "לא",                   greek: "Όχι",                 transliteration: "אוֹכִ׳י" },
  { id: 14, category: "greetings", hebrew: "נעים להכיר",           greek: "Χαίρω πολύ",          transliteration: "כֶ׳רוֹ פּוֹלִי" },
  { id: 15, category: "greetings", hebrew: "מה שלומך?",            greek: "Τι κάνεις;",          transliteration: "טִי קָאנִיס?" },
  { id: 16, category: "greetings", hebrew: "בסדר, תודה",           greek: "Καλά, ευχαριστώ",     transliteration: "קָאלָה, אֶפְכָ׳ארִיסְטוֹ" },
  { id: 17, category: "greetings", hebrew: "אין בעד מה",           greek: "Παρακαλώ",            transliteration: "פָּארָאקָאלוֹ" },

  // ---------- מסעדה ובית קפה ----------
  { id: 18, category: "restaurant", hebrew: "תפריט בבקשה",         greek: "Τον κατάλογο παρακαλώ", transliteration: "טוֹן קָאטָאלוֹגוֹ פָּארָאקָאלוֹ" },
  { id: 19, category: "restaurant", hebrew: "מים",                 greek: "Νερό",                transliteration: "נֶרוֹ" },
  { id: 20, category: "restaurant", hebrew: "מים מינרליים",        greek: "Εμφιαλωμένο νερό",     transliteration: "אֶמְפְיָאלוֹמֶנוֹ נֶרוֹ" },
  { id: 21, category: "restaurant", hebrew: "קפה",                 greek: "Καφές",               transliteration: "קָאפֶס" },
  { id: 22, category: "restaurant", hebrew: "פרפה (קפה קר)",       greek: "Φραπέ",               transliteration: "פְרָאפֶּה" },
  { id: 23, category: "restaurant", hebrew: "החשבון בבקשה",        greek: "Τον λογαριασμό παρακαλώ", transliteration: "טוֹן לוֹגָארְיָאסְמוֹ פָּארָאקָאלוֹ" },
  { id: 24, category: "restaurant", hebrew: "צמחוני",              greek: "Χορτοφάγος",          transliteration: "כ׳וֹרְטוֹפָאגוֹס" },
  { id: 25, category: "restaurant", hebrew: "בלי בשר",             greek: "Χωρίς κρέας",         transliteration: "כ׳וֹרִיס קְרֶאָס" },
  { id: 26, category: "restaurant", hebrew: "טעים מאוד",           greek: "Πολύ νόστιμο",        transliteration: "פּוֹלִי נוֹסְטִימוֹ" },
  { id: 27, category: "restaurant", hebrew: "מזלג",                greek: "Πιρούνι",             transliteration: "פִּירוּנִי" },
  { id: 28, category: "restaurant", hebrew: "כף",                  greek: "Κουτάλι",             transliteration: "קוּטָאלִי" },
  { id: 29, category: "restaurant", hebrew: "סכין",                greek: "Μαχαίρι",             transliteration: "מָאכֶ׳רִי" },
  { id: 30, category: "restaurant", hebrew: "לחיים!",              greek: "Γεια μας!",           transliteration: "יָאמָאס!" },
  { id: 31, category: "restaurant", hebrew: "יין",                 greek: "Κρασί",               transliteration: "קְרָאסִי" },
  { id: 32, category: "restaurant", hebrew: "בירה",                greek: "Μπύρα",               transliteration: "בִּירָה" },
  { id: 33, category: "restaurant", hebrew: "לחם",                 greek: "Ψωμί",                transliteration: "פְּסוֹמִי" },
  { id: 34, category: "restaurant", hebrew: "יש לי אלרגיה ל...",   greek: "Έχω αλλεργία στο...",  transliteration: "אֶכ׳וֹ אָלֶרְגִיָה סְטוֹ..." },

  // ---------- מלון ----------
  { id: 35, category: "hotel", hebrew: "צ'ק אין (כניסה)",         greek: "Τσεκ ιν",             transliteration: "צֶ'ק אִין" },
  { id: 36, category: "hotel", hebrew: "צ'ק אאוט (יציאה)",        greek: "Τσεκ άουτ",           transliteration: "צֶ'ק אָאוּט" },
  { id: 37, category: "hotel", hebrew: "חדר",                     greek: "Δωμάτιο",             transliteration: "דוֹמָאטְיוֹ" },
  { id: 38, category: "hotel", hebrew: "מפתח",                    greek: "Κλειδί",              transliteration: "קְלִידִי" },
  { id: 39, category: "hotel", hebrew: "מגבת",                    greek: "Πετσέτα",             transliteration: "פֶּטְסֶטָה" },
  { id: 40, category: "hotel", hebrew: "מיזוג אוויר",             greek: "Κλιματισμός",         transliteration: "קְלִימָאטִיסְמוֹס" },
  { id: 41, category: "hotel", hebrew: "אינטרנט אלחוטי",          greek: "Γουάι-φάι",           transliteration: "וַואי-פַאי" },
  { id: 42, category: "hotel", hebrew: "מה סיסמת הוויי-פיי?",     greek: "Ποιος είναι ο κωδικός Wi-Fi;", transliteration: "פְּיוֹס אִינֶה אוֹ קוֹדִיקוֹס וַואי-פַאי?" },
  { id: 43, category: "hotel", hebrew: "קבלה (רצפשן)",            greek: "Ρεσεψιόν",            transliteration: "רֶסֶפְּסְיוֹן" },
  { id: 44, category: "hotel", hebrew: "ארוחת בוקר",              greek: "Πρωινό",              transliteration: "פְּרוֹאִינוֹ" },
  { id: 45, category: "hotel", hebrew: "מזוודה",                  greek: "Βαλίτσα",             transliteration: "וָאלִיצָה" },

  // ---------- תחבורה ----------
  { id: 46, category: "transport", hebrew: "שדה תעופה",           greek: "Αεροδρόμιο",          transliteration: "אָאֶרוֹדְרוֹמְיוֹ" },
  { id: 47, category: "transport", hebrew: "מונית",               greek: "Ταξί",                transliteration: "טָאקְסִי" },
  { id: 48, category: "transport", hebrew: "אוטובוס",             greek: "Λεωφορείο",           transliteration: "לֶאוֹפוֹרִיוֹ" },
  { id: 49, category: "transport", hebrew: "רכבת",                greek: "Τρένο",               transliteration: "טְרֶנוֹ" },
  { id: 50, category: "transport", hebrew: "כרטיס",               greek: "Εισιτήριο",           transliteration: "אִיסִיטִירְיוֹ" },
  { id: 51, category: "transport", hebrew: "איפה?",               greek: "Πού;",                transliteration: "פּוּ?" },
  { id: 52, category: "transport", hebrew: "שמאלה",               greek: "Αριστερά",            transliteration: "אָרִיסְטֶרָה" },
  { id: 53, category: "transport", hebrew: "ימינה",               greek: "Δεξιά",               transliteration: "דֶקְסְיָה" },
  { id: 54, category: "transport", hebrew: "ישר",                 greek: "Ευθεία",              transliteration: "אֶפְתִ׳יָה" },
  { id: 55, category: "transport", hebrew: "עצור כאן בבקשה",      greek: "Σταματήστε εδώ παρακαλώ", transliteration: "סְטָאמָאטִיסְטֶה אֶדוֹ פָּארָאקָאלוֹ" },
  { id: 56, category: "transport", hebrew: "כמה עולה הנסיעה?",    greek: "Πόσο κάνει η διαδρομή;", transliteration: "פּוֹסוֹ קָאנִי אִי דְ׳יָאדְרוֹמִי?" },
  { id: 57, category: "transport", hebrew: "נמל / מעגן",          greek: "Λιμάνι",              transliteration: "לִימָאנִי" },
  { id: 58, category: "transport", hebrew: "מעבורת",              greek: "Φέρι μποτ",           transliteration: "פֶרִי בּוֹט" },

  // ---------- קניות ----------
  { id: 59, category: "shopping", hebrew: "כמה זה עולה?",         greek: "Πόσο κάνει;",         transliteration: "פּוֹסוֹ קָאנִי?" },
  { id: 60, category: "shopping", hebrew: "יקר",                  greek: "Ακριβό",              transliteration: "אָקְרִיבוֹ" },
  { id: 61, category: "shopping", hebrew: "זול",                  greek: "Φθηνό",               transliteration: "פְתִ׳ינוֹ" },
  { id: 62, category: "shopping", hebrew: "כרטיס אשראי",          greek: "Πιστωτική κάρτα",     transliteration: "פִּיסְטוֹטִיקִי קָארְטָה" },
  { id: 63, category: "shopping", hebrew: "מזומן",                greek: "Μετρητά",             transliteration: "מֶטְרִיטָה" },
  { id: 64, category: "shopping", hebrew: "קבלה",                 greek: "Απόδειξη",            transliteration: "אָפּוֹדִיקְסִי" },
  { id: 65, category: "shopping", hebrew: "יש הנחה?",             greek: "Έχει έκπτωση;",       transliteration: "אֶכִ׳י אֶקְפְּטוֹסִי?" },
  { id: 66, category: "shopping", hebrew: "אני רק מסתכל/ת",       greek: "Απλώς κοιτάω",        transliteration: "אָפְּלוֹס קִיטָאוֹ" },
  { id: 67, category: "shopping", hebrew: "פתוח",                 greek: "Ανοιχτά",             transliteration: "אָנִיכְטָה" },
  { id: 68, category: "shopping", hebrew: "סגור",                 greek: "Κλειστά",             transliteration: "קְלִיסְטָה" },

  // ---------- חוף הים ----------
  { id: 69, category: "beach", hebrew: "שמשייה",                 greek: "Ομπρέλα",             transliteration: "אוֹמְבְּרֶלָה" },
  { id: 70, category: "beach", hebrew: "מגבות",                  greek: "Πετσέτες",            transliteration: "פֶּטְסֶטֶס" },
  { id: 71, category: "beach", hebrew: "מיטת חוף",               greek: "Ξαπλώστρα",           transliteration: "קְסָאפְּלוֹסְטְרָה" },
  { id: 72, category: "beach", hebrew: "לשחות",                  greek: "Κολύμπι",             transliteration: "קוֹלִימְבִּי" },
  { id: 73, category: "beach", hebrew: "מציל",                   greek: "Ναυαγοσώστης",        transliteration: "נָאבָאגוֹסוֹסְטִיס" },
  { id: 74, category: "beach", hebrew: "הים",                    greek: "Θάλασσα",             transliteration: "תָ׳אלָאסָה" },
  { id: 75, category: "beach", hebrew: "קרם הגנה",               greek: "Αντηλιακό",           transliteration: "אָדִילְיָאקוֹ" },

  // ---------- משפחה וילדים ----------
  { id: 76, category: "family", hebrew: "תינוק",                 greek: "Μωρό",                transliteration: "מוֹרוֹ" },
  { id: 77, category: "family", hebrew: "ילד",                   greek: "Παιδί",               transliteration: "פֶּדִי" },
  { id: 78, category: "family", hebrew: "גן שעשועים",            greek: "Παιδική χαρά",        transliteration: "פֶּדִיקִי כָ׳ארָה" },
  { id: 79, category: "family", hebrew: "גלידה",                 greek: "Παγωτό",              transliteration: "פָּאגוֹטוֹ" },
  { id: 80, category: "family", hebrew: "עגלת תינוק",            greek: "Καροτσάκι",           transliteration: "קָארוֹצָאקִי" },
  { id: 81, category: "family", hebrew: "שירותים",              greek: "Τουαλέτα",            transliteration: "טוּאָלֶטָה" },
  { id: 82, category: "family", hebrew: "כיסא לתינוק",           greek: "Καρέκλα μωρού",       transliteration: "קָארֶקְלָה מוֹרוּ" },
  { id: 83, category: "family", hebrew: "חלב",                   greek: "Γάλα",                transliteration: "גָאלָה" },

  // ---------- חירום ----------
  { id: 84, category: "emergency", hebrew: "הצילו!",             greek: "Βοήθεια!",            transliteration: "ווֹאִיתִ׳יָה!" },
  { id: 85, category: "emergency", hebrew: "רופא",               greek: "Γιατρός",             transliteration: "יָאטְרוֹס" },
  { id: 86, category: "emergency", hebrew: "בית חולים",          greek: "Νοσοκομείο",          transliteration: "נוֹסוֹקוֹמִיוֹ" },
  { id: 87, category: "emergency", hebrew: "בית מרקחת",          greek: "Φαρμακείο",           transliteration: "פָארְמָאקִיוֹ" },
  { id: 88, category: "emergency", hebrew: "משטרה",              greek: "Αστυνομία",           transliteration: "אָסְטִינוֹמִיָה" },
  { id: 89, category: "emergency", hebrew: "אבדתי / הלכתי לאיבוד", greek: "Χάθηκα",            transliteration: "כָ׳אתִ׳יקָה" },
  { id: 90, category: "emergency", hebrew: "תקראו לאמבולנס",     greek: "Καλέστε ασθενοφόρο",  transliteration: "קָאלֶסְטֶה אָסְתֶ׳נוֹפוֹרוֹ" },
  { id: 91, category: "emergency", hebrew: "אני צריך/ה עזרה",    greek: "Χρειάζομαι βοήθεια",  transliteration: "כְרְיָאזוֹמֶה ווֹאִיתִ׳יָה" },

  // ---------- מספרים וזמן ----------
  { id: 92,  category: "numbers", hebrew: "אחת",                 greek: "Ένα",                 transliteration: "אֶנָה" },
  { id: 93,  category: "numbers", hebrew: "שתיים",               greek: "Δύο",                 transliteration: "דִ׳יוֹ" },
  { id: 94,  category: "numbers", hebrew: "שלוש",                greek: "Τρία",                transliteration: "טְרִיָה" },
  { id: 95,  category: "numbers", hebrew: "ארבע",                greek: "Τέσσερα",             transliteration: "טֶסֶרָה" },
  { id: 96,  category: "numbers", hebrew: "חמש",                 greek: "Πέντε",               transliteration: "פֶּנְדֶה" },
  { id: 97,  category: "numbers", hebrew: "שש",                  greek: "Έξι",                 transliteration: "אֶקְסִי" },
  { id: 98,  category: "numbers", hebrew: "שבע",                 greek: "Επτά",                transliteration: "אֶפְטָה" },
  { id: 99,  category: "numbers", hebrew: "שמונה",               greek: "Οκτώ",                transliteration: "אוֹקְטוֹ" },
  { id: 100, category: "numbers", hebrew: "תשע",                 greek: "Εννέα",               transliteration: "אֶנֶאָה" },
  { id: 101, category: "numbers", hebrew: "עשר",                 greek: "Δέκα",                transliteration: "דֶקָה" },
  { id: 102, category: "numbers", hebrew: "היום",                greek: "Σήμερα",              transliteration: "סִימֶרָה" },
  { id: 103, category: "numbers", hebrew: "מחר",                 greek: "Αύριο",               transliteration: "אָבְרִיוֹ" },
  { id: 104, category: "numbers", hebrew: "עכשיו",               greek: "Τώρα",                transliteration: "טוֹרָה" },
  { id: 105, category: "numbers", hebrew: "בוקר",                greek: "Πρωί",                transliteration: "פְּרוֹאִי" },
  { id: 106, category: "numbers", hebrew: "ערב",                 greek: "Βράδυ",               transliteration: "וְרָאדִי" },

  // ---------- ביטויים שימושיים ----------
  { id: 107, category: "common", hebrew: "אני לא מבין/ה",        greek: "Δεν καταλαβαίνω",     transliteration: "דֶ׳ן קָאטָאלָאבֶנוֹ" },
  { id: 108, category: "common", hebrew: "אתה יכול לעזור לי?",   greek: "Μπορείτε να με βοηθήσετε;", transliteration: "בּוֹרִיטֶה נָא מֶה ווֹאִיתִ׳יסֶטֶה?" },
  { id: 109, category: "common", hebrew: "אתה מדבר אנגלית?",     greek: "Μιλάτε αγγλικά;",     transliteration: "מִילָאטֶה אַנְגְלִיקָה?" },
  { id: 110, category: "common", hebrew: "אני לא מדבר/ת יוונית", greek: "Δεν μιλάω ελληνικά",  transliteration: "דֶ׳ן מִילָאוֹ אֶלִינִיקָה" },
  { id: 111, category: "common", hebrew: "מה השם שלך?",          greek: "Πώς σε λένε;",        transliteration: "פּוֹס סֶה לֶנֶה?" },
  { id: 112, category: "common", hebrew: "קוראים לי...",         greek: "Με λένε...",          transliteration: "מֶה לֶנֶה..." },
  { id: 113, category: "common", hebrew: "אני מישראל",           greek: "Είμαι από το Ισραήλ", transliteration: "אִימֶה אָפּוֹ טוֹ אִיסְרָאִיל" },
  { id: 114, category: "common", hebrew: "יפה מאוד!",            greek: "Πολύ ωραία!",         transliteration: "פּוֹלִי אוֹרֶאָה!" },
  { id: 115, category: "common", hebrew: "אין בעיה",             greek: "Κανένα πρόβλημα",     transliteration: "קָאנֶנָה פְּרוֹבְלִימָה" }
];

// חשיפה גלובלית (טעינה דרך <script>)
if (typeof window !== "undefined") {
  window.CATEGORIES = CATEGORIES;
  window.PHRASES = PHRASES;
}
