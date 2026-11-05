# Employee Management System (EMS)

A role-based Employee Management System built with **React, Vite, and
Tailwind CSS**. The application provides separate dashboards for
administrators and employees. Administrators can create and assign
tasks, while employees can view and manage their assigned work.

> **Current implementation:** This is a frontend-focused project. Sample
> employee data and login-session information are stored in the browser
> using `localStorage`. A backend API and database are not currently
> included.

## Features

### Authentication and roles

-   Separate login flow for administrators and employees.
-   Role-based rendering of the Admin Dashboard or Employee Dashboard.
-   Login-session persistence using browser `localStorage`.
-   Logout functionality.

### Admin Dashboard

-   Create tasks with a title, description, due date, assignee, and
    category.
-   Assign tasks to employees.
-   View an employee-wise summary of task counts.
-   Monitor new, active, completed, and failed tasks.

### Employee Dashboard

-   View a personal dashboard.
-   See task-count summaries for new, active, completed, and failed
    tasks.
-   View assigned tasks through task-list components.
-   Access task actions provided by the task interface.

### User interface

-   Responsive layouts built with Tailwind CSS.
-   Separate dashboard layouts for administrators and employees.
-   Styled login page, task forms, employee task summaries, and task
    cards.

## Tech Stack

  -----------------------------------------------------------------------
  Layer                               Technology
  ----------------------------------- -----------------------------------
  UI library                          React 18

  Build tool / development server     Vite

  Styling                             Tailwind CSS

  Language                            JavaScript (JSX)

  Shared state                        React Context API

  Component state and lifecycle       React Hooks (`useState`,
                                      `useEffect`, `useContext`)

  Browser-side storage                `localStorage`
  -----------------------------------------------------------------------

## Project Structure

``` text
24bds008/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── main.jsx
    ├── assets/
    ├── components/
    │   ├── Auth/
    │   │   └── Login.jsx
    │   ├── Dashboard/
    │   │   ├── AdminDashboard.jsx
    │   │   └── EmployeeDashboard.jsx
    │   ├── TaskList/
    │   │   ├── AcceptTask.jsx
    │   │   ├── CompleteTask.jsx
    │   │   ├── FailedTask.jsx
    │   │   ├── NewTask.jsx
    │   │   └── TaskList.jsx
    │   └── other/
    │       ├── AllTask.jsx
    │       ├── CreateTask.jsx
    │       ├── Header.jsx
    │       └── TaskListNumbers.jsx
    ├── context/
    │   └── AuthProvider.jsx
    └── utils/
        └── localStorage.jsx
```

## Getting Started

### Prerequisites

-   Node.js (LTS recommended)
-   npm
-   Git

### 1. Clone the repository

``` bash
git clone https://github.com/ayush16-hub/FULL-STACK-24BDS008.git
cd FULL-STACK-24BDS008
```

If the Vite application is inside a nested directory, move into that
directory before running the commands below.

### 2. Install dependencies

``` bash
npm install
```

### 3. Start the development server

``` bash
npm run dev
```

Open the local URL printed by Vite in your terminal (commonly
`http://localhost:5173`).

### 4. Create a production build

``` bash
npm run build
```

To preview the production build locally:

``` bash
npm run preview
```

## Demo Login Credentials

The current application uses sample credentials defined in the frontend
source code.

### Admin

  Email            Password
  ---------------- ----------
  `admin@me.com`   `123`

### Employees

  Employee   Email                     Password
  ---------- ------------------------- ----------
  Arjun      `e@e.com`                 `123`
  Sneha      `employee2@example.com`   `123`
  Ravi       `employee3@example.com`   `123`
  Priya      `employee4@example.com`   `123`
  Karan      `employee5@example.com`   `123`

These are demonstration credentials, not secure production accounts.

## Application Flow

1.  The application loads through `main.jsx`.
2.  `AuthProvider` initializes the employee data and exposes it through
    React Context.
3.  `App.jsx` checks the saved login session and decides which screen to
    render.
4.  The login form passes the entered email and password to the
    `handleLogin` function in `App.jsx`.
5.  Administrators are shown the Admin Dashboard, where they can create
    tasks and view employee task summaries.
6.  Employees are shown their own dashboard, including task statistics
    and their task list.
7.  The dashboard components access shared employee data through
    `AuthContext`.

## State and Data Storage

-   `AuthProvider.jsx` creates the shared employee state using React
    Context.
-   `localStorage.jsx` contains the sample employee and admin data and
    helper functions for browser storage.
-   `App.jsx` stores the active login session in `localStorage`.
-   Components use React state and Context to read and update
    application data.

## Available Scripts

  Command             Description
  ------------------- --------------------------------------
  `npm run dev`       Start the Vite development server
  `npm run build`     Build the application for production
  `npm run preview`   Preview the production build

## Current Scope and Limitations

-   The project currently runs as a frontend application; no backend API
    is included.
-   Employee and task data are stored in browser-side state and
    `localStorage`.
-   Data is not synchronized between different browsers, devices, or
    users.
-   Demo credentials are defined in frontend code and must not be used
    for real accounts.
-   Browser-side authentication is for demonstration purposes and is not
    production-grade security.

## Future Improvements

-   Build a backend API and connect a persistent database.
-   Add secure authentication and server-side role authorization.
-   Add task priorities, advanced search, filtering, and sorting.
-   Add employee profiles and department information.
-   Add analytics charts and productivity summaries.
-   Add notifications and a calendar view.
-   Add automated component and application tests.
-   Deploy the application and document the live demo.

## Contributing

Contributions and suggestions are welcome.

1.  Fork the repository.
2.  Create a feature branch.
3.  Make your changes.
4.  Test the application.
5.  Submit a pull request describing your changes.

## License

No license has been specified for this repository yet.
