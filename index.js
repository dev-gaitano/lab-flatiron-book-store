const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!

// 1. Update Existing Element of title
const bookStoreTitle = document.getElementById('header');
bookStoreTitle.textContent = bookStore.name;

// 2. Create New Elements for each book
const bookList = document.getElementById('book-list');

bookStore.books.forEach(book => {
    // Create an li element called bookContainer
    const bookContainer = document.createElement('li');
    // Optionally set an ID for the container, e.g., book-1, book-2
    bookContainer.id = `book-${book.id}`;

    // Create an h3 element called bookTitle
    const bookTitle = document.createElement('h3');
    // Set bookTitle textContent to the title of the book
    bookTitle.textContent = book.title;

    // Create a p element called bookAuthor
    const bookAuthor = document.createElement('p');
    // Set bookAuthor textContent to the author of the book
    bookAuthor.textContent = book.author;

    // Create an img element called bookImage
    const bookImage = document.createElement('img');
    // Set bookImage src to the image url of the book
    bookImage.src = book.imageUrl;
    // Set alt text for accessibility
    bookImage.alt = `Cover image for ${book.title}`;

    // Append elements to html
    // Append bookTitle, bookAuthor, and bookImage elements to bookContainer element
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // Append bookContainer element to bookList
    bookList.appendChild(bookContainer);
});

// 3. BONUS CHALLENGE: Delete Element
// Delete the element with id of 'delete-this' from the DOM
const elementToDelete = document.getElementById('delete-this');
if (elementToDelete) {
    elementToDelete.remove();
}
