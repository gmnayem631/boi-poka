# [Boi Poka](https://clever-bonbon-2fb7dd.netlify.app/)

_A beautiful React-based book discovery & reading tracker app_

**Live Demo:** [https://clever-bonbon-2fb7dd.netlify.app/](https://clever-bonbon-2fb7dd.netlify.app/)

---

## 🚀 About the Project

**Boi Poka** (বই পোকা) is a modern, responsive single-page web application for book lovers. It lets you:

- Browse a curated collection of books on the **Home** page
- View rich **Book Details**
- Maintain your personal **Read List**
- Keep track of **PagesToRead** (books you plan to read next)

Built from scratch on top of the official Vite + React template, the app features clean component architecture, smooth client-side routing, and a delightful UI with loading states.

Whether you're a casual reader or a hardcore bookworm, Boi Poka makes managing your reading journey simple and enjoyable.

---

## ✨ Features

- **Home Page** – Hero banner + book showcase
- **Book Details Page** – Full information for any selected book
- **Read List** – Add/remove books you've read or are reading
- **Pages to Read** – Plan your future reads
- **Responsive Design** – Works perfectly on mobile, tablet, and desktop
- **Fast Navigation** – Powered by custom React Router setup
- **Loading Spinner** – Smooth UX during data handling
- **Reusable Components** – Header, Footer, Book cards, ReadListCard, Banner, etc.

---

## 🛠 Tech Stack

| Technology       | Purpose                                 |
| ---------------- | --------------------------------------- |
| **React**        | UI library                              |
| **Vite**         | Build tool & fast dev server            |
| **React Router** | Client-side routing                     |
| **Tailwind CSS** | Utility-first styling                   |
| **DaisyUI**      | Beautiful components on top of Tailwind |
| **Netlify**      | Hosting & automatic deploys             |

---

## 📦 Installation & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/gmnayem631/boi-poka.git
cd boi-poka

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

## 📁 Project Structure

```
src/
├── components/
│ ├── Banner/
│ ├── Book/
│ ├── Books/
│ ├── Footer/
│ ├── Header/
│ ├── ReadListCard/
│ └── Spinner/
├── pages/
│ ├── BookDetails/
│ ├── Home/
│ ├── PagesToRead/
│ ├── ReadList/
│ └── Root/
├── Routes/
│ └── Route.jsx
├── utilities/
└── assets/
```
