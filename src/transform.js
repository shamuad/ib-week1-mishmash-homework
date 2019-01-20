const result = {
    "20 and younger": 
        [{name: "pete", age: 10},
        { name: "dove", age: 17 }],
    "21-30": 
        [{name: "trey", age: 21},
        { name: "hann", age: 29 }],

}
const people = [
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 18 },
    { name: "hall", age: 19 },
    { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 }]

function groupAdultsByAgeRange(people) {
    const result = {}
    people.filter(person => person.age < 18)
    // result[1] = people.filter(person => person.age >= 21 && person.age <= 30)
    // result[2] = people.filter(person => person.age >= 31 && person.age <= 40)
    // result[3] = people.filter(person => person.age >= 41 && person.age <= 50)
    // result[4] = people.filter(person => person.age >= 51 )
    return result
}

// console.log(groupAdultsByAgeRange(people))

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange

