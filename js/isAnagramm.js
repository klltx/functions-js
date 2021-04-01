function isAnagramm(str1, str2){
    const sortChars = function(str){
        return str.toLowerCase().trim().split('').sort().join('');
    };
    return sortChars(str1) === sortChars(str2);
}