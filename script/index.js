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
//callback function for displayRamen(to display ramen detail)
const ramenDetail= document.querySelector("#ramen-detail")
const displayRamen= (ramen)=>{
    debugger
    ramenDetail.innerHTML = `
    <div id="ramen-detail">
      <img id="ramen-image" src="${ramen.image}" alt="${ramen.name}" />

    </div>
        <div class="overlay-text">${ramen.name}</div>
    `;
    
}
//to render/display ramen
displayRamen(ramens[0])

//Display all the images

  const ramenMenu = document.getElementById("ramen-menu");
  const displayRamens=(arrRamens)=>{
    arrRamens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", ()=>displayRamen(ramen));
    ramenMenu.appendChild(img);

  });
}

const addRamen = (event) => {
  event.preventDefault();
  debugger
  const formData = new FormData(ramenForm);
  console.log(formData.get("name"));
  const newRamen = {
    name: formData.get("name"),
    restaurant: formData.get("restaurant"),
    image: formData.get("image"),
    rating: formData.get("rating"),
    comment: formData.get("comment"),
  };
//   ramens.push(newRamen);
//   displayRamens(ramens);
  console.log(newRamen);
};

const ramenForm = document.querySelector("#ramenForm");
ramenForm.addEventListener("submit", addRamen);



function main() {
  displayRamens(ramens);
  //addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);
