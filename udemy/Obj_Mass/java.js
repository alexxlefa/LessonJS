let arr = [1, 2, 3, 4, 5];

// метод POP удаляет последний элемент массива
arr.pop();

console.log(arr);

// метод PUSH добавляет элемент в конце массива значаение элемента в скобках

arr.push("8");

console.log(arr);

//  метод shift удаляет первый элемент массива
arr.shift();

console.log(arr);

// метод unshift доабваля элемент спереди массива
arr.unshift(9);

console.log(arr);


// перебор массивов
let arr = ["first", 2, 3, "четыре", 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach(function(item, i, mass){
    console.log(i + ': ' + item + " (массив: " + mass + ')');
});

console.log(arr);

let mass = [1, 2, 3, 4, 5];

for (let key of mass) {
    console.log(key);
}


let ans = prompt("","");

    arr = [];
arr = ans.split(', ');

console.log(arr);


let app = {arr: ['rkot', 'ad', 'sd']},
    i = artr.join(', '); 

    console.log(artr);

let appD = {arr: ['rkot', 'ad', 'sd']};

appD.arr.forEach(function(item) {
    console.log(item);
});

let y = 1; let x = y = 2;
console.log([1, 2] + 1 + 2);