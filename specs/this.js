const person = {
  name: "Mike",
  walk() {
    console.log(this);
  }
};

person.walk(); //this points to person because we used this inside the person object

//const walkPointer = person.walk; //walkPointer points to the function called walk()
//walkPointer(); //when this prints to the console, this will be undefined because it is pointing to global (window)

//const walkPointerBound = person.walk.bind(person);
//walkPointerBound(); //when this prints to the console, it will point to the person object again because we bound it
