const dogs = [
  {
    id: 1,
    name: "Affenpinscher",
    height: [{ imperial: "9 - 11.5", metric: "23 - 29" }],
    peso: [{ imperial: "6 - 13", metric: "83 - 6" }],
    img: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    life_span: "10 - 12 years",
    temperaments: [
      "Stubborn",
      "Curious",
      "Playful",
      "Adventurous",
      "Active",
      "Fun-loving",
    ],
  },
  {
    id: 170,
    name: "Afghan Hound",
    height: [{ imperial: "9-11", metric: "23-15" }],
    peso: [{ imperial: "9-16", metric: "23-18" }],
    img: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    life_span: "10 - 18 years",
    temperaments: ["Stubborn", "Curious", "Playful", "Adventurous"],
  },
  {
    id: 174,
    name: "African Hunting Dog",
    height: [{ imperial: "9-11", metric: "23-15" }],
    peso: [{ imperial: "9-16", metric: "23-18" }],
    img: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    life_span: "10 - 18 years",
    temperaments: ["Stubborn"],
  },
  {
    id: 170,
    name: "Airedale Terrier",
    height: [{ imperial: "9-11", metric: "23-15" }],
    peso: [{ imperial: "9-16", metric: "23-18" }],
    img: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    life_span: "10 - 18 years",
    temperaments: ["Stubborn", "Curious", "Play", "Adventurous"],
  },
];
function filtrar(dogs) {
  let filterDog = [];
  dogs.forEach((element) => {
    element.temperaments.forEach((e) => {
      if (e === "Playful") {
        filterDog.push(element);
      }
    });
  });
}
filtrar(dogs); //?

let words = ["perro", "gato", "pájaro", "pez"];
function weight() {
 return dogs.sort(function (a, b) {
    return (
      Number(b.peso[0].metric.split("-")[0]) -
      Number(a.peso[0].metric.split("-")[0])
    );

    
  });
} 
weight()//?
