const user = {
    name: 'Amy',
    age: 16,
    
    changeName(newName){
        this.name = newName
    }
}

user.changeName('Mary')
console.log(user);

// Array
// Boolean
// Object

const names = ['Bob', 'John']

const student = {
    name: 'Maria',
    age: 16,
    course: 'Js'
}

const obj1 = Object.create(student);
console.log(obj1.name);

const obj2 = Object.create(user);
console.log(obj2.age);