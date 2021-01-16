// Zadanie 1
// Napisz funkcję która dla przekazanego argumentu zwróci typ danych. Dla obiektów dodatkowo powinna zostać zwrócona nazwa klasy.
// Przykład:
// Dla wartości `1` zwracana wartość to `"number"`
// Dla wartości `new Date()` zwracana wartość to `"object Date"`
// Dla wartości `fetch('https://api.github.com/users/juszczak')` zwracana wartość to `"object Promise"`

// let x = new Date();
// const dataType = (x) => {
//     console.log(typeof(x), typeof(x) === 'object' ? x.constructor.name : '');
// }
// dataType(x);

// Zadanie 2
// Napisz funkcję która odwróci kolejność cyfr dla przekazanej w argumencie liczby.
// Przykład:
// Dla liczby `32243` zwracana wartość to `34223`

// let x = 123;
// let reverseNumber = number => {
//     console.log(number.toString()
//     .split('')
//     .reverse()
//     .join(''));
// }
// reverseNumber(x);

// Zadanie 3
// Napisz funkcję obliczającą Liczbę Trójkątną* o numerze przekazanym jako argument.
// Przykład:
// Dla wartości `3` zwracana wartość to `6`
// Dla wartości `6` zwracna wartość to `21`
// Wersja zaawansowana
// Funkcja powinna obliczać Liczbę Czworościenną.
// Przykład:
// Dla wartości `3` zwracna wartość to `10`
// Dla wartości `8` zwracna wartość to `120`
// > *[Liczba trójkątna](https://pl.wikipedia.org/wiki/Liczba_tr%C3%B3jk%C4%85tna)
// > *[Liczby czworościenne](https://pl.wikipedia.org/wiki/Liczby_czworo%C5%9Bcienne)

// let x = 6;
// let liczbaTrojkatna = (number) => {
//     console.log((number*(number+1))/2);
// }
// liczbaTrojkatna(x);


// Zadanie 4
// Napisz funkcję która dla przekazanego w argumencie wyrazu zwróci tablicę wszystkich możliwych permutacji* liter.
// Przykład:
// Dla tekstu `DOG` zwracana wartość to `['DOG', 'ODG', 'GDO', 'DGO', 'OGD', 'GOD']`
// > *[Permutacja](https://pl.wikipedia.org/wiki/Permutacja)

// let x = 'dog';
// let permutation2 = (word) => {
//     let array = word.split('');
//     let first;
//     for (let i = 0; i < array.length; i++){
//         console.log(array);
//         let first = array.splice(i, 1);
//         array = array.concat(first);
//     }
// }
// permutation2(x);
// nie umiem, nie potrafie, nie umiem

// internet
// let dog = 'dog'
// let permArr = [], usedChars = [];
// function permutation(input) {
//   let i,
//   ch,
//   chars = input.split("");
//   for (i = 0; i < chars.length; i++) {
//     ch = chars.splice(i, 1);
//     usedChars.push(ch);
//     if (chars.length == 0)
//     permArr[permArr.length] = usedChars.join("");
//     permutation(chars.join(""));
//     chars.splice(i, 0, ch);
//     usedChars.pop();
//   }
//   return permArr
// };
// permutation(dog)

// Zadanie 5
// Napisz funkcje pozwalające zakodować oraz odkodować wiadomości Szyfrem Cezara*.
// > *[Szyfr Cezara](https://pl.wikipedia.org/wiki/Szyfr_Cezara)

// let word = "kupazyxa";
// let code = 1;
// let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','u','p','q','r','s','t','u','v','w','x','y','z'];
// let cezar = (code,word) => {
//     let arrayWord = word.split('');
//     let arrayCode = [];
//     arrayWord.forEach(element => {
//         arrayCode.push(alphabet[(alphabet.indexOf(element) + code) >= alphabet.length ? (alphabet.indexOf(element) + code) - alphabet.length : alphabet.indexOf(element) + code]);
//     });
//     console.log(arrayCode);
// }
// cezar(code, word)

// Zadanie 6
// Napisz funkcję która oblicza minimalną liczbę kroków wymaganych rozwiązania problemu Wież Hanoi*.
// > *[Wieże Hanoi](https://pl.wikipedia.org/wiki/Wie%C5%BCe_Hanoi)

// const x = 3;
// let hanoi = number => {
//     console.log(Math.pow(2,number) - 1);
// }
// hanoi(x);

// Zadanie 7
// Napisz funkcję `flatten` która dla przekazanej tablicy tablic zwróci tablicę składającą się z elementów tablic wewnętrznych.
// Przykład:
// Dla tablicy `[[1, 2], [3, 4]]` zwracana wartość to `[1, 2, 3, 4]`
// Wersja zaawansowana:
// Dodaj obsługę dowolnego zagnieżdżenia tablic.
// Przykład:
// Dla tablicy `[1, [2], [[3, 4], [5]]]` zwracana wartość to `[1, 2, 3, 4, 5]`

// let doubleArray = [[1, 2], [3, 4]];
// let newArray = [];
// let txt = [];
// const flatten = () => {
// doubleArray.forEach(element => {
//     if(element.constructor === Array){
//     txt = element.join(',');
//     }
//     let asd = txt.split(',');
//     newArray = newArray.concat(asd);
// });
// console.log(newArray);
// }
// flatten();