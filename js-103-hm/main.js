const me = {
    name: "Andrey",
    age: 16,
    city: "Nizhniy Novgorod",
    sayHello: function(name) {
    return 'Hello ' + name;
    }
}

console.log(me.sayHello('Danil'))


const users = [
    { name: "Alexy", age: 25, isAdmin: false },
    { name: "Maria", age: 32, isAdmin: true },
    { name: "Michael", age: 40, isAdmin: false },
    { name: "Elen", age: 28, isAdmin: false },
    { name: "Kate", age: 35, isAdmin: true }
]

let simpleUsersCount = 0

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        simpleUsersCount++;
    }
}

console.log("Количество простых пользователей: " + simpleUsersCount)