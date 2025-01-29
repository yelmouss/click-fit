# 🏋️‍♂️ Click Fit Project

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange.svg)

### A modern, responsive fitness website with image upload capabilities and real-time data integration.

</div>

---

## 🚀 Features

✅ **Responsive Design** – Built with Bootstrap for a seamless mobile experience  
✅ **Dynamic Content** – Real-time data fetching from Numbers API  
✅ **Image Upload** – Drag-and-drop functionality for image uploads  
✅ **User Management** – Secure user registration system  
✅ **Smooth Animations** – Interactive elements with smooth transitions

---

## 🏗️ Tech Stack

### **Frontend**

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- jQuery

### **Backend**

- Node.js
- Express.js
- MySQL
- Multer (file upload)

---

## 🗂️ Project Structure

```
click-fit/
├── backend/
│   ├── app.js          # Express server configuration
│   ├── routes/
│   │   ├── upload.js   # Image upload routes
│   │   └── users.js    # User management routes
│   └── db/
│       ├── schema.sql  # Database schema
│       └── procedures.sql # Stored procedures
├── frontend/
│   ├── css/
│   ├── js/
│   ├── upload_images/
│   └── index.html
├── .env                # Environment configuration
└── README.md           # Project documentation
```

---

## ⚙️ Setup & Installation

### 1️⃣ Set Up Environment

```sh
cp .env.example .env
```

Edit `.env` with your database credentials:

```sh
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
PORT=3000
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Database Setup

```sh
mysql -u your_username -p your_database < backend/db/schema.sql
mysql -u your_username -p your_database < backend/db/procedures.sql
```

### 4️⃣ Start Development Server

```sh
npm run dev
```

### 5️⃣ Run Tests

```sh
npm test
```

---

## 🔌 API Endpoints

### 📸 Image Upload

- **POST** `/api/upload/upload`

### 👥 User Management

- **POST** `/api/users/register`

---

## 📦 Dependencies

- express: ^4.17.1
- mysql: ^2.18.1
- multer: ^1.4.2
- dotenv: ^16.4.7
- body-parser: ^1.19.0

---

## 🤝 Contributing

1. **Fork the repository**
2. Create your feature branch:
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```sh
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/AmazingFeature
   ```
5. Open a **Pull Request**

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

[Yassine ELMOUSS] - yelmouss.devt@gmail.com

🔗 **Project Link**: [GitHub Repository](https://github.com/yelmouss/click-fit)

---

<div align="center">

✨ Made with ❤️ by **[yelmouss]** ✨

</div>
