function popularChar(str){
    let indexPopularChar = 0;

    for(let i = 0; i < str.length; i++){
        indexPopularChar =
            charCount(str, str[indexPopularChar]) < charCount(str, str[i]) ? i : indexPopularChar;
    }

    return str[indexPopularChar];
}

function charCount(str, char){
    return str.split(char).length - 1;
}

function swapChar(str, char){
    let popChar = popularChar(str);

    let res = str.split(popChar).join(char);

    return res;
}