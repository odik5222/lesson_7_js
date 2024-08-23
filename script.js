//1
const words = ["peach", "apple", "grape", "apricot", "kiwi", "orange", "banana", "ananas"];

let wordsStartingWithA = words.filter(word => word.startsWith('a'));
console.log(wordsStartingWithA);

//2
let sortedWords = words.slice().sort();
console.log(sortedWords);

//3
let longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
console.log(longestWord);

//4
let totalLength = words.reduce((sum, word) => sum + word.length, 0);
console.log(totalLength);


/* 2 */
//1
let numbers = [42, "rAlex", "John", 18, 23, 100];
let names = ['lyler', 'Stark', 'Jake', 'Igor'];

let extractedNames = numbers.filter(item => typeof item === 'string');
numbers = numbers.filter(item => typeof item !== 'string');

names = names.concat(extractedNames);
console.log('Updated numbers:', numbers);
console.log('Updated names:', names);

//2
if (!names.includes("Constantin")) {
    names.push("Constantin");
}

console.log('Final names array:', names);