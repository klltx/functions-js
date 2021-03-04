function longestString(arr){
    let res = '';

    for(let i = 0; i < arr.length; i++){
        res = res.length < arr[i].length ? arr[i] : res;
    }

    return res;
}