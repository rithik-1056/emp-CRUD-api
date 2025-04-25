# Employee CRUD API

This is a simple **RESTful API** built using **Node.js**, **Express.js**, and **MongoDB** for managing employee records.

---

## 📌 Features

- Create a new employee
- Get all employees
- Get a single employee by ID
- Update employee details
- Delete an employee

---

## 🧰 Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Dotenv
- Postman (for testing)

---

## 📁 API Endpoints

Base URL: `http://localhost:3000/api/employees`

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| POST   | `/`                   | Create new employee   |
| GET    | `/`                   | Get all employees     |
| GET    | `/:id`                | Get employee by ID    |
| PUT    | `/:id`                | Update employee by ID |
| DELETE | `/:id`                | Delete employee       |

---

## 🧪 Postman Testing

Use [Postman](https://www.postman.com/) to test the API.  
You can import the collection and test each operation:
- ✅ Create
- 📥 Read
- ✏️ Update
- ❌ Delete

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

## 🚀 Run the Project

```bash
npm install
npm start
```

---

## 📦 Folder Structure

```
emp-CRUD-api/
├── models/
│   └── Employee.js
├── routes/
│   └── employeeRoutes.js
├── server.js
├── .env
├── package.json
└── README.md
```

---

## 💻 Author

- Name: Rithik Kumar R
- GitHub: [@rithik-1056](https://github.com/rithik-1056)

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).