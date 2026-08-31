User Form Manager

A simple React app to create and view users.

Built with React Hook Form for validation and localStorage for persistence.

## Features

- Add a new user with name, email, and mobile number
- Client-side validation (required fields, valid email format, 10-digit mobile number)
- Data persisted in `localStorage`, so users stay after page refresh
- Toggle between the **Create User** form and the **User List** view
- Responsive user cards displaying saved details

## Tech Stack

- React
- React Hook Form
- Tailwind CSS

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Form.jsx
│   └── Usercard.jsx
└── App.jsx
```

## How It Works

- `App.jsx` holds the `user` state (list of all users) and a `toggle` state that switches between the form and the card list.
- `Navbar.jsx` has a **Create User** button that flips `toggle` to show the form.
- `Form.jsx` uses `react-hook-form` for validation and submission. On submit, the new user is appended to the list, saved to `localStorage`, and the view switches to the card list.
- `Usercard.jsx` renders each user's details with **Update** and **Delete** action buttons.

## Getting Started

```bash
npm install
npm run dev
```

## Planned Improvements

- Implement Update and Delete functionality
- Add loading/empty states for the user list
- Move user data to a backend/API instead of localStorage