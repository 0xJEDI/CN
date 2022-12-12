class Rental {
  // Constructor for Rental class
  constructor(name, address, contactNumber, availableMovies) {
    // Set the name property
    this.name = name;
    // Set the address property
    this.address = address;
    // Set the contact number property
    this.contactNumber = contactNumber;
    // Set the list of available movies property
    this.availableMovies = availableMovies;
  }

  // Method to get a list of available movies
  getAvailableMovies() {
    // Map the available movies to a string in the format "title - $price"
    // and join the strings together with a new line character in between
    return this.availableMovies.map(movie => `${movie.title} - $${movie.price}`).join('\n');
  }

  // Method to add a movie to the list of available movies
  addMovie(movie, price) {
    // Add the movie to the list of available movies
    this.availableMovies.push({
      title: movie,
      price: price
    });
  }
}

// Create a new instance of the Rental class
const test = new Rental(
  'Video World',
  '123 My St',
  '555-555-5555',
  [
    {
      title: 'Shrek',
      price: 4.99
    },
    {
      title: 'Friday',
      price: 3.99
    },
    {
      title: 'How High',
      price: 5.99
    }
  ]
);

// Add a movie to the rental store
test.addMovie('Shrek 2', 3.99);

// Print the list of available movies
console.log(test.getAvailableMovies());