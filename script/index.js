//1
const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "pic 5.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "pic 3.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "pic 4.jpg",
    rating: 5,
    comment: "Rich and creamy!",
  },
];
//*new 2
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("new-ramen-form");
  form.addEventListener("submit", handleFormSubmit);
});

//2
function displayRamens(){
    const ramenMenu= document.getElementById('ramen-menu');
    ramens.forEach(ramen=>{
        const img = document.createElement('img');
        img.src= ramen.image;
        img.alt=ramen.name;
        img.addEventListener('click', ()=> displayRamenDetails(ramen));
        ramenMenu.appendChild(img);
    })
}
//new 3*
function handleFormSubmit(event) {
  event.preventDefault(); // Prevents page refresh

  // Extract input values
  const name = document.getElementById("new-ramen-name").value;
  const restaurant = document.getElementById("new-ramen-restaurant").value;
  const image = document.getElementById("new-ramen-image").value;
  const rating = document.getElementById("new-ramen-rating").value;
  const comment = document.getElementById("new-ramen-comment").value;

  // Create a new ramen object
  const newRamen = {
    name,
    restaurant,
    image,
    rating,
    comment,
  };

  // Add the new ramen to the menu
  addRamenToMenu(newRamen);

  // Reset the form
  event.target.reset();
}
//3
// function displayRamenDetails(ramen) {
//     document.getElementById('ramen-image').src= ramen.image;
//     document.getElementById('ramen-name').textcontent=ramen.name;
//     document.getElementById('ramen-restaurant').textcontent= ramen.restaurant
//     document.getElementById('ramen-rating').textContent= 'Rating:${ramen.rating}';
//     document.getElementById('ramen-comment').textContent='Comment:${ramen.comment}';
// }

//4
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("new-ramen-form");
//   form.addEventListener("submit", handleFormSubmit);
// });

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

function addRamenToMenu(ramen) {
  const ramenMenu = document.getElementById("ramen-menu");

  // Create an img element for the new ramen
  const img = document.createElement("img");
  img.src = ramen.image;
  img.alt = ramen.name;

  // Add click event to display ramen details
  img.addEventListener("click", () => displayRamenDetails(ramen));

  // Append the new ramen image to the menu
  ramenMenu.appendChild(img);
}

function displayRamenDetails(ramen) {
  document.getElementById("ramen-image").src = ramen.image;
  document.getElementById("ramen-name").textContent = ramen.name;
  document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
  document.getElementById(
    "ramen-rating"
  ).textContent = `Rating: ${ramen.rating}`;
  document.getElementById(
    "ramen-comment"
  ).textContent = `Comment: ${ramen.comment}`;
}

// // function main() {
// //   displayRamens();
// //   addSubmitListener();
// }

// document.addEventListener("DOMContentLoaded", main);


