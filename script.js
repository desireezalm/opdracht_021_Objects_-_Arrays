//DEEL 1
let person = {
    name: 'Desiree',
    age: 38,
    evaluations: undefined
};

// 3.
console.log(person);

//4.
console.log(person.name);

//5.
console.log(person.age);

//6.
person.name = 'Sterre';
person.age = 30;
console.log(person);

person['name'] = 'Jezebel';
person['age'] = 34;
console.log(person);

//7.
person['evaluations'] =  7, 10, 9;
console.log(person.evaluations);


//DEEL 2

let selectedColors = ['yellow', 'cyan', 'magenta'];

//3.
console.log(selectedColors);

//4.
console.log(selectedColors.length);

//5.
console.log(selectedColors[0]);

//6.
console.log(selectedColors.length -1);

//7.
selectedColors.push('purple');
console.log(selectedColors);

//8.
selectedColors.push(5);
console.log(selectedColors);

//9.
selectedColors.push({greeting: "hi ik ben een object"});
console.log(selectedColors[5]);


//DEEL 3

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
                        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]

//1.
console.log("Name cat 3:", catBreeds[2].name);

//2.
console.log("Energy level cat 1:", catBreeds[0].energy_level);

//3.
console.log("First temperament cat 2:", catBreeds[1].temperament[0]);

//4.
console.log("Last temperament cat 3:", catBreeds[2].temperament[4]);

//5.
console.log("Favourite food cat 3:", catBreeds[2].food.favourite_food);