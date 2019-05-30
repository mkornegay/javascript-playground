class Person {

    
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set age(ageValue) {
        this._age = ageValue;
    }

    doWork() {
        return "person doing work";
    }
}

class Employee extends Person {

    constructor(title, name) {
        super(name);
        this._title = title;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }
    
    doWork() {
        super();
        return `${laborHours} worth of work was done.`;
    }
}

let p = new Person('Sara');
let e = new Employee('Vice President', 'Mike');
p.age = 52;
console.log(`The instance p is named ${p.name} and is ${p.age} years old.`);
console.log(`The instance e is named ${e.name} and is a ${e.title}.`);


