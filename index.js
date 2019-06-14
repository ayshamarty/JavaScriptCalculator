

function power(a, b){
    let res = Math.pow(parseInt(a.value), parseInt(b.value));
    result.innerText = res;
}

function goToResult(operation){
    sessionStorage.setItem('op', operation);
    sessionStorage.setItem('first', num1.value);
    sessionStorage.setItem('second', num2.value);
    window.location.href = "resultPage.html";
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
