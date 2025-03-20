# **Prisma MySQL Project**

Welcome to the **Prisma MySQL** project! This is a boilerplate for building scalable, maintainable, and efficient backend applications using **Prisma ORM**, **Express.js**, and **TypeScript**. The project is designed with a clean architecture and follows best practices for code organization and conventions.

---

## **Features**
- **Prisma ORM**: Simplified database access with type-safe queries.
- **Express.js**: Lightweight and flexible web framework for building APIs.
- **TypeScript**: Strongly typed language for better code quality and maintainability.
- **MySQL Database**: Relational database integration with Prisma.
- **Clean Architecture**: Separation of concerns with `models/`, `services/`, `routes/`, and `utils/` directories.
- **Environment Configuration**: Centralized `.env` file for managing environment variables.

---

## **Project Structure**
The project is organized into the following directories:

```plaintext
src/
├── clients/                # External client setup (e.g., Prisma, Express)
├── models/                 # Database operations (CRUD)
├── services/               # Business logic and reusable service functions
├── routes/                 # API route definitions
├── utils/                  # Utility functions (e.g., error handling, response formatting)
├── types/                  # TypeScript types and interfaces
docs/
├── [coding-convention.md](/docs/coding-convention.md)    # Documentation for coding conventions

## **Getting Started**

### **1. Prerequisites**

Make sure you have the following installed:

- **Node.js**: >= 16.x
- **npm**: >= 8.x
- **MySQL**: >= 8.x

### **2. Clone the Repository**

```bash
git clone https://github.com/your-username/prisma-mysql.git
cd prisma-mysql
```

### **3. Install Dependencies**

```bash
npm install
```

### **4. Configure Environment Variables**

Create a `.env` file in the root directory and configure your database connection:

```plaintext
NODE_ENV=dev
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
```

### **5. Run Database Migrations**

Generate and apply Prisma migrations to your database:

```bash
npx prisma migrate dev --name init
```

### **6. Start the Development Server**

Run the server in development mode:

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

---

## **Scripts**

Here are the available npm scripts:

- **`npm run dev`**: Start the development server with `nodemon`.
- **`npx prisma studio`**: Open Prisma Studio to manage your database visually.
- **`npx prisma migrate dev`**: Apply database migrations.
- **`npx prisma generate`**: Generate Prisma client.

---

## **API Endpoints**

### **User Routes**

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/users` | Fetch all users |
| GET | `/users/:id` | Fetch a user by ID |
| POST | `/users` | Create a new user |

---

## **Technologies Used**

- **Prisma ORM**: Database access and migrations.
- **Express.js**: Web framework for building APIs.
- **TypeScript**: Strongly typed JavaScript.
- **MySQL**: Relational database.

---

## **Contributing**

Contributions are welcome! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## **License**

This project is licensed under the **ISC License**. See the LICENSE file for details.

---

## **Acknowledgments**

- Prisma for the amazing ORM.
- Express.js for the lightweight web framework.
- TypeScript for making JavaScript better.

---

Happy coding! 🚀