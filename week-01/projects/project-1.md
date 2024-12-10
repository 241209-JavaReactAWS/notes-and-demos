# Item Management CRUD Application Project

## Description
The purpose of this project is to pair associates within the team to collaboratively design and implement a basic CRUD (Create, Read, Update, Delete) web application. This project will challenge associates to practice both backend and frontend development while fostering teamwork and understanding of full-stack application architecture.

Each pair will create a repository under our GitHub organization to store their project. By the project's completion, associates will have designed a functional item management application with both administrative and user-level functionality.

## Technical Requirements

### Backend
- **Framework:** Spring Boot
- **Modules:** 
  - Spring Web
  - Spring Data JPA
- **Database Options:** 
  - PostgreSQL (preferred)
  - H2 (file-based, for simplicity)
- **API:** RESTful endpoints for all CRUD operations.
  
### Frontend
- **Initial Design:** HTML and CSS mockups of the application UI (due by **12/16** at the first project check-in).
- **Final Implementation:** React-based Single Page Application (SPA).
- **Communication:** Use an HTTP client (e.g., Axios or Fetch) to interact with the backend.

### Project Management
- All code must be stored in a repository created under our GitHub organization.
- The repository must include proper documentation, including a `README.md` file with instructions for setup and running the application.

## User Stories
### Core Functionality
1. **Authentication:** 
   - As a user, I can log in and log out using valid credentials.
   - As a user, I will see relevant error messages for invalid login attempts.
2. **CRUD Operations:**
   - As a user, I can add, edit, view, and delete items from the system.
3. **Role-Based Access Control:**
   - As an admin, I can manage the list of items that users can interact with.
   - As a standard user, I can only interact with items (view, add, edit, or delete) but cannot manage the overall item list.

### Example Application Scenarios
- A **Pokemon Tracker**:
  - **Trainer (User Role):** Add and track caught Pokemon.
  - **Admin:** Maintain a list of all Pokemon available in the system.

## Stretch Goals
1. **Enhanced Authentication:**
   - Add password reset functionality.
   - Implement OAuth2 for login (e.g., Google or GitHub).
2. **Audit Logging:**
   - Track user actions (e.g., item added, item deleted) for accountability.
3. **Advanced Filtering:**
   - Allow users to filter and sort items by various attributes.
4. **Backed Testing:**
   - Write unit tests for both backend service components.
5. **Hashed Password:**
   - Use BCrypt to ensure passwords stored in the database aren't in plaintext

---

This project encourages creativity and initiative, so teams are encouraged to propose their own enhancements or additional features during development.
