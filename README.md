# 💰 Finance Tracker — Week 12 Full-Stack submissions

A full-stack finance tracker that lets users log income and expenses, auto-calculates balance, and manages all transactions. 

**Submission Date:** 1st May 2026  
**GitHub:** https://github.com/lucywachu77-dev/finance-tracker-week-12

## 👥 Team Week 12

| Name | Role | Area |
| --- | --- | --- |
| Team Leader | Overall Management & Integration | GitHub, merging, testing, deployment |
| Martin Mburu Kinyanjui | HTML Structure Lead | Frontend layout - `App.jsx`, `Layout.jsx` |
| Moureen Gacheri | HTML Forms Developer | `TransactionForm.jsx` |
| Michelle Terer | Main CSS Designer | Global styles, colors, fonts, `App.css` |
| Maria Jones Anyango | Component Styling | Buttons, cards, transaction list styles |
| Erick Kamau Muiruri | Responsive Design | Mobile/tablet/desktop breakpoints |
| Dolla Grace Ambwaya | Income Module (JS) | Add income logic, display income |
| Naomi Murugi | Expense Module (JS) | Add expense logic, deduct from balance |
| Patrick Ngigi Njoroge | Core JS Logic | Display transactions, delete, auto balance |
| Juliet Adhiambo | Testing & Documentation | QA, README, demo notes |

## 🚀 Features
1. **Add Transactions**: Create income or expense with amount, description, date
2. **View Transactions**: Dynamic list of all transactions from database
3. **Delete Transactions**: Remove any entry by ID
4. **Auto Balance**: Balance updates instantly = `Total Income - Total Expenses`
5. **Responsive UI**: Works on mobile, tablet, desktop
6. **RESTful API**: Backend with GET, POST, DELETE endpoints
7. **CORS Enabled**: Frontend and backend communicate seamlessly

## 🛠 Tech Stack
**Frontend:** React 18, Vite, CSS3  
**Backend:** Node.js, Express.js, CORS middleware  
**Language:** JavaScript (ES6)  
**Tools:** Git, GitHub, npm, ESLint

## 📁 Project Structure
   finance-tracker-week-12/
   ├── backend/          # Express API
   │   ├── app.js       # Routes: GET/POST/DELETE /api/transactions
   │   └── server.js    # Runs on port 3000
   ├── frontend/         # React + Vite
   │   ├── src/
   │   │   ├── components/
   │   │   └── App.jsx
   │   └── vite.config.js
   └── README.md
## ⚙️ Installation & Setup
### Test Run - 1st May 2026
**Tester**: Juliet Adhiambo  
**Result**: PASS - All core features working in Codespaces
- Income/Expense CRUD functional
- Balance calculation correct  
- Responsive on mobile view

### 1. Clone the repository
```bash
git clone https://github.com/lucywachu77-dev/finance-tracker-week-12.git
cd finance-tracker-week-12
### Bugs Found & Fixed
- **CORS Error**: Frontend port 5173 couldn’t fetch from backend 3000. **Fix**: Added `app.use(cors())` in backend.
- **Typo Risk**: Folder names case-sensitive. `cd fronted` fails — must be `cd frontend`.
- **npm install**: Slow on cyber café WiFi. Takes 3-5 min per folder.

### Known Limitations
- No data persistence — transactions reset if backend restarts
- No input validation for negative numbers yet
- No user login/auth
