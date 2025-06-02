# 🍽️ Restaurant Table Reservation (Backend)

A backend that allows customers to reserve tables at restaurants for specific dates and times, with smart features like waitlists, special requests (e.g., window seat), and peak-hour pricing. Admins can create and manage tables.



## 🚀 Features

- ✅ User & Admin authentication with JWT
- ✅ Role-based route protection
- ✅ Admin: Create and manage tables
- ✅ Customer: Book reservations (with special requests)
- ✅ Automatic waitlist management
- ✅ Peak hour pricing logic
- ✅ Clean REST API design
- ✅ Postman tested



## 🛠️ Tech Stack

 **Backend:** Node.js, Express.js
 **Database:** MongoDB + Mongoose
 **Auth:** JWT (JSON Web Token)
 **Testing:** Postman 

 ## 🔐 Authentication Routes

| Method | Endpoint            | Access   | Description                |
|--------|---------------------|----------|----------------------------|
| POST   | `/api/auth/register`| Public   | Register a new user        |
| POST   | `/api/auth/login`   | Public   | Login and receive JWT      |



## 🪑 Table Routes (Admin Only)

| Method | Endpoint       | Access | Description              |
|--------|----------------|--------|--------------------------|
| POST   | `/api/tables`  | Admin  | Create a new table       |
| GET    | `/api/tables`  | Admin  | Get all tables           |


## 📅 Reservation Routes

| Method | Endpoint              | Access     | Description                      |
|--------|-----------------------|------------|----------------------------------|
| POST   | `/api/reservations`   | Customer   | Book a table                     |
| GET    | `/api/reservations/my`| Customer   | View user's reservations         |


 🔐 Admin Login  
✅ Add Table (`POST /api/tables`)  
📅 Book Reservation with special request and peak hour logic


![get_table](https://github.com/user-attachments/assets/16af5a57-c563-4cea-81c9-d9ff20601bfc)
![Table_Api_Test](https://github.com/user-attachments/assets/4a5ea7db-32b3-4cfd-9947-cc1a7a3ece6d)
![reservation_test](https://github.com/user-attachments/assets/87575b65-27a0-4551-b029-385685ea5ffb)
![login](https://github.com/user-attachments/assets/7e543b9b-01c4-4dac-a68e-5e613058eb7b)
![Admin_Login](https://github.com/user-attachments/assets/6c439257-98d8-4f7b-b434-998e006e262f)








