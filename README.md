# Certificate_Verification_System
MERN stack based certificate verification system
# 🎓 Certificate Verification System (MERN Stack)

## 📌 Project Overview
The Certificate Verification System is a web-based application designed to streamline the process of issuing, verifying, and downloading internship certificates.  

Administrators can upload student certificate data in bulk using Excel files, while students can verify and download their certificates using a unique Certificate ID.

This project is developed as part of an internship using the MERN stack.

---

## 🛠️ Technology Stack
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT & bcrypt
- File Upload: Multer
- Excel Parsing: xlsx
- PDF Generation: PDFKit

---

## 🚀 Features

### 🔐 User Roles & Authentication
- Admin login system
- Secure password encryption
- JWT-based authentication

### 📄 Certificate Search & Verification
- Students can search certificates using a unique Certificate ID
- Certificate details are verified before display

### 📊 Excel Data Upload (Admin)
- Bulk upload of student data via Excel (.xlsx)
- Automatic data validation
- Secure storage in MongoDB

### 🧾 Certificate Generation
- Automatically generates certificates with:
  - Student Name
  - Internship Domain
  - Start & End Dates

### 📥 Certificate Download
- Certificates can be downloaded in PDF format
- Printable certificate layout

### 🔒 Security & Data Integrity
- Encrypted authentication
- Role-based access control
- Validation checks during Excel upload

---

## 📁 Project Structure

Certificate_Verification_System/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Certificate.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── certificateRoutes.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       └── index.js
│
└── README.md

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB running locally or on cloud
- npm installed

---

### Backend Setup
cd backend
npm install
node server.js

Backend runs on:
http://localhost:5000

---

### Frontend Setup
cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

---

## 📥 Excel Upload Format

The Excel file must contain the following columns:

certificateId | studentName | domain | startDate | endDate

---

## 📌 API Endpoints

POST   /api/auth/login              → Admin login  
POST   /api/certificates/upload     → Upload Excel file  
GET    /api/certificates/:id        → Verify certificate  
GET    /api/certificates/pdf/:id    → Download certificate PDF  

---

## 🎯 Use Cases
- Internship certificate verification
- Academic certificate authentication
- Organization-issued certificate validation

---

## 📄 Internship Details
- Project Title: Certificate Verification System
- Domain: Web Development (MERN Stack)
- Project Type: Internship Project

---

## 👨‍💻 Author
- Name: DIVYANSHU RAI
- Organization: AMDOX TECHNOLOGIES PRIVATE LIMITED
- Year: 2025

---

## ✅ Conclusion
This Certificate Verification System provides a secure, efficient, and user-friendly solution for managing and verifying certificates, reducing manual effort and ensuring data authenticity.
