`use strict`;

console.log("hello");
let arr = [0,0,0,0,0,0,0,0];

function changeState(address) {
    arr[convertToBinary(address)]++;
    if(arr[convertToBinary(address)]%3==1) {
        document.getElementById(`grid `+ address).style.backgroundColor = 'green';
    } else if (arr[convertToBinary(address)]%3==2) {
        document.getElementById(`grid `+ address).style.backgroundColor = 'gray';
    } else {
        document.getElementById(`grid `+ address).style.backgroundColor = 'orangered';
    }
    // printArr();
}

function convertToBinary(address) {
    // console.log(address[0]*4+address[1]*2+address[2]*1);
    return address[0]*4+address[1]*2+address[2]*1
}

function printArr() {
    console.log(arr)
}