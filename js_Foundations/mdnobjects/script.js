const person = {
    name: {
        first: "Bob",
        last: "Smith",
    },
    age: 32,
    bio() {
        console.log(
            `${this.name[0]} ${this.name[1]} is ${this.age} years old.`
        );
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

// ------------------------------------------------------------

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
}

const salva = new Person("Salva"); // “new Person("Salva") creates a brand new object, makes 'this' point to it inside the constructor, assigns the properties (name, introduceSelf) onto it, and then returns that object. The variable salva ends up holding a reference to that new object.”

salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
