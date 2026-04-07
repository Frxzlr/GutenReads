"use strict";

let currentBooks = [];

async function searchBooks() {
  const query = document.getElementById("searchInput").value;
  const container = document.getElementById("booksContainer");
  const loading = document.getElementById("loading");

  container.innerHTML = "";
  loading.style.display = "block";

  try {
    const res = await fetch(`https://gutendex.com/books?search=${query}`);
    const data = await res.json();

    currentBooks = data.results;
    displayBooks(currentBooks);

  } catch (error) {
    container.innerHTML = "<p>Error fetching data</p>";
  } finally {
    loading.style.display = "none";
  }
}

function displayBooks(books) {
  const container = document.getElementById("booksContainer");
  container.innerHTML = "";

  if (books.length === 0) {
    container.innerHTML = "<p>No books found</p>";
    return;
  }

  books.map(book => {
    const div = document.createElement("div");
    div.classList.add("book-card");

    div.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.authors.map(a => a.name).join(", ")}</p>
      <p><strong>Downloads:</strong> ${book.download_count}</p>
      <a href="${book.formats["text/html"] || "#"}" target="_blank">Read</a>
    `;

    container.appendChild(div);
  });
}

/* SORT */
function sortBooks() {
  const value = document.getElementById("sortSelect").value;

  let sorted = [...currentBooks];

  if (value === "asc") {
    sorted.sort((a, b) => a.download_count - b.download_count);
  } else if (value === "desc") {
    sorted.sort((a, b) => b.download_count - a.download_count);
  }

  displayBooks(sorted);
}

/* FILTER */
function filterPopular() {
  const filtered = currentBooks.filter(book => book.download_count > 10000);
  displayBooks(filtered);
}

/* DARK MODE */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
