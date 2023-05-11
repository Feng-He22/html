// Define the books as an array of objects
const books = [
	{
	  image: 'Image/Fate.Apocrypha.webp',
	  title: 'Fate.Apocrypha',
	  description: 'Fate/Apocrypha is a story based around a Holy Grail War separate from that of the five Fuyuki Wars.',
	  genre: 'fiction',
	  pdf: 'pdf/Fate.Apocrypha - Volume 01.pdf'
	},
	{
	  image: 'Image/Classroom of the Elite.jpg',
	  title: 'Classroom of the Elite',
	  description: 'When Kiyotaka enters government-sponsored elite high school, he finds out just how merit-based this education system is',
	  genre: 'mystery',
	  pdf: 'pdf/Classroom of the Elite (Light Novel) Vol. 1.pdf'
	},
	{
	  image: 'Image/Chitose Is in the Ramune Bottle.jpg',
	  title: 'Chitose Is in the Ramune Bottle',
	  description: 'It’s hard to beat Saku Chitose. The most popular kid in his high school?',
	  genre: 'romance',
	  pdf: 'pdf/Chitose Is in the Ramune Bottle, Vol. 1.pdf'
	},
	{
	  image: 'Image/The Angel Next Door Spoils Me Rotten.jpg',
	  title: 'The Angel Next Door Spoils Me Rotten',
	  description: 'Amane Fujimiya’s neighbour in the apartment he lives in is the school’s number one lovable angele',
	  genre: 'fantasy',
	  pdf: 'pdf/The Angel Next Door Spoils Me Rotten, Vol. 1.pdf'
	},
	{
	  image: 'Image/Overlord.webp',
	  title: 'Overlord',
	  description: 'An office worker in a dystopian world logs onto a video game for the last time only to find out that he, along with his entire guild, has been transported to another reality.',
	  genre: 'fiction',
	  pdf: 'pdf/Overlord, Vol. 1_ The Undead King.pdf'
	},
	{
	  image: 'Image/Sword Art Online.webp',
	  title: 'Sword Art Online',
	  description: 'multiplayer virtual-reality game that takes a deadly turn when players discover they can not  escape of their own will but must play to victory or to death.',
	  genre: 'mystery',
	  pdf: 'pdf/Sword Art Online 1_ Aincrad.pdf'
	},
	{
	  image: 'Image/Toaru Majutsu no Index.webp',
	  title: 'Toaru Majutsu no Index ',
	  description: 'a boy with an unusual gift - and curse - and his encounters with the worlds of science and magic.',
	  genre: 'fiction',
	  pdf: 'pdf/Toaru Majutsu no Index - Volume 01 [Yen Press].pdf'
	},
	{
	  image: 'Image/Toradora.webp',
	  title: 'Toradora! ',
	  description: 'revolves around Ryuuji Takasu, despite his gentle personality, his eyes make him look like an intimidating delinquent.',
	  genre: 'romance',
	  pdf: 'pdf/Toradora! Vol. 1.pdf'
	}
  ];
  
  // Get the genre dropdown and book container
  const genreDropdown = document.getElementById('genre-dropdown');
  const bookContainer = document.getElementById('book-container');
  
  // Function to display the books
  function displayBooks() {
	// Clear the book container
	bookContainer.innerHTML = '';
  
	// Get the selected genre
	const selectedGenre = genreDropdown.value;
  
	// Loop through the books and display them if they match the selected genre or if all genres are selected
	books.forEach(book => {
	  if (selectedGenre === 'all' || book.genre === selectedGenre) {
		const bookBox = document.createElement('div');
		bookBox.className = 'book-box';
  
		const bookImage = document.createElement('img');
		bookImage.className = 'book-image';
		bookImage.src = book.image;
		bookImage.alt = book.title;
		bookBox.appendChild(bookImage);
  
		const bookTitle = document.createElement('h2');
		bookTitle.className = 'book-title';
		bookTitle.textContent = book.title;
		bookBox.appendChild(bookTitle);
  
		const bookDescription = document.createElement('p');
		bookDescription.className = 'book-description';
		bookDescription.textContent = book.description;
		bookBox.appendChild(bookDescription);
  
		const readButton = document.createElement('button');
		readButton.className = 'read-button';
		readButton.textContent = 'Read';
		readButton.addEventListener('click', () => {
		  window.location.href = book.pdf;
		});
		bookBox.appendChild(readButton);
	  
		bookContainer.appendChild(bookBox);
	  }
	});
  }
  
  // Add event listener to the genre dropdown to filter the books
  genreDropdown.addEventListener('change', displayBooks);
  
  // Display the books on page load
  displayBooks();

  // Get the search input element
const searchInput = document.getElementById('search-bar');

// Function to filter the books based on search term and selected genre
function filterBooks() {
  // Get the selected genre
  const selectedGenre = genreDropdown.value;

  // Get the search term and convert to lowercase
  const searchTerm = searchInput.value.toLowerCase();

  // Filter the books based on search term and selected genre
  const filteredBooks = books.filter(book => {
    return (selectedGenre === 'all' || book.genre === selectedGenre) && 
           (searchTerm === '' || book.title.toLowerCase().includes(searchTerm));
  });

  return filteredBooks;
}

// Function to display the filtered books
function displayFilteredBooks() {
  // Clear the book container
  bookContainer.innerHTML = '';

  // Get the filtered books
  const filteredBooks = filterBooks();

  // Loop through the filtered books and display them
  filteredBooks.forEach(book => {
    const bookBox = document.createElement('div');
    bookBox.className = 'book-box';

    const bookImage = document.createElement('img');
    bookImage.className = 'book-image';
    bookImage.src = book.image;
    bookImage.alt = book.title;
    bookBox.appendChild(bookImage);

    const bookTitle = document.createElement('h2');
    bookTitle.className = 'book-title';
    bookTitle.textContent = book.title;
    bookBox.appendChild(bookTitle);

    const bookDescription = document.createElement('p');
    bookDescription.className = 'book-description';
    bookDescription.textContent = book.description;
    bookBox.appendChild(bookDescription);

    const readButton = document.createElement('button');
    readButton.className = 'read-button';
    readButton.textContent = 'Read';
    readButton.addEventListener('click', () => {
      window.location.href = book.pdf;
    });
    bookBox.appendChild(readButton);
  
    bookContainer.appendChild(bookBox);
  });

  // If no books match the filter, display a message
  if (filteredBooks.length === 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No books found.';
    bookContainer.appendChild(noResultsMessage);
  }
}

// Add event listener to the search input to filter the books as the user types
searchInput.addEventListener('input', displayFilteredBooks);

// Display the books on page load
displayFilteredBooks();
  

  
  