


function calculator() {
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);

    return {
        add: function () {
            let res = a + b;
            result.innerText = res;
        },
        subtract: function () {
            let res = a - b;
            result.innerText = res;
        },
        multiply: function () {
            let res = a * b;
            result.innerText = res;
        },
        divide: function () {
            let res = a / b;
            result.innerText = res;
        },
    };


}


function power(a, b){
    let res = Math.pow(parseInt(a.value), parseInt(b.value));
    result.innerText = res;
}


// function add(a, b){
//     let res = parseInt(a.value) + parseInt(b.value);
//     console.log(res);
//     result.innerText = res;

// }

// function subtract(a, b){
//     let res = parseInt(a.value) - parseInt(b.value);
//     console.log(res);
//     result.innerText = res;

// }

// function multiply(a, b){
//     let res = parseInt(a.value) * parseInt(b.value);
//     console.log(res);
//     result.innerText = res;

// }

// function divide(a, b){
//     let res = parseInt(a.value) / parseInt(b.value);
//     console.log(res);
//     result.innerText = res;

// }
