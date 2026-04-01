# GutenReads
# 📚 GutenReads – Book Explorer using Gutendex API

An interactive web application that allows users to:

- Browse and search books from Project Gutenberg
- Filter books by language, author, topic, and more
- View detailed metadata of books
- Access free downloadable formats (PDF, EPUB, etc.)

---

## 🚀 Features

- 🔍 Search books by title or author
- 🌍 Filter by language (English, French, etc.)
- 📖 Browse books by topic (e.g., Children, Fiction)
- 📊 Sort by popularity or ID
- 📥 View available formats and download links
- ⚡ Fast and responsive UI
- 🔄 Pagination support (Next/Previous pages)

---

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **API:** Gutendex (Project Gutenberg Metadata API)

---

## ⚙️ How It Works

User can:

- Enter a search query (e.g., "Harry Potter")
- Apply filters like:
  - Language (`en`, `fr`)
  - Author year range
  - Topic (e.g., "children")

The app:

1. Sends a request to Gutendex API:

```js
fetch(`https://gutendex.com/books?search=${query}`)
  .then(res => res.json())
  .then(data => console.log(data.results));
