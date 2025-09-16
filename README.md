# 🌍 Travel Website (Fullstack React + Node.js + MongoDB)

Dự án web du lịch fullstack.  
- **Frontend:** ReactJS (thư mục `Front-end/`)  
- **Backend:** Node.js + Express + MongoDB (thư mục `server/`)  

---

## 📂 Cấu trúc dự án
Travel/
├── Front-end/ # ReactJS (UI)
├── server/ # Node.js + Express + MongoDB
└── README.md



---

## ⚡ Cài đặt và chạy dự án

### 1. Clone repo
```bash
git clone https://github.com/PhuocKT/Travel.git
cd Travel
2. Cài đặt backend

cd server
npm install
Tạo file .env trong thư mục server/ để cấu hình MongoDB:

env

MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/travelDB?retryWrites=true&w=majority
PORT=5000
Chạy server:


node server.js
Server sẽ chạy tại: http://localhost:5000

3. Cài đặt frontend


cd ../Front-end
npm install
npm start
Frontend sẽ chạy tại: http://localhost:3000

🌐 API Backend
GET /api/destinations → Lấy danh sách địa điểm du lịch.

GET /images/:filename → Lấy ảnh từ thư mục server/public/images/.

Ví dụ:

http://localhost:5000/api/destinations
http://localhost:5000/images/img1.jpg
🛠 Công nghệ sử dụng
Frontend: ReactJS, SCSS, AOS Animation, React Icons

Backend: Node.js, Express, Mongoose

Database: MongoDB Atlas

📦 Deploy
Frontend: Vercel / Netlify

Backend: Render / Railway / VPS

✌️ Developed by PhuocKT

