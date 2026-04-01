async function searchBooks() {
  const query = document.getElementById("searchInput").value;
  const container = document.getElementById("booksContainer");
  const loading = document.getElementById("loading");

  container.innerHTML = "";
  loading.style.display = "block";

  try {
    const res = await fetch(`https://gutendex.com/books?search=${query}`);
    const data = await res.json();

    displayBooks(data.results);
  } catch (error) {
    container.innerHTML = "<p>Something went wrong 😢</p>";
  } finally {
    loading.style.display = "none";
  }
}
function displayBooks(books) {
  const container = document.getElementById("booksContainer");

  if (books.length === 0) {
    container.innerHTML = "<p>No books found</p>";
    return;
  }

  books.forEach(book => {
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