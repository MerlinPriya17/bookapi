# bookapi
A simple Node.js and Express-based Book API that provides basic CRUD operations for managing book data, tested using Postman.
A lightweight **RESTful API** built with **Node.js** and **Express.js** to manage a collection of books.  
Supports full **CRUD** (Create, Read, Update, Delete) operations and returns responses in JSON format.  
Perfect for beginners learning backend development and API testing.

---

## 🚀 Features
- Add new books
- Retrieve all books or a specific book by ID
- Update book details
- Delete books from the collection
- Simple JSON-based responses
- Easily testable using **Postman** or any API client

---

## 🛠 Tech Stack
- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for Node.js
- **Postman** – For API testing

---

## 📂 Project Structure
book.api/
├── server.js # Main application file
├── package.json # Dependencies and scripts
└── README.md # Documentation

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/book.api.git
cd book.api
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Run the Server
bash
Copy
Edit
node server.js
🌐 API Endpoints
Method	Endpoint	Description
GET	/books	Get all books
GET	/books/:id	Get book by ID
POST	/books	Add a new book
PUT	/books/:id	Update a book by ID
DELETE	/books/:id	Delete a book by ID

🧪 Testing the API with Postman
Open Postman.

Enter the API endpoint (e.g., http://localhost:3000/books).

Select the HTTP method (GET, POST, PUT, DELETE).

For POST & PUT requests, send JSON data in the body, e.g.:

json
Copy
Edit
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald"
}
Click Send to view the response.

📌 Notes
Default port is set to 3000. You can change it in server.js.

This version uses an in-memory array. Data will reset when the server restarts.

You can extend this project by adding a database like MongoDB or MySQL.

<img width="1894" height="924" alt="Screenshot 2025-08-10 190444" src="https://github.com/user-attachments/assets/b27c1e24-880c-4990-83e9-a50138cfd70e" />

GET all books:

<img width="1116" height="841" alt="Screenshot 2025-08-10 190909" src="https://github.com/user-attachments/assets/33d1d81e-1dcb-46ec-b406-2c20ae257e9d" />

POST new book:

<img width="1122" height="896" alt="Screenshot 2025-08-10 191013" src="https://github.com/user-attachments/assets/635512b6-7eeb-454b-bae9-8862d7037687" />

PUT update book:

<img width="1123" height="886" alt="Screenshot 2025-08-10 191155" src="https://github.com/user-attachments/assets/f7f89803-ff47-4971-8182-078f78e0b51a" />

DELETE book:

<img width="1105" height="890" alt="Screenshot 2025-08-10 191404" src="https://github.com/user-attachments/assets/bd292ba6-e55f-47fa-bf1f-c343cae0c036" />





