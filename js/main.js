let arr = [];
let i = 0;

for(let i = 0; arr[arr.length - 1] !== '0'; i++){
    arr.push(prompt('Введите строку ' + i));
}

console.log('Самая длинная строка: ' + longestString(arr));

console.log('Наиболее встречающийся символ: ' + popularChar(longestString(arr)));

console.log('Замена наиболее встречающегося символа: ' + swapChar(longestString(arr), prompt('Символ для замены')));

let str1 = prompt('Строка анаграмма 1: ');
let str2 = prompt('Строка анаграмма 2: ');

console.log(str1 + ' ' + str2 + ': ' + isAnagramm(str1,str2));