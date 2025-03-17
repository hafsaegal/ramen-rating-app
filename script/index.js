//1
const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "/images/pic1.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "/images/pic 2.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "/images/pic 3.jpg",
    rating: 4,
    comment: "Rich and creamy!",
  },
  {
    id: 4,
    name: "Gyukotsu Ramen",
    restaurant: "Tenya",
    image: "/images/pic 4.jpg",
    rating: 5,
    comment: "Tasty!",
  },
  {
    id: 5,
    name: "Naruto Ramen",
    restaurant: "Samenya",
    image: "/images/pic 5.jpg",
    rating: 5,
    comment: "Heavenly!",
  },
];

//2
function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");
  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", displayRamenDetails(ramen));
    ramenMenu.appendChild(img);
console.log(ramen);

  });
}

// //*new 2, reversed with the above, pushed down
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("new-ramen-form");
//   form.addEventListener("submit", handleFormSubmit);
// });

// 3; //commented out
function displayRamenDetails(ramen) {
  document.getElementById("ramen-image").src = ramen.image;
  document.getElementById("ramen-name").textcontent = ramen.name;
  document.getElementById("ramen-restaurant").textcontent = ramen.restaurant;
  document.getElementById("ramen-rating").textContent =
    "Rating:${ramen.rating}";
  document.getElementById("ramen-comment").textContent =
    "Comment:${ramen.comment}";
}

//new 3*
// function handleFormSubmit(event) {
//   event.preventDefault(); // Prevents page refresh

//   // Extract input values
//   const name = document.getElementById("new-ramen-name").value;
//   const restaurant = document.getElementById("new-ramen-restaurant").value;
//   const image = document.getElementById("new-ramen-image").value;
//   const rating = document.getElementById("new-ramen-rating").value;
//   const comment = document.getElementById("new-ramen-comment").value;

//   // Create a new ramen object
//   const newRamen = {
//     name,
//     restaurant,
//     image,
//     rating,
//     comment,
//   };

//   // Add the new ramen to the menu
//   addRamenToMenu(newRamen);

//   // Reset the form
//   event.target.reset();
// }
3; //commented out
function displayRamenDetails(ramen) {
  document.getElementById("ramen-image").src = ramen.image;
  document.getElementById("ramen-name").textcontent = ramen.name;
  document.getElementById("ramen-restaurant").textcontent = ramen.restaurant;
  document.getElementById("ramen-rating").textContent =
    "Rating:${ramen.rating}";
  document.getElementById("ramen-comment").textContent =
    "Comment:${ramen.comment}";
}

document
  .getElementById("new-ramen-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const newRamen = {
      id: ramens.length + 1,
      name: document.getElementById("new-ramen-name").value,
      restaurant: document.getElementById("new-ramen-restaurant").value,
      image: document.getElementById("new-ramen-image").value,
      rating: document.getElementById("new-ramen-rating").value,
      comment: document.getElementById("new-ramen-comment").value,
    };
    ramens.push(newRamen);
    addRamenToMenu(newRamen);
    this.reset();
  });

function addRamenToMenu(ramen) {
  const ramenMenu = document.getElementById("ramen-menu");
  const img = document.createElement("img");
  img.src = ramen.image;
  img.alt = ramen.name;
  img.addEventListener("click", () => displayRamenDetails(ramen));
  ramenMenu.appendChild(img);
}

//4//commented out
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("new-ramen-form");
//   form.addEventListener("submit", handleFormSubmit);
// });
//commented out
// function handleFormSubmit(event) {
//   event.preventDefault(); // Prevents page refresh

//   // Extract input values//commented out
//   const name = document.getElementById("new-ramen-name").value;
//   const restaurant = document.getElementById("new-ramen-restaurant").value;
//   const image = document.getElementById("new-ramen-image").value;
//   const rating = document.getElementById("new-ramen-rating").value;
//   const comment = document.getElementById("new-ramen-comment").value;
//commented out
//   // Create a new ramen object
//   const newRamen = {
//     name,
//     restaurant,
//     image,
//     rating,
//     comment,
//   };

//   // Add the new ramen to the menu
//   addRamenToMenu(newRamen);

//   // Reset the form
//   event.target.reset();
// }
//commented out
// function addRamenToMenu(ramen) {
//   const ramenMenu = document.getElementById("ramen-menu");

//   // Create an img element for the new ramen
//   const img = document.createElement("img");
//   img.src = ramen.image;
//   img.alt = ramen.name;

//   // Add click event to display ramen details
//   img.addEventListener("click", () => displayRamenDetails(ramen));

//   // Append the new ramen image to the menu
//   ramenMenu.appendChild(img);
// }

// function displayRamenDetails(ramens) {
//   document.getElementById("ramen-image").src = ramens.image;
//   document.getElementById("ramen-name").textContent = ramens.name;
//   document.getElementById("ramen-restaurant").textContent = ramens.restaurant;
//   document.getElementById(
//     "ramen-rating"
//   ).textContent = `Rating: ${ramens.rating}`;
//   document.getElementById(
//     "ramen-comment"
//   ).textContent = `Comment: ${ramens.comment}`;
// }
//commented out
function main() {
  displayRamens();
  addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);
