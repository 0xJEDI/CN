// Activity 1

class Rental {
  constructor(name, address, contactNumber, availableMovies) {
    this.name = name;
    this.address = address;
    this.contactNumber = contactNumber;
    this.availableMovies = availableMovies;
  }

  getAvailableMovies() {
    return this.availableMovies;
  }

  addMovie(movie) {
    this.availableMovies.push(movie);
  }
}

const test = new Rental(
  "Video World",
  "123 My St",
  "555-555-5555",
  ["Friday", "The Godfather", "How High"]
);

console.log(test);
