const ranges = [
    [20, "20 and younger"],
    [30, "21-30"],
    [35, "31-35"],
    [40, "36-40"],
    [50, "41-50"],
    [undefined, "51 and older"]]

function groupAdultsByAgeRange(people) {
    return people
        .filter(person => person.age >= 18)
        .reduce((groups, person) => {
            const [, label] = ranges.find(
                ([max]) => max === undefined || person.age <= max)
            groups[label] = groups[label] || []
            groups[label].push(person)
            return groups
        }, {})
}
module.exports = { groupAdultsByAgeRange }


// return people.reduce((collection_of_groups, person) => {
//     // item is a person object

//     // collection_of_groups["20 and older"].push

//     // if statement
//     if (person.age < 20) {

//         collection_of_groups["20 and younger"].push(person)

//     } else if (person.age > 20 && person.age <30 ) {
//         ##group##.push(person);

//         //return { "20-30" : [ person] }
//     }

//     // push to some group
//     console.log(acc)
//     return collection_of_groups;
// }, {
//     "20 and ying": [],
// });

//    const result = {}
//    people.filter(person => person.age < 18)

//    arr[4] = "hi"

//    kelley["20 and older"] = []
// result["20 and older"] = people.filter(person => person.age >= 21 && person.age <= 30)
// result[2] = people.filter(person => person.age >= 31 && person.age <= 40)
// result[3] = people.filter(person => person.age >= 41 && person.age <= 50)
// result[4] = people.filter(person => person.age >= 51 )
// return result
// }

// groupAdultsByAgeRange(people)

// module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange

