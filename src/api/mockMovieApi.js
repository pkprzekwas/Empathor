import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const movies = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "caseyneistet",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "caseyneistat",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "MKBHD",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "kgonciarz",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "kgonciarz",
    length: "5:10",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (movie) => {
  return replaceAll(movie.title, ' ', '-');
};

class MovieApi {
  static getAllMovies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], movies));
      }, delay);
    });
  }

  static saveMovie(movie) {
    movie = Object.assign({}, movie); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minMovieTitleLength = 1;
        if (movie.title.length < minMovieTitleLength) {
          reject(`Title must be at least ${minMovieTitleLength} characters.`);
        }

        if (movie.id) {
          const existingMovieIndex = movies.findIndex(a => a.id === movie.id);
          movies.splice(existingMovieIndex, 1, movie);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new movies in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          movie.id = generateId(movie);
          movie.watchHref = `http://www.pluralsight.com/courses/${movie.id}`;
          movies.push(movie);
        }

        resolve(movie);
      }, delay);
    });
  }

  static deleteMovie(movieId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfMovieToDelete = movies.findIndex(movie => {
          movie.id === movieId;
        });
        movies.splice(indexOfMovieToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default MovieApi;
