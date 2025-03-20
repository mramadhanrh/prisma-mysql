# **Code Conventions for Project Directories**

This document summarizes the naming conventions, structure, and responsibilities for each directory in the project.

---

## **1. `models/` Directory**
### **Purpose**:
- Handles database operations (CRUD) using Prisma.
- Focuses solely on interacting with the database, without business logic.

### **Conventions**:
- **File Naming**: Use singular names, corresponding to database tables (e.g., `userModel.ts`, `postModel.ts`).
- **Function Naming**:
  - Use `find` for functions that may return `null` (e.g., `findUserById`).
  - Use `get` for functions that return collections or guarantee a result (e.g., `getAllUsers`).
  - Use verbs like `create`, `update`, `delete` for other operations.

**Example**
```typescript
import { prismaClient } from "../clients/prismaClient";

export const getAllUsers = async () => {
  return prismaClient.user.findMany(); // Returns an empty array if no users exist
};

export const findUserById = async (id: number) => {
  return prismaClient.user.findUnique({ where: { id } }); // May return null
};

export const createUser = async (data: { email: string; name?: string }) => {
  return prismaClient.user.create({ data });
};
```

---

## **2. `services/` Directory**
### **Purpose**:
- Contains business logic, such as validation, data formatting, or combining multiple model operations.
- Acts as an intermediary between `models/` and `routes/`.

### **Conventions**:
- **File Naming**: Use singular names, corresponding to the resource (e.g., `userService.ts`, `authService.ts`).
- **Function Naming**:
  - Use `get`, `create`, `update`, `delete`, or other verbs to describe actions (e.g., `getAllUsersService`, `createUserService`).
  - Be specific about the operation and resource.

**Example**
```typescript
import { getAllUsers, findUserById, createUser } from "../models/userModel";
import { formatResponse } from "../utils/responseFormatter";

export const getAllUsersService = async () => {
  const users = await getAllUsers();
  return formatResponse(users); // Always returns an array, even if empty
};

export const getUserByIdService = async (id: number) => {
  const user = await findUserById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return formatResponse(user);
};

export const createUserService = async (data: { email: string; name?: string }) => {
  const newUser = await createUser(data);
  return formatResponse(newUser);
};
```

---

## **3. `routes/` Directory**
### **Purpose**:
- Defines API endpoints for each resource.
- Calls service functions to handle requests.

### **Conventions**:
- **File Naming**: Use plural names, corresponding to the resource (e.g., `userRoutes.ts`, `postRoutes.ts`).
- **Function Naming**:
  - Define routes using HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
  - Use descriptive paths for endpoints (e.g., `GET /users`, `POST /users`).

**Example**
```typescript
import { Router } from "express";
import { getAllUsersService, getUserByIdService, createUserService } from "../services/userService";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await getUserByIdService(Number(req.params.id));
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await createUserService(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
```

---

## **4. `utils/` Directory**
### **Purpose**:
- Contains reusable utility functions, such as response formatting or error handling.

### **Conventions**:
- **File Naming**: Use descriptive names based on the utility's purpose (e.g., `responseFormatter.ts`, `errorHandler.ts`).
- **Function Naming**:
  - Use descriptive names that clearly indicate the utility's purpose (e.g., `formatResponse`, `handleError`).

```typescript
export const formatResponse = (data: any) => {
  return {
    success: true,
    data,
  };
};
```

---

## **5. `clients/` Directory**
### **Purpose**:
- Contains setup files for external clients, such as Prisma and Express.

### **Conventions**:
- **File Naming**: Use descriptive names based on the client (e.g., `prismaClient.ts`, `expressClient.ts`).

****Example**
```typescript
import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();
```

---

## **General Naming Conventions**
1. **Use camelCase** for function and variable names (e.g., `getAllUsers`, `createUserService`).
2. **Use PascalCase** for class names (e.g., `UserController`).
3. **Use camelCase** for file and directory names (e.g., `userRoutes.ts`, `responseFormatter.ts`).

---

### **Summary**
This structure and naming convention ensure:
- **Separation of Concerns**: Each directory has a clear and specific purpose.
- **Consistency**: Uniform naming conventions across the project.
- **Scalability**: The project is easy to extend and maintain.
