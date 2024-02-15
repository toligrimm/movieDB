// // const movies = [
// //     { title: "Форсаж", genre: "action", year: 2001 },
// //     { title: "1+1", genre: "drama", year: 2011 },
// //     { title: "Зеленая миля", genre: "drama", year: 1999 },
// //     { title: "В поисках Немо", genre: "animation", year: 2003 },
// //     // Добавьте больше фильмов по вашему выбору
// //   ];
  
// //   function renderMovies(filteredMovies) {
// //     const moviesList = document.getElementById("movies-list");
// //     moviesList.innerHTML = "";
// //     filteredMovies.forEach(movie => {
// //       const movieItem = document.createElement("div");
// //       movieItem.classList.add("movie-item");
// //       movieItem.innerHTML = `<span>${movie.title}</span> (${movie.genre}, ${movie.year})`;
// //       moviesList.appendChild(movieItem);
// //     });
// //   }
  
// //   function applyFilters() {
// //     const genre = document.getElementById("genre").value;
// //     const year = document.getElementById("year").value;
  
// //     let filteredMovies = movies;
  
// //     if (genre !== "all") {
// //       filteredMovies = filteredMovies.filter(movie => movie.genre === genre);
// //     }
  
// //     if (year !== "") {
// //       filteredMovies = filteredMovies.filter(movie => movie.year.toString() === year);
// //     }
  
// //     renderMovies(filteredMovies);
// //   }
  
// //   // Инициализация при загрузке страницы
// //   window.onload = function() {
// //     renderMovies(movies);
// //   };

// // Функция загрузки данных из CSV и отображения на странице
// function loadMoviesFromCSV(csvURL) {
//     fetch(csvURL)
//       .then(response => response.text())
//       .then(data => {
//         const movies = parseCSV(data);
//         renderMovies(movies);
//       })
//       .catch(error => console.error('Ошибка при загрузке данных из CSV:', error));
//   }
  
//   // Функция для парсинга данных CSV
//   function parseCSV(csvData) {
//     const rows = csvData.split('\n').slice(1); // Пропустить заголовок
//     const movies = [];
//     rows.forEach(row => {
//       const columns = row.split(',');
//       const movie = {
//         title: columns[0].trim(),
//         genre: columns[1].trim(),
//         year: parseInt(columns[2])
//       };
//       movies.push(movie);
//     });
//     return movies;
//   }
  
//   // Функция для отображения списка фильмов на странице
//   function renderMovies(movies) {
//     const moviesList = document.getElementById("movies-list");
//     moviesList.innerHTML = "";
//     movies.forEach(movie => {
//       const movieItem = document.createElement("div");
//       movieItem.classList.add("movie-item");
//       movieItem.innerHTML = `<span>${movie.title}</span> (${movie.genre}, ${movie.year})`;
//       moviesList.appendChild(movieItem);
//     });
//   }
  
//   // Вызов функции загрузки данных из CSV при загрузке страницы
//   window.onload = function() {
//     const googleSheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRFpvCsRnF4CB6HcbkhnKGZDqTlveaP6gcZzXrBojdSn4nAhdjtzcQX4A3JK-e8wl3N_WtRoPCK04rt/pub?gid=864620309&single=true&output=csv';
//     loadMoviesFromCSV(googleSheetURL);
//   };
  
  