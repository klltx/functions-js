function isAnagramm(str1, str2){
    return str1.toLowerCase().trim().split('').reverse().join('') === str2.toLowerCase().trim();
}