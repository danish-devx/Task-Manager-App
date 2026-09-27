<div align="center">

# Focus Tasks

### A calm, responsive task manager for turning priorities into progress.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20App-173b2a?style=for-the-badge)](https://danish-devx.github.io/Task-Manager-App/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react&logoColor=20232A)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20with-GitHub%20Pages-222222?style=flat-square&logo=github)](https://pages.github.com/)

**[View the live application](https://danish-devx.github.io/Task-Manager-App/)** · **[View the source code](https://github.com/danish-devx/Task-Manager-App)**

</div>

## Overview

Focus Tasks is a polished single-page task manager built for fast, distraction-free planning. It lets users capture tasks, keep their list organized, and monitor completion progress without requiring an account or backend.

All task data is persisted locally in the browser, so the list remains available after refreshing or reopening the app on the same device and browser.

## Features

- Add new tasks with input validation
- Mark tasks as active or completed
- Edit existing task titles inline
- Delete individual tasks or clear the complete list
- Filter tasks by all, active, or completed status
- Search tasks by title in real time
- View total, active, completed, and completion-rate statistics
- Persist tasks automatically with `localStorage`
- Responsive layout for desktop, tablet, and mobile screens
- Accessible labels and keyboard-friendly form interactions

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| State | React Hooks (`useState`, `useEffect`, `useMemo`) |
| Persistence | Browser `localStorage` |
| Code quality | ESLint |
| Deployment | GitHub Pages |

## Project Structure

```text
src/
├── App.jsx
├── index.css
├── main.jsx
└── components/
	├── TaskForm/
	│   └── TaskForm.jsx
	├── TaskItem/
	│   └── TaskItem.jsx
	└── TaskList/
		└── TaskList.jsx
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/danish-devx/Task-Manager-App.git
cd Task-Manager-App
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Data & Privacy

Tasks are stored only in the browser's local storage under the `focus-tasks` key. No task data is sent to a server or collected by the application.

## Deployment

The production build is deployed through GitHub Pages and is available at:

**[https://danish-devx.github.io/Task-Manager-App/](https://danish-devx.github.io/Task-Manager-App/)**

## Author

Built by **Danish DevX**.

- GitHub: [@danish-devx](https://github.com/danish-devx)
- Repository: [Task-Manager-App](https://github.com/danish-devx/Task-Manager-App)
