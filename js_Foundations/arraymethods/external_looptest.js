function filterDogs(dog) {
    return dog.startsWith("D");
}

const dogs = ["Jeff", "Susan", "Mary", "Doggo", "fatDoggo", "NotaDog"];
const filtered = dogs.filter(filterDogs);
console.log(filtered);
