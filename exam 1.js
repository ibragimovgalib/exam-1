// Task 1___________________________
function multiSum(n,cnt=10){
    if(cnt==0) return 0
    return n*cnt+multiSum(n,cnt-1)
}
console.log(multiSum(10));
console.log(multiSum(8));
console.log(multiSum(2));


// Task 2___________________________
function sendPassword(pass){
    return function(m){
        if(m===pass) return true
        else return false
    }
}
let make = sendPassword("softClub")
console.log(make("softClub"));

// Task 3___________________________
function oddishOrEven(n, s=0){
    for(let i=n;i>0;i/=10){
        s=s+Math.floor(i%10)
    }
    if(!(s%2)) return "Evenish"
    else return "Oddish"
}
console.log(oddishOrEven(4433));
console.log(oddishOrEven(111));

// Task 4___________________________
function addUp(n){
    let s=0
    for(let i=n;i>0;i--){
        s=s+i
    }
    return s
}
console.log(addUp(13));

// Task 5___________________________
function sumCubes(n){
    let s=0
    for(let i=1;i<=n;i++){
        s=s+i**3
    }
    return s
}
console.log(sumCubes(1));
console.log(sumCubes(8));
console.log(sumCubes(9));
