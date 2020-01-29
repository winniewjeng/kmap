`use strict`;

console.log("hello");
let arr3 = [0,0,0,0,0,0,0,0];
var newGroup = [];
var submit = false;
function changeState(address) {
    arr3[convertToBinary(address)]++;
    if(arr3[convertToBinary(address)]%3==1) { // 1
        document.getElementById(`grid `+ address).style.backgroundColor = 'green';
        toGroups(address);
        // console.log(address);
    } else if (arr3[convertToBinary(address)]%3==2) { // don't care
        document.getElementById(`grid `+ address).style.backgroundColor = 'gray';
    } else { // 0
        document.getElementById(`grid `+ address).style.backgroundColor = 'orangered';
        removeFromGroup(address);
    }
    // printArr3();
}

function removeFromGroup(address) {
    for (var i=0; i < newGroup.length; i++) {
        if (newGroup[i]===address) {
            newGroup.splice(i, 1);
        }
    }
}

function calculate() {

    if (submit == false) {

    }
    console.log(newGroup);
    submit = true;
}

function convertToBinary(address) {
    // console.log(address[0]*4+address[1]*2+address[2]*1);
    return address[0]*4+address[1]*2+address[2]*1;
}

function printArr3() {
    console.log(arr3);
}

function toGroups(address) {
    newGroup.push(address);
    quickSortAddress(newGroup, 0, newGroup.length-1);
}

function quickSortAddress(arr, left, right) {
    var pivot, splitIndex;

    if (left < right) {
        pivot = right;
        splitIndex = split(arr, pivot, left, right);

        // sort left and right
        quickSortAddress(arr, left, splitIndex-1);
        quickSortAddress(arr, splitIndex+1, right);
    }
    
    // console.log(newGroup);

}

function split(arr, pivot, left, right) {
    var pivotValue = arr[pivot];
    var splitIndex = left;

    for(var i = left; i < right; i++) {
        if (arr[i]<pivotValue) {
            swapAddresses(arr, i, splitIndex);
            splitIndex++;
        }
    }
    swapAddresses(arr, right, splitIndex);
    return splitIndex;
}

function swapAddresses(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


