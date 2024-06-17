function generate() {
  var author = {
    0: "This is quote 1",
    1: "This is quote 2",
    2: "This is quote 3",
    3: "This is quote 4",
  };
  var author = Object.keys(author);
  var author = author[Math.floor(Math.random() * author.length)];

  var author = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("authors").innerHTML = author;
}

// var keys =

// const cars = { 0: "vw", 1: "bmw", 2: "mercedes" };
// const keys = Object.keys(cars);

// console.log(keys);
